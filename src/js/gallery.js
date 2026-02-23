const galleryData = [
    { src: "/assets/images/pan-boil.png", alt: "Pot cooking with glutinous rice", isLarge: true },
    { src: "/assets/images/chef-hands.png", alt: "Chef prepping", isLarge: false },
    { src: "/assets/images/egg-tray.png", alt: "Egg cracks in a tray", isLarge: false },
  ];
  
  export function initGallery() {
    const galleryContainer = document.querySelector('.gallery');
    if (!galleryContainer) return;
  
    // Render the Gallery Items
    galleryContainer.innerHTML = galleryData.map(item => `
      <button class="gallery__item ${item.isLarge ? 'gallery__item--large' : ''}" 
              data-image="${item.src}" 
              aria-label="View larger image: ${item.alt}">
        <img class="gallery__image" src="${item.src}" alt="${item.alt}"/>
      </button>
    `).join('');
  
    // Inject Modal HTML into the body 
    document.body.insertAdjacentHTML('beforeend', `
      <div id="image-modal" class="modal" role="dialog" aria-modal="true" aria-hidden="true">
        <div class="modal__overlay" data-close></div>
        <div class="modal__content">
          <button class="modal__close" aria-label="Close modal" data-close>&times;</button>
          <img src="" alt="" class="modal__image">
        </div>
      </div>
    `);
  
    const modal = document.getElementById('image-modal');
    const modalImg = modal.querySelector('.modal__image');
  
    // Open Logic (Event Delegation)
    galleryContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.gallery__item');
      if (!btn) return;
  
      modalImg.src = btn.dataset.image;
      modalImg.alt = btn.querySelector('img').alt;
      modal.setAttribute('aria-hidden', 'false'); // Show modal
      document.body.style.overflow = 'hidden';    // Disable scroll
    });
  
    // Close Logic
    const closeModal = () => {
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = ''; // Enable scroll
    };
  
    modal.addEventListener('click', (e) => {
      if (e.target.hasAttribute('data-close')) closeModal();
    });
  
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal();
    });
  }