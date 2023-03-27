'use strict';

import { isMail, validateMailPhone, padContactDetails } from "../services/utils.js";
import otpComponent from "./otp.component.js";
import backButtonComponent from "./nav/backButton.component.js";
import LoginDetails from "../services/loginDetails.service.js";


const loginComponent = {
  template: `
    <div id="screen1" >    
    <form id="login" action="" method="POST">
     <div>
      <input type="text" id="contact" placeholder= "Mobile / Email" required>
     </div>
     <div>
      <input type="submit" value="Continue &#10140;" id="continue-button" disabled>
     </div>
    </form>
    <p>Or Continue with</p>
    <div id="other-login">
      <button id="whatsapp_login">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-whatsapp" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg> <span>WhatsApp</span>        
      </button>
      <button id="google_login">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 186.69 190.5" xmlns:v="https://vecta.io/nano"><g transform="translate(1184.583 765.171)"><path clip-path="none" mask="none" d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z" fill="#4285f4"/><path clip-path="none" mask="none" d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z" fill="#34a853"/><path clip-path="none" mask="none" d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z" fill="#fbbc05"/><path d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z" fill="#ea4335" clip-path="none" mask="none"/></g></svg> <span>Google</span>        
      </button>
    </div>
    <p>By continuing, you agree to our <a href="">terms</a> and <a href="">policies</a></p> 
  </div >
  `,
  styles: `
  #whatsapp_login, #google_login{
    width:42%;
    padding:15px;
    margin:5px;    
    border-radius:10px;
    text-align:center;
    font-size:16px;
  }
  #whatsapp_login{
    color:#008040;
    border: 1px solid #008040;
  }
  #google_login{
    color:#1080a5;
    border: 1px solid #1080a5;
  }
  
  #continue-button{
    width:95%;
    background-color:#8090a5;
    /* background-color:#105085; */
    color: white;
    padding:15px;
    border:0px;
    border-radius:8px;
    font-size:14px;
  }
  #contact{
    width:87%;
    margin-bottom:10px;
    padding:15px;
    border:0px;    
    border-radius:8px;    
    font-size:14px;
    color:#101010;
  }
  `,

  setEvents: async () => {
    const contactEl = document.getElementById('contact');
    const continueButton = document.getElementById('continue-button');

    contactEl.onchange = async (e) => {
      try {
        const isValid = await validateMailPhone(contactEl.value);
        if (isValid) {
          continueButton.disabled = false
          continueButton.style.backgroundColor = "#105085";
        } else {
          continueButton.disabled = true
          continueButton.style.backgroundColor = "#8090a5";
        }
      } catch (err) {
        throw err;
      }
    }

    continueButton.onclick = async (e) => {
      e.preventDefault();
      if (contactEl.value && contactEl.value != '') {
        try {
          let data = {};
          let _isMail = await isMail(contactEl.value);
          if (_isMail) {
            data = { email: contactEl.value }
          } else {
            data = { phone: contactEl.value }
          }
          await LoginDetails.add(data);
          document.getElementById("title").innerHTML = "Enter OTP";
          document.getElementById("body").innerHTML = otpComponent.template;
          document.getElementById('back-button').style.display = 'block';
          document.getElementById('padded-contact').innerText = await padContactDetails(contactEl.value);
          await otpComponent.setEvents();
          await backButtonComponent.setEvents();
          return
        } catch (err) {
          throw err;
        }
      }
    }
  }
}

export default loginComponent