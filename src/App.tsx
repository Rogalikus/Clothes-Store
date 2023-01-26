import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./scss/app.scss";
import { lazily } from "react-lazily";
import { SneakersContent } from "./pages/Items/Sneakers";
import { MainLayout } from "./pages/MainLayout/MainLayout";

const { Cart } = lazily(
  () => import(/* webpackChunkName: 'Cart' */ "./pages/Cart/Cart")
);

// const Cart = Loadable({
//   loader: () => import(/* webpackChunkName: 'Cart' */ "./pages/Cart/Cart"),
//   loading: () => <div> Загрузка ... </div>,
// });

const { NotFound } = lazily(
  () => import(/* webpackChunkName: 'NotFound' */ "./pages/NotFound/NotFound")
);
const { FullInfo } = lazily(
  () => import(/* webpackChunkName: 'FullInfo' */ "./pages/Items/FullInfo")
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<SneakersContent />} />
        <Route
          path="*"
          element={
            <Suspense>
              <NotFound />
            </Suspense>
          }
        />
        <Route
          path="cart"
          element={
            <Suspense>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="items/:id"
          element={
            <Suspense>
              <FullInfo />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
