import GlobalFooter from "../../components/GlobalFooter";
import ProfileHeader from "./Components/ProfileHeader";
import { useState } from "react";
import { Auth } from "../../utils/Auth";
import PersonalInfo from "./Components/PersonalInfo";

const ProfilePage: React.FC = () => {
  const [userAttributes, setUserAttributes] = useState(Auth.getUserAttribute());

  return (
    <div className="font-home" id="profile_page">
      <div className="profile_header">
        <ProfileHeader />
      </div>

      <div id="profile_content" className="relative min-h-[900px]">
        <PersonalInfo userAttributes={userAttributes} />
      </div>

      <div className="profile_footer">
        <GlobalFooter />
      </div>
    </div>
  );
};

export default ProfilePage;
