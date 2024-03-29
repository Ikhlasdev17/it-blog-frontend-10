import { IComment } from './posts.types'

export interface IAuthorResponse {
	authors: Author[]
}

export interface Post {
	id: string
	title: string
	excerpt: string
	cover: Avatar
	content: Content
	author: Author
	slug: string
	createdAt: string
	comments: IComment[]
}

export interface Author {
	id: string
	fullName: string
	avatar: Avatar
	bio: string
	posts?: Post[]
}

export interface Content {
	html: string
}

export interface Avatar {
	url: string
}
