import {Navbar, Aside, Content} from "./";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className= "main">
        <Aside />
        <Content />
      </div>
    </div>
  );
}

export default App;
