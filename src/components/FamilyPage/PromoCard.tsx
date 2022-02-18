import { FunctionComponent } from 'react'

interface Props {
    promo : string;
    biography: string;
    profilePic? :string;
    id : string
}

const PromoCard: FunctionComponent<Props> = ({ promo, biography, profilePic, id }) => {
  return (
    <div className="flex flex-col justify-center my-4 mx-4">
      <a href={`/family/${id}`}>
        <div className="w-20 justify-center">
          <img
            src={profilePic}
            alt="..."
            className="mx-auto rounded-full max-w-full h-auto"
          />
        </div>
        <h2 className="text-xl px-2 border-2 border-blue shadow-small ">{promo}</h2>
        <p className="text-sm w-36 px-2 mt-2 border-b-2 border-l-2 border-red">{biography}</p>
      </a>
    </div>
  )
}

export default PromoCard
