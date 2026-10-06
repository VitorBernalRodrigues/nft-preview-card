// Componente CardList: recebe a lista de NFTs e devolve um <ul> com um card para cada um.
function createCardList(nfts) {
  const list = document.createElement('ul');
  list.className = 'card-list';

  nfts.forEach(function (nft, index) {
    const item = document.createElement('li');

    // Animate.css: cada card entra subindo, um pouco depois do anterior
    item.className = 'card-list__item animate__animated animate__fadeInUp';
    item.style.animationDelay = (index * 0.15) + 's';

    item.appendChild(createCard(nft));
    list.appendChild(item);
  });

  return list;
}
