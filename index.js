import dateTime from './modules/date.js';
import Library from './modules/library.js';
import Navigation from './modules/navigation.js';

dateTime();

const nav = new Navigation();
nav.goTo();

const book = new Library();
book.addBook();
book.display();
