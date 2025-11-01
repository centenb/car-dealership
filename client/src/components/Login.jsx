import React, { useState } from 'react'
import { useNavigate } from 'react-router'

export const Login = () => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loginResult, setLoginResult ] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try
        {
        const body = {
            username: username,
            password: password
        }
        
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
        };
        const response = await fetch('http://localhost:5000/employees/login', requestOptions);
        const data = await response.json();
        

        const element = document.querySelector('.loginResult');
        if(data.message === "Login successful") {
        element.style.color = "green";
        setLoginResult(data.message);
        
        setTimeout(() => {
        navigate('/home');
        }, 1000)

        }
        else {
        element.style.color = "red";
        setLoginResult(data.message);
        }
        
        } catch (err) {
            console.log(err.message);
        }
        }


  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl mb-5">Log<span className="text-blue-400">in</span></h1>
        <div className="border border-black rounded-sm bg-gray-500/10 ring-1 ring-blue-400 ring-offset-4 
        
        ">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col p-5 items-center justify-center">
                    <label className="font-bold">
                    Username:
                    <input type="text" id="username" name="username" placeholder="Enter username" 
                    value={username} onChange={e => setUsername(e.target.value)}
                    className="ml-2 border-b border-black pl-2 focus:outline-none"
                    />
                    </label>
                    <label className="font-bold">
                    Password:
                    <input type="password" id="password" name="password" placeholder="Enter password" 
                    value={password} onChange={e => setPassword(e.target.value)}
                    className="ml-2 border-b border-black pl-2 mb-2 focus:outline-none"
                    />
                    </label>
                <button type="submit" className="border border-black rounded-sm cursor-pointer
                hover:translate-y-0.5 hover:bg-blue-400 py-1 px-2 transform transition duration-300
                
                ">Submit</button>
                </div>
            </form>
        </div>
        <label className="loginResult mt-2">{loginResult}</label>
    </div>
  )
}
