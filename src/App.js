import React, { useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { registerLicense } from '@syncfusion/ej2-base';
import Sidebar from './components/Sidebar'
import { Area, Bar, Calendar, ColorMapping, ColorPicker, Customers, Ecommerce, Editor, Employees, Financial, Kanban, Line, Orders, Pie, Pyramid, Stacked } from "./pages";
import { Navbar, ThemeSettings } from "./components"
import { useStateContext } from "./contexts/ContextProvider";
import '../node_modules/@syncfusion/ej2-base/styles/material.css';
import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';  
import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
import "../node_modules/@syncfusion/ej2-react-grids/styles/material.css";




function App() {
  // Registering Syncfusion license key
  // date 04:10:2022
  registerLicense('ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0VjXX5ac3VWQmRfWEY=');

  /* const activeMenu = true; -deleted */

  const {activeMenu , themeSettings,setThemeSettings, currentColor,currentMode} = useStateContext()





  return (

    <div className={currentMode === "Dark" ? 'dark' : ''}>
    { themeSettings && <ThemeSettings/>}
      <BrowserRouter>

        <div className="flex relative dark:bg-black">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>

            <TooltipComponent content="Settings" position="Top" >
              <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:shadow-lg hover:shadow-blue-800 text-white" style={{ background: currentColor, borderRadius: "50%" }}
              onClick={()=>setThemeSettings(true)}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-stone-800 bg-white">
               <Sidebar/>
            </div>
          ) : (
            <div className="w-0 dark:bg-stone-800">
              <Sidebar/>
            </div>
          )}
          <div className={
            activeMenu ? 'dark:bg-stone-900 bg-gray-100 min-h-screen md:ml-72 w-full' : 'dark:bg-stone-900 bg-gray-100 min-h-screen w-full flex-2'
          }>
            <div className="fixed md:static bg-gray-100 dark:bg-stone-800 navbar w-full">
              <Navbar/>
            </div>

            <div>
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce/>} />
                <Route path="/ecommerce" element={<Ecommerce/>} />
                {/* Pages */}
                <Route path="/orders" element={<Orders/>} />
                <Route path="/employees" element={<Employees/>} />
                <Route path="/customers" element={<Customers/>} />
                {/* Apps */}
                <Route path="/kanban" element={<Kanban/>} />
                <Route path="/editor" element={<Editor/>}/>
                <Route path="/calendar" element={<Calendar/>} />
                <Route path="/color-picker" element={<ColorPicker/>} />
                {/* Charts */}
                <Route path="/line" element={<Line/>} />
                <Route path="/area" element={<Area/>} />
                <Route path="/bar" element={<Bar/>} />
                <Route path="/pie" element={<Pie/>} />
                <Route path="/financial" element={<Financial/>} />
                <Route path="/color-mapping" element={<ColorMapping/>} />
                <Route path="/pyramid" element={<Pyramid/>} />               
                <Route path="/stacked" element={<Stacked/>} />
              </Routes>
            </div>

          </div>
        </div>

      </BrowserRouter>

    </div>


  );
}

export default App;
