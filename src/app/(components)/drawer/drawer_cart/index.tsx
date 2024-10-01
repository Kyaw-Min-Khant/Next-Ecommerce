import { stringFormat } from "@/utlils/stringformat"
import React, { useMemo } from "react"
import { CardType } from "../../cart"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { StateContextCustom } from "@/services/provider/stateProvider"

const Drawer_Cart:React.FC<CardType>=(item)=>{
    const {state,dispatch}=StateContextCustom();
    const item_Count=state?.cartList?.filter((data)=>data?.id===item?.id)?.length
    const { toast } = useToast();
    const itemPrice=useMemo(()=>item_Count*item?.price,[item_Count])

  const reduceItem=()=>{
      if(item_Count > 1){
       return dispatch({type:'reduceACart',payload:item?.id})
      }
      }

    return <div className="group flex relative  mx-auto border-b border-black/10 py-3 justify-start gap-x-10 items-start">
    <img className="object-contain w-[150px] h-[150px]" height={200} alt={item?.title} src={item?.image} /> 
    <div className="flex flex-col gap-y-3">
      <h2 className="text-[18px] text-black/80 font-semibold ">
        {stringFormat({text:item?.title, length:40})}
      </h2>
      <h2 className="text-[16px] font-medium">
        $ {itemPrice}
      </h2>
      <div className="w-fit border rounded border-black/20 gap-x-1 flex justify-center items-center">
        <button onClick={()=>
       {dispatch({type:"addToCart",payload:item})
         }
          } className="p-1 active:bg-black/5 border-r border-black/20">
          <Plus size={18}/>
        </button>
        <h2 className="text-[16px] px-2">{item_Count}</h2>
        <button onClick={reduceItem} className="p-1 active:bg-black/5 border-l border-black/20">
          <Minus size={18}/>
        </button>
      </div>
    </div>
    <button onClick={()=>{ 
      dispatch({type:'removeACart',payload:item?.id})
      toast({
        title: "Successfully removed",
      })
  
      }} className="hidden group-hover:flex active:bg-black/5 items-center px-2 rounded gap-x-2 py-1 border-red-600 border absolute bottom-8 right-10 p-2">
      <Trash2 color="red" size={16} />
      <h2 className="text-red-600 text-[16px]">Remove</h2>
    </button>
  </div>
}
export default Drawer_Cart