// App.js
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages";
import { ProjectDetails } from "./components";
import { projects } from "./constants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {projects.map((project) => (
          <Route
            key={project.id}
            path="/image-names/:id"
            element={<ProjectDetails />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
