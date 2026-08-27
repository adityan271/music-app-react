import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import AuthContext, { Auth } from "../context/AuthContext";

const RegisterPage = () => {
  const  registerUser  = useContext(Auth);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const submitHandler = (data) => {
    
     registerUser(data)
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#2b4d5f] px-4 py-10">
      {/* Ambient Background */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#214454]/60 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#1d3f50]/70 blur-3xl" />

      <div className="relative z-10 w-full max-w-md">
        {/* Card */}
        <div className="rounded-[28px] border border-[#315d70] bg-[#183b4b] p-8 shadow-2xl shadow-[#102c38]/40 sm:p-10">
          {/* Logo */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1d536c] text-3xl shadow-lg shadow-[#102f3e]">
              🎵
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-[#d6e1e6]">
              Adi's Music
            </h1>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#91a8b5]">
              A streaming app created for music lovers who don't want to pay
              expensive subscriptions to enjoy their favorite songs.
            </p>
          </div>

          {/* Form Title */}
          <h2 className="mb-7 text-center text-xs font-bold tracking-[0.3em] text-[#48a8df]">
            CREATE ACCOUNT
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#c4d0d6]">
                Full Name
              </label>

              <input
                {...register("fullName")}
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-[#315d70] bg-[#102d3b] px-4 py-3.5 text-sm text-[#c4d0d6] outline-none transition placeholder:text-[#668a9c] focus:border-[#349bd7] focus:ring-2 focus:ring-[#349bd7]/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#c4d0d6]">
                Username
              </label>

              <input
                {...register("username")}
                type="text"
                placeholder="@username"
                className="w-full rounded-xl border border-[#315d70] bg-[#102d3b] px-4 py-3.5 text-sm text-[#c4d0d6] outline-none transition placeholder:text-[#668a9c] focus:border-[#349bd7] focus:ring-2 focus:ring-[#349bd7]/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#c4d0d6]">
                Email Address
              </label>

              <input
                {...register("email")}
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-xl border border-[#315d70] bg-[#102d3b] px-4 py-3.5 text-sm text-[#c4d0d6] outline-none transition placeholder:text-[#668a9c] focus:border-[#349bd7] focus:ring-2 focus:ring-[#349bd7]/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#c4d0d6]">
                Password
              </label>

              <input
                {...register("password")}
                type="password"
                placeholder="Create a strong password"
                className="w-full rounded-xl border border-[#315d70] bg-[#102d3b] px-4 py-3.5 text-sm text-[#c4d0d6] outline-none transition placeholder:text-[#668a9c] focus:border-[#349bd7] focus:ring-2 focus:ring-[#349bd7]/20"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-linear-to-r from-[#2865c7] to-[#2e9bdd] py-3.5 text-sm font-bold tracking-[0.2em] text-[#dcecf5] shadow-lg shadow-[#102c38] transition hover:scale-[1.01] hover:brightness-110 active:scale-[0.99]"
            >
              CREATE ACCOUNT
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-[#91a8b5]">
            Already have an account?{" "}
            <span className="cursor-pointer font-semibold text-[#48a8df] hover:text-[#74c4f0]">
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
