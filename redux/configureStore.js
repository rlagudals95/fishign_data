import { applyMiddleware,combineReducers, createStore, compose } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import sea from "./modules/sea";

const configureStore = () => {
  const middlewares = [thunk.withExtraArgument()];

  const rootReducer = combineReducers({
    sea,
  });


  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV !== "production"
});

export default wrapper;

// import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import { createBrowserHistory } from "history";
// import { connectRouter } from "connected-react-router";
// import { createWrapper } from "next-redux-wrapper";

// import sea from "./modules/sea";

// export const history = createBrowserHistory();

// const rootReducer = combineReducers({
//   sea,
//   router: connectRouter(history),
// });

// const middlewares = [thunk.withExtraArgument({ history: history })];

// const env = process.env.NODE_ENV;

// if (env === "development") {
//   // const { logger } = require("redux-logger");
//   // middlewares.push(logger);
// }

// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//       })
//     : compose;

// const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// let store = (initialStore) => createStore(rootReducer, enhancer);

// const wrapper = createWrapper(store(), {
//   debug: process.env.NODE_ENV === "development,",
// });

// //export default store();
