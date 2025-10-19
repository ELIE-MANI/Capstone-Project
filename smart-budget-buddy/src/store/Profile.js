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
const useSettingsStore = create((set) => ({
  settings: {
    id: new Date().getTime(),
    monthlyBudget: 0,   
    savingsGoal: 0,
    currency: '',
    budgetAlert: false,
    expenseReminder: false,

  },
  setSettings: (settings) => set({ settings}),
  
  updateSettings: (field,value) =>
    set((state) => ({
      settings:{...state.settings,[field]:value},
    })),

  }))
export {useSettingsStore};
export default useProfileStore;
