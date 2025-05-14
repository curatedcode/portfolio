export function formatBlogUrl({ id, title }: { id: number; title: string }) {
	return `/blog/${id}/${title
		.toLowerCase()
		.replaceAll(" ", "-")
		.replace(/[^\w-]+/g, "")}`;
}
