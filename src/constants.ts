import Braga from "./Assets/Images/Portfolio/braga.webp";
import Divesea from "./Assets/Images/Portfolio/divesea.webp";
import Amishav from "./Assets/Images/Portfolio/amishav.webp";

import Sportapp from './Assets/Videos/sportapp-iphone-16.mp4';
import SportappPoster from './Assets/Images/poster-sport.png';
import AmishavVideo from './Assets/Videos/amishav-iphone-16.mp4';
// import AmishavIcon from './Assets/Images/Portfolio/logos/amishav.png'
import AmishavIcon from './Assets/Images/Portfolio/logos/intel.svg'
import AmishavPoster from './Assets/Images/poster-amishav.png';

import IntelMobile11 from './Assets/Images/Portfolio/amishav-mobile-screenshots/profile-1.png'
import IntelMobile12 from './Assets/Images/Portfolio/amishav-mobile-screenshots/profile-2.png'
import IntelMobile13 from './Assets/Images/Portfolio/amishav-mobile-screenshots/profile-3.png'
import IntelMobile21 from './Assets/Images/Portfolio/amishav-mobile-screenshots/protocols.png'
import IntelMobile22 from './Assets/Images/Portfolio/amishav-mobile-screenshots/protocols-1.png'
import IntelMobile3 from './Assets/Images/Portfolio/amishav-mobile-screenshots/salary.png'
import IntelMobile4 from './Assets/Images/Portfolio/amishav-mobile-screenshots/availability.png'
import IntelMobile51 from './Assets/Images/Portfolio/amishav-mobile-screenshots/schedule-1.png'
import IntelMobile52 from './Assets/Images/Portfolio/amishav-mobile-screenshots/schedule-2.png'
import IntelMobile53 from './Assets/Images/Portfolio/amishav-mobile-screenshots/schedule-3.png'

import { ReactComponent as Firebase } from "./Assets/Images/icons/firebase.svg"
import { ReactComponent as ReactIcon } from "./Assets/Images/icons/react.svg"
import { ReactComponent as Redux } from "./Assets/Images/icons/redux.svg"
import { ReactComponent as Sass } from "./Assets/Images/icons/sass.svg"
import { ReactComponent as HTML } from "./Assets/Images/icons/html.svg"
import { ReactComponent as Less } from "./Assets/Images/icons/less.svg"
import { ReactComponent as CSS } from "./Assets/Images/icons/css.svg"
import { ReactComponent as JS } from "./Assets/Images/icons/js.svg"
import { ReactComponent as TS } from "./Assets/Images/icons/ts.svg"

// import { SiIntel as AmishavIcon } from "react-icons/si";

import { ReactComponent as DiveseaIcon } from "./Assets/Images/Portfolio/logos/divesea.svg";
import { ReactComponent as BragaIcon } from "./Assets/Images/Portfolio/logos/braga.svg";

export enum AppRoute {
  Root = "/portfolio",
}

export enum HeroItemSizes {
  Active = 392,
  ActiveMobile = 210,
  Inactive = 318,
  InactiveMobile = 170,
}

export enum ScreenSizes {
  MobileOnly = 430,
  Mobile = 480,
  Tablet = 768,
  Desktop = 1280,
  ContainerMaxWidth = 1440
}

export enum WalletPositions {
  Closed = 1500,
  Opened = 0,
  OpenedMobile = 122,
}

export const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export enum Colors {
  DarkBackground = '#0B0F14',
  LightBackground = '#E5E7EB',
  CardBackground = '#121826',
  ContainerBackground = '#1E2533',
  Primary = '#4F7DFF',
  Secondary = '#22D3EE',
  Text = '#14161c',
  TextSecondary = '#9CA3AF',
  Border = '#1F2937',
}

export const technologiesIcons: Record<string, React.ComponentType<any>> = {
  'React': ReactIcon,
  'TypeScript': TS,
  'Redux': Redux,
  'SASS(CSS)': Sass,
  'Less(CSS)': Less,
  'HTML': HTML,
  'JavaScript': JS,
  'CSS': CSS,
  'Firebase': Firebase
};

export const IntelMobileImages = [
  IntelMobile11,
  IntelMobile12,
  IntelMobile13,
  IntelMobile21,
  IntelMobile22,
  IntelMobile3,
  IntelMobile4,
  IntelMobile51,
  IntelMobile52,
  IntelMobile53
]

export const IntelScreensDescription = {
  profile: "A personal control center where employees can view and update their vital documents, track mandatory training certifications (like weapon handling, medical response, and legal rights), and manage their schedules. This is where they instantly see incoming shift swap or giveaway requests sent to them by co.workers—allowing them to accept or reject requests right from their dashboard before the change is forwarded to management",
  protocols: "In a high-stakes facility like Intel Haifa, there is zero room for hesitation during a crisis, and I certainly don't want to be waking up at 3 AM to explain emergency procedures over the phone. This screen functions as a digital tactical handbook for the field team. It stores fully indexed, rapidly searchable security, emergency and medical protocols. If an alarm sounds, the team has instant, offline-capable access to custom instructions without needing to consult a physical binder or track down a supervisor.",
  salary: "The ultimate tool for preventing payroll disputes and saving me from auditing messy hours spreadsheets at the end of the month. This interface gives the team absolute transparency over their logged hours, weekend premiums, and estimated monthly earnings based on their completed shifts. By putting the math straight into the workers hands, it eliminates manual tracking friction and ensures payroll data remains perfectly synchronized with zero backend effort.",
  availability: "This is the exact screen that solved my biggest scheduling headache. I used to chase down dozens of employees every single week via WhatsApp to find out when they were free to work. Now, the team opens this screen, taps their available time slots for the upcoming weeks, and submits them straight to the system. The mobile client structures the data cleanly before sending it to the database, allowing the desktop admin manager to populate the weekly schedule in seconds.",
  schedule: "The heart of the entire mobile application. This screen completely replaces old-fashioned printed calendar sheets on the control room wall. Employees can view the active weekly roster, track exactly who is assigned to specific shift, and jump directly into an interactive monthly calendar module. It keeps the entire team unified on exactly who is on duty at any given second, updating in real-time the moment a change is made from the desktop management panel.",
}

export const MOBILE_PROJECTS = [
    {
      id: 'intel-mobile',
      title: "Intel Security",
      themeColor: "#72b4ee",
      src: AmishavVideo,
      poster: AmishavPoster,
      icon: AmishavIcon,
      path: '',
      description: [
        "When I took over managing operations for Intel’s Haifa security and emergency control center, I immediately faced a logistical nightmare: building manual team schedules, tracking live shifts, and chasing down field updates. I quickly realized I was far too lazy to spend hours on spreadsheets every week—so I did what any engineer would do. I spent months building an ecosystem to completely automate my own managerial headaches away.",
        "The result is a two-part mission-critical system. For the desk, a comprehensive desktop Admin Panel that takes the pain out of resource management. For the personnel on the ground, a custom React Native Mobile Application that gives field teams absolutely everything they need to handle live security risks, manage their own shifts, and communicate in real time.",
        "Because a critical environment under stress requires zero friction, I skipped generic templates entirely and designed a fully bespoke UI from scratch. I even leveraged advanced AI tools to polish and supercharge the application's visual skin, ensuring that while the manager (me) gets to be lazy, the field teams get an elite, high-performance toolkit that handles the heavy lifting for them."
      ],
      technologies: ["React", "TypeScript", "SASS(CSS)", "Firebase", "Redux", ],
    },

    // {
    //   id: 'unifier',
    //   title: "Unifier",
    //   themeColor: "#fe5622",
    //   src: Sportapp,
    //   poster: SportappPoster,
    //   icon: UnifierIcon,
    //   description: '',
    //   technologies: ["React", "TypeScript", "SASS(CSS)", "Firebase", "Redux", ],
    // },
  ]

export const WEB_PROJECTS = [
  {
    id: "braga",
    title: "Braga",
    path: "https://alex-gorodov.github.io/braga",
    description: [
      "When I'm not writing code, I am brewing craft beer. To bridge the gap between my two favorite worlds, I decided to build Braga—a fully realized digital platform for a premium, high-end microbrewery. Rather than building a generic landing page, I treated this project as an aggressive exploration of brand identity, immersive atmosphere, and high-fidelity front-end engineering.",
      "Built with React and TypeScript, the application focuses heavily on sensory UI/UX. I engineered custom layout components, fluid transitions, and a dark, moody visual hierarchy using SASS to match the rich, artisanal nature of craft brewing. Under the hood, Redux manages a responsive product routing experience, ensuring smooth state transitions as users navigate through seasonal tap lists, ingredient breakdowns, and merchandise catalogs.",
      "This platform served as a perfect playground to master modern layouts, asset optimization, and complex typography scaling without layout shifts. It is an intersection of passion and performance—proving that even a passion project deserves production-grade architecture, pixel-perfect responsiveness, and an elite user experience."
    ],
    src: Braga,
    poster: '',
    icon: BragaIcon,
    technologies: ["React", "TypeScript", "SASS(CSS)", "Firebase", "Redux", "HTML"],
  },
  {
    id: "divesea",
    title: "DiveSea",
    path: "https://alex-gorodov.github.io/divesea",
    description: [
      "To keep my front-end execution razor-sharp, I regularly stress-test my skills by translating complex, premium public Figma designs into living code. DiveSea is an advanced, high-fidelity implementation of a modern NFT and digital asset marketplace concept, built entirely from scratch with zero component libraries or styling shortcuts.",
      "The primary challenge of this project was bridging the gap between absolute static design and fluid, real-world responsiveness. Using React and TypeScript, I engineered a highly structured semantic layout that adapts beautifully across fluid desktop screens and mobile viewports. I leveraged SASS to implement a sleek glassmorphism visual theme, custom vector filters, interactive hover states, and micro-animations that breathe life into the original static artwork.",
      "Behind the scenes, Redux handles the marketplace state architecture, while Firebase integration provides data persistence hooks. This project served as an elite playground for pixel-perfect layout precision, complex CSS grid structures, and strict asset optimization—proving my capability to transform sophisticated UI concepts into production-ready front-end code bases."
    ],
    src: Divesea,
    poster: '',
    icon: DiveseaIcon,
    technologies: ["React", "TypeScript", "SASS(CSS)", "Firebase", "Redux", "HTML"],
    layout: 'https://www.figma.com/design/LZGy0Wp1cngiLMqozMjimw/DiveSea?m=auto&t=VnvfzQYBZzWut2kZ-6'
  },
  {
    id: "amishav",
    title: "Intel Security Team",
    path: "https://alex-gorodov.github.io/amishav-intel-haifa-admin",
    description: [
      "When it came to the management side of the ecosystem, I knew the mobile app for the field was only half the battle. To truly automate my managerial headaches, I needed a centralized brain that could process field telemetry and handle high-level coordination with zero administrative overhead. So, I engineered the Desktop Admin Panel — a comprehensive operations dashboard designed specifically for the control room environment.",
      "Built with React and Redux, this panel serves as the ultimate cockpit for scheduling, compliance, and shift tracking. Instead of fighting with brittle spreadsheets, I designed an interface that transforms raw data into streamlined operational control. It features an automated shift-generation engine that ingests employee availability and builds the weekly roster in clicks rather than hours.",
      "It houses a real-time ledger that sanitizes Firestore timestamps, automates complex weekend/holiday salary calculations, and tracks mandatory security certifications (like weapon handling and medical responses) to ensure the entire roster is always 100% compliant. By enforcing a strict, two-tier approval workflow for peer-to-peer shift swaps, the panel acts as a perfect filter: guards coordinate adjustments among themselves on mobile, and the finalized request hits my desk for a single-click sign-off. It is a data-driven command center built to prove that with the right architecture, running a high-stakes security operation can be completely frictionless."
    ],
    src: Amishav,
    poster: '',
    icon: AmishavIcon,
    technologies: ["React", "TypeScript", "SASS(CSS)", "Firebase", "Redux", "HTML"],
  },
  // {
  //   id: "gllacy",
  //   name: "Gllacy",
  //   path: "https://alex-gorodov.github.io/gllacy",
  //   description: "Gllacy store offers a delightful selection of homemade ice cream flavors. Enjoy natural ingredients, free delivery, and exclusive gifts with every purchase. The design belongs to HTML Academy.",
  //   img: Gllacy,
  //   icon: GllacyIcon
  // },
  // {
  //   id: "bright-lights",
  //   name: "Bright Lights",
  //   path: "https://alex-gorodov.github.io/bright-lights/",
  //   description: "\"Bright Lights\" introduces a dynamic blend of music, tours, and news. Led by Grammy-nominated singer, songwriter, and DJ, Bright Lights delivers an electrifying experience, captivating audiences worldwide.",
  //   img: BrightLights,
  //   icon: BrightLightsIcon
  // },
  // {
  //   id: "createx",
  //   name: "CreateX",
  //   path: "https://alex-gorodov.github.io/CreateX/",
  //   description: "\"CreateX\" offers a diverse range of online courses and events tailored for learners worldwide. Benefit from experienced tutors, 24/7 support, and a vibrant learning community. Enroll now and unleash your potential with CreateX!",
  //   img: CreateX,
  //   icon: CreatexIcon
  // },
  // {
  //   id: "cat-energy",
  //   name: "Cat Energy",
  //   path: "https://alex-gorodov.github.io/Cat-Energy/",
  //   description: "\"Cat Energy\" offers specialized nutrition programs for cats. Whether your pet needs to lose weight or gain muscle, our functional nutrition products provide essential nutrients. Achieve remarkable results without changing your cat's lifestyle. Contact us for dealer cooperation. The design belongs to HTML Academy.",
  //   img: CatEnergy,
  //   icon: CatEnergyIcon
  // },
  // {
  //   id: "sedona",
  //   name: "Sedona",
  //   path: "https://htmlacademy-adaptive.github.io/590651-sedona-26/11/",
  //   description: "Sedona is a true Arizona town with a lively atmosphere and amazing attractions. Discover five reasons why Sedona is better than the Grand Canyon. The design belongs to HTML Academy.",
  //   img: Sedona,
  //   icon: SedonaIcon
  // },
  // {
  //   id: "device",
  //   name: "Device",
  //   path: "https://alex-gorodov.github.io/Device/",
  //   description: "\"Device\" is a gadget online store offering a wide range of products. Services include delivery, warranty, and financing. Contact information, working hours, and newsletter subscription are also available. The design belongs to HTML Academy.",
  //   img: Device,
  //   icon: DeviceIcon
  // }
]
