import { useState } from "react";
import axios from 'axios';
import {backendUrl}  from '../components/config.js';
import { toast } from "react-toastify";

const Login = ({setToken}) => {



    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post( backendUrl +'/api/user/admin',{email,password})
            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }
            
            
        } catch (error) {
            console.log(error);
            
            toast.error(error.message)
        }
    }

  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl px-10 py-8 max-w-md transform transition duration-500 hover:shadow-2xl">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Admin Panel
        </h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input onChange={(e)=>setEmail(e.target.value)} value={email}
              className="rounded-lg w-full px-4 py-3 border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 outline-none transition duration-300"
              type="email"
              placeholder="your@email.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input onChange={(e)=>setPassword(e.target.value)} value={password}
              className="rounded-lg w-full px-4 py-3 border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 outline-none transition duration-300"
              type="password"
              placeholder="password" />
          </div>
          <button className="w-full px-4 py-3 text-white font-bold bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
            type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
