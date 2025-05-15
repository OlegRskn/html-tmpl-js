import Element from '../constructor/Element.js';

const cardData = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5'];

const sideCards = cardData.map((el) => new Element('div', 'card', el).get());

const sidebar = new Element('div', 'sidebar', sideCards);

export default sidebar;
