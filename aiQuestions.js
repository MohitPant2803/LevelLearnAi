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
  },
  {
    id: "search-filter-table",
    keywords: ["search", "find", "locate", "table", "student-search", "toolbar", "query", "filter-table"],
    question: "How does the student search toolbar work?",
    answer: "On the Educator Dashboard, there is a search bar directly above the student table. As you type, the table filters row-by-row in real-time, matching student names or assigned levels. If no students match your query, a 'No students found' placeholder appears."
  },
  {
    id: "offline",
    keywords: ["offline", "no-internet", "internet", "wifi", "local-only", "independent", "remote-area"],
    question: "Can I run this application offline?",
    answer: "Yes! Because the platform is built with pure vanilla HTML, CSS, and JS with no external database servers or API dependencies, it runs completely offline. You can open `index.html` in any browser or launch it locally without internet connectivity, which is ideal for remote rural schools."
  },
  {
    id: "reset-db",
    keywords: ["reset", "wipe", "clear", "restart", "refresh-database", "restore", "defaults"],
    question: "How do I reset the dashboard database back to defaults?",
    answer: "Simply refresh your browser page. Since student data is held in active browser JavaScript session memory, a page reload will wipe the newly added records and restore the original 8 default student profiles."
  },
  {
    id: "printing",
    keywords: ["print", "paper", "pdf-print", "hardcopy", "physical", "classroom"],
    question: "Can these worksheets be printed for physical classrooms?",
    answer: "Yes! Clicking on a worksheet card opens a details modal. Click the 'Download Practice Pack' button; in a production deployment, this compiles and prints a print-friendly PDF worksheet package ready for physical distribution to students without devices."
  },
  {
    id: "export",
    keywords: ["export", "csv", "excel", "download-data", "backup", "reports"],
    question: "Can I export student progress data to Excel or CSV?",
    answer: "While the current frontend prototype is focused on live dashboard SVG visualizations and student tracking tables, an 'Export to CSV' utility can be easily added to the table actions row for backup. Currently, data resides in the active browser session."
  },
  {
    id: "multiple-gaps",
    keywords: ["multiple", "gaps", "several", "weaknesses", "many-gaps", "all-gaps"],
    question: "What happens if a student has multiple skill gaps?",
    answer: "The diagnostic evaluation isolates all failed topics across the test. When you save the student profile, all identified gaps are logged as a bulleted list. The student detail profile modal then displays all gaps and suggests targeted worksheets corresponding to each of those gaps."
  },
  {
    id: "score-calculation",
    keywords: ["calculate", "score", "grades", "percentage", "how-scored", "evaluation-logic"],
    question: "How does the platform calculate diagnostic scores?",
    answer: "The diagnostic test consists of 4 questions. The scoring logic in `app.js` weights each correct answer. It calculates percentage benchmarks for Academics, Digital Literacy, and Communication skills, which then maps the student to an appropriate L1/L2/L3 letter band."
  },
  {
    id: "perfect-score",
    keywords: ["perfect", "100%", "all-correct", "high-score", "aced"],
    question: "What happens if a student gets a perfect 100% score?",
    answer: "If a student answers all diagnostic questions correctly, they are assigned the highest sub-level of their category (e.g. L1-C for Young Children, L2-C for Teenagers, L3-C for Young Adults) with an academic score of 100% and 'No active skill gaps detected'."
  },
  {
    id: "low-score",
    keywords: ["low", "0%", "failed", "struggling", "poor-score", "remedial"],
    question: "What happens if a student scores very low or 0%?",
    answer: "The platform places them in the emergent sub-level (e.g., L1-A, L2-A, L3-A) and tags all assessment topics as critical skill gaps. This ensures educators are prompted with the most foundational worksheets to help remediate their conceptual blockages."
  },
  {
    id: "custom-worksheets",
    keywords: ["custom", "add-worksheet", "upload", "new-worksheet", "create-activity"],
    question: "How do I add custom worksheets to the resources tab?",
    answer: "You can expand the resource collection by opening [mockData.js](file:///c:/Users/Mohit/Desktop/Devlopment/Web%20Dev/Learnlevelai/mockData.js) and adding a new worksheet object to the `WORKSHEETS_DATA` array. Specify its title, category, subject, level code, estimated minutes, and tasks checklist."
  },
  {
    id: "notifications",
    keywords: ["notifications", "toasts", "alerts", "popups", "feedback-message"],
    question: "Are there action notifications in the app?",
    answer: "Yes, the app features a custom CSS toast notification system. Whenever you add a new student, delete a record, reset the assessment, or trigger a worksheet download, a modern glassmorphic toast notification slides in at the top right to confirm the action."
  },
  {
    id: "accessibility",
    keywords: ["accessibility", "contrast", "aria", "screen-reader", "accessible"],
    question: "Is the website accessible for all users?",
    answer: "Yes, the site uses semantic HTML5 tags (header, main, section, footer), high-contrast text color combinations, custom HSL theme scaling, explicit ARIA labels on all buttons and input boxes, and keyboard-tabbable interactive layouts."
  },
  {
    id: "change-details",
    keywords: ["modify-student", "edit-profile", "change-age", "update-score", "rename"],
    question: "Can I modify student details after adding them?",
    answer: "In the current prototype, you can delete a student and re-add them with the correct parameters, or re-run their diagnostic assessment to save a new profile. Inline student editing is planned for a future release."
  },
  {
    id: "number-of-questions",
    keywords: ["questions-count", "how-many-questions", "quiz-length", "test-duration"],
    question: "How many questions are in each diagnostic test?",
    answer: "Each category quiz (Child, Teenager, Young Adult) contains exactly 4 curated questions. This keeps the initial evaluation light, fast, and stress-free for learners, avoiding the anxiety of long academic testing sessions."
  },
  {
    id: "student-limit",
    keywords: ["limit", "max-students", "capacity", "database-size", "storage-limit"],
    question: "Is there a limit to how many students I can add?",
    answer: "No, there is no technical limit to the number of students you can add in the active session memory. However, since the database is held in browser RAM, very large cohorts (thousands of records) might occupy memory until the page is refreshed."
  },
  {
    id: "chart-interaction",
    keywords: ["chart-click", "hover-chart", "interactive-graphs", "svg-interaction"],
    question: "Are the dashboard charts interactive?",
    answer: "Yes! Hovering over the custom SVG bar chart highlights specific subject bars. Hovering over the cohort donut chart highlights slices and reveals totals, and resizing your browser window automatically recalculates chart coordinates for fluid responsive rendering."
  },
  {
    id: "literacy-track",
    keywords: ["literacy", "reading", "spelling", "grammar", "english", "alphabet"],
    question: "What is covered in the Literacy track?",
    answer: "The Literacy track maps letter recognition (L1-A), phonics sounds and short words (L1-B), reading fluency and simple sentences (L1-C), up to advanced comprehension (L2-A) and critical analysis of complex texts (L2-C)."
  },
  {
    id: "numeracy-track",
    keywords: ["numeracy", "math", "counting", "addition", "subtraction", "operations", "fractions", "spreadsheets"],
    question: "What is covered in the Numeracy track?",
    answer: "The Numeracy track spans single-digit counting and basic calculations (L1-A, L1-B), multi-digit mathematical operations (L2-A), fractions, percentages, and scientific concept logic (L2-B), up to digital office spreadsheets and formulas (L3-B)."
  },
  {
    id: "employability-track",
    keywords: ["employability", "cv", "resume", "interview", "job", "career", "professional"],
    question: "What is covered in the Employability track?",
    answer: "Designed for Young Adults (L3 levels), the Employability track covers verbal introductions and email settings (L3-A), collaborative office skills (L3-B), and job-seeking essentials like resume formatting, cover letter writing, and mock interview preparations (L3-C)."
  },
  {
    id: "font-choices",
    keywords: ["fonts", "typography", "nunito", "outfit", "sans-serif"],
    question: "What typography is used on the platform?",
    answer: "We use two primary Google Fonts:\n1. **Outfit**: A geometric sans-serif with tight letter-spacing (`-0.025em` to `-0.04em`) used for premium, modern headings.\n2. **Nunito**: A soft, rounded sans-serif used for body text to keep the application feeling friendly and readable."
  },
  {
    id: "color-choices",
    keywords: ["colors", "palette", "spruce", "sand", "terracotta", "mint", "blue", "indigo"],
    question: "What color palette does LearnLevel AI use?",
    answer: "The site utilizes a premium 'Spruce & Sand' palette:\n- **Light Mode**: Warm Sand/Oat backgrounds (`#FAF6F0`), deep Spruce green headers (`#1A3C34`), Terracotta accents (`#D96B43`), and soft Mint. \n- **Dark Mode**: Cozy obsidian-green forests (`#0E1F1A`) and luminous Emerald details for a cozy, organic, and friendly feel."
  },
  {
    id: "mobile-nav",
    keywords: ["mobile-menu", "hamburger", "scrolling-nav", "responsive-header"],
    question: "Why doesn't the mobile site have a hamburger menu?",
    answer: "To optimize accessibility and eliminate extra clicks, the mobile view features a horizontal-scrolling navigation header. Links are fully visible and swipeable on Row 2, enabling educators to switch pages with a single touch."
  },
  {
    id: "longitudinal-trend",
    keywords: ["longitudinal", "trend-line", "growth-chart", "historical-progress"],
    question: "What is the Longitudinal Trend chart?",
    answer: "It is a custom SVG line graph on the Educator Dashboard (under the Growth Trajectory tab). It tracks the overall cohort average score over a six-month period, demonstrating learning improvements and longitudinal performance trends."
  },
  {
    id: "student-profile-charts",
    keywords: ["student-chart", "individual-trend", "profile-graph"],
    question: "Does each student have a progress chart?",
    answer: "Yes! When you click 'Profile' on any student's dashboard row, it opens a modal containing a personalized SVG area line chart showing that student's historical academic scoring milestones over time."
  },
  {
    id: "contributors",
    keywords: ["contributors", "team", "who-made", "support", "help"],
    question: "Who can I contact for help or contributing to the project?",
    answer: "LearnLevel AI is open source and hosted on GitHub. You can contribute or report issues directly on the repository: `https://github.com/MohitPant2803/LevelLearnAi.git`. The primary developers are Mohit Pant and the Google DeepMind Antigravity coding agent."
  }
];
