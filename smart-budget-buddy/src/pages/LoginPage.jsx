import useAuthStore from "../store/AuthStore";
import { useNavigate } from "react-router";

function LoginPage() {
const{login}= useAuthStore();
const navigate = useNavigate();

const handleLogin = () => {
  const fakeUser = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    token: "fake-jwt-token-123456",
    avatar: "https://i.pravatar.cc/150?img=3"
};

login(fakeUser);
navigate('/');
};

  return ( 
  <div className="flex flex-col items-center justify-center h-screen bg-emerald-100 text-black">
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Smart Budget Buddy</h2>
      <p className="text-gray-600 mb-4">Login to manage your budget effectively</p>
      <button className="bg-emerald-500 text-white px-4 py-2 rounded-xl hover:bg-emerald-600"
      onClick={handleLogin}
      >Sign In(Simulate)</button>
    </div>
  </div>

   );
}

export default LoginPage;