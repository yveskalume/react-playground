import './App.css';
import React from "react";
import Nav from "./components/Nav";
import Promo from "./components/Promo";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import Footer from "./components/Footer";

const AppContext = React.createContext();
const _name = "Yves";
const AppProvider = ({children}) =>{
    const [name,setName] = React.useState(_name);
    return (
        <AppContext.Provider value={{name}}>
            {children}
        </AppContext.Provider>
    )
}


function App() {
    return (
        <AppProvider>
            <Nav/>
            <Promo/>
            <Intro1/>
            <Intro2/>
            <Intro3/>
            <Footer/>
        </AppProvider>
    );
}

export default App;
export const useNameContext = () => React.useContext(AppContext);
