import React from 'react'

const navItems = [
    {
        title: 'Checkpoints',
        path: '/checkpoints',
    },
    {
        title: 'Nav',
        path: '/nav'
    },
    {
        title: 'Test',
        path: '/test'
    },
    {
        title: 'Test2',
        path: '/test2'
    },
]
//accepts arr of item objects
function Nav() {
  return (
    <nav>
        <h1>Logo</h1>
        <div>Burger icon</div>
        <ul>
            {navItems.map((item,index) => {
                return(
                    <li key={index}>
                        <a 
                        href={item.path}
                        className=''>
                            {item.title}
                        </a> 
                        
                    </li>
                )
            })}

        </ul>
    </nav>
  )
}

export default Nav