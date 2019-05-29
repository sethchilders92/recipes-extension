chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "sending_document" ) {
      let recipe = request.recipe;
      chrome.storage.local.set(JSON.parse(recipe), function() {
        console.log(request.recipe)
      });
    }
  }
);

// chrome.runtime.onInstalled.addListener(function() {
//   chrome.storage.local.set({color: '#3aa757'}, function() {
//     console.log('The color is green.');
//     // console.log(document)
//   });
//   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//     chrome.declarativeContent.onPageChanged.addRules([{
//       conditions: [new chrome.declarativeContent.PageStateMatcher({
//         pageUrl: {hostEquals: 'https://tasty.co/recipe/*'},
//       })
//       ],
//           actions: [new chrome.declarativeContent.ShowPageAction()]
//     }]);
//   });
// });

// Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //   var activeTab = tabs[0];
  //   chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  // });
// });
