"use client"
import SideBar from "./(components)/sidebar"
import Nav from "./(components)/nav";
import { StateContextProvider } from "@/services/provider/stateProvider";

const DashboardWrapper = ({children}:{children:React.ReactNode}) => {

  return (
    <StateContextProvider>
    <main className="flex bg-gray-50 text-gray-900 w-full min-h-screen">
    <SideBar/>
    <div className="flex flex-col w-full h-full bg-gray-50">
    <Nav/>
     {children}
    </div>
   </main>
   </StateContextProvider>

  )
}
export default DashboardWrapper