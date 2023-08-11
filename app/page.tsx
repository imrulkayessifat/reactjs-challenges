'use client'
import { useForm, FieldValues, SubmitHandler, } from "react-hook-form";
import clsx from "clsx";
export default function Home() {
  const {
    register,handleSubmit,formState: { errors,}} = useForm<FieldValues>({defaultValues: {
      full_name: '',
      email: '',
      address: '',
      city: '',
      country: '',
      state: '',
      zipcode:'',
      billing_same:false
    }
  });
  const handleRegistration: SubmitHandler<FieldValues> = (data: any) => console.log(data);
  const handleError = (errors: any) => { };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <form onSubmit={handleSubmit(handleRegistration, handleError)}>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>
              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Full Name</label>
                    <input {...register('full_name', { required: true })} type="text" name="full_name" id="full_name" className={clsx(`h-10 border mt-1 rounded px-4 w-full bg-gray-50 `, errors && 'focus:ring-rose-500')} />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="email">Email Address</label>
                    <input type="text" {...register('email', { required: true })} name="email" id="email" className={clsx(`h-10 border mt-1 rounded px-4 w-full bg-gray-50 `, errors && 'focus:ring-rose-500')} placeholder="email@domain.com" />
                  </div>
                  <div className="md:col-span-3">
                    <label htmlFor="address">Address / Street</label>
                    <input type="text" {...register('address', { required: true })} name="address" id="address" className={clsx(`h-10 border mt-1 rounded px-4 w-full bg-gray-50 `, errors && 'focus:ring-rose-500')} placeholder="" />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="city">City</label>
                    <input type="text" {...register('city', { required: true })} name="city" id="city" className={clsx(`h-10 border mt-1 rounded px-4 w-full bg-gray-50 `, errors && 'focus:ring-rose-500')} placeholder="" />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="country">Country / region</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input {...register('country', { required: true })} name="country" id="country" placeholder="Country" className={clsx(`px-4 appearance-none outline-none text-gray-800 w-full bg-transparent`, errors && 'focus:ring-rose-500')} />
                      <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                        <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <button form="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                        <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                      </button>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="state">State / province</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input {...register('state', { required: true })} name="state" id="state" placeholder="State" className={clsx(`px-4 appearance-none outline-none text-gray-800 w-full bg-transparent`, errors && 'focus:ring-rose-500')} />
                      <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                        <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <button form="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                        <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                      </button>
                    </div>
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="zipcode">Zipcode</label>
                    <input type="text" {...register('zipcode')} name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                  </div>
                  <div className="md:col-span-5">
                    <div className="inline-flex items-center">
                      <input type="checkbox" {...register('billing_same')} name="billing_same" id="billing_same" className="form-checkbox" />
                      <label htmlFor="billing_same" className="ml-2">My billing address is different than above.</label>
                    </div>
                  </div>
                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
