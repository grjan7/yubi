'use strict'

import LoginDetails from "./loginDetails.service.js";

const createResultTable = async () => {
  try {
    let data = await LoginDetails.get();
    let table = `<table id="resultTable">`;
    table += data.map(it => `
    <tr>
      <td>
        <input
          type="text"
          value="${it.phone || it.email}" 
          id="input_${it._id}" 
          class="updateResult">
        <input
          type="submit"
          value="DELETE"
          id="del_${it._id}" 
          class="deleteResult">
      </td>
    </tr>`).join("\n")
    table += `</table>`
    return table
  } catch (e) {
    throw e;
  }
}

export default createResultTable;
