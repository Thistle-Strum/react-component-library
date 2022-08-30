import React,{useState} from "react";

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
export const Navbar = (props: NavProps) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <nav className='py-10 px-10 bg-[#181B38]'>
      <div className='flex flex-col lg:flex-row lg:justify-between'>
        <div className='flex flex-row justify-between'>
          <h1 className='m-0 text-green-500'>Logo</h1>
          <div className= 'lg:hidden' onClick={()=> setIsOpened(!isOpened)} >
            {isOpened?  
              <svg fill='white' xmlns='http://www.w3.org/2000/svg' role='img' width='1.5em' height='1.5em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 100 100'><path d='M84.707 68.752L65.951 49.998l18.75-18.752a1.989 1.989 0 0 0 0-2.813L71.566 15.295a1.99 1.99 0 0 0-2.814 0L49.999 34.047l-18.75-18.752c-.746-.747-2.067-.747-2.814 0L15.297 28.431a1.992 1.992 0 0 0 0 2.814L34.05 49.998L15.294 68.753a1.993 1.993 0 0 0 0 2.814L28.43 84.704a1.988 1.988 0 0 0 2.814 0l18.755-18.755l18.756 18.754c.389.388.896.583 1.407.583s1.019-.195 1.408-.583l13.138-13.137a1.99 1.99 0 0 0-.001-2.814z' fill='white'/></svg>
              :<svg  fill='white' viewBox='0 0 100 80' width='20' height='20'><rect width='100' height='20'></rect><rect y='30' width='100' height='20'></rect><rect y='60' width='100' height='20'></rect>
              </svg>
            }
          </div>
        </div>
        <div onClick={()=> setIsOpened(!isOpened)}  className={`lg:flex lg:space-x-12 lg:flex-row lg:text-end lg:w-auto lg:p-0 ${isOpened? 'flex flex-col mt-10 lg:mt-0' : 'hidden' }`}>
          {navItems.map((item, index) => {
            return (
              <a href={item.path} className='text-red-500 py-3 lg:py-0'>
                {item.title}
              </a>
            );
          })}
          </div>
      </div>
    </nav>
  );
}

export default Navbar;



