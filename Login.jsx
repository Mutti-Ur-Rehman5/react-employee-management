import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-black overflow-hidden text-white">
      {/* Background glowing blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-72 h-72 bg-emerald-600 opacity-20 rounded-full -top-20 -left-20 blur-3xl animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-purple-600 opacity-20 rounded-full -bottom-20 -right-20 blur-3xl animate-pulse"></div>
      </div>

      {/* Tagline */}
      <div className="absolute top-10 z-10 text-center">
        <h1 className="text-4xl font-bold">Task Management System</h1>
        <p className="text-gray-400 mt-2">Login to manage your work efficiently 🚀</p>
      </div>

      {/* Login Box */}
      <div className="relative border-2 border-emerald-600 rounded-xl p-10 w-[90%] max-w-md z-10 bg-[#111] shadow-lg shadow-emerald-700/20">
        <form onSubmit={submitHandler} className="flex flex-col items-center justify-center">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Enter your email"
            className="w-full mb-4 outline-none bg-transparent border-2 border-emerald-600 text-white placeholder:text-gray-400 font-medium text-lg py-2 px-6 rounded-full"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Enter password"
            className="w-full mb-6 outline-none bg-transparent border-2 border-emerald-600 text-white placeholder:text-gray-400 font-medium text-lg py-2 px-6 rounded-full"
          />
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 transition-all text-white font-semibold text-lg py-2 px-8 rounded-full"
          >
            Log in
          </button>
        </form>

        {/* Credentials Info */}
       <p className="text-center text-gray-400 mt-6 text-sm italic">
  🔐 Your tasks missed you — let’s log in and catch up 😄
</p>

      </div>

      {/* Footer */}
      <p className="absolute bottom-4 text-center w-full text-sm text-gray-500 z-10">
        © 2025 EMS App by Mutti💻
      </p>
    </div>
  );
};

export default Login;
