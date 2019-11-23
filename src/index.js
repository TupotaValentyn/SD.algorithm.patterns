import main from './components/pages/main/main';
import { createHtmlNode, portalRender } from "../utils/helpers";

const root = document.getElementById('root');

portalRender(root, createHtmlNode(main()));
