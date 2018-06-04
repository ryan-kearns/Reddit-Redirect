chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        return { redirectUrl: "https://old.reddit.com/" + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1] };
    },
    {
        urls: [
            "*://reddit.com/*",
            "*://www.reddit.com/*",
            "*://reddit.co.uk/*",
            "*://www.reddit.co.uk/*",
            "*://reddit.ca/*",
            "*://www.reddit.ca/*"
            ],
        types: [
            "main_frame",
            "sub_frame",
            "stylesheet",
            "script",
            "image",
            "object",
            "xmlhttprequest",
            "other"
            ]
    },
    ["blocking"]
);
