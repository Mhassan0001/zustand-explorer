import { useState } from "react";
import useAuthStore from "../stores/useAuthStore";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { login, error, isLoading } = useAuthStore();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(formData.email, formData.password);

    if (success) {
      navigate("/todo");
    }
  };
  return (
    <>
      <div className="flex justify-center bg-custom items-center flex-col">
        <h1 className="pt-5 text-[30px] tracking-[5px] pb-5">
          Please ! Login Here....
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="w-125 rounded-[30px] h-88 bg-[#1A1A1E] s">
            <p className="text-[25px] tracking-[3px] text-amber-100 pt-11 text-center">
              Welcome Back!....
            </p>
            <p className="text-[10px] tracking-[1px] text-amber-400 text-center">
              Sign-in to Your High Velocity workspace
            </p>
            <p className="text-center pt-5 py-3">
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email..."
                type="email"
                className="  bg-[#0A0A0C] h-12 w-70 text-amber-100  rounded-[0.8rem] pl-2 "
              />
            </p>
            <p className="text-center">
              <input
                placeholder="Enter Your Password..."
                name="password"
                onChange={handleChange}
                value={formData.password}
                type="password"
                className="  h-12 w-70 bg-[#0A0A0C]  text-amber-100  rounded-[0.8rem] pl-2 "
              />
            </p>

            {error && <p className="text-red-600 text-center">{error}</p>}

            <p className="text-center pt-5  ">
              <button
                type="submit"
                className="w-35 h-10 bg-[#E2DFD2] cursor-pointer tracking-[2px] border border-black rounded-[10px]"
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </button>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
