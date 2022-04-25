// import createRoot from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(<App />);

// import { StrictMode } from "react";
import ReactDom from "react-dom";

import App from "./App";

ReactDom.render(
  // <StrictMode>
  <App />,
  // </StrictMode>,
  document.getElementById("root")
);
