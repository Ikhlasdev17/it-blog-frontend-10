import { PostsService } from '@/services/posts.service'
import PostDetailsComponent from './components/post-details'

export default async function PostDetails({ params }: { params: any }) {
	const post = await PostsService.getSinglePost(params.slug)

	return (
		<div>
			<PostDetailsComponent {...post} />
		</div>
	)
}
