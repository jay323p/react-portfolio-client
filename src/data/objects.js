import html from '../assets/html.png';
import css from '../assets/css.png';
import react from '../assets/react.png';
import nodejs from '../assets/nodejs.png';
import mongodb from '../assets/mongo-db.png';
import inventoryPie from '../assets/inventoryPie.png';
import inventoryPieMacBook from '../assets/inventoryPieMacBook.png';
import gambleRehabPhone from '../assets/gambleRehab.png';
import gambleRehabMacbook from '../assets/gambleRehabLaptop.png';
import autoDetailPhone from '../assets/autoDetailPhone.png';
import autoDetailMacbook from '../assets/autoDetailMacbook.png';
import discordCloneMacbook from '../assets/discordCloneWeb.png';
import discordClonePhone from '../assets/discordCloneIPhone.png';

export const myProjects = {
  pdfInventory: {
    title: 'Scan Inventory',
    intro:
      'I have developed a simple platform capable of analyzing PDF files of business invoices, facilitating the extraction, storage, and updating of uniquely parsed data within a database. Additionally, my platform integrates a thorough team management system alongside an intuitive dashboard interface, enhancing collaboration efficiency.',
    moreInfo:
      'I have acquired proficiency in crafting complex regular expressions for string parsing, designing and optimizing complex algorithms, and refining database models and server interactions to enhance the overall performance of the application.',
    techs: [html, css, react, nodejs, mongodb],
    webLink: 'https://silly-trifle-65f169.netlify.app/',
    githubLink: 'https://github.com/jay323p/inventory-management-app',
    phoneImg: inventoryPie,
    laptopImg: inventoryPieMacBook,
  },
  gambleRehab: {
    title: 'Gamble Rehab',
    intro:
      'Created a website for my mom and other gamblers who are ready to learn about their pernicious gambling habits. I coded 5 real gambling games - as close to their real-life odds - and enabled players to track their entire gambling history to see their hypothetical losses. [Keno, Numbers Game, Powerball, Scratch Tickets, Slots]',
    moreInfo:
      'I diligently honed my expertise in front-end design and responsiveness for user experience. Furthermore, I adeptly developed skills in efficiently storing, processing, and caching extensive datasets to optimize performance. I also developed my skills in conceptualizing and coding new applications and games from scratch, leveraging both my problem-solving abilities and the vast resources available.',
    techs: [html, css, react, nodejs, mongodb],
    webLink: 'https://resonant-cranachan-6ad07d.netlify.app/',
    githubLink: 'https://github.com/jay323p/Gamble_Rehab',
    phoneImg: gambleRehabPhone,
    laptopImg: gambleRehabMacbook,
  },
  chatApp: {
    title: 'Discord Clone',
    intro:
      'I coded a simple yet efficient clone of Discord to learn more about websockets and web rtc protocols. My clone closely mimics Discords front-end layout as well as a simlar database modeling and channel/server handling.',
    moreInfo:
      'I learned the usage and implementations of websocket and web rtc protocols and how to frame server requests and model databases accordingly. I also learned and developed skills in type-safing applications using typescript and also learning new technologies like nextjs, react server components, and other routing methods such as app routing.',
    techs: [html, css, react, nodejs, mongodb],
    webLink: 'https://nextjs-discord-clone-production-a37c.up.railway.app/',
    githubLink: 'https://github.com/jay323p/Chat-App',
    phoneImg: discordClonePhone,
    laptopImg: discordCloneMacbook,
  },
  autoDetail: {
    title: 'Auto-Spa Detail',
    intro:
      'Developed a stunning and fully functional website for car detail booking and appointment services. This website has tons of information on the services provided, a gallery to see the companies work, and a customer review system - all with a protected admin route for the business manager/employees.',
    moreInfo:
      'I learned how to develop complex features like a calendar/booking api system and a complementing front-end interface. I further developed my skills in providing a great UI/UE for increased user exprerience and engagement. Lastly, I developed curcial skills in tailoring an application to the needs of a business.',
    techs: [html, css, react, nodejs, mongodb],
    webLink: 'https://jays-auto-spa.netlify.app/',
    githubLink: 'https://github.com/jay323p/Auto-Detailing-Site',
    phoneImg: autoDetailPhone,
    laptopImg: autoDetailMacbook,
  },
};
