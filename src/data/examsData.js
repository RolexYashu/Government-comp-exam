export const EXAMS_DATA = [
  {
    id: "jee-main-2026",
    code: "JEE-MAIN",
    name: "JEE (Main) 2026 - Joint Entrance Examination",
    shortName: "JEE Main 2026",
    conductingBody: "National Testing Agency (NTA)",
    ministry: "Ministry of Education, Govt. of India",
    category: "Engineering & Architecture",
    level: "National",
    stream: "Engineering",
    status: "Choice Filling Active", // For active demo realism
    badgeColor: "blue",
    description: "Gateway for admission to undergraduate engineering and architecture programs at NITs, IIITs, other Centrally Funded Technical Institutions (CFTIs), and eligibility test for JEE (Advanced).",
    officialPortal: "https://jeemain.nta.ac.in",
    eligibility: {
      min12thPercentage: 75, // For general/OBC; 65 for SC/ST
      scStPercentage: 65,
      requiredSubjects: ["Physics", "Mathematics", "Chemistry/Biology/Technical Vocational"],
      ageLimit: "No age limit, passed 12th in 2024, 2025 or appearing in 2026",
      maxAttempts: "3 consecutive years",
      domicileRequired: false
    },
    counsellingBody: "JoSAA / CSAB",
    counsellingPortal: "https://josaa.nic.in",
    nextAction: {
      title: "Complete Choice Filling & Mock Seat Locking",
      whyItMatters: "Unlocked choices will be auto-locked on the final cutoff hour. If you do not lock or save your preferences, the algorithm assigns purely based on last saved draft.",
      byWhen: "2026-10-24T17:00:00",
      urgency: "HIGH",
      actionType: "Choice Filling",
      linkUrl: "https://josaa.nic.in"
    },
    deadlines: [
      { event: "Session 1 Result & Scorecard", date: "2026-02-12", status: "completed" },
      { event: "Session 2 All India Rank Declaration", date: "2026-04-25", status: "completed" },
      { event: "JoSAA Round 1 Choice Filling Closes", date: "2026-10-24", status: "urgent", isNext: true },
      { event: "Round 1 Seat Allotment Result", date: "2026-10-26", status: "upcoming" },
      { event: "Online Reporting & Seat Acceptance Fee Payment", date: "2026-10-29", status: "upcoming" }
    ],
    documentsRequired: [
      { name: "Class 10 Marksheet / Birth Certificate", purpose: "Date of Birth Verification", format: "PDF / Original scan", critical: true },
      { name: "Class 12 Passing Certificate / Marksheet", purpose: "75% / Top 20 percentile check", format: "PDF", critical: true },
      { name: "OBC-NCL / EWS Certificate", purpose: "Reservation Claim", format: "Issued on/after April 1, 2025 as per Govt of India format", critical: true, warning: "State OBC certificates without Non-Creamy Layer clause are strictly REJECTED." },
      { name: "State of Eligibility Proof", purpose: "Home State Quota", format: "12th School Admit Card / Domicile", critical: true },
      { name: "Medical Fitness Certificate", purpose: "Physical verification", format: "Annexure VII by Registered Doctor", critical: false }
    ],
    counsellingRounds: [
      { round: 1, name: "Round 1 Allocation", date: "Oct 26, 2026", desc: "First seat allocation across 118 institutes (IITs, NITs, IIITs, GFTIs)." },
      { round: 2, name: "Round 2 Allocation", date: "Oct 31, 2026", desc: "Float/Slide movements and upgraded allocations." },
      { round: 3, name: "Round 3 Allocation", date: "Nov 06, 2026", desc: "Mid-cycle reconciliations and mandatory reporting." },
      { round: 4, name: "Round 4 Allocation", date: "Nov 12, 2026", desc: "Seat surrender window opens." },
      { round: 5, name: "Round 5 Allocation", date: "Nov 18, 2026", desc: "Final IIT round; last chance to withdraw from IIT seats." },
      { round: 6, name: "Round 6 Allocation", date: "Nov 24, 2026", desc: "Final NIT+ System round before CSAB Special Rounds." }
    ],
    faqs: [
      { q: "What is the difference between Freeze, Float, and Slide?", a: "FREEZE: You accept the allotted seat and exit further rounds. FLOAT: You accept the seat but wish to be upgraded to any higher preference choice across any institute. SLIDE: You accept the seat but only wish to upgrade within the SAME allotted institute." },
      { q: "What happens if I don't pay the Seat Acceptance Fee (SAF)?", a: "Non-payment of SAF (₹35,000 for GEN/OBC, ₹17,500 for SC/ST) before the deadline results in AUTOMATIC CANCELLATION of your allotted seat and permanent debarment from remaining JoSAA rounds." }
    ]
  },
  {
    id: "neet-ug-2026",
    code: "NEET-UG",
    name: "NEET (UG) 2026 - National Eligibility cum Entrance Test",
    shortName: "NEET UG 2026",
    conductingBody: "National Testing Agency (NTA) & MCC",
    ministry: "Ministry of Health & Family Welfare",
    category: "Medical & Dental",
    level: "National",
    stream: "Medical",
    status: "State Domicile Verification",
    badgeColor: "emerald",
    description: "Sole statutory national entrance exam for admission to MBBS, BDS, BAMS, BHMS, and other undergraduate medical courses in all medical institutions including AIIMS & JIPMER.",
    officialPortal: "https://exams.nta.ac.in/NEET",
    eligibility: {
      min12thPercentage: 50, // 40 for SC/ST/OBC
      scStPercentage: 40,
      requiredSubjects: ["Physics", "Chemistry", "Biology/Biotechnology", "English"],
      ageLimit: "Must have completed 17 years at the time of admission or before 31st Dec 2026. No upper age limit.",
      maxAttempts: "No limit",
      domicileRequired: true // for 85% state quota
    },
    counsellingBody: "MCC (15% All India Quota) & State DTEs (85% State Quota)",
    counsellingPortal: "https://mcc.nic.in",
    nextAction: {
      title: "Upload Central Format Category Certificate on MCC Portal",
      whyItMatters: "MCC will treat candidates without central format OBC-NCL / EWS certificates as unreserved 'Open' category, losing reserved rank benefits.",
      byWhen: "2026-10-27T18:00:00",
      urgency: "HIGH",
      actionType: "Document Upload",
      linkUrl: "https://mcc.nic.in"
    },
    deadlines: [
      { event: "MCC Round 1 Registration Opens", date: "2026-10-20", status: "completed" },
      { event: "Choice Filling & Locking Window", date: "2026-10-27", status: "urgent", isNext: true },
      { event: "Processing of Seat Allotment", date: "2026-10-29", status: "upcoming" },
      { event: "Round 1 Result Publication", date: "2026-10-31", status: "upcoming" },
      { event: "Physical Reporting at Allotted Medical College", date: "2026-11-05", status: "upcoming" }
    ],
    documentsRequired: [
      { name: "NEET UG 2026 Admit Card & Score Card", purpose: "Identity & Rank Proof", format: "NTA Generated PDF", critical: true },
      { name: "Provisional Allotment Letter", purpose: "College Reporting", format: "Downloaded from MCC", critical: true },
      { name: "Class 10 & 12 Pass Certificate", purpose: "Age and PCB aggregate check", format: "Original + 3 attested copies", critical: true },
      { name: "Caste / Category Certificate", purpose: "Quota Verification", format: "Central Govt Format", critical: true, warning: "Must explicitly state Non-Creamy Layer for OBC; EWS must have valid FY income certificate." },
      { name: "Identity Proof (Aadhaar / Passport)", purpose: "Biometric matching", format: "Original Govt Photo ID", critical: true }
    ],
    counsellingRounds: [
      { round: 1, name: "AIQ Round 1", date: "Oct 25 - Nov 05, 2026", desc: "15% AIQ seats in Govt colleges + 100% Deemed/Central Univs." },
      { round: 2, name: "AIQ Round 2", date: "Nov 08 - Nov 18, 2026", desc: "Vacant seats upgraded; exit with forfeiture allowed." },
      { round: 3, name: "Round 3 (Mop-up)", date: "Nov 22 - Dec 02, 2026", desc: "Fresh registration allowed; strictly no seat resignation if joined." },
      { round: 4, name: "Stray Vacancy Round", date: "Dec 05 - Dec 12, 2026", desc: "Final clean-up round conducted online; no new choice changes." }
    ],
    faqs: [
      { q: "Can I participate in both State 85% and All India 15% counselling?", a: "Yes, you can register for both MCC (15% AIQ) and your respective State counselling board (85% State Quota) simultaneously." }
    ]
  },
  {
    id: "cuet-ug-2026",
    code: "CUET-UG",
    name: "CUET (UG) 2026 - Common University Entrance Test",
    shortName: "CUET UG 2026",
    conductingBody: "National Testing Agency (NTA)",
    ministry: "Ministry of Education, Govt. of India",
    category: "Central & State Universities",
    level: "National",
    stream: "Arts, Science & Commerce",
    status: "CSAS Phase 2 Preference Submission",
    badgeColor: "purple",
    description: "Single-window national entrance exam for admission into all Central Universities (Delhi University, BHU, JNU, Jamia, Allahabad Univ) and participating State & Private Universities.",
    officialPortal: "https://cuetug.ntaonline.in",
    eligibility: {
      min12thPercentage: 50,
      scStPercentage: 45,
      requiredSubjects: ["Subjects mapped directly to Class 12 board curriculum"],
      ageLimit: "No age limit; university specific norms apply",
      maxAttempts: "No limit",
      domicileRequired: false
    },
    counsellingBody: "Individual Universities (e.g. DU CSAS, BHU UET Portal)",
    counsellingPortal: "https://admission.uod.ac.in",
    nextAction: {
      title: "Confirm Subject-Mapping on Delhi University CSAS Portal",
      whyItMatters: "DU CSAS will reject any program preference if you appeared in CUET subjects that you did NOT study in your Class 12 board exams.",
      byWhen: "2026-10-25T23:59:00",
      urgency: "MEDIUM",
      actionType: "Preference Form",
      linkUrl: "https://admission.uod.ac.in"
    },
    deadlines: [
      { event: "CUET Normalized NTA Scorecards Released", date: "2026-07-28", status: "completed" },
      { event: "DU CSAS Phase 2 Course-College Preferences Window", date: "2026-10-25", status: "urgent", isNext: true },
      { event: "Simulated Ranks Declaration", date: "2026-10-28", status: "upcoming" },
      { event: "First CSAS Allocation List", date: "2026-11-02", status: "upcoming" }
    ],
    documentsRequired: [
      { name: "Class 10 & 12 Board Marksheet", purpose: "Tie-breaker and eligibility", format: "PDF", critical: true },
      { name: "CUET UG Scorecard", purpose: "Subject percentiles & scores", format: "PDF", critical: true },
      { name: "EWS / Caste Certificate", purpose: "Reservation category verification", format: "Central format issued after 31 March 2025", critical: true }
    ],
    counsellingRounds: [
      { round: 1, name: "CSAS Round 1 Allocation", date: "Nov 02, 2026", desc: "First round of allocations based on CUET merit score." },
      { round: 2, name: "CSAS Round 2 Allocation", date: "Nov 10, 2026", desc: "Upgrade window for opted candidates." },
      { round: 3, name: "Spot Admission Round", date: "Nov 20, 2026", desc: "Open rounds for residual seats across colleges." }
    ],
    faqs: [
      { q: "What is the DU Tie-Breaking Rule?", a: "If two candidates have the same CUET score, DU considers higher percentage of aggregate marks in best 3 subjects of Class 12, then best 4, then best 5, then age of candidate." }
    ]
  },
  {
    id: "kcet-2026",
    code: "KCET-2026",
    name: "KCET 2026 - Karnataka Common Entrance Test",
    shortName: "KCET 2026",
    conductingBody: "Karnataka Examination Authority (KEA)",
    ministry: "Dept of Higher Education, Govt of Karnataka",
    category: "State Engineering & Agriculture",
    level: "State",
    stream: "Engineering",
    status: "Document Verification Clause B/C",
    badgeColor: "amber",
    description: "State level entrance exam for admission into Government and Private quota engineering, architecture, farm science, and veterinary colleges in Karnataka.",
    officialPortal: "https://cetonline.karnataka.gov.in/kea",
    eligibility: {
      min12thPercentage: 45,
      scStPercentage: 40,
      requiredSubjects: ["Physics", "Mathematics", "Chemistry/Bio/CS"],
      ageLimit: "No upper age limit",
      maxAttempts: "No limit",
      domicileRequired: true,
      eligibilityClauses: "Clause A: Studied 7 years in Karnataka including 10th or 12th"
    },
    counsellingBody: "Karnataka Examination Authority (KEA)",
    counsellingPortal: "https://cetonline.karnataka.gov.in/kea",
    nextAction: {
      title: "Download Verification Slip using Secret Key",
      whyItMatters: "Without the BEO/DDPU verified Secret Key from the verification slip, option entry portal access is strictly disabled.",
      byWhen: "2026-10-23T16:00:00",
      urgency: "HIGH",
      actionType: "Security Key Download",
      linkUrl: "https://cetonline.karnataka.gov.in/kea"
    },
    deadlines: [
      { event: "Rank Card Release", date: "2026-06-01", status: "completed" },
      { event: "BEO Study Certificate Verification Slip", date: "2026-10-23", status: "urgent", isNext: true },
      { event: "Mock Allotment Option Entry", date: "2026-10-26", status: "upcoming" },
      { event: "Round 1 Real Seat Allotment", date: "2026-10-30", status: "upcoming" }
    ],
    documentsRequired: [
      { name: "7 Years Study Certificate counter-signed by BEO/DDPU", purpose: "Domicile & Local Candidate Proof", format: "Original with official seal", critical: true, warning: "Principal signature alone is NOT accepted. Must have BEO counter-signature." },
      { name: "Rural / Kannada Medium Certificate", purpose: "Special Reservation Claim (15% Rural, 5% KM)", format: "Form 1 & 2 signed by BEO", critical: false },
      { name: "Income & Caste Certificate (RD Number)", purpose: "Category 1, 2A, 2B, 3A, 3B, SC, ST claim", format: "Valid 15-digit RD Number from Nadakacheri portal", critical: true }
    ],
    counsellingRounds: [
      { round: 1, name: "Round 1 Choice Options", date: "Oct 26 - Oct 30, 2026", desc: "Choice 1 (Satisfied & exit), Choice 2 (Hold & upgrade), Choice 3 (Surrender & upgrade), Choice 4 (Exit)." },
      { round: 2, name: "Round 2 Allotment", date: "Nov 04 - Nov 10, 2026", desc: "Second round seat matrix update." },
      { round: 3, name: "Mop-up Round", date: "Nov 15, 2026", desc: "Final offline/online counseling for unfilled seats." }
    ],
    faqs: [
      { q: "What is Choice 2 in KCET?", a: "Choice 2 means: I am satisfied with the allotted seat, but wish to participate in Round 2 for higher options. If a higher option is allotted, my previous seat is automatically cancelled." }
    ]
  },
  {
    id: "mht-cet-2026",
    code: "MHT-CET",
    name: "MHT CET 2026 - Maharashtra Common Entrance Test",
    shortName: "MHT CET 2026",
    conductingBody: "State Common Entrance Test Cell, Maharashtra",
    ministry: "Higher & Technical Education Dept, Govt of Maharashtra",
    category: "State Engineering & Tech",
    level: "State",
    stream: "Engineering",
    status: "CAP Round 1 Option Form",
    badgeColor: "orange",
    description: "State level entrance exam for engineering (B.Tech), pharmacy (B.Pharm), and agricultural technology across institutes in Maharashtra.",
    officialPortal: "https://cetcell.mahacet.org",
    eligibility: {
      min12thPercentage: 45,
      scStPercentage: 40,
      requiredSubjects: ["Physics", "Mathematics", "Chemistry/Biology"],
      ageLimit: "No age limit",
      maxAttempts: "No limit",
      domicileRequired: true
    },
    counsellingBody: "State CET Cell (Centralized Admission Process - CAP)",
    counsellingPortal: "https://fe2026.mahacet.org",
    nextAction: {
      title: "Upload Non-Creamy Layer (NCL) Certificate & Validity",
      whyItMatters: "In Maharashtra CAP, caste certificate without Caste Validity Certificate (CVC) and NCL valid up to 31st March 2026 causes immediate conversion to Open category.",
      byWhen: "2026-10-26T17:00:00",
      urgency: "HIGH",
      actionType: "Certificate Submission",
      linkUrl: "https://cetcell.mahacet.org"
    },
    deadlines: [
      { event: "Final Merit List Display", date: "2026-10-18", status: "completed" },
      { event: "CAP Round 1 Online Submission of Option Form", date: "2026-10-26", status: "urgent", isNext: true },
      { event: "Provisional Allotment of CAP Round 1", date: "2026-10-29", status: "upcoming" }
    ],
    documentsRequired: [
      { name: "Maharashtra Domicile Certificate", purpose: "State candidate status", format: "Tehsildar issued", critical: true },
      { name: "Caste Validity Certificate (CVC)", purpose: "Verification of genuine caste claim", format: "Divisional Caste Scrutiny Committee", critical: true }
    ],
    counsellingRounds: [
      { round: 1, name: "CAP Round 1", date: "Oct 26 - Nov 02, 2026", desc: "Auto-freeze applies if 1st preference is allotted." },
      { round: 2, name: "CAP Round 2", date: "Nov 06 - Nov 12, 2026", desc: "Betterment allocation." },
      { round: 3, name: "CAP Round 3", date: "Nov 16 - Nov 22, 2026", desc: "Final centralized CAP round." }
    ],
    faqs: [
      { q: "What is Auto-Freeze in MHT CET CAP?", a: "If a candidate is allotted their First Preference seat, it is AUTO-FROZEN. The student MUST accept the seat, pay the seat acceptance fee, and report to college. They are not eligible for subsequent rounds." }
    ]
  },
  {
    id: "upsc-cse-2026",
    code: "UPSC-CSE",
    name: "Civil Services Examination (CSE) 2026",
    shortName: "UPSC CSE 2026",
    conductingBody: "Union Public Service Commission (UPSC)",
    ministry: "Ministry of Personnel, Public Grievances and Pensions",
    category: "All India Civil Services",
    level: "National",
    stream: "Civil Services",
    status: "DAF-I Detailed Application Submission",
    badgeColor: "rose",
    description: "Premier national competitive examination for recruitment to IAS, IPS, IFS, IRS, and Group 'A' & 'B' Central Civil Services.",
    officialPortal: "https://upsc.gov.in",
    eligibility: {
      min12thPercentage: 0,
      degreeRequired: "Bachelor's Degree from a recognized University",
      ageLimit: "21 to 32 years (Relaxations: OBC +3 yrs, SC/ST +5 yrs, PwBD +10 yrs)",
      maxAttempts: "General: 6, OBC: 9, SC/ST: Unlimited (within age limit)",
      domicileRequired: false
    },
    counsellingBody: "DoPT Service Allocation & UPSC Interview Board",
    counsellingPortal: "https://upsconline.nic.in",
    nextAction: {
      title: "Submit DAF-I (Detailed Application Form) with Educational Proofs",
      whyItMatters: "Failure to submit DAF-I within the prescribed window leads to cancellation of CSE Mains candidature with no recourse.",
      byWhen: "2026-10-28T18:00:00",
      urgency: "HIGH",
      actionType: "DAF Submission",
      linkUrl: "https://upsconline.nic.in"
    },
    deadlines: [
      { event: "CSE Prelims Result Declaration", date: "2026-07-01", status: "completed" },
      { event: "DAF-I Online Portal Closing", date: "2026-10-28", status: "urgent", isNext: true },
      { event: "CSE Mains Examination", date: "2026-11-20", status: "upcoming" }
    ],
    documentsRequired: [
      { name: "Degree Completion Certificate / Provisional Degree", purpose: "Graduation eligibility proof", format: "University Registrar seal", critical: true },
      { name: "Government Photo ID (Aadhaar / Voter ID / Passport)", purpose: "Identity match with Prelims admit card", format: "Original color copy", critical: true }
    ],
    counsellingRounds: [
      { round: 1, name: "Personality Test (Interview)", date: "Jan - March 2027", desc: "Board interview at Dholpur House, New Delhi." },
      { round: 2, name: "Medical Board Examination", date: "Post Interview", desc: "Designated central government hospital physical evaluation." },
      { round: 3, name: "Service & Cadre Allocation", date: "April 2027", desc: "Final service allocation (IAS/IPS/IFS/IRS) based on merit rank." }
    ],
    faqs: [
      { q: "Can final year college students appear for UPSC CSE?", a: "Yes, candidates appearing in their final degree examination can apply for Prelims, but must produce proof of passing when filling DAF-I for Mains." }
    ]
  },
  {
    id: "gate-2026",
    code: "GATE-2026",
    name: "GATE 2026 - Graduate Aptitude Test in Engineering",
    shortName: "GATE 2026",
    conductingBody: "Indian Institute of Science (IISc) / IITs",
    ministry: "Ministry of Education, Govt. of India",
    category: "Postgraduate & PSU Recruitment",
    level: "National",
    stream: "Engineering / Technology / Science",
    status: "COAP & CCMT Round Registrations",
    badgeColor: "indigo",
    description: "National examination for admission to Master's & Doctoral programs (M.Tech/M.S./Ph.D.) in IITs, IISc, NITs, and premier PSU recruitments (ONGC, IOCL, NTPC, BHEL).",
    officialPortal: "https://gate2026.iisc.ac.in",
    eligibility: {
      degreeRequired: "B.E. / B.Tech / B.Arch or currently in 3rd or higher year",
      ageLimit: "No age limit",
      maxAttempts: "No limit",
      domicileRequired: false
    },
    counsellingBody: "COAP (for IITs) & CCMT (for NITs/IIITs)",
    counsellingPortal: "https://coap.iitd.ac.in",
    nextAction: {
      title: "Register on Common Offer Acceptance Portal (COAP)",
      whyItMatters: "IIT M.Tech admissions are published exclusively on COAP. If you apply to individual IITs without linking your COAP registration number, your applications remain void.",
      byWhen: "2026-10-30T17:00:00",
      urgency: "MEDIUM",
      actionType: "Portal Registration",
      linkUrl: "https://coap.iitd.ac.in"
    },
    deadlines: [
      { event: "GATE Scorecard Download Closes", date: "2026-05-31", status: "completed" },
      { event: "COAP Common Portal Final Round", date: "2026-10-30", status: "urgent", isNext: true },
      { event: "Spot Round / Internal Sliding", date: "2026-11-10", status: "upcoming" }
    ],
    documentsRequired: [
      { name: "Valid GATE Scorecard", purpose: "Score verification", format: "Official PDF with QR", critical: true },
      { name: "B.Tech Consolidated Marks / Degree", purpose: "Degree qualification", format: "PDF", critical: true }
    ],
    counsellingRounds: [
      { round: 1, name: "Round 1 Offers", date: "Oct 15, 2026", desc: "Accept & Freeze, Retain & Wait, Reject & Wait options." },
      { round: 2, name: "Round 2 Offers", date: "Oct 22, 2026", desc: "Second window for offer confirmation." }
    ],
    faqs: [
      { q: "What is Retain & Wait in COAP?", a: "You accept an offer temporarily to keep it safe while waiting for a higher preferred offer in subsequent rounds. You can retain a specific offer maximum twice." }
    ]
  }
];

export const ALL_CONDUCTING_BODIES = [
  "All",
  "National Testing Agency (NTA)",
  "JoSAA / CSAB",
  "MCC (Medical Counselling Committee)",
  "Karnataka Examination Authority (KEA)",
  "State CET Cell Maharashtra",
  "Union Public Service Commission (UPSC)",
  "IISc / IITs"
];

export const ALL_STREAMS = [
  "All Streams",
  "Engineering",
  "Medical",
  "Arts, Science & Commerce",
  "Civil Services",
  "Postgraduate & PSU"
];
