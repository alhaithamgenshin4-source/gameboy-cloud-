function sendKey(key, type) {
  if (!window.EJS_emulator) return;
  window.EJS_emulator.sendKey(key, type);
}

// D-Pad
document.querySelector(".dpad").addEventListener("touchstart", () => {
  sendKey("UP", "down");
});
document.querySelector(".dpad").addEventListener("touchend", () => {
  sendKey("UP", "up");
});

// A / B
document.querySelectorAll(".ab button")[0]
  .addEventListener("touchstart", () => sendKey("A", "down"));
document.querySelectorAll(".ab button")[0]
  .addEventListener("touchend", () => sendKey("A", "up"));

document.querySelectorAll(".ab button")[1]
  .addEventListener("touchstart", () => sendKey("B", "down"));
document.querySelectorAll(".ab button")[1]
  .addEventListener("touchend", () => sendKey("B", "up"));
