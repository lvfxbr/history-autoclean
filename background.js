chrome.runtime.onStartup.addListener(function () {
    const time = new Date();

    chrome.browsingData.remove(
        {},
        {
            appcache: true,
            cache: true,
            cacheStorage: true,
            cookies: true,
            downloads: true,
            fileSystems: true,
            formData: true,
            history: true,
            indexedDB: true,
            localStorage: true,
            passwords: true,
            serviceWorkers: true,
            webSQL: true,
        },
        () => {
            console.log(
                `[${new Date().toString()}] Cleared browsing data in ${
                    new Date().getTime() - time.getTime()
                }ms.`
            );
        }
    );
});
