'use strict';

class LoginDetails {

  static url = "http://localhost:5000/login"

  static add = async (data) => {
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    try {
      const response = await fetch(LoginDetails.url, opts)
      return response.json()
    } catch (err) {
      throw err
    }
  }

  static get = async () => {
    try {
      const response = await fetch(LoginDetails.url)
      return response.json()
    } catch (err) {
      throw err
    }
  }

  static update = async (id, data) => {
    const url = LoginDetails.url + "/id/" + id;
    console.log(JSON.stringify(data));
    const opts = {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }
    try {
      const response = await fetch(url, opts)
      return response.json()
    } catch (err) {
      throw err
    }
  }

  static delete = async (id) => {
    const opts = {
      method: "DELETE"
    }
    const url = LoginDetails.url + "/id/" + id
    try {
      const response = await fetch(url, opts)
      return response.json()
    } catch (err) {
      throw err
    }
  }
}

export default LoginDetails