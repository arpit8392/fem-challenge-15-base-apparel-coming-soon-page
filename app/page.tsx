import InputForm from '@/components/InputForm'

export default function Home() {
	return (
		<main className='relative grid grid-cols-1 md:grid-cols-5 md:grid-rows-5'>
			<header className='px-8 py-8 md:col-span-3 md:row-span-1 md:pl-40 md:pt-20'>
				<img src='/images/logo.svg' alt='Brand Logo' />
			</header>

			<div className='col-span-full block md:hidden'>
				<img
					src='/images/hero-mobile.jpg'
					alt='Fashion Store Owner Image'
					className='w-full '
				/>
			</div>

			<section className='flex flex-col gap-y-4 px-8 pb-24 pt-16 text-center md:col-span-5 md:col-start-1 md:row-span-4 md:gap-y-8 md:pl-40 md:text-left'>
				<h1 className='text-5xl font-light uppercase leading-tight tracking-widest text-desaturatedRed md:text-7xl '>
					WE&apos;RE
					<span className='block font-semibold text-darkGrayishRed'>
						COMING <span className='block'>SOON</span>
					</span>
				</h1>
				<p className='pb-4 text-sm text-desaturatedRed md:max-w-md md:pb-2 md:text-base/7'>
					Hello fellow shoppers! We&apos;re currently building our new fashion
					store. Add your email below to stay up-to-date with announcements and
					our launch deals.
				</p>
				<InputForm />
			</section>

			<div className='hidden md:col-span-2 md:col-start-6 md:row-span-full md:row-start-1 md:block'>
				<img
					src='/images/hero-desktop.jpg'
					alt='Fashion Store Owner Image'
					className='h-screen w-full'
				/>
			</div>
		</main>
	)
}
