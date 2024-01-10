import { IAuthorResponse } from '@/types/author.types'
import { IPostsResponse } from '@/types/posts.types'
import request, { gql } from 'graphql-request'
import { Author } from './../types/author.types'
import { Post } from './../types/posts.types'

const API_URL: string =
	'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clr50xlpis3rd01uqvhcdbxa4/master'

export const PostsService = {
	async getAllPosts(): Promise<Post[]> {
		const query = gql`
			query Posts {
				posts {
					id
					title
					excerpt
					cover {
						url
					}
					content {
						html
					}
					author {
						fullName
						id
						avatar {
							url
						}
						bio
					}
					slug
					createdAt
				}
			}
		`

		const response = await request<IPostsResponse>(API_URL as string, query)
		return response.posts
	},
	async getSinglePost(slug: string): Promise<Post> {
		const query = gql`
			query Posts($slug: String!) {
				posts(where: { slug: $slug }) {
					id
					title
					excerpt
					cover {
						url
					}
					content {
						html
					}
					author {
						fullName
						id
						avatar {
							url
						}
						bio
					}
					slug
					createdAt
				}
			}
		`

		const response = await request<IPostsResponse>(API_URL as string, query, {
			slug: slug,
		})

		return response.posts[0]
	},
	async getAuthorsWithPosts(): Promise<Author[]> {
		const query = gql`
			query Authors {
				authors {
					id
					fullName
					avatar {
						url
					}
					bio
					posts {
						id
						title
						excerpt
						cover {
							url
						}
						content {
							html
						}
						author {
							fullName
							id
							avatar {
								url
							}
							bio
						}
						slug
						createdAt
					}
				}
			}
		`

		const response = await request<IAuthorResponse>(API_URL as string, query)
		return response.authors
	},
}