import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { use, useEffect, useState } from "react";
import { createSettings, deleteSettings, getSettings,updateSettings } from "../api/apiSettings";
import { data } from "react-router";
function SettingList() {
const queryClient = useQueryClient();

const {data,isLoading,isError} = useQuery({
  queryKey: ['settings'],
  queryFn: getSettings,
  //refetchOnWindowFocus: false,
});


const updateMutation = useMutation({
  mutationFn: ({id,data}) => updateSettings(id,data),

  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['settings'] });
  },
  
});


const deleteMutation = useMutation({
  mutationFn: deleteSettings,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['settings'] });
  },
});

if (isLoading) {
  return <div>Loading settings...</div>;
}
if (isError) {
  return <div>Error loading settings.</div>;
}
 const settings = data || [];

  return (
    <>
    <div className="max-w-4xl mx-auto p-8 w-150">
      <div className="bg-secondary text-black  py-6 rounded-t-2xl">
        {settings.length === 0 ?(<p>No settings found.</p>) : (
          <ul className="space-y-4">
            {settings.map((setting) => (
              <li key={setting.id} className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-lg font-semibold">{setting.monthlyBudget}</h3>
                <h3 className="text-gray-600">{setting.savingsGoal}</h3>
                <h3 className="text-gray-600">{setting.currency}</h3>
                <h3 className="text-gray-600">{setting.budgetAlert ? "Budget Alert: On" : "Budget Alert: Off"}</h3>
                <h3 className="text-gray-600">{setting.expenseReminder ? "Expense Reminder: On" : "Expense Reminder: Off"}</h3>
                <h3 className="text-gray-600">{setting.language}</h3>
                <div className="flex justify-end mt-4">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    onClick={() => deleteMutation.mutate(setting.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </>
    );
}

export default SettingList;