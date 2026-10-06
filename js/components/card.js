// Componente Card: recebe os dados de um NFT e devolve o <article> pronto.
function createCard(nft) {
  const card = document.createElement('article');
  card.className = 'card';

  // "1 day left" no singular, "3 days left" no plural
  const days = nft.daysLeft === 1 ? 'day' : 'days';

  card.innerHTML = `
    <a href="#" class="card__image" aria-label="View ${nft.title} #${nft.number}">
      <img src="${nft.image}" alt="${nft.title} NFT artwork" class="card__picture">
      <span class="card__overlay"><img src="images/icon-view.svg" alt=""></span>
    </a>

    <h2 class="card__title"><a href="#">${nft.title} #${nft.number}</a></h2>
    <p class="card__description">${nft.description}</p>

    <div class="card__info">
      <span class="card__price"><img src="images/icon-ethereum.svg" alt="">${nft.price.toFixed(3)} ETH</span>
      <span class="card__time"><img src="images/icon-clock.svg" alt="">${nft.daysLeft} ${days} left</span>
    </div>

    <div class="card__creator">
      <img src="${nft.avatar}" alt="" class="card__avatar">
      <p>Creation of <a href="#">${nft.creator}</a></p>
    </div>
  `;

  return card;
}
