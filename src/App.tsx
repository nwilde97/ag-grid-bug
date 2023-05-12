import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Page} from "./page";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {Home} from "./home";

export default () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route  path="/" Component={Home}  />
                <Route  path="/page" Component={Page}  />
            </Routes>
        </BrowserRouter>

    </>
  )
}
