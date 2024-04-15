import { useState } from "react";
import GlobalFooter from "../../components/GlobalFooter";
import PersonalInfo from "./Components/PersonalInfo";
import ProfileHeader from "./Components/ProfileHeader";
import { Auth } from "../../utils/Auth";
import SettingDetail from "./Components/SettingDetail";

const ProfileSettingsPage: React.FC = () => {
  const [userAttributes, setUserAttributes] = useState(Auth.getUserAttribute());

  return (
    <div className="font-home" id="profile_page">
      <div className="profile_header">
        <ProfileHeader />
      </div>

      <div id="profile_settings_content" className="relative min-h-[900px]">
        <SettingDetail userAttributes={userAttributes} />
      </div>

      <div className="profile_footer">
        <GlobalFooter />
      </div>
    </div>
  );
};

export default ProfileSettingsPage;
