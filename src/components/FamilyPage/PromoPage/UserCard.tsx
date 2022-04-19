import { FunctionComponent } from 'react'
import { User } from '../../../services/user.service'

const UserCard: FunctionComponent<User> = ({ ...user }) => {
  return (
    <div className="justify-center my-4 mx-4 w-1/4">
      <a href={`/profile/${user.id}`}>
        <div className="w-20 justify-center rounded-md">
          <img
            src={user.profilPic}
            alt="profil"
            className="mx-auto max-w-full h-auto"
          />
        </div>
        <h2 className="text-xl px-2 border-2  border-blue shadow-small rounded-md">{user.firstName} {user.lastName}</h2>
        <p className="text-sm w-36 px-2 mt-2 border-b-2 border-l-2 border-red">{user.biography}</p>
      </a>
    </div>
  )
}

export default UserCard
