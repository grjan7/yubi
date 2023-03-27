'use strict'

import getLoginDetails from "../services/getLoginDetails.service.js";
import LoginDetails from "../services/loginDetails.service.js";
import { isMail, validateMailPhone } from "../services/utils.js";

const loginListComponent = {

  template: '',

  styles: `.updateResult{
    border: 1px solid #f0f0f0;
    border-radius: 5px;
    padding: 10px;
    font-size:14px;
  }
  .deleteResult{
    border: 0px;
    background-color: #a07070;
    color: white;
    border-radius: 5px;
    padding: 10px;
    font-size:14px;
  }`,

  setEvents: async () => {

    // Update Login Details
    const updateBoxes = document.querySelectorAll(".updateResult");
    const deleteButtons = document.querySelectorAll(".deleteResult");

    updateBoxes.forEach(box => {
      box.onchange = async (e) => {
        e.preventDefault();
        try {
          const isValid = await validateMailPhone(box.value)
          if (isValid) {
            let id = box.id;
            let _id = id.slice(id.indexOf('_') + 1);
            let data = {};
            const _isMail = await isMail(box.value);

            if (_isMail) {
              data = { email: box.value }
            } else {
              data = { phone: box.value }
            }
            await LoginDetails.update(_id, data);
          }
        } catch (err) {
          throw err
        }
      }
    });

    // Delete Login Details

    deleteButtons.forEach(button => {
      button.onclick = async (e) => {
        e.preventDefault();
        try {
          let id = button.id;
          let _id = id.slice(id.indexOf('_') + 1);
          await LoginDetails.delete(_id);
          const loginListAfterDelete = await getLoginDetails();
          document.getElementById('body').innerHTML = loginListAfterDelete;
        } catch (err) {
          throw err
        }
      }
    });
  }
};

(async () => {
  try {
    loginListComponent.template = await getLoginDetails();
  } catch (err) {
    throw err
  }
})();

export default loginListComponent;