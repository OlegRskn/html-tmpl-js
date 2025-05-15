import Wrapper from './constructor/Wrapper.js';
import footer from './modules/footer.js';
import header from './modules/header.js';
import layout from './modules/layout.js';

new Wrapper('#root', [header, layout, footer]);
