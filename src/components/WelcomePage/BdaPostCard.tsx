import { FunctionComponent } from "react"



interface Props {
    title?: String,
    content: String
}

const BdaPostCard: FunctionComponent<Props> = ({title, content}) => {
    if (!title) title ="Pas de titre :("
    return (
      <>
        <div className="bg-white w-full flex flex-col m-6">
          <div className="overflow-hidden border-blue border-4 shadow">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-gray-700 text-base">{content}</p>
            </div>
          </div>
        </div>
      </>
    );}

export default BdaPostCard;

