import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import NewCompany from "./Components/NewCompany";
import FeedBack from "./Components/FeedBack";
import ContactUs from "./Components/Contact Us";
import { Navbar } from "./Components/Navbar";
import Header2 from "./Components/Header2";
import Header from "./Components/Header";
import MyPostedJob from "./Components/MyPostedJob";
import MyAccount from "./Components/MyAccount";
import ProfileMatch from "./Components/ProfileMatch";
import ChangePassword from "./Components/ChangePassword";
import MyInbox from "./Components/MyInbox";
import LogOut from "./Components/LogOut";
import Sent from "./Components/Sent";
import JobSeekerLogin from "./Components/JobSeeker Login";
import NewJobSeeker from "./Components/New JobSeeker";
import CompanyLogin from "./Components/Company Login";
import AdminPage from "./Components/AdminPage";
import JobSeekerReport from "./Components/JobSeekerReport";
import CompanyReport from "./Components/CompanyReport";
import FeedBackReport from "./Components/FeedBackReport";
import MyMessage from "./Components/MyMessage";
import Login from "./Components/Login";
import SingUp from "./Components/SingUp";
import JobMatches from "./Components/JobMatches";
import AppliedJob from "./Components/AppliedJob";
import PostNewJob from "./Components/PostNewJob";
import MySent from "./Components/MySent";
function App() {
  return (
    <>
      <Router>
        <div className="container border my-2">
          <div className="row">
            <div className="col-4 d-flex-col">
              <Header />
            </div>
            <div className="col-8 d-flex-col">
              <Header2 />
            </div>
          </div>
        </div>
        <div className="col-12 d-flex-col">
          <div className="container my-3">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />}></Route>

              <Route exact path="/login" element={<Login />}></Route>
              <Route exact path="/signUp" element={<SingUp />}></Route>
              <Route exact path="/feedBack" element={<FeedBack />}></Route>
              <Route exact path="/contactUs" element={<ContactUs />}></Route>
              <Route exact path="/jobMatches" element={<JobMatches />}></Route>
              {/* <Route
                exact
                path="/CompanyLogin"
                element={<CompanyLogin />}
              ></Route> */}
              <Route
                exact
                path="/jobSeekerLogin"
                element={<JobSeekerLogin />}
              ></Route>
              <Route
                exact
                path="/companyLogin"
                element={<CompanyLogin />}
              ></Route>
              <Route eact path="/adminPage" element={<AdminPage />}></Route>
              <Route exact path="/postNewJob" element={<PostNewJob />}></Route>

              <Route
                exact
                path="/myPostedJob"
                element={<MyPostedJob />}
              ></Route>
              <Route exact path="/myAccount" element={<MyAccount />}></Route>
              <Route
                exact
                path="/profileMatch"
                element={<ProfileMatch />}
              ></Route>
              <Route exact path="/appliedJob" element={<AppliedJob />}></Route>
              <Route
                exact
                path="/changePassword"
                element={<ChangePassword />}
              ></Route>
              <Route exact path="/myMessage" element={<MyMessage />}></Route>
              <Route exact path="/myInbox" element={<MyInbox />}></Route>
              <Route exact path="/logOut" element={<LogOut />}></Route>
              <Route exact path="/sent" element={<Sent />}></Route>
              <Route exact path="/mySent" element={<MySent />}></Route>
              <Route
                exact
                path="/newJobSeeker"
                element={<NewJobSeeker />}
              ></Route>
              <Route exact path="/newCompany" element={<NewCompany />}></Route>
              <Route
                exact
                path="/jobSeekerReport"
                element={<JobSeekerReport />}
              ></Route>
              <Route
                exact
                path="/companyReport"
                element={<CompanyReport />}
              ></Route>
              <Route
                exact
                path="/feedBackReport"
                element={<FeedBackReport />}
              ></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}
export default App;
