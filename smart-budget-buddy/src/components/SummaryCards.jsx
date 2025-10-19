import { useSettingsStore } from "../store/Profile";
import carChart from "../images/Group 442.svg"


function SummaryCards({totalIncome=0,totalExpense=0,balance=0}) {


const budgetUsedPercent = totalIncome? Math.min((totalExpense / totalIncome) * 100,100):0;
const savingsPercent=totalIncome? Math.min((balance / totalIncome) * 100,100):0;

  return (
<>
<div className="bg-primary items-center rounded-2xl shadow-sm w-100">
 <div className="flex justify-between mt-4 items-center mx-6">
  <div>
<img src={carChart} alt="carchart" className="w-20 h-20" />
<h3 className="font-bold text-black mb-2 text-center">Savings <br /> on Goals</h3>
</div>
  <span className="bg-amber-50 text-white h-20 border-1"></span>

<div className="flex flex-col gap-3 text-sm text-gray-800">
  <p>
    <span className="font-semibold">Total Income:</span>{''}
    <span className="text-emerald-600">{totalIncome.toLocaleString()}RWF</span>
  </p>
<p>
  <span className="font-semibold">Total Expense:</span>{''}
  <span>-{totalExpense.toLocaleString()}RWF</span>
</p>
<p>
  <span className="font-semibold">Balance:</span>{''}
  <span className= {balance >= 0 ? "text-emerald-700":"text-red-700"}>{balance.toLocaleString()}RWF</span>
</p>

</div>
</div>
<p className="mt-4 text-sm text-black font-semibold text-center mb-2">Track Your Monthly Cash Flow</p>
</div>

    
  
</>
  );
}

export default SummaryCards;
