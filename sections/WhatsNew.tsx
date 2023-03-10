import { motion } from 'framer-motion'

import { planetVariants, fadeIn, appear } from '../utils/motion'
import { newFeatures } from '../constants/index'

const WhatsNew = () => {
  return (
    <section className='sm:p-16 xs:p-8 px-6 py-12'>
      <motion.div
        variants={appear}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='2xl:max-w-[1280px] w-full mx-auto flex flex-col lg:flex-row gap-8'
      >
        <motion.div
          variants={fadeIn('right', 0.2, 1)}
          className='flex-[0.95] flex justify-center flex-col'
        >
          <span className='font-normal text-center text-[14px] text-secondary-white'>
            | Whats new?
          </span>
          <h2 className='text-center text-white mt-[8px] font-bold md:text-[64px] text-[40px]'>
            What&apos;s new about Metaversus?
          </h2>
          <div className='mt-[48px] flex flex-wrap justify-between gap-[24px]'>
            {newFeatures.map((feature, index) => (
              <div key={index} className='flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]'>
                <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]'>
                  <img src={feature.imgUrl} alt='icon' className='w-1/2 h-1/2 object-contain' />
                </div>
                <h1 className='mt-[26px] font-bold text-[24px] leading-[30.24px] text-white'>
                  Title {feature.title}
                </h1>
                <p className='flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]'>
                  {feature.subtitle}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants('right')}
          className='flex justify-center items-center flex-1'
        >
          <img
            src='assets/whats-new.png'
            alt='get-started'
            className='w-[90%] h-[90%] object-contain animate-[pulse_5s_infinite]'
          ></img>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default WhatsNew
