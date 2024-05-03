import { useRoutes, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
// import AdminLayout from "./layouts/AdminLayout";
import HomePage from "./page/dashboard/dashboard";
import PatientPage from "./page/manage-patients-page/manage-patients";
import MedicinePage from "./page/manage-medicines-page/manage-medicines";
import EmployeePage from "./page/manage-employees-page/manage-employees";
import DevicePage from "./page/manage-devices-page/manage-devices";
import AdminPage from "./page/admin-page/admin";
import PreventionPage from "./page/manage-preventions-page/manage-prevention";
import AddMedicine from "./page/manage-medicines-page/add-medicine";
import AddDevice from "./page/manage-devices-page/add-device";
import AddEmployee from "./page/manage-employees-page/add-employee";
import AddPatient from "./page/manage-patients-page/add-patient";
import Layout from "./layouts/layout";
import MedicineInfo from "./page/manage-medicines-page/info-medicine";
import EmployeeInfo from "./page/manage-employees-page/info-employee";
import PatientInfo from "./page/manage-patients-page/info-patient";
import DeviceInfo from "./page/manage-devices-page/info-device";
import Login from "./page/UserAction/login";
import Signin from "./page/UserAction/signin";
export default function Router() {
  const isLoggedIn = useSelector(state => {
    if (state.auth.userData) {
      return state.auth.userData.userId;
    }
    return null; // hoặc giá trị mặc định phù hợp với ứng dụng của bạn
  });
  // const routes = useRoutes([
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/LTNC-BTL",
  //     element: <Layout name="Trang chủ" />,
  //     children: [
  //       { index: true, element: <HomePage /> },
  //     ],
  //   },
  //   {
  //     path: "/manage-patients",
  //     element: <Layout name="Quản lý bệnh nhân" />,
  //     children: [
  //       { index: true, element: <PatientPage /> },
  //     ],
  //   },
  //   {
  //     path: "/manage-medicines",
  //     element: <Layout name="Quản lý thuốc" />,
  //     children: [
  //       { index: true, element: <MedicinePage /> },
  //     ],
  //   },
  //   {
  //     path: "/manage-employees",
  //     element: <Layout name="Quản lý nhân viên" />,
  //     children: [
  //       { index: true, element: <EmployeePage /> },
  //     ],
  //   },
  //   {
  //     path: "/manage-devices",
  //     element: <Layout name="Quản lý thiết bị" />,
  //     children: [
  //       { index: true, element: <DevicePage /> },
  //     ],
  //   },
  //   {
  //     path: "/manage-preventions",
  //     element: <Layout name="Quản lý phòng bệnh" />,
  //     children: [
  //       { index: true, element: <PreventionPage /> },
  //     ],
  //   },
  //   {
  //     path: "/admin",
  //     element: <Layout name="Quản trị viên" />,
  //     children: [
  //       { index: true, element: <AdminPage /> },
  //     ],
  //   },
  //   {
  //     path: "/manage-medicines/add-medicine",
  //     element: <Layout name="Thêm thuốc" />,
  //     children: [
  //       { index: true, element: <AddMedicine /> },
  //     ],
  //   },
  //   {
  //     path: "/manage-devices/add-device",
  //     element: <Layout name="Thêm thiết bị" />,
  //     children: [
  //       { index: true, element: <AddDevice /> },
  //     ],
  //   },
  //   {
  //     path: "/manage-employees/add-employee",
  //     element: <Layout name="Thêm nhân viên" />,
  //     children: [
  //       { index: true, element: <AddEmployee /> },
  //     ],
  //   },
  //   {
  //     path: "/manage-patients/add-patient",
  //     element: <Layout name="Thêm bệnh nhân" />,
  //     children: [
  //       { index: true, element: <AddPatient /> },
  //     ],
  //   },
  //   {
  //     path: "/manage-medicines/info-medicine",
  //     element: <Layout name="Thông tin thuốc" />,
  //     children: [
  //       { index: true, element: <MedicineInfo /> },
  //     ],
  //   },
  //   {
  //     path: "/manage-employees/info-employee",
  //     element: <Layout name="Thông tin nhân viên" />,
  //     children: [
  //       { index: true, element: <EmployeeInfo /> },
  //     ],
  //   },
  //   {
  //     path: "/manage-patients/info-patient",
  //     element: <Layout name="Thông tin bệnh nhân " />,
  //     children: [
  //       { index: true, element: <PatientInfo /> },
  //     ],
  //   },
  //   {
  //     path: "/manage-devices/info-device",
  //     element: <Layout name="Thông tin thiết bị" />,
  //     children: [
  //       { index: true, element: <DeviceInfo /> },
  //     ],
  //   },

  // ]);
  const routes = useRoutes([
    {
      path: '/',
      element: isLoggedIn ? <Navigate to="/LTNC-BTL" /> : <Navigate to="/login" />
    },
    {
      path: "/login",
      element: !isLoggedIn ? <Login /> : <Navigate to="/LTNC-BTL" />
    },
    {
      path: "/LTNC-BTL",
      element: isLoggedIn ? <Layout name="Trang chủ" /> : <Navigate to="/login" />,
      children: [
        { index: true, element: <HomePage /> },
      ],
    },
    {
      path: "/manage-patients",
      element: isLoggedIn ? <Layout name="Quản lý bệnh nhân" /> : <Navigate to="/login" />,
      children: [
        { index: true, element: <PatientPage /> },
      ],
    },
    {
      path: "/manage-medicines",
      element: isLoggedIn ? <Layout name="Quản lý thuốc" /> : <Navigate to="/login" />,
      children: [
        { index: true, element: <MedicinePage /> },
      ],
    },
    {
      path: "/manage-employees",
      element: isLoggedIn ? <Layout name="Quản lý nhân viên" /> : <Navigate to="/login" />,
      children: [
        { index: true, element: <EmployeePage /> },
      ],
    },
    {
      path: "/manage-devices",
      element: isLoggedIn ? <Layout name="Quản lý thiết bị" /> : <Navigate to="/login" />,
      children: [
        { index: true, element: <DevicePage /> },
      ],
    },
    {
      path: "/manage-preventions",
      element: isLoggedIn ? <Layout name="Quản lý phòng bệnh" /> : <Navigate to="/login" />,
      children: [
        { index: true, element: <PreventionPage /> },
      ],
    },
    {
      path: "/admin",
      element: isLoggedIn ? <Layout name="Quản trị viên" /> : <Navigate to="/login" />,
      children: [
        { index: true, element: <AdminPage /> },
      ],
    },
    {
      path: "/manage-medicines/add-medicine",
      element: isLoggedIn ? <Layout name="Thêm thuốc" /> : <Navigate to="/login" />,
      children: [
        { index: true, element: <AddMedicine /> },
      ],
    },
    {
      path: "/manage-devices/add-device",
      element: isLoggedIn ? <Layout name="Thêm thiết bị" /> : <Navigate to="/login" />,
      children: [
        { index: true, element: <AddDevice /> },
      ],
    },
    {
      path: "/manage-employees/add-employee",
      element: isLoggedIn ? <Layout name="Thêm nhân viên" /> : <Navigate to="/login" />,
      children: [
        { index: true, element: <AddEmployee /> },
      ],
    },
    {
      path: "/manage-patients/add-patient",
      element: isLoggedIn ? <Layout name="Thêm bệnh nhân" /> : <Navigate to="/login" />,
      children: [
        { index: true, element: <AddPatient /> },
      ],
    },
    {
      path: "/manage-medicines/info-medicine",
      element: isLoggedIn ? <Layout name="Thông tin thuốc" /> : <Navigate to="/login" />,
      children: [
        { index: true, element: <MedicineInfo /> },
      ],
    },
    {
      path: "/manage-employees/info-employee/:id",
      element: isLoggedIn ? <Layout name="Thông tin nhân viên" /> : <Navigate to="/login" />,
      children: [
        { index: true, element: <EmployeeInfo /> },
      ],
    },
    {
      path: "/manage-patients/info-patient/:id",
      element: isLoggedIn ? <Layout name="Thông tin bệnh nhân " /> : <Navigate to="/login" />,
      children: [
        { index: true, element: <PatientInfo /> },
      ],
    },
    {
      path: "/manage-devices/info-device",
      element: isLoggedIn ? <Layout name="Thông tin thiết bị" /> : <Navigate to="/login" />,
      children: [
        { index: true, element: <DeviceInfo /> },
      ],
    },
    {
      path: "/signin",
      element: <Signin />,
      children: [
        { index: true, element: <Signin /> },
      ],
    },
  ]);

  return routes;
}
///