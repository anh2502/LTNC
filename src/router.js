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
      element: <Layout name="Trang chủ" />,
      children: [
        { index: true, element: <HomePage /> },
      ],
    },
    {
      path: "/manage-patients",
      element: <Layout name="Quản lý bệnh nhân" />,
      children: [
        { index: true, element: <PatientPage /> },
      ],
    },
    {
      path: "/manage-medicines",
      element: <Layout name="Quản lý thuốc" />,
      children: [
        { index: true, element: <MedicinePage /> },
      ],
    },
    {
      path: "/manage-employees",
      element: <Layout name="Quản lý nhân viên" />,
      children: [
        { index: true, element: <EmployeePage /> },
      ],
    },
    {
      path: "/manage-devices",
      element: <Layout name="Quản lý thiết bị" />,
      children: [
        { index: true, element: <DevicePage /> },
      ],
    },
    {
      path: "/manage-preventions",
      element: <Layout name="Quản lý phòng bệnh" />,
      children: [
        { index: true, element: <PreventionPage /> },
      ],
    },
    {
      path: "/admin",
      element: <Layout name="Admin" />,
      children: [
        { index: true, element: <AdminPage /> },
      ],
    },
    {
      path: "/add-medicine",
      element: <Layout name="Thêm thuốc" />,
      children: [
        { index: true, element: <AddMedicine /> },
      ],
    },
    {
      path: "/add-device",
      element: <Layout name="Thêm thiết bị" />,
      children: [
        { index: true, element: <AddDevice /> },
      ],
    },
    {
      path: "/add-employee",
      element: <Layout name="Thêm nhân viên" />,
      children: [
        { index: true, element: <AddEmployee /> },
      ],
    },
    {
      path: "/add-patient",
      element: <Layout name="Thêm bệnh nhân" />,
      children: [
        { index: true, element: <AddPatient /> },
      ],
    },
    {
      path: "/info-medicine",
      element: <Layout name="Thông tin thuốc" />,
      children: [
        { index: true, element: <MedicineInfo /> },
      ],
    },

  ]);
  return routes;
}
///