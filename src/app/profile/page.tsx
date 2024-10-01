'use client'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
const Profile=()=>{
    const router=useRouter();
    return  <div className=" min-h-screen justify-center items-center">
      <h2 className="text-lg ">
       Profile Page
      </h2>
      <Button onClick={()=>{document.cookie = `auth_token=; Max-Age=-99999999; path=/`,router.push('/login')}} >LogOut</Button>
    </div>
}

export default Profile