import BASE_URL from "./base_url"
interface propType{
    username:string,
    password:string
}
export const login=async(data:propType)=>{
   const response=await BASE_URL.post('auth/login',data)
   return response
}