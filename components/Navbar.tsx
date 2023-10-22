import Image from "next/image";
import { BiSearch } from "react-icons/bi";

export default function Navbar() {
  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl normal-case">smartShop</a>
        </div>
        <div className="flex gap-2">
          {/* <div className="form-control ">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered  w-24 md:w-auto"
            />
          </div> */}
          {/* <BiSearch size={20} className="opacity-50" /> */}

          <div className="flex items-center rounded-full bg-gray-100 p-2 max-md:hidden">
            <button>
              <BiSearch size={20} className="opacity-50" />
            </button>
            <input
              type="text"
              className="ml-2 bg-transparent text-[15px] caret-blue-500 outline-none placeholder:font-light placeholder:text-gray-600"
              placeholder="Search"
              autoComplete="false"
            />
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  src="/img/ahmed_passbild.gif"
                  alt="my avatar picture"
                  width={30}
                  height={30}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
