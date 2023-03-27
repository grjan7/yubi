'use strict';

import shapePanelComponent from "./shape.component.js";
import backButtonComponent from "./backButton.component.js";

const navPanelComponent = {
  template: `
  <div id="nav">
    ${shapePanelComponent.template}
    ${backButtonComponent.template}
  </div>`,

  Styles: ``,

  setEvents: async () => { }
}

export default navPanelComponent