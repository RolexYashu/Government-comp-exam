import React, { useState } from 'react';
import { X, Sparkles, Check, Edit3, ShieldCheck, Compass, HeartHandshake, BookOpen } from 'lucide-react';

export const POPULAR_PORTAL_NAMES = [
  {
    name: "Government Exams Portal Unofficial",
    tagline: "Intelligent Examination & Counselling Companion",
    hindi: "सरकारी परीक्षा पोर्टल (अनौपचारिक)",
    meaning: "Student-Centric Intelligent Action Plan & Gazette Guidance",
    icon: ShieldCheck,
    badge: "User Selected"
  },
  {
    name: "Government Exams Portal (Unofficial)",
    tagline: "Central & State Entrance Admissions Engine",
    hindi: "Govt Exams Portal",
    meaning: "Independent Digital Governance Assistant for Competitive Aspirants",
    icon: ShieldCheck,
    badge: "Alternative"
  },
  {
    name: "Admission Guardian",
    tagline: "Intelligent Examination & Counselling Companion",
    hindi: "एडमिशन गार्डियन",
    meaning: "Standard Central & State Digital Admission Integrity Engine",
    icon: ShieldCheck,
    badge: "Official Theme Default"
  },
  {
    name: "MargDarshak AI",
    tagline: "Next-Action Admission & Counselling Compass",
    hindi: "मार्गदर्शक AI",
    meaning: "Guiding Aspirants Through High-Stakes Portals & Deadlines",
    icon: Compass,
    badge: "AI-Centric Brand"
  },
  {
    name: "VidyaSetu",
    tagline: "Unified Bridge from Official Gazettes to Student Action Plans",
    hindi: "विद्यासेतु",
    meaning: "Connecting Rural & First-Generation Students to Central Seats",
    icon: BookOpen,
    badge: "Digital India Vision"
  },
  {
    name: "EduSarthi",
    tagline: "Intelligent Companion for Competitive Admissions",
    hindi: "एडूसारथी",
    meaning: "Your Autonomous Guide Through JoSAA, MCC & State Rounds",
    icon: HeartHandshake,
    badge: "Student Friendly"
  }
];

export default function BrandModal({ isOpen, onClose, appName, setAppName, appTagline, setAppTagline }) {
  if (!isOpen) return null;

  const [customNameInput, setCustomNameInput] = useState(appName);
  const [customTaglineInput, setCustomTaglineInput] = useState(appTagline);

  const handleApplyPreset = (preset) => {
    setAppName(preset.name);
    setAppTagline(preset.tagline);
    localStorage.setItem('admission_guardian_brand_name', preset.name);
    localStorage.setItem('admission_guardian_brand_tagline', preset.tagline);
    document.title = `${preset.name} — ${preset.tagline} | Government Digital Governance`;
    onClose();
  };

  const handleSaveCustom = (e) => {
    e.preventDefault();
    if (!customNameInput.trim()) return;
    setAppName(customNameInput.trim());
    setAppTagline(customTaglineInput.trim() || 'Intelligent Examination & Counselling Companion');
    localStorage.setItem('admission_guardian_brand_name', customNameInput.trim());
    localStorage.setItem('admission_guardian_brand_tagline', customTaglineInput.trim());
    document.title = `${customNameInput.trim()} — Government Digital Governance`;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-slate-900 to-blue-950 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-amber-300 flex items-center justify-center border border-blue-400/30">
              <Edit3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">Customize Website Name & Branding</h3>
              <p className="text-xs text-slate-300">
                Choose a GovTech name preset or enter your custom team / project title
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Custom Input Form */}
          <form onSubmit={handleSaveCustom} className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-900">
              Type Any Name for Your Website:
            </p>
            <div className="space-y-2">
              <div>
                <label className="text-[11px] font-bold text-slate-600 block mb-1">
                  Website Name / Portal Title
                </label>
                <input
                  type="text"
                  value={customNameInput}
                  onChange={(e) => setCustomNameInput(e.target.value)}
                  placeholder="e.g. Pravesh Rakshak, MargDarshak, or Your Team Name"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  required
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-600 block mb-1">
                  Tagline / Subtitle
                </label>
                <input
                  type="text"
                  value={customTaglineInput}
                  onChange={(e) => setCustomTaglineInput(e.target.value)}
                  placeholder="e.g. Intelligent Examination & Counselling Companion"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-sm"
            >
              Set Custom Website Name
            </button>
          </form>

          {/* Recommended Presets */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Or Pick a Top GovTech Brand Preset:
            </p>

            <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
              {POPULAR_PORTAL_NAMES.map((item) => {
                const isSelected = appName.toLowerCase() === item.name.toLowerCase();
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleApplyPreset(item)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start justify-between ${
                      isSelected 
                        ? 'bg-blue-50 border-blue-500 ring-2 ring-blue-500/20' 
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg mt-0.5 ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-slate-900 text-sm">{item.name}</span>
                          <span className="text-xs font-bold text-blue-600 font-sans">({item.hindi})</span>
                          <span className="text-[10px] font-semibold px-2 py-0.2 rounded-full bg-slate-100 text-slate-600">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">{item.meaning}</p>
                      </div>
                    </div>

                    {isSelected && (
                      <Check className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
