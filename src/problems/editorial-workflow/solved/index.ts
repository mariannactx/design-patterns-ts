import Article from './Article';
import User from './User';

const user: User = {
  username: 'maria',
  role: 'user',
};

const editor: User = {
  username: 'maria',
  role: 'editor',
};

const admin: User = {
  username: 'maria',
  role: 'admin',
};

const article: Article = new Article(
  'Design Patterns in TypeScript',
  'Content about design patterns...',
);

const articleForReview = new Article('Article for Review', 'Pending content.');

console.log('');
console.log('-------------------------------------------');
console.log(`----- Sequence 1: Publishing and Retraction`);
console.log(`Article: ${article.title}`);

article.publish(editor);
article.publish(admin);

article.review(editor);
article.publish(admin);

article.retract(editor);
article.retract(admin);

console.log(`\nState history of article:`, article.getHistory());

console.log('');
console.log('----------------------------------');
console.log(`----- Sequence 2: Review by editor`);
console.log(`Article: ${articleForReview.title}`);

articleForReview.publish(editor);
articleForReview.review(editor);
articleForReview.publish(editor);

console.log('');
console.log('-----------------------------------------');
console.log(`----- Sequence 3: Actions by Regular User`);
console.log(`Article: ${articleForReview.title}`);

articleForReview.review(user);
articleForReview.publish(user);

console.log(`\nState history of article:`, articleForReview.getHistory());
