(function(){
  "use strict";

  /* ============ DATA ============ */

  var RAJ = {
    heroSub: "Lead AI Engineer & Team Manager · DAO EV Tech",
    synopsis: "A Computer Science engineer and published IoT/ML researcher who began freelancing across full-stack, AI/ML, and data engineering for clients including Cohere.ai, joined Indo-Africa InfoTech's founding team as AI Lead, and now builds autonomous AI agents full-time at DAO EV Tech. This is that story, start to finish.",
    primary: { text: "▶ Play Intro", action: "episodes" },
    secondary: { text: "ⓘ More Info", action: "about" },
    order: ["hero","episodes","about","ventures","skills","cases","endcard"]
  };

  var META = ["B.Tech CSE, VIT Vellore (2025)","Researcher","AI Automation Engineer","Full Stack Developer","Analyst"];

  var EPISODES = [
    {n:"01", eyebrow:"THE PILOT", title:"The Full Story", desc:"Who I am, how I got here", target:"about", grad:"linear-gradient(135deg,#2b1420,#120a10)"},
    {n:"02", eyebrow:"ORIGIN STORY", title:"The Final Year", desc:"Academics, freelance & Indo-Africa", target:"ventures", grad:"linear-gradient(135deg,#231a0c,#120d08)"},
    {n:"03", eyebrow:"GENRES", title:"Skill Universe", desc:"Everything I build with", target:"skills", grad:"linear-gradient(135deg,#1a1830,#0c0b16)"},
    {n:"04", eyebrow:"SEASON 2026", title:"The DAO EV Tech Journey", desc:"n8n to DaoOS, and the agents it runs on", target:"cases", grad:"linear-gradient(135deg,#142218,#0a120d)"},
    {n:"05", eyebrow:"FINALE", title:"Season Finale", desc:"Get in touch", target:"endcard", grad:"linear-gradient(135deg,#1c1c22,#0d0d10)"}
  ];

  var CASES = [
    {code:"Agent 01", title:"Retail Order Agent", desc:"A retailer places an order, gets the payment invoice, pays directly, receives the tax invoice, and the order ships straight to the delivery partner. No person touches any step in between. Stock updates automatically as orders move. Once delivered, the order closes itself."},
    {code:"Agent 02", title:"Voice & Multilingual Sales Agent", desc:"When a new lead comes in, the agent reaches out on its own, no human dials first. It calls and carries the sales conversation in English, Hindi, and Marathi."},
    {code:"Agent 03", title:"Marketing Automation Agent", desc:"Runs the referral and campaign engine end to end, from consent capture to payout, with no manual follow-up required."},
    {code:"Agent 04", title:"Paid Ad Execution", desc:"Launches and manages paid campaigns on Meta within set budget limits, no manual campaign management needed."},
    {code:"Agent 05", title:"HR Brain", desc:"Handles recruitment, payroll, and safety escalation on its own, cutting the manpower a traditional HR desk would otherwise need."}
  ];

  var GENRES = [
    {key:"lang", name:"Languages", color:"var(--cat-lang)", skills:[
      {sym:"C+",name:"C++"},{sym:"C",name:"C"},{sym:"Py",name:"Python"},{sym:"Jv",name:"Java"},
      {sym:"Js",name:"JavaScript"},{sym:"Ts",name:"TypeScript"},{sym:"Sq",name:"SQL"},{sym:"Hc",name:"HTML/CSS"}
    ]},
    {key:"ai", name:"AI & Agent Engineering", color:"var(--cat-ai)", skills:[
      {sym:"Cl",name:"Claude Agent SDK"},{sym:"Ll",name:"LLM Orchestration"},{sym:"Aa",name:"Autonomous Agents"},
      {sym:"Vo",name:"Voice AI (STT/TTS)"},{sym:"Ge",name:"Google Gemini"},{sym:"Pe",name:"Prompt Engineering"}
    ]},
    {key:"frame", name:"Frameworks & Libraries", color:"var(--cat-frame)", skills:[
      {sym:"Re",name:"React"},{sym:"No",name:"Node.js"},{sym:"Ex",name:"Express.js"},
      {sym:"Rn",name:"React Native"},{sym:"Sk",name:"Socket.IO"},{sym:"Tw",name:"Tailwind CSS"}
    ]},
    {key:"data", name:"Databases & Cloud", color:"var(--cat-data)", skills:[
      {sym:"Sb",name:"Supabase"},{sym:"Dn",name:"Edge Functions / Deno"},{sym:"Rd",name:"Redis"},{sym:"Pg",name:"pg_cron"},
      {sym:"Vc",name:"Vercel"},{sym:"Aw",name:"AWS"},{sym:"Az",name:"Azure"},{sym:"Gc",name:"Google Cloud"}
    ]},
    {key:"integ", name:"Integration & Messaging", color:"var(--cat-integ)", skills:[
      {sym:"Wa",name:"WhatsApp Cloud API"},{sym:"Ra",name:"REST APIs"},{sym:"Wh",name:"Webhooks"},{sym:"Nt",name:"Notion API"}
    ]},
    {key:"tools", name:"Tools & DevOps", color:"var(--cat-tools)", skills:[
      {sym:"Gt",name:"Git"},{sym:"Gh",name:"GitHub"},{sym:"Cc",name:"Claude Code"},{sym:"Jw",name:"JWT Auth"},
      {sym:"Sn",name:"Sentry"},{sym:"Je",name:"Jest"},{sym:"Ci",name:"CI/CD"}
    ]},
    {key:"lead", name:"Leadership", color:"var(--cat-lead)", skills:[
      {sym:"Tm",name:"Team Management"},{sym:"Xc",name:"Cross-functional Collab"},{sym:"Mt",name:"Technical Mentorship"}
    ]}
  ];

  /* ============ RENDER HELPERS ============ */

  function heroBlockHTML(){
    var p = RAJ;
    var metaHTML = META.map(function(m,i){
      return (i>0?'<span class="dot">·</span>':'') + '<span class="tag">'+m+'</span>';
    }).join(" ");
    return (
      '<section class="block hero-block" id="hero">'+
      '<div class="wrap hero-grid">'+
        '<div>'+
          '<h1 class="display hero-title">THE RAJ <span style="color:var(--accent)">FILES</span></h1>'+
          '<p class="hero-sub">'+p.heroSub+'</p>'+
          '<div class="meta-row">'+metaHTML+'</div>'+
          '<p class="synopsis">'+p.synopsis+'</p>'+
          '<div class="hero-actions">'+
            '<button class="cta-btn" style="padding:13px 22px;font-size:14px" data-action="'+p.primary.action+'">'+p.primary.text+'</button>'+
            '<button class="cta-ghost" data-action="'+p.secondary.action+'">'+p.secondary.text+'</button>'+
          '</div>'+
        '</div>'+
        '<div class="cast-card">'+
          '<div class="cast-photo"><span class="badge">Lead Role</span><img src="assets/raj-photo.jpg" alt="Raj Porwal"></div>'+
        '</div>'+
      '</div></section>'
    );
  }

  function episodesBlockHTML(){
    var cards = EPISODES.map(function(e){
      return (
        '<a class="ep-card" href="#'+e.target+'" data-action="'+e.target+'">'+
          '<div class="ep-thumb" style="background:'+e.grad+'"><span class="epnum">'+e.n+'</span><span class="play">▶</span></div>'+
          '<div class="ep-body"><div class="ep-eyebrow">'+e.eyebrow+'</div><h4>'+e.title+'</h4><p>'+e.desc+'</p></div>'+
        '</a>'
      );
    }).join("");
    return (
      '<section class="block" id="episodes"><div class="wrap">'+
        '<div class="section-head"><h2 class="section-title display">CONTINUE EXPLORING</h2><p class="section-sub">Five episodes. One engineer.</p></div>'+
        '<div class="carousel">'+cards+'</div>'+
      '</div></section>'
    );
  }

  function casesBlockHTML(){
    var cards = CASES.map(function(c){
      return (
        '<div class="case-card"><span class="codename">'+c.code+'</span><h4>'+c.title+'</h4><p>'+c.desc+'</p></div>'
      );
    }).join("");
    return (
      '<section class="block" id="cases"><div class="wrap">'+
        '<div class="section-head"><h2 class="section-title display">EPISODE 04 · THE DAO EV TECH JOURNEY</h2><p class="section-sub">Since January 2026</p></div>'+
        '<p class="synopsis" style="max-width:68ch">DAO EV Tech believes in AI as a core part of how the company runs, not a side project. It started small: workflows built in n8n to support the sales and marketing teams.</p>'+
        '<p class="synopsis" style="max-width:68ch">From there, Michael and I began building something bigger: a full AI-native automation platform called DaoOS. Months of testing, discussion, and going deep into how the business actually worked shaped the specification structure and architecture that still governs every agent on the platform today.</p>'+
        '<p class="synopsis" style="max-width:68ch">What came out of that is a full roster of autonomous agents running the business, start to finish.</p>'+
        '<div class="case-grid">'+cards+'</div>'+
        '<p class="synopsis" style="max-width:68ch; margin-top:22px">These are five of the agents on the platform. 15+ more are deployed or in the pipeline, spanning service, compliance, field operations, dealer development, finance, logistics, and investor relations.</p>'+
        '<p class="synopsis" style="max-width:68ch; font-weight:600; color:var(--text)">Across the platform, that\'s the point: fewer people needed to run the same operations, because the agents do it themselves.</p>'+
      '</div></section>'
    );
  }

  function skillsBlockHTML(){
    var n = 0;
    var cells = GENRES.map(function(g){
      return g.skills.map(function(s){
        n++;
        return (
          '<div class="elem" data-cat="'+g.key+'" style="--cat:'+g.color+'" title="'+s.name+' · '+g.name+'">'+
            '<span class="elem-n mono">'+n+'</span>'+
            '<span class="elem-sym">'+s.sym+'</span>'+
            '<span class="elem-name">'+s.name+'</span>'+
          '</div>'
        );
      }).join("");
    }).join("");
    var legend = GENRES.map(function(g){
      return '<button class="legend-item" data-filter-cat="'+g.key+'" style="--cat-active:'+g.color+'"><span class="legend-dot" style="background:'+g.color+'"></span>'+g.name+'</button>';
    }).join("") + '<button class="legend-item legend-clear" id="skillClearBtn" data-filter-clear hidden>✕ Clear filter</button>';
    return (
      '<section class="block" id="skills"><div class="wrap">'+
        '<div class="section-head"><h2 class="section-title display">EPISODE 03 · SKILL UNIVERSE</h2><p class="section-sub">The elements I build with.</p></div>'+
        '<p class="synopsis" style="max-width:68ch">Built over college, freelance work, and a few years of just building things on my own.</p>'+
        '<div class="legend-row" id="skillLegend">'+legend+'</div>'+
        '<div class="periodic-grid" id="periodicGrid">'+cells+'</div>'+
      '</div></section>'
    );
  }

  var TIMELINE = [
    {date:"2021 – 2025", title:"Vellore Institute of Technology", body:"B.Tech, Computer Science and Engineering."},
    {date:"Research", title:"Research &amp; Publication", body:"Designed and published a zone-based BLE asset-tracking system on ESP32, solving a real reliability gap in indoor positioning, referenced against IEEE literature (CSCI 2022). Patented.", link:{text:"Patented &amp; Published", href:"https://drive.google.com/drive/folders/1RtpPj8eqwE82jS9XDKy74Oz2iH8ICJNL?usp=drive_link"}},
    {date:"Beyond Class", title:"Beyond the Classroom", body:"2x VIT Premier League football champion. Tech Hunt finalist, built an Arduino line-following robot. 8-time national Abacus champion."},
    {date:"Oct 2024", title:"Freelance Begins", body:"Full-stack, AI/ML, and data engineering work for clients including Cohere.ai and UM IT Solutions. The professional chapter starts here."}
  ];

  function aboutBlockHTML(){
    var items = TIMELINE.map(function(t){
      var link = t.link ? '<a class="vlink" href="'+t.link.href+'" target="_blank" rel="noopener">'+t.link.text+' ↗</a>' : '';
      return (
        '<div class="timeline-item">'+
          '<div class="timeline-date mono">'+t.date+'</div>'+
          '<div class="timeline-body"><h4>'+t.title+'</h4><p>'+t.body+'</p>'+link+'</div>'+
        '</div>'
      );
    }).join("");
    return (
      '<section class="block" id="about"><div class="wrap">'+
        '<div class="section-head"><h2 class="section-title display">EPISODE 01 · THE PILOT</h2><button class="section-sub link-btn" data-action="openAbout">About Me</button></div>'+
        '<div class="timeline">'+items+'</div>'+
      '</div></section>'
    );
  }

  function venturesBlockHTML(){
    return (
      '<section class="block" id="ventures"><div class="wrap">'+
        '<div class="section-head"><h2 class="section-title display">EPISODE 02 · THE FINAL YEAR</h2><p class="section-sub">How it started</p></div>'+
        '<p class="synopsis" style="max-width:68ch">My final year at VIT was two things happening at once. By day, I was finishing the research that became my BLE asset-tracking patent. By night, I was freelancing, picking up real client work in full-stack and AI/ML, the kind of work that doesn\'t show up on a syllabus.</p>'+
        '<p class="synopsis" style="max-width:68ch">One of those client relationships turned into something bigger. The conversations kept going past the project scope, and by the time I graduated, it had become Indo-Africa InfoTech, a venture I joined as AI Lead, part of its founding team.</p>'+
        '<div class="venture-card"><span class="vtag">AI Lead</span><div class="vbody">'+
          '<h4>Indo-Africa InfoTech</h4>'+
          '<p>Indo-Africa InfoTech is a full-stack engineering company built on "one engineering core, any domain," operating out of Pune and Accra in partnership with Cytos Innovations. They build systems from chip to cloud, spanning EV intelligence, healthcare IT, fintech, and AI automation, alongside industry-certification training programs.</p>'+
          '<a class="vlink" href="https://indoafricainfotech.in/" target="_blank" rel="noopener">indoafricainfotech.in ↗</a>'+
        '</div></div>'+
      '</div></section>'
    );
  }

  function endcardBlockHTML(){
    return (
      '<section class="block endcard" id="endcard"><div class="wrap">'+
        '<p class="eyebrow center">THE NEXT EPISODE</p>'+
        '<h2 class="display">TO BE CONTINUED…</h2>'+
        '<p class="role">Raj Porwal · Lead AI Engineer &amp; Team Manager</p>'+
        '<div class="endcard-actions">'+
          '<a class="cta-btn" style="padding:13px 24px;font-size:14px" href="https://www.linkedin.com/in/raj-porwal57" target="_blank" rel="noopener">LinkedIn ↗</a>'+
          '<a class="cta-ghost" href="https://github.com/THERAJ57" target="_blank" rel="noopener">GitHub ↗</a>'+
          '<a class="cta-ghost" href="assets/raj-porwal-resume.pdf" target="_blank" rel="noopener">Resume ↓</a>'+
        '</div>'+
        '<div class="contact-row"><span id="emailtext">rajporwal449@gmail.com</span><button class="copy-btn" id="copyEmailBtn">Copy</button></div>'+
        '<div class="footer-links"><a href="#hero" data-action="hero">Watch Again</a><button data-action="replay">Replay Opening</button></div>'+
        '<p class="fine">© 2026 Raj Porwal</p>'+
      '</div></section>'
    );
  }

  var BLOCKS = {
    hero: heroBlockHTML, episodes: episodesBlockHTML, cases: casesBlockHTML,
    skills: skillsBlockHTML, about: aboutBlockHTML, ventures: venturesBlockHTML, endcard: endcardBlockHTML
  };

  /* ============ STATE ============ */

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function renderMain(){
    var root = document.getElementById("content-root");
    root.innerHTML = RAJ.order.map(function(key){ return BLOCKS[key](); }).join("");
    initCarouselDrag();
  }

  function initCarouselDrag(){
    document.querySelectorAll(".carousel").forEach(function(car){
      if(car.dataset.dragInit) return;
      car.dataset.dragInit = "1";
      var isDown = false, startX = 0, startScroll = 0, moved = false;
      car.addEventListener("mousedown", function(e){
        isDown = true; moved = false;
        startX = e.pageX; startScroll = car.scrollLeft;
      });
      window.addEventListener("mouseup", function(){
        if(isDown) car.classList.remove("dragging");
        isDown = false;
      });
      window.addEventListener("mousemove", function(e){
        if(!isDown) return;
        var dx = e.pageX - startX;
        if(Math.abs(dx) > 4){
          if(!moved) car.classList.add("dragging");
          moved = true;
        }
        if(moved) car.scrollLeft = startScroll - dx;
      });
      car.addEventListener("click", function(e){
        if(moved){ e.preventDefault(); e.stopPropagation(); moved = false; }
      }, true);
    });
  }

  function handleAction(action){
    if(!action) return;
    if(action === "openAbout"){
      document.getElementById("aboutModal").hidden = false;
      return;
    }
    if(action === "resume"){
      window.open("assets/raj-porwal-resume.pdf", "_blank", "noopener");
      return;
    }
    if(action === "github"){
      window.open("https://github.com/THERAJ57", "_blank", "noopener");
      return;
    }
    if(action === "replay"){
      goToScreen("title");
      return;
    }
    var el = document.getElementById(action);
    if(el) el.scrollIntoView({behavior: "auto", block:"start"});
  }

  /* ============ SCREEN TRANSITIONS ============ */

  function goToScreen(name){
    document.querySelectorAll(".screen").forEach(function(s){ s.classList.remove("active"); });
    document.getElementById("screen-"+name).classList.add("active");
    window.scrollTo(0,0);
  }

  function playNeuralConvergence(onDone){
    var W = window.innerWidth, H = window.innerHeight;
    var NS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(NS, "svg");
    svg.setAttribute("class", "neural-overlay");
    svg.setAttribute("width", W);
    svg.setAttribute("height", H);
    svg.setAttribute("viewBox", "0 0 " + W + " " + H);

    var counts = [4, 6, 8, 6, 4];
    var marginX = W * 0.1, usableW = W - marginX*2;
    var marginY = H * 0.16, usableH = H - marginY*2;

    var layers = counts.map(function(n, li){
      var x = marginX + usableW * (li/(counts.length-1));
      var pts = [];
      for(var i=0;i<n;i++){
        var y = n > 1 ? (marginY + usableH * (i/(n-1))) : H/2;
        pts.push({x:x, y:y});
      }
      return pts;
    });

    var lineLayer = document.createElementNS(NS, "g");
    var nodeLayer = document.createElementNS(NS, "g");
    svg.appendChild(lineLayer);
    svg.appendChild(nodeLayer);

    var flowGroups = [];
    for(var li=0; li<layers.length-1; li++){
      var group = [];
      layers[li].forEach(function(a){
        layers[li+1].forEach(function(b){
          var baseLine = document.createElementNS(NS, "line");
          baseLine.setAttribute("class", "n-line-base");
          baseLine.setAttribute("x1", a.x); baseLine.setAttribute("y1", a.y);
          baseLine.setAttribute("x2", b.x); baseLine.setAttribute("y2", b.y);
          baseLine.style.opacity = 0;
          lineLayer.appendChild(baseLine);

          var len = Math.hypot(b.x-a.x, b.y-a.y);
          var dash = 16 + Math.random()*10;
          var flowLine = document.createElementNS(NS, "line");
          flowLine.setAttribute("class", "n-line-flow");
          flowLine.setAttribute("x1", a.x); flowLine.setAttribute("y1", a.y);
          flowLine.setAttribute("x2", b.x); flowLine.setAttribute("y2", b.y);
          flowLine.style.strokeDasharray = dash + "px 2000px";
          flowLine.style.strokeDashoffset = "0px";
          flowLine.style.opacity = 0;
          lineLayer.appendChild(flowLine);

          group.push({base:baseLine, flow:flowLine, len:len, dash:dash});
        });
      });
      flowGroups.push(group);
    }

    var nodeEls = [];
    layers.forEach(function(pts, li){
      var cls = (li % 2 === 0) ? "n-node" : "n-node alt";
      pts.forEach(function(p){
        var c = document.createElementNS(NS, "circle");
        c.setAttribute("class", cls);
        c.setAttribute("cx", p.x); c.setAttribute("cy", p.y); c.setAttribute("r", 7);
        c.style.opacity = 0;
        nodeLayer.appendChild(c);
        nodeEls.push(c);
      });
    });

    var core = document.createElementNS(NS, "circle");
    core.setAttribute("class", "n-core");
    core.setAttribute("cx", W/2); core.setAttribute("cy", H/2); core.setAttribute("r", 0);
    svg.appendChild(core);

    document.body.appendChild(svg);

    var fadeInDur = 120;
    var flowDur = 420;
    var layerStagger = 300;

    nodeEls.forEach(function(c){
      c.animate([{opacity:0},{opacity:0.85}], {duration:fadeInDur, fill:"forwards", easing:"ease-out"});
    });
    flowGroups.forEach(function(group, li){
      var stagger = li * layerStagger;
      group.forEach(function(seg){
        seg.base.animate([{opacity:0},{opacity:0.1}], {duration:fadeInDur, fill:"forwards", easing:"ease-out"});
        seg.flow.animate(
          [{opacity:0, strokeDashoffset: seg.dash + "px"},{opacity:1, offset:0.08},{opacity:1, offset:0.85},{opacity:0, strokeDashoffset: (-(seg.len + seg.dash)) + "px"}],
          {duration:flowDur, delay:fadeInDur + stagger, fill:"forwards", easing:"linear"}
        );
      });
    });

    var flowEnd = fadeInDur + (flowGroups.length-1)*layerStagger + flowDur;
    var burstStart = flowEnd + 80;

    setTimeout(function(){
      core.animate(
        [{r:0, opacity:1},{r: Math.max(W,H)*0.7, opacity:1, offset:0.6},{r: Math.max(W,H), opacity:0}],
        {duration:300, easing:"cubic-bezier(.2,.7,.3,1)", fill:"forwards"}
      );
      setTimeout(function(){
        svg.remove();
        onDone();
      }, 250);
    }, burstStart);
  }

  function initTitleScreen(){
    var playBtn = document.getElementById("playBtn");
    var content = document.querySelector("#screen-title .title-text");
    var screen = document.getElementById("screen-title");
    playBtn.addEventListener("click", function(){
      if(reduceMotion){
        goToScreen("main");
        return;
      }
      content.classList.add("igniting");
      playNeuralConvergence(function(){
        goToScreen("main");
        content.classList.remove("igniting");
      });
    });
  }

  function initAboutModal(){
    var modal = document.getElementById("aboutModal");
    var closeModal = function(){ modal.hidden = true; };
    document.getElementById("aboutModalClose").addEventListener("click", closeModal);
    modal.addEventListener("click", function(e){ if(e.target === modal) closeModal(); });
    document.addEventListener("keydown", function(e){ if(e.key === "Escape" && !modal.hidden) closeModal(); });
  }

  function initMainScreen(){
    initAboutModal();
    document.querySelectorAll('.navlinks [data-nav]').forEach(function(a){
      a.addEventListener("click", function(e){ e.preventDefault(); handleAction(a.getAttribute("data-nav")); });
    });
    document.getElementById("content-root").addEventListener("click", function(e){
      var clearBtn = e.target.closest("[data-filter-clear]");
      var filterBtn = e.target.closest("[data-filter-cat]");
      if(clearBtn || filterBtn){
        var clearAllBtn = document.getElementById("skillClearBtn");
        var isActive = filterBtn && filterBtn.classList.contains("active");
        document.querySelectorAll("#skillLegend .legend-item").forEach(function(b){ b.classList.remove("active"); });
        document.querySelectorAll("#periodicGrid .elem").forEach(function(el){ el.classList.remove("dim"); });
        if(filterBtn && !isActive){
          var cat = filterBtn.getAttribute("data-filter-cat");
          filterBtn.classList.add("active");
          document.querySelectorAll("#periodicGrid .elem").forEach(function(el){
            if(el.getAttribute("data-cat") !== cat) el.classList.add("dim");
          });
          if(clearAllBtn) clearAllBtn.hidden = false;
        } else if(clearAllBtn){
          clearAllBtn.hidden = true;
        }
        return;
      }
      var t = e.target.closest("[data-action]");
      if(!t) return;
      e.preventDefault();
      handleAction(t.getAttribute("data-action"));
      if(t.id === "copyEmailBtn") return;
    });
    document.getElementById("content-root").addEventListener("click", function(e){
      if(e.target && e.target.id === "copyEmailBtn"){
        var text = document.getElementById("emailtext").textContent;
        var btn = e.target;
        function done(){ btn.textContent = "Copied"; setTimeout(function(){btn.textContent="Copy";},1500); }
        try{
          navigator.clipboard.writeText(text).then(done, fallback);
        }catch(err){ fallback(); }
        function fallback(){
          var r = document.createRange(); r.selectNode(document.getElementById("emailtext"));
          window.getSelection().removeAllRanges(); window.getSelection().addRange(r);
          done();
        }
      }
    });
  }

  initTitleScreen();
  initMainScreen();
  renderMain();
})();
