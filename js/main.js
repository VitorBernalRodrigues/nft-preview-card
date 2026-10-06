// Dados do card do desafio
const equilibrium = {
  title: 'Equilibrium',
  number: '3429',
  description: 'Our Equilibrium collection promotes balance and calm.',
  image: 'images/image-equilibrium.svg',
  price: 0.041,
  daysLeft: 3,
  creator: 'Jules Wyvern',
  avatar: 'images/image-avatar.svg'
};

// Coloca o card dentro da seção #cards
document.querySelector('#cards').appendChild(createCard(equilibrium));
