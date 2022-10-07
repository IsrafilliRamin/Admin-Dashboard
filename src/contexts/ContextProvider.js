import React, { createContext, useContext, useState } from "react";

const StateContext = createContext()

const initialState = {
    chat: false,
    cart: false,
    useProfile: false,
    notfication: false,
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked,setIsClicked] = useState(initialState)
    const handleClick = (clicked)=>{
        setIsClicked({...initialState,[clicked]:true})
    }
    const  [currentColor , setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false)
    const setMode = (e)=>{
        setCurrentMode(e.target.value)

        localStorage.setItem('themeMode', e.target.value)
        setThemeSettings(false)
    }
    const setColor = (color)=>{
        setCurrentColor(color)

        localStorage.setItem('colorMode', color)
        setThemeSettings(false)
    }

    const [screenSize,setScreenSize] = useState(undefined)
    return (
        <StateContext.Provider 
        value={{activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setCurrentColor,
        setCurrentMode,
        themeSettings,
        setThemeSettings,
        setColor,
        setMode}}>

            {children}

        </StateContext.Provider>
    )
}


export const useStateContext = ()=> useContext(StateContext)