import InputForm from '@/components/InputForm'

export default function Home() {
	return (
		<main className='grid grid-cols-1 gap-16 md:grid-cols-5'>
			<figure className='md:order-1 md:col-span-2'>
				<img
					src='/images/hero-mobile.jpg'
					alt=''
					className='block w-full md:hidden'
				/>
				<img
					src='/images/hero-desktop.jpg'
					alt=''
					className='hidden object-contain md:block'
				/>
			</figure>
			<section className='flex flex-col space-y-4 px-8 text-center md:col-span-3 md:place-content-center md:items-start md:space-y-8 md:px-40 md:text-left pb-24'>
				<h1 className='text-[40px]/[42px] font-light uppercase tracking-[11px] text-desaturatedRed md:text-[64px]/[71px] md:tracking-[18px] '>
					WE'RE
					<span className='block font-semibold text-darkGrayishRed'>
						COMING <span className='block'>SOON</span>
					</span>
				</h1>
				<p className='pb-4 text-sm text-desaturatedRed md:max-w-md md:pb-2 md:text-base/7'>
					Hello fellow shoppers! We're currently building our new fashion store.
					Add your email below to stay up-to-date with announcements and our
					launch deals.
				</p>
				<InputForm />
			</section>
		</main>
	)
}
