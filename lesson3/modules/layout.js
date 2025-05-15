import Element from '../constructor/Element.js';
import content from './content.js';
import sidebar from './sidebar.js';

const layout = new Element('div', 'layout', [content.get(), sidebar.get()]);

export default layout;
