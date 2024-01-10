import { PostsService } from '@/services/posts.service'
import HomePosts from './components/main/main'

export default async function Home() {
	const posts = await PostsService.getAllPosts()
	return (
		<div>
			<HomePosts posts={posts} />
		</div>
	)
}
