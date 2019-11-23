import Main from './components/pages/main/main'
import { createHtmlNode, createFragment, portalRender } from "../utils/helpers";

const root = document.getElementById('root');

portalRender(root, Main);

