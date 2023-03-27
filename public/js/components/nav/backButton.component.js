'use strict';

import bootstrapApp from "../../bootstrapApp.js"

const backButtonComponent = {
  template: `
  <div id="back-button-card">
    <button id="back-button">&#10096; Back</button>
  </div>
  `,

  styles: `
  #back-button {
    float:left;
    background-color:transparent;
    display:none;
    border:0px;   
  }
  #back-button-card {
    height:50px;
    margin-bottom:5px;           
  }
  `,

  setEvents: async () => {
    const backButtonEl = document.getElementById('back-button');
    backButtonEl.onclick = async (e) => {
      e.preventDefault()
      try {
        await bootstrapApp()
      } catch (err) {
        throw err
      }
    }
  }
}

export default backButtonComponent