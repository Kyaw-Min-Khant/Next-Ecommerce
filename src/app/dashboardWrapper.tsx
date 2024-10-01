"use client"
import Nav from "./(components)/nav";
import { StateContextProvider } from "@/services/provider/stateProvider";
import {Drawer} from "@/components/ui/drawer"
import { DrawerMenu } from "./(components)/drawer";
const DashboardWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <StateContextProvider>
    <Drawer  direction="right">
    <main className="flex bg-gray-50 text-gray-900 w-full min-h-screen">
    <div className="flex flex-col  w-full h-full bg-gray-50">
    <Nav/>
    <DrawerMenu/>
     {children}
    </div>
   </main>
   </Drawer>
   </StateContextProvider>

  )
}
export default DashboardWrapper