import { Post } from '@/types/posts.types'
import moment from 'moment'
import Link from 'next/link'

export default function PostItem({
	id,
	title,
	cover,
	author,
	slug,
	createdAt,
	excerpt,
}: Post) {
	return (
		<div className='p-3 rounded-md flex gap-4 items-start border mb-4 sm:flex-col md:flex-row justify-between'>
			<div>
				<Link href={`/user/${author.id}`}>
					<div className='flex items-center gap-3'>
						<img
							className='w-[40px] h-[40px] rounded-full object-cover'
							src={author.avatar.url}
						/>
						<span className='font-medium'>{author.fullName}</span>·
						<span className='opacity-65'>{moment(createdAt).fromNow()}</span>
					</div>
				</Link>

				<Link href={`/post/${slug}`}>
					<h1 className='text-[20px] my-2 font-semibold'>{title}</h1>
					<p className='text-xs font-medium opacity-65'>
						{excerpt.slice(0, 250)} {excerpt.length > 250 && '...'}
					</p>
				</Link>
			</div>

			<Link
				className='sm:w-full md:min-w-[250px] md:max-w-[250px] h-[150px]'
				href={`/post/${slug}`}
			>
				<img
					className='sm:w-full md:w-[250px] h-[150px] object-cover rounded-md'
					src={cover.url}
				/>
			</Link>
		</div>
	)
}
