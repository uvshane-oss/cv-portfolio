/* Shared site journey tracking. Uses the existing Cloudflare Worker and visit record. */
(()=>{
  'use strict';
  const API='https://shane-cv-tracker-api.uvshane.workers.dev';
  const q=new URLSearchParams(location.search);
  const ref=(q.get('ref')||q.get('track')||'').trim();
  const valid=/^[A-Za-z0-9_-]{2,128}$/.test(ref);
  const key='shane_cv_journey_v1';
  const visitorKey='shane_cv_visitor_v1';
  let ready;
  const page=location.pathname.replace(/\/$/,'')||'/';
  const clean=x=>String(x||'').replace(/\s+/g,' ').trim().slice(0,240);
  const uuid=()=>crypto.randomUUID?.()||'v-'+Date.now()+'-'+Math.random().toString(36).slice(2);
  function cached(){try{const v=JSON.parse(sessionStorage.getItem(key)||'null');return v?.ref===ref&&Date.now()-v.at<12*60*60*1000?v:null}catch(_){return null}}
  async function start(){
    if(!valid)return null;
    if(ready)return ready;
    ready=(async()=>{
      const c=cached();if(c)return c.id;
      let visitor;
      try{visitor=localStorage.getItem(visitorKey)||uuid();localStorage.setItem(visitorKey,visitor)}catch(_){visitor=uuid()}
      const response=await fetch(API+'/track/'+encodeURIComponent(ref),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({visitor_id:visitor,session_id:uuid(),device_type:/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)?'mobile':'desktop',browser:navigator.userAgent}),keepalive:true});
      if(!response.ok)throw Error('Tracker visit failed');
      const data=await response.json();const id=data.visit_id||data.visitId;
      if(id)try{sessionStorage.setItem(key,JSON.stringify({ref,id,at:Date.now()}))}catch(_){}
      return id||null;
    })().catch(()=>null);
    return ready;
  }
  async function event(type,section,item,value){
    const id=await start();if(!id)return;
    try{await fetch(API+'/event',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({visit_id:id,event_type:clean(type),section:clean(section),item:clean(item),value:clean(value)}),keepalive:true})}catch(_){}
  }
  // Timers count only time while the document is visible, and write completed
  // views to the existing /event endpoint without changing the Worker schema.
  const timers=new Map();
  let visible=!document.hidden;
  function begin(name,section,item,action='Viewed'){
    if(!valid||timers.has(name))return;
    timers.set(name,{section,item,action,ms:0,at:performance.now(),running:visible});
  }
  function end(name){
    const t=timers.get(name);if(!t)return;
    if(t.running)t.ms+=Math.max(0,performance.now()-t.at);
    timers.delete(name);
    event('linger',t.section,t.item,t.action+'|'+Math.max(0,Math.round(t.ms/1000)));
  }
  function endAll(){for(const name of [...timers.keys()])end(name)}
  document.addEventListener('visibilitychange',()=>{
    const now=performance.now();visible=!document.hidden;
    timers.forEach(t=>{
      if(t.running)t.ms+=Math.max(0,now-t.at);
      t.running=visible;t.at=now;
    });
  });
  addEventListener('pagehide',endAll);
  window.SSSJourneyTrack={start,event,begin,end,endAll,ref};
  if(valid){
    event('page_view','Site',page);
    const label=page.includes('/introduction/')?'Introduction':page.includes('/skills/')?'Skills':page.includes('/cv/')?'Live CV':'Countdown';
    begin('site-page','Site',label);
  }
})();
