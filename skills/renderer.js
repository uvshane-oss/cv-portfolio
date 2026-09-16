'use strict';
/* Public renderer. The CV calls SSSSkills.open(); it loads only the published JSON path. */
window.SSSSkills=(()=>{
 let payload=null,dialog=null,view={level:0,group:null,skill:null},opener=null,sourcePath='./skills/SSS_SKILLS_PUBLISHED.json';
 const safe=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const ordered=a=>[...(a||[])].sort((x,y)=>(x.order??0)-(y.order??0));
 const years=x=>x?'<p class="coverage"><strong>'+x.datedDirectRoles+'+ roles · '+x.distinctCalendarYears+'+ years covered</strong></p>':'';
 const row=(title,i)=>'<button class="row" data-index="'+i+'"><span>'+safe(title)+'</span><span aria-hidden="true">›</span></button>';
 const grid=links=>links.length?'<div class="role-grid"><div class="grid-head"><span>Date</span><span>Business</span><span>Role</span></div>'+links.map(l=>'<div class="grid-row"><span>'+safe(l.date)+'</span><span>'+safe(l.business)+'</span><span>'+safe(l.job)+'</span></div>').join('')+'</div>':'';
 const evidence=items=>items.map(e=>'<div class="evidence-item">'+(e.roles?.length?e.roles.map(label=>{let m=label.match(/\((\d{4}(?:[–-]\d{4})?)\)/),parts=label.replace(/\s*\(.*\)$/,'').split(' · ');return grid([{date:m?.[1]||'',business:parts[0],job:parts.slice(1).join(' · ')}])}).join(''):'')+'<p><strong>'+safe(e.title)+'</strong><br>'+safe(e.text)+'</p></div>').join('');
 const businesses=skills=>[...new Set(ordered(skills).flatMap(s=>(s.sections?.where||[]).map(l=>l.business)).filter(Boolean))].map(n=>'<span>'+safe(n)+'</span>').join('');
 const accordion=(title,body,opened=false)=>body?'<details class="accordion"'+(opened?' open':'')+'><summary>'+title+'</summary><div class="body">'+body+'</div></details>':'';
 function setup(){if(dialog)return;dialog=document.createElement('div');dialog.className='skills-shade';dialog.hidden=true;dialog.innerHTML='<section class="skills-panel" role="dialog" aria-modal="true" aria-labelledby="skills-title"><header><button class="skills-back" aria-label="Go back">←</button><strong class="skills-crumb">SKILLS</strong><button class="skills-close" aria-label="Close Skills">×</button></header><main tabindex="-1"></main></section>';document.body.append(dialog);dialog.querySelector('.skills-back').onclick=back;dialog.querySelector('.skills-close').onclick=close;dialog.onclick=e=>{if(e.target===dialog)close()}}
 function render(){const main=dialog.querySelector('main'),groups=ordered(payload.groups);dialog.querySelector('.skills-back').hidden=view.level===0;dialog.querySelector('.skills-crumb').textContent=view.level===2?view.group.title.toUpperCase():'SKILLS';
  if(view.level===0)main.innerHTML='<h1 id="skills-title">Skills</h1><p class="intro">Explore my experience by skill area.</p>'+groups.map((g,i)=>row(g.title,i)).join('');
  if(view.level===1){const names=businesses(view.group.skills);main.innerHTML='<h1 id="skills-title">'+safe(view.group.title)+'</h1>'+years(view.group.roleYearSummary)+(names?'<div class="businesses">'+names+'</div>':'')+ordered(view.group.skills).map((s,i)=>row(s.title,i)).join('')+'<button class="back-link" data-back>← Back to all skills</button>'}
  if(view.level===2){const s=view.skill,z=s.sections||{},names=businesses([s]),examples=s.showExamples===false?'':evidence([...(z.evidence||[]),...(z.results||[])]);main.innerHTML='<h1 id="skills-title">'+safe(s.title)+'</h1>'+years(s.roleYearSummary)+(names?'<div class="businesses">'+names+'</div>':'')+accordion("What I’ve done",z.done?'<p>'+safe(z.done)+'</p>':'',true)+accordion("Examples & Evidence",examples)+'<button class="back-link" data-back>← Back to '+safe(view.group.title)+'</button>'}
  main.querySelectorAll('[data-index]').forEach(b=>b.onclick=()=>{const i=Number(b.dataset.index);if(view.level===0){view.group=groups[i];view.level=1}else{view.skill=ordered(view.group.skills)[i];view.level=2}render()});main.querySelector('[data-back]')?.addEventListener('click',back);main.scrollTop=0;main.focus()}
 function back(){if(view.level===2){view.level=1;view.skill=null}else if(view.level===1){view.level=0;view.group=null}render()}
 function close(){if(!dialog)return;dialog.hidden=true;document.body.style.overflow='';opener?.focus()}
 function valid(x){if(!x||!Array.isArray(x.groups)||x.groups.some(g=>!Array.isArray(g.skills)))throw Error('Skills data format is invalid');return x}
 async function open(options={}){setup();opener=document.activeElement;if(options.previewData)payload=valid(options.previewData);else if(!payload){let response=await fetch(options.dataUrl||sourcePath,{cache:'no-cache'});if(!response.ok)throw Error('Skills data unavailable');payload=valid(await response.json())}view={level:0,group:null,skill:null};dialog.hidden=false;document.body.style.overflow='hidden';render()}
 function configure(path){sourcePath=path;payload=null}
 function clearCache(){payload=null}
 document.addEventListener('keydown',e=>{if(!dialog||dialog.hidden)return;if(e.key==='Escape')close();if(e.key==='Tab'){let a=[...dialog.querySelectorAll('button,summary')].filter(x=>!x.hidden);let first=a[0],last=a.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
 return {open,close,configure,clearCache};
})();
