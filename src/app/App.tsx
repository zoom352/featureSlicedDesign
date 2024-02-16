import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      {/* <ThemeSwitcher /> */}
      {/* <button onClick={toggleTheme}>TOGGLE</button> */}
      <AppRouter />
    </div>
  );
};

export default App;
