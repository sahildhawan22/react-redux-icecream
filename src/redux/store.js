import { createStore, applyMiddleware } from "redux";
import rootReducer from "../redux/rootReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
//import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;

//Now that we have created this store, we need to provide this to our app. For this go to App.js and import Provider from react-redux library and wrap App contents inside of provider. We pass store as prop in our Provider. This will ensure that store is available to all the components in our component tree.
