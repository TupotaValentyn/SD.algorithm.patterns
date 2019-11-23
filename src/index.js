import singleton from './components/pages/Singelton/Singelton'
import { createHtmlNode, createFragment, portalRender } from "../utils/helpers";

const root = document.getElementById('root');

portalRender(root, createFragment(singleton));

