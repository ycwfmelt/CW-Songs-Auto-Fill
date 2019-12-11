let rule = {
    conditions: [
        new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'cwsong.akb48-china.com', schemes: ['http', 'https'] }
        }),
        new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'developer.chrome.com', schemes: ['https'] }
        })
    ],
    actions: [
        new chrome.declarativeContent.ShowPageAction()
    ]
}

chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.local.set({ color: 'green' }, function () {
        console.log('welcome.')
    })
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([rule])
    })
})

