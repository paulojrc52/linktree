const containerWorks = document.querySelector('.containerWorks')

const works = [
  {name: 'Meia Polegada(Colorida)', price:600, img: 'images/tatto.jpg', size: 13},
  {name: 'Meia Polegada(Preto & Branco)', price:500, img: 'images/tatto.jpg', size: 13},
  {name: 'Membro Passado(Preto & Branco)', price:1.650, img: 'images/tatto.jpg', size: 53},
  {name: 'Polegada(Colorida)', price:850, img: 'images/tatto.jpg', size: 21},
  {name: 'Fechamento Maior(Colorida)', price:1.650, img: 'images/tatto.jpg', size: 38},
  {name: 'Membro Passado(Colorida)', price:1.850, img: 'images/tatto.jpg', size: 58},
  {name: 'Fechamento Maior(Preto & Branco)', price:1.150, img: 'images/tatto.jpg', size: 38},
  {name: 'Fechamento Menor(Preto & Branco)', price:850, img: 'images/tatto.jpg', size: 28},
  {name: 'Fechamento Menor(Colorida)', price:1.100, img: 'images/tatto.jpg', size: 28},
  {name: 'Polegada(Preto & Branco)', price:700, img: 'images/tatto.jpg', size: 21},
  {name: 'Flash Tattoo(Preto & Branco)', price:250, img: 'images/tatto.jpg', size: 8},
  {name: 'Flash Tattoo(Colorida)', price:350, img: 'images/tatto.jpg', size: 8},
]


works.map(({name, price, img, size}) => {
  containerWorks.innerHTML += `
    <div class="boxWorks">
      <img src="${img}" alt="${name}" class="imgWorks">
      <br>
      <span class='spanTitle'>${name}</span>
      <br>
      <span>Valor:</span> <span class='numbers'>R$ ${price},00</span>
      <br>
      <span>Tamanho:</span> <span class='numbers'>${size}cm</span>
    </div>
  
  `
})