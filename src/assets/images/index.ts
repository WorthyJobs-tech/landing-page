// Logo imports
import reactLogo from './react.svg'
import mailthing from './mailMockup.webp'
import worthy from './Worthy-full-logo.jpg'
import smallicons from './Icons-Application01.svg'
import smallicons2 from './Icons-Application02.svg'
import smallicons3 from './Icons-Application03.svg'
import smallicons4 from './Icons-Application04.svg'
import smallicons5 from './Icons-Application05.svg'
import smallicons6 from './Icons-Application06.svg'
import smallicons7 from './Icons-Application07.svg'
import smallicons8 from './Icons-Application08.svg'
import smallicons9 from './Icons-Application09.svg'
import coldmail from './coldmailpreview.png'
import linkedin from './LinkedIn.png'
import internshala from './Internshala.png'
import naukri from './Naukri.png'
import indeed from './Indeed.png'
import angellist from './AngelList.png'
import upwork from './Upwork.png'
import glassdoor from './Glassdoor.png'
import goi from './GOI.png'
import growwithgoogle from './GrowwithGoogle.png'
import monster from './Monster.png'
import wellfound from './Wellfound.png'
import timesjobs from './TimesJobs.png'
import green from './Green.svg'
import blue from './Blue.svg'
import black from './Black.svg'
import rocketred from './RocketRed.svg'
import orange from './Orange.svg'
import code from './Code.svg'
import google from './GoogleBig.png'
import googlescroll from './Scrollablelogo08.png'
import microsoftscroll from './Scrollablelogo07.png'
import amazonscroll from './Scrollablelogo06.png'
import tatascroll from './Scrollablelogo05.png'
import razorpayscroll from './Scrollablelogo04.png'
import accenturescroll from './Scrollablelogo03.png'
import tcsscroll from './Scrollablelogo02.png'
import phonepe from './Scrollablelogo01.png'
import whiteworthy from './worthywhite.png'

// Export as an object for easy imports
export const Images = {
  logos: {
    react: reactLogo,
    worthy: worthy,
    whiteworthy: whiteworthy,
    // Add company logos here as they become available
    companies: {
      linkedin: linkedin,
      internshala: internshala,
      naukri: naukri,
      indeed: indeed,
      angellist: angellist,
      upwork: upwork,
      glassdoor: glassdoor,
      goi: goi,
      growwithgoogle: growwithgoogle,
      monster: monster,
      wellfound: wellfound,
      timesjobs: timesjobs,
      // Example structure:
      // logo1: companyLogo1,
      // logo2: companyLogo2,
      // logo3: companyLogo3,
    },
    scrollablelogos: {
      googlescroll: googlescroll,
      microsoftscroll: microsoftscroll,
      amazonscroll: amazonscroll,
      tatascroll: tatascroll,
      razorpayscroll: razorpayscroll,
      accenturescroll: accenturescroll,
      tcsscroll: tcsscroll,
      phonepe: phonepe,


    }
  },
  hero: {
    // Add hero images here as they become available
    // main: heroImage,
  },
  mockup: {
    // Add mockup images here as they become available
    // main: mockupImage,
    mailthing: mailthing,
    coldmail: coldmail,
  },
  smallicons: {
    icon1: smallicons,
    icon2: smallicons2,
    icon3: smallicons3,
    icon4: smallicons4,
    icon5: smallicons5,
    icon6: smallicons6,
    icon7: smallicons7,
    icon8: smallicons8,
    icon9: smallicons9,
  },
  bigicons: {
    green: green,
    blue: blue,
    black: black,
    code: code,
    rocketred: rocketred,
    orange: orange,
    google: google,
  }
} as const

// Type for our image object
export type ImageType = typeof Images 