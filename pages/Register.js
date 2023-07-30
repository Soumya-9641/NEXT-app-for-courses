import React from 'react'
import { useState } from 'react'
import Link from 'next/link';
import { supabase } from './lib/initSupabase';
import { useRouter } from 'next/router';

const Register = () => {
   const [username, setUserName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   
   const router = useRouter();
  //const [confirmpassword, setconfirmpassword] = useState()
   const handleChange=(e)=>{
        if(e.target.name =='username'){
            setUserName(e.target.value)
        }
       else if(e.target.name =='email'){ 
            setEmail(e.target.value)
        }
       else if(e.target.name =='password'){
            setPassword(e.target.value)
        }
      
   }
    const handleSubmit= async (e)=>{
            e.preventDefault()
           // const data = { username,email,password}
            try {
                const { user, error } = await supabase.auth.signUp({
                    username,email,password
                });
                if (error) throw error;
                console.log('User signed up successfully:');
                console.log(user)
                router.push('/Login');
              } catch (error) {
                console.error('Error signing up:', error.message);
                alert('Error signing up:'+ error.message)
              }
          
             
    }
  return (
    <div>
        <section className=" dark:bg-white-500">
    

  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
     
      <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                      <input value={username} onChange={handleChange} type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john" required=""/>
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input value={email} onChange={handleChange}  type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input value={password} onChange={handleChange}  type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  
                  <div className="flex items-start">
                     
                      
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href={'/Login'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default Register