
function runScript(details) {
    if(details.frameId === 0) {
        chrome.scripting.executeScript({
            target: {tabId: details.tabId},
            files: ['scripts/content.js']
        });
    }
}

chrome.webRequest.onCompleted.addListener(
    runScript, {
        urls: ["*://pje.tjmg.jus.br/*"]
    }
);
