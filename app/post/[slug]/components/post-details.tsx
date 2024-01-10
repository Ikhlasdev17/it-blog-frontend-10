import { Post } from '@/types/posts.types'
import HTMLReactParser from 'html-react-parser/lib/index'
import moment from 'moment'
import Link from 'next/link'

export default function PostDetailsComponent({
	content,
	author,
	title,
	excerpt,
	cover,
	createdAt,
}: Post) {
	return (
		<div>
			<h1 className='text-[35px]'>{title}</h1>

			<Link href={`/user/${author.id}`}>
				<div className='flex items-center gap-3 my-4'>
					<img
						className='w-[40px] h-[40px] rounded-full object-cover'
						src={author.avatar.url}
					/>
					<span className='font-medium'>{author.fullName}</span>·
					<span className='opacity-65'>{moment(createdAt).fromNow()}</span>
				</div>
			</Link>

			<hr />

			<p className='text-sm my-4'>{excerpt}</p>

			<img
				className='mb-4 max-h-[400px] object-cover w-full rounded-md'
				src={cover.url}
				alt='Cover image'
			/>

			<p>{HTMLReactParser(content.html)}</p>

			<div className='relative border-2 rounded-lg p-4 dark:bg-slate-800 dark:border-slate-700 mt-[100px] pt-[100px] bg-slate-200 border-slate-300'>
				<img
					src={author.avatar.url}
					alt='Author'
					className='w-[150px] h-[150px] rounded-full absolute top-[-75px] left-[50%] transform translate-x-[-50%] border-2 p-1 border-blue-500'
				/>

				<h1 className='mb-4 text-center font-semibold text-xl'>
					{author.fullName}
				</h1>

				<p className='italic text-center text-lg'>{author.bio}</p>
			</div>
		</div>
	)
}
