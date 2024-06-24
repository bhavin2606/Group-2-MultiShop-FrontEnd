import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { routesObject } from "./Routes";
import Structure from "../layout/Structure";
import ErrorPage from "../components/Common/ErrorPage";


export default function RoutesPath() {
  return (
    <Routes>
      {routesObject.map((route, index) => (
        <>
          <Route
            key={index}
            element={
              route.layout ? (
                <Structure>{route.element}</Structure>
              ) : (
                route.element
              )
            }
            path={route.path}
          >
            {route.children &&
              route.children.map((paths, index) => (
                <>
                  <Route
                    key={index}
                    element={paths.element}
                    path={paths.path}
                  ></Route>
                </>
              ))}
          </Route>
        </>
      ))}
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  );
}
