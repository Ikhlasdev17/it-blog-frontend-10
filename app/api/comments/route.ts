import { API_URL } from '@/services/posts.service'
import { GraphQLClient, gql } from 'graphql-request'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, res: NextResponse) {
	return new Response(
		JSON.stringify({
			data: [
				{
					id: 1,
				},
			],
		})
	)
}

export async function POST(req: NextRequest, res: NextResponse) {
	const body = await req.json()

	if (!body.comment || !body.email || !body.slug) {
		return new Response(
			JSON.stringify({
				message: 'comment, email, slug fields required!',
			}),
			{
				status: 422,
			}
		)
	}

	const gqlClient = new GraphQLClient(API_URL, {})

	const query = gql`
		mutation CreateComment($email: String!, $comment: String!, $slug: String!) {
			createComment(
				data: {
					email: $email
					comment: $comment
					post: { connect: { slug: $slug } }
				}
			) {
				id
			}
		}
	`

	try {
		const newComment = await gqlClient.request(query, {
			email: body.email,
			comment: body.comment,
			slug: body.slug,
		})

		return new Response(JSON.stringify(newComment))
	} catch (error) {
		return new Response(JSON.stringify(error))
	}
}
