'use client'

import { Post } from '@/types/posts.types'
import PostItem from '../post-item/post-item'

interface Props {
	posts: Post[]
}

export default function HomePosts({ posts }: Props) {
	return (
		<div>
			{posts.map(item => (
				<PostItem key={item.id} {...item} />
			))}
		</div>
	)
}
