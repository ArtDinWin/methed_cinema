import { getVideo } from "./services.js";

const listCard = document.querySelector(".other-films__list");

const renderCards = async (data) => {
  //  console.log("listCard =>", listCard);
  listCard.textContent = "";

  Promise.all(
    data.map(async (item) => {
      const video = await getVideo(item.id, item.media_type);
      const key = video.results[0]?.key;
      // console.log("🚀 item", item);
      const card = document.createElement("li");
      card.className = "other-films__item";

      const link = document.createElement("a");
      link.className = "other-films__link";
      if (key) link.href = `https://youtu.be/${key}`;
      if (item.vote_average) {
        link.dataset.rating = item.vote_average;
      } else {
        link.dataset.rating = "—";
      }

      const img = document.createElement("img");
      img.className = "other-films__img";
      img.alt = `Постер: ${item.title || item.name}`;
      img.src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`;

      link.append(img);
      card.append(link);

      //console.log("🚀 card", card);

      return card;
    })
  ).then((cards) => listCard.append(...cards));

  // listCard.append(...cards);
};

export default renderCards;
