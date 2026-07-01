import useAuthStore from "../stores/useAuthStore";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/authSchemas";
const Login = () => {
  const { login,  isLoading } = useAuthStore();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    const success = await login(data.email, data.password);

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

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-125 rounded-[30px] h-88 bg-[#1A1A1E] s">
            <p className="text-[25px] tracking-[3px] text-amber-100 pt-11 text-center">
              Welcome Back!....
            </p>
            <p className="text-[10px] tracking-[1px] text-amber-400 text-center">
              Sign-in to Your High Velocity workspace
            </p>
            <p className="text-center pt-5 py-3">
              <input
                {...register("email")}
                placeholder="Enter Your Email..."
                type="email"
                className="  bg-[#0A0A0C] h-12 w-70 text-amber-100  rounded-[0.8rem] pl-2 "
              />
              {errors.email && (
                <p className="text-red-500 text-center">
                  {errors.email.message}
                </p>
              )}
            </p>

            <p className="text-center">
              <input
                placeholder="Enter Your Password..."
                {...register("password")}
                type="password"
                className="  h-12 w-70 bg-[#0A0A0C]  text-amber-100  rounded-[0.8rem] pl-2 "
              />
              {errors.password && (
                <p className="text-red-500 text-center">
                  {errors.password.message}
                </p>
              )}
            </p>

            {/* {error && <p className="text-red-600 text-center">{error}</p>} */}

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
