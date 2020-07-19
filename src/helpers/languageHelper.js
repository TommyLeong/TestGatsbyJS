import languageList from "../themes/language/languageList";

const languageMapper = (lang) => {
  switch (lang) {
    case "en":
      return languageList.en;
    case "de":
      return languageList.de;
    default:
      return languageList.en;
  }
};

export default languageMapper;
