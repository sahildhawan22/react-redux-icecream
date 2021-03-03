import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";

const store = createStore(cakeReducer);

export default store;

//Now that we have created this store, we need to provide this to our app. For this go to App.js and import Provider from react-redux library and wrap App contents inside of provider. We pass store as prop in our Provider. This will ensure that store is available to all the components in our component tree.
