import { motion } from 'motion/react';
import { WhatsAppIcon } from '@/src/components/ui/WhatsAppIcon';
import { WHATSAPP_LINK } from '@/src/constants';

export const FloatingZap = () => {
  return (
    <motion.a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-2xl z-50 shadow-[#25D366]/30"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
    >
      <WhatsAppIcon size={32} weight="fill" className="relative z-10" />
      <span className="absolute top-1 right-1 w-4 h-4 bg-vh-orange border-2 border-white rounded-full"></span>
    </motion.a>
  );
};
