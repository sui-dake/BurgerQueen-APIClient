import React from "react";
import { motion } from "framer-motion";
import './loading.css'

const Loading = () => {
  const loader = {
    animationOne: {
      x: [-20, 20],
      y: [0, -30],
      transition: {
        x: {
          yoyo: Infinity,
          duration: 0.5,
        },
        y: {
          yoyo: Infinity,
          duration: 0.5,
        },
      },
    },
  };

  return (
    <motion.div className='loader'
      variants={loader}
      animate='animationOne'>
    </motion.div>
  );
};

export default Loading;
