'use strict';

import { padContactDetails } from "../services/utils.js";
import loginListComponent from "./loginList.component.js";
import updateLoginDetails from "../services/updateLoginDetails.service.js";

const otpComponent = {

  template: `
  <div id="screen2">    
    <p>We have sent a one time password (OTP) to ${padContactDetails("")}.</p>
    <input type="text" id="OTP" placeholder="OTP" required>
    <p>Resend OTP in <span id="timer">00:15</span></p>
  </div>`,

  styles: `#OTP{
    width:87%;
    margin-bottom:10px;
    padding:15px;
    border:0px;    
    border-radius:8px;    
    font-size:14px;
    color:#101010;
  }`,

  setEvents: async () => {

    const otpBox = document.getElementById('OTP');

    otpBox.onchange = async (e) => {
      try {
        if (otpBox.value == '9999') {
          document.getElementById('back-button').style.display = 'none';
          document.getElementById('title').innerHTML = "Mobile Numbers List";
          document.getElementById('body').innerHTML = loginListComponent.template;
          await updateLoginDetails();
        } else {
          alert('Please enter valid OTP.')
        }
      } catch (err) {
        throw err
      }
    }
  }
}

export default otpComponent