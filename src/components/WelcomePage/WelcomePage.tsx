import react, { FunctionComponent, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import axios from "axios";
import NavBar from "../global/NavBar/NavBar";
import SideBar from "../global/SideBar/SideBar";
import BdaPostCard from "./BdaPostCard";

const baseUrl = "http://localhost:8080/api/rest/v1/bdaposts";

interface BdaPost {
  ID: Number;
  CreatedAt: Date;
  UpdatedAt?: Date;
  DeletedAt?: Date;
  content: String;
  title?: String;
  user_id: Number;
}

type BdaPostList = BdaPost[];

const WelcomePage: FunctionComponent = () => {
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1224px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 900px)" });

  const [posts, setPosts] = useState<BdaPostList>();

  useEffect(() => {
    axios.get<BdaPostList>(baseUrl).then((response) => {
      setPosts(response.data);
    });
  }, []);

  if (!posts) return null;

  return (
    <div>
      <NavBar />
      <div className="flex flex-row">
        {isSmallScreen ? <SideBar small={true} /> : <SideBar small={false} />}
        <div className="flex flex-col mx-12 my-2">
            <h1 className="text-2xl m-4 ">Actualités du Bda</h1>
          {posts.map((post) => {
            return <BdaPostCard title={post.title} content={post.content} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
