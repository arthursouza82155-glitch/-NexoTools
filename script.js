@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root{
  --bg:#f6f7fb;
  --card:#ffffff;
  --card2:#f0f1f6;
  --text:#11131a;
  --muted:#737785;
  --border:#e5e7ee;
  --primary:#6957ff;
  --primary2:#8d5cff;
  --shadow:0 15px 45px rgba(20,20,50,.08);
}

body.dark{
  --bg:#090a0f;
  --card:#11131a;
  --card2:#191c25;
  --text:#f7f7fa;
  --muted:#969aa8;
  --border:#252936;
  --shadow:0 20px 55px rgba(0,0,0,.35);
}

*{
  box-sizing:border-box;
  margin:0;
  padding:0;
}

body{
  font-family:Inter,Arial,sans-serif;
  background:var(--bg);
  color:var(--text);
  transition:.3s;
}

button,input,textarea,select{
  font:inherit;
}

button{
  cursor:pointer;
}

.app{
  min-height:100vh;
}

/* SIDEBAR */

.sidebar{
  width:245px;
  position:fixed;
  inset:0 auto 0 0;
  background:var(--card);
  border-right:1px solid var(--border);
  padding:28px 16px;
  display:flex;
  flex-direction:column;
  z-index:20;
}

.brand{
  display:flex;
  align-items:center;
  gap:11px;
  padding:0 12px 35px;
  font-size:21px;
  letter-spacing:-1px;
}

.brand span{
  color:var(--primary);
}

.brand-logo{
  width:39px;
  height:39px;
  border-radius:12px;
  display:grid;
  place-items:center;
  color:#fff;
  font-weight:800;
  background:linear-gradient(135deg,var(--primary),var(--primary2));
  box-shadow:0 8px 25px #6957ff55;
}

nav p{
  color:var(--muted);
  font-size:10px;
  font-weight:800;
  letter-spacing:1.5px;
  padding:14px 12px 8px;
}

.nav-item,
.theme-button{
  width:100%;
  border:0;
  background:transparent;
  color:var(--muted);
  padding:12px;
  border-radius:12px;
  display:flex;
  align-items:center;
  gap:12px;
  text-align:left;
  margin:2px 0;
  transition:.2s;
}

.nav-item:hover,
.nav-item.active{
  color:var(--text);
  background:var(--card2);
}

.nav-item.active{
  box-shadow:inset 3px 0 var(--primary);
}

.theme-button{
  margin-top:auto;
}

/* MAIN */

main{
  margin-left:245px;
  padding:25px 42px;
  min-height:100vh;
}

header{
  height:55px;
  display:flex;
  align-items:center;
  gap:15px;
  margin-bottom:30px;
}

.search{
  position:relative;
  max-width:570px;
  width:100%;
}

.search span{
  position:absolute;
  left:17px;
  top:50%;
  transform:translateY(-50%);
  color:var(--muted);
  font-size:22px;
}

.search input{
  width:100%;
  padding:14px 20px 14px 47px;
  border:1px solid var(--border);
  background:var(--card);
  color:var(--text);
  border-radius:15px;
  outline:none;
}

.search input:focus{
  border-color:var(--primary);
  box-shadow:0 0 0 4px #6957ff12;
}

.round-button{
  margin-left:auto;
  width:45px;
  height:45px;
  border:1px solid var(--border);
  background:var(--card);
  color:var(--text);
  border-radius:14px;
}

.mobile-menu{
  display:none;
}

/* HERO */

.hero{
  min-height:360px;
  border-radius:30px;
  position:relative;
  overflow:hidden;
  padding:50px;
  color:white;
  background:
    radial-gradient(circle at 80% 20%,#9c5cff 0,transparent 25%),
    radial-gradient(circle at 65% 100%,#4055ff 0,transparent 30%),
    linear-gradient(125deg,#17152c,#27204c);
  box-shadow:var(--shadow);
}

.hero-content{
  position:relative;
  z-index:2;
  max-width:650px;
}

.badge{
  display:inline-flex;
  padding:7px 11px;
  border-radius:30px;
  background:#ffffff12;
  border:1px solid #ffffff20;
  font-size:10px;
  font-weight:800;
  letter-spacing:1px;
  margin-bottom:22px;
}

.hero h1{
  font-size:clamp(35px,5vw,60px);
  line-height:1.03;
  letter-spacing:-3px;
}

.hero h1 em{
  color:#a99aff;
  font-style:normal;
}

.hero p{
  color:#c7c5d5;
  margin-top:18px;
  line-height:1.6;
  max-width:530px;
}

.hero-buttons{
  display:flex;
  gap:10px;
  margin-top:28px;
}

.primary-button,
.secondary-button{
  padding:13px 18px;
  border-radius:12px;
  border:0;
  font-weight:700;
}

.primary-button{
  background:#fff;
  color:#17152c;
}

.secondary-button{
  color:#fff;
  background:#ffffff12;
  border:1px solid #ffffff20;
}

.hero-orb{
  width:310px;
  height:310px;
  border-radius:50%;
  position:absolute;
  right:-60px;
  bottom:-130px;
  border:55px solid #ffffff0d;
}

.hero-info{
  position:absolute;
  right:45px;
  top:45px;
  display:flex;
  flex-direction:column;
  text-align:right;
}

.hero-info strong{
  font-size:40px;
}

.hero-info span{
  color:#bcb9ca;
  font-size:12px;
}

/* STATS */

.stats{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:14px;
  margin:18px 0 40px;
}

.stat-card{
  background:var(--card);
  border:1px solid var(--border);
  padding:17px;
  border-radius:17px;
  display:flex;
  align-items:center;
  gap:12px;
}

.stat-icon{
  width:42px;
  height:42px;
  border-radius:12px;
  display:grid;
  place-items:center;
  font-weight:800;
}

.purple{background:#6957ff18;color:#6957ff}
.blue{background:#3287ff18;color:#3287ff}
.green{background:#20b98118;color:#20a77a}
.orange{background:#ff9d2418;color:#f09318}

.stat-card strong,
.stat-card span{
  display:block;
}

.stat-card strong{
  font-size:12px;
}

.stat-card span{
  color:var(--muted);
  font-size:10px;
  margin-top:3px;
}

/* TOOLS */

.section-title{
  display:flex;
  align-items:end;
  justify-content:space-between;
  margin-bottom:17px;
}

.section-title span{
  font-size:10px;
  font-weight:800;
  letter-spacing:1.5px;
  color:var(--primary);
}

.section-title h2{
  margin-top:5px;
  font-size:25px;
  letter-spacing:-1px;
}

.section-title small{
  color:var(--muted);
}

.categories{
  display:flex;
  gap:8px;
  overflow-x:auto;
  margin-bottom:20px;
  padding-bottom:5px;
}

.category{
  border:1px solid var(--border);
  background:var(--card);
  color:var(--muted);
  border-radius:30px;
  padding:9px 15px;
  white-space:nowrap;
}

.category:hover,
.category.active{
  color:#fff;
  background:var(--primary);
  border-color:var(--primary);
}

.tools-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:14px;
}

.tool{
  background:var(--card);
  border:1px solid var(--border);
  border-radius:18px;
  padding:20px;
  min-height:190px;
  position:relative;
  cursor:pointer;
  transition:.25s;
}

.tool:hover{
  transform:translateY(-5px);
  border-color:#6957ff55;
  box-shadow:var(--shadow);
}

.tool-icon{
  width:46px;
  height:46px;
  display:grid;
  place-items:center;
  border-radius:13px;
  background:var(--card2);
  font-size:21px;
  margin-bottom:20px;
}

.tool h3{
  font-size:14px;
}

.tool p{
  color:var(--muted);
  font-size:11px;
  line-height:1.5;
  margin-top:7px;
}

.tool-open{
  color:var(--primary);
  font-size:10px;
  font-weight:800;
  margin-top:15px;
}

.favorite{
  position:absolute;
  top:14px;
  right:14px;
  background:none;
  border:0;
  color:var(--muted);
  font-size:19px;
}

.favorite.active{
  color:#ffb21c;
}

/* EMPTY */

.empty{
  display:none;
  text-align:center;
  padding:70px 20px;
  color:var(--muted);
}

.empty div{
  font-size:45px;
}

.empty h3{
  color:var(--text);
  margin:12px 0 5px;
}

/* FOOTER */

footer{
  border-top:1px solid var(--border);
  margin-top:60px;
  padding:25px 0;
  display:flex;
  justify-content:space-between;
  color:var(--muted);
  font-size:11px;
}

footer strong{
  color:var(--text);
}

/* MODAL */

.modal{
  position:fixed;
  inset:0;
  display:none;
  align-items:center;
  justify-content:center;
  background:#00000085;
  backdrop-filter:blur(8px);
  z-index:100;
  padding:20px;
}

.modal.show{
  display:flex;
}

.modal-box{
  background:var(--card);
  width:min(620px,100%);
  max-height:90vh;
  overflow:auto;
  border-radius:24px;
  padding:28px;
  position:relative;
  box-shadow:0 30px 100px #0005;
}

.modal-close{
  position:absolute;
  right:18px;
  top:18px;
  width:36px;
  height:36px;
  border:0;
  border-radius:10px;
  background:var(--card2);
  color:var(--text);
  font-size:22px;
}

.modal h2{
  margin-bottom:22px;
}

.field{
  margin-bottom:13px;
}

.field label{
  display:block;
  color:var(--muted);
  font-size:11px;
  margin-bottom:6px;
}

.field input,
.field textarea,
.field select{
  width:100%;
  padding:12px;
  border:1px solid var(--border);
  background:var(--card2);
  color:var(--text);
  border-radius:11px;
  outline:none;
}

.field textarea{
  min-height:150px;
}

.tool-button{
  border:0;
  border-radius:11px;
  padding:11px 16px;
  background:var(--primary);
  color:#fff;
  font-weight:700;
}

.result{
  margin-top:15px;
  padding:16px;
  border-radius:12px;
  background:var(--card2);
  line-height:1.6;
  word-break:break-word;
}

/* RESPONSIVE */

@media(max-width:1100px){
  .tools-grid{
    grid-template-columns:repeat(3,1fr);
  }

  .stats{
    grid-template-columns:repeat(2,1fr);
  }
}

@media(max-width:800px){

  .sidebar{
    transform:translateX(-100%);
    transition:.25s;
  }

  .sidebar.open{
    transform:translateX(0);
  }

  main{
    margin-left:0;
    padding:18px;
  }

  .mobile-menu{
    display:block;
    border:1px solid var(--border);
    background:var(--card);
    color:var(--text);
    width:43px;
    height:43px;
    border-radius:12px;
  }

  .hero{
    padding:32px 25px;
  }

  .hero-info{
    display:none;
  }

  .tools-grid{
    grid-template-columns:repeat(2,1fr);
  }
}

@media(max-width:520px){

  .stats{
    grid-template-columns:1fr;
  }

  .tools-grid{
    grid-template-columns:1fr;
  }

  .hero h1{
    font-size:37px;
    letter-spacing:-2px;
  }

  .hero-buttons{
    flex-direction:column;
  }

  footer{
    flex-direction:column;
    gap:8px;
  }
}
