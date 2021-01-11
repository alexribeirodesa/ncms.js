import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const slug = router.query.slug || []
  return <p>Static Slug: {slug.join('/')}</p>
}

/*
export async function getStaticPaths() {
  return {
    paths: [
      { params: { ... } } // See the "paths" section below
    ],
    fallback: true or false // See the "fallback" section below
  };
}
*/

export default Post
