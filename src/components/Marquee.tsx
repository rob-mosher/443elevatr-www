import clsx from 'clsx'
import { motion, type Variants } from 'motion/react'
import React from 'react'

type MarqueeProps = {
  isLeftToRight?: boolean;
  text: string;
  speedMultiplier?: number;
};

export default function Marquee({ isLeftToRight = true, speedMultiplier = 1, text }: MarqueeProps) {
  // TODO dynamically take size of below array and x.duration into account
  const baseMarqueeSpeed = 4500 // Base speed of the marquee scroll

  const marqueeVariants: Variants = {
    animate: {
      x: [0, baseMarqueeSpeed * (isLeftToRight ? -1 : 1) * speedMultiplier],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30, // in seconds
          ease: 'linear',
        },
      },
    },
  }

  const fadeInVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 6.4, // in seconds
        delay: 4.8, // in seconds
      },
    },
  }

  return (
    <motion.div
      className={clsx(
        'flex w-full overflow-hidden whitespace-nowrap bg-yellow-300/65 py-2 text-lg uppercase text-black shadow-inner sm:text-2xl',
        isLeftToRight ? 'justify-start' : 'justify-end',
      )}
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="inline-block space-x-4"
        variants={marqueeVariants}
        animate="animate"
      >
        {Array(100).fill(`${text} `).map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={index}>
            {item}
          </span>
        ))}
      </motion.div>
    </motion.div>
  )
}
