import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryProvider } from "./config/queryClient.tsx";

import "./index.css";
import "tailwindcss/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </React.StrictMode>
);
