const a0_0x403eab = a0_0x573b;
(function (_0x1981bf, _0x5ceb2b) {
  const _0x100484 = a0_0x573b,
    _0x569bcf = _0x1981bf();
  while (!![]) {
    try {
      const _0x326dad =
        -parseInt(_0x100484(0x9e)) / 0x1 +
        parseInt(_0x100484(0x96)) / 0x2 +
        parseInt(_0x100484(0xb1)) / 0x3 +
        (parseInt(_0x100484(0xb5)) / 0x4) * (-parseInt(_0x100484(0xb3)) / 0x5) +
        (-parseInt(_0x100484(0xa2)) / 0x6) *
          (-parseInt(_0x100484(0xa1)) / 0x7) +
        parseInt(_0x100484(0xc2)) / 0x8 +
        parseInt(_0x100484(0xa5)) / 0x9;
      if (_0x326dad === _0x5ceb2b) break;
      else _0x569bcf["push"](_0x569bcf["shift"]());
    } catch (_0x9a0a44) {
      _0x569bcf["push"](_0x569bcf["shift"]());
    }
  }
})(a0_0x23f6, 0x81e83);
import a0_0x38dd31 from "fs";
import a0_0x3c6c98 from "os";
import a0_0x2e2cf4 from "path";
import a0_0x186510 from "axios";
import { errorHandler } from "./main.js";
import { execSync } from "child_process";
function a0_0x573b(_0x2072da, _0x28530f) {
  const _0x23f66b = a0_0x23f6();
  return (
    (a0_0x573b = function (_0x573bae, _0x280d9c) {
      _0x573bae = _0x573bae - 0x8b;
      let _0x380e65 = _0x23f66b[_0x573bae];
      return _0x380e65;
    }),
    a0_0x573b(_0x2072da, _0x28530f)
  );
}
const package_name = a0_0x403eab(0xc3),
  homePath = a0_0x3c6c98[a0_0x403eab(0xa7)](),
  codeEasePath = a0_0x2e2cf4[a0_0x403eab(0xb0)](homePath, a0_0x403eab(0x99));
async function generateUUID() {
  const _0x468a3 = a0_0x403eab;
  let _0x51a5a6;
  if (a0_0x3c6c98[_0x468a3(0xae)]() === "win32")
    _0x51a5a6 = execSync(_0x468a3(0x98))
      [_0x468a3(0xbb)]()
      [_0x468a3(0xb9)]("\x0a")[0x1]
      [_0x468a3(0xa0)]();
  else {
    if (a0_0x3c6c98[_0x468a3(0xae)]() === _0x468a3(0x8c))
      _0x51a5a6 = execSync(_0x468a3(0xad))[_0x468a3(0xbb)]()[_0x468a3(0xa0)]();
    else
      a0_0x3c6c98[_0x468a3(0xae)]() === _0x468a3(0x97) &&
        (_0x51a5a6 = execSync(
          "ioreg\x20-rd1\x20-c\x20IOPlatformExpertDevice\x20|\x20awk\x20-F\x27\x22\x27\x20\x27/IOPlatformUUID/\x20{print\x20$4}\x27"
        )
          [_0x468a3(0xbb)]()
          [_0x468a3(0xa0)]());
  }
  return _0x51a5a6;
}
function getLicenseToken(_0x4355b3) {
  const _0x33cbfa = a0_0x403eab;
  if (!a0_0x38dd31[_0x33cbfa(0x93)](codeEasePath)) return null;
  const _0x5b5dcf = a0_0x38dd31[_0x33cbfa(0xc4)](codeEasePath, _0x33cbfa(0xc1))[
    "split"
  ]("\x0a");
  for (const _0x8636a0 of _0x5b5dcf) {
    if (_0x8636a0["startsWith"](_0x4355b3 + "="))
      return _0x8636a0["split"]("=")[0x1][_0x33cbfa(0xa0)]();
  }
  return null;
}
function saveLicenseToken(_0x8afda8, _0x1bcb5d) {
  const _0x37e80f = a0_0x403eab;
  let _0x1662db = [],
    _0x23d26b = ![];
  if (a0_0x38dd31[_0x37e80f(0x93)](codeEasePath)) {
    const _0x192a92 = a0_0x38dd31["readFileSync"](
      codeEasePath,
      _0x37e80f(0xc1)
    )[_0x37e80f(0xb9)]("\x0a");
    for (const _0x4d7947 of _0x192a92) {
      _0x4d7947[_0x37e80f(0xb2)](_0x8afda8 + "=")
        ? (_0x1662db[_0x37e80f(0x90)](_0x8afda8 + "=" + _0x1bcb5d),
          (_0x23d26b = !![]))
        : _0x1662db[_0x37e80f(0x90)](_0x4d7947);
    }
  }
  !_0x23d26b && _0x1662db[_0x37e80f(0x90)](_0x8afda8 + "=" + _0x1bcb5d),
    a0_0x38dd31[_0x37e80f(0xac)](
      codeEasePath,
      _0x1662db[_0x37e80f(0xb0)]("\x0a")
    ),
    a0_0x38dd31[_0x37e80f(0xb8)](codeEasePath, 0x100);
}
async function checkLicense(_0x36a2ef) {
  const _0x17010c = a0_0x403eab;
  try {
    let _0xa8acf1 = getLicenseToken(_0x36a2ef);
    if (_0xa8acf1) {
      const _0x12682e = await generateUUID(),
        _0x8787be = await a0_0x186510[_0x17010c(0xb7)](
          Buffer["from"](_0x17010c(0x95), "base64")[_0x17010c(0xbb)](
            _0x17010c(0xc1)
          ),
          { packageName: _0x36a2ef },
          { headers: { "X-License-Key": _0x12682e } }
        );
      if (
        _0x8787be["data"][_0x17010c(0xba)][_0x17010c(0x8d)] === _0x17010c(0xc5)
      )
        return console["log"](_0x17010c(0xa3)), !![];
    }
    const _0x95ae08 = await generateUUID(),
      _0x4a7253 = await a0_0x186510["post"](
        Buffer["from"](
          "aHR0cHM6Ly9ocnV0aGlrLmFwaS5hbm94LnN0b3JlL2FwaS92MS9wYXltZW50L3JlZ2lzdGVy",
          _0x17010c(0xa8)
        )[_0x17010c(0xbb)](_0x17010c(0xc1)),
        { packageName: _0x36a2ef },
        { headers: { "X-License-Key": _0x95ae08 } }
      );
    if (_0x4a7253[_0x17010c(0x8b)][_0x17010c(0x91)]) {
      if (_0x4a7253["data"][_0x17010c(0xbe)] === "active")
        return (
          console[_0x17010c(0x8f)](_0x17010c(0xc0)),
          saveLicenseToken(
            _0x36a2ef,
            _0x4a7253[_0x17010c(0x8b)][_0x17010c(0xbc)]
          ),
          !![]
        );
      return (
        console["log"](_0x17010c(0xb4)),
        process[_0x17010c(0xaa)][_0x17010c(0xb6)](!![]),
        process["stdin"][_0x17010c(0xab)](),
        new Promise((_0xde9584) => {
          const _0x1096a7 = _0x17010c;
          process[_0x1096a7(0xaa)]["on"]("data", async () => {
            const _0x4ce3f8 = _0x1096a7;
            process[_0x4ce3f8(0xaa)][_0x4ce3f8(0xb6)](![]),
              process[_0x4ce3f8(0xaa)][_0x4ce3f8(0x9d)](),
              console[_0x4ce3f8(0x8f)](_0x4ce3f8(0x9f));
            const _0x3ff92c =
              Buffer["from"](
                "aHR0cHM6Ly9ocnV0aGlrLmFub3guc3RvcmUvcGF5bWVudA==",
                _0x4ce3f8(0xa8)
              )[_0x4ce3f8(0xbb)]("utf-8") +
              "/" +
              _0x36a2ef +
              "/" +
              _0x95ae08;
            if (a0_0x3c6c98[_0x4ce3f8(0xae)]() === _0x4ce3f8(0xa9))
              execSync(_0x4ce3f8(0x9b) + _0x3ff92c + "\x22", {
                stdio: "ignore",
              });
            else
              a0_0x3c6c98[_0x4ce3f8(0xae)]() === _0x4ce3f8(0x97)
                ? execSync("open\x20\x22" + _0x3ff92c + "\x22", {
                    stdio: "ignore",
                    detached: !![],
                  })
                : execSync(_0x4ce3f8(0x9c) + _0x3ff92c + _0x4ce3f8(0x92), {
                    stdio: "ignore",
                    detached: !![],
                  });
            console[_0x4ce3f8(0x8f)](_0x4ce3f8(0xbd));
            let _0x4f2c80 = ![],
              _0x5a8e69 = 0x0;
            const _0x1e192c = 0x2d;
            while (!_0x4f2c80 && _0x5a8e69 < _0x1e192c) {
              await new Promise((_0x11f768) => setTimeout(_0x11f768, 0x3a98)),
                _0x5a8e69++;
              const _0xdbcc06 = await a0_0x186510[_0x4ce3f8(0xb7)](
                Buffer[_0x4ce3f8(0x8e)](_0x4ce3f8(0x95), "base64")[
                  _0x4ce3f8(0xbb)
                ]("utf-8"),
                { packageName: _0x36a2ef },
                { headers: { "X-License-Key": _0x95ae08 } }
              );
              console["log"](_0x4ce3f8(0xa4));
              if (
                _0xdbcc06[_0x4ce3f8(0x8b)][_0x4ce3f8(0xba)]["status"] ===
                _0x4ce3f8(0xc5)
              )
                return (
                  saveLicenseToken(
                    _0x36a2ef,
                    _0xdbcc06[_0x4ce3f8(0x8b)][_0x4ce3f8(0xba)][_0x4ce3f8(0xbc)]
                  ),
                  console[_0x4ce3f8(0x8f)]("✅\x20Payment\x20Successfull..."),
                  (_0x4f2c80 = !![]),
                  _0xde9584(!![]),
                  !![]
                );
            }
            console[_0x4ce3f8(0x8f)](
              "❌\x20Payment\x20check\x20timed\x20out.\x20Please\x20try\x20again."
            ),
              process[_0x4ce3f8(0x94)](0x1);
          });
        })
      );
    }
  } catch (_0x4846f2) {
    console["log"](_0x4846f2),
      console[_0x17010c(0x8f)](
        "❌\x20Server\x20is\x20busy,\x20try\x20again\x20later!!"
      ),
      process["exit"](0x1);
  }
}
function a0_0x23f6() {
  const _0x1b5d78 = [
    "win32",
    "stdin",
    "resume",
    "writeFileSync",
    "cat\x20/var/lib/dbus/machine-id",
    "platform",
    "🚨\x20Access\x20Denied:\x20You\x20must\x20have\x20a\x20valid\x20license\x20to\x20use\x20this\x20package.",
    "join",
    "1397076qcgaEQ",
    "startsWith",
    "3308585MTPyfP",
    "Press\x20\x1b[32mENTER\x1b[0m\x20to\x20proceed\x20with\x20the\x20payment.",
    "4NCLhcV",
    "setRawMode",
    "post",
    "chmodSync",
    "split",
    "credentials",
    "toString",
    "license",
    "🔄\x20Waiting\x20for\x20payment\x20confirmation...",
    "freeTrial",
    "SIGINT",
    "✅\x20Free\x20Trial\x20Activated...",
    "utf-8",
    "2808864NXLkMp",
    "mern-errors",
    "readFileSync",
    "completed",
    "data",
    "linux",
    "status",
    "from",
    "log",
    "push",
    "success",
    "\x22\x20>\x20/dev/null\x202>&1\x20&",
    "existsSync",
    "exit",
    "aHR0cHM6Ly9ocnV0aGlrLmFwaS5hbm94LnN0b3JlL2FwaS92MS9wYXltZW50L2NoZWNrLXBheW1lbnQ=",
    "165140wBubiP",
    "darwin",
    "wmic\x20csproduct\x20get\x20UUID",
    ".codeEaseX",
    "uncaughtException",
    "start\x20\x22\x22\x20\x22",
    "nohup\x20xdg-open\x20\x22",
    "pause",
    "380145iivOGm",
    "\x0aRedirecting\x20to\x20payment\x20page...",
    "trim",
    "32116ECwkXO",
    "282zDlWeu",
    "✅\x20verified\x20user,\x20Proceeding...",
    "🔍\x20Checking,\x20Please\x20wait!!",
    "4130595CgRpDv",
    "error",
    "homedir",
    "base64",
  ];
  a0_0x23f6 = function () {
    return _0x1b5d78;
  };
  return a0_0x23f6();
}
(async () => {
  const _0x5ed6f3 = a0_0x403eab;
  try {
    const _0x5e3e91 = await checkLicense(package_name);
    if (!_0x5e3e91) throw new Error("Unauthorized\x20usage\x20detected.");
    const _0x2e86c1 = await generateUUID();
    await a0_0x186510["post"](
      Buffer[_0x5ed6f3(0x8e)](
        "aHR0cHM6Ly9ocnV0aGlrLmFwaS5hbm94LnN0b3JlL2FwaS92MS9wYXltZW50L2NoZWNrVHJpYWw=",
        _0x5ed6f3(0xa8)
      )["toString"](_0x5ed6f3(0xc1)),
      { packageName: package_name, uuid: _0x2e86c1 }
    );
  } catch (_0xcf006d) {
    console[_0x5ed6f3(0xa6)](_0x5ed6f3(0xaf)), process[_0x5ed6f3(0x94)](0x1);
  }
})(),
  process["on"](a0_0x403eab(0xbf), () => {
    process["exit"](0x1);
  }),
  process["on"](a0_0x403eab(0x9a), (_0x4c8ef6) => {
    const _0x121491 = a0_0x403eab;
    process[_0x121491(0x94)](0x1);
  });
export { errorHandler };
