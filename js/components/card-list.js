// Componente CardList: recebe a lista de NFTs e devolve um <ul> com um card para cada um.
function createCardList(nfts) {
  const list = document.createElement('ul');
  list.className = 'card-list';

  nfts.forEach(function (nft) {
    const item = document.createElement('li');
    item.className = 'card-list__item';
    item.appendChild(createCard(nft));
    list.appendChild(item);
  });

  return list;
}
