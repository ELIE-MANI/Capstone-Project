import { create } from "zustand";

const useProfileStore = create((set) => ({
    profile: {
    avatar: "", 
    name: "",
    email: "",
    phone: "",
    address: "",
  },

  setProfile: (profile) => set({ profile}),
  updateProfile: (field,value) =>
    set((state) => ({
      profile:{...state.profile,[field]:value},
    })),
  

}))

export default useProfileStore;
