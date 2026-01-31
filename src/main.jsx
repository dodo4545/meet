import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import { MainView } from "./components/main-view/main-view";
import Container from "react-bootstrap/Container";
import "./index.scss";
import { API_URL } from "./api";

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <MainView />
      </Container>
    </Provider>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);

console.log("API URL:", API_URL);
console.log("Environment Variables:", process.env);