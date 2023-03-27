'use strict';

import getLoginDetails from "./getLoginDetails.service.js"
import loginListComponent from "../components/loginList.component.js";

const updateLoginDetails = async () => {
  try {
    const loginList = await getLoginDetails();
    document.getElementById('body').innerHTML = loginList;
    await loginListComponent.setEvents()
  } catch (err) {
    throw (err)
  }
}

export default updateLoginDetails;