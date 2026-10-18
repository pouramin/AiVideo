(()=>{
const fa={
'Prompts & results':'پرامپت‌ها و نتایج','GitHub ↗':'گیت‌هاب ↗','THE SAME PROMPT. EIGHT AI MODELS.':'یک پرامپت، 8 مدل مختلف','Which AI makes':'کدوم هوش مصنوعی','best video?':'بهترین ویدیو را می‌سازد؟','Same prompt per challenge. Eight different AI video models. Real outputs, transparent comparisons, and every prompt available to copy.':'به 8 مدل مختلف، دقیقاً یه پرامپت یکسان دادم. خروجی‌ها رو کنار هم ببین، تفاوت‌ها رو مقایسه کن و هر پرامپتی رو خواستی کپی کن.','Models':'مدل','Challenges':'چالش','Prompt per test':'پرامپت در هر آزمون','Watch the comparison':'مقایسه کامل مدل‌ها','Watch on YouTube':'ویدیو رو توی یوتیوب ببین','TunnelLab channel · Full video coming soon':'کانال تونل‌لب · به‌زودی ویدیوی کامل منتشر می‌شه','Create your own AI videos':'از ایده تا ویدیو با هوش مصنوعی','Try Higgsfield':'با هیگزفیلد ویدیو بساز','Sign up with TunnelLab\'s referral link':'با لینک اختصاصی تونل‌لب ثبت‌نام کن','Explore the challenges':'بریم سراغ چالش‌ها','Three identical-prompt comparisons across 8 AI models, plus bonus story experiments.':'3 چالش، 8 مدل و یک پرامپت مشترک برای هر چالش؛ به‌علاوه چند آزمایش اضافه.','03 CHALLENGES':'03 چالش','Bonus experiments':'آزمایش‌های تکمیلی','15-second cinematic attempts with individual prompts. Not included in the fair benchmark.':'چند تجربه سینمایی 15 ثانیه‌ای با پرامپت‌های متفاوت که جزو مقایسه اصلی نیستن.','© 2026 TunnelLab · Independent visual comparisons.':'© 2026 تونل‌لب · مقایسه مستقل ویدیویی.','Videos generated on Higgsfield · Some outputs use different available resolution settings.':'ویدیوها رو با هیگزفیلد ساختم؛ بعضی خروجی‌ها با تنظیمات وضوح متفاوت تولید شدن.','The Red Case':'ماجرای کیف قرمز','Inside the Coffee Cup':'سفر از داخل فنجون قهوه','The Coffee Accident':'وقتی لیوان قهوه می‌شکنه','Character consistency & cinematic pursuit':'ثبات شخصیت و تعقیب سینمایی','Continuous camera pullback & spatial coherence':'حرکت پیوسته دوربین به عقب و انسجام فضایی','Liquid physics, impact & gravity':'فیزیک مایعات، برخورد و گرانش','ORIGINAL TEST PROMPT · 10 SECONDS':'پرامپت اصلی آزمون · 10 ثانیه','Copy prompt ↗':'کپی کردن پرامپت ↗','Copied ✓':'کپی شد ✓','Copy not available':'کپی ممکن نیست','Model outputs':'خروجی مدل‌ها','Preview pending':'پیش‌نمایش در انتظار','View result':'مشاهده خروجی','Watch on Higgsfield ↗':'تماشا در هیگزفیلد ↗','Published':'منتشرشده','● Rejected · Refunded':'● ردشده · اعتبار برگشت داده شد','⬡ Protected content detected':'⬡ محتوای محافظت‌شده شناسایی شد','ⓘ Credits refunded':'ⓘ اعتبار برگشت داده شد','Rejected due to copyright restrictions.':'به دلیل محدودیت‌های کپی‌رایت رد شد.','15-second experiment · separate prompt':'آزمایش 15 ثانیه‌ای · پرامپت مجزا','Play here ▶':'پخش در همین صفحه ▶','Close ×':'بستن ×','Close ✕':'بستن ✕','In-page playback not available for this output yet.':'پخش داخل صفحه هنوز برای این خروجی در دسترس نیست.'
};
const hero=document.querySelector('.hero h1');
const originalHero=hero?hero.innerHTML:'';
const persianHero='کدوم هوش مصنوعی<br><em>ویدیوی بهتری می‌سازه؟</em>';
const originals=new WeakMap();
function translate(el,value){if(!el)return;if(!originals.has(el))originals.set(el,value===undefined?el.textContent:value);const en=originals.get(el);el.textContent=lang==='fa'?(fa[en]||en):en}
let lang='en';
const css=document.createElement('style');css.textContent=`
.lang-toggle{border:1px solid #dfe4ec;background:#fff;border-radius:99px;padding:8px 13px;font-size:12px;font-weight:800;color:#27354b;cursor:pointer;white-space:nowrap}
.lang-toggle:hover{border-color:#ef6443;color:#db5536}
html[lang="fa"] body{font-family:Vazirmatn,Tahoma,Arial,sans-serif}
html[lang="fa"] .hero,html[lang="fa"] #prompts,html[lang="fa"] .destination-links,html[lang="fa"] footer{text-align:right}
html[lang="fa"] .hero{text-align:center}
html[lang="fa"] .panel-title,html[lang="fa"] .section-head,html[lang="fa"] .results-header{direction:rtl}
html[lang="fa"] h1{letter-spacing:0;line-height:1.35}html[lang="fa"] .hero h1 em{display:inline-block}
html[lang="fa"] .eyebrow,html[lang="fa"] .destination-eyebrow{letter-spacing:0}
html[lang="fa"] .destination-btn{direction:rtl}
html[lang="fa"] .destination-arrow{margin-left:0;margin-right:auto}
html[lang="fa"] .metrics{direction:rtl}html[lang="fa"] .metric:nth-child(3){order:1}html[lang="fa"] .metric:nth-child(2){order:2}html[lang="fa"] .metric:nth-child(1){order:3}
html[lang="fa"] .panel pre,html[lang="fa"] pre{direction:ltr;text-align:left;unicode-bidi:plaintext;font-family:ui-monospace,Consolas,monospace}
html[lang="fa"] .model,html[lang="fa"] .results .row{direction:ltr;text-align:left}
html[lang="fa"] .prompt-caption{direction:rtl}
html[lang="fa"] .nav-inner{direction:rtl}
@media(max-width:580px){.nav-right{gap:9px!important}.lang-toggle{padding:7px 10px;font-size:11px}}
`;document.head.append(css);
const nav=document.querySelector('.nav-right');if(!nav)return;
const toggle=document.createElement('button');toggle.type='button';toggle.className='lang-toggle';toggle.setAttribute('aria-label','Switch website language');nav.append(toggle);
function walkText(root){if(!root)return;const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;while((n=w.nextNode())){if(!n.parentElement||['SCRIPT','STYLE','PRE','CODE'].includes(n.parentElement.tagName))continue;const raw=n.textContent,trim=raw.trim();if(!trim)continue;if(!originals.has(n))originals.set(n,raw);const original=originals.get(n);const key=original.trim();if(fa[key])n.textContent=lang==='fa'?original.replace(key,fa[key]):original}}
function apply(){
document.documentElement.lang=lang;document.documentElement.dir=lang==='fa'?'rtl':'ltr';document.title=lang==='fa'?'رقابت ویدیوهای هوش مصنوعی — تونل‌لب':'AI Video Showdown — TunnelLab';
toggle.textContent=lang==='fa'?'English / EN':'فارسی / FA';
if(hero)hero.innerHTML=lang==='fa'?persianHero:originalHero;
document.querySelectorAll('nav, .hero, .destination-links, #prompts > .section-head, footer').forEach(walkText);
const cards=document.querySelectorAll('#challengeSections .panel');
const names=[['The Red Case','Character consistency & cinematic pursuit'],['Inside the Coffee Cup','Continuous camera pullback & spatial coherence'],['The Coffee Accident','Liquid physics, impact & gravity']];
cards.forEach((card,i)=>{
 const title=card.querySelector('.panel-title h3');if(title)title.textContent='0'+(i+1)+' — '+(lang==='fa'?fa[names[i][0]]:names[i][0]);
 translate(card.querySelector('.panel-title .tag'),names[i][1]);
 translate(card.querySelector('.prompt-caption strong'),'ORIGINAL TEST PROMPT · 10 SECONDS');
 const copy=card.querySelector('.prompt-caption button');if(copy)copy.textContent=lang==='fa'?'کپی کردن پرامپت ↗':'Copy prompt ↗';
 translate(card.querySelector('.results-header h3'),'Model outputs');
 const count=card.querySelector('.results-header p');if(count){const n=card.querySelectorAll('.result a.view').length;count.textContent=lang==='fa'?'تولیدهای اصلی · '+n+'/8 لینک موجود':'Original generations · '+n+'/8 shared'}
});
document.querySelectorAll('#challengeSections .result').forEach(card=>{
 const view=card.querySelector('a.view');if(view)view.textContent=lang==='fa'?fa['Watch on Higgsfield ↗']:'Watch on Higgsfield ↗';
 const stat=card.querySelector('.row span:last-child');if(stat){if(!originals.has(stat))originals.set(stat,stat.textContent);const e=originals.get(stat);stat.textContent=lang==='fa'?(fa[e]||e):e}
 const credits=card.querySelector('.row span:first-child');if(credits){const amount=credits.textContent.match(/\d+/)?.[0];if(amount)credits.textContent=lang==='fa'?amount+' اعتبار':amount+' credits'}
 walkText(card.querySelector('.blocked-poster'));
});
document.querySelectorAll('#bonus .result').forEach(card=>{walkText(card);card.querySelectorAll('.view').forEach(x=>{x.textContent=lang==='fa'?fa['Watch on Higgsfield ↗']:'Watch on Higgsfield ↗'})});
}
toggle.addEventListener('click',()=>{lang=lang==='en'?'fa':'en';apply()});
apply();
})();