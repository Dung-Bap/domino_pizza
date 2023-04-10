import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publishRoutes } from "~/routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publishRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
