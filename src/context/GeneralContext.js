import { createContext } from "react";

const GeneralContext = createContext()

export const GeneralProvider = ({children}) => {

    return <GeneralContext.Provider value={{
        
    }}>
        {children}
    </GeneralContext.Provider>
}

export default GeneralContext