import { FunctionComponent } from 'react'
import BdaPostForm from './BdaPostForm'
import notion from '../../../logo/notion.svg'
import trello from '../../../logo/trello.svg'

const ActuPage: FunctionComponent = () => {
  return (
    <div className="ml-20 mx-4">
      <h1 className='my-6'>Espace BDA</h1>
      <BdaPostForm />
      <div className='flex flex-row mt-8 space-x-6'>
        <a href='https://www.notion.so/Parcours-d-v-nements-BDA-44032be0a38141b09b41a0f69986d960' className='flex flex-row'>
          <img src={notion} alt="notion" className='w-16'/>
          <p className='inline-block align-middle'>Parcours évèments du BDA</p>
        </a>
        <a href='https://trello.com/b/nWMil6lB/orga-bda' className='flex flex-row'>
          <img src={trello} alt="trello" className='p-4 w-16'/>
          <p>Board Trello</p>
        </a>
      </div>
    </div>

  )
}

export default ActuPage
