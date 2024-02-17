'use client'

import Link from "next/link";
import React from "react";

export default function LoginPage() {

    const [user, setUser] = React.useState({
        email: "",
        password : "",
    })

    const onLogin = async () => {

    }
    return (    
            <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
                <h1 className="p-5text-center text-white text-2xl">LogIn Page</h1>
                {/* <h1>Sign up</h1> */}
                <hr />      
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
                 onClick={onLogin}
                 className=' text-white p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 ' > 
                  Log in
                 </button>
                <Link
                className="text-white"  
                href="/signup" >
                     Visit the signup page
                </Link>
        </div>
    )
}