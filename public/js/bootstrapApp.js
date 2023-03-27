'use strict'

import rootComponent from './components/root.component.js'
import setStyle from './services/setStyles.js'

const bootstrapApp = async () => {
  try {
    const root = document.getElementById('root')
    root.innerHTML = rootComponent.template
    await setStyle();
    await rootComponent.setEvents();
  } catch (err) {
    throw err;
  }
}

export default bootstrapApp