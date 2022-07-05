var en = require("./translations.en.json");
var ru = require("./translations.ru.json");

const i18n = {
  translations: {
    en,
    ru,
  },
  defaultLang: "en",
  useBrowserDefault: true,
};

module.exports = i18n;