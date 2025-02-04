import { Image, PencilRuler, Shield } from "lucide-react";
import { useState } from "react";

const SideNav = ({ selectedIndex }) => {
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: Image,
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="border shadow-sm h-screen w-64 bg-gray-100 border-r">
      <div>
        {menuList.map((menu, index) => (
          <div key={menu.id}> 
            <h2
              onClick={() => {
                setActiveIndex(index);
                selectedIndex(index);
              }}
              className={`p-3 text-lg my-2 px-7 text-gray-500 cursor-pointer hover:bg-purple-400 hover:text-white flex items-center gap-2
              ${activeIndex === index && "bg-purple-400 text-white"}`}
            >
              <menu.icon className="w-5 h-5" />
              {menu.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
