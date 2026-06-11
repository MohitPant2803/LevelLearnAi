// LearnLevel AI - Comprehensive Ask AI Chatbot Q&A Database

const AI_QA_DATABASE = [
  {
    id: "purpose",
    keywords: ["what", "purpose", "mission", "learnlevel", "learnlevelai", "about", "why", "exist", "goal"],
    question: "What is the purpose of LearnLevel AI?",
    answer: "LearnLevel AI is an AI-powered personalized learning platform that maps and supports learners according to their actual competency levels, rather than just their age or class. Its mission is to support educators and volunteers in mapping skill gaps and recommending target worksheets for students."
  },
  {
    id: "diagnostic",
    keywords: ["diagnostic", "quiz", "test", "assessment", "wizard", "start", "setup", "begin", "evaluate"],
    question: "How does the Diagnostic Assessment work?",
    answer: "The Diagnostic Assessment Center allows mentors to evaluate a student. The wizard presents 4 simple multiple-choice questions depending on the chosen category (Child, Teenager, or Young Adult). It evaluates Literacy, Numeracy, Academics, Digital, or Communication skills to place the learner in a suitable Level."
  },
  {
    id: "saving",
    keywords: ["save", "storing", "save-to-dashboard", "submit", "record", "persist", "saving", "profile"],
    question: "How do I save a student's diagnostic results?",
    answer: "Once you complete the 4-question quiz, click 'Save to Educator Dashboard' on the results page. This automatically generates a learner profile with calculated skill averages, isolated gaps, and logs them in local memory, immediately updating dashboard charts and tables."
  },
  {
    id: "categories",
    keywords: ["category", "categories", "age", "brackets", "child", "teenager", "adult", "young_adult", "groups"],
    question: "What age groups are supported on the platform?",
    answer: "LearnLevel AI covers three major brackets:\n1. **Young Child (Ages 5-9)**: Foundational Literacy & Numeracy (L1-A to L1-C)\n2. **Teenager (Ages 10-14)**: Concept Clarity & Career Awareness (L2-A to L2-C)\n3. **Young Adult (Ages 15+)**: Digital Tools, Communication & Job Employability (L3-A to L3-C)."
  },
  {
    id: "levels-l1",
    keywords: ["l1", "l1-a", "l1-b", "l1-c", "child-level", "emergent", "phonics", "reading"],
    question: "What are the L1 levels for Young Children?",
    answer: "L1 levels target foundational literacy and numeracy:\n- **L1-A (Emergent)**: Letter recognition (A-Z) and counting up to 10.\n- **L1-B (Phonics & Operations)**: Short word sounds and addition/subtraction within 10.\n- **L1-C (Fluent Reading)**: Simple sentences and single-digit mathematical word problems."
  },
  {
    id: "levels-l2",
    keywords: ["l2", "l2-a", "l2-b", "l2-c", "teenager-level", "fractions", "scientific", "critical"],
    question: "What are the L2 levels for Teenagers?",
    answer: "L2 levels target concept clarity and career exposure:\n- **L2-A (Reading & Math)**: Reading comprehension and multi-digit mathematical operations.\n- **L2-B (Science & Applied Math)**: Introduction to scientific inquiry, fractions, and percentage logic.\n- **L2-C (Critical Thinking)**: Analyzing complex texts, expressing logical reasoning steps, and career role exposure."
  },
  {
    id: "levels-l3",
    keywords: ["l3", "l3-a", "l3-b", "l3-c", "adult-level", "employability", "office", "resume", "cv"],
    question: "What are the L3 levels for Young Adults?",
    answer: "L3 levels target job-readiness and digital skills:\n- **L3-A (Digital & Verbal)**: Basic computer interfaces, professional email settings, and verbal introductions.\n- **L3-B (Office & English)**: Spreadsheets formulas (SUM, AVERAGE), formal requests, and workspace collaboration.\n- **L3-C (Job-Ready)**: Resume/CV crafting, mock interviews, cover letters, and career tracking."
  },
  {
    id: "dashboard",
    keywords: ["dashboard", "educator", "tracker", "metrics", "monitoring", "average", "stats"],
    question: "What can I track on the Educator Dashboard?",
    answer: "The Educator Dashboard provides statistics on: Total Active Students, average academic baseline score, average digital literacy, and average communication scores. It also has interactive SVG charts for subject breakdowns, cohort age distribution, and longitudinal progress trends."
  },
  {
    id: "add-student",
    keywords: ["add", "new", "register", "create", "insert", "student", "learner", "profile"],
    question: "How do I add a new student?",
    answer: "There are two ways:\n1. Click '+ Add New Student' on the Educator Dashboard to open a quick modal and enter student grades, gaps, and levels manually.\n2. Go to the 'Diagnostic Test' tab and let the student complete the quiz; it will auto-calculate their level and let you save their profile."
  },
  {
    id: "delete-student",
    keywords: ["delete", "remove", "erase", "discard", "student", "profile"],
    question: "How do I delete a student profile?",
    answer: "Go to the Student Progress Tracker table on the Educator Dashboard. Identify the student row, and click the red '✕' action button on the far right. Confirm the dialog warning to remove the profile and update class averages."
  },
  {
    id: "student-profile",
    keywords: ["profile", "details", "trajectory", "trend", "individual", "report", "progress"],
    question: "How do I view a student's individual progress profile?",
    answer: "On the Educator Dashboard table, click the 'Profile' button in any student's row. This opens a large modal showing detailed scores across all subjects, their specific gap list, recommended worksheets, and a customized longitudinal trend chart showing their milestones."
  },
  {
    id: "charts",
    keywords: ["charts", "svg", "visualizations", "donut", "bar", "trend", "line-chart", "graphs"],
    question: "What charts are available on the dashboard?",
    answer: "There are three interactive SVG charts:\n1. **Subject Competency (Bar Chart)**: Shows averages in Academics, Digital, Communication, and Employability.\n2. **Cohort Distribution (Donut Chart)**: Shows percentage splits of Child/Teen/Adult cohorts.\n3. **Longitudinal Trend (Line Chart)**: Tracks the collective progress average over historical months."
  },
  {
    id: "worksheets",
    keywords: ["worksheets", "vault", "library", "printable", "download", "pdf", "tasks", "checklist"],
    question: "How do I use worksheets in the library?",
    answer: "Go to the 'Resources Library' tab. Click on any worksheet card (arranged in a tidy 3-column grid) to open a checklist preview modal detailing estimated time, learning topics, and educator notes. Click 'Download Practice Pack' to simulate saving the PDF pack."
  },
  {
    id: "subject-filters",
    keywords: ["filter", "sorting", "chips", "search", "subject", "literacy", "numeracy", "digital", "communication"],
    question: "How do I search or filter resources?",
    answer: "At the top of the Resource Vault, click on the **Age Category tabs** to select a cohort (Child, Teenager, Young Adult). You can also click the **horizontal subject chips** (e.g. Literacy, Digital Skills) to instantly narrow down matches. Empty level headers are automatically hidden."
  },
  {
    id: "tech-stack",
    keywords: ["tech", "stack", "framework", "technologies", "javascript", "css", "html", "code", "packages"],
    question: "What technologies were used to build this website?",
    answer: "The project is built entirely on a lightweight vanilla stack to guarantee zero-lag performance:\n- **Structure**: Semantic HTML5\n- **Styling**: Vanilla CSS3 (Custom properties/variables, media queries, keyframe animations)\n- **Logic**: Vanilla ES6 JavaScript (No frameworks like React or Tailwind, ensuring lightweight rendering)."
  },
  {
    id: "how-to-run",
    keywords: ["run", "install", "server", "deploy", "local", "python", "localhost", "port"],
    question: "How do I run this website locally?",
    answer: "Open a terminal inside the project workspace folder and boot up a lightweight HTTP server. For example, using Python:\n`python -m http.server 8000`\nThen, open your web browser and navigate to: `http://localhost:8000`."
  },
  {
    id: "license",
    keywords: ["license", "mit", "open", "source", "github", "git", "remote"],
    question: "Is this project open source?",
    answer: "Yes, LearnLevel AI is open-source under the MIT license. You can find the remote repository on GitHub at: `https://github.com/MohitPant2803/LevelLearnAi.git`."
  },
  {
    id: "dark-mode",
    keywords: ["theme", "dark", "light", "toggle", "sun", "moon", "recolor"],
    question: "Does the website support dark mode?",
    answer: "Yes, there is an accessible sun/moon toggle button in the top-right header. In dark mode, the site transitions to a premium 'Starry Indigo Night' theme, and all dynamic SVG charts adjust their text colors automatically for optimal contrast."
  },
  {
    id: "creator",
    keywords: ["author", "creator", "built", "who", "developer", "pair", "antigravity"],
    question: "Who developed LearnLevel AI?",
    answer: "LearnLevel AI was designed and programmed by Antigravity, a powerful agentic AI coding assistant from Google DeepMind, pair-programming with the developer Mohit Pant."
  },
  {
    id: "performance",
    keywords: ["lag", "slow", "performance", "rendering", "scroll", "heavy", "optimized"],
    question: "Why does the site run so smoothly without lag?",
    answer: "The platform has been optimized for high performance:\n1. Replaced heavy CSS `backdrop-filter` blurs on headers and modal overlays with solid/translucent alpha HSL variables to prevent GPU paint latency.\n2. Replaced `transition: all` rules on cards and inputs with specific properties (`transform`, `box-shadow`, `border-color`) to avoid layout thrashing."
  },
  {
    id: "gaps",
    keywords: ["gaps", "skill", "weakness", "borrowing", "phonics", "fraction", "formula"],
    question: "What are identified skill gaps?",
    answer: "Skill gaps are specific, localized conceptual roadblocks isolated by the diagnostic assessment (e.g. 'subtraction borrowing', 'phonics letter sounds', 'Excel formulas'). Instead of declaring a child failing, the platform identifies the exact roadblock to target."
  },
  {
    id: "apple-design",
    keywords: ["apple", "premium", "finish", "design", "aesthetics", "kerning", "stepper"],
    question: "What features give the site its premium Apple-like finish?",
    answer: "The premium feel is established through:\n1. Tight letter-spacing/kerning on Outfit headings (`-0.025em` and `-0.04em`).\n2. Sleek, perfectly rounded buttons (`.btn-pill`).\n3. Modern macOS/iOS split-layout CTA cards with deep metallic gradients.\n4. Segmented controllers and custom SVG vector icons instead of emojis."
  },
  {
    id: "persistence",
    keywords: ["database", "save", "reload", "refresh", "lost", "memory", "permanent"],
    question: "Does student data persist when I reload the page?",
    answer: "In this mock frontend demonstration, new student profiles are added to the active session list in JavaScript memory. While it reflects live updates on charts and tables immediately, refreshing the browser will reset the database back to the default mock cohort."
  },
  {
    id: "volunteer",
    keywords: ["volunteer", "nonprofit", "ngo", "mentor", "tutor", "teacher", "classes"],
    question: "Is this platform suitable for volunteer tutoring groups?",
    answer: "Absolutely! LearnLevel AI is designed specifically for volunteer networks, NGOs, and non-traditional educational environments. It enables non-professional teachers or mentors to quickly evaluate students and immediately unlock structured, level-appropriate teaching worksheets."
  }
];
