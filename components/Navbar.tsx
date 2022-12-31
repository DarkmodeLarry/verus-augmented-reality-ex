import { motion } from 'framer-motion'
import Image from 'next/image'

const Navbar = () => {
  const scaleHover = 'cursor-pointer hover:scale-105 transition-all ease-linear duration-150'

  return (
    <nav className='relative py-8 px-6 sm:px-16'>
      <div className='flex justify-between w-full 2xl:max-w-[1280px] mx-auto gap-8'>
        <Image
          src='/assets/search.svg'
          alt='search'
          width={24}
          height={24}
          className='object-contain'
        />
        <h2 className='font-extrabold text-[24px] leading-8 text-white'>METAVERSE</h2>
        <Image
          src='/assets/menu.svg'
          alt='menu'
          width={24}
          height={24}
          className={`object-contain ${scaleHover}`}
        />
      </div>
      .absolute
    </nav>
  )
}
export default Navbar
