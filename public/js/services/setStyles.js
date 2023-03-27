'use strict';

import components from "../components/componentsList.js";

const setStyle = async () => {
  const styleEl = document.getElementsByTagName('style')[0];
  const styles = components.map(component => component.styles).join("\n");
  styleEl.innerHTML = styles;
}

export default setStyle