import Header from "../Components/header/Header"
import MainShopCard from "./shopcartfunc";



const main=()=>{
    return(
    <div className="h-screen ">

        <Header/>
        <div className="">
            <div className="flex main w-full ">
                
            </div>
            <div className="px-14 py-10 flex mb-5 justify-between">
                <h2 className="font-semibold text-2xl">Best Seller</h2>
                <span>view all</span>
            </div>
            <div className="flex px-14 justify-between">
            <MainShopCard />
            <MainShopCard />
            <MainShopCard />

            
            </div> 

        </div>
    </div>
    )

}
export default main