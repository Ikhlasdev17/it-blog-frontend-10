export interface IPostsResponse {
	posts: Post[]
}

export interface Post {
	id: string
	title: string
	excerpt: string
	cover: Cover
	content: Content
	author: Author
	slug: string
	createdAt: Date
}

export interface Author {
	fullName: string
	id: string
	avatar: Cover
	bio: string
}

export interface Cover {
	url: string
}

export interface Content {
	html: string
}
