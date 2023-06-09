'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Image from 'next/image'

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
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<div className='relative flex flex-row items-center rounded-md md:max-w-md'>
				<label htmlFor='email' className='sr-only'>
					Email
				</label>
				<input
					type='email'
					autoComplete='off'
					{...register('email')}
					id='email'
					aria-invalid={errors.email ? 'true' : 'false'}
					placeholder='Email Address'
					className={`flex-1 rounded-full border border-desaturatedRed bg-inherit px-6 py-3 text-sm/7 text-darkGrayishRed placeholder:font-normal placeholder:text-desaturatedRed/50 focus:border-none focus:outline-none focus:ring-2  active:bg-inherit  ${
						errors.email?.message
							? 'focus:ring-softRed'
							: 'focus:ring-desaturatedRed'
					}`}
				/>

				{errors.email?.message && (
					<div className='absolute right-16 z-10 md:right-24'>
						<Image
							src={'/images/icon-error.svg'}
							alt=''
							height={24}
							width={24}
						/>
					</div>
				)}

				<button className='absolute -right-1 flex h-14 w-16 items-center justify-center rounded-full bg-btn md:w-24'>
					<Image
						src={'/images/icon-arrow.svg'}
						alt='Submit Button'
						height={18}
						width={9}
					/>
				</button>
			</div>

			{errors.email?.message && (
				<p role='alert' className='px-8 py-2 text-left text-sm text-softRed'>
					{errors.email.message}
				</p>
			)}
		</form>
	)
}

export default InputForm
