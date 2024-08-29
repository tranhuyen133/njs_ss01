import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'
export const metadata :Metadata={
  title:'học lập trình nextjs',
  description:'học nextjs cơ bản',
}
  
export default function page() {
  return (
    <div>Page
      <img width={400} height={400} src="https://tse4.mm.bing.net/th?id=OIP.MIuG6_jChGmlFqc_gONKCQHaDt&pid=Api&P=0&h=220" alt="" />
      <br />
      <Image src="https://tse3.mm.bing.net/th?id=OIP.JJS_1UUnsSxwy_yFkcpLkgHaJ4&pid=Api&P=0&h=220" 
      height={500}
       width={200} 
       alt="capipi">
        
       </Image>
      
    </div>
  )
}

