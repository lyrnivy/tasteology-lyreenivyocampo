const cardData = [
    {
      title: "RED",
      image: "assets/images/red-spoon.png",
      text: "Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.",
      link: "https://example.com/red"
    },
    {
      title: "Green",
      image: "assets/images/green-spoon.png",
      text: "Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours.",
      link: "https://example.com/green"
    },
    {
      title: "White",
      image: "assets/images/white-spoon.png",
      text: "White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.",
      link: "https://example.com/white"
    }
  ];

  export function initCards() {
    const container = document.querySelector('.cards-block__grid');
    if (!container) return;
  
    // Render cards with the Title as the Link
    container.innerHTML = cardData.map(card => `
      <article class="card">
        <div class="card__image-wrapper">
          <img src="${card.image}" alt="${card.title} food sample" class="card__image">
        </div>
        <h3 class="card__label">
          <a href="${card.link}" class="card__title-link" target="_blank" rel="noopener noreferrer">
            ${card.title}
          </a>
        </h3>
        <p class="card__text">${card.text}</p>
      </article>
    `).join('');
  
    // As part of requirement: Adding console log clicks to console
    container.addEventListener('click', (e) => {
      const link = e.target.closest('.card__title-link');
      if (link) {
        console.log(`Card Link Clicked: ${link.href}`);
      }
    });
  }