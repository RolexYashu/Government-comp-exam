import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  AlertTriangle, 
  Clock, 
  ExternalLink, 
  CheckCircle2, 
  ChevronRight, 
  FolderCheck, 
  Calendar, 
  Sparkles, 
  FileText, 
  Printer, 
  ShieldCheck, 
  ArrowUpRight,
  TrendingUp,
  AlertCircle,
  HelpCircle,
  UserCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { EXAMS_DATA } from '../data/examsData';

export default function Dashboard({ 
  currentProfile, 
  setCurrentProfile, 
  setCurrentTab, 
  openAiChat,
  setSelectedExamId
}) {
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 4, hours: 21, minutes: 58, seconds: 42 });

  // Live ticking countdown simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCompleteAction = () => {
    if (!taskCompleted) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
    setTaskCompleted(!taskCompleted);
  };

  // Filter exams pinned by current student
  const pinnedExams = EXAMS_DATA.filter(e => currentProfile.targetExams.includes(e.id));

  // Count verified documents
  const verifiedDocsCount = currentProfile.documents.filter(d => d.status === 'verified').length;
  const totalDocsCount = currentProfile.documents.length;
  const docReadinessPct = Math.round((verifiedDocsCount / totalDocsCount) * 100);

  const admissionStages = [
    { id: 1, title: 'Registration', status: 'completed' },
    { id: 2, title: 'Exam Taken', status: 'completed' },
    { id: 3, title: 'Rank Declared', status: 'completed' },
    { id: 4, title: 'Choice Filling', status: 'active' },
    { id: 5, title: 'Doc Verification', status: 'upcoming' },
    { id: 6, title: 'Seat Allotment', status: 'upcoming' },
    { id: 7, title: 'College Reporting', status: 'upcoming' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Student Profile Header Bar */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <img 
            src={currentProfile.avatar} 
            alt={currentProfile.name} 
            className="w-16 h-16 rounded-2xl object-cover border-2 border-blue-500 shadow-md"
          />
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-bold text-slate-900">{currentProfile.name}</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200">
                {currentProfile.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                Domicile: {currentProfile.stateOfEligibility}
              </span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">
              {currentProfile.role} • 12th Board: <strong className="text-slate-800">{currentProfile.twelfthPercentage}%</strong> ({currentProfile.twelfthStream})
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setCurrentTab('eligibility')}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            Edit Profile & Eligibility
          </button>
          <button 
            onClick={() => window.print()}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors border border-blue-200"
            title="Print or export current action plan"
          >
            <Printer className="w-4 h-4" />
            <span>Print Action Plan</span>
          </button>
        </div>
      </div>

      {/* CORE INNOVATION HIGHLIGHT: The Next Action Engine Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white p-6 sm:p-8 shadow-2xl border border-blue-500/30">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-6">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <span className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
                <Zap className="w-5 h-5" />
              </span>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                    Core Innovation: Priority Next Action Engine
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 animate-pulse">
                    CRITICAL ACTION
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Computed dynamically based on your profile ({currentProfile.category}), target portal, and live round phase.
                </p>
              </div>
            </div>

            {/* Countdown Badge */}
            <div className="bg-slate-800/90 border border-slate-700 rounded-2xl px-4 py-2 flex items-center space-x-3">
              <Clock className="w-4 h-4 text-emerald-400 animate-spin" style={{ animationDuration: '8s' }} />
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">Cutoff Deadline</p>
                <p className="text-sm font-mono font-bold text-emerald-400">
                  {timeLeft.days}d : {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
                </p>
              </div>
            </div>
          </div>

          {/* The 3 Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. What You Need To Do Next */}
            <div className="bg-slate-800/60 rounded-2xl p-5 border border-slate-700/80 space-y-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-400 flex items-center space-x-1.5">
                <span className="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-300 text-xs">1</span>
                <span>What to do next</span>
              </span>
              <p className="text-base font-bold text-white leading-snug">
                {currentProfile.nextCriticalStep.title}
              </p>
              <p className="text-xs text-slate-400 pt-1">
                Target Body: <strong className="text-slate-200">{currentProfile.nextCriticalStep.examCode}</strong>
              </p>
            </div>

            {/* 2. Why It Matters */}
            <div className="bg-slate-800/60 rounded-2xl p-5 border border-slate-700/80 space-y-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-blue-400 flex items-center space-x-1.5">
                <span className="w-5 h-5 rounded-full bg-blue-400/20 flex items-center justify-center text-blue-300 text-xs">2</span>
                <span>Why it matters</span>
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentProfile.nextCriticalStep.whyItMatters}
              </p>
            </div>

            {/* 3. By When & Direct Resolution */}
            <div className="bg-slate-800/60 rounded-2xl p-5 border border-slate-700/80 space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-400 flex items-center space-x-1.5 mb-1">
                  <span className="w-5 h-5 rounded-full bg-emerald-400/20 flex items-center justify-center text-emerald-300 text-xs">3</span>
                  <span>By when</span>
                </span>
                <p className="text-xs font-mono font-bold text-emerald-300">
                  October 24, 2026 · 17:00 IST (Strict Server Cutoff)
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2 pt-2">
                <a
                  href={currentProfile.nextCriticalStep.actionUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <span>Open Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={handleCompleteAction}
                  className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition-all ${
                    taskCompleted 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{taskCompleted ? 'Action Done!' : 'Mark Completed'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Admission Stage Pipeline Tracker */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h2 className="text-base font-bold text-slate-900">Application & Counselling Pipeline</h2>
            <span className="text-xs text-slate-500 font-medium">(Stage 4 of 7 Active)</span>
          </div>
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
            Real-Time Sync
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 pt-2">
          {admissionStages.map((stage) => {
            const isDone = stage.status === 'completed';
            const isActive = stage.status === 'active';
            return (
              <div 
                key={stage.id}
                className={`p-3 rounded-xl border text-center transition-all ${
                  isDone 
                    ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900' 
                    : isActive 
                      ? 'bg-blue-50 border-blue-400 text-blue-900 shadow-sm ring-2 ring-blue-500/20' 
                      : 'bg-slate-50 border-slate-200 text-slate-400'
                }`}
              >
                <div className="flex justify-center mb-1">
                  {isDone && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                  {isActive && <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping"></span>}
                  {!isDone && !isActive && <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>}
                </div>
                <p className="text-xs font-bold">{stage.title}</p>
                <p className="text-[10px] mt-0.5 font-medium opacity-80">
                  {isDone ? 'Completed' : isActive ? 'Active Now' : 'Pending'}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Two Column Layout: My Target Examinations & Document Readiness */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Target Exams & Ranks */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <span>My Target Examinations & Portals</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold">
                {pinnedExams.length} Monitored
              </span>
            </h2>
            <button 
              onClick={() => setCurrentTab('exams')}
              className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-1"
            >
              <span>Browse All Exams</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-4">
            {pinnedExams.map((exam) => (
              <div 
                key={exam.id}
                className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 hover:border-blue-300 transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-black px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                        {exam.code}
                      </span>
                      <h3 className="font-bold text-slate-900 text-base">{exam.shortName}</h3>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{exam.conductingBody}</p>
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                    {exam.status}
                  </span>
                </div>

                {/* Rank highlight if available */}
                {currentProfile.examRanks && currentProfile.examRanks[exam.code] && (
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 flex items-center justify-between">
                    <span className="text-xs text-slate-600 font-medium">My Verified Result:</span>
                    <span className="text-xs font-bold text-slate-900 font-mono">
                      {currentProfile.examRanks[exam.code]}
                    </span>
                  </div>
                )}

                {/* Next Milestone */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <div className="flex items-center space-x-2 text-slate-600">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>Next Milestone: <strong>{exam.nextAction.title}</strong></span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedExamId(exam.id);
                      setCurrentTab('exams');
                    }}
                    className="font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-0.5"
                  >
                    <span>View Portal Guide</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick AI Help Chip Bar */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                <Sparkles className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Have questions about your seat choice or documents?</p>
                <p className="text-xs text-slate-600">Guardian AI is trained on 2026 official admission business rules.</p>
              </div>
            </div>
            <button
              onClick={openAiChat}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors shadow-sm whitespace-nowrap"
            >
              Ask Guardian AI
            </button>
          </div>
        </div>

        {/* Right Column: Document Vault Summary & Critical Alerts */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Document Readiness Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FolderCheck className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-slate-900 text-base">Document Vault</h3>
              </div>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                docReadinessPct >= 80 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
              }`}>
                {docReadinessPct}% Ready
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <div 
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
                style={{ width: `${docReadinessPct}%` }}
              ></div>
            </div>
            <p className="text-xs text-slate-500">
              {verifiedDocsCount} of {totalDocsCount} certificates verified for physical & online reporting.
            </p>

            {/* List of critical documents */}
            <div className="space-y-2.5 pt-2">
              {currentProfile.documents.map((doc) => (
                <div 
                  key={doc.id}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 text-xs border border-slate-100"
                >
                  <div className="flex items-center space-x-2 truncate pr-2">
                    {doc.status === 'verified' && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                    {doc.status === 'attention_required' && <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />}
                    {doc.status === 'pending' && <Clock className="w-4 h-4 text-slate-400 shrink-0" />}
                    <span className="font-medium text-slate-800 truncate">{doc.name}</span>
                  </div>
                  <span className={`text-[10px] font-bold uppercase shrink-0 px-1.5 py-0.5 rounded ${
                    doc.status === 'verified' 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : doc.status === 'attention_required'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-slate-200 text-slate-600'
                  }`}>
                    {doc.status === 'verified' ? 'Verified' : doc.status === 'attention_required' ? 'Action Req' : 'Pending'}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setCurrentTab('vault')}
              className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors text-center"
            >
              Open Full Document Locker
            </button>
          </div>

          {/* Critical Government Rule Alert */}
          <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200/80 space-y-3">
            <div className="flex items-center space-x-2 text-amber-800">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <h4 className="font-bold text-xs uppercase tracking-wider">Mandatory Category Audit</h4>
            </div>
            <p className="text-xs text-amber-900 leading-relaxed">
              <strong>Attention {currentProfile.category} Candidates:</strong> Central admission boards (JoSAA, MCC) require certificates issued on/after <strong>April 1, 2025</strong>. State-format certificates will result in automatic transfer to General category.
            </p>
            <button
              onClick={() => setCurrentTab('decoder')}
              className="text-xs font-bold text-amber-800 underline hover:text-amber-900"
            >
              Decode Official Notification Clause →
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
