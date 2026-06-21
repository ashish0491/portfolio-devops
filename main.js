/* ─── NAV: SCROLL + ACTIVE STATE ─── */
const nav   = document.getElementById('nav');
const navAs = document.querySelectorAll('.nav-links a');

function setActiveNav() {
  const y = window.scrollY + 100;
  let active = 'hero';
  ['contact','achievements','certifications','projects','experience','skills','work','about'].forEach(id => {
    const el = document.getElementById(id);
    if (el && y >= el.offsetTop) active = id;
  });
  const map = {
    hero:'hero', about:'about',
    work:'work', skills:'work', experience:'work',
    projects:'work', certifications:'work', achievements:'work',
    contact:'contact'
  };
  navAs.forEach(a => {
    a.classList.toggle('active', a.dataset.s === (map[active] || active));
  });
  if (nav) nav.classList.toggle('solid', window.scrollY > 20);
  const btt = document.getElementById('btt');
  if (btt) btt.classList.toggle('show', window.scrollY > 500);
}
window.addEventListener('scroll', setActiveNav, { passive: true });
setActiveNav();

/* ─── MOBILE DRAWER ─── */
function toggleDrawer() {
  const d = document.getElementById('drawer');
  if (d) d.classList.toggle('open');
}
function closeDrawer() {
  const d = document.getElementById('drawer');
  if (d) d.classList.remove('open');
}

/* ─── TYPEWRITER ─── */
const words = [
  'DevOps Engineer', 'Cloud Architect', 'Terraform Engineer',
  'CI/CD Specialist', 'Problem Solver',  'AWS Practitioner'
];
let wi = 0, ci = 0, del = false;
const typedEl = document.getElementById('typed');

function type() {
  if (!typedEl) return;
  const w = words[wi];
  if (!del) {
    typedEl.textContent = w.slice(0, ++ci);
    if (ci === w.length) { del = true; setTimeout(type, 2000); return; }
  } else {
    typedEl.textContent = w.slice(0, --ci);
    if (ci === 0) { del = false; wi = (wi + 1) % words.length; setTimeout(type, 400); return; }
  }
  setTimeout(type, del ? 50 : 90);
}
type();

/* ─── INTERSECTION OBSERVER ─── */
let barsOn = false, countersOn = false;

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('on');

    if (e.target.closest('#skills') && !barsOn) {
      barsOn = true;
      document.querySelectorAll('.sk-fill').forEach(b => {
        setTimeout(() => { b.style.width = b.dataset.w + '%'; }, 150);
      });
    }

    if (e.target.closest('#achievements') && !countersOn) {
      countersOn = true;
      document.querySelectorAll('.ach-num[data-t]').forEach(el => {
        const target = parseInt(el.dataset.t, 10);
        let count = 0;
        const step = target / (1400 / 16);
        const tm = setInterval(() => {
          count = Math.min(count + step, target);
          el.innerHTML = Math.floor(count) + '<sup>+</sup>';
          if (count >= target) clearInterval(tm);
        }, 16);
      });
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fi, .fl, .fr').forEach((el, i) => {
  el.style.transitionDelay = (i % 5) * 0.06 + 's';
  io.observe(el);
});

/* ─── SKILLS FILTER ─── */
function fsk(cat, btn) {
  document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  document.querySelectorAll('.sk-card').forEach(c => {
    const show = cat === 'all' || c.dataset.c === cat;
    c.style.display = show ? 'flex' : 'none';
    if (show) {
      c.style.animation = 'none';
      void c.offsetHeight;
      c.style.animation = 'sk-in 0.3s ease forwards';
    }
  });
}
const ss = document.createElement('style');
ss.textContent = '@keyframes sk-in{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}';
document.head.appendChild(ss);

/* ─── RESUME MODAL ─── */
function openResume() {
  const modal = document.getElementById('resume-modal');
  const frame = document.getElementById('resume-frame');
  if (!modal || !frame) return;
  if (!frame.src || frame.src === window.location.href) {
    frame.src = 'Ashish Resume.pdf';
  }
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeResume() {
  const modal = document.getElementById('resume-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

/* Close on backdrop click */
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) closeResume();
    });
  }
});

/* Close on Escape key */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeResume();
});
