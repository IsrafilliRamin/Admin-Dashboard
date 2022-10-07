import React from 'react'
import { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'
import {Cart , Chat, Notification , UserProfile} from './'
import { useStateContext } from '../contexts/ContextProvider'


  const NavButton = ({title,customFunc,icon,color,dotColor})=>(
    <TooltipComponent content={title} position="BottomCenter">
      <button type='button' onClick={customFunc} style={{color}} className='relative mr-5 w-5 h-5 text-xl rounded-full p-3'  >
        <span style={{background:dotColor}} className='absolute inline-flex rounded-full ml-5 h-2 w-2 right-2 top-2 text-sm '>
         
        </span>
        {icon}
      </button>
    </TooltipComponent>
  )

  /* const handleClick = (cart)=>{
    
  } */

const Navbar = () => {
  const { activeMenu , setActiveMenu, isClicked, setIsCliced, handleClick ,screenSize, setScreenSize ,currentColor} = useStateContext()
console.log(isClicked.cart);
 useEffect(()=>{
  const handleResize = ()=> setScreenSize(window.innerWidth)

  window.addEventListener('resize',handleResize)

  handleResize()

  return () => window.removeEventListener('resize',handleResize)

 },[screenSize])


 useEffect(()=>{
      if(screenSize <=900){
        setActiveMenu(false)
      }else{
        setActiveMenu(true)
      }
 },[screenSize])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative '>
      <NavButton title="Menu" customFunc={()=>setActiveMenu((prevActiveMenu)=>!prevActiveMenu)} color={currentColor} icon={<AiOutlineMenu  />} />
      <div className='flex'>
      <NavButton title="Cart" customFunc={()=>handleClick('cart')} color={currentColor} icon={<FiShoppingCart/>} />
      <NavButton title="Chat" dotColor="#03C9D7" customFunc={()=>handleClick('chat')} color={currentColor} icon={<BsChatLeft />} />
      <NavButton title="Nottication" dotColor="#03C9D7" customFunc={()=>handleClick('notfication')} color={currentColor} icon={<RiNotification3Line />} />
      <TooltipComponent content="Profile" position='BottomCenter'>
    <div className=' flex items-center cursor-pointer p-1 gap-2 hover:bg-gray-300 rounded-lg'
    onClick={()=>handleClick('userProfile')}>
      <img src={avatar} alt="avatar" className='rounded-full w-8 h-8' />
     <p>
     <span className='text-gray-400 text-14'>Hi,</span> {' '}
     <span className='text-gray-400 font-bold ml-1'>Michael</span>
     </p>
     <MdKeyboardArrowDown className='text-gray-400 text-14'/>
    </div>
      </TooltipComponent>
      {isClicked.cart && <Cart/>}
      {isClicked.chat && <Chat/>}
      {isClicked.notfication && <Notification/>}
      {isClicked.userProfile && <UserProfile/>}

      </div>
    </div>
  )
}

export default Navbar