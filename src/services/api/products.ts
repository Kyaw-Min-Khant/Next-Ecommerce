import BASE_URL from "./base_url";

export const getAllProducts = async () => {
    const response = await BASE_URL.get('products');
    return response.data;
  };
export const getAProduct=async(id:number)=>{
  const response=await BASE_URL.get(`products/${id}`)
  return response.data
}