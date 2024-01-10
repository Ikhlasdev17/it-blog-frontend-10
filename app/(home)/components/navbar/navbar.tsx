import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { ThemeToggler, UserProfileBtn } from '..'

export default function Navbar() {
	return (
		<div className='py-6 border-b'>
			<div className='container flex items-center justify-between gap-6'>
				<div className='flex gap-4 items-center'>
					<Link href={'/'} className='text-2xl font-semibold whitespace-nowrap'>
						<span className='text-indigo-500 '>IT</span>-Blog
					</Link>

					<Input className='max-w-[250px]' placeholder='Search' />
				</div>

				<div className='flex gap-4 items-center'>
					<ThemeToggler />
					<UserProfileBtn />
				</div>
			</div>
		</div>
	)
}
