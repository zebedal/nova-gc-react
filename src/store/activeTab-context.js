import { createContext, useState } from 'react'


const ActiveTabContext = createContext()
export default ActiveTabContext


export const ActiveTabContextProvider = ({ children }) => {

    const [activeTab, setActiveTab] = useState(0)

    const setActive = (id) => {
        setActiveTab(id)
    }

    return (
        <ActiveTabContext.Provider value={{activeTab: activeTab, setActive: setActive}}>
            {children}
        </ActiveTabContext.Provider>
    )



}