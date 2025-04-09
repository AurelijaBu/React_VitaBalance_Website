import './Modal.css';
import {motion, AnimatePresence} from 'framer-motion'

function Modal({show, onClose, children}) {
  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          className='modalOverlay'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          <motion.div 
            className='modal'
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.3 } }}
            exit={{ scale: 0, transition: { duration: 0.3 } }}
          >
            <motion.button className='closeButton' onClick={onClose}>X</motion.button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;