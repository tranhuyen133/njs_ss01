import axios from "axios";
import React from "react";
async function getData() {
  try{
    const res = await axios.get("https://jsonphghghlaceholder.typicode.com/users");
    console.log("gias trij res", res);
    return res.data;
  } catch (err){
    console.log( "Error ", err);
    return "loi trong qua trinh lay du lieu!"
  }
}
getData();
export default async function page() {
  const users = await getData();
  return (
    <div>
      {Array.isArray(users)? users.map((item:any)=>{
        return <li key={item.id}>{item.name}</li>;
      }) : users}
     
    </div>
  );}