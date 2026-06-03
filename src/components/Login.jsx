const Login = () => {
  return (
    <>
      <div className="flex justify-center bg-custom items-center flex-col">
        <h1 className="pt-5 text-[30px] pb-5">Please ! Login Here....</h1>

        <div className="w-140 rounded-2xl h-88 bg-[#1A1A1E] s">
          <p className="text-[25px] tracking-[3px] text-amber-100 pt-9 text-center">
            Welcome Back!....
          </p>
          <p className="text-[10px] tracking-[1px] text-amber-400 text-center">
            Sign-in to Your High Velocity workspace
          </p>
          <p className="text-center pt-5 py-3">
            <input
              placeholder="Enter Your Email..."
              type="Email"
              className=" border bg-[] h-12 w-70 text-amber-100 border-amber-200 rounded-[0.8rem] pl-2 "
            />
          </p>
          <p className="text-center">
            <input
              placeholder="Enter Your Password..."
              type="password"
              className=" border h-12 w-70  text-amber-100 border-amber-200 rounded-[0.8rem] pl-2 "
            />
          </p>

          <p className="text-center pt-5">
            <button className="w-35 h-10 bg-amber-300 rounded-[10px]">
              Sign In
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
