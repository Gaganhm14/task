
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar, Footer, Sidebar } from './components';
import { Dash, Login } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={(<Login />)} />
            <Route
              path="/Dashboard"
              element={(
                <div className="min-h-screen">
                  <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                    <Navbar />
                  </div>
                  <div className="w-72 fixed sidebar bg-main-dark-bg">
                    <Sidebar />
                  </div>
                  <div
                    className="dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full"
                  >
                    <Dash />
                    <Footer />
                  </div>
                </div>
              )}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

