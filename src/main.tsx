import "./css/newHeader.css";
import "./css/newMain.css"; 
import "./css/newFooter.css";
import ReactDOM from "react-dom/client";
import PhilForSkill from "./PhilForSkill";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./state/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <PhilForSkill />
    </BrowserRouter>
  </Provider>
);
