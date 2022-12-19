// import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import PatientManagement from "../Pages/PatientManagement/PatientManagement";

const routes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/patient',
        element: <PatientManagement />
    },
]

export default routes;