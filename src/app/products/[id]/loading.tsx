import { Skeleton } from "@/components/ui/skeleton"

const Loading=()=>{
    return (
        <div className="  h-screen flex gap-x-10 justify-center items-center">
            <Skeleton className=" w-[300px] h-[60vh] "/>
            <div className=" flex flex-col gap-y-3">
            <Skeleton className=" w-[300px] h-[50px]"/>
            <Skeleton className=" w-[400px] h-[100px]"/>
            <Skeleton className=" w-[100px] h-[30px]"/>
            <Skeleton className=" w-[100px] h-[30px]"/>
            <Skeleton className=" w-full h-[40px]"/>
            <Skeleton className=" w-full h-[40px]"/>
            </div>
        </div>
    )
}
export default Loading