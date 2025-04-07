import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './hooks/ThemeProvider';
import Title from './components/Title';
import ButtonTheme from './components/ButtonTheme';
import "./index.css";

const AppContent = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "container-dark" : "container"}>
      <Title />
      <ButtonTheme />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
