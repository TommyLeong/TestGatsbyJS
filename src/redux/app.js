import en from "../themes/language/en.json";

const initialState = { 
  language: "en",
  languagePack: en
}

// Actions
const STORE_LANGUAGE = 'STORE_LANGUAGE';
const SET_LANGUAGE_PACK = 'SET_LANGUAGE_PACK';

// Reducers
export const storeLanguage = payload => ({
  type: STORE_LANGUAGE, payload
});

export const setLanguagePack = payload => ({
  type: SET_LANGUAGE_PACK, payload
});

export default (state = initialState, action) => {
    switch (action.type) {
      case STORE_LANGUAGE:
        return { ...state, language: action.payload };
      case SET_LANGUAGE_PACK:
        return { ...state, languagePack: action.payload };
      default:
        return state;
    }
  };
  