import { FunctionComponent, useEffect, useState } from 'react'
import BdaPostCard from './BdaPostCard'
import { getBdaPosts, BdaPost } from '../../services/post.service'

type BdaPostList = BdaPost[];

const WelcomePage: FunctionComponent = () => {
  const [posts, setPosts] = useState<BdaPostList>()

  useEffect(() => {
    getBdaPosts()
      .then((posts) => {
        setPosts(posts.reverse())
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          console.log(error.request)
        } else {
          console.log('Error', error.message)
        }
        console.log(error.config)
        setPosts([
          {
            id: '',
            title: 'Error',
            content:
                "Désolé, il semblerait qu'une interférence ait été détectée sur notre réseau",
            userId: ''
          }
        ])
      })
  }, [])

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="m-8">Actualités du Bda</h1>

      {posts
        ? posts.map((post, i) => {
          return <BdaPostCard key={i} post={post} />
        })
        : 'Loading...'
      }
    </div>
  )
}

export default WelcomePage
