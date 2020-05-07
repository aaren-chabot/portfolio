import React from "react";

import Header from "./sections/Header/Header.component";
import Intro from "./sections/Intro/Intro.component";
import Services from "./sections/Services/Services.component";
import Projects from "./sections/Projects/Projects.component";
import Contact from "./sections/Contact/Contact.component";
import Footer from "./sections/Footer/Footer.component";

import Spacer from "./components/Spacer/Spacer.component";

import styles from "./App.scss";

function App() {
  return (
    <div className={`app ${styles.app}`}>
      <Header />
      <Spacer size="sm" />
      <Intro />
      <Spacer size="xsm" />
      <Services />
      <Spacer size="xsm" />
      <Projects />
      <Contact />
      <Spacer size="xlg" />
      <Footer />
    </div>
  );
}

export default App;
