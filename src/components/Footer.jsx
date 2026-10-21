import React from 'react';
import { ShieldCheck, Heart, ExternalLink, Award, Phone, Mail } from 'lucide-react';

export default function Footer({ setCurrentTab, openRubricModal, appName = "Government Exams Portal Unofficial" }) {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      
      {/* Tricolor stripe */}
      <div className="tricolor-stripe w-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Mission */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center space-x-2 text-white">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5 text-amber-300" />
              </div>
              <span className="font-bold text-base tracking-tight">{appName}</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Intelligent Examination & Counselling Companion. Empowering students with proactive action plans, eliminating missed deadlines and legal confusion.
            </p>
            <p className="text-[11px] text-slate-500">
              Government · Digital Governance Theme
            </p>
          </div>

          {/* Quick Platform Navigation */}
          <div className="space-y-2">
            <p className="font-bold uppercase tracking-wider text-slate-200 text-xs">
              Platform Modules
            </p>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button onClick={() => setCurrentTab('dashboard')} className="hover:text-white transition-colors">
                  My Action Plan (Next Action Engine)
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('exams')} className="hover:text-white transition-colors">
                  Examination & Counselling Directory
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('eligibility')} className="hover:text-white transition-colors">
                  Eligibility & Quota Wizard
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('decoder')} className="hover:text-white transition-colors">
                  AI Official Gazette Decoder
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('vault')} className="hover:text-white transition-colors">
                  Document Readiness Vault
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('counselling')} className="hover:text-white transition-colors">
                  Counselling Round Simulator
                </button>
              </li>
            </ul>
          </div>

          {/* Official Portals Bridge */}
          <div className="space-y-2">
            <p className="font-bold uppercase tracking-wider text-slate-200 text-xs">
              Integrated Portals
            </p>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="https://jeemain.nta.ac.in" target="_blank" rel="noreferrer" className="hover:text-white flex items-center space-x-1">
                  <span>NTA JEE (Main) Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a href="https://josaa.nic.in" target="_blank" rel="noreferrer" className="hover:text-white flex items-center space-x-1">
                  <span>JoSAA / CSAB Counselling</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a href="https://mcc.nic.in" target="_blank" rel="noreferrer" className="hover:text-white flex items-center space-x-1">
                  <span>MCC Medical Counselling (NEET)</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a href="https://cuetug.ntaonline.in" target="_blank" rel="noreferrer" className="hover:text-white flex items-center space-x-1">
                  <span>CUET (UG) Central Universities</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a href="https://cetonline.karnataka.gov.in/kea" target="_blank" rel="noreferrer" className="hover:text-white flex items-center space-x-1">
                  <span>Karnataka KEA Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
            </ul>
          </div>

          {/* Statutory Helpline & Compliance */}
          <div className="space-y-2">
            <p className="font-bold uppercase tracking-wider text-slate-200 text-xs">
              Digital Governance Standards
            </p>
            <div className="space-y-1.5 text-xs text-slate-400">
              <p className="flex items-center space-x-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>National Helpline: 1800-11-8002</span>
              </p>
              <p className="flex items-center space-x-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>support@admission-guardian.gov.in</span>
              </p>
              <div className="p-2.5 rounded-xl bg-slate-800 text-[11px] space-y-1 border border-slate-700/60 mt-2">
                <p className="font-bold text-slate-300">DPDP Act 2023 Compliant</p>
                <p className="text-slate-400">
                  Student caste, domicile, and academic records are processed with client-side zero retention.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 {appName}. Designed for National Central & State Digital Admission Integrity.
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={openRubricModal}
              className="text-amber-400 hover:text-amber-300 font-semibold flex items-center space-x-1"
            >
              <Award className="w-3.5 h-3.5" />
              <span>IEE 2026 Marking Scheme (100 Marks Rubric)</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
