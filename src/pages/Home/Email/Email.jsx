import React from 'react';
import { useForm } from 'react-hook-form';

const Email = () => {


      const {
            register,
            formState: { errors },
            handleSubmit,
      } = useForm()
      const onSubmit = (data) => console.log(data)
      return (
            <div className='flex justify-center items-center mt-6'>
                  <div className='w-1/2 p-2 rounded-lg'>


                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57973.893417044084!2d90.35503370737852!3d24.74855704470619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f1007ad9b59%3A0x79a59cb060e32d6c!2sMymensingh!5e0!3m2!1sen!2sbd!4v1698338169531!5m2!1sen!2sbd" width="500" height="400"
                              allowfullscreen
                              loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                              title='google map'
                        ></iframe>









                  </div>
                  <div className='w-1/2 shadow-2xl p-2 '>
                     

                        <div className="m-auto flex w-1/2 flex-col gap-4">
                        <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
          Contact Form
        </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div className="input-wrapper flex flex-col">
          <label htmlFor="username">Username</label>
          <input
           className="

           w-full
           block px-16 py-2 mt-2
           border-gray-300
           rounded-md
           shadow-sm
           focus:border-indigo-300
           focus:ring
           focus:ring-indigo-200
           focus:ring-opacity-50
         "
            type="text"
            {...register('username', {
              required: 'Username is required',
              minLength: {
                value: 3,
                message: 'Username must be at least 3 characters',
              },
            })}
          />
          {errors.username && (
            <p className="text-xs italic text-red-500">{errors.username.message}</p>
          )}
        </div>

        <div className="input-wrapper flex flex-col">
          <label htmlFor="email">Email</label>
          <input  className="

w-full
block px-16 py-2 mt-2
border-gray-300
rounded-md
shadow-sm
focus:border-indigo-300
focus:ring
focus:ring-indigo-200
focus:ring-opacity-50
"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <p className="text-xs italic text-red-500">{errors.email.message}</p>}
        </div>

        <div className="input-wrapper flex flex-col">
          <label htmlFor="password">Message</label>
          <input  className="

w-full
block px-16 py-2 mt-2
border-gray-300
rounded-md
shadow-sm
focus:border-indigo-300
focus:ring
focus:ring-indigo-200
focus:ring-opacity-50
"
            type="password"
            {...register('Message', {
              required: 'Message is required',
              minLength: {
                value: 8,
                message: 'Message must be at least 8 characters',
              },
            })}
          />
          {errors.Message && (
            <p className="text-xs italic text-red-500">{errors.Message.message}</p>
          )}
        </div>
        <button
              type="submit"
              className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
            >
              Contact Us
            </button>
      </form>
   
  
    </div>
                  </div>
            </div>
      );
};

export default Email;