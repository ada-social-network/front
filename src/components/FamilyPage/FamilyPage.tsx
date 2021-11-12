import React, { FunctionComponent, useEffect, useState } from "react"
import  { useMediaQuery } from "react-responsive";

import axios from "axios";
import NavBar from "../global/NavBar/NavBar";
import SideBar from "../global/SideBar/SideBar";

const baseUrl = "http://localhost:8080/api/rest/v1/promo";

interface Promo {
  ID: Number;
  CreatedAt: Date;
  UpdatedAt?: Date;
  DeletedAt?: Date;
  promo_name: String;
  date_of_start: String;
  date_of_end: String;
biography: String;
}

type PromoList = Promo[];

const FamilyPage: FunctionComponent = () => {
    const isBigScreen = useMediaQuery({ query: "(min-device-width: 1224px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 900px)" });

    const [promos, setPromos]= useState<PromoList>()

  useEffect(() => {
    axios.get<PromoList>(baseUrl).then((response) => {
      setPromos(response.data);
    });
  }, []);

  if (!promos) return null;

  return (
    <div>
      <NavBar />
      <div className="flex flex-row">
        {isSmallScreen ? <SideBar small={true} /> : <SideBar small={false} />}
        <div className="flex flex-col mx-12 my-2">
            <h1 className="text-2xl m-4 ">Family Page</h1>
            {promos !== null || undefined ? 
              promos.map((promo) => {
            return <h1> {promo.promo_name}</h1> ;
          })
        : "Il y a un problème ..."
        }
        </div>
    </div>
</div>
)
}

export default FamilyPage;