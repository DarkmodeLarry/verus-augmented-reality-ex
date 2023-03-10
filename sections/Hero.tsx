import { motion } from 'framer-motion'
import Link from 'next/link'
import { slideIn, textVariant } from '../utils/motion'

const Hero = () => {
  const isMobile = window.innerWidth < 768

  return (
    <section className='py-12 xs:py-8 sm:py-16 pl-6 sm:pl-16'>
      <motion.div
        variants={slideIn('right', 0.4, 1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='flex flex-col w-full 2xl:max-w-[1280px] mx-auto'
      >
        <div className='relative flex flex-col justify-center items-center'>
          <motion.h1
            variants={textVariant(1.1)}
            className='font-bold text-[66px] sm:text-[72px] md:text-[100px] lg:text-[144px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white'
          >
            Metaverse
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className='flex flex-row justify-center items-center z-20'
          >
            <h1 className='font-bold text-[66px] sm:text-[72px] md:text-[100px] lg:text-[144px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white'>
              Ma
            </h1>
            <motion.div
              variants={{
                hidden: {
                  width: 30
                },
                show: {
                  width: isMobile ? 92 : 244,
                  transition: {
                    duration: 2,
                    delay: 0.8
                  }
                }
              }}
              className='w-[92px] md:w-[212px] lg:w-[244px] h-[52px] sm:h-[56px] md:h-[82px] lg:h-[118px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]'
            />
            <h1 className='font-bold text-[66px] sm:text-[72px] md:text-[100px] lg:text-[144px] lg:text-[144px]lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white'>
              Ness
            </h1>
          </motion.div>
        </div>

        <div className='relative w-full md:-mt-[20px] -mt-[12px]'>
          <div className='absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[20px]' />
          <img
            src='assets/cover.png'
            alt='hero_cover'
            className='w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative'
          />
          <div className='w-full flex justify-end sm:-mt-[70px] -mt-[50px] relative z-10'>
            <Link href='#explore' className='mr-10'>
              <img
                src='assets/stamp.png'
                alt='stamp'
                className='sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain animate-[spin_3s_infinite] hover:animate-none hover:scale-90'
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
