import React, { useState } from 'react';
import { 
  Layers, 
  CheckCircle2, 
  HelpCircle, 
  AlertTriangle, 
  ArrowRight, 
  RotateCcw, 
  ShieldAlert, 
  Sparkles,
  Info,
  DollarSign,
  Building
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CounsellingSimulator({ currentProfile }) {
  const [counsellingType, setCounsellingType] = useState('JoSAA'); // JoSAA | MCC
  const [currentSimRound, setCurrentSimRound] = useState(1);
  const [selectedDecision, setSelectedDecision] = useState(null); // freeze | float | slide
  const [feePaid, setFeePaid] = useState(false);
  const [simulationLog, setSimulationLog] = useState([
    "Round 1 Result Announced: You have been allotted Choice #4: NIT Surathkal — Mechanical Engineering (Home State OBC-NCL Quota)."
  ]);

  const handleDecision = (decision) => {
    setSelectedDecision(decision);
    if (decision === 'freeze') {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    }
  };

  const handlePayFee = () => {
    setFeePaid(true);
    confetti({ particleCount: 50, spread: 50, origin: { y: 0.7 } });
  };

  const handleAdvanceToRound2 = () => {
    if (!feePaid) {
      alert("FATAL ERROR: You cannot advance without paying the Seat Acceptance Fee (SAF). In real JoSAA/MCC, your seat is cancelled and you are permanently debarred!");
      return;
    }

    setCurrentSimRound(2);
    if (selectedDecision === 'freeze') {
      setSimulationLog(prev => [
        ...prev,
        "Round 2: You opted for FREEZE in Round 1. Your seat at NIT Surathkal (Mechanical) is locked permanently. You have exited further rounds and are ready for physical reporting."
      ]);
    } else if (selectedDecision === 'float') {
      setSimulationLog(prev => [
        ...prev,
        "Round 2: FLOAT Upgraded! Your preference list was processed. Upgraded to Choice #2: NIT Trichy — Electrical & Electronics Engineering! Your previous seat at NIT Surathkal was automatically released to next merit student."
      ]);
    } else if (selectedDecision === 'slide') {
      setSimulationLog(prev => [
        ...prev,
        "Round 2: SLIDE Upgraded! Upgraded within the SAME institute to Choice #3: NIT Surathkal — Computer Science & Engineering!"
      ]);
    }
  };

  const handleResetSimulation = () => {
    setCurrentSimRound(1);
    setSelectedDecision(null);
    setFeePaid(false);
    setSimulationLog([
      "Round 1 Result Announced: You have been allotted Choice #4: NIT Surathkal — Mechanical Engineering (Home State OBC-NCL Quota)."
    ]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Title */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-2.5 py-0.5 rounded-full border border-cyan-200">
            Interactive Business Rules Playground
          </span>
          <span className="text-xs text-slate-500">• Central Seat Allocation Simulator</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900">
          Counselling & Seat Allocation Round Simulator
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl">
          Making the wrong choice during online seat allocation can cause permanent seat loss. Experience JoSAA & MCC Round 1-6 decisions (Freeze, Float, Slide, SAF Payment) in this safe interactive sandbox.
        </p>
      </div>

      {/* Simulator Portal Window */}
      <div className="bg-white rounded-3xl shadow-gov border border-slate-200 overflow-hidden">
        
        {/* Portal Header */}
        <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center border border-cyan-500/30">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg">Central Seat Allocation Simulator</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-600 text-white font-bold">
                  Round {currentSimRound}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Simulating: {currentProfile.name} • Category: {currentProfile.category}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleResetSimulation}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Sandbox</span>
            </button>
          </div>
        </div>

        {/* Simulator Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Round 1 Simulated Allotment Result Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                  Provisional Seat Allocation Result: Round {currentSimRound}
                </span>
              </div>
              <span className="text-xs font-mono font-bold bg-white px-2.5 py-1 rounded-full text-slate-700 border border-slate-200">
                Quota: {currentProfile.category} (Home State)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className="bg-white p-3.5 rounded-xl border border-blue-100">
                <p className="text-[11px] font-bold text-slate-400 uppercase">Allotted Institute</p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">
                  {currentSimRound === 1 
                    ? "National Institute of Technology Karnataka (NIT Surathkal)"
                    : selectedDecision === 'float'
                      ? "National Institute of Technology (NIT Trichy)"
                      : "National Institute of Technology Karnataka (NIT Surathkal)"
                  }
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-blue-100">
                <p className="text-[11px] font-bold text-slate-400 uppercase">Allocated Academic Program</p>
                <p className="text-sm font-bold text-blue-700 mt-0.5">
                  {currentSimRound === 1 
                    ? "Mechanical Engineering (4 Years, B.Tech)"
                    : selectedDecision === 'float'
                      ? "Electrical & Electronics Engg (4 Years, B.Tech)"
                      : selectedDecision === 'slide'
                        ? "Computer Science & Engineering (4 Years, B.Tech)"
                        : "Mechanical Engineering (4 Years, B.Tech)"
                  }
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-blue-100">
                <p className="text-[11px] font-bold text-slate-400 uppercase">Preference Order</p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">
                  Choice #{currentSimRound === 1 ? '4' : selectedDecision === 'float' ? '2' : selectedDecision === 'slide' ? '3' : '4'} of 48 Submitted
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Decision Options (Freeze, Float, Slide) */}
          {currentSimRound === 1 && (
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-slate-900 text-base">
                  Step 1: Choose Your Willingness Option for Round 2
                </h3>
                <p className="text-xs text-slate-500">
                  Select one of the three statutory options prescribed under JoSAA Business Rule Clause 48:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Option 1: Freeze */}
                <div
                  onClick={() => handleDecision('freeze')}
                  className={`p-5 rounded-2xl border text-xs cursor-pointer transition-all space-y-3 ${
                    selectedDecision === 'freeze'
                      ? 'bg-emerald-50 border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-sm text-emerald-900">1. FREEZE</span>
                    {selectedDecision === 'freeze' && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    You <strong>accept</strong> the allotted seat at NIT Surathkal Mechanical and <strong>exit further rounds</strong>. You do NOT want to be considered for any higher choices.
                  </p>
                  <div className="p-2 rounded-lg bg-emerald-100/60 text-emerald-900 font-semibold text-[11px]">
                    Best when: You got your dream branch and want zero further changes.
                  </div>
                </div>

                {/* Option 2: Float */}
                <div
                  onClick={() => handleDecision('float')}
                  className={`p-5 rounded-2xl border text-xs cursor-pointer transition-all space-y-3 ${
                    selectedDecision === 'float'
                      ? 'bg-blue-50 border-blue-500 shadow-md ring-2 ring-blue-500/20'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-sm text-blue-900">2. FLOAT (Recommended)</span>
                    {selectedDecision === 'float' && <CheckCircle2 className="w-5 h-5 text-blue-600" />}
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    You <strong>keep this seat safe</strong> as your guaranteed fallback, but want to upgrade to <strong>any higher preference in ANY institute</strong> in subsequent rounds.
                  </p>
                  <div className="p-2 rounded-lg bg-blue-100/60 text-blue-900 font-semibold text-[11px]">
                    Safety guarantee: You NEVER lose this seat unless upgraded to a higher choice!
                  </div>
                </div>

                {/* Option 3: Slide */}
                <div
                  onClick={() => handleDecision('slide')}
                  className={`p-5 rounded-2xl border text-xs cursor-pointer transition-all space-y-3 ${
                    selectedDecision === 'slide'
                      ? 'bg-purple-50 border-purple-500 shadow-md ring-2 ring-purple-500/20'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-sm text-purple-900">3. SLIDE</span>
                    {selectedDecision === 'slide' && <CheckCircle2 className="w-5 h-5 text-purple-600" />}
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    You <strong>keep this seat safe</strong>, but only want to upgrade to higher preference branches within the <strong>SAME allotted institute</strong> (NIT Surathkal).
                  </p>
                  <div className="p-2 rounded-lg bg-purple-100/60 text-purple-900 font-semibold text-[11px]">
                    Best when: You love the college location and will only change branches within it.
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Step 2: Seat Acceptance Fee (SAF) Payment */}
          {selectedDecision && currentSimRound === 1 && (
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-300/80 space-y-4 animate-in fade-in duration-150">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-bold text-amber-950 text-sm flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Step 2: Mandatory Seat Acceptance Fee (SAF) Payment</span>
                  </h3>
                  <p className="text-xs text-amber-900 mt-0.5">
                    Amount: <strong>₹35,000</strong> ({currentProfile.category} candidate rate: ₹{currentProfile.category === 'SC' || currentProfile.category === 'ST' ? '17,500' : '35,000'}).
                  </p>
                </div>

                <button
                  onClick={handlePayFee}
                  disabled={feePaid}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
                    feePaid 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-amber-600 hover:bg-amber-700 text-white shadow-sm'
                  }`}
                >
                  {feePaid ? '✓ Fee Paid (Receipt Generated)' : 'Simulate SAF Fee Payment'}
                </button>
              </div>

              {!feePaid && (
                <p className="text-xs font-bold text-red-600">
                  ⚠️ Critical Warning: If SAF is not paid before Round 1 deadline, the seat is permanently cancelled!
                </p>
              )}
            </div>
          )}

          {/* Advance to Round 2 button */}
          {selectedDecision && feePaid && currentSimRound === 1 && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleAdvanceToRound2}
                className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-all shadow-md"
              >
                <span>Advance Simulator to Round 2 Allocation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Round 2 Outcome view */}
          {currentSimRound === 2 && (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 space-y-3 animate-in fade-in duration-150">
              <div className="flex items-center space-x-2 text-emerald-900 font-bold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Round 2 Allocation Confirmed!</span>
              </div>
              <p className="text-xs text-emerald-950 leading-relaxed">
                Notice how your decision played out in Round 2: Because you paid the SAF and chose <strong>{selectedDecision.toUpperCase()}</strong>, your merit position was evaluated smoothly without risking your admission!
              </p>
              <button
                onClick={handleResetSimulation}
                className="mt-2 px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs"
              >
                Try Another Scenario
              </button>
            </div>
          )}

          {/* Activity Audit Log */}
          <div className="bg-slate-900 text-white rounded-2xl p-4 font-mono text-xs space-y-2">
            <p className="text-[11px] font-bold uppercase text-slate-400">Official Allocation Ledger Audit Log:</p>
            {simulationLog.map((log, idx) => (
              <p key={idx} className="text-emerald-300">• {log}</p>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}
