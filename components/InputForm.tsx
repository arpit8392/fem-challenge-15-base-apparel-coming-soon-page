'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup
	.object({
		email: yup
			.string()
			.email('Please provide a valid email')
			.required('Please provide a valid email'),
	})
	.required()

type FormData = yup.InferType<typeof schema>

const InputForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
	})

	const onSubmit = (data: FormData) => console.log(data)

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			noValidate
			className='mx-auto min-w-full'>
			<div className='relative flex flex-row items-center rounded-md shadow-sm '>
				<input
					type='email'
					{...register('email')}
					placeholder='Email Address'
					className={`flex-1 rounded-full border  border-desaturatedRed bg-inherit px-6 py-3 text-sm/7 text-darkGrayishRed placeholder:font-normal placeholder:text-desaturatedRed focus:border-none focus:outline-none focus:ring-1 focus:ring-desaturatedRed ${
						errors.email?.message && 'focus:ring-2 focus:ring-softRed'
					}`}
				/>

				{errors.email?.message && (
					<div className='absolute right-28 z-10'>
						<img src='/images/icon-error.svg' alt='' />
					</div>
				)}

				<button className='flex h-14 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-btn'>
					<img src='/images/icon-arrow.svg' alt='' />
				</button>
			</div>
			{errors.email?.message && (
				<p className='ml-6 mt-2 text-left text-sm text-softRed'>
					{errors.email.message}
				</p>
			)}
		</form>
	)
}

export default InputForm
