import React from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import WeatherForm from "./WeatherForm";

export default function App() {
  return (
    <div className="App">
      <WeatherForm defaultCity="Laflèche" />
      <footer className="signature">
        <small>
          This project is{" "}
          <a
            href="https://github.com/ShanieshaJ/peri-weather-app-react"
            target="_blank"
            className="projectLink"
            rel="noopener noreferrer"
          >
            open-source code on Github{" "}
          </a>
          and hosted on{" "}
          <a
            href="https://rad-shortbread-6bea65.netlify.app/"
            target="_blank"
            className="projectLink"
            rel="noopener noreferrer"
          >
            Netlify{" "}
          </a>
          by Shaniesha John
        </small>
      </footer>
    </div>
  );
}

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
