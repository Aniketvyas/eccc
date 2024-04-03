import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from  "./components/layout/Home"


const RouteDetails = (
<Router>
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
</Router>

)

// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Root />,
//       loader: rootLoader,
//       children: [
//         {
//           path: "team",
//           element: <T eam />,
//           loader: teamLoader,
//         },
//       ],
//     },
//   ]);

export default RouteDetails;