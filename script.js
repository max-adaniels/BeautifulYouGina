document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.getElementById('share-btn');

    if (shareButton) {
        shareButton.addEventListener('click', () => {
            if (navigator.share) {
                navigator.share({
                    title: 'Beautiful You PE',
                    text: 'Book your premium beauty services in Gqeberha',
                    url: window.location.href
                })
                .then(() => console.log('Shared successfully'))
                .catch((err) => console.error('Error sharing:', err));
            } else {
                // Fallback for unsupported browsers
                navigator.clipboard.writeText(window.location.href)
                    .then(() => alert('Link copied to clipboard!'))
                    .catch(() => alert('Sharing not supported on this browser.'));
            }
        });
    }
});