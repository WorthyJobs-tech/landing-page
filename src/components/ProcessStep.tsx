interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: string;
}

export const ProcessStep = ({ stepNumber, title, description, icon }: ProcessStepProps) => {
  return (
    <div className='first-box flex items-center gap-5 border-2 border-b-green border-opacity-20 rounded-[12px] p-5 md:p-8 md:gap-8'     >
      <div className='left-box flex items-center justify-center'>
        <img src={icon} alt={`Step ${stepNumber} icon`} className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]" />
      </div>
      <div className='right-box flex flex-col justify-center'>
        <div className='Header'>
          <h6 className='text-b-black text-[12px] font-regular text-left mb-[8px] tracking-wider md:text-[14px] md:mb-[10px]'>STEP {stepNumber}</h6>
          <h3 className='text-b-black text-[24px] font-bold text-left leading-[28px] md:text-[26px] md:mb-[10px]'>{title}</h3>
        </div>
        <div className='content'>
          <h6 className='text-b-gray text-[12px] text-left font-regular leading-[20px] mt-[8px] md:text-[14px] md:mt-[10px]'>{description}</h6>
        </div>
      </div>
    </div>
  );
}; 