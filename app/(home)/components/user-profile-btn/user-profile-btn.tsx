import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function UserProfileBtn() {
	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Avatar className='cursor-pointer'>
						<AvatarImage src='https://picsum.photos/100' />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					<DropdownMenuItem>Logout</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
