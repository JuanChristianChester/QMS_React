import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClick = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const dropdownData = [
    {
      label: "Add",
      links: [
        { to: "/AddQMSRequirement", label: "QMS Requirement" },
        { to: "/InputEvidence", label: "Evidence" },
      ],
    },
    {
      label: "Edit",
      links: [
        { to: "/EditEvidence", label: "Evidence" },
        { to: "/EditQMSRequirement", label: "QMS Requirement" },
        { to: "/EditWindow", label: "Edit Window" },
      ],
    },
    {
      label: "Record",
      links: [
        { to: "/RecordFeedback", label: "Feedback" },
        { to: "/RecordFeedbackResponse", label: "Feedback Response" },
      ],
    },
    {
      label: "View",
      links: [
        { to: "/ViewEvidence", label: "Evidence" },
        { to: "/ViewFeedback", label: "Feedback" },
        { to: "/ViewFeedbackDetails", label: "Feedback Details" },
        { to: "/ViewPDCAStages", label: "PDCA Stages" },
        { to: "/ViewQMSRequirements", label: "QMS Requirements" },
        { to: "/ViewWhereQMSRequirementsMet", label: "Where QMS Requirements Met" }
      ],
    },
  ];

  return (
      <>
      <div className="nav-header">
      <nav className="nav-list">
        <ul >
          <li>
            <Link to="/">Evidence Menu</Link>
          </li>
          {dropdownData.map((dropdown, index) => (
            <li
              key={index}
              className={`dropdown ${activeDropdown === index ? "active" : ""
                }`}
              onClick={() => handleDropdownClick(index)}
            >
              <span>{dropdown.label}</span>
              <ul className="dropdown-menu">
                {dropdown.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </li>

          ))}

        </ul>
      </nav>
      <nav className="nav-list-right">
        <ul >
          <li>
            <Link to="/Settings">Settings</Link>
          </li>
          <li>
            <Link to="/Login">Log in</Link>
          </li>
        </ul>
      </nav>
    </div>
      <Outlet />
    </>
  );
};

export default Layout;
