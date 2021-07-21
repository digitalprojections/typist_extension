let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});


async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

/*
// This block is new!
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

	var rm = request.message;
	messeageSender(rm);
  }
);
function messeageSender(x)
{
	  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];    
	chrome.tabs.sendMessage(activeTab.id, {"message": x}, function(response) {console.log(response.message);});	
  });
	
	  //sendResponse( {message:request.message + " rec"} );	  
	
}*/