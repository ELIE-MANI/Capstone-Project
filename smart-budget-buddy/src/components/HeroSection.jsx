import { Link } from "react-router";
import phoneImage from "../images/col-md-6.svg"
import bgImage from "../images/Vector 2.svg"

function HeroSection() {
  return ( <>
  <section className="flex lg:flex-row items-center justify-between mt-10 lg:px-16">
    <div className="max-w-xl space-y-4">
      <h2 className="text-4xl font-extrabold leading-tight">
        Smart Buddy <br />
        Budget Your Financial Assistance
      </h2>
      <p className="text-gray-600">
        Welcome to your personal finance dashboard — track income, monitor expenses,
        and gain insights into your spending habits.
      </p>
      <div className="space-x-4">
     <Link to="/expenses" className="bg-primary text-white px-6 py-4  rounded-lg">
      Add Expenses
     </Link>
     <Link to="/settings" className="bg-blue-500 text-white px-6 py-4 rounded-lg">
      Add Budget
     </Link>
     </div>
    </div>

    <div className="relative mt-10 lg:mt-0"> 
      <img src={bgImage} alt="bg shape" className="absolute w-72 h-72 top-0 right-0 -z-10" />  
      <img src={phoneImage} alt="phone" className="relative w-60 object-contain drop-shadow-2xl rotate-3" />
    </div>

  </section>
  
  
  </> );
}

export default HeroSection;