import React, { useState } from 'react';
import { 
  FolderCheck, 
  Upload, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  FileText, 
  Download, 
  ShieldCheck, 
  HelpCircle,
  FileSearch,
  Sparkles,
  ExternalLink,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DocumentVault({ currentProfile, setCurrentProfile }) {
  const [selectedDocId, setSelectedDocId] = useState(currentProfile.documents[0]?.id || 'doc-1');
  const [simulatedIssueDate, setSimulatedIssueDate] = useState('2025-05-10');
  const [simulatedAuthority, setSimulatedAuthority] = useState('Tehsildar / District Magistrate');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationFeedback, setVerificationFeedback] = useState(null);

  // Compute readiness
  const verifiedCount = currentProfile.documents.filter(d => d.status === 'verified').length;
  const totalCount = currentProfile.documents.length;
  const readinessPct = Math.round((verifiedCount / totalCount) * 100);

  const selectedDoc = currentProfile.documents.find(d => d.id === selectedDocId) || currentProfile.documents[0];

  const handleSimulateVerification = () => {
    setIsVerifying(true);
    setVerificationFeedback(null);

    setTimeout(() => {
      setIsVerifying(false);
      const isOBC = selectedDoc.name.toLowerCase().includes('obc');
      const isDateOld = new Date(simulatedIssueDate) < new Date('2025-04-01');

      if (isOBC && isDateOld) {
        setVerificationFeedback({
          status: 'REJECTED_STALE_DATE',
          title: 'Certificate Stale: Issued Prior to April 1, 2025',
          message: 'Central Admission Boards (JoSAA, MCC, CSAB) strictly reject OBC-NCL certificates issued before 01-April-2025. You will lose your OBC reservation rank and be converted to Open category.',
          actionNeeded: 'Upload Annexure IV Undertaking immediately or obtain renewed certificate from Tehsildar before Round 5 reporting.'
        });
      } else {
        setVerificationFeedback({
          status: 'PASSED',
          title: 'Document Validated & Format Compliant',
          message: `Issued on ${simulatedIssueDate} by ${simulatedAuthority}. Meets Central Government gazette guidelines for 2026 admissions.`,
          actionNeeded: 'Ready for digital portal upload and physical reporting.'
        });

        // Update profile doc status to verified
        const updatedDocs = currentProfile.documents.map(d => {
          if (d.id === selectedDoc.id) {
            return { ...d, status: 'verified', note: 'Verified via Guardian Date-Guard' };
          }
          return d;
        });
        setCurrentProfile({ ...currentProfile, documents: updatedDocs });

        confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      }
    }, 1200);
  };

  const handleDownloadUndertaking = () => {
    const undertakingText = `ANNEXURE IV: UNDERTAKING FOR OBC-NCL / EWS CERTIFICATE
Admission Year: 2026-27 | JoSAA / CSAB / MCC Central Admissions

I, ${currentProfile.name}, application candidate under category ${currentProfile.category}, do hereby undertake that:
1. I have applied for the renewal of my ${currentProfile.category} certificate for Financial Year 2024-25.
2. I shall produce the original valid certificate issued on or after April 1, 2025 to the Allocated Institute at the time of final reporting.
3. In case I fail to produce the certificate, my claim for reserved seat shall stand cancelled and my seat will be forfeited.

Candidate Name: ${currentProfile.name}
Date: ${new Date().toLocaleDateString()}
Signature: [Digitally Stamped by Admission Guardian]`;

    const blob = new Blob([undertakingText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Annexure_IV_Undertaking_${currentProfile.name.replace(/\s+/g, '_')}.txt`;
    a.click();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Title */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            Document Date-Guard & Readiness Locker
          </span>
          <span className="text-xs text-slate-500">• Prevents #1 Cause of Admission Cancellation</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900">
          Student Document Readiness Vault
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl">
          More than 15,000 students lose their seats every year due to incorrect certificate formats (e.g., State OBC certificates lacking central listing, or certificates issued before April 1st). Our vault verifies your certificates against statutory Central and State standards.
        </p>
      </div>

      {/* Readiness Overview Banner */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 flex items-center space-x-2">
              <FolderCheck className="w-5 h-5 text-emerald-600" />
              <span>Overall Reporting Readiness Score</span>
            </h2>
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
              {readinessPct}% Complete
            </span>
          </div>

          <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-emerald-600 h-3 rounded-full transition-all duration-700" 
              style={{ width: `${readinessPct}%` }}
            ></div>
          </div>

          <p className="text-xs text-slate-500">
            {verifiedCount} of {totalCount} mandatory documents verified. {totalCount - verifiedCount > 0 ? `${totalCount - verifiedCount} require your urgent attention before online reporting opens.` : 'All required certificates verified!'}
          </p>
        </div>

        <div className="md:col-span-4 bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center space-x-3">
          <ShieldCheck className="w-8 h-8 text-blue-600 shrink-0" />
          <div className="text-xs">
            <p className="font-bold text-slate-900">DigiLocker Integration Ready</p>
            <p className="text-slate-500 text-[11px]">API bridge ready for NAD & DigiLocker e-credentials.</p>
          </div>
        </div>
      </div>

      {/* Main Grid: Document List + Simulated Verification Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Required Documents Checklist */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
          <h3 className="font-bold text-slate-900 text-base flex items-center space-x-2">
            <FileText className="w-4 h-4 text-blue-600" />
            <span>Required Certificates for {currentProfile.name} ({currentProfile.category})</span>
          </h3>

          <div className="space-y-3">
            {currentProfile.documents.map((doc) => {
              const isSelected = selectedDoc.id === doc.id;
              return (
                <div
                  key={doc.id}
                  onClick={() => {
                    setSelectedDocId(doc.id);
                    setVerificationFeedback(null);
                  }}
                  className={`p-4 rounded-xl border text-xs cursor-pointer transition-all space-y-1.5 ${
                    isSelected 
                      ? 'bg-blue-50/70 border-blue-400 shadow-sm ring-1 ring-blue-400' 
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {doc.status === 'verified' && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                      {doc.status === 'attention_required' && <AlertTriangle className="w-4 h-4 text-amber-600" />}
                      {doc.status === 'pending' && <Clock className="w-4 h-4 text-slate-400" />}
                      <span className="font-bold text-slate-900">{doc.name}</span>
                    </div>
                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                      doc.status === 'verified'
                        ? 'bg-emerald-100 text-emerald-800'
                        : doc.status === 'attention_required'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-slate-200 text-slate-600'
                    }`}>
                      {doc.status === 'verified' ? 'Verified' : doc.status === 'attention_required' ? 'Needs Action' : 'Pending'}
                    </span>
                  </div>

                  <p className="text-slate-500 text-[11px]">{doc.date}</p>
                  {doc.note && (
                    <p className="text-amber-800 font-semibold text-[11px] bg-amber-50 p-1.5 rounded">
                      ⚠️ {doc.note}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Download Official Undertaking Button */}
          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={handleDownloadUndertaking}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center space-x-2 transition-colors"
            >
              <Download className="w-4 h-4 text-slate-600" />
              <span>Download Official JoSAA Annexure IV Undertaking Draft</span>
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Certificate Date & Validity Inspector */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <FileSearch className="w-4 h-4 text-emerald-400" />
                <h3 className="font-bold text-sm tracking-wide text-white">
                  Certificate Date-Guard Simulator
                </h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                Statutory Rule Inspector
              </span>
            </div>

            <p className="text-xs text-slate-300">
              Simulate uploading or checking: <strong className="text-white">{selectedDoc.name}</strong>
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                  Certificate Issue Date
                </label>
                <input
                  type="date"
                  value={simulatedIssueDate}
                  onChange={(e) => setSimulatedIssueDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white font-mono text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <p className="text-[10px] text-amber-400 mt-1">
                  *Central admissions require OBC-NCL & EWS dated on/after 01-April-2025.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                  Designated Issuing Authority
                </label>
                <select
                  value={simulatedAuthority}
                  onChange={(e) => setSimulatedAuthority(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Tehsildar / District Magistrate">District Magistrate / Tehsildar (Approved)</option>
                  <option value="Sub-Divisional Officer (SDO)">Sub-Divisional Officer / Revenue Officer (Approved)</option>
                  <option value="School Principal / Sarpanch">School Principal / Sarpanch (REJECTED by Central Boards)</option>
                </select>
              </div>

              <button
                onClick={handleSimulateVerification}
                disabled={isVerifying}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-colors disabled:opacity-50 shadow-md"
              >
                <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: isVerifying ? '1s' : '0s' }} />
                <span>{isVerifying ? 'Auditing Certificate Against Central Gazette...' : 'Run Date-Guard Verification Audit'}</span>
              </button>
            </div>

            {/* Verification Result Output */}
            {verificationFeedback && (
              <div className={`p-4 rounded-xl border text-xs space-y-2 animate-in fade-in duration-150 ${
                verificationFeedback.status === 'PASSED'
                  ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-200'
                  : 'bg-red-950/40 border-red-800/60 text-red-200'
              }`}>
                <div className="flex items-center space-x-2 font-bold text-sm">
                  {verificationFeedback.status === 'PASSED' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
                  )}
                  <span>{verificationFeedback.title}</span>
                </div>
                <p className="text-xs leading-relaxed text-slate-200">
                  {verificationFeedback.message}
                </p>
                <div className="pt-2 border-t border-white/10 text-[11px]">
                  <strong className="text-white">Required Next Action:</strong> {verificationFeedback.actionNeeded}
                </div>
              </div>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
