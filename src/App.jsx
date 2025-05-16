import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DefaultLayout from './protected/layout/DefaultLayout'
import PrivateRoute from './protected/layout/PrivateRoute'
import Dashboard from './protected/dashboard/Dashboard'
import AppContextProvider from "./context/AppContext";
import Login from "./public/login/Login";
import Personnel from "./protected/personnel/Personnel";
import Users from "./protected/users/Users";
import OrganisationalUnits from "./protected/organisational-units/OrganisationalUnits";
import Reports from "./protected/reports/Reports";
import AuditLogs from "./protected/audit-logs/AuditLogs";
import Landing from "./public/landing/Landing";
import Register from "./public/register/Register";
import ForgetPassword from "./public/password/ForgetPassword";
import ResetLink from "./public/password/ResetLink";
import ResetPassword from "./public/password/ResetPassword";
import ResetSuccess from "./public/password/ResetSuccess";
import EmailVerification from "./public/register/EmailVerification";
import SignupSuccess from "./public/register/SignupSuccess";
import MembershipManagement from "./protected/membership-management/MembershipManagement";
import MembershipManagementWings from "./protected/membership-management/MembershipManagementWings";
import { MembershipManagementGroups } from "./protected/membership-management/MembershipManagementGroups";
import MembershipManagementFamilies from "./protected/membership-management/MembershipManagementFamilies";
import MembershipManagementMembers from "./protected/membership-management/MembershipManagementMembers";

function App() {
  
  return (
    <div className={`w-full `}>
      <AppContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgetPassword />} />
            <Route path="/reset-link" element={<ResetLink />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/reset-success" element={<ResetSuccess />} />
            <Route path="/email-verification" element={<EmailVerification />} />
            <Route path="/signup-success" element={<SignupSuccess />} />
            <Route element={<PrivateRoute><DefaultLayout /></PrivateRoute>}>
              <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
              <Route path="/branch-management/branch-list" element={<PrivateRoute><MembershipManagement /></PrivateRoute>} />
              <Route path="/membership-management/wings" element={<PrivateRoute><MembershipManagementWings /></PrivateRoute>} />
              <Route path="/membership-management/groups" element={<PrivateRoute><MembershipManagementGroups /></PrivateRoute>} />
              <Route path="/membership-management/families" element={<PrivateRoute><MembershipManagementFamilies /></PrivateRoute>} />
              <Route path="/membership-management/members" element={<PrivateRoute><MembershipManagementMembers /></PrivateRoute>} />
            </Route>
          </Routes>
        </Router>
      </AppContextProvider>
    </div>
  )
}

export default App
