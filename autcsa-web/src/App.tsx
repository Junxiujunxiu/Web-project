import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import ScrollSnap from "./pages/ScrollSnap";
import HomePage from "./pages/Home/HomePage";
import AuthPage from "./pages/Auth/AuthPage";
import EventsPage from "./pages/Event/EventsPage";
import NewsPage from "./pages/News/NewsPage";
import StaffPage from "./pages/Staff/StaffPage";
import EventDetailPage from "./pages/Event/EventDetailPage";
import NewsDetailPage from "./pages/News/NewsDetailPage";
import MembershipPage from "./pages/Membership/MembershipPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ProfilePage from "./pages/Profile/ProfilePage";
import ProfileSettingsPage from "./pages/Profile/ProfileSettingsPage";
import RegistrationPage from "./pages/Auth/RegistrationPage";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <React.Suspense fallback={<div>LOADING...</div>}>
        <Router>
          <div>
            <Routes>
              <Route path="/homePage" element={<HomePage />}></Route>
              <Route path="/authentication" element={<AuthPage />}></Route>
              <Route
                path="/authentication/signup"
                element={<RegistrationPage />}
              ></Route>
              <Route path="/eventsPage" element={<EventsPage />}></Route>
              <Route
                path="/eventsPage/detail"
                element={<EventDetailPage />}
              ></Route>
              <Route
                path="/newsPage/detail"
                element={<NewsDetailPage />}
              ></Route>
              <Route path="/newsPage" element={<NewsPage />}></Route>
              <Route path="/staffPage" element={<StaffPage />}></Route>

              <Route element={<ProtectedRoutes />}>
                <Route
                  path="/membershipPage"
                  element={<MembershipPage />}
                ></Route>
                <Route
                  path="/profile/dashboard"
                  element={<ProfilePage />}
                ></Route>
                <Route
                  path="/profile/settings"
                  element={<ProfileSettingsPage />}
                ></Route>
              </Route>
              <Route path="/scrollsnap" element={<ScrollSnap />}></Route>
              <Route path="*" element={<Navigate to="/homePage" />} />
            </Routes>
          </div>
        </Router>
      </React.Suspense>
    </QueryClientProvider>
  );
};

export default App;
