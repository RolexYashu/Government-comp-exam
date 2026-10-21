import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  ExternalLink, 
  Calendar, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldAlert, 
  SlidersHorizontal,
  Bookmark,
  BookmarkCheck,
  ChevronRight,
  Info
} from 'lucide-react';
import { EXAMS_DATA, ALL_CONDUCTING_BODIES, ALL_STREAMS } from '../data/examsData';
import { evaluateStudentEligibility } from '../utils/eligibilityEngine';
import ExamDetailModal from './ExamDetailModal';

export default function ExamCatalog({ 
  currentProfile, 
  setCurrentProfile,
  selectedExamId,
  setSelectedExamId
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStream, setSelectedStream] = useState('All Streams');
  const [selectedBody, setSelectedBody] = useState('All');
  const [onlyEligible, setOnlyEligible] = useState(false);
  const [activeModalExam, setActiveModalExam] = useState(null);

  // If selectedExamId was passed from dashboard, open modal
  useState(() => {
    if (selectedExamId) {
      const found = EXAMS_DATA.find(e => e.id === selectedExamId);
      if (found) setActiveModalExam(found);
    }
  }, [selectedExamId]);

  // Toggle pinning an exam to student profile
  const handleTogglePin = (examId) => {
    const isPinned = currentProfile.targetExams.includes(examId);
    let updated;
    if (isPinned) {
      updated = currentProfile.targetExams.filter(id => id !== examId);
    } else {
      updated = [...currentProfile.targetExams, examId];
    }
    setCurrentProfile({
      ...currentProfile,
      targetExams: updated
    });
  };

  // Filtered exams
  const filteredExams = useMemo(() => {
    return EXAMS_DATA.filter((exam) => {
      // Search text match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        exam.name.toLowerCase().includes(query) ||
        exam.code.toLowerCase().includes(query) ||
        exam.conductingBody.toLowerCase().includes(query) ||
        exam.stream.toLowerCase().includes(query);

      // Stream match
      const matchesStream = selectedStream === 'All Streams' || exam.stream.toLowerCase() === selectedStream.toLowerCase();

      // Body match
      const matchesBody = selectedBody === 'All' || exam.conductingBody.includes(selectedBody);

      // Eligibility match
      if (onlyEligible) {
        const audit = evaluateStudentEligibility(currentProfile, exam);
        if (!audit.isEligible) return false;
      }

      return matchesSearch && matchesStream && matchesBody;
    });
  }, [searchQuery, selectedStream, selectedBody, onlyEligible, currentProfile]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
            National & State Central Portals
          </span>
          <span className="text-xs text-slate-500">• 10+ Examination Frameworks Integrated</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900">
          Examination & Admission Portals Directory
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl">
          Search competitive entrance examinations and state counselling systems. Filter by stream, conducting ministry, and instant automated eligibility checks.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200 space-y-4">
        
        {/* Search input + Only Eligible Toggle */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by exam name (JEE, NEET, CUET, KCET), conducting body, or keywords..."
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Quick Eligibility Toggle Button */}
          <button
            onClick={() => setOnlyEligible(!onlyEligible)}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all whitespace-nowrap ${
              onlyEligible 
                ? 'bg-blue-600 border-blue-600 text-white shadow-sm' 
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Show Only Eligible For {currentProfile.name.split(' ')[0]}</span>
          </button>
        </div>

        {/* Stream Pills & Conducting Body Dropdown */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100">
          {/* Streams */}
          <div className="flex flex-wrap gap-1.5">
            {ALL_STREAMS.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedStream(s)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedStream === s 
                    ? 'bg-blue-900 text-white shadow-sm' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Conducting Body Filter */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-slate-500 font-medium">Conducting Body:</span>
            <select
              value={selectedBody}
              onChange={(e) => setSelectedBody(e.target.value)}
              className="text-xs font-semibold bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {ALL_CONDUCTING_BODIES.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>

      </div>

      {/* Results Count Banner */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>Showing <strong>{filteredExams.length}</strong> examinations</span>
        {onlyEligible && (
          <span className="text-blue-600 font-semibold">
            Filtered by academic & domicile eligibility for {currentProfile.name}
          </span>
        )}
      </div>

      {/* Exam Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExams.map((exam) => {
          const audit = evaluateStudentEligibility(currentProfile, exam);
          const isPinned = currentProfile.targetExams.includes(exam.id);

          return (
            <div 
              key={exam.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-gov hover:border-blue-400 transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Top Stripe */}
              <div className="p-6 space-y-4">
                
                {/* Header row: Code, Category, Bookmark */}
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="inline-block px-2 py-0.5 rounded text-xs font-black bg-blue-100 text-blue-800">
                      {exam.code}
                    </span>
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {exam.category}
                    </p>
                  </div>

                  <button
                    onClick={() => handleTogglePin(exam.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-amber-500 hover:bg-slate-50 transition-colors"
                    title={isPinned ? 'Remove from My Dashboard' : 'Pin to My Dashboard'}
                  >
                    {isPinned ? (
                      <BookmarkCheck className="w-5 h-5 text-amber-500 fill-amber-500" />
                    ) : (
                      <Bookmark className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Exam Title */}
                <div>
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-700 transition-colors leading-tight">
                    {exam.shortName}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">{exam.conductingBody}</p>
                </div>

                {/* Status Badge */}
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-bold text-slate-700">{exam.status}</span>
                </div>

                {/* Description snippet */}
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {exam.description}
                </p>

                {/* Eligibility Audit Badge for Current Student */}
                <div className={`p-2.5 rounded-xl text-xs border ${
                  audit.status === 'ELIGIBLE'
                    ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                    : audit.status === 'CAUTION'
                      ? 'bg-amber-50/80 border-amber-200 text-amber-900'
                      : 'bg-red-50/80 border-red-200 text-red-900'
                }`}>
                  <div className="flex items-center space-x-1.5 font-bold">
                    {audit.status === 'ELIGIBLE' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                    {audit.status === 'CAUTION' && <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />}
                    {audit.status === 'INELIGIBLE' && <ShieldAlert className="w-3.5 h-3.5 text-red-600 shrink-0" />}
                    <span className="truncate">{audit.percentageCheck.message}</span>
                  </div>
                </div>

                {/* Next Milestone */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Next Milestone:</span>
                  <span className="font-mono font-bold text-slate-800">{exam.deadlines.find(d => d.isNext)?.date || 'See Schedule'}</span>
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalExam(exam)}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                >
                  <span>View Details & Rules</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={exam.officialPortal}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-slate-700 transition-colors"
                  title="Open Official Website"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredExams.length === 0 && (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 max-w-lg mx-auto space-y-4">
          <Info className="w-12 h-12 text-slate-400 mx-auto" />
          <h3 className="text-lg font-bold text-slate-800">No examinations matched your filters</h3>
          <p className="text-xs text-slate-500">
            Try adjusting your search terms or unchecking the "Show Only Eligible" toggle to browse all portals.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedStream('All Streams');
              setSelectedBody('All');
              setOnlyEligible(false);
            }}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Detail Modal */}
      {activeModalExam && (
        <ExamDetailModal
          exam={activeModalExam}
          currentProfile={currentProfile}
          onClose={() => setActiveModalExam(null)}
          onPinToggle={handleTogglePin}
          isPinned={currentProfile.targetExams.includes(activeModalExam.id)}
        />
      )}

    </div>
  );
}
