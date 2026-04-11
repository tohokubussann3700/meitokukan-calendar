
// ============================================================
// Supabase 設定
const SUPABASE_URL = 'https://gtrbknmyjfncidlnqgrg.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0cmJrbm15amZuY2lkbG5xZ3JnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4MDAyNzIsImV4cCI6MjA5MTM3NjI3Mn0.DpwnqK6PqoZP7cZs1HJjrzdlKnEEVW2ttTTCNlek6yc';
const SB_HEADERS = {'Content-Type':'application/json','apikey':SUPABASE_KEY,'Authorization':'Bearer '+SUPABASE_KEY};
// ============================================================

const LOTS_CONST=['駐車場2','駐車場3','駐車場4','駐車場9']; function getLOTS(){return typeof LOTS_LIST!=='undefined'?LOTS_LIST:LOTS_CONST;}
const CLOSED={'4-11':'D1','4-12':'S1（離任式）','4-18':'D2','4-19':'S2','4-25':'PTA総会','5-9':'D3','5-10':'S3','5-23':'D4','5-24':'S4','6-6':'D5','6-7':'S5','6-20':'D6','6-21':'S6','7-4':'D7','7-5':'S7','7-17':'D8','7-19':'S8','8-10':'学校閉庁日','8-12':'学校閉庁日','8-13':'学校閉庁日','8-14':'学校閉庁日','9-1':'前期T','9-2':'前期T','9-22':'D9','9-23':'S9','10-3':'D10','10-4':'S10','10-17':'D11','10-18':'S11','10-23':'明徳祭','10-24':'明徳祭（一般）','10-26':'振替休業','10-31':'D12','11-1':'S12','11-14':'D13','11-15':'S13','11-28':'D14','11-29':'S14','12-5':'D15','12-13':'S15','12-28':'仕事納め','12-29':'常駐警備なし','12-30':'常駐警備なし','12-31':'常駐警備なし','1-1':'元日','1-2':'常駐警備なし','1-3':'常駐警備なし','1-9':'後期T（4年・3修3年）','1-10':'S16','1-11':'成人の日','2-11':'建国記念の日','2-23':'天皇誕生日','3-20':'春分の日'};
const HOLIDAYS={'4-29':'昭和の日','5-3':'憲法記念日','5-4':'みどりの日','5-5':'こどもの日','7-20':'海の日','8-11':'山の日','9-21':'敬老の日','9-22':'国民の休日','9-23':'秋分の日','10-12':'スポーツの日','11-3':'文化の日','11-23':'勤労感謝の日','1-1':'元日','1-11':'成人の日','2-11':'建国記念の日','2-23':'天皇誕生日','3-20':'春分の日'};
const BASE_TEIJI={'4-6':'新任式・始業式・年次集会','4-7':'大清掃','4-8':'身体測定（在校生）','4-9':'交通安全教室・生徒会入会式','4-13':'PTA役員会（旧）・新入生基礎学力テスト','4-14':'結核検診','4-15':'生徒会委員選出・内科健診','4-17':'歯科健診','4-21':'尿検査①','4-22':'定例職員会議・4月職員会議','4-23':'心電図検査','4-25':'PTA総会・PTA講演会','4-28':'担任連絡会④','5-7':'登下校指導①（〜13日）','5-13':'進路ガイダンス（3・4年次）','5-14':'PTA役員会（新年度）','5-20':'生徒総会・5月職員会議','5-22':'定例職員会議','5-26':'防災避難訓練','5-27':'英検IBA・耳鼻科健診','6-1':'薬物乱用防止教室','6-6':'成績入力締切','6-15':'定例職員会議','6-17':'成績会議','6-22':'前期中間考査（〜26日）','6-24':'定例職員会議','7-6':'成績入力締切','7-7':'前期期末考査（〜11日）','7-15':'定例職員会議','7-17':'成績会議','7-21':'防犯教室','9-19':'授業再開・8月職員会議','9-24':'卒業認定会議','9-25':'定例職員会議','9-30':'前期終業式・賞状伝達式','10-1':'後期始業式','10-2':'10月入学式','10-7':'秋田県定通生活体験発表会','10-14':'体験入学','10-21':'10月職員会議','10-23':'明徳祭','10-24':'明徳祭（一般公開）','10-26':'振替休業','11-4':'後期生徒会総会','11-10':'芸術鑑賞教室','11-11':'進路ガイダンス','11-13':'通知表発送','11-24':'後期中間考査（〜30日）','11-25':'定例職員会議','12-7':'冬の読書週間（〜18日）','12-16':'12月職員会議','12-17':'成績会議','12-23':'通知表発送','12-28':'仕事納め','1-6':'担任連絡会⑳','1-8':'高教研定通部会','1-13':'集団コミュニケーション活動','1-14':'授業再開','1-19':'1月職員会議','1-27':'定例職員会議','2-4':'後期期末考査（〜10日）','2-17':'2月職員会議','2-22':'卒業認定会議','2-25':'卒業式予行・表彰式','3-3':'卒業式（ミルハス 14:00）','3-18':'後期終業式','3-25':'離任式・3月職員会議'};
const BASE_TSUSHIN={'4-12':'S1 リポート①','4-19':'S2 リポート②','5-10':'S3 リポート③','5-24':'S4 リポート④','6-7':'S5 リポート⑤','6-21':'S6 リポート⑥','7-5':'S7 リポート⑦','7-19':'S8 リポート⑧','9-23':'S9 リポート⑨','10-4':'S10 後期始業式・リポート⑩','10-18':'S11 リポート⑪','11-1':'S12 リポート⑫','11-15':'S13 リポート⑬','11-29':'S14 リポート⑭','12-13':'S15 タイムス1月号','1-10':'S16 3修3年T','1-24':'後期T1（通信）','1-31':'後期T2・卒業生を送る会','2-6':'後期追T','2-10':'後期再T','3-14':'受講登録日'};
const VACATION_RANGES=[{s:[2026,7,22],e:[2026,8,18],l:'夏季休業'},{s:[2026,12,22],e:[2027,1,13],l:'冬季休業'},{s:[2027,3,22],e:[2027,4,4],l:'春季休業'}];
const MONTHS=[[2026,4,'4月'],[2026,5,'5月'],[2026,6,'6月'],[2026,7,'7月'],[2026,8,'8月'],[2026,9,'9月'],[2026,10,'10月'],[2026,11,'11月'],[2026,12,'12月'],[2027,1,'1月'],[2027,2,'2月'],[2027,3,'3月']];
const DOW=['日','月','火','水','木','金','土'];

function isVacation(y,m,d){const t=new Date(y,m-1,d).getTime();for(const r of VACATION_RANGES){if(t>=new Date(r.s[0],r.s[1]-1,r.s[2]).getTime()&&t<=new Date(r.e[0],r.e[1]-1,r.e[2]).getTime())return r.l;}return null;}
function daysInMonth(y,m){return new Date(y,m,0).getDate();}
function firstDow(y,m){return new Date(y,m-1,1).getDay();}
function dateKey(y,m,d){return `${y}-${m}-${d}`;}
function genTimes(){const t=[];for(let h=6;h<=22;h++){t.push(`${String(h).padStart(2,'0')}:00`);t.push(`${String(h).padStart(2,'0')}:30`);}t.push('23:00');return t;}
const TIMES=genTimes();

let DB={bookings:{},events:{}};
let selectedDate=null,activeFilter='all',editingBooking=null;
let showAddEventForm={},showBookingForm={},_evType='teiji',_editingEventId=null;

function setSyncStatus(state,text){
  document.getElementById('syncDot').className='sync-dot'+(state==='ok'?'':state==='loading'?' loading':' error');
  document.getElementById('syncText').textContent=text;
}

async function sbGet(table,filter=''){
  const r=await fetch(`${SUPABASE_URL}/rest/v1/${table}?${filter}`,{headers:SB_HEADERS});
  return r.json();
}
async function sbInsert(table,body){
  const r=await fetch(`${SUPABASE_URL}/rest/v1/${table}`,{method:'POST',headers:{...SB_HEADERS,'Prefer':'return=representation'},body:JSON.stringify(body)});
  return r.json();
}
async function sbUpdate(table,id,body){
  const r=await fetch(`${SUPABASE_URL}/rest/v1/${table}?id=eq.${id}`,{method:'PATCH',headers:{...SB_HEADERS,'Prefer':'return=representation'},body:JSON.stringify(body)});
  return r.json();
}
async function sbDelete(table,id){
  const r=await fetch(`${SUPABASE_URL}/rest/v1/${table}?id=eq.${id}`,{method:'DELETE',headers:SB_HEADERS});
  return r.ok;
}

let ACCOUNTS = ['団体A','団体B','団体C','団体D','団体E'];
let ACCOUNT_DATA = {};
let LOTS_LIST = ['駐車場2','駐車場3','駐車場4','駐車場9'];

async function loadFromSupabase(){
  setSyncStatus('loading','データ読み込み中...');
  try{
    const [bRows,eRows,aRows]=await Promise.all([
      sbGet('bookings'),sbGet('events'),sbGet('accounts','select=id,name&order=created_at.asc')
    ]);
    const bookings={};
    bRows.forEach(r=>{
      if(!bookings[r.date_key])bookings[r.date_key]={};
      if(!bookings[r.date_key][r.lot])bookings[r.date_key][r.lot]=[];
      bookings[r.date_key][r.lot].push({id:r.id,start:r.start_time,end:r.end_time,car:r.car,account:r.account||''});
    });
    const events={};
    eRows.forEach(r=>{
      if(!events[r.date_key])events[r.date_key]=[];
      events[r.date_key].push({id:r.id,type:r.type,text:r.text,account:r.account||'',start_time:r.start_time||'',end_time:r.end_time||'',end_date:r.end_date||'',group_id:r.group_id||''});
    });
    DB={bookings,events};
    if(aRows&&aRows.length>0){
      ACCOUNTS=aRows.map(r=>r.name);
      ACCOUNT_DATA={};
      aRows.forEach(r=>{ACCOUNT_DATA[r.name]={id:r.id,color:r.color||'#1a3a5c',password_hash:r.password_hash||'9af15b336e6a9619928537df30b2e6a2376569fcf9d7e773eccede65606529a0'};});
    }
    setSyncStatus('ok','同期済み');
    localStorage.setItem('meitoku_r8_backup',JSON.stringify(DB));
  }catch(e){
    const bk=localStorage.getItem('meitoku_r8_backup');
    if(bk)try{DB=JSON.parse(bk);}catch(e2){}
    setSyncStatus('error','オフライン（キャッシュ使用中）');
  }
}

function getBaseEvents(m,d){const mk=`${m}-${d}`,ev=[];if(HOLIDAYS[mk])ev.push({type:'hol',text:HOLIDAYS[mk],id:'base-h-'+mk});else if(CLOSED[mk])ev.push({type:'closed',text:CLOSED[mk],id:'base-c-'+mk});if(BASE_TEIJI[mk])ev.push({type:'teiji',text:BASE_TEIJI[mk],id:'base-t-'+mk});if(BASE_TSUSHIN[mk])ev.push({type:'tsushin',text:BASE_TSUSHIN[mk],id:'base-s-'+mk});return ev;}
function getAllEvents(y,m,d){return[...getBaseEvents(m,d),...(DB.events[dateKey(y,m,d)]||[])];}
function getParkStatus(y,m,d){const bk=DB.bookings[dateKey(y,m,d)]||{};const n=getLOTS().filter(l=>(bk[l]||[]).length>0).length;if(n===0)return null;return n<getLOTS().length?'partial':'busy';}
function hasParkBooking(y,m,d){const bk=DB.bookings[dateKey(y,m,d)]||{};return getLOTS().some(l=>(bk[l]||[]).length>0);}

function renderCal(){
  const cp=document.getElementById('calPanel');
  let html='';
  
  MONTHS.forEach(([y,m,mname])=>{
    const days=daysInMonth(y,m),fd=firstDow(y,m);
    let eventDays=0,gridHtml='';
    for(let i=0;i<fd;i++)gridHtml+=`<div class="day-cell empty"></div>`;
    for(let d=1;d<=days;d++){
      const dow=new Date(y,m-1,d).getDay(),mk=`${m}-${d}`,dk=dateKey(y,m,d);
      const isSun=dow===0,isSat=dow===6,hol=HOLIDAYS[mk]||'',closed=CLOSED[mk]||'',vac=isVacation(y,m,d);
      const teiji=BASE_TEIJI[mk]||'',tsushin=BASE_TSUSHIN[mk]||'',extraEvs=DB.events[dk]||[];
      const parkSt=getParkStatus(y,m,d),hasPark=hasParkBooking(y,m,d);
      const isSel=selectedDate&&selectedDate[0]===y&&selectedDate[1]===m&&selectedDate[2]===d;
      let show=true;
      if(activeFilter==='closed'&&!hol&&!closed)show=false;
      if(activeFilter==='teiji'&&!teiji&&!extraEvs.some(e=>e.type==='teiji'))show=false;
      if(activeFilter==='tsushin'&&!tsushin&&!extraEvs.some(e=>e.type==='tsushin'))show=false;
      if(activeFilter==='park'&&!hasPark)show=false;
      if(activeFilter==='sustina'&&!extraEvs.some(e=>e.type==='sustina'))show=false;
      if(!show){gridHtml+=`<div class="day-cell empty" style="opacity:.18"><div class="day-num c-norm" style="font-size:10px">${d}</div></div>`;continue;}
      if(teiji||tsushin||hol||closed||extraEvs.length>0)eventDays++;
      const bgCls=hol||isSun?'bg-hol':isSat?'bg-sat':vac?'bg-vac':closed?'bg-closed':'';
      const numCls=hol?'c-hol':isSun?'c-sun':isSat?'c-sat':'c-norm';
      let tags='';
      if(hol)tags+=`<div class="dt dt-hol">${hol}</div>`;
      else if(vac)tags+=`<div class="dt dt-vac">${vac}</div>`;
      else if(closed)tags+=`<div class="dt dt-closed">${closed}</div>`;
      if(teiji)tags+=`<div class="dt dt-teiji">${teiji}</div>`;
      if(tsushin)tags+=`<div class="dt dt-tsushin">${tsushin}</div>`;
      extraEvs.forEach(ev=>{
        const tStr=ev.start_time?` ${ev.start_time}${ev.end_time?'〜'+ev.end_time:''}`:'' ;
        const multiMark=ev.end_date&&ev.end_date!==dk?'▶':'' ;
        tags+=`<div class="dt dt-${ev.type==='teiji'?'teiji':ev.type==='tsushin'?'tsushin':ev.type==='sustina'?'sustina':'closed'}">${multiMark}${ev.text}${tStr}</div>`;
      });
      gridHtml+=`<div class="day-cell ${bgCls}${isSel?' selected':''}" data-y="${y}" data-m="${m}" data-d="${d}">
        <div class="day-num ${numCls}">${d}</div>
        <div class="day-tags">${tags}</div>
        ${hasPark?`<div class="park-dot ${parkSt}"></div>`:''}
      </div>`;
    }
    const rem=(fd+days)%7;if(rem)for(let i=0;i<7-rem;i++)gridHtml+=`<div class="day-cell empty"></div>`;
    html+=`<div class="month-block" id="m${y}-${m}">
      <div class="month-title">${mname}（令和${y===2026?'8':'9'}年${m}月）<span>行事 ${eventDays}日</span></div>
      <div class="cal-grid">${DOW.map((dn,i)=>`<div class="dow-header ${i===0?'sun':i===6?'sat':''}">${dn}</div>`).join('')}${gridHtml}</div>
    </div>`;
  });
  cp.innerHTML=html;
  cp.querySelectorAll('.day-cell:not(.empty)').forEach(cell=>{
    cell.addEventListener('click',function(){
      selectedDate=[+this.dataset.y,+this.dataset.m,+this.dataset.d];
      renderCal();openPanel(...selectedDate);
    });
  });
}

function buildJumpNav(){
  document.getElementById('jumpNav').innerHTML='<span style="font-size:10px;color:#8899aa;align-self:center">月へ移動：</span>'+
    MONTHS.map(([y,m,mn])=>`<button class="jump-btn" onclick="document.getElementById('m${y}-${m}').scrollIntoView({behavior:'smooth'})">${mn}</button>`).join('');
}

function openPanel(y,m,d){document.getElementById('parkPanel').classList.add('open');renderPanel(y,m,d);}
function closePanel(){document.getElementById('parkPanel').classList.remove('open');selectedDate=null;renderCal();}

function renderPanel(y,m,d){
  const pp=document.getElementById('parkPanel'),dk=dateKey(y,m,d),dow=new Date(y,m-1,d).getDay();
  const events=getAllEvents(y,m,d),bk=DB.bookings[dk]||{},vac=isVacation(y,m,d);
  let h=`<div class="park-header"><button class="park-close-btn" onclick="closePanel()">&#x2715;</button>
    <h2>${y}年${m}月${d}日（${DOW[dow]}）</h2><p>${vac?`【${vac}】`:''}行事・駐車場予約</p></div>`;
  h+=`<div class="section-block"><div class="section-title">行事・閉館情報</div>`;
  if(!events.length)h+=`<div class="empty-msg">行事なし</div>`;
  events.forEach(ev=>{
    const cls=ev.type==='teiji'?'ev-teiji':ev.type==='tsushin'?'ev-tsushin':ev.type==='hol'?'ev-hol':ev.type==='sustina'?'ev-sustina':'ev-closed';
    const lbl=ev.type==='teiji'?'定':ev.type==='tsushin'?'通':ev.type==='hol'?'祝':ev.type==='sustina'?'サ':'休';
    const canEdit=ev.id&&!ev.id.startsWith('base')&&(!ev.account||ev.account===currentAccount);
    const evOwner=ev.account&&!ev.id.startsWith('base')?`<span style="font-size:9px;opacity:.6;margin-left:4px">${ev.account}</span>`:'';
    const timeStr=ev.start_time?`<span style="font-size:9px;background:rgba(0,0,0,.08);padding:1px 5px;border-radius:3px;margin-left:4px">${ev.start_time}${ev.end_time?' 〜 '+ev.end_time:''}</span>`:'';
    h+=`<div class="event-item ${cls}"><span class="ev-label">${lbl}</span>
      <span style="flex:1">${ev.text}${timeStr}${evOwner}</span>
      ${canEdit?`<button class="btn-edit" style="flex-shrink:0" onclick="startEditEvent('${dk}','${ev.id}')">変更</button>
      <button class="ev-del" onclick="deleteEvent('${dk}','${ev.id}')">&#x2715;</button>`:''}</div>`;
  });
  if(showAddEventForm[dk]){
    const editEv=_editingEventId&&DB.events[dk]?DB.events[dk].find(e=>e.id===_editingEventId):null;
    const tOpts=TIMES.map(t=>`<option value="${t}"${editEv&&editEv.start_time===t?' selected':''}>${t}</option>`).join('');
    const eOpts=TIMES.map(t=>`<option value="${t}"${editEv&&editEv.end_time===t?' selected':''}>${t}</option>`).join('');
    h+=`<div class="form-box"><div class="form-row"><label>種別</label><div class="type-btns">
      <button class="type-btn${_evType==='teiji'?' sel-teiji':''}" onclick="setEvType('teiji')">定時制</button>
      <button class="type-btn${_evType==='tsushin'?' sel-tsushin':''}" onclick="setEvType('tsushin')">通信制</button>
      <button class="type-btn${_evType==='closed'?' sel-closed':''}" onclick="setEvType('closed')">閉館・休日</button>
      <button class="type-btn${_evType==='sustina'?' sel-sustina':''}" onclick="setEvType('sustina')">サスティナ秋田</button>
    </div></div>
    <div class="form-row"><label>行事名</label><input type="text" id="evText" placeholder="行事名を入力" value="${editEv?editEv.text:''}"/></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      <div class="form-row"><label>開始時間（任意）</label><select id="evStart"><option value="">未設定</option>${tOpts}</select></div>
      <div class="form-row"><label>終了時間（任意）</label><select id="evEnd"><option value="">未設定</option>${eOpts}</select></div>
    </div>
    <div class="form-actions"><button class="btn-cancel-f" onclick="toggleEvForm('${dk}')">キャンセル</button>
    <button class="btn-save" id="evSaveBtn" onclick="saveEvent('${dk}')">${editEv?'更新':'追加'}</button></div></div>`;
  }else{h+=`<button class="add-btn" onclick="openEventModal('${dk}')">+ 行事を追加</button>`;}
  h+=`</div><div class="section-block"><div class="section-title">駐車場予約（4台）</div>`;
  getLOTS().forEach(lot=>{
    const slots=bk[lot]||[],fk=`${dk}-${lot}`,isFree=slots.length===0;
    const isEditThis=editingBooking&&editingBooking.dk===dk&&editingBooking.lot===lot;
    h+=`<div class="lot-card"><div class="lot-header"><span class="lot-name">${lot}</span>
      <span class="lot-badge ${isFree?'badge-free':'badge-busy'}">${isFree?'空き':'予約中'}</span></div>
      <div class="booking-list">`;
    slots.forEach((s,i)=>{
      const canEdit=!s.account||s.account===currentAccount;
      const ownerTag=s.account?`<span style="font-size:9px;color:#8899aa;margin-left:4px">${s.account}</span>`:'';
      h+=`<div class="booking-item"><div><div class="bcar">${s.car||'—'}${ownerTag}</div><div class="btime">${s.start} 〜 ${s.end}</div></div>
        <div style="display:flex;gap:4px">${canEdit?`<button class="btn-edit" onclick="startEdit('${dk}','${lot}',${i})">変更</button>
        <button class="btn-del" onclick="deleteBooking('${dk}','${lot}','${s.id||i}')">&#x2715;</button>`:''}</div></div>`;
    });
    if(showBookingForm[fk]||isEditThis){
      const eb=isEditThis?editingBooking.data:null;
      const sOpts=TIMES.map(t=>`<option value="${t}"${eb&&eb.start===t?' selected':''}>${t}</option>`).join('');
      const eOpts=TIMES.map(t=>`<option value="${t}"${eb&&eb.end===t?' selected':''}>${t}</option>`).join('');
      h+=`<div class="form-box">
        <div class="form-row"><label>開始時間</label><select id="bs-${fk}">${sOpts}</select></div>
        <div class="form-row"><label>終了時間</label><select id="be-${fk}">${eOpts}</select></div>
        <div class="form-row"><label>車種</label><input type="text" id="bc-${fk}" placeholder="例：プリウス / ハイエース" value="${eb?eb.car:''}"/></div>
        <div class="form-actions"><button class="btn-cancel-f" onclick="cancelBookingForm('${dk}','${lot}')">キャンセル</button>
        <button class="btn-save" onclick="saveBooking('${dk}','${lot}','${isEditThis?editingBooking.sid:'new'}')">${isEditThis?'更新':'予約する'}</button></div></div>`;
    }else{h+=`<button class="add-btn" onclick="toggleBookingForm('${dk}','${lot}')">+ 予約を追加</button>`;}
    h+=`</div></div>`;
  });
  h+=`</div>`;pp.innerHTML=h;
}

function toggleEvForm(dk){showAddEventForm[dk]=!showAddEventForm[dk];_editingEventId=null;if(selectedDate)renderPanel(...selectedDate);}
function startEditEvent(dk,id){
  openEventModal(dk,id,dk);
}
function setEvType(t){_evType=t;if(selectedDate)renderPanel(...selectedDate);}

async function saveEvent(dk){
  const el=document.getElementById('evText'),text=el?el.value.trim():'';
  if(!text)return;
  const startT=document.getElementById('evStart')?document.getElementById('evStart').value:'';
  const endT=document.getElementById('evEnd')?document.getElementById('evEnd').value:'';
  const btn=document.getElementById('evSaveBtn');
  if(btn){btn.disabled=true;btn.textContent='保存中...';}
  setSyncStatus('loading','保存中...');
  try{
    if(_editingEventId){
      await sbUpdate('events',_editingEventId,{type:_evType,text,start_time:startT,end_time:endT});
      if(DB.events[dk]){
        const idx=DB.events[dk].findIndex(e=>e.id===_editingEventId);
        if(idx>=0)DB.events[dk][idx]={...DB.events[dk][idx],type:_evType,text,start_time:startT,end_time:endT};
      }
    }else{
      const rows=await sbInsert('events',{id:'ev-'+Date.now(),date_key:dk,type:_evType,text,account:currentAccount,start_time:startT,end_time:endT});
      const id=rows[0].id;
      if(!DB.events[dk])DB.events[dk]=[];
      DB.events[dk].push({type:_evType,text,id,account:currentAccount,start_time:startT,end_time:endT});
    }
    setSyncStatus('ok','同期済み');
  }catch(e){setSyncStatus('error','保存失敗');}
  showAddEventForm[dk]=false;
  _editingEventId=null;
  if(selectedDate)renderPanel(...selectedDate);renderCal();
}

async function deleteEvent(dk,id){
  setSyncStatus('loading','削除中...');
  try{await sbDelete('events',id);setSyncStatus('ok','同期済み');}catch(e){setSyncStatus('error','削除失敗');}
  if(DB.events[dk])DB.events[dk]=DB.events[dk].filter(e=>e.id!==id);
  if(selectedDate)renderPanel(...selectedDate);renderCal();
}

function toggleBookingForm(dk,lot){showBookingForm[`${dk}-${lot}`]=true;editingBooking=null;if(selectedDate)renderPanel(...selectedDate);}
function cancelBookingForm(dk,lot){showBookingForm[`${dk}-${lot}`]=false;editingBooking=null;if(selectedDate)renderPanel(...selectedDate);}

async function saveBooking(dk,lot,sid){
  const fk=`${dk}-${lot}`,start=document.getElementById(`bs-${fk}`).value,end=document.getElementById(`be-${fk}`).value,car=document.getElementById(`bc-${fk}`).value.trim()||'車種未入力';
  const isEdit=sid!=='new';
  setSyncStatus('loading','保存中...');
  try{
    if(isEdit){
      await sbUpdate('bookings',sid,{start_time:start,end_time:end,car});
      if(!DB.bookings[dk])DB.bookings[dk]={};if(!DB.bookings[dk][lot])DB.bookings[dk][lot]=[];
      const idx=DB.bookings[dk][lot].findIndex(s=>String(s.id)===String(sid));
      if(idx>=0)DB.bookings[dk][lot][idx]={start,end,car,id:sid};
    }else{
      const newId='b-'+Date.now();
      await sbInsert('bookings',{id:newId,date_key:dk,lot,start_time:start,end_time:end,car,account:currentAccount});
      if(!DB.bookings[dk])DB.bookings[dk]={};if(!DB.bookings[dk][lot])DB.bookings[dk][lot]=[];
      DB.bookings[dk][lot].push({start,end,car,id:newId,account:currentAccount});
    }
    setSyncStatus('ok','同期済み');
  }catch(e){setSyncStatus('error','保存失敗');}
  showBookingForm[fk]=false;editingBooking=null;
  if(selectedDate)renderPanel(...selectedDate);renderCal();
}

async function deleteBooking(dk,lot,sid){
  setSyncStatus('loading','削除中...');
  try{await sbDelete('bookings',sid);setSyncStatus('ok','同期済み');}catch(e){setSyncStatus('error','削除失敗');}
  if(DB.bookings[dk]&&DB.bookings[dk][lot])DB.bookings[dk][lot]=DB.bookings[dk][lot].filter(s=>String(s.id)!==String(sid));
  if(selectedDate)renderPanel(...selectedDate);renderCal();
}

function startEdit(dk,lot,idx){
  const s=DB.bookings[dk][lot][idx];
  editingBooking={dk,lot,idx,sid:s.id,data:s};
  showBookingForm[`${dk}-${lot}`]=true;
  if(selectedDate)renderPanel(...selectedDate);
}

// ===== ログアウト =====
function doLogout(){
  sessionStorage.removeItem('meitoku_auth');
  sessionStorage.removeItem('meitoku_account');
  currentAccount='';
  document.getElementById('mainApp').style.display='none';
  document.getElementById('loginOverlay').style.display='flex';
  document.getElementById('loginInput').value='';
  document.getElementById('loginAccount').value='';
  document.getElementById('loginError').textContent='';
}

// ===== 管理パネル =====
function openAdmin(){
  renderAccountList();
  renderLotList();
  document.getElementById('adminOverlay').style.display='flex';
}
function closeAdmin(){document.getElementById('adminOverlay').style.display='none';}

function renderAccountList(){
  const el=document.getElementById('accountList');
  el.innerHTML=ACCOUNTS.map((a,i)=>`
    <div class="account-row">
      <span class="account-row-name">${a}</span>
      <div class="account-row-actions">
        <button class="btn-rename" onclick="renameAccount(${i})">変更</button>
        <button class="btn-remove" onclick="removeAccount(${i})">削除</button>
      </div>
    </div>`).join('');
  // Also update login select
  const sel=document.getElementById('loginAccount');
  const cur=sel.value;
  sel.innerHTML='<option value="">-- 選択してください --</option>'+
    ACCOUNTS.map(a=>`<option value="${a}"${a===cur?' selected':''}>${a}</option>`).join('');
}

function renderLotList(){
  const el=document.getElementById('lotList');
  el.innerHTML=LOTS_LIST.map((l,i)=>`
    <div class="account-row">
      <span class="account-row-name">${l}</span>
      <div class="account-row-actions">
        <button class="btn-rename" onclick="renameLot(${i})">変更</button>
        <button class="btn-remove" onclick="removeLot(${i})">削除</button>
      </div>
    </div>`).join('');
}

async function addAccount(){
  const name=document.getElementById('newAccountName').value.trim();
  if(!name)return;
  await sbInsert('accounts',{id:'acc-'+Date.now(),name});
  ACCOUNTS.push(name);
  document.getElementById('newAccountName').value='';
  renderAccountList();
}

async function renameAccount(i){
  const newName=prompt('新しい団体名を入力してください：',ACCOUNTS[i]);
  if(!newName||newName===ACCOUNTS[i])return;
  const oldName=ACCOUNTS[i];
  // Update in Supabase accounts table
  const rows=await sbGet('accounts',`name=eq.${encodeURIComponent(oldName)}`);
  if(rows&&rows[0])await sbUpdate('accounts',rows[0].id,{name:newName});
  ACCOUNTS[i]=newName;
  renderAccountList();
}

async function removeAccount(i){
  if(!confirm(`「${ACCOUNTS[i]}」を削除しますか？`))return;
  const name=ACCOUNTS[i];
  const rows=await sbGet('accounts',`name=eq.${encodeURIComponent(name)}`);
  if(rows&&rows[0])await sbDelete('accounts',rows[0].id);
  ACCOUNTS.splice(i,1);
  renderAccountList();
}

function addLot(){
  const name=document.getElementById('newLotName').value.trim();
  if(!name)return;
  LOTS_LIST.push(name);
  document.getElementById('newLotName').value='';
  renderLotList();
  if(selectedDate)renderPanel(...selectedDate);
  renderCal();
}

function renameLot(i){
  const newName=prompt('新しい駐車場名を入力してください：',LOTS_LIST[i]);
  if(!newName||newName===LOTS_LIST[i])return;
  LOTS_LIST[i]=newName;
  renderLotList();
  if(selectedDate)renderPanel(...selectedDate);
  renderCal();
}

function removeLot(i){
  if(!confirm(`「${LOTS_LIST[i]}」を削除しますか？`))return;
  LOTS_LIST.splice(i,1);
  renderLotList();
  if(selectedDate)renderPanel(...selectedDate);
  renderCal();
}

function exportData(){
  const blob=new Blob([JSON.stringify(DB,null,2)],{type:'application/json'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download=`meitokukan_data_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
}

// ===== 行事追加モーダル =====
const ALL_DATES = [];
MONTHS.forEach(([y,m])=>{
  const days=daysInMonth(y,m);
  for(let d=1;d<=days;d++) ALL_DATES.push({y,m,d,key:dateKey(y,m,d),label:`${y}年${m}月${d}日`});
});

let _modalEvType='teiji';
let _modalEditId=null;
let _modalEditDk=null;
let _modalStartKey='';
let _modalEndKey='';
let _activeCal=null; // 'start' or 'end'
let _miniCalMonth={start:{y:2026,m:4},end:{y:2026,m:4}};

// --- ドラムロール ---
const DRUM_TIMES=['未設定',...TIMES];
let _drumStart=0, _drumEnd=0; // index into DRUM_TIMES

function buildDrum(wrapperId, selectedIdx, onChange){
  const wrap=document.getElementById(wrapperId);
  wrap.innerHTML=`
    <div class="drum-overlay-top"></div>
    <div class="drum-center-line"></div>
    <div class="drum-overlay-bot"></div>
    <ul class="drum-list" id="${wrapperId}-list"></ul>`;
  const list=wrap.querySelector('.drum-list');
  DRUM_TIMES.forEach((t,i)=>{
    const li=document.createElement('li');
    li.className='drum-item'+(i===selectedIdx?' selected':'');
    li.textContent=t;
    list.appendChild(li);
  });
  scrollDrumTo(wrapperId,selectedIdx,false);
  // touch/mouse scroll
  let startY=0,startIdx=selectedIdx,isDragging=false;
  const onDown=e=>{isDragging=true;startY=e.touches?e.touches[0].clientY:e.clientY;startIdx=selectedIdx;e.preventDefault();};
  const onMove=e=>{
    if(!isDragging)return;
    const y=e.touches?e.touches[0].clientY:e.clientY;
    const delta=Math.round((startY-y)/36);
    let ni=Math.max(0,Math.min(DRUM_TIMES.length-1,startIdx+delta));
    if(ni!==selectedIdx){selectedIdx=ni;onChange(ni);scrollDrumTo(wrapperId,ni,true);updateDrumHighlight(wrapperId,ni);}
    e.preventDefault();
  };
  const onUp=()=>{isDragging=false;};
  wrap.addEventListener('mousedown',onDown);
  wrap.addEventListener('mousemove',onMove);
  wrap.addEventListener('mouseup',onUp);
  wrap.addEventListener('touchstart',onDown,{passive:false});
  wrap.addEventListener('touchmove',onMove,{passive:false});
  wrap.addEventListener('touchend',onUp);
  wrap.addEventListener('wheel',e=>{
    e.preventDefault();
    const delta=e.deltaY>0?1:-1;
    selectedIdx=Math.max(0,Math.min(DRUM_TIMES.length-1,selectedIdx+delta));
    onChange(selectedIdx);scrollDrumTo(wrapperId,selectedIdx,true);updateDrumHighlight(wrapperId,selectedIdx);
  },{passive:false});
}

function scrollDrumTo(wrapperId,idx,smooth){
  const list=document.getElementById(wrapperId+'-list');
  if(!list)return;
  const offset=42-(idx*36);
  list.style.transition=smooth?'transform .15s ease':'none';
  list.style.transform=`translateY(${offset}px)`;
}

function updateDrumHighlight(wrapperId,idx){
  const list=document.getElementById(wrapperId+'-list');
  if(!list)return;
  list.querySelectorAll('.drum-item').forEach((li,i)=>{
    li.className='drum-item'+(i===idx?' selected':'');
  });
}

// --- ミニカレンダー ---
function renderMiniCal(type){
  const {y,m}=_miniCalMonth[type];
  const selectedKey=type==='start'?_modalStartKey:_modalEndKey;
  const days=daysInMonth(y,m),fd=firstDow(y,m);
  const DOW_S=['日','月','火','水','木','金','土'];
  let html=`<div class="mini-cal-header">
    <button class="mini-cal-nav" onclick="miniCalPrev('${type}')">&#9664;</button>
    <span>${y}年${m}月</span>
    <button class="mini-cal-nav" onclick="miniCalNext('${type}')">&#9654;</button>
  </div>
  <div class="mini-cal-grid">
    ${DOW_S.map((d,i)=>`<div class="mini-cal-dow ${i===0?'s':i===6?'sa':''}">${d}</div>`).join('')}`;
  for(let i=0;i<fd;i++)html+=`<div class="mini-cal-day empty"></div>`;
  for(let d=1;d<=days;d++){
    const key=dateKey(y,m,d);
    const dow=new Date(y,m-1,d).getDay();
    const cls=(key===selectedKey)?'selected':(dow===0?'sun':dow===6?'sat':'');
    html+=`<div class="mini-cal-day ${cls}" onclick="selectMiniCalDay('${type}','${key}',${y},${m},${d})">${d}</div>`;
  }
  html+=`</div>`;
  const wrap=document.getElementById(type==='start'?'startCalWrap':'endCalWrap');
  wrap.innerHTML=html;
}

function toggleMiniCal(type){
  const wrap=document.getElementById(type==='start'?'startCalWrap':'endCalWrap');
  const other=document.getElementById(type==='start'?'endCalWrap':'startCalWrap');
  if(wrap.style.display==='none'){
    other.style.display='none';
    _activeCal=type;
    const selKey=type==='start'?_modalStartKey:_modalEndKey;
    if(selKey){const p=ALL_DATES.find(d=>d.key===selKey);if(p)_miniCalMonth[type]={y:p.y,m:p.m};}
    renderMiniCal(type);
    wrap.style.display='block';
  }else{wrap.style.display='none';_activeCal=null;}
}

function miniCalPrev(type){
  let {y,m}=_miniCalMonth[type];
  m--;if(m<1){m=12;y--;}
  _miniCalMonth[type]={y,m};renderMiniCal(type);
}
function miniCalNext(type){
  let {y,m}=_miniCalMonth[type];
  m++;if(m>12){m=1;y++;}
  _miniCalMonth[type]={y,m};renderMiniCal(type);
}

function selectMiniCalDay(type,key,y,m,d){
  if(type==='start'){
    _modalStartKey=key;
    _miniCalMonth.start={y,m};
    document.getElementById('startDateLabel').textContent=`${y}年${m}月${d}日`;
    document.getElementById('startCalWrap').style.display='none';
    // Auto-set end date same as start if not set
    if(!_modalEndKey){
      document.getElementById('endDateLabel').textContent='開始日と同じ';
    }
  }else{
    _modalEndKey=key;
    _miniCalMonth.end={y,m};
    document.getElementById('endDateLabel').textContent=key===_modalStartKey?'開始日と同じ':`${y}年${m}月${d}日`;
    document.getElementById('endCalWrap').style.display='none';
  }
}

function getDatesInRange(startKey,endKey){
  if(!endKey||endKey===startKey||endKey==='')return[startKey];
  const sidx=ALL_DATES.findIndex(d=>d.key===startKey);
  const eidx=ALL_DATES.findIndex(d=>d.key===endKey);
  if(sidx<0||eidx<0||eidx<sidx)return[startKey];
  return ALL_DATES.slice(sidx,eidx+1).map(d=>d.key);
}

function openEventModal(prefillDate=null,editId=null,editDk=null){
  _modalEditId=editId; _modalEditDk=editDk;
  _modalStartKey=prefillDate||ALL_DATES[0].key;
  _modalEndKey='';
  let startT='',endT='',text='',type='teiji';
  if(editId&&editDk){
    const ev=DB.events[editDk]&&DB.events[editDk].find(e=>e.id===editId);
    if(ev){text=ev.text;type=ev.type;startT=ev.start_time||'';endT=ev.end_time||'';_modalStartKey=editDk;_modalEndKey=ev.end_date||'';}
  }
  _modalEvType=type;
  // Set start date label
  const sd=ALL_DATES.find(d=>d.key===_modalStartKey);
  document.getElementById('startDateLabel').textContent=sd?`${sd.y}年${sd.m}月${sd.d}日`:'日付を選択';
  // Set end date label
  if(_modalEndKey&&_modalEndKey!==_modalStartKey){
    const ed=ALL_DATES.find(d=>d.key===_modalEndKey);
    document.getElementById('endDateLabel').textContent=ed?`${ed.y}年${ed.m}月${ed.d}日`:'開始日と同じ';
  }else{document.getElementById('endDateLabel').textContent='開始日と同じ';}
  // Hide cals
  document.getElementById('startCalWrap').style.display='none';
  document.getElementById('endCalWrap').style.display='none';
  if(sd)_miniCalMonth.start={y:sd.y,m:sd.m};
  // Init drums
  _drumStart=startT?DRUM_TIMES.indexOf(startT):0; if(_drumStart<0)_drumStart=0;
  _drumEnd=endT?DRUM_TIMES.indexOf(endT):0; if(_drumEnd<0)_drumEnd=0;
  buildDrum('startDrum',_drumStart,i=>{_drumStart=i;});
  buildDrum('endDrum',_drumEnd,i=>{_drumEnd=i;});
  document.getElementById('modalEvText').value=text;
  document.getElementById('modalTitle').textContent=editId?'行事を編集':'行事を追加';
  document.getElementById('modalSaveBtn').textContent=editId?'更新':'追加';
  document.querySelectorAll('#modalTypeBtns .type-btn').forEach(b=>{
    b.className='type-btn'+(b.dataset.t===type?' sel-'+type:'');
  });
  document.getElementById('eventModal').style.display='flex';
  setTimeout(()=>document.getElementById('modalEvText').focus(),100);
}

function closeEventModal(){
  document.getElementById('eventModal').style.display='none';
  _modalEditId=null;_modalEditDk=null;
  document.getElementById('startCalWrap').style.display='none';
  document.getElementById('endCalWrap').style.display='none';
}

function setModalEvType(t){
  _modalEvType=t;
  document.querySelectorAll('#modalTypeBtns .type-btn').forEach(b=>{
    b.className='type-btn'+(b.dataset.t===t?' sel-'+t:'');
  });
}

async function saveEventFromModal(){
  const text=document.getElementById('modalEvText').value.trim();
  if(!text){document.getElementById('modalEvText').focus();return;}
  if(!_modalStartKey){alert('開始日を選択してください');return;}
  const endKey=(_modalEndKey&&_modalEndKey!==_modalStartKey)?_modalEndKey:'';
  const startT=DRUM_TIMES[_drumStart]==='未設定'?'':DRUM_TIMES[_drumStart];
  const endT=DRUM_TIMES[_drumEnd]==='未設定'?'':DRUM_TIMES[_drumEnd];
  const dates=getDatesInRange(_modalStartKey,endKey||_modalStartKey);
  const btn=document.getElementById('modalSaveBtn');
  btn.disabled=true;btn.textContent='保存中...';
  setSyncStatus('loading','保存中...');
  try{
    if(_modalEditId&&_modalEditDk){
      await sbUpdate('events',_modalEditId,{type:_modalEvType,text,start_time:startT,end_time:endT,end_date:endKey});
      if(DB.events[_modalEditDk]){
        const idx=DB.events[_modalEditDk].findIndex(e=>e.id===_modalEditId);
        if(idx>=0)DB.events[_modalEditDk][idx]={...DB.events[_modalEditDk][idx],type:_modalEvType,text,start_time:startT,end_time:endT,end_date:endKey};
      }
    }else{
      const groupId='grp-'+Date.now();
      for(const dk of dates){
        const newId='ev-'+Date.now()+Math.random().toString(36).slice(2,6);
        await sbInsert('events',{id:newId,date_key:dk,type:_modalEvType,text,account:currentAccount,start_time:startT,end_time:endT,end_date:endKey,group_id:groupId});
        if(!DB.events[dk])DB.events[dk]=[];
        DB.events[dk].push({id:newId,type:_modalEvType,text,account:currentAccount,start_time:startT,end_time:endT,end_date:endKey,group_id:groupId});
      }
    }
    setSyncStatus('ok','同期済み');
    closeEventModal();
    renderCal();
    if(selectedDate)renderPanel(...selectedDate);
  }catch(e){setSyncStatus('error','保存失敗');console.error(e);}
  btn.disabled=false;btn.textContent=_modalEditId?'更新':'追加';
}

// ===== 印刷 =====
const PRINT_MONTHS = [
  {y:2026,m:4,label:'4月'},{y:2026,m:5,label:'5月'},{y:2026,m:6,label:'6月'},
  {y:2026,m:7,label:'7月'},{y:2026,m:8,label:'8月'},{y:2026,m:9,label:'9月'},
  {y:2026,m:10,label:'10月'},{y:2026,m:11,label:'11月'},{y:2026,m:12,label:'12月'},
  {y:2027,m:1,label:'1月'},{y:2027,m:2,label:'2月'},{y:2027,m:3,label:'3月'}
];

let _selectedPrintMonths = new Set();

function openPrintModal(){
  // Default: current month (April 2026 = index 0)
  const now = new Date();
  const cm = now.getFullYear()===2026?now.getMonth()+1:(now.getFullYear()===2027?now.getMonth()+1:4);
  const cy = now.getFullYear()>=2026&&now.getFullYear()<=2027?now.getFullYear():2026;
  _selectedPrintMonths = new Set();
  const found = PRINT_MONTHS.find(pm=>pm.y===cy&&pm.m===cm);
  if(found) _selectedPrintMonths.add(`${found.y}-${found.m}`);
  else _selectedPrintMonths.add('2026-4');
  renderPrintMonthGrid();
  document.getElementById('printModal').style.display='flex';
}

function closePrintModal(){document.getElementById('printModal').style.display='none';}

function renderPrintMonthGrid(){
  const grid = document.getElementById('printMonthGrid');
  grid.innerHTML = PRINT_MONTHS.map(pm=>{
    const key=`${pm.y}-${pm.m}`;
    const isSel=_selectedPrintMonths.has(key);
    return `<div onclick="togglePrintMonth('${key}')" style="padding:6px 4px;border-radius:6px;border:1px solid ${isSel?'#1a3a5c':'#c8d8ea'};font-size:11px;text-align:center;cursor:pointer;background:${isSel?'#1a3a5c':'#fff'};color:${isSel?'#fff':'#4a5a6a'};font-weight:${isSel?'600':'400'};transition:all .1s">${pm.label}</div>`;
  }).join('');
  const n=_selectedPrintMonths.size;
  const pages=Math.ceil(n/2)||1;
  const selMonths=PRINT_MONTHS.filter(pm=>_selectedPrintMonths.has(`${pm.y}-${pm.m}`));
  const labels=selMonths.map(pm=>`${pm.y===2027?'R9':'R8'}${pm.label}`).join('、');
  document.getElementById('printSummary').innerHTML=
    `<strong style="color:#1a2a3a">${n}ヶ月選択中</strong>　${labels||'未選択'}<br>出力ページ数：約 ${pages} ページ（2ヶ月/ページ）`;
}

function togglePrintMonth(key){
  if(_selectedPrintMonths.has(key)) _selectedPrintMonths.delete(key);
  else if(_selectedPrintMonths.size<12) _selectedPrintMonths.add(key);
  renderPrintMonthGrid();
}

// 月のコンテンツ高さを推定する関数
// A4縦281mm、ヘッダー+凡例≒18mm、月ヘッダー≒7mm、曜日行≒6mm
// 1セル行の高さ（2ヶ月時）≒ 8mm、(1ヶ月時)≒ 14mm
function estimateMonthRows(y,m){
  // 最大行数 = 6週
  const fd=new Date(y,m-1,1).getDay();
  const days=new Date(y,m,0).getDate();
  return Math.ceil((fd+days)/7);
}

function estimateMonthHeight(y,m,isSingle){
  const rows=estimateMonthRows(y,m);
  const rowH=isSingle?14:8;
  const base=7+6; // month header + dow row (mm)
  // count max event lines per cell
  const maxEvLines=calcMaxEvLines(y,m);
  const extraPerRow=maxEvLines>1?(maxEvLines-1)*3.5:0;
  return base + rows*(rowH+extraPerRow);
}

function calcMaxEvLines(y,m){
  let max=0;
  const days=new Date(y,m,0).getDate();
  for(let d=1;d<=days;d++){
    const mk=`${m}-${d}`;
    const dk=`${y}-${m}-${d}`;
    let lines=1; // day number
    if(HOLIDAYS[mk]) lines++;
    else if(CLOSED[mk]) lines++;
    if(BASE_TEIJI[mk]) lines++;
    if(BASE_TSUSHIN[mk]) lines++;
    const extras=DB.events[dk]||[];
    lines+=extras.length;
    if(lines>max)max=lines;
  }
  return Math.min(max,4); // cap at 4 to avoid over-estimation
}

const PAGE_H_MM=281;
const HEADER_LEGEND_H=20; // doc header + legend (mm)
const GAP_H=2; // gap between 2 months (mm)

function shouldSplit2Months(m1,m2){
  // Check if both months fit in one page
  const h1=estimateMonthHeight(m1.y,m1.m,false);
  const h2=m2?estimateMonthHeight(m2.y,m2.m,false):0;
  const total=HEADER_LEGEND_H+h1+(m2?GAP_H+h2:0);
  return total>PAGE_H_MM;
}

function buildPrintCalBlock(y,m,isSingle){
  const days=new Date(y,m,0).getDate();
  const fd=new Date(y,m-1,1).getDay();
  const mname=MONTHS.find(mm=>mm[0]===y&&mm[1]===m);
  const label=mname?`${mname[2]}（令和${y===2026?'8':'9'}年${m}月）`:`${y}年${m}月`;
  const DOW_P=['日','月','火','水','木','金','土'];
  let html=`<div class="print-cal-block">
    <div class="print-cal-hdr">${label}</div>
    <div class="print-cal-grid">`;
  DOW_P.forEach((d,i)=>html+=`<div class="print-dow ${i===0?'ps':i===6?'psa':''}">${d}</div>`);
  for(let i=0;i<fd;i++)html+=`<div class="print-day"></div>`;
  for(let d=1;d<=days;d++){
    const dow=new Date(y,m-1,d).getDay();
    const mk=`${m}-${d}`;
    const dk=`${y}-${m}-${d}`;
    const hol=HOLIDAYS[mk]||'';
    const closed=CLOSED[mk]||'';
    const teiji=BASE_TEIJI[mk]||'';
    const tsushin=BASE_TSUSHIN[mk]||'';
    const extras=DB.events[dk]||[];
    const hasPark=hasParkBooking(y,m,d);
    const isSun=dow===0,isSat=dow===6;
    const bg=hol||isSun?'bg-hol':isSat?'bg-sat':closed?'bg-hol':'';
    const nc=hol||isSun?'ps':isSat?'psa':'pn';
    let inner=`<span class="print-dn ${nc}">${d}</span>`;
    if(hol)inner+=`<span class="print-tag pt-cl">${hol}</span>`;
    else if(closed)inner+=`<span class="print-tag pt-cl">${closed}</span>`;
    if(teiji)inner+=`<span class="print-tag pt-te">${teiji}</span>`;
    if(tsushin)inner+=`<span class="print-tag pt-ts">${tsushin}</span>`;
    extras.forEach(ev=>{
      const cls=ev.type==='teiji'?'pt-te':ev.type==='tsushin'?'pt-ts':ev.type==='sustina'?'pt-su':'pt-cl';
      const tStr=ev.start_time?` ${ev.start_time}${ev.end_time?'〜'+ev.end_time:''}`:'' ;
      inner+=`<span class="print-tag ${cls}">${ev.text}${tStr}</span>`;
    });
    if(hasPark)inner+=`<div class="print-pk"></div>`;
    html+=`<div class="print-day ${bg}">${inner}</div>`;
  }
  html+=`</div></div>`;
  return html;
}

function buildPrintLegend(){
  return `<div class="print-legend">
    <div style="display:flex;align-items:center;gap:2px;font-size:8pt;color:#556"><div style="width:9px;height:9px;border-radius:1px;background:#fde8e8;border:0.5px solid #f5a0a0;flex-shrink:0"></div>閉館・休日</div>
    <div style="display:flex;align-items:center;gap:2px;font-size:8pt;color:#556"><div style="width:9px;height:9px;border-radius:1px;background:#fff3cd;border:0.5px solid #e6c800;flex-shrink:0"></div>定時制行事</div>
    <div style="display:flex;align-items:center;gap:2px;font-size:8pt;color:#556"><div style="width:9px;height:9px;border-radius:1px;background:#d4edda;border:0.5px solid #7ecf9c;flex-shrink:0"></div>通信制行事</div>
    <div style="display:flex;align-items:center;gap:2px;font-size:8pt;color:#556"><div style="width:9px;height:9px;border-radius:1px;background:#e8d5f5;border:0.5px solid #b07ecf;flex-shrink:0"></div>サスティナ秋田</div>
    <div style="display:flex;align-items:center;gap:2px;font-size:8pt;color:#556"><div style="width:9px;height:9px;border-radius:50%;background:#1d9e75;flex-shrink:0"></div>駐車場予約あり</div>
  </div>`;
}

function doPrint(){
  if(_selectedPrintMonths.size===0){alert('印刷する月を1つ以上選択してください');return;}
  closePrintModal();

  const selMonths=PRINT_MONTHS.filter(pm=>_selectedPrintMonths.has(`${pm.y}-${pm.m}`));
  const cp=document.getElementById('calPanel');
  cp.querySelectorAll('.print-page').forEach(p=>p.remove());

  // Build pages with smart 1-or-2 month decision
  const pages=[];
  let i=0;
  while(i<selMonths.length){
    const m1=selMonths[i];
    const m2=selMonths[i+1]||null;
    if(!m2){
      // Last single month → always 1 per page (full size)
      pages.push({months:[m1],single:true});
      i++;
    } else {
      // Check if 2 months fit
      const split=shouldSplit2Months(m1,m2);
      if(split){
        // Too much content → 1 per page each
        pages.push({months:[m1],single:true});
        pages.push({months:[m2],single:true});
        i+=2;
      } else {
        pages.push({months:[m1,m2],single:false});
        i+=2;
      }
    }
  }

  const totalPages=pages.length;

  pages.forEach((pg,idx)=>{
    const page=document.createElement('div');
    page.className='print-page';
    const pgNum=idx+1;
    if(pg.single){
      page.innerHTML=`
        <div class="print-doc-header">
          <span style="font-size:10pt;font-weight:700;color:#1a3a5c">秋田明徳館高校　統合カレンダー　令和8年度</span>
          <span style="font-size:8pt;color:#8899aa">${pgNum} / ${totalPages}</span>
        </div>
        ${buildPrintLegend()}
        <div class="print-month-wrap">${buildPrintCalBlock(pg.months[0].y,pg.months[0].m,true)}</div>`;
    } else {
      const m1=pg.months[0],m2=pg.months[1];
      page.innerHTML=`
        <div class="print-doc-header">
          <span style="font-size:10pt;font-weight:700;color:#1a3a5c">秋田明徳館高校　統合カレンダー　令和8年度</span>
          <span style="font-size:8pt;color:#8899aa">${pgNum} / ${totalPages}</span>
        </div>
        ${buildPrintLegend()}
        <div class="print-2row">
          ${buildPrintCalBlock(m1.y,m1.m,false)}
          ${buildPrintCalBlock(m2.y,m2.m,false)}
        </div>`;
    }
    cp.prepend(page);
  });

  // Reverse order so months are in correct order
  const allPages=Array.from(cp.querySelectorAll('.print-page'));
  allPages.reverse().forEach(p=>cp.prepend(p));

  setTimeout(()=>{
    window.print();
    setTimeout(()=>{
      cp.querySelectorAll('.print-page').forEach(p=>p.remove());
    },800);
  },350);
}

// ===== 設定 =====
function openSettings(){
  const acctData=ACCOUNT_DATA[currentAccount]||{};
  document.getElementById('settingName').value=currentAccount;
  const col=acctData.color||'#1a3a5c';
  document.getElementById('settingColor').value=col;
  document.getElementById('colorPreview').style.background=col;
  document.getElementById('settingColorHex').textContent=col;
  document.getElementById('profileMsg').textContent='';
  document.getElementById('pwMsg').textContent='';
  document.getElementById('pwCurrent1').value='';
  document.getElementById('pwCurrent2').value='';
  document.getElementById('pwNew1').value='';
  document.getElementById('pwNew2').value='';
  document.getElementById('settingsOverlay').style.display='flex';
}
function closeSettings(){document.getElementById('settingsOverlay').style.display='none';}

async function saveProfile(){
  const newName=document.getElementById('settingName').value.trim();
  const newColor=document.getElementById('settingColor').value;
  const msg=document.getElementById('profileMsg');
  if(!newName){msg.className='settings-msg err';msg.textContent='団体名を入力してください';return;}
  const acctData=ACCOUNT_DATA[currentAccount];
  if(!acctData){msg.className='settings-msg err';msg.textContent='エラー：アカウントが見つかりません';return;}
  try{
    await sbUpdate('accounts',acctData.id,{name:newName,color:newColor});
    // Update local data
    const oldName=currentAccount;
    ACCOUNT_DATA[newName]={...acctData,color:newColor};
    if(newName!==oldName){
      delete ACCOUNT_DATA[oldName];
      const idx=ACCOUNTS.indexOf(oldName);
      if(idx>=0)ACCOUNTS[idx]=newName;
      currentAccount=newName;
      sessionStorage.setItem('meitoku_account',newName);
    }else{
      ACCOUNT_DATA[currentAccount].color=newColor;
    }
    updateAccountBadge();
    renderAccountList();
    msg.className='settings-msg ok';msg.textContent='保存しました！';
  }catch(e){msg.className='settings-msg err';msg.textContent='保存に失敗しました';}
}

async function changePassword(){
  const c1=document.getElementById('pwCurrent1').value;
  const c2=document.getElementById('pwCurrent2').value;
  const n1=document.getElementById('pwNew1').value;
  const n2=document.getElementById('pwNew2').value;
  const msg=document.getElementById('pwMsg');
  if(!c1||!c2||!n1||!n2){msg.className='settings-msg err';msg.textContent='全ての欄を入力してください';return;}
  if(c1!==c2){msg.className='settings-msg err';msg.textContent='現在のパスワードが一致しません';return;}
  if(n1!==n2){msg.className='settings-msg err';msg.textContent='新しいパスワードが一致しません';return;}
  if(n1.length<4){msg.className='settings-msg err';msg.textContent='パスワードは4文字以上にしてください';return;}
  const acctData=ACCOUNT_DATA[currentAccount];
  const expectedHash=(acctData&&acctData.password_hash)?acctData.password_hash:PASSWORD_HASH;
  const currentHash=await hashPassword(c1);
  if(currentHash!==expectedHash){msg.className='settings-msg err';msg.textContent='現在のパスワードが違います';return;}
  const newHash=await hashPassword(n1);
  try{
    await sbUpdate('accounts',acctData.id,{password_hash:newHash});
    ACCOUNT_DATA[currentAccount].password_hash=newHash;
    document.getElementById('pwCurrent1').value='';
    document.getElementById('pwCurrent2').value='';
    document.getElementById('pwNew1').value='';
    document.getElementById('pwNew2').value='';
    msg.className='settings-msg ok';msg.textContent='パスワードを変更しました！';
  }catch(e){msg.className='settings-msg err';msg.textContent='変更に失敗しました';}
}

document.getElementById('filterBar').querySelectorAll('.pill').forEach(pill=>{
  pill.addEventListener('click',function(){
    activeFilter=this.dataset.f;
    document.querySelectorAll('.pill').forEach(p=>p.classList.remove('on'));
    this.classList.add('on');renderCal();
    // Mobile: scroll to top of cal panel
    if(window.innerWidth<=600)document.getElementById('calPanel').scrollTop=0;
  });
});

const PASSWORD_HASH = '9af15b336e6a9619928537df30b2e6a2376569fcf9d7e773eccede65606529a0';

async function hashPassword(pw){
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(pw));
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}

let currentAccount = '';

async function doLogin(){
  const account = document.getElementById('loginAccount').value;
  const val = document.getElementById('loginInput').value;
  if(!account){document.getElementById('loginError').textContent='アカウントを選択してください';return;}
  const hashed = await hashPassword(val);
  // Check per-account password first, fallback to global PASSWORD_HASH
  const acctData = ACCOUNT_DATA[account];
  const expectedHash = (acctData&&acctData.password_hash) ? acctData.password_hash : PASSWORD_HASH;
  if(hashed === expectedHash){
    currentAccount = account;
    sessionStorage.setItem('meitoku_auth','1');
    sessionStorage.setItem('meitoku_account', account);
    document.getElementById('loginOverlay').style.display='none';
    document.getElementById('mainApp').style.display='flex';
    updateAccountBadge();
    buildJumpNav();
    loadFromSupabase().then(()=>renderCal());
  } else {
    document.getElementById('loginError').textContent='パスワードが違います';
    document.getElementById('loginInput').value='';
    document.getElementById('loginInput').focus();
  }
}

function updateAccountBadge(){
  const acctData=ACCOUNT_DATA[currentAccount];
  const color=(acctData&&acctData.color)||'#1a3a5c';
  document.getElementById('acctColorDot').style.background=color;
  document.getElementById('acctNameLabel').textContent=currentAccount;
}

// アカウント選択肢を動的に更新
function populateLoginSelect(){
  const sel=document.getElementById('loginAccount');
  if(!sel)return;
  const cur=sel.value;
  sel.innerHTML='<option value="">-- 選択してください --</option>'+
    ACCOUNTS.map(a=>`<option value="${a}"${a===cur?' selected':''}>${a}</option>`).join('');
}

// まずデフォルト値（団体A〜E）で即時描画
populateLoginSelect();

// その後Supabaseから取得して上書き（非同期・失敗しても問題なし）
(async()=>{
  try{
    const rows=await sbGet('accounts','select=id,name,color,password_hash&order=created_at.asc');
    if(rows&&Array.isArray(rows)&&rows.length>0){
      ACCOUNTS=rows.map(r=>r.name);
      ACCOUNT_DATA={};
      rows.forEach(r=>{
        ACCOUNT_DATA[r.name]={
          id:r.id,
          color:r.color||'#1a3a5c',
          password_hash:r.password_hash||'9af15b336e6a9619928537df30b2e6a2376569fcf9d7e773eccede65606529a0'
        };
      });
      populateLoginSelect();
    }
  }catch(e){
    // Supabase取得失敗時はデフォルト（団体A〜E）のまま使用
    console.warn('アカウント取得失敗、デフォルト値を使用:', e);
  }
})();

// セッション維持
if(sessionStorage.getItem('meitoku_auth')==='1'){
  currentAccount = sessionStorage.getItem('meitoku_account')||'';
  document.getElementById('loginOverlay').style.display='none';
  document.getElementById('mainApp').style.display='flex';
  buildJumpNav();
  loadFromSupabase().then(()=>{updateAccountBadge();renderCal();});
} else {
  setTimeout(()=>document.getElementById('loginAccount').focus(), 100);
}
