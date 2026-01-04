import Article from './Article';
import User from './User';

const article = new Article('Problematic code analysis', 'Refactoring is necessary.');
const articleForReview = new Article('Article for Review', 'Pending content.');

const admin: User = { id: 101, username: 'Alice_Admin', role: 'admin' };
const editor: User = { id: 202, username: 'Bob_Editor', role: 'editor' };
const user: User = { id: 303, username: 'Charlie_User', role: 'user' };

console.log('');
console.log('-------------------------------------------');
console.log('----- Sequence 1: Publishing and Retraction');
console.log(`----- Article: ${article.title}`);

article.publish(editor);
article.publish(admin);
article.retract(editor);
article.retract(admin);

console.log(`\nState history of article:`, article.getHistory());

console.log('');
console.log('---------------------------------');
console.log('----- Sequence 2: Review (Editor)');
console.log(`----- Article: ${articleForReview.title}`);

articleForReview.publish(editor);
articleForReview.review(editor);
articleForReview.publish(editor);

console.log('');
console.log('---------------------------------------------------');
console.log('----- Sequence 3: Attempted Actions by Regular User');
console.log(`----- Article: ${articleForReview.title}`);

articleForReview.review(user);
articleForReview.publish(user);

console.log(`\nState history of article:`, articleForReview.getHistory());
