import Image from "next/image";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";



function Header() {
    const [session] = useSession()
    const router = useRouter();
    const items = useSelector(selectItems)

    return (
        <div>
            {/* Top Nav */}
            <div className="flex items-center  bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                        onClick={() => router.push("/")}
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                        alt="logo"
                    />
                </div>

                {/* Search */}
                <div className="hidden rounded-md flex-grow bg-yellow-400 
                items-center h-10 cursor-pointer
                sm:flex
                hover:bg-yellow-500">
                    <input
                        type="text"
                        className="p-2 h-full w-6 flex-grow 
                    flex-shrink rounded-l-md px-4
                    focus:outline-none"
                    />
                    <SearchIcon className="h-12 p-4" />
                </div>

                {/* Right */}

                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div onClick={!session ? signIn : signOut} className="link cursor-pointer">
                        <p className="hover:underline">
                            {session ? `Hello ${session.user.name}` : "Sign In"}
                        </p>
                        <p className="font-extrabold 
                        md:text-sm">
                            Axxxount & Lists
                        </p>
                    </div>

                    <div className="link cursor-pointer">
                        <p>Returns</p>
                        <p className="font-extrabold 
                        md:text-sm">
                            Orders
                        </p>
                    </div>

                    <div onClick={() => router.push("/checkout")} className="relative flex items-center link">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black">
                            {items.length}
                        </span>

                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline mt-2 font-extrabold 
                        md:text-sm">
                            Basket
                        </p>
                    </div>
                </div>
            </div>


            {/* Bottom nav */}

            <div className="flex space-x-3 p-2 pl-6  bg-amazon_blue-light items-center  text-white text-sm">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-1" />
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Todays Deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Gracery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopping Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
            </div>







        </div>
    )
}

export default Header
