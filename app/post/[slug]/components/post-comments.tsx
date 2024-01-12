'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { PostsService } from '@/services/posts.service'
import { IComment } from '@/types/posts.types'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaComment } from 'react-icons/fa'
import CommentItem from './comment-item'

export default function PostComments({ comments }: { comments: IComment[] }) {
	const [newCommentData, setNewCommentData] = useState({
		email: '',
		comment: '',
	})
	const [loading, setLoading] = useState(false)
	const { toast } = useToast()

	const params = useParams()
	const router = useRouter()

	const onComment = (e: React.SyntheticEvent) => {
		e.preventDefault()
		setLoading(true)
		PostsService.createComment(
			params.slug as string,
			newCommentData.email,
			newCommentData.comment
		)
			.then(res => {
				if (res?.status === 200) {
					router.refresh()

					toast({
						title: 'Comment published successfull!',
					})
				} else {
					toast({
						title: 'Oops, something went wrong!',
						variant: 'destructive',
					})
				}
			})
			.catch(err => console.log(err))
			.finally(() => {
				setNewCommentData({
					email: '',
					comment: '',
				})
				setLoading(false)
			})
	}

	return (
		<div className='my-12'>
			<h1 className='mb-6 flex items-center text-xl gap-4'>
				<FaComment />
				Comments ({comments?.length})
			</h1>
			<form onSubmit={onComment} className='my-6'>
				<Input
					onChange={e =>
						setNewCommentData({ ...newCommentData, email: e.target.value })
					}
					value={newCommentData.email}
					placeholder='Email'
					required
				/>
				<Textarea
					onChange={e =>
						setNewCommentData({ ...newCommentData, comment: e.target.value })
					}
					value={newCommentData.comment}
					className='my-4'
					placeholder='Comment:'
					required
				/>
				<Button disabled={loading}>Submit</Button>
			</form>
			{comments?.map(item => <CommentItem {...item} key={item.id} />).reverse()}
		</div>
	)
}
