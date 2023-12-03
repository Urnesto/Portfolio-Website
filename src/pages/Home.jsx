import {
  Navbar,
  About,
  Experience,
  Projects,
  Vector,
  Contact,
  Footer,
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
      <Footer />
    </>
  );
}

export default App;
