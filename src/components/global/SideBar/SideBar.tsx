import React, {FunctionComponent} from "react";
import MenuTitle from "./MenuTitle";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";



interface Props {
  small : boolean,
}

const SideBar: FunctionComponent<Props> = ({small}) => {
  return (
    <>
      <div className={small? ("w-14") : ("w-44")}>
        <div className="h-screen flex flex-col bg-white border-4 border-pink overflow-hidden">
          <ul className="flex flex-col py-4">
            <li>
              <a href="/">
                <MenuTitle name={"Actualités"} small={small} icon={faGlobe}/>
              </a>
            </li>
            <li>
              <a href="/forum">
                <MenuTitle name={"Forum"} small={small} icon={faCommentDots}/>
              </a>
            </li>
            <li>
              <a href="/calendar">
                <MenuTitle name={"Calendrier"} small={small} icon={faCalendarAlt}/>
              </a>
            </li>
            <li>
              <a href="/promos">
                <MenuTitle name={"Promos"} small={small} icon={faUsers}/>
              </a>
            </li>
          </ul>
        </div>
        </div>
    </>

  )
}

export default SideBar;