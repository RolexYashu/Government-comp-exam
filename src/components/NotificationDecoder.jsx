import React, { useState } from 'react';
import { 
  Sparkles, 
  FileText, 
  AlertTriangle, 
  Clock, 
  CheckCircle2, 
  Send, 
  Copy, 
  Check, 
  Languages, 
  ShieldAlert, 
  BookOpen,
  ArrowRight,
  Bot
} from 'lucide-react';
import { SAMPLE_NOTIFICATIONS } from '../data/sampleNotifications';
import { decodeNotificationWithAI } from '../services/aiService';

export default function NotificationDecoder({ openAiChat }) {
  const [selectedSample, setSelectedSample] = useState(SAMPLE_NOTIFICATIONS[0]);
  const [customText, setCustomText] = useState(SAMPLE_NOTIFICATIONS[0].rawText);
  const [isDecoding, setIsDecoding] = useState(false);
  const [decodedOutput, setDecodedOutput] = useState(SAMPLE_NOTIFICATIONS[0].aiDecoded);
  const [modelSource, setModelSource] = useState('Guardian Natural Language Gazette Extractor');
  const [copied, setCopied] = useState(false);

  const handleSelectSample = (sample) => {
    setSelectedSample(sample);
    setCustomText(sample.rawText);
    setDecodedOutput(sample.aiDecoded);
    setModelSource('Pre-Trained Government Admission Gazette Model');
  };

  const handleRunAiDecoder = async () => {
    if (!customText.trim()) return;
    setIsDecoding(true);

    try {
      const res = await decodeNotificationWithAI(customText);
      setDecodedOutput(res.data);
      setModelSource(res.source);
    } catch (e) {
      console.error(e);
    } finally {
      setIsDecoding(false);
    }
  };

  const handleCopyChecklist = () => {
    if (!decodedOutput?.studentChecklist) return;
    const text = decodedOutput.studentChecklist.join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Page Header */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
            LLM Powered Innovation
          </span>
          <span className="text-xs text-slate-500">• Converts 40-Page Bureaucratic PDFs into Plain Action Points</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900">
          Official Notification & Gazette AI Decoder
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl">
          Bureaucratic admission circulars are packed with legal citations (DoPT rules, OM clauses, forfeiture clauses). Our LLM parses dense circulars, extracts strict deadlines, flags disqualification traps, and explains everything in plain English and Hindi.
        </p>
      </div>

      {/* Preset Gazette Samples Selector */}
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Test With Real High-Stakes Government Notifications:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {SAMPLE_NOTIFICATIONS.map((sample) => (
            <button
              key={sample.id}
              onClick={() => handleSelectSample(sample)}
              className={`text-left p-3.5 rounded-xl border transition-all text-xs space-y-1.5 ${
                selectedSample.id === sample.id 
                  ? 'bg-purple-50/70 border-purple-400 shadow-sm ring-1 ring-purple-400' 
                  : 'bg-white border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 truncate">{sample.issuer}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded font-bold bg-amber-100 text-amber-800">
                  {sample.badge}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                {sample.title}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Two Column Layout: Raw Input vs AI Parsed Action Plan */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Gazette Text Area */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700 uppercase flex items-center space-x-1.5">
                <FileText className="w-4 h-4 text-purple-600" />
                <span>Raw Government Notification / Circular Text</span>
              </label>
              <span className="text-[11px] text-slate-400">PDF Gazette / Bulletin</span>
            </div>

            <textarea
              rows={14}
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              placeholder="Paste any government circular, court order, or admission notification here..."
              className="w-full p-4 rounded-xl border border-slate-200 font-mono text-xs leading-relaxed text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <span className="text-[11px] text-slate-500">
              Characters: {customText.length}
            </span>
            <button
              onClick={handleRunAiDecoder}
              disabled={isDecoding || !customText.trim()}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all disabled:opacity-50"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: isDecoding ? '1s' : '0s' }} />
              <span>{isDecoding ? 'Decoding with AI...' : 'Decode Circular with AI'}</span>
            </button>
          </div>
        </div>

        {/* Right Column: AI Decoded Output */}
        <div className="lg:col-span-6 space-y-4">
          
          <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-5">
            {/* Model Badge */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h3 className="font-bold text-sm tracking-wide text-white">
                  Intelligent Gazette Synthesis
                </h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-900/60 text-purple-300 border border-purple-700/50">
                {modelSource}
              </span>
            </div>

            {/* 1. Plain English Summary */}
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center space-x-1">
                <span>⚡ Plain English TL;DR (No Bureaucratic Jargon)</span>
              </p>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/80">
                {decodedOutput?.plainSummary || "Decoding..."}
              </p>
            </div>

            {/* 2. Vernacular (Hindi) Accessible Summary */}
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center space-x-1">
                <Languages className="w-3.5 h-3.5" />
                <span>🇮🇳 सरल हिंदी अनुवाद (Vernacular Summary)</span>
              </p>
              <p className="text-xs sm:text-sm text-amber-100 leading-relaxed bg-amber-950/30 p-3.5 rounded-xl border border-amber-800/40">
                {decodedOutput?.vernacularSummary || "हिंदी अनुवाद लोड हो रहा है..."}
              </p>
            </div>

            {/* 3. Disqualification Traps & Warnings */}
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center space-x-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>⚠️ High-Stakes Disqualification Traps</span>
              </p>
              <div className="space-y-1.5">
                {decodedOutput?.warnings?.map((w, idx) => (
                  <div key={idx} className="bg-red-950/30 border border-red-800/40 p-2.5 rounded-xl text-xs text-red-200 flex items-start space-x-2">
                    <span className="text-red-400 font-bold">•</span>
                    <span>{w}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Critical Deadlines Extracted */}
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5" />
                <span>⏰ Strict Cutoff Deadlines</span>
              </p>
              <div className="space-y-1.5">
                {decodedOutput?.criticalDeadlines?.map((d, idx) => (
                  <div key={idx} className="bg-emerald-950/30 border border-emerald-800/40 p-2.5 rounded-xl text-xs text-emerald-200 flex items-start space-x-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Student Action Checklist */}
            <div className="space-y-1.5 pt-2 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Immediate Student Action Checklist</span>
                </p>
                <button
                  onClick={handleCopyChecklist}
                  className="flex items-center space-x-1 text-[11px] text-slate-400 hover:text-white"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="space-y-1.5">
                {decodedOutput?.studentChecklist?.map((chk, idx) => (
                  <div key={idx} className="bg-purple-950/30 border border-purple-800/40 p-2.5 rounded-xl text-xs text-purple-200 flex items-start space-x-2">
                    <span className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{chk}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Quick Chat CTA */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bot className="w-5 h-5 text-purple-600" />
              <p className="text-xs text-slate-700 font-medium">Still confused about how this applies to your rank?</p>
            </div>
            <button
              onClick={openAiChat}
              className="text-xs font-bold text-purple-600 hover:text-purple-800"
            >
              Ask Guardian AI →
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
