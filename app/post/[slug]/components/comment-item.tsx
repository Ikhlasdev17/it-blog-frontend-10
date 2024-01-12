import { IComment } from '@/types/posts.types'
import moment from 'moment'

export default function CommentItem({
	id,
	email,
	comment,
	createdAt,
}: IComment) {
	return (
		<div className='p-4 rounded-md border mb-4 bg-zinc-900'>
			<div className='flex gap-2 items-center mb-4 pb-4 border-b'>
				<h3 className='text-sm font-semibold'>{email}</h3> ·{' '}
				<span className='text-xs opacity-65'>
					{moment(createdAt).fromNow()}
				</span>
			</div>

			<p className='text-sm'>{comment}</p>
		</div>
	)
}
