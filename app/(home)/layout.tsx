import { ChildProps } from '@/types'
import { Navbar, Sidebar } from './components'

export default function HomeLayout({ children }: ChildProps) {
	return (
		<div className='h-full'>
			<Navbar />
			<div className='container'>
				<section className='flex items-start gap-4 my-6'>
					<main className='w-full'>{children}</main>

					<Sidebar />
				</section>
			</div>
		</div>
	)
}
