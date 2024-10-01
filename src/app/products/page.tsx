"use client";
import { getAllProducts} from "@/services/api/products"
import {useQuery} from "@tanstack/react-query"
import {  useMemo } from "react";
import Loading from "./loading";
import Cart, { CardType } from "../(components)/cart";
import { getCookie } from "@/utlils/cookie";
import { redirect } from "next/navigation";
 const DashBoard = () => {
  const token=getCookie('auth_token');
  console.log(token)
 if(token===null){
  return redirect('/login')
 }
 
  const {data,isLoading}= useQuery({queryKey:['getAllData'],queryFn:getAllProducts})
  const renderCards = useMemo(() => {
    return (
      <div className="flex container mx-auto justify-center gap-x-5 gap-y-10 flex-wrap items-center">
        {data?.map((item: CardType) => (
          <Cart key={item.id} {...item} />
        ))}
      </div>
    );
  }, [data]);

 if(isLoading){
  return <Loading/>
 }
  return (
      <div className=" pt-5 flex justify-center gap-x-5 gap-y-10  flex-wrap items-center">
        {renderCards}
      </div>
  )
}
export default DashBoard