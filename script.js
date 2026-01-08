document.addEventListener('DOMContentLoaded', () => {
    const mobileUserAgent = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    // Simple click handler for visual feedback
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Visual feedback handled by CSS active state primarily
            // Could add haptic feedback here if device supports it in PWA context
            if (navigator.vibrate) {
                navigator.vibrate(50);
            }
        });
    });

    // Android Intent fallback logic for ENEOS if simple scheme fails?
    // This is complex to do purely in JS without a backend redirection or universally working approach.
    // Making a "best effort" attempt for Android devices to use intents if the scheme is guessed wrong.
    // For now, sticking to the standard links as per plan.

    console.log("ENEOS Shortcuts Loaded. Device is mobile:", mobileUserAgent);
});
