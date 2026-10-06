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

      <!-- Botão "hambúrguer": só aparece no celular -->
      <button class="header__toggle" aria-label="Open menu" aria-expanded="false" aria-controls="menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

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

  // Menu do celular: o botão abre e fecha a navegação
  const toggle = header.querySelector('.header__toggle');
  const nav = header.querySelector('.header__nav');

  toggle.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  return header;
}
