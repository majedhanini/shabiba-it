import "./App.css";

const mainGroups = [
  {
    id: 1,
    type: "WhatsApp",
    title: "جروب كلية تكنولوجيا المعلومات والذكاء الاصطناعي",
    description:
      "الجروب العام لجميع طلبة كلية تكنولوجيا المعلومات والذكاء الاصطناعي.",
    url: "https://chat.whatsapp.com/Ec39gPpcUteFfmlSqdhoGz?s=cl&p=i&mlu=4&ilr=4",
  },
  {
    id: 2,
    type: "Facebook",
    title: "تجمع طلاب كلية تكنولوجيا المعلومات والذكاء الاصطناعي",
    description:
      "تجمع فيسبوك العام لطلبة كلية تكنولوجيا المعلومات والذكاء الاصطناعي.",
    url: "https://www.facebook.com/share/g/19RWZNzHN2/?mibextid=wwXIfr",
  },
  {
    id: 3,
    type: "WhatsApp",
    title: "جروب كلية تكنولوجيا المعلومات والذكاء الاصطناعي - دفعة 26",
    description:
      "جروب واتساب الخاص بطلبة دفعة 26 في كلية تكنولوجيا المعلومات والذكاء الاصطناعي.",
    url: "https://chat.whatsapp.com/FEb9HjKoFDRES2gAloAUb6?s=cl&p=i&mlu=4&ilr=4",
  },
  {
    id: 4,
    type: "Instagram",
    title: "مجتمع طلبة IT & AI على Instagram",
    description:
      "حساب مجتمع طلبة كلية تكنولوجيا المعلومات والذكاء الاصطناعي على إنستغرام.",
    url: "https://www.instagram.com/najah.it.ai.community?stkn=aG5iZDJsa3MycjZo&utm_source=qr",
  },
];

const communities = [
  {
    id: 1,
    code: "MIS",
    title: "تجمع طلاب أنظمة المعلومات الإدارية",
    url: "https://www.facebook.com/share/g/19gpWvWztv/?mibextid=wwXIfr",
  },
  {
    id: 2,
    code: "CAP",
    title: "تجمع طلاب علم حاسوب في سوق العمل",
    url: "https://www.facebook.com/share/g/18BXx6bhcJ/?mibextid=wwXIfr",
  },
  {
    id: 3,
    code: "CS",
    title: "تجمع طلاب علم الحاسوب",
    url: "https://www.facebook.com/share/g/19LbbygCdB/?mibextid=wwXIfr",
  },
  {
    id: 4,
    code: "CYBER",
    title: "تجمع طلاب الأمن السيبراني",
    url: "https://www.facebook.com/share/g/1CaaSGTFVJ/?mibextid=wwXIfr",
  },
];

const batch26Groups = [
  {
    id: 1,
    code: "CAP",
    title: "علم حاسوب في سوق العمل",
    english: "CAP",
    url: "https://chat.whatsapp.com/DrZpOeh3bp63Ht3mZqnqRe?s=cl&p=i&mlu=4",
  },
  {
    id: 2,
    code: "CS",
    title: "علم الحاسوب",
    english: "Computer Science",
    url: "https://chat.whatsapp.com/LCAZPpN4frm5djkGPTcUd2?s=cl&p=i&mlu=4",
  },
  {
    id: 3,
    code: "MIS",
    title: "أنظمة المعلومات الإدارية",
    english: "Management Information Systems",
    url: "https://chat.whatsapp.com/EKOXcimryvSHD1OcLm4zpp?s=cl&p=i&mlu=4",
  },
  {
    id: 4,
    code: "AI",
    title: "علم البيانات والذكاء الاصطناعي",
    english: "Data Science & AI",
    url: "https://chat.whatsapp.com/Er7rF9fvW4E5FLZQ3smW5F?s=cl&p=i&mlu=4",
  },
  {
    id: 5,
    code: "CYBER",
    title: "الأمن السيبراني",
    english: "Cyber Security",
    url: "https://chat.whatsapp.com/Kk7kB4YCz5EKx7nwEQN8c7?s=cl&p=i&mlu=4",
  },
];

function MainGroupCard({ group }) {
  return (
    <a
      href={group.url}
      target="_blank"
      rel="noreferrer"
      className="main-group-card"
    >
      <div className="card-head">
        <span className="platform-tag">{group.type}</span>
        <span className="card-arrow">↗</span>
      </div>

      <div className="main-card-content">
        <h3>{group.title}</h3>
        <p>{group.description}</p>
      </div>

      <div className="card-action">
        <span>الدخول الآن</span>
        <strong>فتح الرابط ←</strong>
      </div>
    </a>
  );
}

function CommunityCard({ item }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="community-card"
    >
      <div className="community-code">{item.code}</div>

      <div className="community-info">
        <span>Facebook Community</span>
        <h3>{item.title}</h3>
      </div>

      <div className="small-arrow">↗</div>
    </a>
  );
}

function BatchCard({ item }) {
  return (
    <a href={item.url} target="_blank" rel="noreferrer" className="batch-card">
      <div className="batch-top">
        <span className="batch-number">26</span>
        <span className="batch-code">{item.code}</span>
      </div>

      <div className="batch-content">
        <h3>{item.title}</h3>
        <p>{item.english}</p>
      </div>

      <div className="batch-footer">
        <span>WhatsApp</span>
        <strong>دخول الجروب ↗</strong>
      </div>
    </a>
  );
}

function App() {
  return (
    <div className="app" dir="rtl" id="top">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand">
            <img
              src="/shabiba-logo.png"
              alt="حركة الشبيبة الطلابية"
              className="header-logo"
            />

            <div className="brand-text">
              <span>حركة الشبيبة الطلابية</span>
              <strong>دليل طلبة IT & AI</strong>
            </div>
          </a>

          <nav className="nav">
            <a href="#main-groups">
              <span>01</span>
              الروابط الرئيسية
            </a>

            <a href="#communities">
              <span>02</span>
              تجمعات الطلبة
            </a>

            <a href="#batch26">
              <span>03</span>
              تخصصات 26
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="container hero-content">
            <div className="hero-badge">AN-NAJAH NATIONAL UNIVERSITY</div>

            <h1>
              دليل طلبة
              <span> تكنولوجيا المعلومات والذكاء الاصطناعي</span>
            </h1>

            <p>
              وصول سريع ومباشر إلى أهم روابط الطلبة، تجمعات التخصصات، وجروبات
              تخصصات دفعة 26 في مكان واحد.
            </p>

            <div className="hero-actions">
              <a href="#main-groups" className="primary-button">
                استعرض الروابط
                <span>↓</span>
              </a>

              <a href="#batch26" className="secondary-button">
                جروبات تخصصات 26
              </a>
            </div>
          </div>
        </section>

        <section className="content-section" id="main-groups">
          <div className="container">
            <div className="section-title">
              <div>
                <span className="section-number">01</span>

                <div>
                  <span className="section-label">MAIN LINKS</span>

                  <h2>روابط الطلبة الرئيسية</h2>
                </div>
              </div>

              <p>أهم الجروبات والتجمعات والحسابات الخاصة بطلبة الكلية.</p>
            </div>

            <div className="main-groups-grid">
              {mainGroups.map((group) => (
                <MainGroupCard key={group.id} group={group} />
              ))}
            </div>
          </div>
        </section>

        <section
          className="content-section communities-section"
          id="communities"
        >
          <div className="container">
            <div className="section-title">
              <div>
                <span className="section-number">02</span>

                <div>
                  <span className="section-label">STUDENT COMMUNITIES</span>

                  <h2>تجمعات الطلبة حسب التخصص</h2>
                </div>
              </div>

              <p>تجمعات فيسبوك الخاصة بطلبة كل تخصص.</p>
            </div>

            <div className="communities-grid">
              {communities.map((item) => (
                <CommunityCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="content-section batch-section" id="batch26">
          <div className="container">
            <div className="section-title">
              <div>
                <span className="section-number">03</span>

                <div>
                  <span className="section-label">BATCH 26</span>

                  <h2>جروبات تخصصات دفعة 26</h2>
                </div>
              </div>

              <p>اختار تخصصك وادخل مباشرة إلى جروب دفعة 26.</p>
            </div>

            <div className="batch-grid">
              {batch26Groups.map((item) => (
                <BatchCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top-line" />

        <div className="container footer-inner">
          <div className="footer-main">
            <div className="footer-logo-wrap">
              <img
                src="/shabiba-logo.png"
                alt="شعار حركة الشبيبة الطلابية"
                className="footer-logo"
              />
            </div>

            <div className="footer-brand-text">
              <span>SHABIBA STUDENT MOVEMENT</span>
              <h3>حركة الشبيبة الطلابية</h3>
              <p>كلية تكنولوجيا المعلومات والذكاء الاصطناعي</p>
            </div>
          </div>

          <div className="footer-signature">
            <span>IT & AI STUDENTS GUIDE</span>

            <small>Designed & Developed by Majed Hanini</small>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
