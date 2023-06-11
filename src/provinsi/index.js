import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Duapuluhempat from "./Enam";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Duapuluhempat />
  </StrictMode>
);
