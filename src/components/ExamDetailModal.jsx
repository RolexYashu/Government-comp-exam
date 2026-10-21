import React from 'react';
import { 
  X, 
  ExternalLink, 
  Calendar, 
  FileCheck, 
  ShieldAlert, 
  CheckCircle2, 
  BookOpen, 
  Layers, 
  HelpCircle,
  Building,
  AlertTriangle
} from 'lucide-react';
import { evaluateStudentEligibility } from '../utils/eligibilityEngine';

export default function ExamDetailModal({ exam, currentProfile, onClose, onPinToggle, isPinned }) {
  if (!exam) return null;

  const audit = evaluateStudentEligibility(currentProfile, exam);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-slate-900 to-blue-950 text-white flex items-start justify-between">
          <div className="space-y-1 pr-6">
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 rounded text-xs font-black bg-blue-600 text-white">
                {exam.code}
              </span>
              <span className="text-xs font-semibold text-slate-300">
                {exam.conductingBody}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white">{exam.name}</h2>
            <p className="text-xs text-slate-300">{exam.ministry}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          
          {/* Eligibility Audit for current student */}
          <div className={`p-4 rounded-2xl border ${
            audit.status === 'ELIGIBLE' 
              ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900' 
              : audit.status === 'CAUTION'
                ? 'bg-amber-50/80 border-amber-200 text-amber-900'
                : 'bg-red-50/80 border-red-200 text-red-900'
          }`}>
            <div className="flex items-center justify-between font-bold mb-1">
              <span className="flex items-center space-x-1.5">
                {audit.status === 'ELIGIBLE' && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                {audit.status === 'CAUTION' && <AlertTriangle className="w-5 h-5 text-amber-600" />}
                {audit.status === 'INELIGIBLE' && <ShieldAlert className="w-5 h-5 text-red-600" />}
                <span>Eligibility Status for {currentProfile.name}: {audit.status}</span>
              </span>
              <span className="text-xs uppercase font-extrabold px-2 py-0.5 rounded bg-white/80 border">
                {audit.status}
              </span>
            </div>
            <p className="text-xs opacity-90">{audit.percentageCheck.message}</p>
            {audit.categoryCheck.note && (
              <p className="text-xs font-semibold mt-1">⚠️ {audit.categoryCheck.note}</p>
            )}
            {audit.domicileCheck.note && (
              <p className="text-xs font-semibold mt-1">📍 {audit.domicileCheck.note}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-2">Examination Scope</h3>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
              {exam.description}
            </p>
          </div>

          {/* Critical Deadlines Timeline */}
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>Key Schedule & Counselling Milestones</span>
            </h3>
            <div className="border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-100">
              {exam.deadlines.map((dl, idx) => (
                <div 
                  key={idx}
                  className={`p-3 flex items-center justify-between text-xs ${
                    dl.isNext ? 'bg-amber-50 font-semibold' : 'bg-white'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className={`w-2 h-2 rounded-full ${
                      dl.status === 'completed' ? 'bg-emerald-500' : dl.isNext ? 'bg-amber-500 animate-ping' : 'bg-slate-300'
                    }`}></span>
                    <span className="text-slate-800">{dl.event}</span>
                  </div>
                  <span className="font-mono text-slate-600">{dl.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Counselling Rounds */}
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center space-x-2">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Counselling Allocation Protocol ({exam.counsellingBody})</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {exam.counsellingRounds.map((r, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <div className="flex items-center justify-between font-bold text-slate-900">
                    <span>{r.name}</span>
                    <span className="text-[10px] text-blue-600 font-mono">{r.date}</span>
                  </div>
                  <p className="text-slate-500">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mandatory Documents Checklist */}
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center space-x-2">
              <FileCheck className="w-4 h-4 text-blue-600" />
              <span>Required Certificates & Reporting Documents</span>
            </h3>
            <div className="space-y-2">
              {exam.documentsRequired.map((doc, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">{doc.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded font-mono bg-slate-200 text-slate-700">
                      {doc.format}
                    </span>
                  </div>
                  <p className="text-slate-500">{doc.purpose}</p>
                  {doc.warning && (
                    <p className="text-red-600 font-semibold text-[11px] mt-0.5">⚠️ {doc.warning}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Official FAQs */}
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center space-x-2">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span>Common Student Disqualification Traps & FAQs</span>
            </h3>
            <div className="space-y-2">
              {exam.faqs.map((faq, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <p className="font-bold text-slate-900">Q: {faq.q}</p>
                  <p className="text-slate-600 leading-relaxed">A: {faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={() => onPinToggle(exam.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
              isPinned 
                ? 'bg-amber-100 text-amber-900 hover:bg-amber-200' 
                : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
            }`}
          >
            {isPinned ? '★ Pinned to My Dashboard' : '☆ Pin to My Dashboard'}
          </button>

          <a
            href={exam.officialPortal}
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-sm"
          >
            <span>Open Official Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
