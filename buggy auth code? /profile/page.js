'use client'
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

export default function ProfilePage() {
    const router = useRouter();
    const [data, setData] = useState("nothing");

    const getUserDetails = async () => {
        try {
            const res = await axios.get('/api/users/me');
            setData(res.data.data._id);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <h1>Profile</h1>
            <h2>{data === "nothing" ? "Nothing" : data}</h2>
            <button onClick={getUserDetails}>Details</button>
        </div>
    );
}
