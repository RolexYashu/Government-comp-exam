import React, { useState } from 'react';
import { 
  User, 
  BookOpen, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldAlert, 
  Sparkles, 
  ArrowRight, 
  RotateCcw,
  SlidersHorizontal,
  Award,
  HelpCircle,
  MapPin,
  GraduationCap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { auditAllExams, evaluateStudentEligibility } from '../utils/eligibilityEngine';
import { EXAMS_DATA } from '../data/examsData';

export default function ProfileEligibilityWizard({ 
  currentProfile, 
  setCurrentProfile, 
  setCurrentTab 
}) {
  const [formData, setFormData] = useState({
    name: currentProfile.name || '',
    category: currentProfile.category || 'General',
    stateOfEligibility: currentProfile.stateOfEligibility || 'Karnataka',
    dob: currentProfile.dob || '2008-01-01',
    tenthPercentage: currentProfile.tenthPercentage || 85,
    twelfthStatus: currentProfile.twelfthStatus || 'Passed',
    twelfthStream: currentProfile.twelfthStream || 'PCM (Physics, Chemistry, Maths)',
    twelfthPercentage: currentProfile.twelfthPercentage || 82,
    physics: currentProfile.subjects?.physics || 80,
    chemistry: currentProfile.subjects?.chemistry || 80,
    mathematics: currentProfile.subjects?.mathematics || 80,
    biology: currentProfile.subjects?.biology || 75,
    targetExams: currentProfile.targetExams || ['jee-main-2026']
  });

  const [activeStep, setActiveStep] = useState(1);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Real-time audit based on current unsaved form inputs
  const simulatedProfile = {
    ...currentProfile,
    name: formData.name,
    category: formData.category,
    stateOfEligibility: formData.stateOfEligibility,
    twelfthPercentage: Number(formData.twelfthPercentage),
    twelfthStream: formData.twelfthStream,
    subjects: {
      physics: Number(formData.physics),
      chemistry: Number(formData.chemistry),
      mathematics: Number(formData.mathematics),
      biology: Number(formData.biology)
    }
  };

  const auditResults = auditAllExams(simulatedProfile);
  const eligibleCount = auditResults.filter(a => a.isEligible).length;

  const handleSaveProfile = (e) => {
    e.preventDefault();
    const updated = {
      ...currentProfile,
      name: formData.name,
      category: formData.category,
      stateOfEligibility: formData.stateOfEligibility,
      dob: formData.dob,
      tenthPercentage: Number(formData.tenthPercentage),
      twelfthStatus: formData.twelfthStatus,
      twelfthPercentage: Number(formData.twelfthPercentage),
      twelfthStream: formData.twelfthStream,
      subjects: {
        physics: Number(formData.physics),
        chemistry: Number(formData.chemistry),
        mathematics: Number(formData.mathematics),
        biology: Number(formData.biology)
      },
      targetExams: formData.targetExams
    };

    setCurrentProfile(updated);
    setSaveSuccess(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      setCurrentTab('dashboard');
    }, 1500);
  };

  const toggleTargetExam = (examId) => {
    if (formData.targetExams.includes(examId)) {
      setFormData({
        ...formData,
        targetExams: formData.targetExams.filter(id => id !== examId)
      });
    } else {
      setFormData({
        ...formData,
        targetExams: [...formData.targetExams, examId]
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Title */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
            Automated Governance Engine
          </span>
          <span className="text-xs text-slate-500">• Real-Time Legal & Academic Verification</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900">
          Student Profile & Real-Time Eligibility Wizard
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl">
          Enter your academic credentials and reservation category. Our automated audit engine instantly cross-references your qualifications against statutory guidelines of JoSAA, MCC, NTA, and State DTEs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Form Steps */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
          
          {/* Step Indicator Tabs */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            {[
              { num: 1, title: 'Category & Domicile' },
              { num: 2, title: 'Academic Scores' },
              { num: 3, title: 'Target Admissions' }
            ].map((s) => (
              <button
                key={s.num}
                onClick={() => setActiveStep(s.num)}
                className={`flex items-center space-x-2 text-xs font-bold transition-all ${
                  activeStep === s.num 
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1 font-extrabold' 
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${
                  activeStep === s.num ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {s.num}
                </span>
                <span className="hidden sm:inline">{s.title}</span>
              </button>
            ))}
          </div>

          <form onSubmit={handleSaveProfile} className="space-y-6">
            
            {/* Step 1: Personal, Category & Domicile */}
            {activeStep === 1 && (
              <div className="space-y-4 animate-in fade-in duration-150">
                <h3 className="font-bold text-slate-900 text-base flex items-center space-x-2">
                  <User className="w-4 h-4 text-blue-600" />
                  <span>Student Identity & Reservation Quota</span>
                </h3>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Student Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Category */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Reservation Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="General">General / Open</option>
                      <option value="OBC-NCL">OBC-NCL (Non-Creamy Layer)</option>
                      <option value="General-EWS">General-EWS (Economically Weaker Section)</option>
                      <option value="SC">Scheduled Caste (SC)</option>
                      <option value="ST">Scheduled Tribe (ST)</option>
                      <option value="PwD">Persons with Benchmark Disability (PwD)</option>
                    </select>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Must match valid Government of India Central List certificate format.
                    </p>
                  </div>

                  {/* Domicile / State of Eligibility */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      State Domicile / 12th Board State
                    </label>
                    <select
                      value={formData.stateOfEligibility}
                      onChange={(e) => setFormData({ ...formData, stateOfEligibility: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="Karnataka">Karnataka (Eligible for KCET)</option>
                      <option value="Maharashtra">Maharashtra (Eligible for MHT-CET)</option>
                      <option value="Delhi (NCT)">Delhi (NCT)</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Other State">Other State</option>
                    </select>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Determines Home-State quota (50% in NITs, 85% in State Medical).
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setActiveStep(2)}
                    className="flex items-center space-x-1.5 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors"
                  >
                    <span>Proceed to Academic Scores</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Academic Scores */}
            {activeStep === 2 && (
              <div className="space-y-4 animate-in fade-in duration-150">
                <h3 className="font-bold text-slate-900 text-base flex items-center space-x-2">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  <span>Class 10 & 12 Board Qualifications</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Class 10th Aggregate (% or CGPA x 9.5)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="35"
                      max="100"
                      value={formData.tenthPercentage}
                      onChange={(e) => setFormData({ ...formData, tenthPercentage: e.target.value })}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Class 12th Stream / Subject Combo
                    </label>
                    <select
                      value={formData.twelfthStream}
                      onChange={(e) => setFormData({ ...formData, twelfthStream: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="PCM (Physics, Chemistry, Maths)">PCM (Engineering Eligibility)</option>
                      <option value="PCB (Physics, Chemistry, Biology)">PCB (Medical / Dental Eligibility)</option>
                      <option value="PCMB (All Four)">PCMB (Dual Eligibility)</option>
                      <option value="Commerce with Maths">Commerce with Maths (CUET DU Eligibility)</option>
                      <option value="Arts / Humanities">Arts / Humanities</option>
                    </select>
                  </div>
                </div>

                {/* 12th Aggregate Percentage with Slider */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-800 uppercase">
                      Class 12th Aggregate Percentage: <span className="text-blue-600 font-mono text-base">{formData.twelfthPercentage}%</span>
                    </label>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                      Number(formData.twelfthPercentage) >= 75 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : Number(formData.twelfthPercentage) >= 65 && (formData.category === 'SC' || formData.category === 'ST')
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                    }`}>
                      {Number(formData.twelfthPercentage) >= 75 ? '✓ JoSAA 75% Qualified' : '⚠ Caution for JoSAA Gen/OBC'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="100"
                    step="0.5"
                    value={formData.twelfthPercentage}
                    onChange={(e) => setFormData({ ...formData, twelfthPercentage: e.target.value })}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>40% Pass</span>
                    <span>50% NEET Min</span>
                    <span>65% SC/ST JoSAA</span>
                    <span>75% Gen JoSAA</span>
                    <span>100% Max</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveStep(1)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveStep(3)}
                    className="flex items-center space-x-1.5 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors"
                  >
                    <span>Proceed to Target Exams</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Target Exams Selection */}
            {activeStep === 3 && (
              <div className="space-y-4 animate-in fade-in duration-150">
                <h3 className="font-bold text-slate-900 text-base flex items-center space-x-2">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>Select Admissions to Track on Your Dashboard</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {EXAMS_DATA.map((exam) => {
                    const isSelected = formData.targetExams.includes(exam.id);
                    const audit = evaluateStudentEligibility(simulatedProfile, exam);

                    return (
                      <div
                        key={exam.id}
                        onClick={() => toggleTargetExam(exam.id)}
                        className={`p-3.5 rounded-xl border text-xs cursor-pointer transition-all flex items-start space-x-3 ${
                          isSelected 
                            ? 'bg-blue-50/70 border-blue-400 shadow-sm' 
                            : 'bg-white border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => {}}
                          className="mt-0.5 accent-blue-600 rounded"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-slate-900">{exam.shortName}</span>
                            <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                              audit.isEligible ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {audit.isEligible ? 'Eligible' : 'Check Criteria'}
                            </span>
                          </div>
                          <p className="text-slate-500 text-[11px] mt-0.5">{exam.conductingBody}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setActiveStep(2)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-xs hover:shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all shadow-md"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Save Profile & Generate Action Plan</span>
                  </button>
                </div>
              </div>
            )}

          </form>

          {saveSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-bold rounded-xl flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Profile updated! Redirecting to personalized dashboard...</span>
            </div>
          )}

        </div>

        {/* Right Column: Real-Time Automated Eligibility Audit Inspector */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h3 className="font-bold text-sm tracking-wide text-white">
                  Real-Time Eligibility Audit
                </h3>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50">
                {eligibleCount} of {auditResults.length} Eligible
              </span>
            </div>

            <p className="text-xs text-slate-300">
              Live audit based on: <strong className="text-white">{formData.category}</strong> category, <strong className="text-white">{formData.stateOfEligibility}</strong> domicile, and <strong className="text-white">{formData.twelfthPercentage}%</strong> in 12th.
            </p>

            {/* Audit Result Cards */}
            <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
              {auditResults.map((audit) => (
                <div
                  key={audit.examId}
                  className={`p-3.5 rounded-xl border text-xs transition-all ${
                    audit.status === 'ELIGIBLE'
                      ? 'bg-emerald-950/30 border-emerald-800/40 text-emerald-200'
                      : audit.status === 'CAUTION'
                        ? 'bg-amber-950/30 border-amber-800/40 text-amber-200'
                        : 'bg-red-950/30 border-red-800/40 text-red-200'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold mb-1">
                    <span className="text-white">{audit.examName.split('-')[0]}</span>
                    <span className={`text-[10px] uppercase font-bold px-1.5 py-0.2 rounded ${
                      audit.status === 'ELIGIBLE' 
                        ? 'bg-emerald-500/20 text-emerald-300' 
                        : audit.status === 'CAUTION'
                          ? 'bg-amber-500/20 text-amber-300'
                          : 'bg-red-500/20 text-red-300'
                    }`}>
                      {audit.status}
                    </span>
                  </div>

                  <p className="text-[11px] opacity-90 leading-tight">
                    {audit.percentageCheck.message}
                  </p>

                  {audit.categoryCheck.note && (
                    <p className="text-[10px] text-amber-300 mt-1 font-medium">
                      ⚠️ {audit.categoryCheck.note}
                    </p>
                  )}

                  {audit.domicileCheck.note && (
                    <p className="text-[10px] text-blue-300 mt-0.5 font-medium">
                      📍 {audit.domicileCheck.note}
                    </p>
                  )}

                  {audit.remedySteps.length > 0 && (
                    <div className="mt-1 pt-1 border-t border-white/10 text-[10px] text-slate-300">
                      <strong>Remedy:</strong> {audit.remedySteps[0]}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-800">
              💡 <em>Changes update instantly to simulate live governance checks.</em>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
