import NewsPoller from './NewsPoller';
import NewsAgency from './NewsAgency';
import NewsApp from './NewsApp';
import NewsWebsite from './NewsWebsite';

const agency = new NewsAgency();

const app = new NewsApp();
const website = new NewsWebsite();

const poller = new NewsPoller();
poller.subscribe(app, agency, 1000);
poller.subscribe(website, agency, 500);

setTimeout(() => {
  agency.addNews('Cientistas descobrem nova espécie de borboleta');
}, 1000);

setTimeout(() => {
  agency.addNews('Campeonato de xadrez tem resultado surpreendente');
}, 2000);
