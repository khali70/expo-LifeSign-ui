import React from "react";
import * as eva from "@eva-design/eva";
/**
 * ui kitten for
 * - ui components
 * - icons
 * - themes
 */
import {
  ApplicationProvider,
  Layout,
  Text,
  Button as kittenButton,
} from "@ui-kitten/components";

/**
 * the react-native elements if you want style your self
 */
import { Button, View } from "react-native";

/**
 * the redux system for shared state
 * between the app
 *
 * Provider :- the provider for all components
 * useSelector :- a hook to get `state`
 * useDispatch :- a hook to select which store to dispatch
 *
 */
import { Provider, useSelector, useDispatch } from "react-redux";
// the store that hold the state
import configureStore from "./Redux";
/**
 * i18n for translation
 * see `./i18n/index.ts` for more
 *
 * rtl :-
 *    `true`  if the app is right to left direction (arabic)
 *    `false` if the app is left to right direction (english)
 */
import i18n, { rtl } from "./i18n";

import Navigation from "./navigation";
// get the sore as configured in `./Redux/index.tsx`
const store = configureStore();
export default () => (
  <Provider store={store}>
    <ApplicationProvider {...eva} theme={eva.light}>
      <Navigation />
    </ApplicationProvider>
  </Provider>
);
