import { useRoutes } from "react-router-dom";
// import AdminLayout from "./layouts/AdminLayout";
import HomePage from "./page/dashboard/dashboard";
import PatientPage from "./page/manage-patients-page/manage-patients";
import MedicinePage from "./page/manage-medicines-page/manage-medicines";
import EmployeePage from "./page/manage-employees-page/manage-employees";
import DevicePage from "./page/manage-devices-page/manage-devices";
import AdminPage from "./page/admin-page/dashboard";
import PreventionPage from "./page/manage-preventions-page/manage-prevention";
import AddMedicine from "./page/manage-medicines-page/add-medicine";
import AddDevice from "./page/manage-devices-page/add-device";
import AddEmployee from "./page/manage-employees-page/add-employee";
import AddPatient from "./page/manage-patients-page/add-patient";
import Layout from "./layouts/layout";
import MedicineInfo from "./page/manage-medicines-page/info-medicine";
export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout name="HOME" />,
      children: [
        { index: true, element: <HomePage /> },
      ],
    },
    {
      path: "/manage-patients",
      element: <Layout name="QUẢN LÝ BỆNH NHÂN" />,
      children: [
        { index: true, element: <PatientPage /> },
      ],
    },
    {
      path: "/manage-medicines",
      element: <Layout name="QUẢN LÝ THUỐC" />,
      children: [
        { index: true, element: <MedicinePage /> },
      ],
    },
    {
      path: "/manage-employees",
      element: <Layout name="QUẢN LÝ NHÂN VIÊN" />,
      children: [
        { index: true, element: <EmployeePage /> },
      ],
    },
    {
      path: "/manage-devices",
      element: <Layout name="QUẢN LÝ THIẾT BỊ" />,
      children: [
        { index: true, element: <DevicePage /> },
      ],
    },
    {
      path: "/manage-preventions",
      element: <Layout name="QUẢN LÝ PHÒNG BỆNH" />,
      children: [
        { index: true, element: <PreventionPage /> },
      ],
    },
    {
      path: "/admin",
      element: <Layout name="ADMIN" />,
      children: [
        { index: true, element: <AdminPage /> },
      ],
    },
    {
      path: "/add-medicine",
      element: <Layout name="THÊM THUỐC" />,
      children: [
        { index: true, element: <AddMedicine /> },
      ],
    },
    {
      path: "/add-device",
      element: <Layout name="THÊM THIẾT BỊ" />,
      children: [
        { index: true, element: <AddDevice /> },
      ],
    },
    {
      path: "/add-employee",
      element: <Layout name="THÊM NHÂN VIÊN" />,
      children: [
        { index: true, element: <AddEmployee /> },
      ],
    },
    {
      path: "/add-patient",
      element: <Layout name="THÊM BỆNH NHÂN" />,
      children: [
        { index: true, element: <AddPatient /> },
      ],
    },
    {
      path: "/info-medicine",
      element: <Layout name="THÔNG TIN THUỐC" />,
      children: [
        { index: true, element: <MedicineInfo /> },
      ],
    },

  ]);
  return routes;
}
///