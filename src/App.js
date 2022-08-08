import "./App.css";
import {
  Nav,
  Header,
  Brand,
  WhatIsGPT,
  Future,
  Possibility,
  CTA,
  Blogs,
  Footer,
} from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Nav />
        <Header />
      </div>
      <Brand />
      <WhatIsGPT />
      <Future />
      <Possibility />
      <CTA />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
