import { StateContextCustom } from "@/services/provider/stateProvider"
import { stringFormat } from "@/utlils/stringformat"
import { useRouter } from "next/navigation"
export interface CardType{
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image:string,
  rating: {
  rate: number,
  count: number
  }
  }
const Cart=(data:CardType)=>{
  const router = useRouter()
  const {dispatch,state}=StateContextCustom()
  const is_selected =state?.cartList?.find((item)=>item?.id===data?.id)?true:false
return (
    <div className=" w-[250px] hover:bg-blue-50 relative rounded shadow-lg">
      <div className="bg-red-700 rounded-xl absolute top-2 right-4">
        <h2 className=" text-[14px] text-white px-2">
        {data?.rating?.rate}
        </h2>
      </div>
      <img onClick={()=>router.push(`/products/${data?.id}`)}  className="mx-auto object-contain h-[180px]"  alt="image" src={data?.image}/>
      <div className="flex p-3 flex-col justify-between gap-y-2">
        <div className="flex justify-between items-center">
        <h1 className="text-[16px] font-semibold text-ellipsis">{stringFormat({text:data?.title,length:15})}</h1>
        <h1 className="text-[14px] font-medium">$ {data?.price}</h1>
        </div>
        <h2 className=" h-[40px] text-black/80 text-[13px] text-ellipsis overflow-hidden">
       {data?.description} 
       </h2>
      <button disabled={is_selected} onClick={()=>dispatch({type:"addToCart",payload:data})} className=" bg-blue-600 w-full disabled:bg-green-800 text-white py-1 rounded hover:bg-blue-900 font-semibold text-[16px]">
       Add to Cart
      </button>
      </div>
      
    </div>

)
}
export default Cart