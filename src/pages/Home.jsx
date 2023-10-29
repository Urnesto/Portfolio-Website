import {
  Navbar,
  About,
  Experience,
  Projects,
  Vector,
  Contact,
} from "../components";
function App() {
  return (
    <>
      <Navbar />
      <Vector />
      <div className="bg-cover bg-center bg-no-repeat">
        <About />
      </div>
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
