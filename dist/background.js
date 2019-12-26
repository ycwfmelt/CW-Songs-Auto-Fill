let rule = {
    conditions: [
        new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'cwsong.akb48-china.com', schemes: ['http', 'https'] }
        })
    ],
    actions: [
        new chrome.declarativeContent.ShowPageAction()
    ]
}

chrome.runtime.onInstalled.addListener(function () {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([rule])
    })
})

