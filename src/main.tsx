import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Check if there is a redirect stored in sessionStorage from 404.html
const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirect && redirect !== location.href) {
  window.history.replaceState(null, "", redirect);
}

createRoot(document.getElementById("root")!).render(<App />);
