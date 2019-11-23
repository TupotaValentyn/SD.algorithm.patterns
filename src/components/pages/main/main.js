import { createHtmlNode, createFragment, portalRender } from '../../../../utils/helpers';

import Main from './main.html'
import Navigation from "../../navigation/Navigation";

const main = () => {
    const main = createFragment(Main);
    const nav = createFragment(Navigation);

    portalRender(main, nav);
    return main;
};

export default main();
