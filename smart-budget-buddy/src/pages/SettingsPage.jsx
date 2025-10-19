import SettingList from "../components/SettingList";
import SettingCreate from "../components/SettingCreate";

function SettingsPage() {
  return (
    <div >
    <div className="bg-primary text-black text-center py-6 rounded-t-2xl" >
       <h1 className="text-2xl font-bold">Settings</h1>
         <p>Adjust Your Financial Preferences And App Settings</p>
      </div>
      <div className="flex justify-between p-4 gap-8">
      <SettingCreate />
      <SettingList />
      
      </div>
    </div>
  );
}

export default SettingsPage;