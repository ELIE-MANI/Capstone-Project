import React from "react";
import useProfileStore from "../store/Profile";

function ProfileForm() {
  const{profile, updateProfile} = useProfileStore();

  const handleChange = (e) => {
    const {name, value} = e.target;
    updateProfile(name, value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile submitted:", profile);
  }
}
  return (
   <>
   <div className="max-w-md mx-auto p-6 bg-gray-500 text-white rounded-xl shadow-md">
    <h2 className="text-2xl font-bold mb-4 text text-center">My Profile</h2>
   </div>
   
   
   </> 
  )