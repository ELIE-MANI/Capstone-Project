
import ProfileForm from "../components/ProfileForm";
import { UserProfile, useUser } from "@clerk/clerk-react";

function ProfilePage() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 bg-primary h-20 flex items-center justify-center">My Profile</h2>
      <UserProfile />
    </>
  );
}

export default ProfilePage;