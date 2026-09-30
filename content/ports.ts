export type BerthRow = {
  berth: string;
  loa: string;
  beam: string;
  draft: string;
  remarks: string;
};

export type PortInfo = {
  slug: string;
  code: string;
  title: string;
  subtitle: string;
  summary: string;
  href: string;
  stats: { label: string; value: string }[];
  deskEmail: string;
  dryBerthsIntro?: string;
  dryBerths?: BerthRow[];
  oilBerthsIntro?: string;
  oilBerths?: BerthRow[];
  notes?: string[];
  workingHours?: string[];
  general?: string[];
  authority?: { name: string; address: string; tel: string; email?: string; website?: string; pic?: string };
  parameters?: { label: string; value: string }[];
};

export const ports: PortInfo[] = [
  {
    slug: "karachi",
    code: "KPT • PORT CODE: PKKHI",
    title: "Karachi Port (KPT)",
    subtitle: "Historic Deep-Water Natural Port",
    summary:
      "The premier maritime gateway handling over 60% of national cargo. Equipped with East & West Wharves, container terminals (KICT & SAPT), bulk cargo berths, and oil piers. Karachi Port has 26 dry berths at East and West Wharves.",
    href: "/ports/karachi",
    stats: [
      { label: "Max Permissible Draft:", value: "13.0m - 16.0m" },
      { label: "Active Wharves:", value: "30 Berths + 3 OP" },
      { label: "Piloting:", value: "Compulsory 24/7" },
    ],
    deskEmail: "ops@ews.com.pk",
    dryBerthsIntro:
      "Dry Berths: Karachi Port has 26 dry berths at East and West Wharves. Limitations and Restrictions of berths at Karachi Port are as under, all measurements are in Meters.",
    dryBerths: [
      { berth: "1 - 3", loa: "NR", beam: "NR", draft: "10.67", remarks: "Multi Purpose" },
      { berth: "4 & 5", loa: "186", beam: "NR", draft: "10.75", remarks: "Multi Purpose" },
      { berth: "6 - 9", loa: "305", beam: "NR", draft: "13.00", remarks: "PICT-Container Terminal" },
      { berth: "10 - 14", loa: "250", beam: "NR", draft: "13.00", remarks: "Multi Purpose" },
      { berth: "15 - 16", loa: "250", beam: "NR", draft: "10.05", remarks: "Multi Purpose" },
      { berth: "18", loa: "140", beam: "NR", draft: "9.50", remarks: "Multi Purpose" },
      { berth: "19 - 21", loa: "160", beam: "NR", draft: "9.50", remarks: "Multi Purpose" },
      { berth: "22 - 23", loa: "150", beam: "NR", draft: "7.50", remarks: "Multipurpose" },
      { berth: "24 - 25", loa: "NR", beam: "NR", draft: "10.00", remarks: "Multi Purpose" },
      { berth: "26 - 30", loa: "340", beam: "NR", draft: "13.00", remarks: "KICT-Container Terminal" },
    ],
    oilBerthsIntro: "Oil Piers",
    oilBerths: [
      {
        berth: "OP-1",
        loa: "259",
        beam: "44",
        draft: "13.00 Imp / 13.00 Exp",
        remarks: "95,000 / 75,000 DWT — POL dedicated; chemicals when no POL",
      },
      {
        berth: "OP-2",
        loa: "259",
        beam: "44",
        draft: "13.00 Imp / 12.50 Exp",
        remarks: "95,000 / 75,000 DWT — First come first serve",
      },
      {
        berth: "OP-3",
        loa: "259",
        beam: "44",
        draft: "12.50 Imp / 12.25 Exp",
        remarks: "95,000 / 75,000 DWT — After two POL, one NON POL",
      },
      {
        berth: "DB-1",
        loa: "N/A",
        beam: "N/A",
        draft: "10.67",
        remarks: "Ethanol/Molasses load; chemicals discharge (excl. MEG/SM/AA)",
      },
    ],
    notes: [
      "Products at OP-1: Crude Oil, HSDO, MOGAS, Aviation Gas, Lube Oil and chemicals (AA, MX, VAM, IPA, 2EH, DEG, Methyl Acetate, Ethyl Acetate, White Spirit — except MEG, Styrene Monomer, Chloroform, Caustic Soda).",
      "Products at OP-2: Chemicals (AA, MX, VAM, IPA, 2EH, DEG, MA, EA, MEK, Chloroform, MEG, SM, Methanol, Caustic Soda, White Spirit), Ethanol, Molasses, Crude Oil, Palm Oil, HSD & AV Gas.",
      "Products at OP-3: Chemicals (same range), Ethanol, Molasses, Crude Oil, Vegetable Oil, Naphtha, Base LSFO, HSFO, AV GAS, MO GAS, LUBE BASE OIL.",
      "Products at DB-1: Loading Ethanol and Molasses, Caustic soda; discharging Chemicals MX, VAM, IPA, 2EH, DEG, MA, white spirit (except MEG, Styrene Monomer, Acetic Acid, Methanol, Chloroform).",
    ],
    workingHours: [
      "Day Shift: 0730 - 1630 hrs (Break: 1130 - 1230 hrs)",
      "Night Shift: 1900 - 0330 hrs (Break: 2300 - 2330 hrs)",
      "Over Time Day: 1130 - 1230 hrs & 1630 - 1830 hrs",
      "Over Time Night: 2300 - 2330 hrs & 0330 - 0630 hrs",
    ],
    general: [
      "Pilotage is compulsory. Pilot station: Karachi Pilot Station, Lat 24° 44.7' N, Long 066° 57.3' E.",
      "VHF channel used by port control and pilots: Channel 16 and 12 respectively.",
    ],
    authority: {
      name: "Karachi Port Trust",
      address: "Eduljee Dinshaw Road, Karachi-74000, Pakistan",
      tel: "+92 21 99214530",
      email: "dmaster@kpt.gov.pk",
      website: "https://www.kpt.gov.pk",
      pic: "Captain Wasi - Dock Master",
    },
  },
  {
    slug: "qasim",
    code: "PQA • PORT CODE: PKBQM",
    title: "Port Muhammad Bin Qasim",
    subtitle: "Second Largest Deep-Sea Port",
    summary:
      "Handling 35%+ of Pakistan’s international seaborne trade. Major industrial nexus for LNG/LPG imports, steel mills, container lines (QICT), and dedicated coal/grain terminals. Port Qasim has 17 berths.",
    href: "/ports/qasim",
    stats: [
      { label: "Max Permissible Draft:", value: "12.0m - 13.0m" },
      { label: "Channel Length:", value: "45 km Tidal" },
      { label: "Cargo Profile:", value: "Energy, Bulk, Box" },
    ],
    deskEmail: "ops@ews.com.pk",
    dryBerthsIntro:
      "Dry Berths: Port Qasim having 17 berths. Limitations and Restrictions of berths at Port Qasim are as under, all measurements are in Meters.",
    dryBerths: [
      { berth: "MW-1", loa: "225.00", beam: "33.00", draft: "10.00", remarks: "Tanker Berth" },
      { berth: "MW-2", loa: "225.00", beam: "33.00", draft: "10.00", remarks: "General Cargoes" },
      { berth: "MW-3", loa: "225", beam: "33", draft: "10.00", remarks: "Bulk Coal" },
      { berth: "MW-4", loa: "225", beam: "33", draft: "10.50", remarks: "Bulk Coal" },
      { berth: "QICT-1 ≤310", loa: "upto 310.00", beam: "48.00", draft: "12.00", remarks: "Container Terminal (DP World)" },
      { berth: "QICT-1 ≤335", loa: "310–335", beam: "45.00", draft: "12.00", remarks: "Container Terminal (DP World)" },
      { berth: "QICT-2 ≤310", loa: "upto 310.00", beam: "48.00", draft: "13.00", remarks: "Container Terminal (DP World)" },
      { berth: "QICT-2 ≤335", loa: "310–335", beam: "45.00", draft: "13.00", remarks: "Container Terminal (DP World)" },
      { berth: "FAP G.T", loa: "250.00", beam: "43.50", draft: "13.00", remarks: "Max DWT 75000 — Bulk / Break bulk" },
      { berth: "IOCB", loa: "230.00", beam: "40.00", draft: "12.00", remarks: "Max DWT 75000 — Iron Ore / Coal" },
      { berth: "PIBT", loa: "230.00", beam: "33.00", draft: "12.70", remarks: "Cement/Clinker/Coal" },
      { berth: "PQEPCT", loa: "210.00", beam: "33.00", draft: "12.00", remarks: "Bulk Coal" },
    ],
    oilBerthsIntro: "Oil & Gas Terminals",
    oilBerths: [
      { berth: "FOTCO", loa: "245.00", beam: "41.50", draft: "13.00", remarks: "Max DWT 75000 — HSDO, Crude & Fuel Oil" },
      { berth: "EVTL-13", loa: "225.00", beam: "40.00", draft: "11.00", remarks: "Liquid Chemicals" },
      { berth: "LCT", loa: "210.00", beam: "33.00", draft: "10.00", remarks: "Edible Oil" },
      { berth: "LNG-1", loa: "295.00", beam: "43.40", draft: "12.00", remarks: "LNG" },
      { berth: "SSGC / LPG", loa: "163.00", beam: "33.00", draft: "10.00", remarks: "LPG" },
    ],
    notes: [
      "FAP – Fauji Akber Portia Terminal: Grains, Fertilizer and other dry cargoes (www.fapterminals.com).",
      "IOCB – Iron Ore Coal Berth leased to Pakistan Steel Mills (www.paksteel.com.pk).",
      "PIBT – Pakistan International Bulk Terminal: Bulk Coal up to 12 MTPA; Clinker/Cement up to 4 MTPA (www.pibt.com.pk).",
      "PQEPCT – Port Qasim Electrical Power Company Terminal for bulk coal (www.sepco3.com).",
      "FOTCO – Fauji Oil Terminal for liquid POL (www.fotco.pk).",
      "EVTL – Engro Vopak Terminal for liquid chemicals and LPG (www.engrovopak.com).",
      "LCT – Liquid Cargo Terminal for edible cargoes (www.fwq.com.pk).",
    ],
    general: [
      "Port Qasim is about 60 km from Karachi (~1 hour by road).",
      "24-mile entrance channel is not marked by lighted buoys; no night navigation — berthing/sailing in daylight only.",
      "Pilot Station: Lat 24° 33.1' N, Lon 067° 02.8' E; steaming time to berth ~3 hours.",
      "VHF Channel 16 & 12 for port control and pilots.",
    ],
    authority: {
      name: "Port Qasim Authority (PQA)",
      address: "Bin Qasim Karachi – 75020 Pakistan",
      tel: "+92 21 99272111-30",
      website: "https://www.portqasim.org.pk",
      pic: "Captain Nouman Hassan – Deputy Conservator",
    },
  },
  {
    slug: "gwadar",
    code: "GPA • PORT CODE: PKGWD",
    title: "Gwadar Deep Sea Port",
    subtitle: "Warm-Water CPEC Nexus",
    summary:
      "Strategically situated on the Arabian Sea at the mouth of the Persian Gulf. Managed & operated by China Overseas Ports Holding Company Pakistan Pvt. Ltd. Located 234 Miles West of Karachi and 390 Miles East of Strait of Hormuz next to Pakistan–Iran border.",
    href: "/ports/gwadar",
    stats: [
      { label: "Max Permissible Draft:", value: "12.5m" },
      { label: "Multipurpose Berths:", value: "3 × 200m + RoRo" },
      { label: "Transit Route:", value: "CPEC Corridor" },
    ],
    deskEmail: "ops@ews.com.pk",
    parameters: [
      { label: "Max LOA", value: "300 Mtrs" },
      { label: "Max Beam", value: "40 Mtrs" },
      { label: "Draft", value: "12.5 Mtrs" },
      { label: "DWT", value: "70,000 Tons" },
      { label: "Approach Channel", value: "4.5km West/East, dredged 13.5 mtrs" },
      { label: "Harbour Tugs", value: "2 ASD type, 30 tons Bollard Pull" },
      { label: "Tidal Range", value: "Max 2.2 mtrs" },
      { label: "Container Storage", value: "55,153 sqm" },
      { label: "Reefer Plugs", value: "4,367 sqm (400 plugs)" },
      { label: "Hazardous Cargo", value: "1,800 sqm" },
      { label: "Break Bulk", value: "28,669 sqm" },
      { label: "Transit Shed", value: "3,750 sqm" },
      { label: "Weigh Bridge", value: "80T (3.4m × 18m × 2)" },
      { label: "Paved Area", value: "120,210 sqm" },
    ],
    workingHours: [
      "Day Shift: 0700 to 1900 hrs (Break: 1130 to 1230 hrs)",
      "Night Shift: 1900 to 0700 hrs (Break: 2300 to 2330 hrs)",
      "Overtime: Meal Break, Sundays & Holidays",
      "Pilotage compulsory for vessels over 200 GRT; pilots on 24 Hrs Notice",
    ],
    general: [
      "3 multipurpose berths of 200 meters each and one dedicated RoRo berth with 14 mtrs depth alongside.",
      "Road: Coastal Highway ~600 km to Karachi; Makran Highway to Afghanistan.",
      "Fresh Water, Bunkers, Provisions available on prior notice.",
      "Official site: cophcgwadar.com",
    ],
    authority: {
      name: "China Overseas Ports Holding Company Pakistan Pvt. Ltd.",
      address:
        "3rd Floor(Ext), Bahria Complex - IV, Chaudhary Khaleeq uz Zaman Road, Gizri, Clifton - Karachi; Control Tower Building, Pak China Friendship Road, Gwadar Port",
      tel: "+92 21 35155081-84 / +92 86 4212266",
      email: "info@cophcgwadar.com",
      website: "https://cophcgwadar.com",
    },
  },
  {
    slug: "gadani",
    code: "GADANI • BALOCHISTAN",
    title: "Gadani Ship Breaking Hub",
    subtitle: "World Ship Recycling Anchorage",
    summary:
      "One of the world’s foremost ship demolition centers. East Wind Shipping handles full end-of-life vessel documentation, beaching permissions, gas-free audits, and customs discharge. Gadani is located about 100 KM by road from Karachi in Baluchistan.",
    href: "/ports/gadani",
    stats: [
      { label: "Beaching Front:", value: "132 Plots / 10 km" },
      { label: "Demo Agency:", value: "Complete Husbandry" },
      { label: "Survey & Audit:", value: "Customs & Gas-Free" },
    ],
    deskEmail: "ops@ews.com.pk",
    general: [
      "Ships either call Karachi Outer Anchorage then move to Gadani after preliminary inspection by Buyer’s representatives, or directly call Gadani Anchorage.",
      "Direct anchorage position: around Latitude 25° 05' N, Longitude 066° 37' E, or 4 miles south-west of Gadani hill.",
      "No Immigration staff at Gadani — all formalities completed with Karachi Port Immigration.",
      "Draft required for beaching is lightship draft; Master should discuss with Beaching Master during preliminary inspection.",
      "No restrictions on beaching days; ships normally beached about 20 days in a month. Avoid very low or minus tides.",
      "For tidal timings at Gadani, subtract 35 minutes from Karachi Tidal Times.",
      "Queries: ops@ews.com.pk",
    ],
  },
];

export function getPort(slug: string) {
  return ports.find((p) => p.slug === slug);
}
