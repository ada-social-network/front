import { FunctionComponent } from 'react'

interface Props {
    promo_name : String;
    biography: String;
}

const PromoCard: FunctionComponent<Props> = ({ promo_name, biography }) => {
  return (
    <div className="flex flex-col justify-center my-4 mx-4">
      <div className="w-20 justify-center">
        <img
          src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
          alt="..."
          className="mx-auto rounded-full max-w-full h-auto"
        />
      </div>
      <h1 className="text-xl px-2 border-2 border-blue shadow-small ">{promo_name}</h1>
      <p className="text-sm w-36 px-2 mt-2 border-b-2 border-l-2 border-red">{biography}</p>
    </div>
  )
}

export default PromoCard
