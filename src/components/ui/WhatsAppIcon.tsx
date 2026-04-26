import React from 'react';
import { WhatsappLogo } from '@phosphor-icons/react';

export const WhatsAppIcon = ({ size = 24, className = "", weight = "regular" }: { size?: number, className?: string, weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone" }) => (
  <WhatsappLogo size={size} className={className} weight={weight} />
);
