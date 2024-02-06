import { Provider } from "react-redux"
import Header from "./components/Header"
import StarsCanvas from "./components/Stars"
import About from "./sections/About"
import Contacts from "./sections/Contacts"
import Home from "./sections/Home"
import Services from "./sections/Services"
import Skills from "./sections/Skills"
import Works from "./sections/Works"
import { store } from "./store/store"
import ModalProvider from "./components/providers/ModalProvider"
import { Toaster } from 'react-hot-toast';

import "react-vertical-timeline-component/style.min.css"
import 'react-international-phone/style.css';


const App = () => {
  return (
      <Provider store={store}>
        <Toaster />
        <ModalProvider />
        <Header />
        <main>
          <div className="relative z-0">
            <Home />
            {/* <StarsCanvas /> */}
          </div>
          <About />
          <Services />
          <Works />
          <Skills />
          <Contacts />
        </main>
      </Provider>
  )
}

export default App

