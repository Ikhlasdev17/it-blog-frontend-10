import { Author } from '@/types/author.types'

interface Props {
	author: Author
}

export default function UserDetailsInfo({ author }: Props) {
	return (
		<div>
			<div className='sm:flex-col md:flex-row relative border-2 rounded-lg p-4  flex items-center gap-6'>
				<img
					src={author.avatar.url}
					alt='Author'
					className='w-[100px] h-[100px] rounded-full transform border-2 p-1 border-blue-500'
				/>

				<div className='flex flex-col  justify-start'>
					<h1 className='mb-4 text-left font-semibold text-xl'>
						{author.fullName}
					</h1>

					<p className='italic text-left text-md'>{author.bio}</p>
				</div>
			</div>
		</div>
	)
}
