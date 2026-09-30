import type { StaffMember } from "./contacts";

export type Division = {
  slug: string;
  title: string;
  eyebrow: string;
  icon: string;
  summary: string;
  bullets: string[];
  footerNote: string;
  href: string;
  website?: string;
  staff?: StaffMember[];
  wide?: boolean;
};

export const divisions: Division[] = [
  {
    slug: "tankers",
    title: "Tankers Division",
    eyebrow: "Liquid Cargoes & Energy",
    icon: "water_drop",
    summary:
      "Dedicated husbandry and agency for chemical, oil, and specialized product tankers discharging and loading at specialized petroleum berths. Tankers carry liquid cargoes including Chemicals, Molasses, Ethanol and Petroleum products.",
    bullets: [
      "Chemicals & Industrial Solvents",
      "Molasses & Bulk Ethanol Exports",
      "Petroleum Products & Clean Oils",
    ],
    footerNote: "Terminal Berths: OP-I, II, III & FOTCO",
    href: "/divisions/tankers",
    staff: [
      {
        name: "Capt Anwar Ali",
        role: "Chief Operating Officer",
        tel: "+92-21-3567 0257",
        mobile: "+92-332-3784727",
        email: "ops@ews.com.pk",
      },
      {
        name: "Capt Zulfiqar ul Islam",
        role: "Head Tramper Division",
        tel: "+92-21-3567 0258",
        mobile: "+92-332-3784726",
        email: "ops@ews.com.pk",
      },
      {
        name: "Asad Abbas",
        role: "Assistant Manager Ops",
        tel: "+92-21-3567 0261",
        mobile: "+92 333-1208566",
        email: "ops@ews.com.pk",
      },
      {
        name: "Sohail Qadir / Salim Moin",
        role: "Sr. Boarding Officer / Boarding Officer",
        mobile: "+92 332-3784730 / +92-332-3784734",
        email: "boarding@ews.com.pk",
      },
    ],
  },
  {
    slug: "break-bulk",
    title: "Break Bulk Division",
    eyebrow: "Heavy Lift & Industrial",
    icon: "precision_manufacturing",
    summary:
      "Handling complex non-containerized cargo with engineered rigging, heavy-lift direct discharge, and rapid customs transit coordination. Commodities include Steel products, General and Project cargo.",
    bullets: [
      "Steel Products, Coils & Rebar Billets",
      "General & Breakbulk Consignments",
      "Power Generation & Project Machinery",
    ],
    footerNote: "Stevedoring & Wharfage",
    href: "/divisions/break-bulk",
  },
  {
    slug: "dry-bulk",
    title: "Dry Bulk Vessels",
    eyebrow: "Agri-Commodities & Minerals",
    icon: "grain",
    summary:
      "Supervision and agency for Supramax, Ultramax, and Panamax bulkers carrying essential national food security and industrial feedstocks including Grains / Seeds, Fertilizers, Shredded Scrap and Coal.",
    bullets: [
      "Grains, Canola, Wheat & Oilseeds",
      "Urea & DAP Fertilizers",
      "Shredded Steel Scrap & Thermal Coal",
    ],
    footerNote: "Bulk Silos & Open Yards",
    href: "/divisions/dry-bulk",
  },
  {
    slug: "container-feeder",
    title: "Container Feeder Division",
    eyebrow: "Global Feeder Shipping LLC",
    icon: "grid_view",
    summary:
      "Representing Container Feeder Market Leader Global Feeder Shipping LLC. Connecting Karachi and Port Qasim into high-frequency regional loops across UAE, Middle East, Arabian Gulf, Indian Subcontinent, SE Asia, and Far East.",
    bullets: [
      "Jebel Ali & Upper Arabian Gulf Feeder Loops",
      "Indian Subcontinent Regional Connections",
      "Southeast Asia & Far East Hub Relays",
    ],
    footerNote: "Terminal Slots & Transshipment",
    href: "/divisions/container-feeder",
    website: "https://www.globalfeeders.com/",
    staff: [
      {
        name: "Imran Saeed",
        role: "Manager Feeder",
        tel: "+92-21-3567 0259",
        mobile: "+92-332-3784735",
        email: "imran.saeed@ews.com.pk",
      },
      {
        name: "Fahad Jamal",
        role: "Manager Sales and Ops",
        tel: "+92-21-3567 0259",
        mobile: "+92-332-3784736",
        email: "fahad@ews.com.pk",
      },
      {
        name: "Farhan Sheikh",
        role: "Assistant Manager CSD",
        mobile: "+92-332-2422263",
        email: "farhan@ews.com.pk",
      },
      {
        name: "GFS Customer Service",
        role: "CSR Desk",
        email: "csr.gfs@ews.com.pk",
      },
      {
        name: "Ismail Hingoro",
        role: "Documentation Supervisor",
        mobile: "+92-334-3784738",
        email: "docs.gfs@ews.com.pk",
      },
      {
        name: "Saud Yousuf / Arsalan Iftikhar",
        role: "Accountant / Asst. Accountant",
        mobile: "+92-332-2422265 / +92-302-8277928",
        email: "accounts.gfs@ews.com.pk",
      },
    ],
  },
  {
    slug: "cordelia-gadani",
    title: "Cordelia Container & Gadani Demo Ships Division",
    eyebrow: "Cordelia Containers & Ship Demolition",
    icon: "sailing",
    summary:
      "Specialized representation of Cordelia Container Line and dedicated ship demolition agency at the world-renowned Gadani Ship Recycling Yard. We handle beaching clearance, customs outward vessel inward surveys, and statutory maritime permissions.",
    bullets: [
      "Cordelia Container Operations & Booking",
      "Gadani Beaching Formalities & Pilotage",
      "Demolition Vessel Customs De-registration",
      "Crew Sign-Off, Repatriation & Gas-Free Certs",
    ],
    footerNote: "Gadani Anchorage & Beaching Agency",
    href: "/divisions/cordelia-gadani",
    website: "https://www.cordelialine.com/",
    wide: true,
    staff: [
      {
        name: "Syed Fasih Mehdi",
        role: "Lead - EQC & MNR",
        mobile: "+92-336 128 6555",
        email: "ops.csl@ews.com.pk",
      },
      {
        name: "Syed Zohaib Farooqi",
        role: "Team Leader Doc Import & Export",
        mobile: "+92-330 128 6555",
        email: "docs.csl@ews.com.pk",
      },
      {
        name: "Salman Muhammad Javed",
        role: "Front Desk Import / Export",
        mobile: "+92-333 0292 229",
        email: "exp.csl@ews.com.pk / imp.csl@ews.com.pk",
      },
      {
        name: "Shahzaib Naseem",
        role: "Sr. Executive Export / Sales",
        mobile: "+92 333 2780699",
        email: "exp.csl@ews.com.pk",
      },
    ],
  },
  {
    slug: "container-depot",
    title: "Container Depot Division",
    eyebrow: "Off-Dock CFS & Repair",
    icon: "warehouse",
    summary:
      "Empty Container Storage, receiving and delivery, and Container repair services for MLOs and NVOCCs from TPX (16,000 m²) and East Wharf Keamari (8,000 m²).",
    bullets: [
      "Empty Storage (MLO/NVOCC)",
      "IICL Container Survey & Structural Repair",
      "Reefer Pre-Trip Inspection",
    ],
    footerNote: "TPX & Keamari Yards",
    href: "/divisions/container-depot",
    staff: [
      {
        name: "Haroon Musa",
        role: "GM Container Operation",
        mobile: "+92-332-2422275",
        email: "hm@ews.com.pk",
      },
      {
        name: "Abdul Aziz",
        role: "Manager Container Operation",
        mobile: "+92-332-2422276",
        email: "aag@ews.com.pk",
      },
    ],
  },
];

export function getDivision(slug: string) {
  return divisions.find((d) => d.slug === slug);
}
