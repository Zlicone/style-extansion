document.getElementById("applyBtn").addEventListener("click", async () => {
  let bgColor = document.getElementById("bgColor").value;
  let fontSize = document.getElementById("fontSize").value;
  let fontFamily = document.getElementById("fontFamily").value;

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: (bgColor, fontSize, fontFamily) => {
      document.body.style.backgroundColor = bgColor;
      document.body.style.fontSize = fontSize + "px";
      document.body.style.fontFamily = fontFamily;
    },
    args: [bgColor, fontSize, fontFamily]
  });
});

document.getElementById("resetBtn").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      document.body.style.backgroundColor = "";
      document.body.style.fontSize = "";
      document.body.style.fontFamily = "";
    }
  });
});
