'use strict'

import bootstrapApp from './bootstrapApp.js'

(async function initializeApp() {
  try {
    await bootstrapApp()
  } catch (err) {
    throw err;
  }
})()