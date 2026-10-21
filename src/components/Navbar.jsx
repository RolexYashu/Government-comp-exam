import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Compass, 
  LayoutDashboard, 
  FileText, 
  FolderCheck, 
  Layers, 
  Bot, 
  Award, 
  Menu, 
  X, 
  User, 
  Sparkles,
  ExternalLink,
  SlidersHorizontal,
  ChevronDown,
  Globe
} from 'lucide-react';
import { DEMO_PROFILES } from '../data/demoProfiles';

export default function Navbar({ 
  currentTab, 
  setCurrentTab, 
  currentProfile, 
  setCurrentProfile,
  openAiChat,
  openRubricModal,
  language,
  setLanguage,
  appName = "Admission Guardian",
  appTagline = "Intelligent Examination & Counselling Companion",
  openBrandModal
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'My Action Plan', icon: LayoutDashboard, badge: 'Live' },
    { id: 'exams', label: 'Exams & Portals', icon: Compass },
    { id: 'eligibility', label: 'Eligibility Wizard', icon: SlidersHorizontal },
    { id: 'decoder', label: 'AI Gazette Decoder', icon: Sparkles, highlight: true },
    { id: 'vault', label: 'Document Vault', icon: FolderCheck },
    { id: 'counselling', label: 'Counselling Simulator', icon: Layers }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Indian Tricolor National Header Bar */}
      <div className="tricolor-stripe w-full"></div>
      
      {/* Sub-header with Digital Governance badge */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-medium text-slate-200">Government of India · Digital Governance Initiative</span>
          <span className="hidden md:inline text-slate-500">|</span>
          <span className="hidden md:inline text-slate-400">Standardized Central & State Admission Protocol</span>
        </div>
        <div className="flex items-center space-x-4">
          {/* Multilingual Selector */}
          <div className="flex items-center space-x-1 text-slate-300 hover:text-white cursor-pointer text-xs">
            <Globe className="w-3.5 h-3.5" />
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent border-none text-slate-300 text-xs cursor-pointer focus:ring-0 focus:outline-none"
            >
              <option value="en" className="bg-slate-800 text-white">English (Official)</option>
              <option value="hi" className="bg-slate-800 text-white">हिंदी (Hindi)</option>
              <option value="kn" className="bg-slate-800 text-white">ಕನ್ನಡ (Kannada)</option>
              <option value="ta" className="bg-slate-800 text-white">தமிழ் (Tamil)</option>
            </select>
          </div>
          
          {/* Hackathon Rubric Pill */}
          <button 
            onClick={openRubricModal}
            className="flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition-all font-semibold text-xs"
            title="View IEE 2026 Hackathon Scoring Rubric (100 Marks)"
          >
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>IEE 2026 Rubric (100M)</span>
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand with Rename Button */}
          <div className="flex items-center space-x-3">
            <div 
              onClick={() => setCurrentTab('home')}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-indigo-900 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                    {appName}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200">
                    Gov 2026
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium hidden sm:block truncate max-w-xs">
                  {appTagline}
                </p>
              </div>
            </div>

            {/* Rename Portal button */}
            {openBrandModal && (
              <button
                onClick={openBrandModal}
                className="hidden md:flex items-center space-x-1 px-2 py-1 rounded-lg text-[11px] font-semibold text-slate-500 hover:text-blue-600 bg-slate-100 hover:bg-blue-50 transition-colors border border-slate-200"
                title="Change or customize website name"
              >
                <span>Edit Name</span>
              </button>
            )}
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => setCurrentTab('home')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                currentTab === 'home'
                  ? 'text-blue-700 bg-blue-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Home
            </button>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`relative flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-blue-700 bg-blue-50 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="px-1.5 py-0.2 text-[10px] font-bold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                      {item.badge}
                    </span>
                  )}
                  {item.highlight && (
                    <span className="px-1.5 py-0.2 text-[10px] font-bold rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                      AI
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls: AI Chat trigger + Demo Student Switcher */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Ask AI button */}
            <button
              onClick={openAiChat}
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold text-xs shadow-md shadow-blue-500/20 hover:shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all"
            >
              <Bot className="w-4 h-4 text-amber-300" />
              <span>Ask Guardian AI</span>
            </button>

            {/* Quick Demo Profile Switcher for Judges */}
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-xl border border-slate-200 hover:border-blue-400 bg-slate-50 hover:bg-white text-xs font-medium text-slate-700 transition-all"
              >
                <img 
                  src={currentProfile.avatar} 
                  alt={currentProfile.name} 
                  className="w-6 h-6 rounded-full object-cover border border-slate-300"
                />
                <div className="text-left">
                  <div className="font-bold text-slate-900 leading-tight flex items-center space-x-1">
                    <span>{currentProfile.name.split(' ')[0]}</span>
                    <span className="text-[10px] text-blue-600 font-semibold">({currentProfile.category})</span>
                  </div>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 border-b border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Judge Quick-Switch Persona
                    </p>
                    <p className="text-xs text-slate-600">
                      Test instant real-time action plan adaptation:
                    </p>
                  </div>
                  {DEMO_PROFILES.map((prof) => (
                    <button
                      key={prof.id}
                      onClick={() => {
                        setCurrentProfile(prof);
                        setProfileDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2.5 flex items-center space-x-3 hover:bg-slate-50 transition-colors ${
                        currentProfile.id === prof.id ? 'bg-blue-50/70' : ''
                      }`}
                    >
                      <img 
                        src={prof.avatar} 
                        alt={prof.name} 
                        className="w-8 h-8 rounded-full object-cover border border-slate-200"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-slate-900 truncate">{prof.name}</p>
                          <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-blue-100 text-blue-700">
                            {prof.category}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 truncate">{prof.role}</p>
                      </div>
                    </button>
                  ))}
                  <div className="px-3 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => {
                        setCurrentTab('eligibility');
                        setProfileDropdownOpen(false);
                      }}
                      className="w-full text-center text-xs font-semibold text-blue-600 hover:text-blue-800 py-1"
                    >
                      + Create Custom Student Profile
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={openAiChat}
              className="p-2 rounded-lg bg-blue-600 text-white text-xs"
              title="AI Assistant"
            >
              <Bot className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2">
          {/* Quick Profile switcher on mobile */}
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 mb-3">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Active Student Persona</p>
            <div className="grid grid-cols-3 gap-1">
              {DEMO_PROFILES.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setCurrentProfile(p);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-2 py-1.5 rounded-lg text-xs font-medium text-center ${
                    currentProfile.id === p.id 
                      ? 'bg-blue-600 text-white font-bold' 
                      : 'bg-white text-slate-700 border border-slate-200'
                  }`}
                >
                  {p.name.split(' ')[0]} ({p.category})
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${
              currentTab === 'home' ? 'bg-blue-50 text-blue-700' : 'text-slate-700'
            }`}
          >
            Home Overview
          </button>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold ${
                currentTab === item.id ? 'bg-blue-50 text-blue-700' : 'text-slate-700'
              }`}
            >
              <div className="flex items-center space-x-2">
                <item.icon className="w-4 h-4 text-slate-500" />
                <span>{item.label}</span>
              </div>
              {item.highlight && (
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-purple-100 text-purple-700">
                  AI
                </span>
              )}
            </button>
          ))}
          <button
            onClick={() => { openRubricModal(); setMobileMenuOpen(false); }}
            className="w-full flex items-center space-x-2 px-3 py-2.5 rounded-lg text-sm font-semibold bg-amber-50 text-amber-800 border border-amber-200"
          >
            <Award className="w-4 h-4 text-amber-600" />
            <span>Hackathon Scoring Rubric (100M)</span>
          </button>
        </div>
      )}
    </header>
  );
}
