// Monta a página: header no topo e a lista de cards dentro do <main>
document.body.prepend(createHeader());
document.querySelector('#cards').appendChild(createCardList(nfts));
