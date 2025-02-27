import './App.css'
import { Images } from './assets/images'
import { ProcessStep } from './components/ProcessStep'
import { TrickBox } from './components/TrickBox'

function App() {
  return (
    <div className="w-full flex flex-col md:justify-center md:items-center min-h-screen mx-auto">
      <header className="flex items-center w-full justify-between px-5 py-2.5">
        <div className="w-[172px]">
          <img 
            src={Images.logos.worthy} 
            alt="logo" 
            className="w-full h-full cursor-pointer" 
            onClick={() => window.location.reload()}
          />
        </div>
        <nav className="flex gap-4">
        </nav>
      </header>
      <div className="main-content flex flex-col px-4 mt-2 max-w-[1280px] md:justify-center">
        <div className='hero-section px-120 pt-10 pb-20 md:py-24 md:pb-36'>
          <h1 className='text-[40px] leading-[44px] font-bold mb-2 text-left md:text-[52px] md:leading-[58px] md:px-48 md:text-center'><span className='text-b-green'>Your personal placement team </span>that your college didn't have
          </h1>
          <p className='text-b-gray mb-10 text-left md:text-[20px] md:leading-[24px] md:text-center'>Get placed to the fullest of your potential in less than 60 days
          </p>
          <a
            href="https://tripetto.app/run/DE6GEOZMNI"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-b-green text-white px-4 py-[12px] text-[18px] font-medium rounded-md w-full text-center mt-[8px] flex items-center justify-center gap-2 no-underline hover:opacity-90 cursor-pointer md:w-[400px] md:justify-self-center md:rounded-full'>
            Apply for Worthy
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </a>
          <div className='flex justify-center items-center font-bold'>
            <h6 className='text-b-gray text-b-black font-bold text-[16px] pt-[8px]'>1220+ <span className='font-normal'>waitlist users</span></h6>
          </div>
        </div>
        <div className='logo-screen'>
          <h5 className='text-b-black text-[20px] font-regular'>We have placed <span className='font-medium text-b-green'>100+ people </span> in</h5>
          <div className='scrollbar'>
            <div className='brand-logo-box my-6'>
              {/* First set of logos */}
              {Object.entries(Images.logos.scrollablelogos).map(([company, logo], index) => (
                <img
                  key={`first-${index}`}
                  src={logo}
                  alt={`${company} logo`}
                  className="flex-shrink-0 h-[35px]"
                />
              ))}
              {/* Duplicate set for seamless scrolling */}
              {Object.entries(Images.logos.scrollablelogos).map(([company, logo], index) => (
                <img
                  key={`second-${index}`}
                  src={logo}
                  alt={`${company} logo`}
                  className="flex-shrink-0 h-[35px]"
                />
              ))}
            </div>
          </div>
          <div className='Process'>
            <div className='Process-heading py-10 pt-20'>
              <h3 className='text-b-black text-[28px] leading-[32px] font-bold p-[16px] md:text-[36px] md:leading-[38px] md:px-48 md:text-center'>Get your <span className='text-b-green'>highest job package </span> in 6 steps</h3>
              <h6 className='text-b-gray text-[16px] leading-[20px] font-regular md:text-[18px] md:leading-[22px]'>We follow a 6 step process to land you interview calls in less than 60 days</h6>
            </div>

            <div className='Process-steps flex flex-col gap-3 md:w-[80%] md:mx-auto'>
              <div className='Process-first-two flex flex-col gap-3 md:flex-row md:gap-3'>
                <ProcessStep stepNumber={1}
                  title="Introductory Phone Call"
                  description="Analyse your Job Profile, Build your Portfolio, Apply using the best techniques"
                  icon={Images.bigicons.green} />

                <ProcessStep stepNumber={2}
                  title="Getting the requirements right"
                  description="Analyse your Job Profile, Build your Portfolio, Apply using the best techniques"
                  icon={Images.bigicons.blue} />
              </div>

              <div className='Process-second-two flex flex-col gap-3 md:flex-row md:gap-3'>
                <ProcessStep stepNumber={3}
                  title="Building Industry ready resume"
                  description="Analyse your Job Profile, Build your Portfolio, Apply using the best techniques"
                  icon={Images.bigicons.black} />

                <ProcessStep stepNumber={4}
                  title="Building your Portfolio Website"
                  description="Analyse your Job Profile, Build your Portfolio, Apply using the best techniques"
                  icon={Images.bigicons.code} />
              </div>

              <div className='Process-third-two flex flex-col gap-3 md:flex-row md:gap-3'>
                <ProcessStep stepNumber={5}
                  title="360° Applying to companies"
                  description="Analyse your Job Profile, Build your Portfolio, Apply using the best techniques"
                  icon={Images.bigicons.rocketred} />

                <ProcessStep stepNumber={6}
                  title="Interviews and Preparation"
                  description="Analyse your Job Profile, Build your Portfolio, Apply using the best techniques"
                  icon={Images.bigicons.orange} />
              </div>


            </div>
          </div>
          <div className='Apply-section'>
            <div className='Process-heading py-10 pt-20'>
              <h3 className='text-b-black text-[28px] leading-[32px] font-bold p-[16px] md:text-[36px] md:leading-[38px] md:px-48 md:text-center'>We apply in <span className='text-b-green'>every way possible</span></h3>
              <h6 className='text-b-gray text-[16px] leading-[20px] font-regular md:text-[18px] md:leading-[22px]'>Using the best techniques and tools, we apply in every way possible</h6>
            </div>

            <div className='All-boxes flex flex-col gap-4 mdL'>

              <div className='Top-boxes flex flex-col gap-4 md:flex-row md:w-[80%] md:mx-auto md:h-fit'>
                <div className='Trick-section py-10 px-4 bg-[#2e3438] rounded-[12px] w-full md:w-1/2 md:flex-1'>
                  <div className='Trick-section-heading px-2'>
                    <h3 className='text-[#fff] text-[24px] leading-[28px] mb-2 font-medium'>We use every trick in the book</h3>
                    <h6 className='text-[#fff] text-[16px] leading-[20px] font-regular opacity-70'>We give you the edge you deserve</h6>
                  </div>
                  <div className='Trick-Imager-Grid pt-6 flex flex-col gap-2'>
                    <div className='grid grid-cols-2 gap-2'>
                      <TrickBox icon={Images.smallicons.icon9} text="Referrals" backgroundColor="#202020" textColor="#ffffff" />
                      <TrickBox icon={Images.smallicons.icon6} text="Mailing" backgroundColor="#264f9a" textColor="#ffffff" />
                    </div>
                    <TrickBox icon={Images.smallicons.icon3} text="Staffing Agencies" backgroundColor="#ac3e4c" textColor="#ffffff" />
                    <div className='grid grid-cols-2 gap-2'>
                      <TrickBox icon={Images.smallicons.icon2} text="Linkedin" backgroundColor="#0076b2" textColor="#ffffff" />
                      <TrickBox icon={Images.smallicons.icon1} text="Twitter" backgroundColor="#fff" textColor="#202020" />
                    </div>
                    <TrickBox icon={Images.smallicons.icon5} text="Company Websites" backgroundColor="#ca5353" textColor="#ffffff" />
                    <div className='grid grid-cols-2 gap-2'>
                      <TrickBox icon={Images.smallicons.icon8} text="Cold Calls" backgroundColor="#16674e" textColor="#ffffff" />
                      <TrickBox icon={Images.smallicons.icon7} text="Portals" backgroundColor="#bb3265" textColor="#ffffff" />
                    </div>
                    <TrickBox icon={Images.smallicons.icon4} text="Mass Recruiters" backgroundColor="#c07448" textColor="#ffffff" />
                  </div>
                </div>

                <div className='Job-Platforms bg-[#fff] rounded-[12px] px-6 pt-10 shadow-2xl shadow-black/30 w-full md:w-1/2 md:h-1/1 flex flex-col '>
                  <div className='Trick-section-heading'>
                    <h3 className='text-b-black text-[24px] leading-[28px] mb-2 font-medium'>We apply to  all job platforms</h3>
                    <h6 className='text-b-black text-[16px] leading-[20px] font-regular opacity-70'>Making sure you get the best oppurtunities</h6>
                  </div>
                  <div className='platforms flex flex-col gap-4 mt-[16px] flex-1 md:justify-center md:px-3'>
                    <div className='grid grid-cols-3 gap-2'>
                      <img src={Images.logos.companies.naukri} alt="Email mockup" className="w-full h-full object-contain rounded-[12px]" />
                      <img src={Images.logos.companies.internshala} alt="Email mockup" className="w-full h-full object-contain rounded-[12px]" />
                      <img src={Images.logos.companies.upwork} alt="Email mockup" className="w-full h-full object-contain rounded-[12px]" />
                    </div>
                    <div className='grid grid-cols-3 gap-2'>
                      <img src={Images.logos.companies.indeed} alt="Email mockup" className="w-full h-full object-contain rounded-[12px]" />
                      <img src={Images.logos.companies.linkedin} alt="Email mockup" className="w-full h-full object-contain rounded-[12px]" />
                      <img src={Images.logos.companies.glassdoor} alt="Email mockup" className="w-full h-full object-contain rounded-[12px]" />
                    </div>
                    <div className='grid grid-cols-3 gap-2 mx-2'>
                      <img src={Images.logos.companies.monster} alt="Email mockup" className="w-full h-full object-contain rounded-[12px]" />
                      <img src={Images.logos.companies.wellfound} alt="Email mockup" className="w-full h-full object-contain rounded-[12px]" />
                      <img src={Images.logos.companies.timesjobs} alt="Email mockup" className="w-full h-full object-contain rounded-[12px]" />
                    </div>
                    <div className='grid grid-cols-10 gap-2 mb-14 h-[20px] self-center'>
                      <img src={Images.logos.companies.angellist} alt="Email mockup" className="col-span-4 w-full h-full object-contain rounded-[12px]" />
                      <img src={Images.logos.companies.growwithgoogle} alt="Email mockup" className="col-span-6 w-full h-full object-contain rounded-[12px]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className='bottom-boxes flex flex-col gap-4 md:flex-row md:w-[80%] md:mx-auto md:overflow-hidden md:h-[380px]'>
                <div className='Cold-email bg-[#f1e7e1] rounded-[12px] border border-[#ebe5e5]'>
                  <div className='Trick-section-heading px-4 pt-10'>
                    <h3 className='text-b-black text-[24px] leading-[28px] mb-2 font-medium'>We cold email to your favourite jobs</h3>
                    <h6 className='text-b-black text-[16px] leading-[20px] font-regular opacity-70'>Building oppportunties out of every job</h6>
                  </div>
                  <img src={Images.mockup.coldmail} alt="Email mockup" className="w-full h-full object-contain rounded-b-[12px] md:h-fit" />
                </div>

                <div className='Job-Platforms bg-[#403939] rounded-[12px] px-4 pt-10 h-[400px] overflow-y-hidden'>
                  <div className='Trick-section-heading'>
                    <h3 className='text-[#fff] text-[24px] leading-[28px] mb-2 font-regular'>Get weekly interviews and offers</h3>
                    <h6 className='text-[#fff] text-[16px] leading-[20px] font-regular opacity-70'>We give you the edge you deserve</h6>
                  </div>
                  <div className='Job-cards py-10 flex flex-col gap-4'>
                    <div className='Job-card-one flex flex-row gap-4 px-3 py-3 bg-[#fff] rounded-[12px] w-full justify-between'>
                      <div className='Job-card-one-left py-4 pl-4'>
                        <h5 className='text-b-black text-[20px] leading-[22px] mb-2 font-bold text-left'>Interview up for Google</h5>
                        <h6 className='text-b-black text-[12px] font-regular text-left mb-[8px] tracking-wider'>SEPTEMBER 1, 2024</h6>
                        <h6 className='text-b-gray text-[12px] text-left font-regular leading-[14px] mt-[8px]'>Please find the preparation notes attached</h6>
                      </div>
                      <div className='Job-card-one-right bg-[#d9e9ff] rounded-[12px] w-[200px] flex items-center justify-center'>
                        <img src={Images.bigicons.google} alt="Email mockup" className="w-[48px] h-[48px] object-contain rounded-[12px]" />
                      </div>
                    </div>

                    <div className='Job-card-one flex flex-row gap-4 px-3 py-3 bg-[#fff] rounded-[12px] w-full justify-between'>
                      <div className='Job-card-one-left py-4 pl-4'>
                        <h5 className='text-b-black text-[20px] leading-[22px] mb-2 font-bold text-left'>Interview up for Google</h5>
                        <h6 className='text-b-black text-[12px] font-regular text-left mb-[8px] tracking-wider'>SEPTEMBER 1, 2024</h6>
                        <h6 className='text-b-gray text-[12px] text-left font-regular leading-[14px] mt-[8px]'>Please find the preparation notes attached</h6>
                      </div>
                      <div className='Job-card-one-right bg-[#d9e9ff] rounded-[12px] w-[200px] flex items-center justify-center'>
                        <img src={Images.bigicons.google} alt="Email mockup" className="w-[48px] h-[48px] object-contain rounded-[12px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className='bottom-hero-section px-120 pt-28 pb-20'>
            <div className='logo-container flex flex-col w-full  mb-12 md:justify-center md:items-center'>
              <img src={Images.logos.worthy} alt="Email mockup" className="w-[180px] object-contain rounded-[12px] md:justify-self-center" />
            </div>
            <h1 className='text-[36px] leading-[40px] font-bold mb-3 text-left md:text-[52px] md:leading-[58px] md:px-48 md:text-center'>Apply for the <span className='text-b-green'>Best Placement Team </span>in the country
            </h1>
            <p className='text-b-gray mb-10 text-left md:text-[20px] md:leading-[24px] md:text-center'>Get placed to the fullest of your potential in less than 60 days
            </p>
            <a
              href="https://tripetto.app/run/DE6GEOZMNI"
              target="_blank"
              rel="noopener noreferrer"
              className='bg-b-green text-white px-4 py-[12px] text-[18px] rounded-md w-full text-center mt-[16px] flex items-center justify-center gap-2 no-underline hover:opacity-90 cursor-pointer md:w-[400px] md:justify-self-center md:rounded-full'>
              Apply for Worthy
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </a>
            <div className='flex justify-center items-center font-bold'>
              <h6 className='text-b-gray text-b-black font-bold text-[16px] pt-[8px] mb-12'>1220+ <span className='font-normal'>waitlist users</span></h6>
            </div>
          </div>
        </div>
      </div>
      <footer className='bg-[#292929] text-white py-10 px-120 w-full'>
        <div className='flex flex-col justify-between px-10'>
          <div className='left-footer'>
            <div className=''>
              <img src={Images.logos.whiteworthy} alt="Email mockup" className="w-[172px] object-contain rounded-[12px] " />
            </div>
            <div className='right-footer flex flex-col gap-6 mt-10 mb-10'>
              <div className='block-it'>
                <h6 className='text-[#fff] text-[10px] font-regular text-left tracking-wider opacity-60'>CONTACT US</h6>
                <h3 className='text-[#fff] text-[16px] font-regular text-left leading-[28px]'>Apply@worthyjobs.in</h3>
              </div>
              <div className='block-it'>
                <h6 className='text-[#fff] text-[10px] font-regular text-left tracking-wider opacity-60'>REGISTERED BY</h6>
                <h3 className='text-[#fff] text-[16px] font-regular text-left leading-[28px]'>Supabrain AI Private Limited</h3>
              </div>
              <div className='block-it'>
                <h6 className='text-[#fff] text-[10px] font-regular text-left tracking-wider opacity-60'>COPYRIGHT © 2025 WORTHYJOBS.IN</h6>
                <h3 className='text-[#fff] text-[16px] font-regular text-left leading-[28px]'>All rights reserved 2025</h3>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
