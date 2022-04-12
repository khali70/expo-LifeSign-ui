import * as Localization from "expo-localization";
import i18n, { InterpolateOptions } from "i18n-js";
// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  en: require("./en.json"),
  ar: require("./ar.json"),
};
// Set the locale once at the beginning of your app.
i18n.locale = "ar";
export const rtl = Localization.isRTL;
export default i18n;
