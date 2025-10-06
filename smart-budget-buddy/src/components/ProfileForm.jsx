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
   <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
    <input type="text" name="name" id="name" placeholder="Full Name"
    value={profile.name} 
    onChange={handleChange}
    className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 "
    />
    <input type="email" name="email" id="email" placeholder="Email"
    value={profile.email}
    onChange={handleChange}
    className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 "
     />
    <input type="tel" name="phone" id="phone" placeholder="Phone Number"
    value={profile.phone}
    onChange={handleChange}
    className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 "
    />
    <input type="text" name="address" id="address" placeholder="Address"
    value={profile.address}
    onChange={handleChange}
    className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 "
    />

    <button
     type="submit"
     className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition duration-300 "
     >Update Profile</button>

   </form>
   
   </> 
  )