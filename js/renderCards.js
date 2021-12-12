"use strict";
import { getVideo } from "./services.js";

const listCard = document.querySelector(".other-films__list");

const renderCards = (data, type) => {
  //  console.log("listCard =>", listCard);
  listCard.textContent = "";

  Promise.all(
    data.map(async (item) => {
      console.log("🚀 ~ item", item);

      let mediaType = item.media_type ?? type;

      const video = await getVideo(item.id, mediaType);

      const key = video.results[0]?.key;

      // console.log("🚀 item", item);
      const card = document.createElement("li");
      card.className = "other-films__item";

      const link = document.createElement("a");
      link.className = "other-films__link tube";
      if (key) link.href = `https://youtu.be/${key}`;
      if (item.vote_average) {
        link.dataset.rating = item.vote_average;
      } else {
        link.dataset.rating = "—";
      }

      const img = document.createElement("img");
      img.className = "other-films__img";
      img.alt = `Постер: ${item.title || item.name}`;

      /*
      if (item.poster_path) {
        img.src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`;
      } else {
        img.src = "https://top.kinona5.ru/not_poster.jpg";
      }
      */

      img.src = item.poster_path
        ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`
        : "https://top.kinona5.ru/not_poster.jpg";
      // https://top.kinona5.ru/not_poster.jpg

      const h3 = document.createElement("h3");
      h3.textContent = `${item.title || item.name}`;
      h3.style.fontSize = "12px";

      if (item.overview) {
        const divHelp = document.createElement("div");
        divHelp.className = "help-tip";
        const pHelp = document.createElement("p");
        pHelp.textContent = `${item.overview}`;

        if (item.backdrop_path) {
          const imgHelp = document.createElement("img");
          imgHelp.className = "img-help";
          imgHelp.src = item.backdrop_path
            ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.backdrop_path}`
            : "https://top.kinona5.ru/not_poster.jpg";
          pHelp.append(imgHelp);
        }

        divHelp.append(pHelp);
        link.append(divHelp);
      }

      link.append(img);

      card.append(link);

      card.append(h3);
      //card.append(divHelp);

      //console.log("🚀 card", card);

      return card;
    })
  ).then((cards) => listCard.append(...cards));

  // listCard.append(...cards);
};

export default renderCards;
