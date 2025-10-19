import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

function Dashboard() {
  return <h1 style={{ color: "green" }}>✅ Dashboard Page Loaded</h1>;
}

function App() {
  console.log("✅ App component rendered");
  return (
    <>
      <h2 style={{ color: "blue" }}>🔹 App is Rendering</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignIn routing="path" path="/login" />} />
          <Route
            path="/"
            element={
              <>
                <SignedIn>
                  <Dashboard />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
