import { FunctionComponent } from "react"



interface Props {
    date: Date | undefined;
}

const DateComponent: FunctionComponent<Props> = ({date}) => {
    if (date !== undefined) {
        date = new Date(date);
    }
    return (
        <div>
            <p className="text-gray-400 text-sm mt-2 text-right">
            {date !== undefined
                ? date.toLocaleDateString("fr-FR", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                })
                : null}
            </p>
        </div>
)}

export default DateComponent;