import Link from 'next/link';
import { TbLogout2 } from "react-icons/tb";
import Logo from './Logo';
import NavLink from './NavLink';

const Sidebar = () => {
  return(
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-purple-600 p-4 md:h-30"
        href="/store"
      >
        <div className="w-32 text-white md:w-40">
          <Logo />
        </div>
      </Link>
      <div className="flex flex-wrap gap-2 justify-center md:grow flex-row md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLink />
        <form>
          <button className="flex h-[48px] grow items-center justify-center gap-1 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-purple-600 md:flex-none md:justify-start md:px-3">
            <TbLogout2 className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
        </div>
    </div>
  )
}

export default Sidebar;