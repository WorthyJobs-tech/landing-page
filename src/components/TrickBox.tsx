import React from 'react';

interface TrickBoxProps {
  icon: string;
  text: string;
  backgroundColor?: string;
  textColor?: string;
}

export const TrickBox: React.FC<TrickBoxProps> = ({ 
  icon, 
  text, 
  backgroundColor = '#3e4448',
  textColor = '#ffffff'
}) => {
  return (
    <div className={`flex flex-row gap-2 rounded-[200px] py-3 px-2 items-center justify-center md:px-4`} style={{ backgroundColor }}>
      <img src={icon} alt={`${text} icon`} className="w-[24px]" />
      <h5 className={`text-[18px] leading-[20px] font-medium whitespace-nowrap items-center justify-center`} style={{ color: textColor }}>{text}</h5>
    </div>
  );
}; 