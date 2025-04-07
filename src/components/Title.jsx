import { useContext } from "react";
import { ThemeContext } from "../hooks/ThemeProvider";

const Title = () => {
  const { darkMode } = useContext(ThemeContext); 

  return <h1 className={darkMode ? "title-dark" : "title-normal"}>Title</h1>;
};

export default Title;
