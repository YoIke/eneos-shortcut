document.addEventListener('DOMContentLoaded', () => {
    const mobileUserAgent = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    // Detect OS
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isAndroid) {
        // Android: Force app launch by package name. 
        // Correct package ID verified as 'com.eneos.ssapp'
        const eneosPackage = "com.eneos.ssapp";
        const eneosIntent = `intent:#Intent;package=${eneosPackage};S.browser_fallback_url=https://play.google.com/store/apps/details?id=${eneosPackage};end`;
        document.querySelector('.eneos').href = eneosIntent;
    }

    if (isIOS) {
        // iOS: Standard Universal Link usually works. 
        // Rakuten often requires custom scheme or it falls back to web.
        document.querySelector('.rakuten').href = "rakutenpay://";
    }

    // Optional: add visual feedback or clipboard copy on click if it fails?
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (navigator.vibrate) {
                navigator.vibrate(50);
            }
        });
    });

    console.log("ENEOS Shortcuts Loaded. Device is mobile:", mobileUserAgent);
});
