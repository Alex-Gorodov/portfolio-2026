export enum AppRoute {
  Root = "/portfolio",
  // Discover = "/divesea/discover",
  // Creators = "/divesea/creators",
  // UserPage = "/divesea/creators/:id",
  // ProductPage = "/divesea/item/:id",
  // Sell = "/divesea/sell",
  // Stats = "/divesea/stats",
}

export enum APIRoute {
  Users = "divesea-db/users",
  Items = "divesea-db/items",
  Bids = "divesea-db/bids",
}

export enum HeroItemSizes {
  Active = 392,
  ActiveMobile = 210,
  Inactive = 318,
  InactiveMobile = 170,
}

export enum ScreenSizes {
  Mobile = 430,
  MobileOnly = 768,
  Tablet = 1024,
  Desktop = 1440,
  ContainerMaxWidth = 1280
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
