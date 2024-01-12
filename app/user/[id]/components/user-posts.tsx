import PostItem from '@/app/(home)/components/post-item/post-item'
import { Author } from '@/types/author.types'

export default function UserPosts({ author }: { author: Author }) {
	return (
		<div>
			{author.posts?.map(item => (
				<PostItem {...item} key={item.id} />
			))}
		</div>
	)
}
