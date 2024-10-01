import { CardType } from "@/app/(components)/cart";
import { getAProduct } from "@/services/api/products";
import { QueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { Button } from "@/components/ui/button"

const Page=async({ params }: { params: { id: number } })=>{
    const queryClient = new QueryClient();
    const id=params?.id
    await queryClient.prefetchQuery({queryKey:['getAProduct', id],queryFn: () =>getAProduct(id) });
    const data:CardType|undefined= queryClient.getQueryData(['getAProduct', id]);

return <div className="flex items-center gap-x-10 min-h-[80vh]  justify-center container mx-auto">
    <div className="">
    <Image width={300}  src={data?.image??""}  alt={"image"} height={300}/>
    </div>
    <div className=" w-6/12 flex flex-col gap-y-3">
        <h2 className=" text-lg font-semibold">
            {data?.title}
        </h2>
        <h2 className=" text-sm text-black/50 font-medium text-wrap">
            {data?.description}
        </h2>
        <h2 className=" text-sm font-medium capitalize">
         Category - {data?.category}
        </h2>
        <h2 className=" text-sm font-medium capitalize">
         Price - {data?.price}
        </h2>
        <h2 className=" text-sm font-medium capitalize">
          Rating - {data?.rating?.rate} / Count - {data?.rating?.count}
        </h2>
     <Button>Add to Cart</Button>
    <Button className="bg-transparent hover:bg-black/5 shadow-none border border-blue-700 outline-none text-blue-700">Add to WishList</Button>
    </div>
</div>

}
export default Page;