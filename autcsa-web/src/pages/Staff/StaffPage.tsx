import React from "react";
import GlobalFooter from "../../components/GlobalFooter";
import GlobalHeader from "../../components/header/GlobalHeader";
import StaffList from "./Components/StaffList";

const StaffPage: React.FC = () => {
  return (
    <div className="font-home" id="staff_page">
      <div className="staff_header">
        <GlobalHeader currentPage="staff" />
      </div>

      <div className="staff_body">
        <StaffList />
      </div>
      <div className="staff_footer">
        <GlobalFooter />
      </div>
    </div>
  );
};

export default StaffPage;
