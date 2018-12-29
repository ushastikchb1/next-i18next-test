const NextI18Next = require("next-i18next");

module.exports = new NextI18Next({
  defaultLanguage: "ru",
  otherLanguages: ["en"],
  localePath: "translations",
  localeSubpaths: true,
});