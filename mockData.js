// LearnLevel AI Mock Data System

const LEARN_LEVELS = {
  CHILD: {
    id: 'child',
    title: 'Young Child (Ages 5-9)',
    focus: 'Foundational Literacy & Numeracy',
    description: 'Focuses on basic letter recognition, phonics, simple reading, number identification, basic shapes, and single-digit arithmetic.',
    levels: [
      { code: 'L1-A', name: 'Emergent Literacy & Numeracy', desc: 'Working on letter recognition (A-Z) and counting up to 10.' },
      { code: 'L1-B', name: 'Phonics & Basic Operations', desc: 'Understanding short word sounds and basic addition/subtraction within 10.' },
      { code: 'L1-C', name: 'Fluent Reading & Word Problems', desc: 'Reading simple sentences and solving basic single-digit arithmetic word problems.' }
    ]
  },
  TEENAGER: {
    id: 'teenager',
    title: 'Teenager (Ages 10-14)',
    focus: 'Concept Clarity & Career Awareness',
    description: 'Supports grammatical clarity, reading comprehension, basic mathematical logic, science concept foundations, confidence, and broad career awareness.',
    levels: [
      { code: 'L2-A', name: 'Reading Fluency & Basic Math Logic', desc: 'Developing comprehension skills and solving basic multi-digit math operations.' },
      { code: 'L2-B', name: 'Conceptual Science & Applied Math', desc: 'Understanding basic scientific methods, fractions, percentages, and grammar mechanics.' },
      { code: 'L2-C', name: 'Critical Thinking & Career Exposure', desc: 'Analyzing texts, explaining complex logical steps, and identifying personal career interests.' }
    ]
  },
  YOUNG_ADULT: {
    id: 'young_adult',
    title: 'Young Adult (Ages 15+)',
    focus: 'Digital, Communication & Employability',
    description: 'Equips learners with digital literacy (spreadsheets, emails, searching), professional communication, resume building, and mock interview practice.',
    levels: [
      { code: 'L3-A', name: 'Digital & Verbal Basics', desc: 'Understanding basic computer operations, professional email setups, and clear personal introductions.' },
      { code: 'L3-B', name: 'Applied Office Skills & Workplace English', desc: 'Creating basic spreadsheets, drafting professional requests, and collaborative project communication.' },
      { code: 'L3-C', name: 'Job-Ready Employability & Career Pathing', desc: 'Developing a resume, conducting mock interviews, writing cover letters, and setting career goals.' }
    ]
  }
};

const DIAGNOSTIC_QUESTIONS = {
  child: [
    {
      id: 'c1',
      skill: 'Literacy',
      text: 'Which letter does the word "CAT" start with, and what is its phonetic sound?',
      options: [
        { text: 'S (sssh)', score: 1 },
        { text: 'C (kuh)', score: 3 },
        { text: 'M (muhh)', score: 1 }
      ]
    },
    {
      id: 'c2',
      skill: 'Numeracy',
      text: 'If you have 4 apples and a friend gives you 3 more, how many apples do you have in total?',
      options: [
        { text: '6 apples', score: 1 },
        { text: '7 apples', score: 3 },
        { text: '8 apples', score: 1 }
      ]
    },
    {
      id: 'c3',
      skill: 'Literacy',
      text: 'Select the correct word to fill in the blank: "The dog ________ in the park."',
      options: [
        { text: 'runs', score: 3 },
        { text: 'running', score: 2 },
        { text: 'runned', score: 1 }
      ]
    },
    {
      id: 'c4',
      skill: 'Numeracy',
      text: 'What shape has exactly 3 sides and 3 corners?',
      options: [
        { text: 'Circle', score: 1 },
        { text: 'Square', score: 1 },
        { text: 'Triangle', score: 3 }
      ]
    }
  ],
  teenager: [
    {
      id: 't1',
      skill: 'Academics',
      text: 'What is the value of x in the equation: 3x - 5 = 10?',
      options: [
        { text: 'x = 3', score: 1 },
        { text: 'x = 5', score: 3 },
        { text: 'x = 15', score: 1 }
      ]
    },
    {
      id: 't2',
      skill: 'Academics',
      text: 'Identify the primary cause of seasons on Earth.',
      options: [
        { text: 'The rotation of Earth on its axis every 24 hours', score: 1 },
        { text: 'The tilt of Earth\'s axis as it revolves around the Sun', score: 3 },
        { text: 'The varying distance between the Earth and the Sun', score: 2 }
      ]
    },
    {
      id: 't3',
      skill: 'Communication',
      text: 'You want to politely disagree with a teammate\'s idea. What is the best way to say it?',
      options: [
        { text: 'Your idea will not work, we should do mine.', score: 1 },
        { text: 'I see your point, but have we considered how this impact might affect our timeline?', score: 3 },
        { text: 'Let\'s just vote on it so we don\'t have to argue.', score: 2 }
      ]
    },
    {
      id: 't4',
      skill: 'Career Readiness',
      text: 'Which of the following best describes the role of a Web Designer?',
      options: [
        { text: 'Managing corporate finances and budgeting software', score: 1 },
        { text: 'Planning, layout, and visual aesthetic of websites for user interaction', score: 3 },
        { text: 'Fixing hardware issues in physical servers and computer systems', score: 2 }
      ]
    }
  ],
  young_adult: [
    {
      id: 'y1',
      skill: 'Digital Skills',
      text: 'Which spreadsheet formula would you use to calculate the total sum of cells A1 through A10?',
      options: [
        { text: '=ADD(A1:A10)', score: 1 },
        { text: '=SUM(A1:A10)', score: 3 },
        { text: '=TOTAL(A1:A10)', score: 1 }
      ]
    },
    {
      id: 'y2',
      skill: 'Communication',
      text: 'Drafting a professional email to request a leave of absence. Which subject line is most appropriate?',
      options: [
        { text: 'Sick leave request - [Your Name] - [Date]', score: 3 },
        { text: 'I won\'t be coming in tomorrow!', score: 1 },
        { text: 'Urgent: Away from desk', score: 2 }
      ]
    },
    {
      id: 'y3',
      skill: 'Employability',
      text: 'A customer is angry about a delayed delivery. What should be your first action?',
      options: [
        { text: 'Explain that the courier company is at fault, not you.', score: 1 },
        { text: 'Apologize for the inconvenience, listen to their issue, and look up the tracking status.', score: 3 },
        { text: 'Offer a full refund immediately without checking the system.', score: 2 }
      ]
    },
    {
      id: 'y4',
      skill: 'Digital Skills',
      text: 'To protect your accounts from unauthorized access, which is the best password practice?',
      options: [
        { text: 'Use your name followed by 123 for easy memory', score: 1 },
        { text: 'Use a unique, long passphrase with a mix of letters, numbers, and symbols for each account', score: 3 },
        { text: 'Store all passwords in a plain text file on your desktop named "passwords.txt"', score: 1 }
      ]
    }
  ]
};

const WORKSHEETS = [
  // Child Worksheets
  {
    id: 'w-c1',
    category: 'child',
    levelCode: 'L1-A',
    title: 'Phonics & Alphabet Master',
    subject: 'Literacy',
    duration: '20 mins',
    description: 'Learn letter tracing, phonics sounds for starting letters (A-M), and match letters to pictures.',
    tasks: ['Trace uppercase and lowercase A-M.', 'Draw a line from the letter to its matching image.', 'Pronounce each letter sound out loud to your mentor.']
  },
  {
    id: 'w-c2',
    category: 'child',
    levelCode: 'L1-B',
    title: 'Single-Digit Additions Adventure',
    subject: 'Numeracy',
    duration: '15 mins',
    description: 'Visual arithmetic worksheets using stars, apples, and blocks to practice addition up to 10.',
    tasks: ['Count the objects and write the numbers.', 'Solve the single-digit addition problems.', 'Color the matching sum circles.']
  },
  {
    id: 'w-c3',
    category: 'child',
    levelCode: 'L1-C',
    title: 'Sentence Builder & Simple Stories',
    subject: 'Literacy',
    duration: '30 mins',
    description: 'Build confidence in reading short 3-word and 4-word sentences. Practice basic spelling patterns.',
    tasks: ['Rearrange mixed-up words to form a correct sentence.', 'Read the short 3-line story aloud.', 'Answer two simple questions about the story.']
  },

  // Teenager Worksheets
  {
    id: 'w-t1',
    category: 'teenager',
    levelCode: 'L2-A',
    title: 'Fractions & Percentages in Real Life',
    subject: 'Academics',
    duration: '35 mins',
    description: 'Practical application of math logic: splitting pizzas, calculating shopping discounts, and understanding ratios.',
    tasks: ['Solve 5 division-based fraction problems.', 'Calculate the final price of an item with a 20% discount.', 'Draw representation circles for 3/4 and 2/5 fractions.']
  },
  {
    id: 'w-t2',
    category: 'teenager',
    levelCode: 'L2-B',
    title: 'The Scientific Method & Observation',
    subject: 'Academics',
    duration: '45 mins',
    description: 'Learn how to form hypotheses, conduct simple home observations (e.g. water evaporation), and record results.',
    tasks: ['Read the experimental scenario.', 'Write down your hypothesis.', 'Design a simple tracking table for a 3-day observation.']
  },
  {
    id: 'w-t3',
    category: 'teenager',
    levelCode: 'L2-C',
    title: 'Introduction to Web Technologies',
    subject: 'Career Readiness',
    duration: '40 mins',
    description: 'Explore how the internet works, the difference between front-end and back-end, and what coding roles look like.',
    tasks: ['Match technology terms (HTML, CSS, Server) to their functions.', 'Read the profile of a Software Engineer.', 'Write a short description of a web application you would like to build.']
  },

  // Young Adult Worksheets
  {
    id: 'w-y1',
    category: 'young_adult',
    levelCode: 'L3-A',
    title: 'Professional Email Writing Toolkit',
    subject: 'Communication',
    duration: '30 mins',
    description: 'Learn standard business layouts, formal vs informal tones, and proper formatting for job requests or updates.',
    tasks: ['Identify 3 tone errors in a draft email.', 'Rewrite an informal greeting to be professional.', 'Draft a sick-leave request email using the templates provided.']
  },
  {
    id: 'w-y2',
    category: 'young_adult',
    levelCode: 'L3-B',
    title: 'Google Sheets & Excel Basics',
    subject: 'Digital Skills',
    duration: '50 mins',
    description: 'Master data entries, column sorting, simple formatting, and formulas like SUM, AVERAGE, and COUNT.',
    tasks: ['Enter a table of monthly expenses.', 'Apply the =SUM() formula to find total expenditures.', 'Calculate average spending per category.']
  },
  {
    id: 'w-y3',
    category: 'young_adult',
    levelCode: 'L3-C',
    title: 'Resume Crafting & Mock Interviews',
    subject: 'Employability',
    duration: '60 mins',
    description: 'Learn the core structure of a modern CV, how to highlight skills without extensive experience, and core interview etiquette.',
    tasks: ['Fill in your education, projects, and skills sections on the layout.', 'Review common interview questions and write bullet responses.', 'Practice the "Tell me about yourself" pitch in front of a mirror or mentor.']
  }
];

const MOCK_STUDENTS = [
  {
    id: 's1',
    name: 'Aarav Sharma',
    age: 7,
    category: 'child',
    levelCode: 'L1-B',
    levelName: 'Phonics & Basic Operations',
    gaps: ['Word Pronunciation', 'Counting > 50'],
    scores: {
      literacy: 75,
      numeracy: 65,
      communication: 50,
      digital: 20
    },
    assessedDate: '2026-05-10',
    history: [
      { date: '2026-03-01', level: 'L1-A', scores: { literacy: 40, numeracy: 35 } },
      { date: '2026-04-15', level: 'L1-A', scores: { literacy: 58, numeracy: 52 } },
      { date: '2026-05-10', level: 'L1-B', scores: { literacy: 75, numeracy: 65 } }
    ]
  },
  {
    id: 's2',
    name: 'Priya Patel',
    age: 8,
    category: 'child',
    levelCode: 'L1-C',
    levelName: 'Fluent Reading & Word Problems',
    gaps: ['Subtraction borrowing', 'Compound phonics'],
    scores: {
      literacy: 88,
      numeracy: 82,
      communication: 70,
      digital: 30
    },
    assessedDate: '2026-06-01',
    history: [
      { date: '2026-04-10', level: 'L1-B', scores: { literacy: 70, numeracy: 68 } },
      { date: '2026-06-01', level: 'L1-C', scores: { literacy: 88, numeracy: 82 } }
    ]
  },
  {
    id: 's3',
    name: 'Kabir Verma',
    age: 12,
    category: 'teenager',
    levelCode: 'L2-A',
    levelName: 'Reading Fluency & Basic Math Logic',
    gaps: ['Fractions', 'Confidence in presenting'],
    scores: {
      academics: 55,
      communication: 40,
      digital: 45,
      career: 30
    },
    assessedDate: '2026-05-18',
    history: [
      { date: '2026-05-18', level: 'L2-A', scores: { academics: 55, communication: 40 } }
    ]
  },
  {
    id: 's4',
    name: 'Ananya Rao',
    age: 13,
    category: 'teenager',
    levelCode: 'L2-B',
    levelName: 'Conceptual Science & Applied Math',
    gaps: ['Scientific inquiry steps', 'Percentages'],
    scores: {
      academics: 78,
      communication: 68,
      digital: 60,
      career: 55
    },
    assessedDate: '2026-05-22',
    history: [
      { date: '2026-03-15', level: 'L2-A', scores: { academics: 60, communication: 50 } },
      { date: '2026-05-22', level: 'L2-B', scores: { academics: 78, communication: 68 } }
    ]
  },
  {
    id: 's5',
    name: 'Rohan Deshmukh',
    age: 16,
    category: 'young_adult',
    levelCode: 'L3-B',
    levelName: 'Applied Office Skills & Workplace English',
    gaps: ['Excel formulas', 'Resume clarity'],
    scores: {
      digital: 70,
      communication: 60,
      employability: 65,
      academics: 70
    },
    assessedDate: '2026-05-30',
    history: [
      { date: '2026-02-10', level: 'L3-A', scores: { digital: 40, communication: 45, employability: 40 } },
      { date: '2026-04-05', level: 'L3-A', scores: { digital: 55, communication: 50, employability: 50 } },
      { date: '2026-05-30', level: 'L3-B', scores: { digital: 70, communication: 60, employability: 65 } }
    ]
  },
  {
    id: 's6',
    name: 'Sneha Kumari',
    age: 18,
    category: 'young_adult',
    levelCode: 'L3-C',
    levelName: 'Job-Ready Employability & Career Pathing',
    gaps: ['Advanced interview confidence'],
    scores: {
      digital: 85,
      communication: 88,
      employability: 90,
      academics: 82
    },
    assessedDate: '2026-06-05',
    history: [
      { date: '2026-03-01', level: 'L3-B', scores: { digital: 72, communication: 70, employability: 75 } },
      { date: '2026-06-05', level: 'L3-C', scores: { digital: 85, communication: 88, employability: 90 } }
    ]
  },
  {
    id: 's7',
    name: 'Aditya Gupta',
    age: 6,
    category: 'child',
    levelCode: 'L1-A',
    levelName: 'Emergent Literacy & Numeracy',
    gaps: ['Phonics letter association', 'Counting 1-10 stability'],
    scores: {
      literacy: 35,
      numeracy: 42,
      communication: 40,
      digital: 10
    },
    assessedDate: '2026-06-08',
    history: [
      { date: '2026-06-08', level: 'L1-A', scores: { literacy: 35, numeracy: 42 } }
    ]
  },
  {
    id: 's8',
    name: 'Diya Sen',
    age: 15,
    category: 'young_adult',
    levelCode: 'L3-A',
    levelName: 'Digital & Verbal Basics',
    gaps: ['Keyboard shortcuts', 'Professional speaking pace'],
    scores: {
      digital: 45,
      communication: 52,
      employability: 48,
      academics: 60
    },
    assessedDate: '2026-06-09',
    history: [
      { date: '2026-06-09', level: 'L3-A', scores: { digital: 45, communication: 52, employability: 48 } }
    ]
  }
];

// Helper to calculate student averages, skill gaps etc.
const getDashboardStats = (students = MOCK_STUDENTS) => {
  const total = students.length;
  if (total === 0) return { total: 0, avgLiteracy: 0, avgNumeracy: 0, avgDigital: 0, avgComm: 0, levelCounts: {} };

  let totalLit = 0, totalNum = 0, totalDig = 0, totalComm = 0, totalEmp = 0;
  const levelCounts = {};
  const categoryCounts = { child: 0, teenager: 0, young_adult: 0 };

  students.forEach(s => {
    totalLit += s.scores.literacy || s.scores.academics || 0;
    totalNum += s.scores.numeracy || s.scores.academics || 0;
    totalDig += s.scores.digital || 0;
    totalComm += s.scores.communication || 0;
    totalEmp += s.scores.employability || s.scores.career || 0;

    levelCounts[s.levelCode] = (levelCounts[s.levelCode] || 0) + 1;
    categoryCounts[s.category] = (categoryCounts[s.category] || 0) + 1;
  });

  return {
    total,
    averages: {
      academics: Math.round((totalLit + totalNum) / (2 * total)),
      digital: Math.round(totalDig / total),
      communication: Math.round(totalComm / total),
      employability: Math.round(totalEmp / total)
    },
    levelCounts,
    categoryCounts
  };
};
