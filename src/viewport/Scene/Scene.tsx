import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "../../components/Header";
import { Filter } from "../../components/Filter";
import Home from "../../pages/Home";
import Restaurant from "../../pages/Restaurant";

export default function Scene() {
  return (
    <Suspense fallback={"loading...."}>
      <BrowserRouter>
        <Header />
        <Filter />
        <Routes>
          <Route path="/"
            element={<Home />}
          />
          <Route path="/:id"
            element={<Restaurant />}
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}
