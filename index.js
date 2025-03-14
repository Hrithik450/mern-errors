const a0_0x135216 = a0_0x546d;
(function (_0x21af4f, _0x242708) {
  const _0x366f05 = a0_0x546d,
    _0x2322e1 = _0x21af4f();
  while (!![]) {
    try {
      const _0x4811e2 =
        parseInt(_0x366f05(0x12b)) / 0x1 +
        parseInt(_0x366f05(0x11f)) / 0x2 +
        parseInt(_0x366f05(0x12f)) / 0x3 +
        (-parseInt(_0x366f05(0x12c)) / 0x4) *
          (-parseInt(_0x366f05(0x11b)) / 0x5) +
        -parseInt(_0x366f05(0x126)) / 0x6 +
        parseInt(_0x366f05(0x120)) / 0x7 +
        -parseInt(_0x366f05(0x11a)) / 0x8;
      if (_0x4811e2 === _0x242708) break;
      else _0x2322e1["push"](_0x2322e1["shift"]());
    } catch (_0x368ab4) {
      _0x2322e1["push"](_0x2322e1["shift"]());
    }
  }
})(a0_0x589a, 0xc4504);
import a0_0x400543 from "fs";
import a0_0x281054 from "axios";
import { checkLicense, errorHandler, generateUUID } from "./main.js";
function a0_0x546d(_0x5c8baa, _0x4f19a3) {
  const _0x589a6f = a0_0x589a();
  return (
    (a0_0x546d = function (_0x546d1d, _0x55b16f) {
      _0x546d1d = _0x546d1d - 0x117;
      let _0x5a82f1 = _0x589a6f[_0x546d1d];
      return _0x5a82f1;
    }),
    a0_0x546d(_0x5c8baa, _0x4f19a3)
  );
}
console[a0_0x135216(0x12e)](a0_0x135216(0x121));
function cleanup() {
  const _0x5347cc = a0_0x135216;
  try {
    a0_0x400543[_0x5347cc(0x124)](zipPath) &&
      a0_0x400543[_0x5347cc(0x125)](zipPath),
      a0_0x400543[_0x5347cc(0x124)](setupDir) &&
        a0_0x400543[_0x5347cc(0x123)](setupDir, {
          recursive: !![],
          force: !![],
        }),
      console["log"](_0x5347cc(0x128));
  } catch (_0x5d873a) {
    console[_0x5347cc(0x127)]("❌\x20Cleanup\x20failed:", _0x5d873a["message"]);
  }
}
const package_name = a0_0x135216(0x129);
(async () => {
  const _0x2c449a = a0_0x135216;
  try {
    const _0x1a8e51 = await checkLicense(package_name);
    if (!_0x1a8e51) throw new Error(_0x2c449a(0x11d));
    const _0xe7fcc6 = await generateUUID();
    await a0_0x281054["post"](
      Buffer["from"](_0x2c449a(0x117), _0x2c449a(0x122))[_0x2c449a(0x12d)](
        "utf-8"
      ),
      { packageName: package_name, uuid: _0xe7fcc6 }
    );
  } catch (_0xe37c7c) {
    console[_0x2c449a(0x127)](_0x2c449a(0x11e)), process[_0x2c449a(0x130)](0x1);
  }
})(),
  process["on"](a0_0x135216(0x130), cleanup),
  process["on"](a0_0x135216(0x12a), () => {
    const _0x3c0cfd = a0_0x135216;
    console[_0x3c0cfd(0x12e)](_0x3c0cfd(0x119)),
      cleanup(),
      process["exit"](0x1);
  }),
  process["on"](a0_0x135216(0x118), (_0x3b6f5f) => {
    const _0x1227c2 = a0_0x135216;
    console[_0x1227c2(0x127)](_0x1227c2(0x11c), _0x3b6f5f),
      cleanup(),
      process[_0x1227c2(0x130)](0x1);
  });
export { errorHandler };
function a0_0x589a() {
  const _0x15d7a7 = [
    "unlinkSync",
    "7373934nZWdMw",
    "error",
    "✅\x20Completed\x20successfully!",
    "mern-errors",
    "SIGINT",
    "1113313bocqkF",
    "1313788ESNumv",
    "toString",
    "log",
    "2429019LsrvPZ",
    "exit",
    "aHR0cHM6Ly9ocnV0aGlrLmFwaS5hbm94LnN0b3JlL2FwaS92MS9wYXltZW50L2NoZWNrVHJpYWw=",
    "uncaughtException",
    "\x0a⚠️\x20\x20Process\x20interrupted.\x20Cleaning\x20up...",
    "18306632lWXonP",
    "10geVPbC",
    "🚨\x20Uncaught\x20Exception:",
    "Unauthorized\x20usage\x20detected.",
    "🚨\x20Access\x20Denied:\x20You\x20must\x20have\x20a\x20valid\x20license\x20to\x20use\x20this\x20package.",
    "3116482OPCgML",
    "1283079xDEtEk",
    "\x0a\x20\x20=================================\x0a\x20\x20🚀\x20Thank\x20you\x20for\x20choosing\x20CodeEaseX!\x0a\x20\x20=================================\x0a",
    "base64",
    "rmSync",
    "existsSync",
  ];
  a0_0x589a = function () {
    return _0x15d7a7;
  };
  return a0_0x589a();
}
