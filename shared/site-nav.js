(()=>{"use strict";
const params=new URLSearchParams(location.search),ref=params.get("ref")||params.get("track")||"";
const carry=(path,extra={})=>{const u=new URL(path,document.baseURI);if(ref)u.searchParams.set("ref",ref);Object.entries(extra).forEach(([k,v])=>u.searchParams.set(k,v));return u.href};
const common='xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"';
const icons={
 about:`<svg ${common}><circle cx="24" cy="15" r="6" stroke="#0B2341" stroke-width="2.4"/><path d="M13 37C15.5 29.5 19.5 26 24 26s8.5 3.5 11 11" stroke="#0B2341" stroke-width="2.4"/><path d="M27.5 37H35" stroke="#169BFF" stroke-width="2.8"/></svg>`,
 'live-cv':`<svg ${common}><path d="M14 7H29L36 14V41H14Z" stroke="#0B2341" stroke-width="2.4"/><path d="M29 7V14H36" stroke="#0B2341" stroke-width="2.4"/><path d="M20 21H30M20 27H30" stroke="#0B2341" stroke-width="2.4"/><path d="M20 33H30" stroke="#169BFF" stroke-width="2.8"/></svg>`,
 skills:`<svg ${common}><path d="M24 8l2.1 3.8 4.3.6.8 4.3 3.8 2.1-1.6 4 1.6 4-3.8 2.1-.8 4.3-4.3.6L24 37l-2.1-3.8-4.3-.6-.8-4.3-3.8-2.1 1.6-4-1.6-4 3.8-2.1.8-4.3 4.3-.6Z" stroke="#0B2341" stroke-width="2.4"/><circle cx="24" cy="22.2" r="5.2" stroke="#0B2341" stroke-width="2.4"/><path d="M27 31.5l3.5 3.5 7-8" stroke="#169BFF" stroke-width="2.8"/></svg>`,
 employment:`<svg ${common}><path d="M18 15v-3c0-2 1.5-3 3.5-3h5c2 0 3.5 1 3.5 3v3" stroke="#0B2341" stroke-width="2.4"/><rect x="10" y="15" width="28" height="22" rx="2.5" stroke="#0B2341" stroke-width="2.4"/><path d="M10 24h28" stroke="#0B2341" stroke-width="2.4"/><path d="M27 30.5l3.5 3.5 7-8" stroke="#169BFF" stroke-width="2.8"/></svg>`,
 feedback:`<svg ${common}><path d="M9 10h30v22H21l-8 7v-7H9Z" stroke="#0B2341" stroke-width="2.4"/><circle cx="18" cy="21" r="1.7" fill="#0B2341" stroke="none"/><circle cx="24" cy="21" r="1.7" fill="#169BFF" stroke="none"/><circle cx="30" cy="21" r="1.7" fill="#0B2341" stroke="none"/></svg>`};
const html=`<button id="sssLiveFloatingMenu" type="button" aria-label="Open navigation menu">MENU</button><div id="sssConsolidatedNav" aria-hidden="true"><div class="navDialog" role="dialog" aria-modal="true" aria-labelledby="sssNavTitle"><div class="navHead"><h2 id="sssNavTitle">Welcome</h2><div class="navSub">You’re in Control</div><button type="button" class="navClose" aria-label="Close">×</button></div><div class="navIntro">Thank you for taking the time to consider me for the role advertised.<br>I’ve recruited extensively myself, so I know your time matters.<br>Throughout my career, I’ve always gone through the next door that opened, never stopping to create a CV.<br>This is my way of showing the path I’ve taken, the roles I’ve performed, and the skills and experience I’ve collected along the way.<br><strong>Start anywhere you like. You can return here at any time to explore further.</strong></div><div class="navGrid"><button class="sss-nav-card" data-route="about"><span class="sss-approved-icon-slot" data-icon="about"></span><span class="sss-nav-copy"><strong>ABOUT ME</strong><span>A 90 second introduction to who I am, my career and how I approach things.</span></span></button><button class="sss-nav-card live" data-route="cv"><span class="sss-approved-icon-slot" data-icon="live-cv"></span><span class="sss-nav-copy"><strong>LIVE CV</strong><span>See as little or as much as you need. Explore my actual work, roles, responsibilities, results, employers and supporting evidence.</span></span></button><button class="sss-nav-card" data-route="skills"><span class="sss-approved-icon-slot" data-icon="skills"></span><span class="sss-nav-copy"><strong>SKILLS</strong><span>Explore the skills I’ve demonstrated across my career — not just those suggested by my job titles.</span></span></button><button class="sss-nav-card" data-route="employment"><span class="sss-approved-icon-slot" data-icon="employment"></span><span class="sss-nav-copy"><strong>PRE-EMPLOYMENT</strong><span>Employment, availability and other practical information answered upfront.</span></span></button><button class="sss-nav-card" data-route="feedback"><span class="sss-approved-icon-slot" data-icon="feedback"></span><span class="sss-nav-copy"><strong>FEEDBACK</strong><span>If something is missing, unclear or could be done better, I’d genuinely appreciate you letting me know.</span></span></button></div></div></div>`;
document.body.insertAdjacentHTML("beforeend",html);document.querySelectorAll('[data-icon]').forEach(s=>s.innerHTML=icons[s.dataset.icon]||'');
const nav=document.getElementById('sssConsolidatedNav'),open=()=>{nav.classList.add('open');nav.setAttribute('aria-hidden','false');window.SSSJourneyTrack?.event('navigation','Menu','Opened')},close=()=>{nav.classList.remove('open');nav.setAttribute('aria-hidden','true')};
document.getElementById('sssLiveFloatingMenu').onclick=open;nav.querySelector('.navClose').onclick=()=>{close();if(document.body.classList.contains('introduction-page'))dispatchEvent(new CustomEvent('sss-start-about'))};
const row=(label,answer,cls='')=>`<div class="sss-emp-row"><span class="sss-emp-label">${label}</span><span class="sss-emp-answer ${cls}">${answer}</span></div>`;
const item=(id,title,body)=>`<section class="sss-emp-item"><button type="button" class="sss-emp-trigger" aria-expanded="false" aria-controls="${id}"><span>${title}</span><span class="sss-emp-chevron">⌄</span></button><div class="sss-emp-panel" id="${id}" hidden>${body}</div></section>`;
function openEmployment(){close();let overlay=document.getElementById('sssEmploymentOverlay');if(!overlay){overlay=document.createElement('div');overlay.id='sssEmploymentOverlay';overlay.setAttribute('aria-hidden','true');overlay.innerHTML=`<aside id="sssEmploymentDrawer" role="dialog" aria-modal="true" aria-labelledby="sssEmploymentTitle"><div class="sss-employment-head"><div><h2 id="sssEmploymentTitle">EMPLOYMENT &amp; AVAILABILITY</h2><p>The routine stuff employers eventually ask.</p></div><button type="button" id="sssEmploymentClose">CLOSE ×</button></div><div class="sss-employment-accordions">${item('sssEmpWork','WORK ELIGIBILITY &amp; AVAILABILITY',row('NZ WORK ELIGIBILITY','Legally entitled to work in New Zealand.')+row('SPONSORSHIP','No sponsorship required.')+row('CURRENT DRIVER LICENCE','Full NZ driver licence.')+row('TRAVEL','Available to travel for work.')+row('START AVAILABILITY','By arrangement.'))}${item('sssEmpConduct','EMPLOYMENT HISTORY &amp; CONDUCT',row('DISMISSED FOR SERIOUS MISCONDUCT OR DISHONESTY','No.')+row('ASKED TO RESIGN FOR SERIOUS MISCONDUCT OR DISHONESTY','No.')+row('EMPLOYMENT HISTORY VERIFICATION','Happy to comply.')+row('REFERENCES','Available when required.'))}${item('sssEmpBackground','CRIMINAL, LEGAL &amp; BACKGROUND',row('CRIMINAL CONVICTIONS','None.')+row('PENDING CRIMINAL OR LEGAL MATTERS','None.')+row('MOJ / POLICE / APPROPRIATE BACKGROUND CHECKS','Happy to comply.'))}${item('sssEmpHealth','HEALTH &amp; FITNESS FOR WORK',row('GENERAL HEALTH','Very good.')+row('FIT FOR WORK','Yes.')+row('CURRENT INJURY','Recovering from an ankle injury following a fall from a ladder. Approximately 80% recovered and continuing to improve.')+row('PRE-EMPLOYMENT MEDICAL / FUNCTIONAL ASSESSMENT','Happy to comply where reasonably required.'))}${item('sssEmpDrug','DRUG &amp; ALCOHOL',row('DRUG &amp; ALCOHOL TESTING',"Certainly. Cool kids don’t do drugs.",'sss-emp-personality')+row('WORKPLACE DRUG &amp; ALCOHOL POLICY','Happy to comply.'))}${item('sssEmpDriving','DRIVER LICENCE &amp; DRIVING HISTORY',row('CURRENT LICENCE','Full NZ driver licence.')+row('PREVIOUS LICENCE LOSS','Approximately 30 years ago, I lost my licence for six months after exceeding the legal blood-alcohol limit. I learned from it and have never repeated the mistake.')+row('DRIVING / LICENCE CHECKS','Happy to comply where required.'))}${item('sssEmpQualifications','QUALIFICATIONS &amp; EXPERIENCE',row('',"School of Hard Knocks — Road Scholar.<br>Got the nicks and scrapes to prove it.",'sss-emp-personality')+row('PRACTICAL EXPERIENCE','30+ years of practical sales, management, operations and leadership experience.')+row('VERIFICATION','Employment history, experience and licences — happy to have them verified.'))}</div></aside>`;document.body.appendChild(overlay);overlay.querySelectorAll('.sss-emp-trigger').forEach(b=>b.onclick=()=>{const p=overlay.querySelector('#'+b.getAttribute('aria-controls')),opening=b.getAttribute('aria-expanded')!=='true';b.setAttribute('aria-expanded',opening);p.hidden=!opening});const shut=()=>{overlay.classList.remove('sss-employment-visible');overlay.setAttribute('aria-hidden','true');document.documentElement.classList.remove('sss-employment-open');document.body.classList.remove('sss-employment-open')};overlay.querySelector('#sssEmploymentClose').onclick=shut;overlay.onmousedown=e=>{if(e.target===overlay)shut()}}overlay.classList.add('sss-employment-visible');overlay.setAttribute('aria-hidden','false');document.documentElement.classList.add('sss-employment-open');document.body.classList.add('sss-employment-open')}

function openLiveCvWarning(){
  close();
  let overlay=document.getElementById('sssLiveCvWarning');
  if(!overlay){
    overlay=document.createElement('div');
    overlay.id='sssLiveCvWarning';
    overlay.setAttribute('aria-hidden','true');
    overlay.innerHTML=`<style>
#sssLiveCvWarning{position:fixed;inset:0;z-index:2147483000;display:none;align-items:center;justify-content:center;padding:22px;background:rgba(8,18,31,.72);overflow:auto;font-family:Arial,Helvetica,sans-serif;color:#172330}
#sssLiveCvWarning.sss-live-warning-visible{display:flex}
#sssLiveCvWarning *{box-sizing:border-box}
#sssLiveCvWarning .sss-live-warning-modal{width:min(980px,100%);max-height:calc(100vh - 44px);overflow:auto;background:#eef2f5;border-radius:15px;box-shadow:0 24px 75px rgba(0,0,0,.34)}
#sssLiveCvWarning .sss-live-warning-head{position:relative;padding:25px 28px 23px;color:#fff;background:linear-gradient(135deg,#263b50,#152536)}
#sssLiveCvWarning .sss-live-warning-kicker{margin:0 0 5px;color:#9ed1ff;font-size:12px;font-weight:900;letter-spacing:.11em}
#sssLiveCvWarning .sss-live-warning-title{margin:0 0 14px;text-align:center;font-size:30px;line-height:1.08;font-weight:800;color:#fff}
#sssLiveCvWarning .sss-live-warning-corporate-label{margin:0 0 7px;font-size:16px;font-weight:900;color:#fff}
#sssLiveCvWarning .sss-live-warning-corporate{margin:0;color:#deebf5;font-size:16px;line-height:1.25}
#sssLiveCvWarning .sss-live-warning-right-turn{padding-left:220px}
#sssLiveCvWarning .sss-live-warning-body{padding:25px 28px 27px}
#sssLiveCvWarning .sss-live-warning-plain-title{text-align:center;font-weight:900;font-size:22px;margin:0;color:#172330}
#sssLiveCvWarning .sss-live-warning-lines{text-align:center;font-size:16px;line-height:1.35;margin:4px 0 0}
#sssLiveCvWarning .sss-live-warning-bottom-actions{display:flex;justify-content:center;margin-top:22px}
#sssLiveCvWarning .sss-live-warning-enter{border:1px solid #0759ae;border-radius:6px;background:#fff;color:#0759ae;padding:10px 15px;font-weight:900;cursor:pointer;text-decoration:none}
#sssLiveCvWarning .sss-live-warning-skills-copy{width:min(860px,100%);margin:18px auto 0;color:#31475b;font-size:16px;line-height:1.45}
#sssLiveCvWarning .sss-live-warning-skills{color:#0759ae;text-decoration:underline;font-weight:900}
#sssLiveCvWarning .sss-wall-trigger{border:0;padding:0;background:none;color:inherit;font:inherit;font-weight:inherit;text-decoration:underline dotted;text-underline-offset:4px;cursor:pointer}
#sssLiveCvWarning .sss-wall-trigger:focus-visible{outline:2px solid #9ed1ff;outline-offset:3px}
#sssLiveCvWarning .sss-wall-detail{position:fixed;inset:0;display:none;align-items:center;justify-content:center;padding:22px;background:rgba(8,18,31,.72)}
#sssLiveCvWarning .sss-wall-detail.open{display:flex}
#sssLiveCvWarning .sss-wall-card{width:min(620px,100%);background:#fff;border:1px solid #cfdae4;border-radius:11px;box-shadow:0 24px 75px rgba(0,0,0,.34);padding:25px 28px;text-align:center;font-size:16px;font-weight:800;line-height:1.28}
#sssLiveCvWarning .sss-wall-card h2{font-size:22px;margin:0 0 18px}
#sssLiveCvWarning .sss-wall-card p{margin:0}
#sssLiveCvWarning .sss-wall-close{margin-top:22px;padding:10px 15px;border:1px solid #0759ae;border-radius:6px;background:#fff;color:#0759ae;font-weight:900;cursor:pointer}
@media(max-width:700px){#sssLiveCvWarning{padding:0;align-items:stretch;background:#eef2f5}#sssLiveCvWarning .sss-live-warning-modal{width:100%;max-height:none;min-height:100vh;border-radius:0}#sssLiveCvWarning .sss-live-warning-head{padding:22px 16px 20px}#sssLiveCvWarning .sss-live-warning-title{font-size:26px}#sssLiveCvWarning .sss-live-warning-right-turn{padding-left:35px}#sssLiveCvWarning .sss-live-warning-body{padding:20px 14px 24px}#sssLiveCvWarning .sss-live-warning-plain-title{font-size:20px}#sssLiveCvWarning .sss-live-warning-enter{width:100%;text-align:center}#sssLiveCvWarning .sss-wall-card{padding:20px 14px}}
</style>
<section class="sss-live-warning-modal" role="dialog" aria-modal="true" aria-labelledby="sssLiveWarningTitle">
<header class="sss-live-warning-head">
<div class="sss-live-warning-kicker">LIVE CV</div>
<h1 class="sss-live-warning-title" id="sssLiveWarningTitle">LIVE CV<br>&amp;<br><button type="button" class="sss-wall-trigger" title="What does over the wall mean?">OVER THE WALL MOMENTS</button></h1>
<p class="sss-live-warning-corporate-label">In corporate speak</p>
<div class="sss-live-warning-corporate">You’ll see a timeline of Shane’s employment,<br>Repeatedly encouraged to step beyond brief<br>Increasing velocity — shortening timelines, creating revenue<br>Finding commercially viable solutions where conventional options<div class="sss-live-warning-right-turn">*weren’t affordable or available<br>*while still managing the day-to-day job.</div></div>
</header><div class="sss-live-warning-body">
<h2 class="sss-live-warning-plain-title">Plain English — the LIVE CV</h2>
<p class="sss-live-warning-lines">Just like a normal CV you’ll see timelines and roles<br>Drill down further you can see hero moments<br>Where doing the job as a title defined wasn’t enough.<br>Opportunities, people &amp; solutions: the “<button type="button" class="sss-wall-trigger" title="What does over the wall mean?">OVER THE WALL</button>” moments<br>See &amp; hear from those who were<br>Employers, staff and customers<br>Where I’ve got the work to show you — I’ll show you that too.</p>
<div class="sss-live-warning-bottom-actions"><a class="sss-live-warning-enter" href="${carry('cv/index.html')}">ENTER LIVE CV →</a></div>
<p class="sss-live-warning-skills-copy">The mundane things a recruiter expects to see<br>Like can Shane sell, manage people, use a CRM? are answered in the <a class="sss-live-warning-skills" href="${carry('skills/index.html')}">Skills section of the menu</a>.</p>
</div></section>
<div class="sss-wall-detail" aria-hidden="true"><section class="sss-wall-card" role="dialog" aria-modal="true" aria-labelledby="sssWallTitle"><h2 id="sssWallTitle">OVER THE WALL</h2><p>There’s a bag of money<br>It’s on the other side of a wall<br>The obstacle is money to buy a ladder<br>I’ll find another way over the wall.<br>Then we can afford as many ladders as we need</p><button type="button" class="sss-wall-close">CLOSE</button></section></div>`;
    document.body.appendChild(overlay);
    const detail=overlay.querySelector('.sss-wall-detail');let returnFocus=null;
    const closeDetail=()=>{detail.classList.remove('open');detail.setAttribute('aria-hidden','true');returnFocus?.focus()};
    overlay.querySelectorAll('.sss-wall-trigger').forEach((button,index)=>button.onclick=()=>{returnFocus=button;detail.classList.add('open');detail.setAttribute('aria-hidden','false');window.SSSJourneyTrack?.event('popup','Over the wall','Explanation opened',index===0?'Heading':'Body');detail.querySelector('.sss-wall-close').focus()});
    detail.querySelector('.sss-wall-close').onclick=closeDetail;
    detail.onmousedown=e=>{if(e.target===detail)closeDetail()};
    overlay.addEventListener('keydown',e=>{if(e.key==='Escape'&&detail.classList.contains('open')){e.stopPropagation();closeDetail()}});
    overlay.querySelector('.sss-live-warning-enter').onclick=()=>window.SSSJourneyTrack?.event('popup','Live CV popup','Enter Live CV');
    overlay.querySelector('.sss-live-warning-skills').onclick=()=>window.SSSJourneyTrack?.event('popup','Live CV popup','Go to Skills');
  }
  overlay.classList.add('sss-live-warning-visible');overlay.setAttribute('aria-hidden','false');
  window.SSSJourneyTrack?.event('popup','Live CV popup','Opened');
  requestAnimationFrame(()=>overlay.querySelector('.sss-live-warning-enter')?.focus({preventScroll:true}));
}

nav.onclick=e=>{if(e.target===nav)return close();const b=e.target.closest('[data-route]');if(!b)return;const r=b.dataset.route;window.SSSJourneyTrack?.event('navigation','Menu','Selected '+r);if(r==='employment')return openEmployment();if(r==='about'){if(document.body.classList.contains('introduction-page')){close();return dispatchEvent(new CustomEvent('sss-start-about'))}location.href=carry('introduction/index.html',{start:'about'})}if(r==='cv')return openLiveCvWarning();if(r==='skills')location.href=carry('skills/index.html');if(r==='feedback'){close();if(typeof window.SSSOpenFeedback==='function')return window.SSSOpenFeedback();location.href=carry('cv/index.html',{open:'feedback'})}};
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(document.getElementById('sssEmploymentOverlay')?.classList.contains('sss-employment-visible'))document.getElementById('sssEmploymentClose').click();else close()}});
window.SSSSiteNav={open,close,carry,openEmployment,openLiveCvWarning};
})();

/* Employment drawer keyboard-focus containment and return. */
(()=>{
  let wasOpen=false;
  let returnTarget=null;
  const visibleOverlay=()=>{const o=document.getElementById('sssEmploymentOverlay');return o&&o.classList.contains('sss-employment-visible')?o:null};
  const focusClose=()=>requestAnimationFrame(()=>visibleOverlay()?.querySelector('#sssEmploymentClose')?.focus({preventScroll:true}));
  const returnFocus=()=>requestAnimationFrame(()=>{
    const target=returnTarget&&document.contains(returnTarget)&&returnTarget.getClientRects().length?returnTarget:document.getElementById('sssLiveFloatingMenu');
    target?.focus({preventScroll:true});returnTarget=null;
  });
  const observe=()=>{
    const openNow=!!visibleOverlay();
    if(openNow&&!wasOpen)focusClose();
    if(!openNow&&wasOpen)returnFocus();
    wasOpen=openNow;
  };
  new MutationObserver(observe).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['class','aria-hidden']});
  document.addEventListener('click',e=>{
    const opener=e.target.closest('[data-route="employment"],#sssEmploymentAvailabilityOpen,#sssCvEntryEmploymentOpen');
    if(opener)returnTarget=opener;
  },true);
  const sharedOpen=window.SSSSiteNav.openEmployment;
  window.SSSSiteNav.openEmployment=function(opener){returnTarget=opener||document.activeElement||document.getElementById('sssLiveFloatingMenu');return sharedOpen()};
  document.addEventListener('keydown',e=>{
    const overlay=visibleOverlay();if(!overlay||e.key!=='Tab')return;
    const controls=[...overlay.querySelectorAll('button:not([disabled]),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')].filter(el=>el.getClientRects().length);
    if(!controls.length)return;
    const first=controls[0],last=controls[controls.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
  },true);
})();
