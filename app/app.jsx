const React = require("react");
const ReactDOM = require("react-dom/client");
const redux = require("redux");
const Provider = require("react-redux").Provider;
const reducer = require("./reducer.jsx");
const AppView = require("./appview.jsx");
 
const store = redux.createStore(reducer);
 
store.dispatch({
  type: "SET_STATE",
  state: {
    count_yes: 0,
    count_no: 0,
    questions: ["Есть ли у вас желание углубленно изучать языки и методы программирования?", 
  "Хотите ли вы развиваться в сфере кибербезопасности?", 
  "Для вас более предпочтителен специалитет, чем бакалавриат?",
  "Хотите ли вы изучать разработку, эксплуатацию и защиту информационно-аналитических и мониторинговых систем безопасности?",
  "Хотите ли вы изучать предметы, связанные с анализом данных и машинным обучением?"],
  }
});
 
ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
  <Provider store={store}>
    <AppView />
  </Provider>
);