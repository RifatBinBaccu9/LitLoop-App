import Link from "next/link";
import { FaHome, FaTruck, FaCog } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdShoppingCartCheckout } from "react-icons/md";
import { HiMiniUserGroup, HiSquares2X2, HiRectangleStack } from "react-icons/hi2";
import { PiCubeTransparent } from "react-icons/pi";
const links = [
    {name: 'Home', href: '/', icon: FaHome},
    {name: 'Books', href: '/store', icon: FaBookOpenReader},
    {name: 'Sell or Lend', href: '/store/sell-lend', icon: HiRectangleStack},
    {name: 'Cart', href: '/store/cart', icon: MdShoppingCartCheckout},
    {name: 'Track Order', href: '/store/track-order', icon: FaTruck},
    {name: 'Community', href: '/store/community', icon: HiMiniUserGroup},
    {name: 'Settings', href: '/store/settings', icon: FaCog},
    {name: 'About', href: '/store/about', icon: HiSquares2X2},
    {name: 'Admin', href: '/store/admin', icon: PiCubeTransparent},
  ];

const NavLink = () => {
    
  return (
    <>
        {
        links.map((link, idx) => {
          const NavIcon=link.icon;
          return (
            <Link href={link.href} key={idx} className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-purple-600 md:flex-none md:justify-start md:p-2 md:px-3">
               <NavIcon />
                <h1>{link.name}</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque aliquid magni quam, nesciunt odit enim unde ratione, soluta nam asperiores similique numquam sed tempora quod nihil praesentium voluptatibus! Voluptatum, enim?</p>
            </Link>
          )
        })
        }
    </>
  )
}

export default NavLink