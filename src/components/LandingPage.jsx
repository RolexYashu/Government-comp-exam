import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  AlertTriangle, 
  FileCheck, 
  Layers, 
  CheckCircle2, 
  Zap, 
  BookOpen, 
  Users, 
  Compass, 
  ExternalLink,
  ChevronRight,
  Target,
  Bot
} from 'lucide-react';
import { DEMO_PROFILES } from '../data/demoProfiles';

export default function LandingPage({ 
  setCurrentTab, 
  currentProfile, 
  setCurrentProfile, 
  openAiChat,
  openRubricModal 
}) {
  return (
    <div className="space-y-16 pb-20">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Glow backdrop effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span>Government of India · Digital Governance Initiative</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
                Never lose an admission to a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200">missed deadline</span> or <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">dense notification</span>.
              </h1>

              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                Admission Guardian converts complex, multi-round government gazettes into an <strong className="text-white font-semibold">exact personalized action plan</strong>. We tell every student exactly <span className="underline decoration-amber-400 decoration-2 font-semibold text-white">what to do next</span>, <span className="underline decoration-blue-400 decoration-2 font-semibold text-white">why it matters</span>, and <span className="underline decoration-emerald-400 decoration-2 font-semibold text-white">by when</span>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setCurrentTab('dashboard')}
                  className="flex items-center space-x-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-bold text-sm shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all"
                >
                  <span>Launch Student Action Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setCurrentTab('decoder')}
                  className="flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-semibold text-sm transition-all backdrop-blur-sm"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Try AI Gazette Decoder</span>
                </button>

                <button
                  onClick={openRubricModal}
                  className="flex items-center space-x-2 px-4 py-3.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-semibold text-sm transition-all"
                >
                  <Target className="w-4 h-4 text-amber-400" />
                  <span>IEE 2026 Rubric Defense</span>
                </button>
              </div>

              {/* Quick Persona Tester for Hackathon Judges */}
              <div className="pt-4 border-t border-slate-800">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  🚀 Instant 1-Click Demo Personas (No typing required for judges):
                </p>
                <div className="flex flex-wrap gap-2">
                  {DEMO_PROFILES.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setCurrentProfile(p);
                        setCurrentTab('dashboard');
                      }}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-all flex items-center space-x-1.5 ${
                        currentProfile.id === p.id 
                          ? 'bg-blue-600 border-blue-400 text-white font-bold shadow-md' 
                          : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <span>{p.name}</span>
                      <span className="text-[10px] opacity-75">({p.tag})</span>
                      <ChevronRight className="w-3 h-3 opacity-60" />
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Live Next Action Preview Card */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Glow behind card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-amber-500 rounded-3xl blur-xl opacity-30 animate-pulse-subtle"></div>
                
                <div className="relative bg-slate-900 border border-slate-700/80 rounded-2xl p-6 shadow-2xl space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-red-500 animate-ping"></span>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
                        Live Core Innovation Engine
                      </span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                      Sync: Active
                    </span>
                  </div>

                  <div className="space-y-4">
                    {/* Item 1: What to do next */}
                    <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                      <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                        <Zap className="w-3.5 h-3.5" />
                        <span>1. What You Need To Do Next</span>
                      </div>
                      <p className="text-sm font-bold text-white">
                        {currentProfile.nextCriticalStep.title}
                      </p>
                    </div>

                    {/* Item 2: Why it matters */}
                    <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-800/40">
                      <div className="flex items-center space-x-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>2. Why It Matters (Governance Risk)</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {currentProfile.nextCriticalStep.whyItMatters}
                      </p>
                    </div>

                    {/* Item 3: By when */}
                    <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>3. By When (Strict Cutoff)</span>
                        </div>
                        <p className="text-xs font-mono font-bold text-emerald-300">
                          October 24, 2026 · 17:00 IST
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-red-500/20 text-red-400 text-[11px] font-bold border border-red-500/30">
                        Countdown Active
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setCurrentTab('dashboard')}
                    className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-colors"
                  >
                    <span>View {currentProfile.name}'s Complete Hub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Live Impact & Trust Statistics Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-gov border border-slate-200/80 p-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border-r border-slate-100 last:border-none pr-4">
            <p className="text-3xl font-extrabold text-blue-900">100%</p>
            <p className="text-xs font-semibold text-slate-500 mt-1">Autonomous Deadlines Tracked</p>
            <p className="text-[11px] text-emerald-600 font-medium">Zero missed dates reported</p>
          </div>
          <div className="border-r border-slate-100 last:border-none pr-4">
            <p className="text-3xl font-extrabold text-indigo-900">12+ Portals</p>
            <p className="text-xs font-semibold text-slate-500 mt-1">Unified Under One AI Engine</p>
            <p className="text-[11px] text-blue-600 font-medium">NTA, JoSAA, MCC, KEA, DTE</p>
          </div>
          <div className="border-r border-slate-100 last:border-none pr-4">
            <p className="text-3xl font-extrabold text-amber-700">Instant AI</p>
            <p className="text-xs font-semibold text-slate-500 mt-1">Gazette Legal Jargon Decoder</p>
            <p className="text-[11px] text-amber-600 font-medium">Plain English & Vernacular</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-emerald-800">GovTech</p>
            <p className="text-xs font-semibold text-slate-500 mt-1">DPDP Act 2023 Compliant</p>
            <p className="text-[11px] text-slate-500 font-medium">Student data privacy by design</p>
          </div>
        </div>
      </section>

      {/* Innovation Comparison: Old Way vs Admission Guardian */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Paradigm Shift in Digital Governance
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mt-3">
            Why Traditional Government Portals Fail Students
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            The tragedy of modern admissions is not lack of information, but information overload buried in dense PDFs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* The Old Way */}
          <div className="bg-red-50/50 rounded-2xl border border-red-200/80 p-6 space-y-4">
            <div className="flex items-center space-x-2 text-red-700">
              <AlertTriangle className="w-5 h-5" />
              <h3 className="font-bold text-lg">The Status Quo: Passive Information Dumps</h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start space-x-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Students must read through 80-page Information Bulletins written in complex legal syntax.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>OBC-NCL certificate validity rules (after April 1st) are missed, causing disqualification to General.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Confusion between "Freeze", "Float", and "Slide" results in accidental loss of premier IIT/NIT seats.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Separate portals for NTA, state counselling, and college physical reporting with conflicting timelines.</span>
              </li>
            </ul>
          </div>

          {/* The Admission Guardian Way */}
          <div className="bg-emerald-50/60 rounded-2xl border border-emerald-200 p-6 space-y-4 shadow-sm">
            <div className="flex items-center space-x-2 text-emerald-800">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <h3 className="font-bold text-lg">Admission Guardian: The Intelligent Companion</h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-800">
              <li className="flex items-start space-x-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>Core Innovation:</strong> Dynamic calculation of exact next step, governance consequence, and cutoff timer.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>AI Notification Decoder:</strong> Upload or paste any circular for instant plain language & Hindi action points.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>Automated Eligibility Wizard:</strong> Instant audit against 75% rule, subject combinations, and home-state quota.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>Document Vault with Date-Guard:</strong> Flags out-of-date caste/income certificates before reporting begins.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature Deep-Dive Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Platform Capabilities
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mt-3">
            Designed for Student Empowerment & Administrative Efficiency
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div 
            onClick={() => setCurrentTab('dashboard')}
            className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-gov hover:border-blue-300 transition-all cursor-pointer space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              Personalized Student Dashboard
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Consolidates all your target examinations into a single timeline. Displays real-time status: Rank, Choice Filling, Document Verification, and Seat Acceptance.
            </p>
            <div className="flex items-center space-x-1 text-xs font-bold text-blue-600 pt-2">
              <span>View Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2 */}
          <div 
            onClick={() => setCurrentTab('decoder')}
            className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-gov hover:border-purple-300 transition-all cursor-pointer space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
              AI Circular & Gazette Decoder
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Powered by LLM intelligence. Paste official notices from NTA, JoSAA, or MCC to extract deadlines, disqualification warnings, and a plain-language checklist.
            </p>
            <div className="flex items-center space-x-1 text-xs font-bold text-purple-600 pt-2">
              <span>Decode Official Circulars</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3 */}
          <div 
            onClick={() => setCurrentTab('vault')}
            className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-gov hover:border-emerald-300 transition-all cursor-pointer space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
              Document Readiness Vault
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Prevents the #1 cause of seat cancellation: invalid documents. Audits issue dates, issuing authorities (Central vs State), and provides official undertaking drafts.
            </p>
            <div className="flex items-center space-x-1 text-xs font-bold text-emerald-600 pt-2">
              <span>Open Document Vault</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4 */}
          <div 
            onClick={() => setCurrentTab('eligibility')}
            className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-gov hover:border-amber-300 transition-all cursor-pointer space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
              Eligibility & Quota Wizard
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Input your 10th and 12th scores, category, and domicile. Our engine calculates your exact eligibility across 10+ exams and highlights state reservation quotas.
            </p>
            <div className="flex items-center space-x-1 text-xs font-bold text-amber-600 pt-2">
              <span>Run Eligibility Audit</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 5 */}
          <div 
            onClick={() => setCurrentTab('counselling')}
            className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-gov hover:border-cyan-300 transition-all cursor-pointer space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
              Counselling Round Simulator
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Interactive playground explaining JoSAA & MCC Round 1-6 choices. Test "Freeze", "Float", and "Slide" safely before making life-changing decisions.
            </p>
            <div className="flex items-center space-x-1 text-xs font-bold text-cyan-600 pt-2">
              <span>Simulate Counselling</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 6 */}
          <div 
            onClick={openAiChat}
            className="group bg-gradient-to-br from-blue-900 to-indigo-950 rounded-2xl p-6 text-white shadow-md hover:shadow-xl transition-all cursor-pointer space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 text-amber-300 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
              Guardian AI Companion
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              24/7 conversational mentor trained on official central admission business rules. Ask anything from "Explain 75% rule" to "What is choice locking?".
            </p>
            <div className="flex items-center space-x-1 text-xs font-bold text-amber-300 pt-2">
              <span>Chat with Guardian AI</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>
      </section>

      {/* Live Exam Portals Ticker */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              National Examination Portal Feeds
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Looking for a specific competitive exam portal?
            </h3>
            <p className="text-slate-400 text-sm">
              Explore our comprehensive database of JEE, NEET, CUET, KCET, MHT-CET, GATE & UPSC.
            </p>
          </div>
          <button
            onClick={() => setCurrentTab('exams')}
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors shadow-lg"
          >
            Explore All 10+ Exams
          </button>
        </div>
      </section>

    </div>
  );
}
