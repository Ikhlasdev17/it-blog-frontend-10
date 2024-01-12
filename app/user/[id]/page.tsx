import { PostsService } from '@/services/posts.service'
import UserDetailsInfo from './components/user-details'
import UserPosts from './components/user-posts'

export default async function UserDetails({ params }: { params: any }) {
	const userData = await PostsService.getSingleAuthor(params.id)

	return (
		<div>
			<UserDetailsInfo author={userData} />
			<hr className='my-4' />
			<UserPosts author={userData} />
		</div>
	)
}
