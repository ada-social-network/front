import { FunctionComponent, useEffect, useState } from 'react'
import BdaPostCard from './BdaPostCard'
import { getBdaPosts } from '../../services/post.service'

interface BdaPost {
    ID: number;
    CreatedAt?: Date;
    UpdatedAt?: Date;
    DeletedAt?: Date;
    content: string;
    title?: string;
    user_id: number;
}

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
            ID: 0,
            title: 'Error',
            content:
                "Désolé, il semblerait qu'une interférence ait été détectée sur notre réseau",
            user_id: 0
          }
        ])
      })
  }, [])

  return (
    <div>
      <h1 className="text-2xl m-4 ">Actualités du Bda</h1>
      {posts
        ? posts.map((post, i) => {
          return <BdaPostCard key={i} {...post} />
        })
        : 'Il y a un problème ...'
      }
    </div>
  )
}

export default WelcomePage
