import { useState } from 'react'
import homeIcon from '../../assets/icons/home-icon.gif'
import coinIcon from '../../assets/icons/coin-icon.gif'
import craftIcon from '../../assets/icons/craft-icon.gif'
import farmIcon from '../../assets/icons/farms-icon.gif'
import './NavBar.css'

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';

export const NavBar = () => {
  const [isOpen,setIsOpen] = useState(false);


  const menuOptions = [
    {
      name: 'Inicio',
      icon: homeIcon,
      url: '/home'
    },
    {
      name: 'Farmeos',
      icon: coinIcon,
      url: '/list/farm'
    },
    {
      name: 'Crafteos',
      icon: craftIcon,
      url: '/list/craft'
    },
    {
      name: 'Configuración',
      icon: farmIcon,
      url: '/config'
    }

  ]


  return (
    <section className={`fixed left-0 top-0 bg-black/50 h-full ${isOpen ? 'w-full' : 'w-14'} transition-all ease-in-out duration-500 font-roboto`}>
      <div className={`relative h-full bg-nd ${isOpen ? 'w-[80%]' : 'w-full'} transition-all ease-in-out duration-500`}>
        <ul className='relative flex flex-col gap-10 size-full py-8 overflow-hidden'>
          {menuOptions.map((option, i) => (
            <li key={i}>
              <Link
                className='flex gap-4 items-center px-2.5'
                to={option.url}
                onClick={()=>setIsOpen(false)}
              >
                <span className='text-4xl min-w-10 h-10'>
                    <img
                      className='size-full object-cover'
                      src={option.icon}
                      alt="icon"
                    />
                </span>
                <h3 className=''>
                  {option.name}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
        <button
          className={`absolute p-0.5 button z-50 cursor-pointer ${isOpen ? 'rotate-180' : 'rotate-0'}  top-1/2 -right-4 text-4xl rounded-xl duration-500 `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <MdKeyboardDoubleArrowRight />
        </button>
      </div>

    </section>
  )
}
