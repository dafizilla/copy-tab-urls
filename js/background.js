function copyTabs(tab) {
  chrome.tabs.query({currentWindow: true}, function(tabs) {
    var urls = getUrls(tabs);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {method: "showUrls", urls: urls});
    });
  });
}

function getUrls(tabs) {
  var urls = [];
  tabs.forEach(function(tab) {
    if (tab.url.indexOf('http') == 0) {
      urls.push(tab.url);
    }
  });
  return urls;
}

chrome.browserAction.onClicked.addListener(copyTabs);
