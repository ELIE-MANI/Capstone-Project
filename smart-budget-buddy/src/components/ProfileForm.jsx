
import useProfileStore from "../store/Profile";
import { saveProfile } from "../api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function ProfileForm() {
 const { profile, updateProfile } = useProfileStore();
 const queryClient = useQueryClient ();

 const mutation = useMutation ({
  mutationFn: saveProfile,
  onSuccess: () => {
    queryClient.invalidateQueries(["profile"]);
    alert("Profile updated successfully!");
  },
  onError: (error) => {
    alert("Error updating profile: " + error.message);
  },
});

  const handleUpdate = () => {
   console.log('Updating profile:', profile);
    mutation.mutate(profile);
    
  };

  return (
    <div className="max-w-md mx-auto p-6 text-black rounded-xl shadow-md">
      <h2 className="text-lg font-bold mb-4 ">Account Settings</h2>
      <div className="flex flex-col gap-4">

        <label htmlFor="name">User Name</label>
        <input className="bg-emerald-100 rounded p-2"
        type="text"
        id="name"
        placeholder="Full Name"
        value={profile.name}
        onChange={(e) => updateProfile("name", e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input className="bg-emerald-100 rounded p-2"
          type="email"
          id="email"
          placeholder="Email"
          value={profile.email}
          onChange={(e) => updateProfile("email", e.target.value)}
        />
        <label htmlFor="phone">Phone Number</label>
        <input className="bg-emerald-100 rounded p-2"
          type="tel"
          id="phone"
          placeholder="Phone Number"
          value={profile.phone}
          onChange={(e) => updateProfile("phone", e.target.value)}
        />
        <label htmlFor="address">Address</label>
        <input className="bg-emerald-100 rounded p-2"
          type="text"
          id="address"
          placeholder="Address"
          value={profile.address}
          onChange={(e) => updateProfile("address", e.target.value)}
        />
         
        <button className="bg-primary text-black w-40 h-12 rounded-2xl cursor-pointer" 
        onClick={handleUpdate}>{mutation.isLoading ? "Updating..." : "Update Profile"}</button>
      </div>
    </div>
  );
}

export default ProfileForm;
