import './globals.css'
import { Josefin_Sans } from 'next/font/google'

const josefin_sans = Josefin_Sans({
	subsets: ['latin'],
})

export const metadata = {
	title: 'Base Apparel Coming Soon',
	description:
		'Frontend Mentor Challenge | Base Apparel Coming Soon | Developed with Next JS, Tailwind CSS, Typescript, React Hook Form and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${josefin_sans.className} bg-mobile md:bg-desktop md:bg-cover `}>
				{children}
			</body>
		</html>
	)
}
