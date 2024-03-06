import man from "../assets/man.png";
import earth from "../assets/earth.png";
import trees from "../assets/trees.png";
import money from "../assets/money.png";



const items = [
    {
      id: Math.random().toString(),
      img: man,
      count: 102,
      click: false,
      title: "Количество волонтеров",
      text: "Волонтеры — это люди, которые добровольно и безвозмездно трудятся для блага общества или отдельных его представителей.",
    },
    {
      id: Math.random().toString(),
      img: earth,
      count: 145,
      click: false,
      title: "Всего засажено участков",
      text: "Волонтеры — это люди, которые добровольно и безвозмездно трудятся для блага общества или отдельных его представителей.",
    },
    {
      id: Math.random().toString(),
      img: trees,
      count: 102,
      click: false,
      title: "Всего высажено деревьев",
      text: "Волонтеры — это люди, которые добровольно и безвозмездно трудятся для блага общества или отдельных его представителей.",
    },
    {
      id: Math.random().toString(),
      img: money,
      count: 102,
      click: true,
      title: "Собранная общая сумма",
      text: "Волонтеры — это люди, которые добровольно и безвозмездно трудятся для блага общества или отдельных его представителей.",
    },
  ];

  export default items;