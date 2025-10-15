import { useQuery } from "@tanstack/react-query";
import BalanceCard from "../components/BalanceCard";
import ExpenseBreakdown from "../components/ExpenseBreakdown";
import HeroSection from "../components/HeroSection";
import SummaryCards from "../components/SummaryCards";
import { getExpenses } from "../api/apiExpenses";

function DashboardPage() {
  const {data:response,isLOading,isError}= useQuery({
    queryKey:["expenses"],
    queryFn: getExpenses,
  });
  
  if (isLOading) return <div className="text-center mt-10">Loading Dashboard data...</div>
  if (isError)  return <div className="text-center mt-10 text-red-500">Error loading dashboard data..</div>
  
  const expenses = Array.isArray(response) ? response :response?.data || [];
  const totalExpense = expenses.reduce((sum,exp) => sum + Number(exp.amount || 0),0);
  console.log("Raw response:", response);
  console.log("Normalized expenses array:", expenses);
  const totalIncome = 4000000;
  const balance = totalIncome- totalExpense
  return ( 
    <>
    <HeroSection/>
    <div className="mt-10 grid grid-cols-[1fr_2fr_1fr] gap-6 m-4">
    <SummaryCards totalIncome={totalIncome} totalExpense={totalExpense} balance={balance}/>
    <div className="">
    <ExpenseBreakdown expenses={expenses} />
    </div>
    <BalanceCard/>
      
    </div>

    </>
   );
}

export default DashboardPage;