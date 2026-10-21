# Government Exams Portal Unofficial
### Intelligent Examination & Counselling Companion
**Theme:** Government · Digital Governance  
**Hackathon:** IEE 2026 (Ideas | Innovation | Impact — 100 Marks Rubric)

---

## 🚀 How to Run the Project

1. Open PowerShell or Command Prompt in this folder:
   ```bash
   cd "C:\Users\Yashawanthy s b\OneDrive\Desktop\Government-Exams-Portal-Unofficial"
   ```

2. Install dependencies (if running for the first time):
   ```bash
   npm install
   ```

3. Start the dev server:
   ```bash
   npm run dev -- --host
   ```

4. Open in your browser:
   - **Local computer:** [http://localhost:3000](http://localhost:3000)
   - **Mobile / Friends on same Wi-Fi:** `http://192.168.0.168:3000`

---

## 📁 Project Structure & File Guide

```
Government-Exams-Portal-Unofficial/
│
├── index.html                   # HTML entry point with government styling & metadata
├── package.json                 # Project dependencies & npm scripts (Vite, Tailwind, React)
├── vite.config.js               # Vite bundler configuration
├── tailwind.config.js           # GovTech color palette & design tokens
├── postcss.config.js            # Tailwind PostCSS configuration
│
└── src/
    ├── main.jsx                 # React root render entry
    ├── App.jsx                  # Main router, active student state & persistent brand manager
    ├── index.css                # Global CSS, national tricolor stripes & animations
    │
    ├── components/
    │   ├── Navbar.jsx           # Government header with brand editor & multilingual selector
    │   ├── LandingPage.jsx      # Hero section, live metrics & 1-click test student switchers
    │   ├── Dashboard.jsx        # Core Innovation: "What to do next, why it matters, by when"
    │   ├── ExamCatalog.jsx      # Directory with search & stream/conducting body filters
    │   ├── ExamDetailModal.jsx  # Deep-dive exam details, dates, documents & official rules
    │   ├── ProfileEligibilityWizard.jsx # 3-step profile form with real-time audit engine
    │   ├── NotificationDecoder.jsx      # AI Gazette Decoder (plain English & Hindi actions)
    │   ├── DocumentVault.jsx    # Certificate Date-Guard & JoSAA Annexure IV generator
    │   ├── CounsellingSimulator.jsx     # Interactive Freeze / Float / Slide sandbox
    │   ├── AIAssistantModal.jsx # 24/7 AI mentor with custom Gemini API support
    │   ├── JudgeRubricModal.jsx # IEE 2026 Hackathon 100-mark scoring defense panel
    │   ├── BrandModal.jsx       # Interactive portal title & branding customizer
    │   └── Footer.jsx           # Digital India footer, DPDP Act 2023 compliance & links
    │
    ├── data/
    │   ├── examsData.js         # Comprehensive datasets for JEE, NEET, CUET, KCET, UPSC, etc.
    │   ├── demoProfiles.js      # 1-click test student personas (Priya - OBC, Rahul - SC, etc.)
    │   └── sampleNotifications.js # Real gazette circulars for AI decoder testing
    │
    ├── services/
    │   └── aiService.js         # Hybrid LLM engine (Google Gemini API + offline heuristic model)
    │
    └── utils/
        └── eligibilityEngine.js # Mathematical verification of board marks, subjects & quotas
```

---

## 🏆 IEE 2026 Hackathon Marking Scheme (100 Marks Breakdown)

- **1. Problem Understanding & Relevance (10 Marks):** Solves the real crisis where thousands of candidates miss non-extendable admission dates or face disqualification due to confusing gazettes.
- **2. Innovation & Originality (15 Marks):** Implements the 3-part Next-Action Engine, AI Notification Simplifier, Certificate Date-Guard, and Counselling Sandbox.
- **3. Technical Implementation (20 Marks):** React 18, Tailwind CSS, Lucide icons, and a resilient dual-tier LLM architecture.
- **4. Functionality & Working Prototype (20 Marks):** Complete end-to-end user flows with instant 1-click demo personas.
- **5. Impact & Usefulness (10 Marks):** Drastically cuts dependence on costly private admission consultancies.
- **6. Feasibility & Scalability (10 Marks):** Ready for DigiLocker, UMANG, and National Academic Depository integration.
- **7. UI/UX & Accessibility (5 Marks):** Mobile-first GovTech layout, Indian tricolor stripe, and multilingual support.
- **8. Presentation & Live Demo (5 Marks):** Built-in "IEE 2026 Rubric (100M)" interactive modal.
- **9. Q&A & Technical Defence (5 Marks):** DPDP Act 2023 compliance, offline fail-safe, and official portal source truth grounding.
