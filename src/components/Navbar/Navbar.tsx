import React from "react";

export interface NavProps {
  label: string;
}

const navItems = [
  {
    title: "Checkpoints",
    path: "/checkpoints",
  },
  {
    title: "Nav",
    path: "/nav",
  },
  {
    title: "Test",
    path: "/test",
  },
  {
    title: "Test2",
    path: "/test2",
  },
];
//accepts arr of item objects
function Navbar(props: NavProps) {
  return (
    <div className=" flex flex-row justify-between bg-[#181B38] py-10">
      <h1 className="text-green-500">Logo</h1>
      <nav className="">
        {/* <div className="text-purple-500">Burger icon</div> */}
        <ul className="flex flex-row justify-between">
          {navItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.path} className="text-red-500 px-5">
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
