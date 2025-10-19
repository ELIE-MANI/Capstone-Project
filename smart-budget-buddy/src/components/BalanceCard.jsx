function BalanceCard({balance}) {
  
  const safeBalance = typeof balance === "number" ? balance: 0;
  const healthy = safeBalance >= 10000;
  return ( <>
  <div className="bg-emerald-100 p-6 rounded-2xl shadow-md text-center w-96">
   <h3 className="text-lg font-semibold mb-2">Your Balance Overview</h3>
   <p className="text-3xl font-bold text-emerald-800">{safeBalance.toLocaleString()}RWF</p>  
   <p className="mt-2 text-gray-700">
    {healthy
    ? "✅ You’re managing your expenses well!"
    : "⚠️ Spending is getting high, track carefully."
    }</p>  
    </div>
  </> );
}

export default BalanceCard;