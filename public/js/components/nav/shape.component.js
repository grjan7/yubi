'use strict';

const shapePanelComponent = {
  template: `
  <div id="shape">
    <p>
    <span id="triangle"></span>
    <span id="round"></span>
    <span id="square"></span>
    </p>
  </div>`,

  styles: `
  #square, #round{
    width:10px;
    height:10px;
    background-color:#8080a5;
    float:right;
    font-size:14px;
    margin-left:5px;
  }
  #round{
    border-radius:5px;  
  }
  #triangle{    
    float:right;
    font-size:14px;
    margin-left:5px;
    margin-top:-6px;
    border:6px solid transparent;
    border-bottom:10px solid #8080a5;  
  }`,

  setEvents: async () => { }
}

export default shapePanelComponent