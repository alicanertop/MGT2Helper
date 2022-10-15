export const REGEX = {
  emailPattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  passwordPattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,64}$/,
  websitePattern:
    /(https?:\/\/)?(www\.)[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)|(https?:\/\/)?(www\.)?(?!ww)[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/,
  onlyDigitPattern: /^\d+$/,
  replaceTextPattern: /\D/g,
  replaceSpacePattern: /\s/g,
}
