import { FunctionComponent, useEffect, useState } from 'react'
import { getPosts } from '../../services/post.service'
import PostPostButton from './PostPostButton'
import PostCard from './PostCard'
import { useParams } from 'react-router'

interface Post {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  title : string;
  content: string;
  topicID : string;
}

interface Params {
 id : string
}

type PostList = Post[];

const PostPage:FunctionComponent = () => {
  const [posts, setPosts] = useState<PostList>()
  const { id } = useParams<Params>()

  useEffect(() => {
    getPosts(id)
      .then((response) => {
        setPosts(response)
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response)
        } else if (error.request) {
          console.log(error.request)
        } else {
          console.log('Error', error.message)
        }
        console.log(error.config)
        setPosts([
          {
            id: '',
            title: 'error',
            content: "Désolé, il semblerait qu'une interférence ait été détectée sur notre réseau",
            topicID: ''
          }
        ])
      })
  }, [])

  return (
    <div className="min-w-full">
      <PostPostButton />
      {posts !== undefined
        ? posts.map((post, i) => {
          return <PostCard key={i} {...post}/>
        })
        : 'Loading...'
      }
    </div>
  )
}
export default PostPage
