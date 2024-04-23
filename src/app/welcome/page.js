"use client";
import React, {useState} from "react";
import NavbarAuth from "../components/navbarAuth";
import TodaysPlan from "../components/todays-plan";
import Button from "../components/button";
import Link from "next/link";
import ItemList from "../components/itemlist";

export default function() {

    const [foods, setFoods] = useState([]);

  const addUserHandler = (foodInfo) => {
    setFoods((prev) => [...prev, foodInfo]);
  };

  
    return (
        <div>
            <NavbarAuth />
            <TodaysPlan/>
        
            <Link href="/welcome/addplan"><button>Add New Plan</button> </Link>

            <ItemList />
        </div>
    )
}