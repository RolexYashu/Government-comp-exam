import { EXAMS_DATA } from "../data/examsData";

export function evaluateStudentEligibility(profile, exam) {
  const audit = {
    examId: exam.id,
    examCode: exam.code,
    examName: exam.name,
    isEligible: true,
    status: "ELIGIBLE", // ELIGIBLE | CAUTION | INELIGIBLE
    percentageCheck: { passed: true, studentVal: profile.twelfthPercentage, requiredVal: 0, message: "" },
    subjectCheck: { passed: true, missing: [], message: "" },
    categoryCheck: { passed: true, note: "" },
    domicileCheck: { passed: true, note: "" },
    remedySteps: []
  };

  const isScSt = profile.category === "SC" || profile.category === "ST";
  const isObc = profile.category === "OBC-NCL";
  const isEws = profile.category === "General-EWS";

  // 1. Check percentage
  const requiredPct = isScSt 
    ? (exam.eligibility.scStPercentage || exam.eligibility.min12thPercentage)
    : (exam.eligibility.min12thPercentage || 0);
  
  audit.percentageCheck.requiredVal = requiredPct;

  if (profile.twelfthPercentage < requiredPct) {
    audit.isEligible = false;
    audit.status = "INELIGIBLE";
    audit.percentageCheck.passed = false;
    audit.percentageCheck.message = `Your 12th score (${profile.twelfthPercentage}%) is below the required ${requiredPct}% for ${profile.category} category.`;
    audit.remedySteps.push("Consider improvement exam or verify if your board's Top 20 percentile cutoff is lower than 75%.");
  } else {
    audit.percentageCheck.message = `Meets the minimum requirement of ${requiredPct}% for ${profile.category} candidates.`;
  }

  // 2. Check stream & subjects
  const stream = profile.twelfthStream || "";
  if (exam.stream === "Engineering") {
    if (!stream.includes("PCM") && !stream.includes("Math")) {
      audit.isEligible = false;
      audit.status = "INELIGIBLE";
      audit.subjectCheck.passed = false;
      audit.subjectCheck.message = "Mathematics and Physics in Class 12 are strictly mandatory for Engineering entrance.";
      audit.remedySteps.push("Can only register for Architecture/Planning Paper 2 if eligible, or pursue non-engineering technical streams.");
    } else {
      audit.subjectCheck.message = "Class 12 subject combination (Physics & Mathematics) verified.";
    }
  } else if (exam.stream === "Medical") {
    if (!stream.includes("PCB") && !stream.includes("Bio")) {
      audit.isEligible = false;
      audit.status = "INELIGIBLE";
      audit.subjectCheck.passed = false;
      audit.subjectCheck.message = "Biology / Biotechnology in Class 12 is mandatory for MBBS/BDS admissions.";
      audit.remedySteps.push("NMC now allows Biology as an additional subject passed after 12th board; check additional subject eligibility.");
    } else {
      audit.subjectCheck.message = "Mandatory Biology, Physics, and Chemistry combination verified.";
    }
  }

  // 3. Category & Certificate validity check
  if (isObc) {
    audit.categoryCheck.note = "OBC-NCL candidates must upload certificate issued on or after 01-April-2025 in Govt of India format. State certificates will be converted to General.";
    if (audit.status === "ELIGIBLE") {
      audit.status = "CAUTION";
      audit.remedySteps.push("Verify OBC-NCL certificate issue date: Must be dated on/after April 1, 2025.");
    }
  } else if (isEws) {
    audit.categoryCheck.note = "EWS certificate must be based on FY 2024-25 family income and valid for admission year 2025-26.";
    if (audit.status === "ELIGIBLE") {
      audit.status = "CAUTION";
      audit.remedySteps.push("Confirm EWS certificate financial year validity (valid for 2025-2026).");
    }
  }

  // 4. State Domicile check
  if (exam.id === "kcet-2026") {
    if (profile.stateOfEligibility !== "Karnataka") {
      audit.isEligible = false;
      audit.status = "INELIGIBLE";
      audit.domicileCheck.passed = false;
      audit.domicileCheck.note = "KCET Government and Aided seats are strictly restricted to Karnataka Domicile (Clauses A to O).";
      audit.remedySteps.push("Non-Karnataka candidates can participate in COMEDK UGET for private engineering colleges.");
    } else {
      audit.domicileCheck.note = "Karnataka State Domicile verified. Eligible for 100% Govt and Aided seats.";
    }
  } else if (exam.id === "mht-cet-2026") {
    if (profile.stateOfEligibility !== "Maharashtra") {
      audit.status = "CAUTION";
      audit.domicileCheck.note = "Non-Maharashtra candidates will be considered under All India Candidature based on JEE Main scores.";
    } else {
      audit.domicileCheck.note = "Maharashtra State Candidature Type A/B/C applicable.";
    }
  }

  return audit;
}

export function auditAllExams(profile) {
  return EXAMS_DATA.map(exam => evaluateStudentEligibility(profile, exam));
}
