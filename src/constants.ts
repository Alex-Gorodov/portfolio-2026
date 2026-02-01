import Braga from "./Assets/Images/Portfolio/braga.webp";
import Divesea from "./Assets/Images/Portfolio/divesea.webp";
import Gllacy from "./Assets/Images/Portfolio/gllacy.webp";
import BrightLights from "./Assets/Images/Portfolio/brightLights.webp";
import CreateX from "./Assets/Images/Portfolio/createx.webp";
import CatEnergy from "./Assets/Images/Portfolio/catEnergy.webp";
import Sedona from "./Assets/Images/Portfolio/sedona.webp";
import Device from "./Assets/Images/Portfolio/device.webp";

import Sportapp from './Assets/Videos/sportapp-iphone-16.mp4';
import SportappPoster from './Assets/Images/poster-sport.png';
import Amishav from './Assets/Videos/amishav-iphone-16.mp4';
import AmishavIcon from './Assets/Images/Portfolio/logos/amishav-icon.png'
import AmishavPoster from './Assets/Images/poster-amishav.png';

import { ReactComponent as BrightLightsIcon } from "./Assets/Images/Portfolio/logos/bright-lights.svg";
import { ReactComponent as CatEnergyIcon } from "./Assets/Images/Portfolio/logos/cat-energy.svg";
import { ReactComponent as CreatexIcon } from "./Assets/Images/Portfolio/logos/createx.svg";
import { ReactComponent as GllacyIcon } from "./Assets/Images/Portfolio/logos/gllacy.svg";
import { ReactComponent as SedonaIcon } from "./Assets/Images/Portfolio/logos/sedona.svg";
import { ReactComponent as DeviceIcon } from "./Assets/Images/Portfolio/logos/device.svg";
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

export const MOBILE_PROJECTS = [
    {
      title: "Amishav",
      themeColor: "#72b4ee",
      src: Amishav,
      poster: AmishavPoster,
      icon: AmishavIcon,
    },

    {
      title: "Unifier",
      themeColor: "#fe5622",
      src: Sportapp,
      poster: SportappPoster,
    },
  ]

export const WEB_PROJECTS = [
  {
    id: "braga",
    name: "Braga",
    path: "https://alex-gorodov.github.io/braga",
    description: "My own website, my own beer, my own production.",
    img: Braga,
    icon: BragaIcon
  },
  {
    id: "divesea",
    name: "DiveSea",
    path: "https://alex-gorodov.github.io/divesea",
    description: "Explore our dynamic NFT marketplace to discover, create, and sell thousands of artworks. Join now for a $20 bonus and unleash your creativity!",
    img: Divesea,
    icon: DiveseaIcon
  },
  {
    id: "gllacy",
    name: "Gllacy",
    path: "https://alex-gorodov.github.io/gllacy",
    description: "Gllacy store offers a delightful selection of homemade ice cream flavors. Enjoy natural ingredients, free delivery, and exclusive gifts with every purchase. The design belongs to HTML Academy.",
    img: Gllacy,
    icon: GllacyIcon
  },
  {
    id: "bright-lights",
    name: "Bright Lights",
    path: "https://alex-gorodov.github.io/bright-lights/",
    description: "\"Bright Lights\" introduces a dynamic blend of music, tours, and news. Led by Grammy-nominated singer, songwriter, and DJ, Bright Lights delivers an electrifying experience, captivating audiences worldwide.",
    img: BrightLights,
    icon: BrightLightsIcon
  },
  {
    id: "createx",
    name: "CreateX",
    path: "https://alex-gorodov.github.io/CreateX/",
    description: "\"CreateX\" offers a diverse range of online courses and events tailored for learners worldwide. Benefit from experienced tutors, 24/7 support, and a vibrant learning community. Enroll now and unleash your potential with CreateX!",
    img: CreateX,
    icon: CreatexIcon
  },
  {
    id: "cat-energy",
    name: "Cat Energy",
    path: "https://alex-gorodov.github.io/Cat-Energy/",
    description: "\"Cat Energy\" offers specialized nutrition programs for cats. Whether your pet needs to lose weight or gain muscle, our functional nutrition products provide essential nutrients. Achieve remarkable results without changing your cat's lifestyle. Contact us for dealer cooperation. The design belongs to HTML Academy.",
    img: CatEnergy,
    icon: CatEnergyIcon
  },
  {
    id: "sedona",
    name: "Sedona",
    path: "https://htmlacademy-adaptive.github.io/590651-sedona-26/11/",
    description: "Sedona is a true Arizona town with a lively atmosphere and amazing attractions. Discover five reasons why Sedona is better than the Grand Canyon. The design belongs to HTML Academy.",
    img: Sedona,
    icon: SedonaIcon
  },
  {
    id: "device",
    name: "Device",
    path: "https://alex-gorodov.github.io/Device/",
    description: "\"Device\" is a gadget online store offering a wide range of products. Services include delivery, warranty, and financing. Contact information, working hours, and newsletter subscription are also available. The design belongs to HTML Academy.",
    img: Device,
    icon: DeviceIcon
  }
]
