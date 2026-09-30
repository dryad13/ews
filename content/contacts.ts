export type StaffMember = {
  name: string;
  role: string;
  tel?: string;
  mobile?: string;
  email: string;
};

export const hq = {
  name: "EastWind Shipping (Pvt.) Ltd.",
  addressLines: [
    "Suite 401, 4th Floor",
    "Bahria Complex II, M.T Khan Road",
    "Lalazar - 75600, Pakistan",
  ],
  pabx: "+92-21-3567 0251-4 (4 Line)",
  fax: "+92-21-3567 0256",
  email: "ops@ews.com.pk",
  website: "www.ews.com.pk",
  inquiryEmail: "ops@ews.com.pk",
  infoEmail: "info@ews.com.pk",
};

export const leadership: StaffMember[] = [
  {
    name: "Capt Javed Iqbal",
    role: "Chief Executive",
    email: "cji@ews.com.pk",
  },
  {
    name: "Hunain Javed",
    role: "Management",
    email: "hj@ews.com.pk",
  },
  {
    name: "Capt Anwar Ali",
    role: "Chief Operating Officer",
    tel: "+92-21-3567 0257",
    email: "caa@ews.com.pk",
  },
  {
    name: "Pakhali Faisal",
    role: "Chief Financial Officer",
    tel: "+92-21-3567 0262",
    mobile: "+92-332-3784728",
    email: "faisal@ews.com.pk",
  },
  {
    name: "Admin Officer",
    role: "Admin Department",
    email: "admin@ews.com.pk",
  },
  {
    name: "HR Officer",
    role: "HR Department",
    email: "hr@ews.com.pk",
  },
];

export const facilityContacts = [
  {
    title: "Head Office • Bahria Complex II",
    lines: [
      "Suite 401, 4th Floor, Bahria Complex II",
      "M.T Khan Road, Lalazar - 75600, Pakistan",
    ],
    tel: "+92-21-3567 0251-4",
    email: "ops@ews.com.pk",
    icon: "business",
  },
  {
    title: "TPX Container Depot",
    lines: [
      "TPX Yard - KPT Gate # 7, M.T Khan Road, Karachi",
      "Capacity: 16,000 m² | Direct WebOC Terminal Gate Interface",
    ],
    tel: "+92-331-8060-222 / +92-332-8060-222",
    email: "tpx@ews.com.pk",
    icon: "warehouse",
  },
  {
    title: "East Wharf Facility – Keamari",
    lines: [
      "East Wharf, Keamari Port Precinct, Karachi",
      "Capacity: 8,000 m² | Heavy Machinery & Box Repair Workshop",
    ],
    email: "ops@ews.com.pk",
    icon: "anchor",
  },
] as const;

export const divisionEmails: Record<string, string> = {
  tanker: "ops@ews.com.pk",
  breakbulk: "ops@ews.com.pk",
  drybulk: "ops@ews.com.pk",
  feeder: "imran.saeed@ews.com.pk",
  cordelia: "ops.csl@ews.com.pk",
  depot: "tpx@ews.com.pk",
  gadani: "ops@ews.com.pk",
};
