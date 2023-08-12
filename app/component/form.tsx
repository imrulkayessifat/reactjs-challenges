'use client'
import React from 'react'
import { useForm, FieldValues, SubmitHandler, } from "react-hook-form";
import clsx from "clsx";
import { useNavigate } from "react-router-dom"

const Form = () => {
    const navigate = useNavigate();
    const {
        register, handleSubmit, formState: { errors, } } = useForm<FieldValues>({
            defaultValues: {
                full_name: '',
                password: ''
            }
        });
    const handleRegistration: SubmitHandler<FieldValues> = (data: any) => { console.log(data); navigate("/about") };
    const handleError = (errors: any) => { };
    return (
        <div className="h-screen bg-gray-200 w-full flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit(handleRegistration, handleError)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input {...register('full_name', { required: true })} type="text" name="full_name" id="full_name" className={clsx(`h-10 border mt-1 rounded px-4 w-full bg-gray-50 `, errors && 'focus:ring-rose-500')} />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input {...register('password', { required: true })} type="password" name="password" id="password" className={clsx(`h-10 border mt-1 rounded px-4 w-full bg-gray-50 `, errors && 'focus:ring-rose-500')} />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form