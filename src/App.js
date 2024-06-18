import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import JobSeeker from "./Components/JobSeeker";
import NewCompany from "./Components/NewCompany";
import AdminLogin from "./Components/Admin Login";
import FeedBack from "./Components/FeedBack";
import ContactUs from "./Components/Contact Us";
import { Navbar } from "./Components/Navbar";
import Header2 from "./Components/Header2";
import Header from "./Components/Header";
import PostNewJob from "./Components/PostNewJob";
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
function App() {
  return (
    <>
      <Router>
        <div className="container border my-3">
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
              <Route exact path="/JobSeeker" element={<JobSeeker />}></Route>
              <Route exact path="/NewCompany" element={<NewCompany />}></Route>
              <Route exact path="/Admin Login" element={<AdminLogin />}></Route>
              <Route exact path="/FeedBack" element={<FeedBack />}></Route>
              <Route exact path="/ContactUs" element={<ContactUs />}></Route>
              {/* <Route
                exact
                path="/CompanyLogin"
                element={<CompanyLogin />}
              ></Route> */}
              <Route
                eact
                path="/JobSeekerLogin"
                element={<JobSeekerLogin />}
              ></Route>
              <Route
                eact
                path="/CompanyLogin"
                element={<CompanyLogin />}
              ></Route>
              <Route eact path="/AdminPage" element={<AdminPage />}></Route>
              <Route exact path="/PostNewJob" element={<PostNewJob />}></Route>
              <Route
                exact
                path="/MyPostedJob"
                element={<MyPostedJob />}
              ></Route>
              <Route exact path="/MyAccount" element={<MyAccount />}></Route>
              <Route
                exact
                path="/ProfileMatch"
                element={<ProfileMatch />}
              ></Route>
              <Route exact path="/AppliedJob" element={<ContactUs />}></Route>
              <Route
                exact
                path="/ChangePassword"
                element={<ChangePassword />}
              ></Route>
              <Route exact path="/MyMessage" element={<ContactUs />}></Route>
              <Route exact path="/MyInbox" element={<MyInbox />}></Route>
              <Route exact path="/LogOut" element={<LogOut />}></Route>
              <Route exact path="/Sent" element={<Sent />}></Route>
              <Route
                exact
                path="/NewJobSeeker"
                element={<NewJobSeeker />}
              ></Route>
              <Route exact path="/NewCompany" element={<NewCompany />}></Route>
              <Route
                exact
                path="/JobSeekerReport"
                element={<JobSeekerReport />}
              ></Route>
              <Route
                exact
                path="/CompanyReport"
                element={<CompanyReport />}
              ></Route>
              <Route
                exact
                path="/FeedBackReport"
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
