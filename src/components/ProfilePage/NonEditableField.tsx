import { FunctionComponent } from 'react'

interface Props {
  name: string | undefined
  toShow: string | undefined
}

export const NonEditableField: FunctionComponent<Props> = ({ name, toShow }) => {
  return (
    <>
      <div className="px-6 py-4">
        <div className="font-bold text-xl">{name}</div>
        <div className="my-2">
          <p className="w-full">{toShow}</p>
        </div>
      </div>
    </>
  )
}
