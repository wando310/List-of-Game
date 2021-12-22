const url = `https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=1`;

const conteinerSlide = document.querySelector(".conteiner-slide");
const conteinerGame = document.querySelector(".conteiner");

fetch(url)
  .then((response) => response.json())
  .then((games) => {
    games.forEach((gamer) => {
      const game = document.createElement("div");
      const slide = document.createElement("div");
      slide.classList.add("slide-show");

      game.innerHTML = `
       <div class="game">
        <img
        src="${gamer.thumb}"
        alt="img"
        />
        <div class="see-more">
        <h2>${gamer.title}</h2>
          <span class="price-normal">Preço normal:<strong style="color:rgb(255, 145, 0)"> $ ${gamer.normalPrice}</strong></span>
          <span class="sale-price">Preço de venda:<strong style="color:rgb(255, 145, 0)"> $ ${gamer.salePrice}</strong></span>
          <span class="deal-Rating">Avaliação de negócio:<strong style="color:rgb(255, 145, 0)"> $ ${gamer.dealRating}</strong></span>
          <span class="steam-Rating-Text">Texto de classificação de Steam:<strong style="color:rgb(255, 145, 0)"> ${gamer.steamRatingText}</strong></span>
        </div>
      </div>`;
      conteinerGame.appendChild(game);

      slide.innerHTML = `
      <div class="slide">
      <img
      src="${gamer.thumb}"
      alt="slide"
      />
    </div>`;

      conteinerSlide.appendChild(slide);
    });

    const sld = document.querySelector(".slide-show");

    let index = 620;
    setInterval(() => {
      sld.style.marginLeft = `-${index}px`;
      index = index + 620;

      if (index > 18000) {
        index = 0;
      }
    }, 3000);
  });
