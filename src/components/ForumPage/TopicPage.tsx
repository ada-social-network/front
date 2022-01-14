import { FunctionComponent, useEffect, useState } from 'react'
import { getTopics } from '../../services/post.service'
import PostTopicButton from './PostTopicButton'
import TopicTitle from './TopicTitle'
import { useParams } from 'react-router'

interface Topic {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  name : string;
  categoryID : string
}

interface Params {
 id : string
}

type TopicList = Topic[];

const TopicPage:FunctionComponent = () => {
  const [topics, setTopics] = useState<TopicList>()
  const { id } = useParams<Params>()

  useEffect(() => {
    getTopics(id)
      .then((response) => {
        setTopics(response)
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
        setTopics([
          {
            id: '',
            name: "Désolé, il semblerait qu'une interférence ait été détectée sur notre réseau",
            categoryID: ''
          }
        ])
      })
  }, [])

  return (
    <div className="min-w-full">
      <PostTopicButton />
      {topics !== undefined
        ? topics.map((topic, i) => {
          return <TopicTitle key={i} title={topic.name} id={topic.id}/>
        })
        : 'Loading...'
      }
    </div>
  )
}
export default TopicPage
