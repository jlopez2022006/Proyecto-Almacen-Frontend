import React from 'react'
import { useForm } from 'react-hook-form'
import { registerRequest } from '../api/auth'

export const RegisterPage = () => {
    const { register, handleSubmit } = useForm()

    return (

        <section className="w-full text-gray-900 bg-gray-500 py-36 bg-center bg-cover bg-no-repeat h-screen bg-gradient-to-r from-gray-700 to-indigo-600" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex items-center justify-center">
                <div className="lg:w-3/6 lg:pr-0 pr-0">
                    <h1 className="font-medium text-5xl text-white">CUIDADO CON EL MADRID QUE LE ROBA EL OXIGENO</h1>
                    <p className="leading-relaxed mt-4 text-white">
                        Marcias los del madrid
                    </p>
                    <a href="/login">
                        <button type='submit' className="mt-6 text-white bg-indigo-500 rounded-md border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg m-45" >Volver</button>
                    </a>
                </div>
                <form className='w-full' onSubmit={handleSubmit(async (values) => {
                    console.log(values);
                    const res = await registerRequest(values)
                    console.log(res)
                })}
                >
                    <div className="lg:w-4/5 bg-gray-50 p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 rounded-md">
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600">Nombre</label>
                            <input type="text" {...register('username', { required: true })} className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                                placeholder='Nombre' />

                        </div>
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600">Correo</label>
                            <input type="email" {...register('email', { required: true })} className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                                placeholder='Correo' />
                        </div>
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600">Contraseña</label>
                            <input type="password" {...register('password', { required: true })} className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                                placeholder='Contraseña' />
                        </div>

                        <button type='submit' className="text-white bg-indigo-500 rounded-md border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg m-45">Crear</button>
                    </div>
                </form>

            </div>
        </section>

    )
}
