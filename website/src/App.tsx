import { Fragment, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import "locomotive-scroll/dist/locomotive-scroll.min.css";
import Home from "./Pages/Home";


const App = () => {

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<Home />}
        />

      </Routes>
    </AnimatePresence>
  );
};

export default App;
