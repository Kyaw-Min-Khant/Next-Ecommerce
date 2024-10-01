"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import useForm from "@/hooks/useForm"
import { login } from "@/services/api/auth"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

const  Login =()=>{
   const router = useRouter();
   const formLogin=()=>{
   mutation.mutate(values as {username:string,password:string});
   }
   const {errors,handleChange,values,handleSubmit}=useForm(formLogin);
   const mutation=useMutation({
      mutationFn:login,
      onSuccess:(data)=>{
         if(data?.data?.token){
          document.cookie=`auth_token=${data?.data?.token}${15}` ;
          router.push('/products')
         }
      },
      onError:(error)=>window.alert(error?.message)
   })
   
   return (
    <div className=" bg-blue-600 flex justify-center items-center h-screen">
     <form onSubmit={handleSubmit} className="bg-white rounded-md pb-10 p-5 flex justify-center items-center gap-y-5 flex-col w-4/12" >
      <h2 className="text-3xl font-bold text-black/80">
         Login 
      </h2>
      <div className=" w-full h-[50px]">
      <Input onChange={handleChange} className="w-full h-10" name="username"   placeholder="Name"/>
      <p className="text-red-600  text-sm">{errors?.username}</p>
      </div>
      <div className=" w-full h-[50px]">
      <Input onChange={handleChange} type="password" className="w-full h-10" name="password"  placeholder="Password"/>
      <p className="text-red-600 pt-[2px]  text-sm">{errors?.password}</p>
      </div>
      <Button type="submit" className=" bg-blue-600  w-full py-3 font-semibold text-white text-lg ">
         Login
      </Button>
     </form>
    </div>
   )
}
export default Login