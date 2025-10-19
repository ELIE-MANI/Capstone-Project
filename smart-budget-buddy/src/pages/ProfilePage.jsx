
import ProfileForm from "../components/ProfileForm";
import { useUser } from "@clerk/clerk-react";
import useProfileStore from "../store/Profile";
import { useEffect } from "react";

function ProfilePage() {
  const {user, isLoaded}= useUser();
  const setProfile = useProfileStore((state) => state.setProfile);

  useEffect(() => {
    if (isLoaded && user) {
      setProfile({
        avatar: user.profileImageUrl || "",
        name: `${user.fullName || ""} ${user.lastName || ""}`,
        email: user.primaryEmailAddress?.emailAddress || "",
        phone: user.primaryPhoneNumber?.phoneNumber || "",
        address: user.addresses?.[0]?.streetAddress || "",
      });
    }
  }, [isLoaded, user, setProfile]);
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return ( <>
  <h2 className="text-2xl font-bold mb-4 bg-primary h-20 flex items-center justify-center">My Profile</h2>
  <ProfileForm/>
  </> 
  );
}

export default ProfilePage;