import { useState } from "react";
import { BsArrowLeftShort, BsSearch, BsChevronDown, BsFillImageFill, BsReverseLayoutTextSidebarReverse, BsPerson } from "react-icons/bs";
import { AiFillEnvironment, AiOutlineBarChart, AiOutlineFileText, AiOutlineLogout, AiOutlineSetting, AiOutlineMail } from "react-icons/ai";
import { RiLayoutMasonryFill } from "react-icons/ri";

const App = () => {
  const [open, setOpen] = useState(true);
  const [submenuopen, setSubmenuOpen] = useState(false);
  const Menus = [
    { title: "Dashboard" },
    { title: "Pages", icon: <AiOutlineFileText/>},
    { title: "Media", spacing: true, icon: <BsFillImageFill/> },
    {
      title: "Projects",
      icon: <BsReverseLayoutTextSidebarReverse/>,
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" },
      ],
    },
    { title: "Analytics", icon: <AiOutlineBarChart/> },
    { title: "Inbox", icon: <AiOutlineMail/> },
    { title: "Profile", spacing: true, icon: <BsPerson/> },
    { title: "Setting", icon: <AiOutlineSetting/> },
    { title: "Logout", icon: <AiOutlineLogout/> },
  ];
  
  return (
    <div className="flex">
      <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
        <BsArrowLeftShort className={`bg-white text-dark-purple 
        text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple
        cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
        <div className="inline-flex">
          <AiFillEnvironment className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500
          ${open && "rotate-[360deg]"}`} />
          <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>
            Tailwind
          </h1>
        </div>

        <div className={`flex items-center rounded-md mt-6 bg-Slate ${!open ? "px-2.5" : "px-4"} px-4 py-2`}>
          <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`} />
          <input type="search" placeholder="Search" className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`} />
        </div>
        
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-Slate rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <RiLayoutMasonryFill/>}
                </span>
                <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>{menu.title}</span>
                {menu.submenu && open && (
                  <BsChevronDown className={`${submenuopen && "rotate-180"}`} onClick={() => 
                  setSubmenuOpen(!submenuopen)} />
                )}
              </li>

              {menu.submenu && submenuopen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItems, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-Slate rounded-md ">
                      {submenuItems.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>

        </div>
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home page</h1>
      </div>
    </div>
  );
};

export default App;
