'use client'

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation"; 
import axios  from "axios";
import LoginPage from "../login/page";
export default function SignUpPage() {

    const [user, setUser] = React.useState({
        email: "",
        password : "",
        username: " ",
    })

    const onSignup = async () => {

    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
                <h1 className="p-5text-center text-white text-2xl">SignUp Page</h1>
                {/* <h1>Sign up</h1> */}
                <hr />      
                <label  className="text-white" htmlFor="username">username</label>
                <input
                className="m-0  p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                    id="username" 
                    type="text"
                    value={user.username}
                    onChange={(e)=>setUser({...user, username: e.target.value})}
                    placeholder="username" 
                />
                <label className="text-white" htmlFor="email">email</label>
                <input
                className="m-0  p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                    id="email" 
                    type="text"
                    value={user.email}
                    onChange={(e)=>setUser({...user, email : e.target.value})}
                    placeholder="email" 
                />
                <label className="text-white" htmlFor="password">password</label>
                <input
                className=" p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                    id="password" 
                    type="password"
                    value={user.password}
                    onChange={(e)=>setUser({...user, password: e.target.value})}
                    placeholder="password" 
                />
                <button 
                 onClick={onSignup}
                 className=' text-white p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 ' > 
                  Sign up
                 </button>
                <Link
                className="text-white"  
                href="/login" >
                     Visit the login page 
                </Link>
        </div>
    )
}