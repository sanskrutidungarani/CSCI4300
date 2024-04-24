"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const confirmPassword = e.target[2].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      toast.error("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      toast.error("Password is invalid");
      return;
    }

    if (confirmPassword !== password) {
      setError("Passwords are not equal");
      toast.error("Passwords are not equal")
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.status === 400) {
        toast.error("This email is already registered")
        setError("The email already in use");
      }
      if (res.status === 200) {
        setError("");
        toast.success("Registration successful");
        router.push("/login");
      }
    } catch (error) {
      toast.error("Error, try again")
      setError("Error, try again");
      console.log(error);
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }
  return (
    sessionStatus !== "authenticated" && (
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="flex justify-center flex-col items-center">
          <Image src="data:image/png;base64,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" alt="star logo" width={50} height={50} />
          <h2 className="mt-6 text-center text-2xl leading-9 tracking-tight text-gray-900">
           Get started with meal planning today!
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirmpassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm password
                </label>
                <div className="mt-2">
                  <input
                    id="confirmpassword"
                    name="confirmpassword"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  />
                  
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm leading-6 text-gray-900"
                  >
                    Accept our terms and privacy policy
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full border border-black justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Sign up
                </button>
                <p className="text-red-600 text-center text-[16px] my-4">
                  {error && error}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default RegisterPage;
