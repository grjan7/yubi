'use strict';

const loginDetailsDAO = require('../dao/loginDetailsDAO')

class LoginDetailsController {

  static async apiAddLoginDetails(req, res, next) {
    let contactDetails = req.body;
    try {
      const result = await loginDetailsDAO.addLoginDetails(contactDetails);
      res.status(201).send(result);
    } catch (e) {
      res.status(400).json(e)
      return
    }
  }

  static async apiGetLoginDetails(req, res, next) {
    try {
      const result = await loginDetailsDAO.getLoginDetails();
      res.send(result);
    } catch (e) {
      res.status(404).json({ Error: "Not Found." })
      return
    }
  }

  static async apiUpdateLoginDetailsById(req, res, next) {
    const id = req.params.id;
    const data = req.body;
    try {
      const result = await loginDetailsDAO.updateLoginDetailsByID(id, data);
      res.send(result);
    } catch (e) {
      res.status(404).json({ Error: "Not Found." })
      return
    }
  }

  static async apiDeleteLoginDetailsById(req, res, next) {
    const id = req.params.id
    try {
      const result = await loginDetailsDAO.deleteLoginDetailsByID(id);
      res.send(result);
    } catch (e) {
      res.status(404).json({ Error: "Not Found." })
      return
    }
  }
}

module.exports = LoginDetailsController