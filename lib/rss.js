const fs = require('fs')
const RSS = require('rss')
const path = require('path')
const marked = require('marked')
const matter = require('gray-matter')

const getPosts = () => {
	let dir
	try {
		dir = fs.readdirSync(path.resolve(__dirname, '../posts/'))
	} catch (err) {
		// No posts.
		return []
	}

	return dir
		.filter((file) => path.extname(file) === '.md')
		.map((file) => {
			const postContent = fs.readFileSync(`./posts/${file}`, 'utf8')
			const { data, content } = matter(postContent)
			return { ...data, body: content }
		})
		.sort((a, b) => new Date(b.date) - new Date(a.date))
}

const renderer = new marked.Renderer()

renderer.link = (href, _, text) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`

marked.setOptions({
	gfm: true,
	breaks: true,
	headerIds: true,
	renderer,
})

const renderPost = (md) => marked(md)

const main = () => {
	const feed = new RSS({
		title: 'andreasellwanger.com',
		site_url: 'https://www.andreasellwanger.com',
		feed_url: 'https://www.andreasellwanger.com/feed.xml',
		language: 'en',
	})

	const posts = getPosts()
	posts.forEach((post) => {
		const url = `https://www.andreasellwanger.com/blog/${post.slug}`

		feed.item({
			title: post.title,
			description: renderPost(post.body),
			date: new Date(post.date),
			author: 'Andreas Ellwanger',
			url,
			guid: url,
		})
	})

	const rss = feed.xml({ indent: true })
	fs.writeFileSync(path.join(__dirname, '../public/feed.xml'), rss)
}

main()
