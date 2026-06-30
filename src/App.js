import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LandingPage from "./Pages/Landing Page/LandingPage";
import DocumentPage from "./Pages/document Page/DocumentPage";
import IntroductionPage from "./Pages/Introduction Page/IntroductionPage";
import TableOfContent from "./Pages/Table of Content/TableOfContent";
import LogoMark from "./Pages/LogoMark/LogoMark";
import LogoType from "./Pages/Logo Type/LogoType";
import CompanyID from "./Pages/Company I.D/CompanyID";
import Assignment from "./Pages/Assignment Page/PrintGeneratedAssessmentLetter";
import ChapterOne from "./Pages/Another Chapter/ChapterOne";
import ProcurementLandingPage from "./Pages/E-PROCUREMENT LANDING PAGE/ProcurementLandingPage";
import Certificate from "./Pages/Certificate/Certificate";
import AboutUs from "./Pages/E-PROCUREMENT LANDING PAGE/AboutUs";
import Sidebar from "./Components/Sidebar/Sidebar";
import DashboardLayout from "./Components/DashboardLayout/DashboardLayout";
import DashboardHome from "./Pages/DashboardHome/DashboardHome";
import Users from "./Pages/Users/Users";
import SocialRegisterDashboard from "./Pages/Social Register Dashboard/SocialRegisterDashboard";
import HouseholdDashboard from "./Pages/Household dashboard/HouseholdDashboard";
import HeaderSocial from "./Components/Header Social/HeaderSocial";
import Layout from "./Components/Layout";
import Profile from "./Pages/ProfileOGSR/Profile"; 
import GMP from "./Pages/GMP/GMP";
import ForgotPassword from "./Pages/GMP/ForgotPassword";
import Verify from "./Pages/GMP/Verify";
import ResetPassword from "./Pages/GMP/ResetPassword";
import LayoutGMP from "./Components/SidebarGMP/LayoutGMP";
import SidebarGMP from "./Components/SidebarGMP/SidebarGMP";
import SearchBar from "./Components/SearchBarGMP/SearchBar";
import DashboardGMP from "./Pages/GMP/DashboardGMP/DashboardGMP";
import Consent from "./Pages/Certificate/Consent";
import TaskToDo from "./Pages/TaskToDo/TaskToDo";
import SubmitDocument from "./Pages/RCCG/SubmitDocument";
import Resubmit from "./Pages/RCCG/Resubmit";
import Calculator from "./Pages/Calculator.jsx";
import TodoList from "./Pages/TodoList/TodoList";
import Login from "./Pages/TodoList/Login.js";
import GofamintJubilee from "./Pages/GofamintAnticipate/GofamintJubilee";
import Payslip from "./Pages/Payslip/Payslip";


function App() {
  return (
    <Routes>
        <Route  path="/dashboardsocial" element={<DashboardLayout/>}>
          <Route index element={<SocialRegisterDashboard />} />
          <Route path="users" element={<Users />} />
          {/* <Route path="socialregisterdashboard" element={<SocialRegisterDashboard/>}/> */}
        </Route>

        <Route path="/home" element={<HouseholdDashboard /> }/>

        <Route path="/dashboard" element={ <Layout/> }>
           <Route index element={<HouseholdDashboard />} />
            <Route path="household" element={<HouseholdDashboard />} />
            <Route path="assistance" element={<HouseholdDashboard />} />
            <Route path="application" element={<DocumentPage />} />
            <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="dashboardgmp" element={<LayoutGMP />}>
          <Route index element={<DashboardGMP />} />
        </Route>


      <Route path="/" element={<Home />} />
      <Route path="/landingpage" element={<LandingPage />} />
      <Route path="/documentpage" element={<DocumentPage />} />
      <Route path="/introductionpage" element={<IntroductionPage />} />
      <Route path="/tableofcontent" element={<TableOfContent />} />
      <Route path="/logomark" element={<LogoMark />} />
      <Route path="/logotype" element={<LogoType />} />
      <Route path="/companyid" element={<CompanyID />} />
      <Route path="/assignment" element={<Assignment />}/>
      <Route path="/chapter" element={<ChapterOne/>}/>
      <Route path="/procurement" element={<ProcurementLandingPage/>}/>
      <Route path="/certificate" element={<Certificate/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/gmp" element={<GMP />}/>
      <Route path="/forgot" element={<ForgotPassword />}/>
      <Route path="/verify" element={<Verify />}/>
      <Route path="/reset" element={<ResetPassword />}/>
      <Route path="/consent" element={<Consent />}/>
      <Route path="/task" element={<TaskToDo />}/>
      <Route path="/submitdocument" element={<SubmitDocument />}/>
      <Route path="/resubmit" element={<Resubmit />}/>
      <Route path="/calculator" element={<Calculator />}/>    
      <Route path="/todo-list" element={<TodoList />}/>    
      <Route path="/login-testing" element={<Login />}/>    
      <Route path="/gofamint-jubilee" element={<GofamintJubilee />}/>    
      <Route path="/payslip" element={<Payslip />}/>    
    </Routes>
  );
}

export default App;
