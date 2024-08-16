'use client'
import React from 'react'
/*
trong next Js chia làm 
  1.client component
  2.server component
*/


export default function UserDetail(props:any) {
  console.log("giá trị props",props);
  const {params} = props;

  
  return (
    <div>Trang thông tin chi tiết user :có id là {params.idUser}

      
    </div>
  )
}
