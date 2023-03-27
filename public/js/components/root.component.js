'use strict';

import navPanelComponent from './nav/navPanel.component.js'
import titleComponent from './title.component.js'
import bodyComponent from './body.component.js';

const rootComponent = {
  template: `<div id="rootComponent">
  ${navPanelComponent.template}
  ${titleComponent.template}
  ${bodyComponent.template}
  </div>
  `,

  styles: `#rootComponent{
    padding:20px;
  }`,

  setEvents: async () => {
    try {
      await navPanelComponent.setEvents();
      await titleComponent.setEvents();
      await bodyComponent.setEvents();
      return
    } catch (err) {
      throw err;
    }
  }
}

export default rootComponent