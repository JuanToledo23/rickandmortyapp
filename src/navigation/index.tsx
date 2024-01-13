import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";
import Detail from "../views/detail/Detail";

function Navigation() {
    return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/detail/:characterId" element={<Detail />} />
        </Routes>
      </BrowserRouter>
      </>
    )
}

export default Navigation;