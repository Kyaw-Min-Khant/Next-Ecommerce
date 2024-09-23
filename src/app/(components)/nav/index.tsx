import { Input } from "@/components/ui/input"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { ShoppingCart } from 'lucide-react';
import { StateContextCustom } from "@/services/provider/stateProvider";
import { useRouter } from "next/navigation";
// import { DrawerTrigger } from "@/components/ui/drawer";
  const Nav=()=>{
    const {state}=StateContextCustom();
    const item_count=state?.cartList?.length
    const router = useRouter()

return (
<div className="flex  px-10  bg-blue-600 py-3 justify-between items-center">
  <h2 className=" text-white text-2xl font-semibold">Dev</h2>
<Input  type="search" placeholder="Email" />
<div className=" flex justify-between items-center gap-7">
    <div className="relative ">
        <div className=" absolute top-[-10px]  right-[-10px] w-5 h-5 rounded-full bg-red-600 justify-center items-center">
            <h1 className=" text-white text-sm text-center my-auto">{item_count}</h1>
        </div>
        {/* <DrawerTrigger> */}
        <ShoppingCart color="white" size={24} />
        {/* </DrawerTrigger> */}
    </div>
    <Avatar onClick={()=>router.push('profile')} >
      <AvatarImage src="https://i.pinimg.com/564x/8f/85/d1/8f85d19c27888bb913f4caba58760851.jpg" alt="Profile" />
      <AvatarFallback>KMK</AvatarFallback>
    </Avatar>
</div>
</div>)
}

export default Nav