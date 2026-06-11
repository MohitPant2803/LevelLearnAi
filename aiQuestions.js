// LearnLevel AI - Comprehensive Ask AI Chatbot Q&A Database
// Styled specifically for questions a Guardian (parent/tutor) or a Child would ask.

const AI_QA_DATABASE = [
  {
    id: "purpose",
    keywords: ["what", "purpose", "mission", "learnlevel", "learnlevelai", "about", "why", "exist", "goal", "help", "learn"],
    question: "How will this website help my child learn better?",
    questionType: "guardian",
    answer: "LearnLevel AI acts as a learning GPS for your child! Instead of placing them in a generic class based solely on their age, it finds their exact strengths and struggles. This helps us recommend the perfect worksheets so they can study at a pace that is just right for them without feeling overwhelmed."
  },
  {
    id: "diagnostic",
    keywords: ["diagnostic", "quiz", "test", "assessment", "wizard", "start", "setup", "begin", "evaluate", "find", "level"],
    question: "How do I start the test to find my child's learning level?",
    questionType: "guardian",
    answer: "It's easy! Go to the 'Diagnostic Test' tab in the top navigation. Enter your child's name, age, and choose their age category. Your child will then take a short, friendly 4-question quiz that maps their literacy, math, and communication skills."
  },
  {
    id: "saving",
    keywords: ["save", "storing", "save-to-dashboard", "submit", "record", "persist", "saving", "profile", "lose", "scores"],
    question: "Where do I save my child's test results so I don't lose them?",
    questionType: "guardian",
    answer: "Once your child finishes the 4-question diagnostic quiz, click the green 'Save to Educator Dashboard' button on the results screen. This instantly creates their student profile, lists their learning needs, and saves their scores in the dashboard tab."
  },
  {
    id: "categories",
    keywords: ["category", "categories", "age", "brackets", "child", "teenager", "adult", "young_adult", "groups", "old"],
    question: "Which learning path is right for my child's age?",
    questionType: "guardian",
    answer: "We support three friendly age brackets:\n1. **Young Child (Ages 5-9)**: Focused on learning letters, phonics sounds, and basic counting (Levels L1-A to L1-C).\n2. **Teenager (Ages 10-14)**: Focused on reading comprehension, science, fractions, and career awareness (Levels L2-A to L2-C).\n3. **Young Adult (Ages 15+)**: Focused on resumes, mock interviews, spreadsheets, and job employability (Levels L3-A to L3-C)."
  },
  {
    id: "levels-l1",
    keywords: ["l1", "l1-a", "l1-b", "l1-c", "child-level", "emergent", "phonics", "reading", "little", "young"],
    question: "What will my little one learn in the Level 1 (L1) classes?",
    questionType: "guardian",
    answer: "Level 1 is made for children ages 5-9:\n- **L1-A**: Recognizing alphabet letters (A-Z) and counting up to 10.\n- **L1-B**: sound-blends, spelling short words, and basic addition/subtraction within 10.\n- **L1-C**: Reading simple sentences and solving single-digit math story problems."
  },
  {
    id: "levels-l2",
    keywords: ["l2", "l2-a", "l2-b", "l2-c", "teenager-level", "fractions", "scientific", "critical", "subjects", "teen"],
    question: "What subjects does my teenager study in Level 2 (L2)?",
    questionType: "guardian",
    answer: "Level 2 is designed for teenagers ages 10-14:\n- **L2-A**: Advanced reading comprehension and multi-digit math operations (like multiplication).\n- **L2-B**: Simple science questions, fractions, and percentage logic.\n- **L2-C**: Solving critical thinking problems and learning about different career roles."
  },
  {
    id: "levels-l3",
    keywords: ["l3", "l3-a", "l3-b", "l3-c", "adult-level", "employability", "office", "resume", "cv", "job", "career"],
    question: "How does Level 3 (L3) prepare young adults for jobs?",
    questionType: "guardian",
    answer: "Level 3 is for older youth ages 15+:\n- **L3-A**: Basic computer typing, setting up professional emails, and introduction skills.\n- **L3-B**: Writing spreadsheets formulas (like SUM/AVERAGE) and workplace English communication.\n- **L3-C**: Creating a professional resume, practice interviews, and cover letters."
  },
  {
    id: "dashboard",
    keywords: ["dashboard", "educator", "tracker", "metrics", "monitoring", "average", "stats", "report"],
    question: "How does the dashboard help me keep track of my kids' scores?",
    questionType: "guardian",
    answer: "The Educator Dashboard shows a summary of all registered kids, their class averages in math and reading, and interactive charts. It also lists every student in a progress table so you can see who needs extra attention."
  },
  {
    id: "add-student",
    keywords: ["add", "new", "register", "create", "insert", "student", "learner", "profile", "child"],
    question: "How do I register a new child on the dashboard?",
    questionType: "guardian",
    answer: "You can click the '+ Add New Student' button on the dashboard to fill out a quick form manually, or let your child complete the quiz in the 'Diagnostic Test' tab, which automatically saves their profile for you."
  },
  {
    id: "delete-student",
    keywords: ["delete", "remove", "erase", "discard", "student", "profile"],
    question: "How do I remove a student's profile if they leave?",
    questionType: "guardian",
    answer: "Go to the Student Progress Tracker table on the dashboard. Find the child's row, and click the red '✕' button on the far right. Confirm the popup alert, and their profile will be removed."
  },
  {
    id: "student-profile",
    keywords: ["profile", "details", "trajectory", "trend", "individual", "report", "progress", "card"],
    question: "Where can I see a detailed report card and progress chart for my child?",
    questionType: "guardian",
    answer: "In the dashboard table, click the 'Profile' button next to your child's name. A large modal will pop open showing their grades, specific skill gaps, recommended worksheets, and a line chart of their progress over time."
  },
  {
    id: "charts",
    keywords: ["charts", "svg", "visualizations", "donut", "bar", "trend", "line-chart", "graphs", "colored"],
    question: "What do these colored graphs and charts on the dashboard show?",
    questionType: "guardian",
    answer: "We have three helpful charts:\n1. **Subject Competency (Bar Chart)**: Shows the average score across Math, Digital, and English.\n2. **Cohort Distribution (Donut Chart)**: Shows the percentage split between kids, teenagers, and young adults.\n3. **Longitudinal Trend (Line Chart)**: Tracks how the whole class is improving month-by-month."
  },
  {
    id: "worksheets",
    keywords: ["worksheets", "vault", "library", "printable", "download", "pdf", "tasks", "checklist", "study"],
    question: "How can my child study using the worksheets in the vault?",
    questionType: "guardian",
    answer: "Go to the 'Resources Library' tab. Click on any worksheet card to view details (like estimated time and checklist topics). Click 'Download Practice Pack' to simulate saving the PDF file for offline study."
  },
  {
    id: "subject-filters",
    keywords: ["filter", "sorting", "chips", "search", "subject", "literacy", "numeracy", "digital", "communication", "math", "reading"],
    question: "How do I search for a specific subject like Math or Reading?",
    questionType: "guardian",
    answer: "At the top of the Resources Library, you can click on the **Age Category tabs** (Child, Teenager, Young Adult) or tap on the **horizontal subject chips** (like Literacy, Numeracy, Digital Skills) to filter and show only the relevant worksheets."
  },
  {
    id: "tech-stack",
    keywords: ["tech", "stack", "framework", "technologies", "javascript", "css", "html", "code", "packages", "computer"],
    question: "What computer code was used to make this website?",
    questionType: "child",
    answer: "This website was written using simple, raw code: standard **HTML** for the structure, **CSS** for the beautiful colors and animations, and **JavaScript** for the logic. We didn't use heavy software bundles so it loads super fast, even on old cell phones!"
  },
  {
    id: "how-to-run",
    keywords: ["run", "install", "server", "deploy", "local", "python", "localhost", "port", "home", "computer"],
    question: "How can I run this website on my own computer at home?",
    questionType: "guardian",
    answer: "You can download the project folder, open a terminal inside it, and run a quick server using Python: `python -m http.server 8000`. Then open your web browser and go to `http://localhost:8000`."
  },
  {
    id: "license",
    keywords: ["license", "mit", "open", "source", "github", "git", "remote", "pay", "money", "free", "cost"],
    question: "Do I have to pay money to use this website or worksheets?",
    questionType: "guardian",
    answer: "No, it is 100% free! LearnLevel AI is an open-source educational tool licensed under the MIT License. Anyone, including parents, schools, and NGOs, can use, modify, and share it without paying a dime."
  },
  {
    id: "dark-mode",
    keywords: ["theme", "dark", "light", "toggle", "sun", "moon", "recolor", "eyes", "night"],
    question: "How do I turn on the night/dark theme for my eyes?",
    questionType: "child",
    answer: "Look at the top-right corner of the screen! Click the little moon icon to switch to dark mode. The background will turn into a cozy, dark spruce color which is much easier on your eyes in a dark room. Click the sun icon to switch back!"
  },
  {
    id: "creator",
    keywords: ["author", "creator", "built", "who", "developer", "pair", "antigravity", "made"],
    question: "Who made this cool website?",
    questionType: "child",
    answer: "This website was built by a developer named **Mohit Pant** working with **Antigravity**, a smart AI coding helper from Google DeepMind. We coded this together to help kids learn everywhere!"
  },
  {
    id: "performance",
    keywords: ["lag", "slow", "performance", "rendering", "scroll", "heavy", "optimized", "freeze", "fast"],
    question: "Why does this website load so fast without freezing?",
    questionType: "child",
    answer: "We built this site without heavy frameworks and avoided complicated filter effects. We also made sure that animations use lightweight rules. This ensures it runs smoothly, even on older mobile phones with slow internet connections."
  },
  {
    id: "gaps",
    keywords: ["gaps", "skill", "weakness", "borrowing", "phonics", "fraction", "formula", "mean"],
    question: "What does it mean when the test says my child has a 'skill gap'?",
    questionType: "guardian",
    answer: "A skill gap is simply a specific brick missing in your child's learning ladder. For example, they might know how to add numbers, but struggle with 'subtraction borrowing'. By pointing out this exact brick, we can fix it easily rather than labeling them as failing the entire subject."
  },
  {
    id: "apple-design",
    keywords: ["apple", "premium", "finish", "design", "aesthetics", "kerning", "stepper", "modern", "pretty"],
    question: "Why does this website look so modern and pretty?",
    questionType: "child",
    answer: "We used clean geometric shapes, custom vector icons, tight letter-spacing, and perfectly rounded buttons (called pill buttons). This replicates the high-quality designs you see on modern phones and tablets."
  },
  {
    id: "persistence",
    keywords: ["database", "save", "reload", "refresh", "lost", "memory", "permanent", "disappear"],
    question: "Will my child's saved scores disappear if I refresh the page?",
    questionType: "guardian",
    answer: "Yes, in this frontend demonstration version, refreshing the browser will reset the database back to the default list of 8 student profiles. In a production version, we would link this to a permanent database to keep scores safe forever."
  },
  {
    id: "volunteer",
    keywords: ["volunteer", "nonprofit", "ngo", "mentor", "tutor", "teacher", "classes", "home", "parent"],
    question: "Can I use this program as a volunteer tutor or parent at home?",
    questionType: "guardian",
    answer: "Absolutely! The site is built for parents, volunteer tutors, and NGOs who want a quick, clear way to test children and get instant printable worksheets. You don't need a professional teaching degree to guide a child through these lessons."
  },
  {
    id: "search-filter-table",
    keywords: ["search", "find", "locate", "table", "student-search", "toolbar", "query", "filter-table", "name"],
    question: "How do I find my child's name in the long dashboard list?",
    questionType: "guardian",
    answer: "Above the student table on the dashboard, there is a search bar. Simply type your child's name or level code (like 'L2-A') and the table will instantly filter to show only that student's row."
  },
  {
    id: "offline",
    keywords: ["offline", "no-internet", "internet", "wifi", "local-only", "independent", "remote-area", "connection"],
    question: "Can my children use this website if we don't have internet?",
    questionType: "guardian",
    answer: "Yes! Since the site is built on pure local code with no active database server requirements, you can download the files once and run it offline on any laptop or desktop, even in remote rural camps without cell service."
  },
  {
    id: "reset-db",
    keywords: ["reset", "wipe", "clear", "restart", "refresh-database", "restore", "defaults", "clean"],
    question: "How do I clean up the dashboard and start fresh?",
    questionType: "guardian",
    answer: "To start completely fresh and reload the default data, just refresh the webpage in your browser. All temporarily added profiles will be cleared, bringing back the default cohort of 8 mock students."
  },
  {
    id: "printing",
    keywords: ["print", "paper", "pdf-print", "hardcopy", "physical", "classroom"],
    question: "Can I print these worksheets on paper so my child can write on them?",
    questionType: "guardian",
    answer: "Yes, definitely! Click on any worksheet card in the library to open the details modal. Then click the 'Download Practice Pack' button. This is structured to compile a clean, print-friendly PDF document that you can print out for physical pencil-and-paper study."
  },
  {
    id: "export",
    keywords: ["export", "csv", "excel", "download-data", "backup", "reports", "download"],
    question: "Can I download my child's progress report to my phone or computer?",
    questionType: "guardian",
    answer: "In this active version, you can click on 'Profile' next to any student's name on the dashboard to view their complete report card. You can take a screenshot or print the page to save their individualized progress timeline."
  },
  {
    id: "multiple-gaps",
    keywords: ["multiple", "gaps", "several", "weaknesses", "many-gaps", "all-gaps", "lot"],
    question: "What should I do if my child has a lot of skill gaps?",
    questionType: "guardian",
    answer: "Don't panic! It is very common for children to have several gaps. We recommend selecting just one foundational worksheet (starting with Literacy or basic Arithmetic) and letting them master that single topic first. Step-by-step progress works best!"
  },
  {
    id: "score-calculation",
    keywords: ["calculate", "score", "grades", "percentage", "how-scored", "evaluation-logic"],
    question: "How are my child's scores and percentages calculated?",
    questionType: "guardian",
    answer: "Each diagnostic test has 4 targeted questions. The percentage calculation divides the number of correct responses by 4, creating baseline averages across Academics, Digital, and Communication metrics."
  },
  {
    id: "perfect-score",
    keywords: ["perfect", "100%", "all-correct", "high-score", "aced", "right"],
    question: "What happens if my child gets every single answer right?",
    questionType: "guardian",
    answer: "That is wonderful! If they get 100% correct, the platform will place them in the highest sub-level of their category (like L1-C or L2-C). They will have a perfect score average and the system will report 'No active skill gaps detected'."
  },
  {
    id: "low-score",
    keywords: ["low", "0%", "failed", "struggling", "poor-score", "remedial", "quiz"],
    question: "What if my child struggles and gets a low score on the quiz?",
    questionType: "guardian",
    answer: "That is perfectly okay! The test is simply diagnosing their needs. A low score places them in the foundational 'A' level (like L1-A) and highlights the specific questions they missed as skill gaps, unlocking basic lessons to support them."
  },
  {
    id: "custom-worksheets",
    keywords: ["custom", "add-worksheet", "upload", "new-worksheet", "create-activity", "own"],
    question: "Can I add my own custom worksheets for my child to practice?",
    questionType: "guardian",
    answer: "Yes, you can extend the source code easily. Open the [mockData.js](file:///c:/Users/Mohit/Desktop/Devlopment/Web%20Dev/Learnlevelai/mockData.js) file and insert your custom text, questions, and duration directly into the `WORKSHEETS_DATA` array."
  },
  {
    id: "notifications",
    keywords: ["notifications", "toasts", "alerts", "popups", "feedback-message", "bubbles", "pop"],
    question: "Why do these small colored bubbles pop up at the top right of the screen?",
    questionType: "child",
    answer: "Those are helper toast notifications! Whenever you save a student, finish a quiz, or download a worksheet, a little bubble pops up to tell you that your action succeeded. It's our way of letting you know everything went perfectly!"
  },
  {
    id: "accessibility",
    keywords: ["accessibility", "contrast", "aria", "screen-reader", "accessible", "visual", "reading", "difficulties"],
    question: "Can a child with visual or reading difficulties use this website easily?",
    questionType: "guardian",
    answer: "Yes! The site supports high contrast colors, keyboard navigation, and works with standard screen readers. Plus, the body text uses a highly readable, rounded font (Nunito) which is helpful for dyslexic and young readers."
  },
  {
    id: "change-details",
    keywords: ["modify-student", "edit-profile", "change-age", "update-score", "rename", "typo", "fix"],
    question: "How do I fix a typo in my child's name or age?",
    questionType: "guardian",
    answer: "In this initial version, if you make a spelling error, simply delete the profile using the red '✕' button on the dashboard table and add a new profile manually, or re-run the diagnostic assessment quiz with the correct name."
  },
  {
    id: "number-of-questions",
    keywords: ["questions-count", "how-many-questions", "quiz-length", "test-duration", "tired", "long"],
    question: "How long is the test? Will my child get tired?",
    questionType: "guardian",
    answer: "Not at all! The test has only 4 questions per cohort and takes about 5 minutes to complete. We deliberately made it short and encouraging so young learners stay excited and don't feel like they're taking a long school exam."
  },
  {
    id: "student-limit",
    keywords: ["limit", "max-students", "capacity", "database-size", "storage-limit", "neighborhood", "all"],
    question: "Can I add all the kids in my neighborhood to this dashboard?",
    questionType: "guardian",
    answer: "Yes, you can! There is no limit to the number of students you can add to the active session. If you have 50 or 100 kids in your local learning camp, you can track all of them in the dashboard table simultaneously."
  },
  {
    id: "chart-interaction",
    keywords: ["chart-click", "hover-chart", "interactive-graphs", "svg-interaction", "more", "information"],
    question: "Can I click or hover on the colorful charts to see more information?",
    questionType: "child",
    answer: "Yes, you can! Hover your mouse cursor over any bar in the competency chart or tap on a slice of the donut chart. You'll see numbers and helper cards light up instantly to show you the exact count of students!"
  },
  {
    id: "literacy-track",
    keywords: ["literacy", "reading", "spelling", "grammar", "english", "alphabet", "write"],
    question: "How will this website teach my child to read and write English?",
    questionType: "guardian",
    answer: "The English track starts with basic letter sounds and phonics (Level L1). It progresses to reading simple sentences and short stories (L1-C), understanding paragraphs (L2-A), and finally guides them to writing formal emails and resume cover letters (L3)."
  },
  {
    id: "numeracy-track",
    keywords: ["numeracy", "math", "counting", "addition", "subtraction", "operations", "fractions", "spreadsheets", "calculations"],
    question: "How will this website help my kid with math and calculations?",
    questionType: "guardian",
    answer: "Our math track begins with counting to 10 (L1-A) and basic adding and subtracting (L1-B). As they move up, they study fractions and percentages (L2-B), logical career math (L2-C), and digital spreadsheet formulas (L3-B)."
  },
  {
    id: "employability-track",
    keywords: ["employability", "cv", "resume", "interview", "job", "career", "professional", "teenager"],
    question: "How does the young adult pathway help my teenager find a job?",
    questionType: "guardian",
    answer: "The Level 3 (L3) pathway is tailored for young adults. It walks them through building a modern professional resume (CV), composing formal cover letters, learning basic computer skills, and practicing mock job interviews."
  },
  {
    id: "font-choices",
    keywords: ["fonts", "typography", "nunito", "outfit", "sans-serif", "letters", "read", "screen"],
    question: "Why are the letters on the screen so round and easy to read?",
    questionType: "child",
    answer: "We chose a font called **Nunito** for the body text, which has soft rounded corners. Studies show that rounded letters make reading less tiring for kids, helping them focus on spelling and math without eye strain!"
  },
  {
    id: "color-choices",
    keywords: ["colors", "palette", "spruce", "sand", "terracotta", "mint", "blue", "indigo", "forest", "cozy"],
    question: "Why is the website colored like a cozy green forest?",
    questionType: "child",
    answer: "We wanted the website to feel like a friendly, warm walk in the forest rather than a boring, cold school office! We used warm Sand colors for the background, deep Spruce greens for headers, and terracotta highlights to make it cozy."
  },
  {
    id: "mobile-nav",
    keywords: ["mobile-menu", "hamburger", "scrolling-nav", "responsive-header", "phone", "move"],
    question: "How do I move around the website on my mobile phone?",
    questionType: "guardian",
    answer: "On your phone, there is no annoying hamburger menu button to click! The navigation bar sits at the top as a touch-friendly scrolling strip. You can easily swipe left and right with your finger and tap on any tab to change sections."
  },
  {
    id: "longitudinal-trend",
    keywords: ["longitudinal", "trend-line", "growth-chart", "historical-progress", "wiggly"],
    question: "What does the wiggly line chart on the dashboard show?",
    questionType: "guardian",
    answer: "Under the 'Growth Trajectory' tab on the dashboard, the line chart shows the historical average score of your entire class over the last six months. It helps you see how much your students are improving collectively over time."
  },
  {
    id: "student-profile-charts",
    keywords: ["student-chart", "individual-trend", "profile-graph", "special"],
    question: "Why does my child have their own special line chart in their profile?",
    questionType: "guardian",
    answer: "Each child has their own learning journey. When you click their dashboard profile, the individual line chart maps their personal score milestones over time, letting you celebrate their personal growth separate from the class average."
  },
  {
    id: "contributors",
    keywords: ["contributors", "team", "who-made", "support", "help", "problem", "run"],
    question: "Who can we ask for help if we run into a problem on this site?",
    questionType: "guardian",
    answer: "Since LearnLevel AI is an open-source project, you can visit our codebase page at `https://github.com/MohitPant2803/LevelLearnAi.git` and open a 'GitHub Issue' to ask for assistance. The project developers, Mohit Pant and Antigravity, check it regularly!"
  },
  {
    id: "game-or-homework",
    keywords: ["game", "homework", "fun", "scary", "puzzles", "play"],
    question: "Is this a game or is it homework?",
    questionType: "child",
    answer: "Think of it as a fun learning game! You get to solve quick puzzles, find out what your level is, and download clean worksheets to practice. There are no scary red pens, no grades, and no tests to stress about!"
  },
  {
    id: "get-stuck",
    keywords: ["stuck", "hard", "help", "worksheet", "grow", "brain"],
    question: "What should I do if I get stuck on a worksheet question?",
    questionType: "child",
    answer: "Don't worry at all! Getting stuck is the best way your brain grows stronger. If a question is too hard, you can ask your parent, helper, or teacher to check the 'Educator Notes' inside the worksheet view. They will help explain it!"
  },
  {
    id: "certificate",
    keywords: ["trophy", "certificate", "finish", "award", "win", "achievement"],
    question: "Will I get a trophy or certificate when I finish a level?",
    questionType: "child",
    answer: "Yes! Every time you finish a worksheet pack or climb to the next level, you can celebrate with your tutor. Your profile will show your skills leveling up, just like getting a high score in your favorite video game!"
  },
  {
    id: "device-compatibility",
    keywords: ["device", "phone", "tablet", "mom", "smartphone", "play", "tap"],
    question: "Can I play this on my mom's smartphone?",
    questionType: "child",
    answer: "Yes, you can! The website is designed to look beautiful and adjust to fit on any screen size. The buttons are big and round, and all tables slide cleanly, making it easy to tap and read on any mobile phone."
  },
  {
    id: "score-anxiety-child",
    keywords: ["sad", "worried", "scared", "fail", "crying", "upset", "stress", "mistake", "low-score", "bad", "grades", "marks", "depressed", "tensed"],
    question: "What if I feel sad, tensed, or worried about getting a low score?",
    questionType: "child",
    answer: "Please don't worry! 💖 A score is just a tiny snapshot of one moment, not a measure of how smart, capable, or wonderful you are. On LearnLevel AI, there are no 'failing' grades or punishments. Every mistake is just a friendly puzzle piece showing us what to practice next. Take a deep breath, go at your own pace, and remember that your brain is like a muscle—it gets stronger every time you try! You are doing great!"
  },
  {
    id: "score-anxiety-guardian",
    keywords: ["depressed", "tensed", "anxious", "anxiety", "pressure", "crying", "discouraged", "sadness", "stress", "parents", "pressure", "worried", "unhappy"],
    question: "What should I do if my child feels stressed, anxious, or depressed about their test results?",
    questionType: "guardian",
    answer: "Test anxiety is very common, and it's important to reassure your child that this diagnostic is not a grade or judgment. It is simply a helpful compass to guide their learning path. Encourage them by focusing on their effort rather than the score. Remind them that learning is a journey with many steps, and that making mistakes is a healthy, natural part of growing their brain. If they feel overwhelmed, take a break from the screen and try a fun, hands-on activity together!"
  }
];
