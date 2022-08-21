import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import NewsComponent from './Components/NewsComponent/NewsComponent'


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [enableDarkMode, setDarkMode] = useState("light");
  const [darkModeText, setDarkModeText] = useState("Enable Dark Mode");
  const api ="e9879a34acf045109853c554ce366f3d"

  function dark(){
    document.body.style.backgroundColor = '#212529ee';
  }

  dark();

  return (

    <BrowserRouter>
      <Navbar enableDarkMode={enableDarkMode} darkModeText={darkModeText} />
      <Routes>
         
        <Route exact path='/' element={
          <NewsComponent key="general"
           api={api}
           pageSize={6}
           category="general"
           heading="Top Headlines"
           enableDarkMode={enableDarkMode}/>}
        />


        <Route exact path='/home' element={
          <NewsComponent key="home"
           api={api}
           pageSize={6}
           category="general"
           heading="Top Headlines"
           enableDarkMode={enableDarkMode}/>}
        />

        <Route exact path='/business' element={
          <NewsComponent key="business"
           api={api}
           pageSize={6}
           category="business"
            heading="Business"
           enableDarkMode={enableDarkMode}/>}
        />

        <Route exact path='/entertainment' element={
          <NewsComponent key="entertainment"
           api={api}
           pageSize={6}
           category="entertainment"
           heading="Entertainment"
           enableDarkMode={enableDarkMode}/>}
        />

        <Route exact path='/health' element={
          <NewsComponent key="health"
           api={api}
           pageSize={6}
           category="health"
           heading="Health"
           enableDarkMode={enableDarkMode}/>}
        />

        <Route exact path='/science' element={
          <NewsComponent key="science"
           api={api}
           pageSize={6}
           category="science"
           heading="Science"
           enableDarkMode={enableDarkMode}/>}
        />

        <Route exact path='/sports' element={
          <NewsComponent key="sports"
           api={api}
           pageSize={6}
           category="sports"
           heading="Sports"
           enableDarkMode={enableDarkMode}/>}
        />

        <Route exact path='/technology' element={
          <NewsComponent key="technology"
           api={api}
           pageSize={6}
           category="technology"
           heading="Technology"
           enableDarkMode={enableDarkMode}/>}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App

