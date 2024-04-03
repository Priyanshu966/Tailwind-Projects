import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {GameProvider} from "./context/game_context";
import {BoardProvider} from "./context/board_context";
import {CpuProvider} from "./context/cpu_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GameProvider>
    <BoardProvider>
      <CpuProvider>
        <App />
      </CpuProvider>
    </BoardProvider>
  </GameProvider>
);
