import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn, SignUp, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

import NavBar from "./components/NavBar";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import ExpensesPage from "./pages/ExpensesPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <BrowserRouter>
      {/* Show NavBar only if user is signed in */}
      <SignedIn>
        <NavBar />
      </SignedIn>

      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<SignIn routing="path" path="/login" afterSignInUrl="/" />} />
        <Route path="/signup" element={<SignUp routing="path" path="/signup" afterSignUpUrl="/" />} />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <>
              <SignedIn>
                <DashboardPage />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              <SignedIn>
                <ProfilePage />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        <Route
          path="/expenses"
          element={
            <>
              <SignedIn>
                <ExpensesPage />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        <Route
          path="/settings"
          element={
            <>
              <SignedIn>
                <SettingsPage />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        {/* Catch-all route (redirects to login if not signed in) */}
        <Route
          path="*"
          element={
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
