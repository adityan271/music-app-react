import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const LoginPage = () => {

   const { handleSubmit, register, reset, setValue, watch } = useForm();
    const navigate = useNavigate();
   const submitHandler = (data) => {
    console.log(data)

    reset();
    // navigate("/");
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
          <div className="mb-10 text-center">
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
            WELCOME BACK
          </h2>

          {/* Form */}
          <form onClick={handleSubmit(submitHandler)} className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#c4d0d6]">
                Email Address
              </label>

              <input
              {...register('email')}
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
              {...register('password')}
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-[#315d70] bg-[#102d3b] px-4 py-3.5 text-sm text-[#c4d0d6] outline-none transition placeholder:text-[#668a9c] focus:border-[#349bd7] focus:ring-2 focus:ring-[#349bd7]/20"
              />

              <div className="mt-3 text-right">
                <span className="cursor-pointer text-sm font-medium text-[#48a8df] hover:text-[#74c4f0]">
                  Forgot Password?
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-linear-to-r from-[#2865c7] to-[#2e9bdd] py-3.5 text-sm font-bold tracking-[0.2em] text-[#dcecf5] shadow-lg shadow-[#102c38] transition hover:scale-[1.01] hover:brightness-110 active:scale-[0.99]"
            >
              LOGIN TO ADI'S MUSIC
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-[#91a8b5]">
            Don't have an account?{" "}
            <span className="cursor-pointer font-semibold text-[#48a8df] hover:text-[#74c4f0]">
              Create Account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
