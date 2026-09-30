export const depotFacilities = [
  {
    badge: "Facility 01 • Prime Corridor",
    badgeTone: "primary" as const,
    distance: "2 KM FROM PORT",
    title: "TPX Depot – M.T. Khan Road",
    body: "Situated in the immediate logistics artery on M.T. Khan Road, this massive 16,000 square meter depot provides ultra-rapid turnarounds for container carriers moving boxes to and from the Karachi Port gates.",
    metrics: [
      { value: "16,000", label: "Square Meters" },
      { value: "2.0 km", label: "From KPT Gates" },
      { value: "3,500+", label: "TEU Capacity" },
    ],
    listTitle: "Core Depot Operations",
    items: [
      "Immediate receiving, storage, and fast release for MLO and NVOCC boxes.",
      "Heavy-duty Kalmar and reach stackers for 5-high loaded/empty container stacking.",
      "Complete EDI gate reporting, real-time container interchange (EIR) tracking.",
    ],
    terminalId: "Terminal ID: PK-EWS-TPX",
    href: "/divisions/container-depot",
  },
  {
    badge: "Facility 02 • Portside Enclave",
    badgeTone: "muted" as const,
    distance: "PORTSIDE KEAMARI",
    title: "East Wharf Facility – Keamari",
    body: "Covering 8,000 square meters right in the heart of Keamari port perimeter, providing zero-transit empty staging, container maintenance, survey, and washing for international container liners.",
    metrics: [
      { value: "8,000", label: "Square Meters" },
      { value: "0.4 km", label: "To East Wharf" },
      { value: "1,800+", label: "TEU Capacity" },
    ],
    listTitle: "Workshop & Repair Capabilities",
    items: [
      "IICL certified structural container repair, patching, floor replacement, and welding.",
      "Chemical container washing and deodorization facility for food-grade cargo boxes.",
      "Direct rail siding and trailer direct access avoiding main city heavy vehicle hours.",
    ],
    terminalId: "Terminal ID: PK-EWS-KMR",
    href: "/divisions/container-depot",
  },
] as const;

export const nav = {
  about: [
    { label: "Corporate Profile", href: "/about" },
    { label: "Mission & Values", href: "/about/mission-values" },
    { label: "Quality & HSE Policy", href: "/about/quality" },
  ],
  divisions: [
    { label: "Tanker Agency Services", href: "/divisions/tankers" },
    { label: "Break Bulk & Project Cargo", href: "/divisions/break-bulk" },
    { label: "Container Feeder Representation", href: "/divisions/container-feeder" },
    { label: "Dry Bulk Charters", href: "/divisions/dry-bulk" },
    { label: "Off-Dock Container Depot", href: "/divisions/container-depot" },
    { label: "Cordelia & Gadani Demo Ships", href: "/divisions/cordelia-gadani" },
  ],
  ports: [
    { label: "Port of Karachi (KPT)", href: "/ports/karachi" },
    { label: "Port Muhammad Bin Qasim", href: "/ports/qasim" },
    { label: "Gwadar Deep Water Port", href: "/ports/gwadar" },
    { label: "Gadani Ship Recycling Yard", href: "/ports/gadani" },
  ],
} as const;
