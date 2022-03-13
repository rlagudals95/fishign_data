import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";

// 1. 스토어를 생성하는 makeStore 함수를 정의
const makeStore = (context) => createStore(reducer);

// 2. next-redux-wrapper에서 제공하는 createWrapper정의
export const wrapper = createWrappe(makeStore, { debug: true });

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

// export default wrapper.withRedux(Nodebird);
// //export default store();
