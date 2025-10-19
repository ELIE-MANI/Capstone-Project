import { useQuery } from "@tanstack/react-query";
import BalanceCard from "../components/BalanceCard";
import ExpenseBreakdown from "../components/ExpenseBreakdown";
import HeroSection from "../components/HeroSection";
import SummaryCards from "../components/SummaryCards";
import { getExpenses } from "../api/apiExpenses";
import { useUser } from "@clerk/clerk-react";
import { getSettings } from "../api/apiSettings";

function DashboardPage() {
  const {user, isLoaded} = useUser();
  const {data:response,isLoading,isError}= useQuery({
    queryKey:["expenses", user?.id],
    queryFn: () => getExpenses(user.id),
    enabled: isLoaded && !!user,
  });

const {data:settingsData, isLoading:isLoadingSettings, isError:isErrorSettings}= useQuery({
  queryKey:['settings', user?.id],
  queryFn: () => getSettings(user.id),
  enabled: isLoaded && !!user,
});
console.log("Settings API response:", settingsData);

  if (isLoading || isLoadingSettings) return <div className="text-center mt-10">Loading Dashboard data...</div>
  if (isError || isErrorSettings)  return <div className="text-center mt-10 text-red-500">Error loading dashboard data..</div>
  
  const expenses = Array.isArray(response) ? response :response?.data || [];
  const totalExpense = expenses.reduce((sum,exp) => sum + Number(exp.amount || 0),0);
  console.log("Raw response:", response);
  console.log("Normalized expenses array:", expenses);
  const totalIncome = Array.isArray(settingsData) && settingsData.length > 0
  ? Number(settingsData[0].monthlyBudget)
  : 0;

  const balance = totalIncome - totalExpense;
  return ( 
    <>
    <HeroSection/>
    <div className="mt-10 grid grid-cols-[1fr_2fr_1fr] gap-6 m-4">
    <SummaryCards totalIncome={totalIncome} totalExpense={totalExpense} balance={balance}/>
    <div className="">
    <ExpenseBreakdown expenses={expenses} />
    </div>
    <BalanceCard balance={balance} />
  
      
    </div>

    </>
   );
}

export default DashboardPage;