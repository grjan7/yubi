'use strict';

const isPhone = async (arg) => /^\d{10}$/.test(arg);
const isMail = async (arg) => /^([a-z0-9_]+)\@([a-z]+)\.([a-z]+)$/.test(arg);
const validateMailPhone = async (arg) => {
  try {
    let _isMail = await isMail(arg);
    let _isPhone = await isPhone(arg);
    return _isMail || _isPhone;
  } catch (e) {
    throw e;
  }
}

const padPhone = async (arg) => arg.slice(6).padStart(8, "*");
const padMailID = async (arg) => {
  const [userName, domain] = arg.split("@");
  const userNameFirst2 = userName.slice(0, 2);
  const userNameLast1 = userName.slice(userName.length - 2);
  const paddedMailID = `${userNameFirst2}****${userNameLast1}@${domain}`;
  return paddedMailID;
}

const padContactDetails = async (arg) => {
  let paddedText = "";
  let _isPhone = await isPhone(arg);
  if (_isPhone) {
    paddedText = await padPhone(arg);
  }
  let _isMail = await isMail(arg);
  if (_isMail) {
    paddedText = await padMailID(arg);
  }
  return paddedText;
}

export {
  isPhone,
  isMail,
  validateMailPhone,
  padPhone,
  padMailID,
  padContactDetails
}