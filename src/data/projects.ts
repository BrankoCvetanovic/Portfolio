import bt from "../asets/bettertwitter.png";
import boutech from "../asets/boutech.png";
import flags from "../asets/flags1.gif";
import homes from "../asets/homestyle1.gif";
import portfolio from "../asets/portfolio.png";

const projects = [
  {
    img: homes,
    info: ["JS", "SCSS", "Motion"],
    name: "HomeStyle",
    about:
      "HomeStyle is a front-end application that showcases all products of a company specializing in kitchen and shelf manufacturing.",
    aboutSr:
      "HomeStyle je front-end aplikacija koja prikazuje sve proizvode kompanije specijalizovane za proizvodnju kuhinja i polica.",
    linkLive: "https://www.retrostyle.rs/",
    linkGit: "https://github.com/BrankoCvetanovic/home-style",
    note: null,
  },
  {
    img: boutech,
    info: ["JS", "SCSS", "NodeJs"],
    name: "BouTech",
    about:
      "BouTech is a full-stack application offering users a seamless shopping experience for a diverse range of tech products. With dedicated pages for appliances, IT equipment, TVs, and phones, users can effortlessly browse and purchase items of their choice directly within the application",
    aboutSr:
      "BouTech je full-stack aplikacija koja korisnicima nudi besprekorno iskustvo kupovine širokog asortimana tehnoloških proizvoda. Sa posebnim stranicama za kućne aparate, IT opremu, televizore i telefone, korisnici mogu lako pregledati i kupiti željene artikle direktno u aplikaciji.",
    linkLive: "https://boutechsrb.netlify.app/",
    linkGit: "https://github.com/BrankoCvetanovic/BouTech",
    note: "Unfortunately, you have to wait for loading for about 20 seconds.",
  },
  {
    img: bt,
    info: ["TS", "SCSS", "FireBase", "MaterialUi"],
    name: "BetterTwitter",
    about:
      "Social Media Platform Better Twitter is a social media platform inspired by Twitter, offering users the ability to authenticate, post text and images, repost content, and like posts.",
    aboutSr:
      "Social Media Platform Better Twitter je društvena mreža inspirisana Twitter-om, koja korisnicima omogućava autentifikaciju, objavljivanje teksta i slika, deljenje sadržaja i lajkovanje objava.",
    linkLive: "https://bettertwitter-5e352.web.app/",
    linkGit: "https://github.com/BrankoCvetanovic/better-twitter",
    note: null,
  },
  {
    img: flags,
    info: ["JS", "CSS", "API"],
    name: "FlagsAPI",
    about:
      "An application providing country data worldwide via API. Users can access key information such as geography, capitals, population, languages, and currencies. It features a user-friendly interface for easy navigation.",
    aboutSr:
      "Aplikacija koja pruža podatke o zemljama širom sveta putem API-ja. Korisnici mogu pristupiti ključnim informacijama kao što su geografija, glavni gradovi, populacija, jezici i valute. Ima intuitivan interfejs za jednostavno pretraživanje.",
    linkLive: "https://brankocvetanovic.github.io/REST-countries-API/",
    linkGit: "https://github.com/BrankoCvetanovic/REST-countries-API",
    note: null,
  },
  {
    img: portfolio,
    info: ["TS", "SCSS", "i18n"],
    name: "Portfolio",
    about:
      "Welcome to my portfolio! This website showcases my work as a front-end developer, featuring projects that highlight my skills in creating modern, interactive, and user-friendly web applications. Feel free to explore and get in touch!",
    aboutSr:
      "Dobrodošli u moj portfolio! Ovaj sajt prikazuje moj rad kao front-end developera, uključujući projekte koji ističu moje veštine u kreiranju modernih, interaktivnih i korisnički prijatnih web aplikacija. Slobodno istražite, pogledajte moje projekte i kontaktirajte me za saradnju ili pitanja!",
    linkLive: "https://brankocv.in.rs/",
    linkGit: "https://github.com/BrankoCvetanovic/Portfolio",
    note: null,
  },
];

export default projects;
