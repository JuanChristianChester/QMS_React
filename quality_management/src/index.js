import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"; // Import your CSS stylesheet
//import all pages from pages/ in alphabetical order
import AddQMSRequirement from "./Pages/AddQMSRequirement";
import EditEvidence from "./Pages/EditEvidence";
import EditQMSRequirement from "./Pages/EditQMSRequirement";
import EditWindow from "./Pages/EditWindow";
import EvidenceMenu from "./Pages/EvidenceMenu";
import InputEvidence from "./Pages/InputEvidence";
import Layout from "./Pages/Elements/Layout";
import RecordFeedback from "./Pages/RecordFeedback";
import RecordFeedbackResponse from "./Pages/RecordFeedbackResponse";
import ViewEvidence from "./Pages/ViewEvidence";
import ViewFeedback from "./Pages/ViewFeedback";
import ViewFeedbackDetails from "./Pages/ViewFeedbackDetails";
import ViewPDCAStages from "./Pages/ViewPDCAStages";
import ViewQMSRequirements from "./Pages/ViewQMSRequirements";
import ViewWhereQMSRequirementsMet from "./Pages/ViewWhereQMSRequirementsMet";
import Settings from "./Pages/Settings";
import Login from "./Pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} > 
        {/* add below a route to every page in pages */}
          <Route path="/" element={<EvidenceMenu />} />
          <Route path="/AddQMSRequirement" element={<AddQMSRequirement />} />
          <Route path="/EditEvidence" element={<EditEvidence />} />
          <Route path="/EditQMSRequirement" element={<EditQMSRequirement />} />
          <Route path="/EditWindow" element={<EditWindow />} />
          <Route path="/InputEvidence" element={<InputEvidence />} />
          <Route path="/RecordFeedback" element={<RecordFeedback />} />
          <Route path="/RecordFeedbackResponse" element={<RecordFeedbackResponse />} />
          <Route path="/ViewEvidence" element={<ViewEvidence />} />
          <Route path="/ViewFeedback" element={<ViewFeedback />} />
          <Route path="/ViewFeedbackDetails" element={<ViewFeedbackDetails />} />
          <Route path="/ViewPDCAStages" element={<ViewPDCAStages />} />
          <Route path="/ViewQMSRequirements" element={<ViewQMSRequirements />} />
          <Route path="/ViewWhereQMSRequirementsMet" element={<ViewWhereQMSRequirementsMet />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);