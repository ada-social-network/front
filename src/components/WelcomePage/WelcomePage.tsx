import react, { FunctionComponent, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import axios from "axios";
import BdaPostCard from "./BdaPostCard";

const baseUrl = "http://localhost:8080/api/rest/v1/bdaposts";

interface BdaPost {
    ID: Number;
    CreatedAt?: Date;
    UpdatedAt?: Date;
    DeletedAt?: Date;
    content: String;
    title?: String;
    user_id: Number;
}

type BdaPostList = BdaPost[];

const WelcomePage: FunctionComponent = () => {
   
    const [posts, setPosts] = useState<BdaPostList>();

    useEffect(() => {
        axios
        .get<BdaPostList>(baseUrl)
        .then((response) => {
            setPosts(response.data.reverse());
        })
        .catch(function (error) {
            if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            } else if (error.request) {
            console.log(error.request);
            } else {
            console.log("Error", error.message);
            }
            console.log(error.config);
            setPosts([
            {
                ID: 0,
                title: "Error",
                content:
                "Désolé, il semblerait qu'une interférence ait été détectée sur notre réseau",
                user_id: 0,
            },
            ]);
        });
    }, []);
    
    if (!posts) return null;

    return (
        <div>
           
                <h1 className="text-2xl m-4 ">Actualités du Bda</h1>
            {posts !== null || undefined ? 
                posts.map((post,i) => {
                return <BdaPostCard key={i} {...post} />;
            })
            : "Il y a un problème ..."
            }
           
        </div>
       
    );
};

export default WelcomePage;
