import React from 'react'
import useTypewriter from '../hooks/useTypeWriter'
import RegisterBox from '../components/Layout/Registerbox'

const Register = () => {

  return (
    <div className=" bg-gray-50 flex flex-col items-center px-4 sm:px-8 lg:px-20 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-10 text-center">
        {useTypewriter("Get Started",200)}
      </h1>

      <RegisterBox />
    </div>
  )
}

export default Register