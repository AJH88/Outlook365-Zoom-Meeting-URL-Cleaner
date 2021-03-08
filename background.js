chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
    	if (details.url.slice(-1) == ';'){
    		let new_url = details.url.slice(0, -1);
        	return {
            	redirectUrl: new_url
        	};
        };
    },
    {urls: ['https://*.zoom.us/j/*', 'https://*.zoom.us/s/*', 'https://*.zoom.us/my/*', 'https://*.zoom.us/w/*'], types: ['main_frame']},
    ['blocking']
);
