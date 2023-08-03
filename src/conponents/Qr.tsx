import QRImg from '../assets/qr-code.svg'

const Qr = () => {
  return (
    <div className='flex flex-col items-center w-[320px] h-[497px] bg-white rounded-[20px] shadow-card p-4'>
      <div className="relative flex items-center justify-center bg-c_blue w-[288px] h-[288px] rounded-[10px] overflow-hidden">
        <img src={QRImg} alt="qr-code" className="z-10"/>
        <div className="h-[270px] w-[270px] bottom-[-186px] right-[-114px] absolute rounded-full bg-c_blue_shade"></div>
        <div className="h-[328px] w-[328px] top-[-164px] left-[-130px] absolute rounded-full bg-c_blue_shade"></div>
      </div>
      <p className="text-c_dark_navy text-[22px] text-center font-bold pt-[26px] leading-7 tracking-[-0.35px]">
        Improve your front-end skills by building projects
      </p>
      <p className="text-c_gray text-[15px] text-center pt-[14px] leading-5 px-4 tracking-[0.3px]">
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </p>
    </div>
  );
};

export default Qr;