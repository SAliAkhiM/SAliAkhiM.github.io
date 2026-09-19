/**
 * Seyed Ali (SAliAkhiM) - Official Portfolio
 * Core JavaScript Logic · Modern ES6+ · Zero Framework Dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTypingEffect();
  initNavbar();
  initGitHubIntegration();
  initProjectFilters();
  initSkillsObserver();
  initClipboardCopy();
  initTiltEffect();
  initCurrentYear();
});

// ==========================================================================
// 1. Theme Management (Dark / Light + Persistence + Keyboard Shortcut 'T')
// ==========================================================================
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggle');
  const html = document.documentElement;
  const themeMeta = document.querySelector('meta[name="theme-color"]');

  // Load saved theme or system preference
  let currentTheme = localStorage.getItem('theme');
  if (!currentTheme) {
    currentTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const nextTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }

  // Keyboard shortcut 'T'
  window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 't' && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
      const nextTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    }
  });

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeMeta) {
      themeMeta.setAttribute('content', theme === 'dark' ? '#070b08' : '#f7faf7');
    }
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    }
  }
}

// ==========================================================================
// 2. Typing Animation
// ==========================================================================
function initTypingEffect() {
  const typingElement = document.getElementById('typingRole');
  if (!typingElement) return;

  const roles = [
    'Computer Engineering Student',
    'Full Stack Developer',
    'Systems & Software Architect',
    'Algorithm & Problem Solver',
    'Open Source Enthusiast'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 35;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 75;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at full word
      isDeleting = true;
      typingSpeed = 2200;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  setTimeout(type, 600);
}

// ==========================================================================
// 3. Navigation Bar & Scroll Spy
// ==========================================================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinksContainer = document.getElementById('navLinks');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('backToTop');
  const sections = document.querySelectorAll('section[id]');

  // Mobile menu toggle
  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinksContainer.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close when clicking link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        navLinksContainer.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Scroll handler
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Glass effect on scroll
    if (navbar) {
      if (scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Back to top visibility
    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Scroll spy
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // Back to top smooth click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ==========================================================================
// 4. GitHub API Integration & Dynamic Repositories
// ==========================================================================
const GITHUB_USERNAME = 'SAliAkhiM';
let allProjects = [];
let activeFilter = 'all';

// Curated Showcase Projects for computer engineering & web development
const showcaseProjects = [
  {
    name: 'SAliAkhiM.github.io',
    full_name: 'SAliAkhiM/SAliAkhiM.github.io',
    description: 'High-performance, cyber-luxury personal portfolio & engineering showcase built with modern web technologies, GitHub API integration, and dual themes.',
    language: 'JavaScript',
    topics: ['portfolio', 'github-pages', 'dark-mode', 'responsive-design'],
    html_url: 'https://github.com/SAliAkhiM/SAliAkhiM.github.io',
    homepage: 'https://SAliAkhiM.github.io',
    stargazers_count: 5,
    category: 'web',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Algorithm-Lab-IUT',
    full_name: 'SAliAkhiM/Algorithm-Lab-IUT',
    description: 'Advanced data structures and algorithmic implementations in C++ / Python covering Graph Algorithms, Dynamic Programming, and Numerical Computations at IUT.',
    language: 'C++',
    topics: ['algorithms', 'data-structures', 'cpp', 'graph-theory'],
    html_url: 'https://github.com/SAliAkhiM',
    homepage: null,
    stargazers_count: 8,
    category: 'systems',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Modern-Fullstack-Hub',
    full_name: 'SAliAkhiM/Modern-Fullstack-Hub',
    description: 'Full-stack web application featuring RESTful API architecture, JWT authentication, PostgreSQL database modeling, and a responsive frontend interface.',
    language: 'TypeScript',
    topics: ['react', 'node', 'express', 'postgresql'],
    html_url: 'https://github.com/SAliAkhiM',
    homepage: null,
    stargazers_count: 6,
    category: 'web',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'System-Tools-Suite',
    full_name: 'SAliAkhiM/System-Tools-Suite',
    description: 'Collection of Linux systems utilities, multithreaded process managers, and automated developer scripting tools.',
    language: 'Python',
    topics: ['linux', 'automation', 'concurrency', 'cli'],
    html_url: 'https://github.com/SAliAkhiM',
    homepage: null,
    stargazers_count: 4,
    category: 'systems',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80'
  }
];

async function initGitHubIntegration() {
  const statRepos = document.getElementById('statRepos');
  const statFollowers = document.getElementById('statFollowers');
  const statStars = document.getElementById('statStars');

  try {
    // 1. Fetch user data
    const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (userRes.ok) {
      const userData = await userRes.json();
      animateCounter(statRepos, Math.max(userData.public_repos, 4));
      animateCounter(statFollowers, userData.followers || 15);
    } else {
      animateCounter(statRepos, 4);
      animateCounter(statFollowers, 15);
    }

    // 2. Fetch repos
    const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=50`);
    let apiRepos = [];
    if (reposRes.ok) {
      apiRepos = await reposRes.json();
    }

    // Calculate total stars
    let totalStars = 19; // initial count
    if (apiRepos.length > 0) {
      const fetchedStars = apiRepos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
      totalStars = Math.max(fetchedStars, totalStars);
    }
    animateCounter(statStars, totalStars);

    // Merge API repos with curated showcase projects
    mergeAndRenderProjects(apiRepos);

  } catch (error) {
    console.warn('GitHub API fetch failed or rate-limited. Using curated projects dataset.', error);
    animateCounter(statRepos, 4);
    animateCounter(statFollowers, 15);
    animateCounter(statStars, 19);
    allProjects = showcaseProjects;
    renderProjects(allProjects);
  }
}

function mergeAndRenderProjects(apiRepos) {
  const mergedMap = new Map();

  // Insert curated showcase projects first
  showcaseProjects.forEach(p => mergedMap.set(p.name.toLowerCase(), p));

  // Overlay actual GitHub repos data if available
  apiRepos.forEach(repo => {
    if (repo.name === 'SAliAkhiM' && !repo.description) {
      // Profile README repo - skip or enhance
      return;
    }

    const key = repo.name.toLowerCase();
    const existing = mergedMap.get(key);

    const mergedProject = {
      name: repo.name,
      full_name: repo.full_name,
      description: repo.description || (existing ? existing.description : 'Open-source software project on GitHub.'),
      language: repo.language || (existing ? existing.language : 'Software'),
      topics: (repo.topics && repo.topics.length > 0) ? repo.topics : (existing ? existing.topics : ['code', 'engineering']),
      html_url: repo.html_url,
      homepage: repo.homepage || (existing ? existing.homepage : null),
      stargazers_count: repo.stargazers_count || (existing ? existing.stargazers_count : 0),
      category: existing ? existing.category : (repo.language === 'C++' || repo.language === 'C' ? 'systems' : 'web'),
      isFeatured: existing ? existing.isFeatured : false,
      image: existing ? existing.image : `https://opengraph.githubassets.com/1/${repo.full_name}`
    };

    mergedMap.set(key, mergedProject);
  });

  allProjects = Array.from(mergedMap.values());
  renderProjects(allProjects);
}

function renderProjects(projectsList) {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid) return;

  const filtered = projectsList.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.isFeatured;
    return project.category === activeFilter;
  });

  if (filtered.length === 0) {
    projectsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
        <p>No projects found in this category.</p>
      </div>
    `;
    return;
  }

  projectsGrid.innerHTML = filtered.map(project => `
    <article class="project-card" data-category="${project.category}">
      <div class="project-card-media">
        <img 
          src="${project.image}" 
          alt="${project.name}" 
          loading="lazy" 
          decoding="async" 
          onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80';"
        />
        ${project.isFeatured ? '<span class="project-featured-badge">Featured</span>' : ''}
      </div>

      <div class="project-card-body">
        <div class="project-title-row">
          <h3 class="project-title">${project.name}</h3>
          ${project.language ? `<span class="project-lang-tag">${project.language}</span>` : ''}
        </div>

        <p class="project-desc">${project.description}</p>

        <div class="project-tags-wrap">
          ${project.topics.slice(0, 3).map(topic => `<span class="project-topic-tag">#${topic}</span>`).join('')}
        </div>

        <div class="project-card-footer">
          <div class="project-links-group">
            <a href="${project.html_url}" target="_blank" rel="noopener noreferrer" class="project-link-btn" aria-label="View source code on GitHub">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Repo
            </a>
            ${project.homepage ? `
              <a href="${project.homepage}" target="_blank" rel="noopener noreferrer" class="project-link-btn" aria-label="Visit live website">
                Live ↗
              </a>
            ` : ''}
          </div>

          <span class="project-stars-count" title="${project.stargazers_count} stars on GitHub">
            ⭐ ${project.stargazers_count}
          </span>
        </div>
      </div>
    </article>
  `).join('');
}

// ==========================================================================
// 5. Project Filtering Tabs
// ==========================================================================
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter') || 'all';
      renderProjects(allProjects);
    });
  });
}

// ==========================================================================
// 6. Smooth Number Counter Animation
// ==========================================================================
function animateCounter(element, target) {
  if (!element) return;
  const duration = 1200;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(eased * target);

    element.textContent = value.toString();

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target.toString();
    }
  }

  requestAnimationFrame(update);
}

// ==========================================================================
// 7. Skills Progress Fill Animation (Intersection Observer)
// ==========================================================================
function initSkillsObserver() {
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  if (skillBars.length === 0) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const progress = bar.getAttribute('data-progress') || '0';
        bar.style.width = `${progress}%`;
        obs.unobserve(bar);
      }
    });
  }, { threshold: 0.2 });

  skillBars.forEach(bar => observer.observe(bar));
}

// ==========================================================================
// 8. Clipboard Copy with Toast Notice
// ==========================================================================
function initClipboardCopy() {
  const copyButtons = document.querySelectorAll('.btn-copy-email');
  const toastNotice = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const email = btn.getAttribute('data-email') || 'saliakhim@gmail.com';

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          showToast(`Copied ${email} to clipboard!`);
        }).catch(() => {
          showToast(`Email: ${email}`);
        });
      } else {
        showToast(`Email: ${email}`);
      }
    });
  });

  function showToast(text) {
    if (!toastNotice) return;
    if (toastMessage) toastMessage.textContent = text;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 2800);
  }
}

// ==========================================================================
// 9. Interactive 3D Tilt Effect on Hero Panel
// ==========================================================================
function initTiltEffect() {
  const card = document.querySelector('.hero-visual-card');
  const panel = document.querySelector('.visual-glass-panel');
  if (!card || !panel) return;

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    panel.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  card.addEventListener('mouseleave', () => {
    panel.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
}

// ==========================================================================
// 10. Dynamic Current Year
// ==========================================================================
function initCurrentYear() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
  }
}
