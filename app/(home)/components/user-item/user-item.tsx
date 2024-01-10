import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import { Author } from '@/types/author.types'
import Link from 'next/link'

interface Props extends Author {
	lastPost: boolean
}

export default function UserItem({
	id,
	fullName,
	bio,
	avatar,
	posts,
	lastPost,
}: Props) {
	const userNameSplited = fullName.split(' ')

	return (
		<Link
			href={`/user/${id}`}
			className={cn(
				' flex gap-3 items-center transition-all duration-200',
				!lastPost && 'border-b mb-3 pb-3'
			)}
		>
			<Avatar>
				<AvatarImage src={avatar.url} />
				<AvatarFallback>
					{userNameSplited[0][0]}
					{userNameSplited[1] ? userNameSplited[1][0] : ''}
				</AvatarFallback>
			</Avatar>

			<div>
				<h4 className='text-sm font-semibold mb-1 flex items-center gap-2'>
					<span>{fullName}</span> ·{' '}
					<span className='opacity-65'>{posts?.length} posts</span>
				</h4>

				<p className='text-xs opacity-65'>{bio.slice(0, 50)}...</p>
			</div>
		</Link>
	)
}
