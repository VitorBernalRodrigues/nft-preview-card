// Componente Header: logo, links de navegação e botão de carteira.
function createHeader() {
  const header = document.createElement('header');
  header.className = 'header';

  header.innerHTML = `
    <div class="header__container">
      <a href="#" class="header__logo">
        <img src="images/logo.svg" alt="" width="40" height="40">
        <span>Equili<span class="header__highlight">bria</span></span>
      </a>

      <nav class="header__nav" id="menu">
        <ul class="header__links">
          <li><a href="#">Explore</a></li>
          <li><a href="#">Collections</a></li>
          <li><a href="#">Creators</a></li>
          <li><a href="#">About</a></li>
        </ul>
        <a href="#" class="header__button">Connect wallet</a>
      </nav>
    </div>
  `;

  return header;
}
