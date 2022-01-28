import { FunctionComponent, useEffect, useState } from 'react'
import { getPosts, getTopic } from '../../services/post.service'
import PostCard from './PostCard'
import { useParams } from 'react-router'
import PostPostForm from './PostPostForm'
import { Topic } from './TopicPage'

export interface Post {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  content: string;
  topicID : string;
  userId: string;
}

interface Params {
 id : string
}

type PostList = Post[];

const PostPage:FunctionComponent = () => {
  const [posts, setPosts] = useState<PostList>([])
  const [topic, setTopic] = useState<Topic>()

  const { id } = useParams<Params>()

  const newPost = (response : Post) => {
    setPosts([...posts, response])
  }
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
            content: "Désolé, il semblerait qu'une interférence ait été détectée sur notre réseau",
            topicID: '',
            userId: ''
          }
        ])
      })
    getTopic(id)
      .then((response) => {
        setTopic(response)
      })
  }, [])

  return (
    <div className="w-full justify-center bg-white">
      <div className="border-b-2 border-pink px-6 py-2 ">
        <div className="flex flex-col">
          <h3 className="text-grey-darkest mb-1 font-extrabold"> {topic?.name}</h3>
          <div className="text-grey-dark text-sm ">
            {topic?.content}
          </div>
        </div>

      </div>

      {posts !== undefined
        ? posts.map((post, i) => {
          return <PostCard key={i} {...post}/>
        })
        : 'Loading...'
      }
      <PostPostForm onPost={newPost} />
    </div>

  )
}
export default PostPage
