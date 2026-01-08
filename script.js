document.addEventListener('DOMContentLoaded', () => {
    const mobileUserAgent = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    // Detect OS
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isIOS) {
        // iOS doesn't support 'intent://'. Revert to custom schemes for Rakuten.
        // ENEOS and d Point now use Universal Links/OneLink so they don't need overrides.
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
