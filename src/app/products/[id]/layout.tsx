import { Suspense } from "react"
import Loading from "./loading"

const Layout =({children}:{children:React.ReactNode})=>{
 return <Suspense fallback={(<Loading/>)}>
    {children}
     </Suspense>
}
export default Layout