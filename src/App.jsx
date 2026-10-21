import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import ExamCatalog from './components/ExamCatalog';
import ProfileEligibilityWizard from './components/ProfileEligibilityWizard';
import NotificationDecoder from './components/NotificationDecoder';
import DocumentVault from './components/DocumentVault';
import CounsellingSimulator from './components/CounsellingSimulator';
import AIAssistantModal from './components/AIAssistantModal';
import JudgeRubricModal from './components/JudgeRubricModal';
import BrandModal from './components/BrandModal';
import Footer from './components/Footer';
import { DEMO_PROFILES } from './data/demoProfiles';
import { Bot, Award, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [currentProfile, setCurrentProfile] = useState(() => {
    const saved = localStorage.getItem('admission_guardian_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return DEMO_PROFILES[0]; // Priya Sharma
  });

  // Website Brand Name requested by User: "Government Exams Portal Unofficial"
  const [appName, setAppName] = useState(() => {
    return localStorage.getItem('admission_guardian_brand_name') || 'Government Exams Portal Unofficial';
  });
  const [appTagline, setAppTagline] = useState(() => {
    return localStorage.getItem('admission_guardian_brand_tagline') || 'Intelligent Examination & Counselling Companion';
  });

  const [isAiChatOpen, setIsAiChatOpen] = useState(false);
  const [isRubricModalOpen, setIsRubricModalOpen] = useState(false);
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);
  const [selectedExamId, setSelectedExamId] = useState(null);
  const [language, setLanguage] = useState('en');

  // Sync document title
  useEffect(() => {
    document.title = `${appName} — ${appTagline}`;
  }, [appName, appTagline]);

  // Persist profile changes
  useEffect(() => {
    localStorage.setItem('admission_guardian_profile', JSON.stringify(currentProfile));
  }, [currentProfile]);

  // Scroll to top on tab switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        currentProfile={currentProfile}
        setCurrentProfile={setCurrentProfile}
        openAiChat={() => setIsAiChatOpen(true)}
        openRubricModal={() => setIsRubricModalOpen(true)}
        language={language}
        setLanguage={setLanguage}
        appName={appName}
        appTagline={appTagline}
        openBrandModal={() => setIsBrandModalOpen(true)}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <LandingPage
            setCurrentTab={setCurrentTab}
            currentProfile={currentProfile}
            setCurrentProfile={setCurrentProfile}
            openAiChat={() => setIsAiChatOpen(true)}
            openRubricModal={() => setIsRubricModalOpen(true)}
            appName={appName}
          />
        )}

        {currentTab === 'dashboard' && (
          <Dashboard
            currentProfile={currentProfile}
            setCurrentProfile={setCurrentProfile}
            setCurrentTab={setCurrentTab}
            openAiChat={() => setIsAiChatOpen(true)}
            setSelectedExamId={setSelectedExamId}
            appName={appName}
          />
        )}

        {currentTab === 'exams' && (
          <ExamCatalog
            currentProfile={currentProfile}
            setCurrentProfile={setCurrentProfile}
            selectedExamId={selectedExamId}
            setSelectedExamId={setSelectedExamId}
            appName={appName}
          />
        )}

        {currentTab === 'eligibility' && (
          <ProfileEligibilityWizard
            currentProfile={currentProfile}
            setCurrentProfile={setCurrentProfile}
            setCurrentTab={setCurrentTab}
            appName={appName}
          />
        )}

        {currentTab === 'decoder' && (
          <NotificationDecoder
            openAiChat={() => setIsAiChatOpen(true)}
            appName={appName}
          />
        )}

        {currentTab === 'vault' && (
          <DocumentVault
            currentProfile={currentProfile}
            setCurrentProfile={setCurrentProfile}
            appName={appName}
          />
        )}

        {currentTab === 'counselling' && (
          <CounsellingSimulator
            currentProfile={currentProfile}
            appName={appName}
          />
        )}
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
        {/* Hackathon Rubric Quick Button */}
        <button
          onClick={() => setIsRubricModalOpen(true)}
          className="flex items-center space-x-2 px-3.5 py-2 rounded-full bg-slate-900/95 hover:bg-slate-900 text-amber-300 font-bold text-xs border border-amber-500/40 shadow-xl backdrop-blur-md hover:scale-105 transition-all group"
          title="Open IEE 2026 Marking Scheme (100 Marks)"
        >
          <Award className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">IEE 2026 Rubric</span>
        </button>

        {/* Guardian AI Quick Trigger */}
        <button
          onClick={() => setIsAiChatOpen(true)}
          className="flex items-center space-x-2 p-3 sm:px-4 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-xs shadow-2xl shadow-blue-500/40 hover:scale-105 transition-all group"
          title="Open AI Assistant"
        >
          <Bot className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">Ask AI Assistant</span>
        </button>
      </div>

      {/* AI Assistant Modal */}
      <AIAssistantModal
        isOpen={isAiChatOpen}
        onClose={() => setIsAiChatOpen(false)}
        currentProfile={currentProfile}
        appName={appName}
      />

      {/* Hackathon Marking Scheme / Presentation Rubric Modal */}
      <JudgeRubricModal
        isOpen={isRubricModalOpen}
        onClose={() => setIsRubricModalOpen(false)}
      />

      {/* Brand & Name Customizer Modal */}
      <BrandModal
        isOpen={isBrandModalOpen}
        onClose={() => setIsBrandModalOpen(false)}
        appName={appName}
        setAppName={setAppName}
        appTagline={appTagline}
        setAppTagline={setAppTagline}
      />

      {/* Footer */}
      <Footer
        setCurrentTab={setCurrentTab}
        openRubricModal={() => setIsRubricModalOpen(true)}
        appName={appName}
      />

    </div>
  );
}
