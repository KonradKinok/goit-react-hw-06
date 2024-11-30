import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as Phonebook from "./components/Phonebook/index";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./components/redux/store";
import "./globalStyles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Phonebook.Contacts />
      </PersistGate>
    </Provider>
  </StrictMode>
);
