import { motion } from 'framer-motion'
import { fadeIn, slideIn, zoomIn } from '../utils/motion'

const Feedback = () => {
  return (
    <section className='sm:p-16 xs:p-8 px-6 py-12'>
      <motion.div
        variants={slideIn('left', 0.4, 1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='2xl:max-w-[1280px] w-full mx-auto flex flex-col lg:flex-row gap-6'
      >
        <motion.div
          variants={fadeIn('right', 0.2, 1)}
          className='flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative'
        >
          <div className='feedback-gradient' />
          <div>
            <h4 className='font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white'>
              Henry
            </h4>
            <p className='mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white'>
              Founder
            </p>
            <p className='mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white'>
              “With the development of today&apos;s technology, metaverse is very useful for
              today&apos;s work, or can be called web 3.0. by using metaverse you can use it as
              anything”
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.2, 1)}
          className='relative flex-1 flex justify-center items-center'
        >
          <img
            src='/assets/planet-09.png'
            alt='planet-09'
            className='w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]'
          />

          <motion.div
            variants={zoomIn(0.4, 1)}
            className='lg:block hidden absolute -left-[10%] top-[3%]'
          >
            <img
              src='/assets/stamp.png'
              alt='stamp'
              className='w-[155px] h-[155px] object-contain cursor-pointer animate-[spin_3s_infinite] hover:animate-none hover:scale-90'
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Feedback
