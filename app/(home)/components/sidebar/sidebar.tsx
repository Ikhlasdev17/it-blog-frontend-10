import { Author } from '@/types/author.types'
import UserItem from '../user-item/user-item'

export default function Sidebar({ authors }: { authors: Author[] }) {
	return (
		<div className='min-w-[350px] max-w-[350px] p-4 border rounded-md sticky top-4'>
			{authors.map((author, index, array) => (
				<UserItem
					{...author}
					key={author.id}
					lastPost={index === array.length - 1}
				/>
			))}
		</div>
	)
}
