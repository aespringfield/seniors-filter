document.getElementById('showSeniors').onclick = function(event) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            {file: './seniorsFilter.js'});
      });
}