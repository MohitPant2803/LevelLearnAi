/**
 * LearnLevel AI - Main Application Controller
 */

class LearnLevelApp {
  constructor() {
    // Application State
    this.students = [...MOCK_STUDENTS];
    this.worksheets = [...WORKSHEETS];
    this.activeSection = 'home';
    this.currentTheme = 'light';
    
    // Assessment Wizard State
    this.assessmentState = {
      name: '',
      age: null,
      category: 'child',
      currentQuestionIdx: 0,
      answers: [], // store selected option score/info
      activeQuestions: []
    };

    // DOM References
    this.sections = {};
    this.navItems = [];
    this.themeToggleBtn = null;
    this.sunIcon = null;
    this.moonIcon = null;
    this.btnHeaderCta = null;
  }

  init() {
    // Cache DOM Elements
    this.sections = {
      home: document.getElementById('section-home'),
      assessment: document.getElementById('section-assessment'),
      dashboard: document.getElementById('section-dashboard'),
      resources: document.getElementById('section-resources')
    };
    
    this.navItems = document.querySelectorAll('.nav-links .nav-item');
    this.themeToggleBtn = document.getElementById('theme-toggle');
    this.sunIcon = this.themeToggleBtn.querySelector('.sun-icon');
    this.moonIcon = this.themeToggleBtn.querySelector('.moon-icon');
    this.btnHeaderCta = document.getElementById('btn-header-cta');

    // Register Event Listeners
    this.registerEvents();

    // Initialize Routing & Load Dashboard/Resources
    this.handleRoute(window.location.hash);
    this.renderDashboard();
    this.renderResources();
    this.setupTheme();
  }

  registerEvents() {
    // Nav Items click handler
    this.navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const target = item.getAttribute('data-target');
        this.navigateTo(target);
      });
    });

    // Logo click handler
    document.getElementById('nav-logo').addEventListener('click', (e) => {
      e.preventDefault();
      this.navigateTo('home');
    });

    // Theme Toggle click handler
    this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());

    // Header CTA click handler
    this.btnHeaderCta.addEventListener('click', () => {
      this.navigateTo('assessment');
    });

    // Hash change handler for routing support
    window.addEventListener('hashchange', () => {
      this.handleRoute(window.location.hash);
    });

    // Dashboard filters
    document.getElementById('student-search-input').addEventListener('input', () => this.filterStudentsTable());
    document.getElementById('student-filter-category').addEventListener('change', () => this.filterStudentsTable());

    // Resource Library filters
    const subjectChips = document.querySelectorAll('#resource-subject-chips .chip-filter-btn');
    subjectChips.forEach(chip => {
      chip.addEventListener('click', () => {
        subjectChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.filterResourcesGrid();
      });
    });
    
    const resourceTabs = document.querySelectorAll('#resource-category-tabs .tab-filter-btn');
    resourceTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        resourceTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.filterResourcesGrid();
      });
    });
  }

  // --- SPA ROUTING ENGINE ---
  handleRoute(hash) {
    const route = hash.replace('#', '');
    if (this.sections[route]) {
      this.navigateTo(route, null, false); // don't set hash again, since it was changed by browser
    } else {
      this.navigateTo('home', null, false);
    }
  }

  navigateTo(sectionId, params = null, updateHash = true) {
    // Hide active section
    if (this.sections[this.activeSection]) {
      this.sections[this.activeSection].classList.remove('active');
    }
    
    // Show new section
    if (this.sections[sectionId]) {
      this.sections[sectionId].classList.add('active');
      this.activeSection = sectionId;
    }

    // Update Nav Active State
    this.navItems.forEach(item => {
      if (item.getAttribute('data-target') === sectionId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Handle incoming parameters
    if (sectionId === 'resources' && params && params.category) {
      // Set active category filter in resources
      const resourceTabs = document.querySelectorAll('#resource-category-tabs .tab-filter-btn');
      resourceTabs.forEach(tab => {
        if (tab.getAttribute('data-val') === params.category) {
          tab.click();
        }
      });
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update URL hash
    if (updateHash) {
      window.location.hash = sectionId;
    }

    // Trigger chart rendering adjustments on dashboard navigate (necessary for accurate container scaling)
    if (sectionId === 'dashboard') {
      this.renderCharts();
    }
  }

  // --- THEME SWAPPER (LIGHT / DARK) ---
  setupTheme() {
    // Check saved theme preference
    const savedTheme = localStorage.getItem('learnlevel-theme');
    if (savedTheme === 'dark') {
      this.setTheme('dark');
    } else {
      this.setTheme('light');
    }
  }

  setTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      this.sunIcon.style.display = 'none';
      this.moonIcon.style.display = 'block';
      this.currentTheme = 'dark';
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      this.sunIcon.style.display = 'block';
      this.moonIcon.style.display = 'none';
      this.currentTheme = 'light';
    }
    localStorage.setItem('learnlevel-theme', theme);
    // Redraw charts to ensure text color elements adapt to dark mode
    if (this.activeSection === 'dashboard') {
      this.renderCharts();
    }
  }

  toggleTheme() {
    if (this.currentTheme === 'light') {
      this.setTheme('dark');
    } else {
      this.setTheme('light');
    }
  }

  // --- DIAGNOSTIC ASSESSMENT WIZARD ENGINE ---
  selectDiagnosticCategory(category) {
    const radio = document.querySelector(`input[name="assessment-category"][value="${category}"]`);
    if (radio) {
      radio.checked = true;
    }
  }

  resetAssessment() {
    this.assessmentState = {
      name: '',
      age: null,
      category: 'child',
      currentQuestionIdx: 0,
      answers: [],
      activeQuestions: []
    };

    // Reset Forms
    document.getElementById('form-assessment-setup').reset();

    // Toggle panels
    document.getElementById('assessment-setup').classList.add('active');
    document.getElementById('assessment-wizard').classList.remove('active');
    document.getElementById('assessment-results').classList.remove('active');
  }

  startAssessmentWizard() {
    const nameInput = document.getElementById('learner-name');
    const ageInput = document.getElementById('learner-age');
    const categoryInput = document.querySelector('input[name="assessment-category"]:checked');

    if (!nameInput.value || !ageInput.value) {
      this.showToast('Please fill in student details.', 'error');
      return;
    }

    this.assessmentState.name = nameInput.value;
    this.assessmentState.age = parseInt(ageInput.value);
    this.assessmentState.category = categoryInput.value;
    this.assessmentState.currentQuestionIdx = 0;
    this.assessmentState.answers = [];
    this.assessmentState.activeQuestions = DIAGNOSTIC_QUESTIONS[categoryInput.value] || [];

    // Switch Wizard steps panel
    document.getElementById('assessment-setup').classList.remove('active');
    document.getElementById('assessment-wizard').classList.add('active');

    this.renderQuestion();
  }

  renderQuestion() {
    const wizard = this.assessmentState;
    const question = wizard.activeQuestions[wizard.currentQuestionIdx];
    if (!question) return;

    // Progress percentage
    const progress = Math.round(((wizard.currentQuestionIdx + 1) / wizard.activeQuestions.length) * 100);
    document.getElementById('wizard-progress-fill').style.width = `${progress}%`;
    document.getElementById('wizard-step-indicator').textContent = `Question ${wizard.currentQuestionIdx + 1} of ${wizard.activeQuestions.length}`;

    // Render HTML Question container
    const container = document.getElementById('question-container');
    
    // Check if there is an already selected option for this question
    const selectedVal = wizard.answers[wizard.currentQuestionIdx] !== undefined ? wizard.answers[wizard.currentQuestionIdx].index : null;

    let optionsHtml = '';
    question.options.forEach((opt, idx) => {
      const isChecked = selectedVal === idx ? 'checked' : '';
      optionsHtml += `
        <label class="option-item">
          <input type="radio" name="wiz-question-option" value="${idx}" ${isChecked} onchange="app.selectOption(${idx})">
          <span class="option-content">
            <span class="option-marker"></span>
            ${opt.text}
          </span>
        </label>
      `;
    });

    container.innerHTML = `
      <div class="wizard-skill-badge badge badge-${wizard.category}">${question.skill} Focus</div>
      <h3>${question.text}</h3>
      <div class="options-list">
        ${optionsHtml}
      </div>
    `;

    // Toggle Back button visibility
    const prevBtn = document.getElementById('wizard-btn-prev');
    if (wizard.currentQuestionIdx === 0) {
      prevBtn.style.visibility = 'hidden';
    } else {
      prevBtn.style.visibility = 'visible';
    }

    // Set Next button text
    const nextBtn = document.getElementById('wizard-btn-next');
    if (wizard.currentQuestionIdx === wizard.activeQuestions.length - 1) {
      nextBtn.textContent = 'View Diagnostic Results';
    } else {
      nextBtn.textContent = 'Next Question';
    }
  }

  selectOption(idx) {
    const wizard = this.assessmentState;
    const question = wizard.activeQuestions[wizard.currentQuestionIdx];
    
    // Record score
    wizard.answers[wizard.currentQuestionIdx] = {
      index: idx,
      score: question.options[idx].score,
      skill: question.skill
    };
  }

  prevQuestion() {
    if (this.assessmentState.currentQuestionIdx > 0) {
      this.assessmentState.currentQuestionIdx--;
      this.renderQuestion();
    }
  }

  nextQuestion() {
    const wizard = this.assessmentState;
    
    // Validate that an option was selected
    if (wizard.answers[wizard.currentQuestionIdx] === undefined) {
      this.showToast('Please select an option to continue.', 'error');
      return;
    }

    if (wizard.currentQuestionIdx < wizard.activeQuestions.length - 1) {
      wizard.currentQuestionIdx++;
      this.renderQuestion();
    } else {
      this.calculateResults();
    }
  }

  calculateResults() {
    const wizard = this.assessmentState;
    const scoreSum = wizard.answers.reduce((acc, curr) => acc + curr.score, 0);
    const maxPossible = wizard.activeQuestions.length * 3;
    const percentage = Math.round((scoreSum / maxPossible) * 100);

    // Determine Placement Level based on score threshold
    let finalLevelCode = '';
    let finalLevelName = '';
    let gapsList = [];
    
    if (wizard.category === 'child') {
      if (percentage < 45) {
        finalLevelCode = 'L1-A';
        finalLevelName = 'Emergent Literacy & Numeracy';
        gapsList = ['Phonics sound associations', 'Basic digit shapes'];
      } else if (percentage < 75) {
        finalLevelCode = 'L1-B';
        finalLevelName = 'Phonics & Basic Operations';
        gapsList = ['Word formulation', 'Subtraction basics'];
      } else {
        finalLevelCode = 'L1-C';
        finalLevelName = 'Fluent Reading & Word Problems';
        gapsList = ['Double digit arithmetic representation'];
      }
    } else if (wizard.category === 'teenager') {
      if (percentage < 45) {
        finalLevelCode = 'L2-A';
        finalLevelName = 'Reading Fluency & Basic Math Logic';
        gapsList = ['Fractions & basic division', 'Concept explanations'];
      } else if (percentage < 75) {
        finalLevelCode = 'L2-B';
        finalLevelName = 'Conceptual Science & Applied Math';
        gapsList = ['Hypothesis formation', 'Percentages'];
      } else {
        finalLevelCode = 'L2-C';
        finalLevelName = 'Critical Thinking & Career Exposure';
        gapsList = ['Complex logical operations', 'Digital application concepts'];
      }
    } else { // Young adult
      if (percentage < 45) {
        finalLevelCode = 'L3-A';
        finalLevelName = 'Digital & Verbal Basics';
        gapsList = ['Keyboard shortcuts', 'Professional verbal introductions'];
      } else if (percentage < 75) {
        finalLevelCode = 'L3-B';
        finalLevelName = 'Applied Office Skills & Workplace English';
        gapsList = ['Excel SUM/AVERAGE formula use', 'Resume summaries'];
      } else {
        finalLevelCode = 'L3-C';
        finalLevelName = 'Job-Ready Employability & Career Pathing';
        gapsList = ['Advanced confidence in mock reviews'];
      }
    }

    // Save final generated scores to wizard state for DB creation
    wizard.finalLevelCode = finalLevelCode;
    wizard.finalLevelName = finalLevelName;
    wizard.finalGaps = gapsList;
    wizard.finalPercentage = percentage;

    // Injects results details in UI
    document.getElementById('results-student-name').textContent = wizard.name;
    document.getElementById('results-student-meta').innerHTML = `Age ${wizard.age} • Category Focus: <span class="badge badge-${wizard.category}">${wizard.category.toUpperCase()}</span>`;
    document.getElementById('results-level-code').textContent = finalLevelCode;
    document.getElementById('results-level-name').textContent = finalLevelName;

    // Custom coloring for level code badges
    const lvlBadge = document.getElementById('results-level-code');
    lvlBadge.className = 'level-badge-large'; // reset
    if (wizard.category === 'child') lvlBadge.style.backgroundColor = 'var(--primary)';
    if (wizard.category === 'teenager') lvlBadge.style.backgroundColor = 'var(--accent-amber)';
    if (wizard.category === 'young_adult') lvlBadge.style.backgroundColor = 'var(--accent-purple)';

    // Render scores progress bars
    const scoresContainer = document.getElementById('results-score-bars');
    scoresContainer.innerHTML = '';
    
    // Group scores by skill category
    const skillScores = {};
    wizard.answers.forEach(ans => {
      skillScores[ans.skill] = (skillScores[ans.skill] || 0) + (ans.score / 3) * 100;
    });

    Object.keys(skillScores).forEach(skill => {
      const val = Math.round(skillScores[skill] / (wizard.answers.filter(a => a.skill === skill).length));
      scoresContainer.innerHTML += `
        <div class="progress-bar-group">
          <div class="pb-label-row">
            <span>${skill}</span>
            <span>${val}%</span>
          </div>
          <div class="bar-fill">
            <div class="fill" style="width: ${val}%; background-color: var(--accent-teal);"></div>
          </div>
        </div>
      `;
    });

    // Render Gaps List
    const gapsContainer = document.getElementById('results-gaps-list');
    gapsContainer.innerHTML = '';
    gapsList.forEach(gap => {
      gapsContainer.innerHTML += `<li>${gap}</li>`;
    });

    // Render Recommended Worksheets
    const worksheetsContainer = document.getElementById('results-worksheets-grid');
    worksheetsContainer.innerHTML = '';
    
    const matchedWS = this.worksheets.filter(w => w.category === wizard.category && w.levelCode === finalLevelCode);
    matchedWS.forEach(ws => {
      worksheetsContainer.innerHTML += `
        <div class="rec-worksheet-card" onclick="app.openWorksheetPreview('${ws.id}')">
          <div class="rec-card-info">
            <h5>${ws.title}</h5>
            <p>${ws.subject} • Est. Time: ${ws.duration}</p>
          </div>
          <span class="ws-btn-preview">Preview →</span>
        </div>
      `;
    });

    // Switch wizard sections panel
    document.getElementById('assessment-wizard').classList.remove('active');
    document.getElementById('assessment-results').classList.add('active');
  }

  saveAssessmentToDashboard() {
    const wizard = this.assessmentState;

    // Create a new mock student entry
    const newStudent = {
      id: `s-${Date.now()}`,
      name: wizard.name,
      age: wizard.age,
      category: wizard.category,
      levelCode: wizard.finalLevelCode,
      levelName: wizard.finalLevelName,
      gaps: wizard.finalGaps,
      scores: {
        literacy: wizard.category === 'child' ? wizard.finalPercentage : 60,
        numeracy: wizard.category === 'child' ? Math.max(10, wizard.finalPercentage - 10) : 55,
        academics: wizard.category === 'teenager' ? wizard.finalPercentage : 65,
        communication: wizard.category === 'young_adult' ? wizard.finalPercentage : 60,
        digital: wizard.category === 'young_adult' ? Math.max(20, wizard.finalPercentage - 5) : 50,
        career: wizard.category === 'teenager' ? wizard.finalPercentage : 45,
        employability: wizard.category === 'young_adult' ? wizard.finalPercentage : 40
      },
      assessedDate: new Date().toISOString().split('T')[0],
      history: [
        { date: new Date().toISOString().split('T')[0], level: wizard.finalLevelCode, scores: { average: wizard.finalPercentage } }
      ]
    };

    // Add to students database
    this.students.unshift(newStudent);

    // Refresh dashboard visuals
    this.renderDashboard();
    
    this.showToast(`Saved ${wizard.name} profile successfully!`, 'success');
    this.navigateTo('dashboard');
  }

  // --- EDUCATOR DASHBOARD LOGIC ---
  renderDashboard() {
    // 1. Calculate and render Stats Cards
    const stats = getDashboardStats(this.students);
    
    document.getElementById('stat-total-students').textContent = stats.total;
    document.getElementById('stat-avg-academics').textContent = `${stats.averages.academics}%`;
    document.getElementById('stat-avg-digital').textContent = `${stats.averages.digital}%`;
    document.getElementById('stat-avg-communication').textContent = `${stats.averages.communication}%`;

    // Handle styling warning for low averages
    const digCardTrend = document.querySelector('.stat-card:nth-child(3) .stat-trend');
    if (stats.averages.digital < 50) {
      digCardTrend.className = 'stat-trend trend-down';
      digCardTrend.textContent = '↓ Needs Intervention';
    } else {
      digCardTrend.className = 'stat-trend trend-up';
      digCardTrend.textContent = '↑ Stable';
    }

    // 2. Generate Student Table
    this.renderStudentTable(this.students);

    // 3. Render charts
    this.renderCharts();
  }

  switchDashboardTab(tabName, btnElement) {
    // 1. Update button active classes
    const buttons = document.querySelectorAll('.dashboard-tabs-row .db-tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    // 2. Hide/Show groups
    const groups = document.querySelectorAll('.charts-tab-group');
    groups.forEach(group => group.classList.remove('active'));

    if (tabName === 'overview') {
      document.getElementById('charts-group-overview').classList.add('active');
    } else {
      document.getElementById('charts-group-trend').classList.add('active');
    }

    // 3. Re-render charts immediately so their container widths are read accurately
    this.renderCharts();
  }

  renderStudentTable(list) {
    const tbody = document.getElementById('student-table-body');
    tbody.innerHTML = '';
    
    document.getElementById('table-student-count').textContent = `${list.length} Students`;

    if (list.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: var(--text-muted); padding: 3rem 0;">No student records found matching query.</td></tr>`;
      return;
    }

    list.forEach(student => {
      // Calculate individual average score across all fields
      const sc = student.scores;
      const scoreValues = Object.values(sc);
      const scoreAvg = Math.round(scoreValues.reduce((a, b) => a + b, 0) / scoreValues.length);

      // Render gaps tags
      let gapTagsHtml = '';
      student.gaps.slice(0, 2).forEach(gap => {
        gapTagsHtml += `<span class="td-gap-tag">${gap}</span>`;
      });
      if (student.gaps.length > 2) {
        gapTagsHtml += `<span class="td-gap-tag" style="background-color: var(--bg-tertiary); color: var(--text-secondary);">+${student.gaps.length - 2} more</span>`;
      }

      // Readable Category
      let catPill = '';
      if (student.category === 'child') catPill = '<span class="badge badge-child">Child</span>';
      if (student.category === 'teenager') catPill = '<span class="badge badge-teenager">Teenager</span>';
      if (student.category === 'young_adult') catPill = '<span class="badge badge-young_adult">Young Adult</span>';

      tbody.innerHTML += `
        <tr>
          <td class="td-student-name">${student.name}</td>
          <td>${catPill} <span style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">(Age ${student.age})</span></td>
          <td><span style="font-family: monospace; font-weight: 700;">${student.levelCode}</span></td>
          <td style="font-weight: 500;">${student.levelName}</td>
          <td><div class="td-gaps-list">${gapTagsHtml}</div></td>
          <td class="td-score-average">${scoreAvg}%</td>
          <td style="color:var(--text-muted);">${student.assessedDate}</td>
          <td>
            <div style="display: flex; gap: 8px;">
              <button class="btn btn-sm btn-outline" onclick="app.openStudentDetail('${student.id}')">Profile</button>
              <button class="btn btn-sm btn-outline" style="color: var(--danger); border-color: transparent;" onclick="app.deleteStudent('${student.id}')" title="Delete Profile">✕</button>
            </div>
          </td>
        </tr>
      `;
    });
  }

  filterStudentsTable() {
    const searchVal = document.getElementById('student-search-input').value.toLowerCase();
    const categoryVal = document.getElementById('student-filter-category').value;

    const filtered = this.students.filter(student => {
      const matchesSearch = student.name.toLowerCase().includes(searchVal);
      const matchesCategory = categoryVal === 'all' || student.category === categoryVal;
      return matchesSearch && matchesCategory;
    });

    this.renderStudentTable(filtered);
  }

  deleteStudent(id) {
    if (confirm('Are you sure you want to delete this student profile? This will update all class statistics.')) {
      this.students = this.students.filter(s => s.id !== id);
      this.renderDashboard();
      this.showToast('Student profile deleted.', 'info');
    }
  }

  // --- SVG PROGRESS CHART ENGINE ---
  renderCharts() {
    // Avoid drawing if container isn't active
    if (this.activeSection !== 'dashboard') return;

    const stats = getDashboardStats(this.students);

    // 1. Subject competency chart (Horizontal SVG Bar Chart)
    const barContainer = document.getElementById('bar-chart-container');
    const bHeight = 220;
    const bWidth = barContainer.clientWidth || 400;
    const paddingLeft = 120;
    const paddingRight = 60;
    const chartWidth = bWidth - paddingLeft - paddingRight;

    const barMetrics = [
      { label: 'Academics', score: stats.averages.academics, color: 'var(--primary)' },
      { label: 'Digital Skills', score: stats.averages.digital, color: 'var(--accent-teal)' },
      { label: 'Communication', score: stats.averages.communication, color: 'var(--accent-purple)' },
      { label: 'Employability', score: stats.averages.employability, color: 'var(--accent-amber)' }
    ];

    let barsHtml = '';
    const textFill = this.currentTheme === 'dark' ? '#cbd5e1' : '#334155';
    
    barMetrics.forEach((m, i) => {
      const y = 20 + i * 45;
      const barLength = Math.max(10, Math.round((m.score / 100) * chartWidth));
      barsHtml += `
        <!-- Label -->
        <text x="10" y="${y + 18}" fill="${textFill}" font-family="var(--font-primary)" font-size="12" font-weight="600">${m.label}</text>
        <!-- Background Track -->
        <rect x="${paddingLeft}" y="${y}" width="${chartWidth}" height="24" rx="6" fill="var(--bg-tertiary)"></rect>
        <!-- Value fill bar -->
        <rect class="chart-bar-rect" x="${paddingLeft}" y="${y}" width="${barLength}" height="24" rx="6" fill="${m.color}"></rect>
        <!-- Value Text label -->
        <text x="${paddingLeft + barLength + 10}" y="${y + 17}" fill="${textFill}" font-family="var(--font-primary)" font-size="12" font-weight="700">${m.score}%</text>
      `;
    });

    barContainer.innerHTML = `
      <svg width="${bWidth}" height="${bHeight}" style="overflow: visible;">
        <!-- Grid Guidelines -->
        <line x1="${paddingLeft}" y1="10" x2="${paddingLeft}" y2="200" stroke="var(--border-color)" stroke-width="1"></line>
        <line x1="${paddingLeft + chartWidth * 0.5}" y1="10" x2="${paddingLeft + chartWidth * 0.5}" y2="200" stroke="var(--border-color)" stroke-width="1" stroke-dasharray="4,4"></line>
        <line x1="${paddingLeft + chartWidth}" y1="10" x2="${paddingLeft + chartWidth}" y2="200" stroke="var(--border-color)" stroke-width="1" stroke-dasharray="4,4"></line>
        
        <text x="${paddingLeft}" y="210" fill="var(--text-muted)" font-size="10" font-weight="600" text-anchor="middle">0%</text>
        <text x="${paddingLeft + chartWidth * 0.5}" y="210" fill="var(--text-muted)" font-size="10" font-weight="600" text-anchor="middle">50%</text>
        <text x="${paddingLeft + chartWidth}" y="210" fill="var(--text-muted)" font-size="10" font-weight="600" text-anchor="middle">100%</text>
        
        ${barsHtml}
      </svg>
    `;

    // 2. Age group distribution donut chart
    const donutContainer = document.getElementById('donut-chart-container');
    const dSize = 200;
    const center = dSize / 2;
    const radius = 60;
    const circ = 2 * Math.PI * radius;

    const childCount = stats.categoryCounts.child || 0;
    const teenCount = stats.categoryCounts.teenager || 0;
    const adultCount = stats.categoryCounts.young_adult || 0;
    const totalCount = childCount + teenCount + adultCount;

    // Calculating dash values
    const childPct = totalCount ? childCount / totalCount : 0;
    const teenPct = totalCount ? teenCount / totalCount : 0;
    const adultPct = totalCount ? adultCount / totalCount : 0;

    const cOffset = 0;
    const tOffset = childPct * circ;
    const aOffset = (childPct + teenPct) * circ;

    donutContainer.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; gap: 2rem; flex-wrap: wrap;">
        <div style="position: relative; width: ${dSize}px; height: ${dSize}px;">
          <svg width="${dSize}" height="${dSize}" style="transform: rotate(-90deg);">
            <!-- Child segment (blue) -->
            <circle class="chart-donut-segment" cx="${center}" cy="${center}" r="${radius}" fill="transparent" 
              stroke="var(--primary)" stroke-width="20" 
              stroke-dasharray="${childPct * circ} ${circ - childPct * circ}" 
              stroke-dashoffset="${-cOffset}"></circle>
            <!-- Teen segment (amber) -->
            <circle class="chart-donut-segment" cx="${center}" cy="${center}" r="${radius}" fill="transparent" 
              stroke="var(--accent-amber)" stroke-width="20" 
              stroke-dasharray="${teenPct * circ} ${circ - teenPct * circ}" 
              stroke-dashoffset="${-tOffset}"></circle>
            <!-- Adult segment (purple) -->
            <circle class="chart-donut-segment" cx="${center}" cy="${center}" r="${radius}" fill="transparent" 
              stroke="var(--accent-purple)" stroke-width="20" 
              stroke-dasharray="${adultPct * circ} ${circ - adultPct * circ}" 
              stroke-dashoffset="${-aOffset}"></circle>
          </svg>
          <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;">
            <div style="font-size: 1.75rem; font-weight: 800; color: var(--text-primary); line-height:1;">${totalCount}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600; text-transform:uppercase;">Students</div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 10px;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.8125rem;">
            <span style="display:inline-block; width:12px; height:12px; border-radius:50%; background:var(--primary);"></span>
            <span style="font-weight: 600;">Child: ${childCount} (${Math.round(childPct * 100)}%)</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.8125rem;">
            <span style="display:inline-block; width:12px; height:12px; border-radius:50%; background:var(--accent-amber);"></span>
            <span style="font-weight: 600;">Teen: ${teenCount} (${Math.round(teenPct * 100)}%)</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.8125rem;">
            <span style="display:inline-block; width:12px; height:12px; border-radius:50%; background:var(--accent-purple);"></span>
            <span style="font-weight: 600;">Adult: ${adultCount} (${Math.round(adultPct * 100)}%)</span>
          </div>
        </div>
      </div>
    `;

    // 3. Cohort Progress Longitudinal Trend (Line Chart)
    const lineContainer = document.getElementById('line-chart-container');
    const lHeight = 220;
    const lWidth = lineContainer.clientWidth || 800;
    const lPaddingLeft = 40;
    const lPaddingRight = 20;
    const lPaddingTop = 20;
    const lPaddingBottom = 30;
    const chartH = lHeight - lPaddingTop - lPaddingBottom;
    const chartW = lWidth - lPaddingLeft - lPaddingRight;

    // Hardcode some cohort months data
    const points = [
      { month: 'Mar', val: 51 },
      { month: 'Apr', val: 57 },
      { month: 'May', val: 62 },
      { month: 'Jun', val: 68 } //Matches Academics score today
    ];

    let pathPoints = '';
    let circlesHtml = '';
    let textLabelsHtml = '';

    points.forEach((p, idx) => {
      const x = lPaddingLeft + (idx / (points.length - 1)) * chartW;
      const y = lPaddingTop + chartH - (p.val / 100) * chartH;
      pathPoints += `${idx === 0 ? 'M' : 'L'} ${x} ${y} `;
      
      circlesHtml += `<circle cx="${x}" cy="${y}" r="5" fill="var(--bg-secondary)" stroke="var(--accent-teal)" stroke-width="3" class="chart-tooltip-trigger"></circle>`;
      
      textLabelsHtml += `
        <text x="${x}" y="${lHeight - 10}" fill="var(--text-muted)" font-size="10" font-weight="600" text-anchor="middle">${p.month}</text>
        <text x="${x}" y="${y - 10}" fill="var(--text-primary)" font-size="10" font-weight="700" text-anchor="middle">${p.val}%</text>
      `;
    });

    // Filled area path
    const areaPath = `${pathPoints} L ${lPaddingLeft + chartW} ${lPaddingTop + chartH} L ${lPaddingLeft} ${lPaddingTop + chartH} Z`;

    lineContainer.innerHTML = `
      <svg width="${lWidth}" height="${lHeight}" style="overflow: visible;">
        <defs>
          <linearGradient id="chart-area-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--accent-teal)" stop-opacity="0.3"></stop>
            <stop offset="100%" stop-color="var(--accent-teal)" stop-opacity="0.0"></stop>
          </linearGradient>
        </defs>

        <!-- Horizontal Grid Guide Lines -->
        <line class="chart-grid-line" x1="${lPaddingLeft}" y1="${lPaddingTop}" x2="${lPaddingLeft + chartW}" y2="${lPaddingTop}"></line>
        <line class="chart-grid-line" x1="${lPaddingLeft}" y1="${lPaddingTop + chartH * 0.5}" x2="${lPaddingLeft + chartW}" y2="${lPaddingTop + chartH * 0.5}"></line>
        <line class="chart-grid-line" x1="${lPaddingLeft}" y1="${lPaddingTop + chartH}" x2="${lPaddingLeft + chartW}" y2="${lPaddingTop + chartH}"></line>

        <!-- Y Axis text -->
        <text x="${lPaddingLeft - 10}" y="${lPaddingTop + 4}" fill="var(--text-muted)" font-size="9" font-weight="600" text-anchor="end">100%</text>
        <text x="${lPaddingLeft - 10}" y="${lPaddingTop + chartH * 0.5 + 4}" fill="var(--text-muted)" font-size="9" font-weight="600" text-anchor="end">50%</text>
        <text x="${lPaddingLeft - 10}" y="${lPaddingTop + chartH + 4}" fill="var(--text-muted)" font-size="9" font-weight="600" text-anchor="end">0%</text>

        <!-- Gradient Area under Line -->
        <path d="${areaPath}" fill="url(#chart-area-grad)"></path>

        <!-- Trend Line -->
        <path d="${pathPoints}" class="chart-line-path" stroke="var(--accent-teal)"></path>

        ${circlesHtml}
        ${textLabelsHtml}
      </svg>
    `;
  }

  // --- MANUAL ADD STUDENT MODAL ---
  openAddStudentModal() {
    document.getElementById('add-student-modal').classList.add('active');
  }

  closeAddStudentModal() {
    document.getElementById('add-student-modal').classList.remove('active');
    document.getElementById('form-add-student').reset();
  }

  submitNewStudent() {
    const name = document.getElementById('new-student-name').value;
    const age = parseInt(document.getElementById('new-student-age').value);
    const category = document.getElementById('new-student-category').value;
    const levelCode = document.getElementById('new-student-level').value;
    const score1 = parseInt(document.getElementById('new-student-score1').value);
    const score2 = parseInt(document.getElementById('new-student-score2').value);
    const gapsVal = document.getElementById('new-student-gaps').value;

    const gaps = gapsVal ? gapsVal.split(',').map(s => s.trim()).filter(s => s.length > 0) : ['Concept practice needed'];

    // Map Category to readable title levels
    const levelOption = document.querySelector(`#new-student-level option[value="${levelCode}"]`);
    const levelName = levelOption ? levelOption.text.split(': ')[1] : 'Placement';

    const newStudent = {
      id: `s-${Date.now()}`,
      name,
      age,
      category,
      levelCode,
      levelName,
      gaps,
      scores: {
        literacy: category === 'child' ? score1 : 60,
        numeracy: category === 'child' ? score2 : 55,
        academics: category === 'teenager' ? score1 : 65,
        communication: category === 'young_adult' ? score1 : 60,
        digital: category === 'young_adult' ? score2 : 50,
        career: category === 'teenager' ? score2 : 45,
        employability: category === 'young_adult' ? score2 : 40
      },
      assessedDate: new Date().toISOString().split('T')[0],
      history: [
        { date: new Date().toISOString().split('T')[0], level: levelCode, scores: { average: Math.round((score1 + score2) / 2) } }
      ]
    };

    this.students.unshift(newStudent);
    this.renderDashboard();
    this.closeAddStudentModal();
    this.showToast(`Student profile created for ${name}!`, 'success');
  }

  // --- INDIVIDUAL STUDENT PROFILE MODAL ---
  openStudentDetail(id) {
    const student = this.students.find(s => s.id === id);
    if (!student) return;

    const modal = document.getElementById('student-detail-modal');
    const body = document.getElementById('student-detail-modal-body');

    // Create metrics HTML
    let metricsHtml = '';
    const categories = {
      literacy: 'Literacy',
      numeracy: 'Numeracy',
      academics: 'Academics',
      communication: 'Communication',
      digital: 'Digital Tools',
      employability: 'Employability'
    };

    Object.keys(student.scores).forEach(key => {
      const label = categories[key] || key;
      const val = student.scores[key];
      metricsHtml += `
        <div class="sp-metric-box">
          <span class="sp-metric-label">${label}</span>
          <span class="sp-metric-val">${val}%</span>
        </div>
      `;
    });

    // Create Gaps list
    let gapsHtml = '';
    student.gaps.forEach(gap => {
      gapsHtml += `<li>${gap}</li>`;
    });

    // Recommended Worksheets
    let recsHtml = '';
    const matchedWS = this.worksheets.filter(w => w.category === student.category && w.levelCode === student.levelCode);
    matchedWS.forEach(ws => {
      recsHtml += `
        <div class="rec-worksheet-card" onclick="app.openWorksheetPreview('${ws.id}')">
          <div class="rec-card-info">
            <h5>${ws.title}</h5>
            <p>${ws.subject} • Est: ${ws.duration}</p>
          </div>
          <span class="ws-btn-preview">Preview →</span>
        </div>
      `;
    });

    if (matchedWS.length === 0) {
      recsHtml = `<p style="font-size:0.875rem; color:var(--text-secondary);">No worksheets currently matching this level code.</p>`;
    }

    // Build Modal Content Layout
    body.innerHTML = `
      <div class="sp-header">
        <div>
          <h3 style="font-size:1.75rem; margin-bottom: 2px;">${student.name}</h3>
          <span class="badge badge-${student.category}">${student.category.toUpperCase()} Focus</span>
          <span style="font-size: 0.875rem; color:var(--text-muted); font-weight:600; margin-left:6px;">Age ${student.age} • Assessed: ${student.assessedDate}</span>
        </div>
        <div style="text-align: right;">
          <span style="font-size: 1.5rem; font-weight: 800; background: var(--primary); color: white; padding: 0.25rem 0.875rem; border-radius: 6px;">${student.levelCode}</span>
          <p style="font-size: 0.8125rem; font-weight:600; color:var(--text-secondary); margin-top:4px;">${student.levelName}</p>
        </div>
      </div>

      <div class="sp-metrics-row">
        ${metricsHtml}
      </div>

      <div class="sp-details-grid">
        <div>
          <h4 style="font-size:1rem; margin-bottom:1rem;">Individual Progress Trajectory</h4>
          <div class="sp-chart-area" id="student-trend-chart-container">
            <!-- Dynamic student specific line chart -->
          </div>
          
          <div class="skill-gaps-list-wrapper" style="margin-top: 1rem;">
            <h5>Target Gaps Map:</h5>
            <ul class="gaps-list">
              ${gapsHtml}
            </ul>
          </div>
        </div>

        <div>
          <h4 style="font-size:1rem; margin-bottom: 1rem;">Targeted Lesson Materials</h4>
          <div class="rec-worksheets-grid">
            ${recsHtml}
          </div>
        </div>
      </div>
    `;

    modal.classList.add('active');

    // Draw Student Trend Line Chart
    setTimeout(() => {
      this.renderStudentTrendChart(student);
    }, 150);
  }

  renderStudentTrendChart(student) {
    const container = document.getElementById('student-trend-chart-container');
    if (!container) return;

    const width = container.clientWidth || 350;
    const height = 150;
    const paddingLeft = 30;
    const paddingRight = 10;
    const paddingTop = 15;
    const paddingBottom = 25;
    const cW = width - paddingLeft - paddingRight;
    const cH = height - paddingTop - paddingBottom;

    // Build timeline points from history list or mock one if single data point
    let historyPoints = [...student.history];
    if (historyPoints.length === 1) {
      // Mock historical milestones to look realistic
      const baselineDate = '2026-03-10';
      const midDate = '2026-04-25';
      const baseScores = Object.values(student.scores).map(v => Math.max(25, v - 22));
      const midScores = Object.values(student.scores).map(v => Math.max(35, v - 12));
      
      const baseAvg = Math.round(baseScores.reduce((a,b)=>a+b,0)/baseScores.length);
      const midAvg = Math.round(midScores.reduce((a,b)=>a+b,0)/midScores.length);
      const curAvg = Math.round(Object.values(student.scores).reduce((a,b)=>a+b,0)/Object.values(student.scores).length);

      historyPoints = [
        { date: baselineDate, label: 'Baseline', score: baseAvg },
        { date: midDate, label: 'Milestone 1', score: midAvg },
        { date: student.assessedDate, label: 'Milestone 2', score: curAvg }
      ];
    } else {
      // format existing history
      historyPoints = historyPoints.map((h, i) => {
        const avg = h.scores.average || 60;
        return {
          date: h.date,
          label: i === 0 ? 'Baseline' : `M${i}`,
          score: avg
        };
      });
    }

    let pathPoints = '';
    let circlesHtml = '';
    let textHtml = '';

    historyPoints.forEach((pt, idx) => {
      const x = paddingLeft + (idx / (historyPoints.length - 1)) * cW;
      const y = paddingTop + cH - (pt.score / 100) * cH;
      pathPoints += `${idx === 0 ? 'M' : 'L'} ${x} ${y} `;
      
      circlesHtml += `<circle cx="${x}" cy="${y}" r="4" fill="var(--bg-secondary)" stroke="var(--primary)" stroke-width="2.5"></circle>`;
      textHtml += `
        <text x="${x}" y="${height - 6}" fill="var(--text-muted)" font-size="9" font-weight="600" text-anchor="middle">${pt.label}</text>
        <text x="${x}" y="${y - 8}" fill="var(--text-primary)" font-size="9" font-weight="700" text-anchor="middle">${pt.score}%</text>
      `;
    });

    const areaPath = `${pathPoints} L ${paddingLeft + cW} ${paddingTop + cH} L ${paddingLeft} ${paddingTop + cH} Z`;

    container.innerHTML = `
      <svg width="${width}" height="${height}" style="overflow: visible;">
        <defs>
          <linearGradient id="st-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--primary)" stop-opacity="0.25"></stop>
            <stop offset="100%" stop-color="var(--primary)" stop-opacity="0.0"></stop>
          </linearGradient>
        </defs>
        
        <line class="chart-grid-line" x1="${paddingLeft}" y1="${paddingTop}" x2="${paddingLeft + cW}" y2="${paddingTop}"></line>
        <line class="chart-grid-line" x1="${paddingLeft}" y1="${paddingTop + cH}" x2="${paddingLeft + cW}" y2="${paddingTop + cH}"></line>

        <path d="${areaPath}" fill="url(#st-grad)"></path>
        <path d="${pathPoints}" fill="none" stroke="var(--primary)" stroke-width="2.5" stroke-linecap="round"></path>
        
        ${circlesHtml}
        ${textHtml}
      </svg>
    `;
  }

  closeStudentDetailModal() {
    document.getElementById('student-detail-modal').classList.remove('active');
  }

  // --- RESOURCE LIBRARY LOGIC ---
  renderResources() {
    const wrapper = document.getElementById('worksheets-groups-wrapper');
    wrapper.innerHTML = '';

    const categories = [
      { key: 'CHILD', id: 'child', name: 'Young Child (Ages 5-9)' },
      { key: 'TEENAGER', id: 'teenager', name: 'Teenager (Ages 10-14)' },
      { key: 'YOUNG_ADULT', id: 'young_adult', name: 'Young Adult (Ages 15+)' }
    ];

    categories.forEach(cat => {
      const catData = LEARN_LEVELS[cat.key];
      if (!catData) return;

      catData.levels.forEach(lvl => {
        // Find worksheets matching this level
        const levelWorksheets = this.worksheets.filter(w => w.levelCode === lvl.code && w.category === cat.id);
        if (levelWorksheets.length === 0) return;

        // Render level header and grid wrapper
        let cardsHtml = '';
        levelWorksheets.forEach(ws => {
          cardsHtml += `
            <div class="worksheet-card" data-category="${ws.category}" data-subject="${ws.subject.toLowerCase()}" onclick="app.openWorksheetPreview('${ws.id}')">
              <div class="ws-card-header">
                <span class="ws-subject-tag ws-${ws.subject.toLowerCase().replace(/ /g, '-')}-tag">${ws.subject}</span>
                <span class="ws-level-code">${ws.levelCode}</span>
              </div>
              <h3>${ws.title}</h3>
              <div class="ws-card-footer">
                <span>Est. Time: ${ws.duration}</span>
                <span class="ws-btn-preview">Preview →</span>
              </div>
            </div>
          `;
        });

        wrapper.innerHTML += `
          <div class="level-group-section" data-level="${lvl.code}" data-category="${cat.id}">
            <div class="level-group-header">
              <span class="level-badge-sm" data-cat="${cat.id}">${lvl.code}</span>
              <div class="level-group-info">
                <h4>${lvl.name}</h4>
              </div>
            </div>
            <div class="worksheets-cards-grid">
              ${cardsHtml}
            </div>
          </div>
        `;
      });
    });
  }

  filterResourcesGrid() {
    const categoryVal = document.querySelector('#resource-category-tabs .tab-filter-btn.active').getAttribute('data-val');
    const subjectVal = document.querySelector('#resource-subject-chips .chip-filter-btn.active').getAttribute('data-val').toLowerCase();

    // 1. Filter worksheet cards
    const cards = document.querySelectorAll('.worksheet-card');
    cards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const cardSubject = card.getAttribute('data-subject');

      const matchesCategory = categoryVal === 'all' || cardCategory === categoryVal;
      
      // Match mapped subjects
      let matchesSubject = false;
      if (subjectVal === 'all') {
        matchesSubject = true;
      } else {
        if (subjectVal === 'literacy' || subjectVal === 'numeracy' || subjectVal === 'academics') {
          matchesSubject = cardSubject === 'literacy' || cardSubject === 'numeracy' || cardSubject === 'academics';
        } else if (subjectVal === 'digital' || subjectVal === 'digital skills') {
          matchesSubject = cardSubject === 'digital' || cardSubject === 'digital skills';
        } else if (subjectVal === 'communication') {
          matchesSubject = cardSubject === 'communication';
        } else if (subjectVal === 'employability' || subjectVal === 'career' || subjectVal === 'career readiness') {
          matchesSubject = cardSubject === 'employability' || cardSubject === 'career readiness' || cardSubject === 'career';
        }
      }

      if (matchesCategory && matchesSubject) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });

    // 2. Hide/Show level group sections depending on whether they have visible cards
    const levelSections = document.querySelectorAll('.level-group-section');
    levelSections.forEach(section => {
      const sectionCategory = section.getAttribute('data-category');
      const matchesCategory = categoryVal === 'all' || sectionCategory === categoryVal;

      if (!matchesCategory) {
        section.style.display = 'none'; section.style.visibility = 'hidden'; section.style.position = 'absolute'; section.style.opacity = '0';
        return;
      }

      // Check if there's at least one visible card inside this section
      const visibleCards = Array.from(section.querySelectorAll('.worksheet-card')).filter(c => c.style.display === 'flex');
      if (visibleCards.length > 0) {
        section.style.display = 'block'; section.style.visibility = 'visible'; section.style.position = 'relative'; section.style.opacity = '1';
      } else {
        section.style.display = 'none'; section.style.visibility = 'hidden'; section.style.position = 'absolute'; section.style.opacity = '0';
      }
    });
  }

  // --- WORKSHEET PREVIEW POPUP ---
  openWorksheetPreview(id) {
    const ws = this.worksheets.find(w => w.id === id);
    if (!ws) return;

    // Cache active worksheet ID on window context for trigger download
    window.currentWS = ws;

    const modal = document.getElementById('worksheet-modal');
    document.getElementById('worksheet-modal-title').textContent = ws.title;

    let tasksHtml = '';
    ws.tasks.forEach(task => {
      tasksHtml += `<li>${task}</li>`;
    });

    const body = document.getElementById('worksheet-modal-body');
    body.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
        <span class="badge badge-child" style="background-color: var(--primary-light); color:var(--primary); font-weight:700;">${ws.subject} Focus</span>
        <span style="font-weight:700; color:var(--text-muted); font-size:0.875rem;">Level ${ws.levelCode} • Est. Time: ${ws.duration}</span>
      </div>
      <p style="font-size:0.9375rem; color:var(--text-secondary); line-height:1.5; margin-bottom:1.5rem;">${ws.description}</p>
      
      <h5 style="font-size:0.8125rem; text-transform:uppercase; color:var(--text-muted); letter-spacing:0.05em; margin-bottom:0.75rem;">Worksheet Checklist Tasks:</h5>
      <ul class="worksheet-preview-bullets">
        ${tasksHtml}
      </ul>

      <div class="alert-info-box" style="margin-top:1.5rem; background-color: var(--accent-teal-light); border-left-color: var(--accent-teal);">
        <strong>Educator Note:</strong> Practice packs include printable PDF files, mentor answer keys, and digital templates where applicable.
      </div>
    `;

    modal.classList.add('active');
  }

  closeWorksheetModal() {
    document.getElementById('worksheet-modal').classList.remove('active');
  }

  triggerDownloadWorksheet() {
    const ws = window.currentWS;
    if (!ws) return;

    this.closeWorksheetModal();
    this.showToast(`Starting PDF pack download for "${ws.title}"...`, 'success');
  }

  // --- POPUP WINDOW DISMISSER (OVERLAYS) ---
  closeStudentDetailModal() {
    document.getElementById('student-detail-modal').classList.remove('active');
  }

  // --- TOAST NOTIFICATIONS SYSTEM ---
  showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = '✓';
    if (type === 'error') icon = '⚠';
    if (type === 'info') icon = 'ℹ';

    toast.innerHTML = `
      <span>${icon}</span>
      <div>${message}</div>
    `;
    
    container.appendChild(toast);

    // Slide out and remove
    setTimeout(() => {
      toast.style.transform = 'translateX(100px)';
      toast.style.opacity = '0';
      toast.style.transition = 'all 0.5s ease';
      setTimeout(() => {
        toast.remove();
      }, 500);
    }, 3500);
  }
}

// Instantiate and Mount App
const app = new LearnLevelApp();
window.addEventListener('DOMContentLoaded', () => {
  app.init();
});

// Debounced resize handler to redraw dashboard charts on layout updates
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    if (app.activeSection === 'dashboard') {
      app.renderCharts();
    }
  }, 150);
});

// Close modals when clicking outside modal-card
window.addEventListener('click', (e) => {
  const modals = document.querySelectorAll('.modal-overlay');
  modals.forEach(m => {
    if (e.target === m) {
      m.classList.remove('active');
    }
  });
});
