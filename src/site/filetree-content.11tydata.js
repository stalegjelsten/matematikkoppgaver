require("dotenv").config();
const { ALL_NOTE_SETTINGS } = require("../helpers/constants");

module.exports = {
  eleventyComputed: {
    settings: (data) => {
      const noteSettings = {};
      ALL_NOTE_SETTINGS.forEach((setting) => {
        const noteSetting = data[setting];
        const globalSetting = process.env[setting];
        noteSettings[setting] =
          noteSetting || (globalSetting === "true" && noteSetting !== false);
      });
      return noteSettings;
    },
  },
};
