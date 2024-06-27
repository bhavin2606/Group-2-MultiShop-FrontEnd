import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { routesObject } from "./Routes";
import Structure from "../layout/Structure";
import ErrorPage from "../components/Common/ErrorPage";
import Breadcrumbs from "./Breadcrumbs";

export default function RoutesPath() {
  // const breadcrumbs = [
  //   { label: 'Home', link: '/' },
  //   { label: 'Shops', link: '/shop' },
  //   { label: 'ShoppingDetails', link: '/shop/:id' },
  //   { label: 'Checkout', link: '/checkout' },
  //   // { label: 'Contact', link: '/contact' },
  //   // { label: 'About', link: '/about' },
  //   // { label: 'Help', link: '/help' },
  //   // { label: 'Faqs', link: '/faqs' },
  //   // { label: 'Cart', link: '/cart' },
  //   ];
    

  return (
      <>
    <Routes>
      {routesObject.map((route, index) => (
        <Route
        key={index}
        element={
          route.layout ? (
            <>
            <Structure>{route.element}</Structure>
            {/* <Breadcrumbs breadcrumbs={breadcrumbs} /> */}
            </>
            ) : (
              route.element
            )
          }
          path={route.path}
        >
          {route.children &&
            route.children.map((paths, index) => (
              <Route
                key={index}
                element={paths.element}
                path={paths.path}
              ></Route>
            ))}
        </Route>
      ))}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </>
  );
}
