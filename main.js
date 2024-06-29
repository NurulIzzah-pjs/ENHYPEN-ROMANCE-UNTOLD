let isFlipped = false;

/*-- Download Card ------*/

function downloadCard() {
    var card = document.getElementById('districtCard');
    var scale = 2; // Scaling factor for higher resolution

    // Temporarily disable transitions for accurate rendering
    card.style.transition = 'none';

    // Ensure both sides are visible
    var cardFront = document.getElementById('cardFront');
    var cardBack = document.getElementById('cardBack');
    cardFront.style.visibility = 'visible';
    cardBack.style.visibility = 'visible';

    // Delay to ensure DOM updates are applied before rendering
    setTimeout(() => {
        // Convert card to base64 data URL
        domtoimage.toPng(card, {
            width: card.offsetWidth * scale,
            height: card.offsetHeight * scale,
            style: {
                transform: 'scale(' + scale + ')',
                transformOrigin: 'top left',
                width: card.offsetWidth + 'px',
                height: card.offsetHeight + 'px'
            }
        }).then((dataUrl) => {
            // Create a temporary anchor element
            var link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'JJONG-BOND.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }).catch(function(error) {
            console.error('Failed to download image:', error);
        }).finally(() => {
            // Re-enable transitions and reset visibility
            card.style.transition = '';
            cardFront.style.visibility = '';
            cardBack.style.visibility = '';
        });
    }, 100);

    
}
