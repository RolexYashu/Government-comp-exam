export const DEMO_PROFILES = [
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    role: "Engineering Aspirant (IIT / NIT Target)",
    tag: "High Merit OBC-NCL",
    category: "OBC-NCL",
    stateOfEligibility: "Karnataka",
    dob: "2008-04-14",
    tenthPercentage: 94.2,
    twelfthStatus: "Passed",
    twelfthPercentage: 91.8,
    twelfthStream: "PCM (Physics, Chemistry, Maths)",
    subjects: {
      physics: 92,
      chemistry: 89,
      mathematics: 95
    },
    targetExams: ["jee-main-2026", "kcet-2026"],
    examRanks: {
      "JEE-MAIN": "AIR 14,210 (OBC-NCL Rank: 2,840)",
      "KCET-2026": "Engineering Rank 412"
    },
    documents: [
      { id: "doc-1", name: "Class 10 Certificate (DOB)", status: "verified", date: "Uploaded Oct 10" },
      { id: "doc-2", name: "Class 12 Marksheet (91.8%)", status: "verified", date: "Uploaded Oct 10" },
      { id: "doc-3", name: "OBC-NCL Central Certificate", status: "attention_required", date: "Issued March 15, 2025", note: "Warning: Issued before April 1, 2025. Must renew or provide undertaking for JoSAA Round 1!" },
      { id: "doc-4", name: "Karnataka BEO Study Certificate", status: "verified", date: "Uploaded Oct 12" },
      { id: "doc-5", name: "Medical Fitness Certificate", status: "pending", date: "Awaiting doctor sign" }
    ],
    nextCriticalStep: {
      examCode: "JEE-MAIN",
      title: "Lock JoSAA Round 1 Preferences & Upload OBC Renewal Undertaking",
      whyItMatters: "JoSAA reporting portal will reject your category claim if the certificate is dated prior to April 1, 2025 without a signed undertaking form.",
      byWhen: "2026-10-24T17:00:00",
      urgency: "CRITICAL",
      actionUrl: "https://josaa.nic.in"
    }
  },
  {
    id: "rahul-verma",
    name: "Rahul Verma",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    role: "Medical Aspirant (MBBS / BDS Target)",
    tag: "SC Category AIQ Candidate",
    category: "SC",
    stateOfEligibility: "Maharashtra",
    dob: "2007-11-20",
    tenthPercentage: 88.5,
    twelfthStatus: "Passed",
    twelfthPercentage: 86.4,
    twelfthStream: "PCB (Physics, Chemistry, Biology)",
    subjects: {
      physics: 82,
      chemistry: 85,
      biology: 92
    },
    targetExams: ["neet-ug-2026", "mht-cet-2026"],
    examRanks: {
      "NEET-UG": "AIR 42,100 (SC Category Rank: 1,890)"
    },
    documents: [
      { id: "doc-1", name: "Class 10 Certificate", status: "verified", date: "Uploaded Oct 08" },
      { id: "doc-2", name: "Class 12 Marksheet", status: "verified", date: "Uploaded Oct 08" },
      { id: "doc-3", name: "SC Caste Certificate (Central)", status: "verified", date: "Permanent validity verified" },
      { id: "doc-4", name: "Maharashtra Domicile Certificate", status: "verified", date: "Tehsildar verified" },
      { id: "doc-5", name: "Caste Validity Certificate (CVC)", status: "pending", date: "Applied at Scrutiny Committee" }
    ],
    nextCriticalStep: {
      examCode: "NEET-UG",
      title: "Submit 15% AIQ Choices on MCC Portal",
      whyItMatters: "Your SC Category rank (1,890) guarantees top Government Medical Colleges (GMC Nagpur / GMC Bhopal) in Round 1 if choice order is prioritized accurately.",
      byWhen: "2026-10-27T18:00:00",
      urgency: "HIGH",
      actionUrl: "https://mcc.nic.in"
    }
  },
  {
    id: "ananya-iyer",
    name: "Ananya Iyer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    role: "Central University Aspirant (DU / BHU)",
    tag: "General-EWS Humanities/Commerce",
    category: "General-EWS",
    stateOfEligibility: "Delhi (NCT)",
    dob: "2008-01-09",
    tenthPercentage: 96.0,
    twelfthStatus: "Passed",
    twelfthPercentage: 95.4,
    twelfthStream: "Commerce with Maths",
    subjects: {
      mathematics: 95,
      economics: 98,
      accountancy: 94
    },
    targetExams: ["cuet-ug-2026"],
    examRanks: {
      "CUET-UG": "CUET Normalized Score: 782/800 (SRCC / Hindu Eligible)"
    },
    documents: [
      { id: "doc-1", name: "Class 10 Marksheet", status: "verified", date: "Uploaded Oct 11" },
      { id: "doc-2", name: "Class 12 Marksheet", status: "verified", date: "Uploaded Oct 11" },
      { id: "doc-3", name: "EWS Income & Asset Certificate", status: "verified", date: "Valid for FY 2025-26" },
      { id: "doc-4", name: "CUET Scorecard with QR Code", status: "verified", date: "Uploaded Oct 12" }
    ],
    nextCriticalStep: {
      examCode: "CUET-UG",
      title: "Review B.Com (Hons) Preference Hierarchy on DU CSAS",
      whyItMatters: "DU CSAS locks choices unconditionally tonight. Once locked, college preferences cannot be rearranged even in subsequent upgrade rounds.",
      byWhen: "2026-10-25T23:59:00",
      urgency: "CRITICAL",
      actionUrl: "https://admission.uod.ac.in"
    }
  }
];
