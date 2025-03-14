import fs from "fs";
import os from "os";
import path from "path";
import axios from "axios";
import { execSync, spawn } from "child_process";
import { GoogleGenerativeAI } from "@google/generative-ai";

const homePath = os.homedir();
const codeEasePath = path.join(homePath, ".codeEaseX");

const genAI = new GoogleGenerativeAI("AIzaSyC-xTCULiakdFPjzplp4gy4SiquClKx4HU");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function processAndFormatError(stackTrace) {
  try {
    const prompt = `${stackTrace}\n
  Error = {
    "fileLocation": "string", // user written code file location, where the error is happened: ex:- C:/Users/User/OneDrive/Desktop/mern-starter-kit/mern-errors/index.js
    "rootCause": "string", // root cause in simple human readable english language (try to keep in 1-3 line max) like ex:- syntax is missing at this line and what is the error name, ex:- TypeError
    "suggestion": "string", // code suggestion of correct code, (try to keep in 1-3 line max) explanation
    "correctSnippet": "string" // doesn't require entire file codebase.
  }
  Return: Object<Error>
  `;
    const result = await model.generateContent(prompt);
    const response = result.response;
    const responseText = response.text();

    const start = responseText.indexOf("{");
    const end = responseText.lastIndexOf("}");

    if (start === -1 || end === -1 || start >= end) {
      return null;
    }

    const jsonString = responseText.substring(start, end + 1);
    const errorData = JSON.parse(jsonString);

    const formattedReport = `
  # 🛠 Error Report:
  **📂 File Location:**  
  \`${errorData.fileLocation}\`\n
  ## ❌ Issue (Root Cause)
  ${errorData.rootCause}\n
  ## ✅ Suggested Solution
  ${errorData.suggestion}\n
  ## 📝 Corrected Code Example
  ${errorData.correctSnippet}`;

    fs.writeFileSync("error.md", formattedReport, "utf-8");

    const yellowColor = "\x1b[33m";
    const redColor = "\x1b[31m";
    const resetColor = "\x1b[0m";

    console.log(
      `${redColor}Error occurred at ${errorData.fileLocation}${resetColor}`
    );
    console.log(`${redColor}Error cause: ${errorData.rootCause}${resetColor}`);
    console.log(
      `${yellowColor}You can see error.md file for more details${resetColor}`
    );
  } catch (error) {
    console.error("Server is Busy, try again later");
  }
}

export async function errorHandler(err, req, res, next) {
  const stackTrace = err.stack;

  try {
    await processAndFormatError(stackTrace);
  } catch (error) {
    console.error("Server is Busy!!");
  }
}

export async function generateUUID() {
  let uuid;

  if (os.platform() === "win32") {
    uuid = execSync("wmic csproduct get UUID").toString().split("\n")[1].trim();
  } else if (os.platform() === "linux") {
    uuid = execSync("cat /var/lib/dbus/machine-id").toString().trim();
  } else if (os.platform() === "darwin") {
    uuid = execSync(
      "ioreg -rd1 -c IOPlatformExpertDevice | awk -F'\"' '/IOPlatformUUID/ {print $4}'"
    )
      .toString()
      .trim();
  }

  return uuid;
}

function getLicenseToken(packageName) {
  if (!fs.existsSync(codeEasePath)) return null;

  const lines = fs.readFileSync(codeEasePath, "utf-8").split("\n");

  for (const line of lines) {
    if (line.startsWith(`${packageName}=`)) {
      return line.split("=")[1].trim();
    }
  }

  return null;
}

function saveLicenseToken(packageName, token) {
  let updatedLines = [];
  let found = false;

  if (fs.existsSync(codeEasePath)) {
    const lines = fs.readFileSync(codeEasePath, "utf-8").split("\n");

    for (const line of lines) {
      if (line.startsWith(`${packageName}=`)) {
        updatedLines.push(`${packageName}=${token}`);
        found = true;
      } else {
        updatedLines.push(line);
      }
    }
  }

  if (!found) {
    updatedLines.push(`${packageName}=${token}`);
  }

  fs.writeFileSync(codeEasePath, updatedLines.join("\n"));
  fs.chmodSync(codeEasePath, 0o400);
}

export async function checkLicense(packageName) {
  try {
    let licenseToken = getLicenseToken(packageName);

    if (licenseToken) {
      const uuid = await generateUUID();
      const checkResponse = await axios.post(
        Buffer.from(
          "aHR0cHM6Ly9ocnV0aGlrLmFwaS5hbm94LnN0b3JlL2FwaS92MS9wYXltZW50L2NoZWNrLXBheW1lbnQ=",
          "base64"
        ).toString("utf-8"),
        {
          packageName: packageName,
        },
        {
          headers: {
            "X-License-Key": uuid,
          },
        }
      );

      if (checkResponse.data.credentials.status === "completed") {
        console.log("✅ verified user, Proceeding...");
        return true;
      }
    }

    const uuid = await generateUUID();
    const response = await axios.post(
      Buffer.from(
        "aHR0cHM6Ly9ocnV0aGlrLmFwaS5hbm94LnN0b3JlL2FwaS92MS9wYXltZW50L3JlZ2lzdGVy",
        "base64"
      ).toString("utf-8"),
      {
        packageName: packageName,
      },
      {
        headers: {
          "X-License-Key": uuid,
        },
      }
    );

    if (response.data.success) {
      if (response.data.freeTrial === "active") {
        console.log("✅ Free Trial Activated...");
        saveLicenseToken(packageName, response.data.license);
        return true;
      }

      console.log("Press \x1b[32mENTER\x1b[0m to proceed with the payment.");
      process.stdin.setRawMode(true);
      process.stdin.resume();

      return new Promise((resolve) => {
        process.stdin.on("data", async () => {
          process.stdin.setRawMode(false);
          process.stdin.pause();

          console.log("\nRedirecting to payment page...");

          const url = `${Buffer.from(
            "aHR0cHM6Ly9ocnV0aGlrLmFub3guc3RvcmUvcGF5bWVudA==",
            "base64"
          ).toString("utf-8")}/${packageName}/${uuid}`;

          if (os.platform() === "win32") {
            execSync(`start "" "${url}"`, {
              stdio: "ignore",
            });
          } else if (os.platform() === "darwin") {
            execSync(`open "${url}"`, {
              stdio: "ignore",
              detached: true,
            });
          } else {
            execSync(`nohup xdg-open "${url}" > /dev/null 2>&1 &`, {
              stdio: "ignore",
              detached: true,
            });
          }

          console.log("🔄 Waiting for payment confirmation...");

          let tokenReceived = false;
          let attempts = 0;
          const maxAttempts = 45;

          while (!tokenReceived && attempts < maxAttempts) {
            await new Promise((r) => setTimeout(r, 15000));
            attempts++;

            const checkResponse = await axios.post(
              Buffer.from(
                "aHR0cHM6Ly9ocnV0aGlrLmFwaS5hbm94LnN0b3JlL2FwaS92MS9wYXltZW50L2NoZWNrLXBheW1lbnQ=",
                "base64"
              ).toString("utf-8"),
              {
                packageName: packageName,
              },
              {
                headers: {
                  "X-License-Key": uuid,
                },
              }
            );

            console.log("🔍 Checking, Please wait!!");

            if (checkResponse.data.credentials.status === "completed") {
              saveLicenseToken(
                packageName,
                checkResponse.data.credentials.license
              );
              console.log("✅ Payment Successfull...");
              tokenReceived = true;
              resolve(true);
              return true;
            }
          }

          console.log("❌ Payment check timed out. Please try again.");
          process.exit(1);
        });
      });
    }
  } catch (error) {
    console.log(error);
    console.log("❌ Server is busy, try again later!!");
    process.exit(1);
  }
}
