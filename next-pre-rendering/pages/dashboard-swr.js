import React from "react";
import useSwr from "swr";

function DashboardSWR() {
  const fetcher = async () => {
    const response = await fetch("http://localhost:4000/dashboard");
    const data = await response.json();
    return data;
  };
  const {data,error}=useSwr("dashboard", fetcher);

  if(error) return "An error has occured"
  if(!data) return "loading"
  

  return (
    <div>
        <h2>Dashboard</h2>
        <h2>Posts - {data.posts}</h2>
        <h2>Likes - {data.likes}</h2>
        <h2>Followers - {data.followers}</h2>
        <h2>Following - {data.following}</h2>
    </div>
  )
}

export default DashboardSWR;
