export const SAMPLE_NOTIFICATIONS = [
  {
    id: "notif-josaa-obc",
    title: "NTA / JoSAA Official Public Notice: Validity of OBC-NCL and GEN-EWS Certificates for Central Admissions 2026",
    issuer: "Joint Implementation Committee (JoSAA / CSAB 2026)",
    date: "October 14, 2026",
    badge: "Crucial Category Rule",
    rawText: `PUBLIC NOTICE: REQUISITE CERTIFICATES FOR CANDIDATES CLAIMING RESERVATION UNDER OBC-NCL AND GEN-EWS CATEGORIES FOR JoSAA/CSAB-2026 COUNSELLING.
It is hereby notified for the information of all candidates seeking admission to Indian Institutes of Technology (IITs), National Institutes of Technology (NITs), Indian Institutes of Information Technology (IIITs) and other Centrally Funded Technical Institutions (CFTIs) through JoSAA-2026 that:
1. In accordance with Office Memorandum No. 36033/1/2013-Estt. (Res.) of the Department of Personnel and Training (DoPT), Govt. of India, candidates claiming benefit under OBC-NCL must upload a certificate issued ON OR AFTER 01st April 2025. Certificates issued prior to 01-04-2025 shall NOT be entertained under any circumstances during online document verification.
2. The OBC-NCL certificate must specifically mention that the candidate does not belong to the Creamy Layer section as per DoPT guidelines, and the caste must be listed in the Central List of Other Backward Classes available at ncbc.nic.in. State list certificates lacking central listing will result in immediate re-categorization to OPEN/GEN category.
3. For GEN-EWS candidates, the certificate must be based on the gross annual family income of the financial year 2024-2025 and must be valid for the year 2025-2026.
4. Candidates unable to furnish the valid certificate at the time of online document verification must upload a duly signed 'Undertaking for Category Certificate (Annexure IV)' pledging to produce the valid certificate before Round 5 reporting. Failure to comply shall cause permanent forfeiture of reserved seat allocation without refund of Seat Acceptance Fee (₹35,000).`,
    aiDecoded: {
      plainSummary: "If you applied under OBC-NCL or EWS for IITs/NITs, your certificate MUST have been issued on or after April 1, 2025. It must be in the Central Government format. If your certificate is older, you must immediately upload the official Undertaking form (Annexure IV), or your seat will be cancelled and you will be changed to General.",
      vernacularSummary: "यदि आप JoSAA में OBC-NCL या EWS आरक्षण का दावा कर रहे हैं, तो आपका प्रमाण पत्र 1 अप्रैल 2025 के बाद जारी होना चाहिए। यदि यह पुराना है, तो तुरंत 'अंडरटेकिंग फॉर्म' अपलोड करें, अन्यथा आपकी आरक्षित सीट रद्द कर दी जाएगी।",
      criticalDeadlines: [
        "Upload valid certificate or Annexure IV Undertaking before JoSAA Round 1 verification ends (Oct 29, 2026)",
        "Final deadline to produce original renewed certificate: Before Round 5 reporting"
      ],
      warnings: [
        "State-level OBC certificates not in the Central NCBC list are strictly rejected.",
        "Failure to submit valid certificate or undertaking results in permanent cancellation and loss of ₹35,000 fee."
      ],
      studentChecklist: [
        "Check your certificate issue date: Is it on or after 01-04-2025?",
        "Verify your caste name exists on ncbc.nic.in Central List",
        "If certificate is older, download Annexure IV Undertaking from JoSAA portal, sign it, and upload today."
      ]
    }
  },
  {
    id: "notif-mcc-security",
    title: "MCC Notice: Security Deposit Forfeiture & Round 2 Free Exit Discontinuation Protocol",
    issuer: "Medical Counselling Committee (MCC), DGHS",
    date: "October 16, 2026",
    badge: "Financial Penalty Alert",
    rawText: `NOTICE REGARDING ELIGIBILITY AND FORFEITURE RULES FOR ROUND-2 AND ROUND-3 OF NEET-UG 2026 COUNSELLING.
All NEET UG candidates participating in the 15% All India Quota, 100% Deemed Universities, and Central Universities counselling conducted by MCC are informed of the following statutory rules:
1. 'Free Exit' is permissible ONLY in Round 1. If a candidate is allotted a seat in Round 1 and does not report, their security deposit (₹10,000 for AIQ Govt colleges or ₹2,00,000 for Deemed Universities) will NOT be forfeited.
2. In Round 2, if a candidate is allotted a seat and fails to report/join, 'Exit with Forfeiture' shall apply. The refundable security deposit will be forfeited. The candidate must register fresh with a new security deposit to enter Round 3.
3. Once a candidate joins the allotted seat in Round 2 or Round 3, they will NOT be allowed to resign or participate in any further counselling rounds including State Quota counselling. Their name will be shared with all State Counselling Authorities to prevent seat blocking.`,
    aiDecoded: {
      plainSummary: "You can walk away from Round 1 without penalty. But in Round 2, if you get a seat and don't join, your deposit (₹10,000 or ₹2,00,000 for Deemed) is permanently lost! If you join a seat in Round 2, you are permanently locked and cannot join State Quota.",
      vernacularSummary: "राउंड 1 में सीट न लेने पर कोई जुर्माना नहीं है। लेकिन राउंड 2 में सीट मिलने पर यदि आप एडमिशन नहीं लेते, तो आपकी ₹10,000 या ₹2,00,000 की सिक्योरिटी डिपाजिट जब्त हो जाएगी।",
      criticalDeadlines: [
        "Round 1 Free Exit declaration window: Ends 2 days before Round 2 seat matrix release",
        "Round 2 Joining deadline: Strict compliance required to avoid forfeiture"
      ],
      warnings: [
        "Exit with Forfeiture means ₹10,000 (Govt) or ₹2,00,000 (Deemed) is forfeited immediately if you refuse an allotted seat in Round 2.",
        "Joined candidates are barred from all State counselling to stop seat-blocking."
      ],
      studentChecklist: [
        "Only fill college choices in Round 2 that you are 100% willing to join.",
        "Do not fill unwanted private or high-fee deemed colleges as back-up.",
        "Confirm if you prefer State Quota Round 1 before joining MCC Round 2."
      ]
    }
  },
  {
    id: "notif-cuet-du-csas",
    title: "University of Delhi CSAS (UG) 2026: Mandatory Class 12 Subject Mapping Clause 3.1",
    issuer: "Dean of Admissions, University of Delhi",
    date: "October 18, 2026",
    badge: "Eligibility Disqualification Trap",
    rawText: `CLARIFICATION ON SUBJECT MAPPING AND PROGRAM SPECIFIC ELIGIBILITY FOR ADMISSION TO UNDERGRADUATE PROGRAMS 2026-27.
The University of Delhi reiterates that for all undergraduate programs under CSAS(UG)-2026:
1. Candidates must appear in CUET(UG) only in those subjects in which they have passed Class XII board examinations.
2. In case a candidate appeared in CUET in a subject that they did not pass or study in Class XII, the score of that subject will NOT be considered under any circumstances. If a candidate maps an unstudied subject during Phase 2 preference filing, the application for that specific program shall be treated as ineligible during seat allocation.
3. For B.Com (Hons), Mathematics/Applied Mathematics or Accountancy is mandatory in both Class XII and CUET. Candidates who did not take either in Class 12 cannot be allotted B.Com (Hons) even if they scored 100 percentile in general test.`,
    aiDecoded: {
      plainSummary: "Delhi University has a strict rule: you cannot use CUET scores for subjects you did not actually study in Class 12. If you took Economics in CUET but were a pure Science student without Economics in Class 12, DU will not count that score. Check your subject mapping before submitting your preference list.",
      vernacularSummary: "दिल्ली विश्वविद्यालय में केवल उन्हीं CUET विषयों के अंक मान्य होंगे जो आपने 12वीं बोर्ड में पढ़े और पास किए हैं। गलत मैपिंग करने पर आपका फॉर्म निरस्त हो जाएगा।",
      criticalDeadlines: [
        "CSAS Phase 2 Subject Mapping Confirmation: Closes Oct 25, 2026 at 23:59 IST"
      ],
      warnings: [
        "Mapping an unstudied subject will lead to silent disqualification for all choices under that program.",
        "For B.Com (Hons), Maths or Accountancy in 12th is non-negotiable."
      ],
      studentChecklist: [
        "Cross-check your Class 12 board marksheet against the subjects mapped on CSAS portal.",
        "Delete program preferences that require prerequisites you did not take in Class 12.",
        "Save and confirm your final preference list before the deadline."
      ]
    }
  }
];
