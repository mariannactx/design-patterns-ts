import NewsAgency from './NewsAgency';
import NewsApp from './NewsApp';
import NewsWebsite from './NewsWebsite';

const agency = new NewsAgency();
const app = new NewsApp();
const website = new NewsWebsite();

agency.subscribe(app);
agency.subscribe(website);

setTimeout(() => {
  agency.addNews('Breaking News: New Design Pattern Implemented!');
}, 1000);

setTimeout(() => {
  agency.addNews('Update: Observer Pattern in Action!');
}, 2000);
