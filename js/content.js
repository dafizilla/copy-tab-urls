function handleMessages(message, sender, sendResponse) {
    if (message.method == "showUrls") {
        removeEverything();
        insertUrls(message.urls);
        window.scrollTo(0, 0);        
    }
}

function removeEverything() {
  while (document.body.firstChild) {
    document.body.firstChild.remove();
  }
}

function insertUrls(urls) {
  var textarea = document.createElement("textarea");
  textarea.setAttribute('style', 'width: 100%');
  textarea.setAttribute('rows', '40');
  textarea.appendChild(document.createTextNode(urls.join('\n\n')));
  document.body.appendChild(textarea);
}

chrome.runtime.onMessage.addListener(handleMessages);
