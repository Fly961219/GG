(function() {
    // 1. 隐藏广告元素
    function hideAds() {
        var adElementsById = ['ad-banner', 'advert', 'ad-container'];
        adElementsById.forEach(function(id) {
            var ad = document.getElementById(id);
            if (ad) {
                ad.style.display = 'none';
            }
        });

        var adElementsByClass = ['ads', 'ad-box', 'ad-section'];
        adElementsByClass.forEach(function(className) {
            var ads = document.getElementsByClassName(className);
            for (var i = 0; i < ads.length; i++) {
                ads[i].style.display = 'none';
            }
        });
    }

    // 2. 拦截广告请求
    var originalFetch = window.fetch;
    window.fetch = function() {
        var url = arguments[0];
        if (url.includes('ads') || url.includes('track') || url.includes('banner')) {
            console.log('Blocked ad request: ', url);
            return Promise.reject('Ad request blocked');
        }
        return originalFetch.apply(this, arguments);
    };

    // 3. 移除广告脚本
    function removeAdScripts() {
        var scripts = document.querySelectorAll('script');
        scripts.forEach(function(script) {
            if (script.src.includes('ads') || script.src.includes('tracking')) {
                script.remove();
                console.log('Removed ad script: ', script.src);
            }
        });
    }

    // 观察DOM变化并执行相关操作
    var observer = new MutationObserver(function(mutations) {
        hideAds();
        removeAdScripts();
    });

    observer.observe(document.body, { 
        childList: true,
        subtree: true
    });

    // 初始执行
    hideAds();
    removeAdScripts();
})();
