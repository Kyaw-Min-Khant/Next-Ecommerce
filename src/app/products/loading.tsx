import { Skeleton } from "@/components/ui/skeleton"

const Cart=()=>{
   return (
   <div className=" w-[250px]  rounded shadow-lg">
    <Skeleton className="mx-auto h-[180px]" />
    <div className="flex p-3 flex-col justify-between gap-y-2">
      <div className="flex justify-between items-center">
      <Skeleton className="py-2 w-[100px]"></Skeleton>
      <Skeleton className="py-2 w-[50px]"></Skeleton>
      </div>
      <Skeleton className=" h-[30px]">
     </Skeleton>
    <Skeleton className=" w-full py-4 rounded">
    </Skeleton>
    </div>
  </div>)

}

const Loading=()=>{
const skeletonCount = 12;
const skeletons = Array.from({ length: skeletonCount }, (_, index) => <Cart key={index} />);
return (
<div className="flex h-screen container mx-auto overflow-hidden justify-center gap-x-5 gap-y-10 flex-wrap items-center">
{skeletons}
</div>
    )
}
export default Loading