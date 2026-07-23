const navToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

const packData = {
  cartoon: {
    title: 'Cartoon Wallpapers Pack',
    description: 'A cheerful collection of original cartoon artwork with playful colors and crisp lines.',
    headline: 'Bright, stylized wallpapers for phones and desktops.',
    includes: [
      '5 cartoon-themed wallpapers',
      'Phone and desktop ready sizes',
      'Free sample available',
      'High-quality PNG previews'
    ],
    images: ['images/cartoon-1.svg', 'images/cartoon-2.svg', 'images/hero-wallpaper.svg'],
    buttonText: 'Buy Cartoon Pack',
    badge: 'Cartoon Pack',
    buyLink: 'https://ikoam-singh.itch.io/the-best-phone-wallpapers-pack',
    giftTitle: 'Cartoon Reward Card',
    giftDescription: 'Unlock a cartoon-themed gift card for bonus wallpapers on your next download. Not redeemable for cash.',
    giftButton: 'Claim Cartoon Gift Card',
    giftLink: 'downloads/wallpaper-gift-card.svg'
  },
  cosmic: {
    title: 'Cosmic Wallpapers Pack',
    description: 'A premium space-inspired set with galaxies, planets, and futuristic skies.',
    headline: 'Cosmic visuals for immersive screen backgrounds.',
    includes: [
      '5 cosmic-themed wallpapers',
      'Galaxy and planet art',
      'Free sample included',
      'High-resolution quality'
    ],
    images: ['images/cosmic-1.svg', 'images/cosmic-2.svg', 'images/hero-wallpaper.svg'],
    buttonText: 'Buy Cosmic Pack',
    badge: 'Cosmic Pack',
    buyLink: 'https://ikoam-singh.itch.io/the-best-phone-wallpapers-pack',
    giftTitle: 'Cosmic Reward Card',
    giftDescription: 'Get a cosmic gift card for future wallpaper drops and bonus art releases. Not redeemable for cash.',
    giftButton: 'Claim Cosmic Gift Card',
    giftLink: 'downloads/wallpaper-gift-card.svg'
  }
};

function applyPack(packKey) {
  const pack = packData[packKey] || packData.cartoon;
  const title = document.getElementById('product-title');
  const description = document.getElementById('product-description');
  const headline = document.getElementById('product-headline');
  const copy = document.getElementById('product-copy');
  const includes = document.getElementById('product-includes');
  const previewGrid = document.getElementById('preview-grid');
  const buyButton = document.getElementById('buy-button');
  const badge = document.getElementById('product-badge');
  const sampleButton = document.getElementById('sample-button');

  const giftTitle = document.getElementById('gift-title');
  const giftDescription = document.getElementById('gift-description');
  const giftLink = document.getElementById('gift-link');

  if (!title || !description || !headline || !copy || !includes || !previewGrid || !buyButton || !badge || !sampleButton || !giftTitle || !giftDescription || !giftLink) {
    return;
  }

  title.textContent = pack.title;
  description.textContent = pack.description;
  headline.textContent = pack.headline;
  copy.textContent = 'This product page highlights the full premium pack with a free sample available for immediate download.';
  badge.textContent = pack.badge;
  buyButton.textContent = pack.buttonText;
  buyButton.href = pack.buyLink;
  sampleButton.href = 'downloads/free-wallpaper.svg';
  giftTitle.textContent = pack.giftTitle;
  giftDescription.textContent = pack.giftDescription;
  giftLink.textContent = pack.giftButton;
  giftLink.href = pack.giftLink;
  giftLink.setAttribute('download', 'wallpaper-gift-card.svg');

  includes.innerHTML = pack.includes.map(item => `<li>${item}</li>`).join('');
  previewGrid.innerHTML = pack.images.map(src => `
    <article class="preview-card">
      <img src="${src}" alt="Preview wallpaper">
    </article>
  `).join('');
}

function getQueryParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

const packKey = getQueryParam('pack');
if (window.location.pathname.endsWith('product.html')) {
  applyPack(packKey);
}
