import { PostsService } from '@/services/posts.service'
import { ChildProps } from '@/types'
import { Navbar, Sidebar } from '../(home)/components'

export default async function PostsLayout({ children }: ChildProps) {
	const authors = await PostsService.getAuthorsWithPosts()
	return (
		<div className='h-full'>
			<Navbar />
			<div className='container'>
				<section className='flex items-start gap-4 my-6 sm:flex-col lg:flex-row'>
					<main className='w-full'>{children}</main>

					<Sidebar authors={authors} />
				</section>
			</div>
		</div>
	)
}
