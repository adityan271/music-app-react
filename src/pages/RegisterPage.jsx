import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Auth } from "../context/AuthContext";
import { useNavigate } from "react-router";

const RegisterPage = () => {
  const navigate = useNavigate();

  const registerUser = useContext(Auth);

  const { handleSubmit, register, reset, setValue, watch } = useForm();

  const role = watch("role");
  console.log(role);

  const submitHandler = (data) => {
    const response = registerUser(data);

    if (!response.success) {
      alert(response.message);
      return;
    }

    alert(response.message);
    reset();
    navigate("/");
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#2b4d5f] px-3 py-3 sm:px-4 sm:py-4">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#214454]/60 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-[#1d3f50]/70 blur-3xl" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="rounded-2xl border border-[#315d70] bg-[#183b4b] px-5 py-5 shadow-2xl shadow-[#102c38]/40 sm:px-7 sm:py-6">
          {/* Logo */}
          <div className="mb-4 text-center">
            <div className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-[#1d536c] text-xl shadow-lg shadow-[#102f3e] sm:h-12 sm:w-12 sm:text-2xl">
              🎵
            </div>

            <h1 className="text-xl font-bold text-[#d6e1e6] sm:text-2xl">
              Adi's Music
            </h1>

            <p className="mx-auto mt-1 max-w-sm text-[11px] leading-4 text-[#91a8b5] sm:text-xs">
              Listen to your favorite songs and share your music with the world.
            </p>
          </div>

          {/* Title */}
          <h2 className="mb-3 text-center text-[10px] font-bold tracking-[0.25em] text-[#48a8df]">
            CREATE ACCOUNT
          </h2>

          {/* Role Buttons */}
          <div className="mb-4 grid grid-cols-2 gap-2">
            {/* Listener */}
            <button
              onClick={() => setValue("role", "listner")}
              type="button"
              className={`rounded-xl border px-3 py-2.5 transition-all duration-150 active:scale-95 active:translate-y-0.5 ${
                role === "artist"
                  ? "border-[#315d70] bg-[#102d3b]"
                  : "border-[#48a8df] bg-[#1d536c]"
              } `}
            >
              <span className="mr-1">🎧</span>

              <span className="text-xs font-semibold text-[#d6e1e6]">
                Listener
              </span>

              <p className="mt-0.5 text-[9px] text-[#91a8b5]">Enjoy music</p>
            </button>

            {/* Artist */}
            <button
              onClick={() => setValue("role", "artist")}
              type="button"
              className={`rounded-xl border px-3 py-2.5 transition-all duration-150 active:scale-95 active:translate-y-0.5 ${
                role === "artist"
                  ? "border-[#48a8df] bg-[#1d536c]"
                  : "border-[#315d70] bg-[#102d3b]"
              }`}
            >
              <span className="mr-1">🎤</span>

              <span className="text-xs font-semibold text-[#d6e1e6]">
                Artist
              </span>

              <p className="mt-0.5 text-[9px] text-[#91a8b5]">Share music</p>
            </button>
          </div>
          <input type="hidden" {...register("role")} />

          {/* Form */}
          <form onSubmit={handleSubmit(submitHandler)} className="space-y-2.5">
            {/* Full Name */}
            <div>
              <label className="mb-1 block text-[11px] font-medium text-[#c4d0d6]">
                Full Name
              </label>

              <input
                {...register("fullName")}
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-[#315d70] bg-[#102d3b] px-3 py-2 text-xs text-[#c4d0d6] outline-none placeholder:text-[#668a9c] focus:border-[#349bd7] focus:ring-1 focus:ring-[#349bd7]/20"
              />
            </div>

            {/* Username */}
            <div>
              <label className="mb-1 block text-[11px] font-medium text-[#c4d0d6]">
                Username
              </label>

              <input
                {...register("username")}
                type="text"
                placeholder="@username"
                className="w-full rounded-lg border border-[#315d70] bg-[#102d3b] px-3 py-2 text-xs text-[#c4d0d6] outline-none placeholder:text-[#668a9c] focus:border-[#349bd7] focus:ring-1 focus:ring-[#349bd7]/20"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-1 block text-[11px] font-medium text-[#c4d0d6]">
                Email Address
              </label>

              <input
                {...register("email")}
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-lg border border-[#315d70] bg-[#102d3b] px-3 py-2 text-xs text-[#c4d0d6] outline-none placeholder:text-[#668a9c] focus:border-[#349bd7] focus:ring-1 focus:ring-[#349bd7]/20"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-1 block text-[11px] font-medium text-[#c4d0d6]">
                Password
              </label>

              <input
                {...register("password")}
                type="password"
                placeholder="Create a strong password"
                className="w-full rounded-lg border border-[#315d70] bg-[#102d3b] px-3 py-2 text-xs text-[#c4d0d6] outline-none placeholder:text-[#668a9c] focus:border-[#349bd7] focus:ring-1 focus:ring-[#349bd7]/20"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-linear-to-r from-[#2865c7] to-[#2e9bdd] py-2.5 text-xs font-bold tracking-[0.15em] text-[#dcecf5] shadow-lg shadow-[#102c38] transition hover:scale-[1.01] hover:brightness-110 active:scale-[0.99]"
            >
              CREATE ACCOUNT
            </button>
          </form>

          {/* Login */}
          <p className="mt-4 text-center text-[11px] text-[#91a8b5]">
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
