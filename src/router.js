import { useRoutes } from "react-router-dom";
import LayoutDashBoard from "./layouts/DashBoard/layout_dashboard";
// import AdminLayout from "./layouts/AdminLayout";
import HomePage from "./page/dashboard/dashboard";
import PatientPage from "./page/manage-patients-page/manage-patients";
import MedicinePage from "./page/manage-medicines-page/manage-medicines";
import LayoutPatient from "./layouts/ManagePatients/layout_manage-patients";
import LayoutMedicine from "./layouts/ManageMedicines/layout_manage-medicines";
import LayoutEmployee from "./layouts/ManageEmployees/layout_manage-employees";
import LayoutDevice from "./layouts/ManageDevices/layout_manage-devices";
import EmployeePage from "./page/manage-employees-page/manage-employees";
import DevicePage from "./page/manage-devices-page/manage-devices";
import AdminPage from "./page/admin-page/dashboard";
import LayoutAdmin from "./layouts/Admin/layout_admin";
import LayoutPrevention from "./layouts/ManagePreventions/layout_manage-preventions";
import PreventionPage from "./page/manage-preventions-page/manage-prevention";
import LayoutAddMedicine from "./layouts/AddMedicines/layout_add-medicines";
import AddMedicine from "./page/manage-medicines-page/add-medicine";
import LayoutAddDevice from "./layouts/AddDevices/layout_add-devices";
import AddDevice from "./page/manage-devices-page/add-device";
export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <LayoutDashBoard />,
      children: [
        { index: true, element: <HomePage /> },
      ],
    },
    {
      path: "/manage-patients",
      element: <LayoutPatient />,
      children: [
        { index: true, element: <PatientPage /> },
      ],
    },
    {
      path: "/manage-medicines",
      element: <LayoutMedicine />,
      children: [
        { index: true, element: <MedicinePage /> },
      ],
    },
    {
      path: "/manage-employees",
      element: <LayoutEmployee />,
      children: [
        { index: true, element: <EmployeePage /> },
      ],
    },
    {
      path: "/manage-devices",
      element: <LayoutDevice />,
      children: [
        { index: true, element: <DevicePage /> },
      ],
    },
    {
      path: "/manage-preventions",
      element: <LayoutPrevention />,
      children: [
        { index: true, element: <PreventionPage /> },
      ],
    },
    {
      path: "/admin",
      element: <LayoutAdmin />,
      children: [
        { index: true, element: <AdminPage /> },
      ],
    },
    {
      path: "/add-medicine",
      element: <LayoutAddMedicine />,
      children: [
        { index: true, element: <AddMedicine /> },
      ],
    },
    {
      path: "/add-device",
      element: <LayoutAddDevice />,
      children: [
        { index: true, element: <AddDevice /> },
      ],
    },

  ]);
  return routes;
}
///