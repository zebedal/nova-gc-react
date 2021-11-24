import React from "react"
import { useState } from "react"



const NifSelector = React.createContext({
    selectedNif: ""
})


export default NifSelector



export const NifSelectorProvider = props => {

    const [selectedNif, setSelectedNif] = useState([])


    return (
        <NifSelector.Provider value={{nif: selectedNif, setNif: setSelectedNif}}>
            {props.children}
        </NifSelector.Provider>
    )
}
