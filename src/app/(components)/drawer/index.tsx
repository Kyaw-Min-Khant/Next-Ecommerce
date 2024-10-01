import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { StateContextCustom } from "@/services/provider/stateProvider";
import { CardType } from "../cart";
import Drawer_Cart from "./drawer_cart";

export function DrawerMenu() {
  const {state}=StateContextCustom();
  const products=state?.cartList
  //Remove duplicates item from cart list
  const uniqueProducts = Array.from(new Set(products?.map(item => item.id)))
    .map(id => {
      return products.find(item => item.id === id);
    }).filter((item): item is CardType => item !== undefined);;
  
  //Calculate total price of selected items in cart list
  const totalPrice = React.useMemo(() => {
    return products?.reduce((pv, cv) => pv + cv.price, 0) || 0;
  }, [products,uniqueProducts]);
  const renderItems = uniqueProducts?.length ? (
    uniqueProducts.map((item: CardType) => <Drawer_Cart key={item.id} {...item} />)
  ) : (
    <h2 className="text-center text-lg py-5">Your cart is empty</h2>
  );
  return (
    <>
      <DrawerContent className=" h-screen">
          <div className="h-screen w-full justify-center items-center  overflow-scroll">
            <div className="w-5/12  mx-auto">
            <DrawerHeader>
            <DrawerTitle>Selected Item</DrawerTitle>
          </DrawerHeader>
            {renderItems}
          <div className=" flex justify-between items-center py-3">
            <h2 className="text-2xl font-medium">Total </h2>
            <h2 className="text-2xl font-medium">$ {totalPrice.toFixed(2)}</h2>
          </div>
            </div>
            </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
      </DrawerContent>
      </>
  )
}
