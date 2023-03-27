'use strict';
import loginComponent from "./login.component.js";

const bodyComponent = {
  template: `
  <div id="body">
  ${loginComponent.template}  
  </div>`,

  styles: ``,

  setEvents: async () => {
    try {
      await loginComponent.setEvents();
      return;
    } catch (err) {
      throw err
    }
  }
}

export default bodyComponent