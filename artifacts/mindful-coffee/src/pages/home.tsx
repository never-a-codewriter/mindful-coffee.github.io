import { useState, useEffect, useRef } from "react";
import img1 from "@assets/2026_05_08_04_09_IMG_3359_1778259102323.JPG";
import img2 from "@assets/2026_05_08_04_09_IMG_3360_1778259102324.JPG";
import img3 from "@assets/2026_05_08_04_10_IMG_3362_1778259102324.JPG";
import img4 from "@assets/2026_05_08_04_10_IMG_3363_1778259102325.JPG";
import img5 from "@assets/2026_05_08_04_11_IMG_3365_1778259102325.JPG";
import img6 from "@assets/2026_05_08_04_11_IMG_3366_1778259102325.JPG";
import img7 from "@assets/2026_05_08_04_11_IMG_3367_1778259102326.JPG";
import img8 from "@assets/2026_05_08_04_12_IMG_3368_1778259102326.JPG";
import img9 from "@assets/2026_05_08_04_12_IMG_3369_1778259102326.JPG";
import imgGif from "@assets/2026_05_08_04_12_IMG_3373_1778259102328.GIF";
import imgMonk from "@assets/2026_05_06_00_09_IMG_3335_1778260450132.JPG";
import imgSetup from "@assets/2026_05_08_04_09_IMG_3361_1778260450133.JPG";
import imgPouringTop from "@assets/2026_05_08_04_15_IMG_3377_1778260450134.PNG";
import imgMoodyPour from "@assets/2026_05_08_04_16_IMG_3380_1778260450135.JPG";
import imgScene from "@assets/2026_05_08_04_19_IMG_3391_1778260450138.PNG";
import imgBrewing from "@assets/2026_05_08_04_16_IMG_3381_1778260450135.JPG";

type Lang = "zh" | "en" | "de";

const t: Record<Lang, Record<string, string>> = {
  zh: {
    navPhilosophy: "理念",
    navAbout: "关于我们",
    navActivities: "活动",
    navArticles: "文章",
    navJoin: "报名",
    heroTagline: "留白一刻",
    heroSubtitle: "带着正念，喝一杯咖啡",
    heroDesc: "慕尼黑静心协会 · 公益咖啡项目",
    heroCity: "München · 慕尼黑",
    heroCTA: "了解更多",
    heroJoin: "参加活动",
    philTitle: "理念",
    philHeading: "只是，静静地喝杯咖啡",
    philQ1: "咖啡与正念，相得益彰",
    philP1: "咖啡属于日常，具有国际性；正念风靡世界，已进入教育、医疗、心理学界。正念与咖啡的结合，可以通过人们喜闻乐见的方式，进入家庭与日常生活，为大家提供服务。",
    philQ2: "留白一刻",
    philP2: "你们提出「留白一刻」，这个定位很好。简单地说，就是体会念头与念头之间的空隙，体会念头背后虚空一般的心。正念咖啡，就是以咖啡为锚点，通过相应的仪式感，在专心制作、品饮的过程中，让心随之静下来。",
    philQ3: "区别，就在于用心",
    philP3: "是以贪嗔痴喝咖啡，还是以正念喝咖啡，区别就在于用心。所有的仪轨和氛围，只是助缘而已。在这个过程中，我们要始终带着专注，觉知自己的动作，也觉知内心的状态，以及空白的这一块。",
    philAuthor: "——济群法师，2024年12月讲于梅花岛",
    aboutTitle: "关于我们",
    aboutHeading: "慕尼黑静心协会",
    aboutP1: "慕尼黑静心协会（Mindful Peace e.V.）是国际静心协会（Mindful Peace International）在慕尼黑的地区分会，注册于德国慕尼黑。我们是公益非营利组织，致力于将静心文化带入多元文化的慕尼黑城市生活。",
    aboutP2: "静心文化根植于佛教优良传统，并结合现代生活方式，强调通过正念和慈悲的修习，实现深刻的自我理解和自我改变。国际静心协会注册于瑞士苏黎世，分布遍及亚洲、欧洲、美洲、大洋洲和非洲。",
    aboutMasterTitle: "课程导师",
    aboutMasterName: "济群法师",
    aboutMasterDesc: "由济群法师创立，基于其四十多年的个人修行和三十年的佛法教学，静心学堂课程体系探讨三个核心问题：人类独特的价值是什么？生命的意义是什么？现代人如何安顿身心？法师为沩仰宗第十代传人、临济宗第四十五代传人，斯里兰卡佛教与巴利语大学荣誉文学博士。",
    aboutMPITitle: "国际静心协会",
    aboutMPIDesc: "Mindful Peace International (MPI) 注册于瑞士苏黎世，是全球性非营利组织，致力于在全球范围内传播佛教优秀传统文化和禅意生活。",
    actTitle: "活动",
    actHeading: "禅咖啡工作坊",
    actSubheading: "每期活动",
    actP1: "每期活动以「禅咖啡」为主题，在慕尼黑举办，时长约半天。活动流程围绕正念冲泡、静默品饮与小组分享展开，咖啡本身采用熟豆手磨方式，强调过程体验而非产品本身。",
    actFree: "咖啡免费提供，活动结束后可自愿捐赠，捐赠款项全部用于项目运营，不作任何商业分配。",
    actFreq: "活动频率",
    actFreqVal: "每1至2周一次，每次约半天",
    actAudience: "目标受众",
    actAudienceVal: "慕尼黑本地居民、留学生及在德外国人",
    actLang: "活动语言",
    actLangVal: "中文 · English · Deutsch",
    actWhat: "活动内容包括",
    actItem1: "正念冲泡体验（手磨咖啡豆、手冲）",
    actItem2: "引导词带领下的静默品饮",
    actItem3: "小组分享与交流",
    actItem4: "延伸活动：禅茶、正念球等",
    artTitle: "文章",
    artHeading: "慢冲漫答",
    art1Title: "不评判好坏，全然接纳此刻的感受",
    art1Body: "今日静坐冲煮咖啡，放下外界纷扰，在慢节奏的动作与静观中，觉察自己的身心状态。轻轻向内观照，不刻意放松，也不刻意紧绷，只是如实看见当下的状态……静心慢品，感受黑美人咖啡的香气缓缓萦绕散开，干净又柔和。暖意顺着香气缓缓蔓延全身，浮躁渐渐沉淀，内心被温柔稳稳包裹，安然自在。",
    art2Title: "做手冲咖啡时在想什么？",
    art2Body: "冲煮时的思考可以总结为「感知粉，控制水」六个字。手冲咖啡看似是「按公式操作」的事儿，但真正冲煮时，咖啡粉和水是动态互动的。人不是机器，是有柔性的，能在冲煮中做动态的、适中的控制。",
    art3Title: "好和坏都只是很有局限性的判断",
    art3Body: "好和坏都不是一定的，只是一种很有局限的判断。所以，放下评判吧。经过长久的练习，自己的用心开始发生一些变化，养成一些好的习惯——知道训练专注力，是为了引发觉知力、生命明觉的力量，所以一心一意，将心缘在纯粹感知的这个层面。",
    joinTitle: "报名",
    joinHeading: "参加活动",
    joinDesc: "填写以下表单，我们会将活动信息发送给您。咖啡免费，心意随缘。",
    fieldName: "姓名",
    fieldContact: "联系方式（微信 / Email / WhatsApp）",
    fieldLang: "语言偏好",
    fieldLangZh: "中文",
    fieldLangEn: "English",
    fieldLangDe: "Deutsch",
    fieldSource: "如何了解到我们？",
    fieldSourceFriend: "朋友介绍",
    fieldSourceSocial: "社交媒体",
    fieldSourceOther: "其他",
    fieldMsg: "留言（可选）",
    fieldMsgPH: "想说的话……",
    submitBtn: "提交报名",
    submitSuccess: "感谢您的报名！我们会尽快与您联系。",
    submitSaved: "信息已本地保存。",
    footerOrg: "慕尼黑静心协会 Mindful Peace e.V.",
    footerCopy: "© 2025 正念咖啡 · Mindful Coffee München",
    footerMPI: "国际静心协会",
    footerWeb: "官网",
    footerFollow: "关注我们",
    footerIG: "Instagram",
    footerXHS: "小红书",
    selectDefault: "请选择……",
  },
  en: {
    navPhilosophy: "Philosophy",
    navAbout: "About",
    navActivities: "Activities",
    navArticles: "Essays",
    navJoin: "Join",
    heroTagline: "A Moment of Stillness",
    heroSubtitle: "Drink Coffee with Mindfulness",
    heroDesc: "Mindful Peace e.V. München · Public Benefit Coffee Project",
    heroCity: "München · Munich",
    heroCTA: "Learn More",
    heroJoin: "Join an Event",
    philTitle: "Philosophy",
    philHeading: "Just Quietly Drink a Cup of Coffee",
    philQ1: "Coffee and Mindfulness — A Natural Complement",
    philP1: "Coffee is inherently international and woven into daily life. Mindfulness has swept across the world, influencing education, healthcare, and psychology. Together, they offer a way to bring contemplative practice into everyday homes and communities.",
    philQ2: "Leave a Moment of Blank Space",
    philP2: "\"Leaving a moment of blank space\" — from the perspective of Chan practice, it means experiencing the moment when the previous thought has passed and the next has not yet arisen. In mindfulness coffee, coffee becomes an anchor. As one devotes attention to brewing and savoring, the sense of ritual helps the mind settle.",
    philQ3: "The Difference Lies in the Use of Your Mind",
    philP3: "The difference lies in whether you drink coffee with greed, anger, and distraction — or with mindfulness. All rituals and atmosphere are simply supportive conditions. Throughout, maintain focus, be aware of your actions, your inner state, and the blank space.",
    philAuthor: "— Venerable Master Jiqun, December 2024, Plum Blossom Island",
    aboutTitle: "About",
    aboutHeading: "Mindful Peace e.V. München",
    aboutP1: "Mindful Peace e.V. München is the Munich chapter of Mindful Peace International, registered as a nonprofit association in Germany. We are dedicated to bringing mindful culture into the diverse, cosmopolitan life of Munich.",
    aboutP2: "Rooted in Buddhism's noble tradition and adapted to modern lifestyles, the Mindful Peace culture emphasizes deep self-understanding through mindfulness and compassion. Mindful Peace International is registered in Zurich, Switzerland, with presence across Asia, Europe, the Americas, and Oceania.",
    aboutMasterTitle: "Curriculum Founder",
    aboutMasterName: "Venerable Master Jiqun",
    aboutMasterDesc: "Founded by Venerable Master Jiqun, drawing on over 40 years of personal cultivation and 30 years of Dharma teaching. The curriculum addresses three essential questions: What is the unique value of being human? What is the meaning of life? How can modern individuals settle body and mind? Master Jiqun is the 10th-generation successor of the Weiyang Sect and the 45th-generation successor of the Linji Sect of Chinese Chan Buddhism.",
    aboutMPITitle: "Mindful Peace International",
    aboutMPIDesc: "Mindful Peace International (MPI) is a global non-profit registered in Zurich, Switzerland, dedicated to sharing the rich heritage of Buddhism and Chan-inspired Living worldwide.",
    actTitle: "Activities",
    actHeading: "Chan Coffee Workshop",
    actSubheading: "Each Session",
    actP1: "Each session centers on the theme of \"Chan Coffee\" and is held in Munich for approximately half a day. The program revolves around mindful brewing, silent tasting, and group sharing. Coffee is prepared from whole roasted beans, ground by hand — emphasizing the experience of the process itself.",
    actFree: "Coffee is offered free of charge. After the session, participants may make a voluntary donation to support project operations. All donations go entirely to the project — no commercial distribution.",
    actFreq: "Frequency",
    actFreqVal: "Every 1–2 weeks, approx. half a day per session",
    actAudience: "Audience",
    actAudienceVal: "Munich locals, international students, expats",
    actLang: "Languages",
    actLangVal: "中文 · English · Deutsch",
    actWhat: "The session includes",
    actItem1: "Mindful brewing experience (hand-grinding, pour-over)",
    actItem2: "Guided silent tasting",
    actItem3: "Group sharing and reflection",
    actItem4: "Extended activities: Chan tea, Mindfulness Ball, and more",
    artTitle: "Essays",
    artHeading: "Slow Brew, Slow Answer",
    art1Title: "No judgment — fully accept what you feel in this moment",
    art1Body: "Today I sat in stillness, brewing coffee, setting aside the noise of the outside world. In slow, unhurried movements and quiet observation, I became aware of my own body and mind. Without forcing relaxation or tension — simply seeing the present state as it is... The warmth spreads slowly through the body, restlessness settles, and the heart is held gently in warmth.",
    art2Title: "What do you think about while making pour-over coffee?",
    art2Body: "The thinking can be summed up in six words: \"sense the grounds, control the water.\" Pour-over coffee may seem like following a formula, but in actual brewing, the coffee and water interact dynamically. A human is not a machine — there is flexibility, and the ability to make dynamic, measured adjustments throughout.",
    art3Title: "Good and bad are just very limited judgments",
    art3Body: "Good and bad are not fixed — they are only limited judgments. So, let go of judgment. After long practice, how one uses the mind begins to shift, good habits form — knowing that training concentration serves to unlock awareness, the power of life's clarity. So with full attention, anchor the mind at the level of pure perception.",
    joinTitle: "Join",
    joinHeading: "Join an Event",
    joinDesc: "Fill in the form below and we will send you event information. Coffee is free — contribution is from the heart.",
    fieldName: "Name",
    fieldContact: "Contact (WeChat / Email / WhatsApp)",
    fieldLang: "Language preference",
    fieldLangZh: "中文",
    fieldLangEn: "English",
    fieldLangDe: "Deutsch",
    fieldSource: "How did you hear about us?",
    fieldSourceFriend: "Friend's recommendation",
    fieldSourceSocial: "Social media",
    fieldSourceOther: "Other",
    fieldMsg: "Message (optional)",
    fieldMsgPH: "Anything you'd like to share…",
    submitBtn: "Submit",
    submitSuccess: "Thank you! We will be in touch soon.",
    submitSaved: "Your information has been saved locally.",
    footerOrg: "Mindful Peace e.V. München",
    footerCopy: "© 2025 Mindful Coffee München · 正念咖啡",
    footerMPI: "Mindful Peace International",
    footerWeb: "Website",
    footerFollow: "Follow us",
    footerIG: "Instagram",
    footerXHS: "Xiaohongshu (RED)",
    selectDefault: "Please select…",
  },
  de: {
    navPhilosophy: "Philosophie",
    navAbout: "Über uns",
    navActivities: "Aktivitäten",
    navArticles: "Texte",
    navJoin: "Anmelden",
    heroTagline: "Ein Moment der Stille",
    heroSubtitle: "Kaffee mit Achtsamkeit trinken",
    heroDesc: "Mindful Peace e.V. München · Gemeinnütziges Kaffeeprojekt",
    heroCity: "München",
    heroCTA: "Mehr erfahren",
    heroJoin: "Jetzt anmelden",
    philTitle: "Philosophie",
    philHeading: "Einfach still einen Kaffee trinken",
    philQ1: "Kaffee und Achtsamkeit — eine natürliche Verbindung",
    philP1: "Kaffee ist international und tief im Alltag verwurzelt. Achtsamkeit hat die ganze Welt erfasst und beeinflusst Bildung, Gesundheitswesen und Psychologie. Zusammen bieten sie einen Weg, kontemplative Praxis in den Alltag zu bringen.",
    philQ2: "Einen Moment Leeraum lassen",
    philP2: "\"Einen Moment Leeraum lassen\" bedeutet aus der Chan-Perspektive, den Augenblick zu erleben, in dem der vorherige Gedanke vergangen und der nächste noch nicht entstanden ist. Im Achtsamkeitskaffee wird der Kaffee zum Anker. Beim achtsamen Brühen und Genießen hilft das Ritual, den Geist zur Ruhe zu bringen.",
    philQ3: "Der Unterschied liegt im Gebrauch des Geistes",
    philP3: "Der Unterschied liegt darin, ob man Kaffee mit Gier, Ärger und Zerstreutheit trinkt — oder mit Achtsamkeit. Alle Rituale und die Atmosphäre sind nur unterstützende Bedingungen. Bleibe dabei stets fokussiert, nimm deine Handlungen wahr, deinen inneren Zustand und den Leeraum.",
    philAuthor: "— Ehrwürdiger Meister Jiqun, Dezember 2024, Plum Blossom Island",
    aboutTitle: "Über uns",
    aboutHeading: "Mindful Peace e.V. München",
    aboutP1: "Mindful Peace e.V. München ist die Münchner Sektion von Mindful Peace International, eingetragen als gemeinnütziger Verein in Deutschland. Wir widmen uns dem Ziel, die Achtsamkeitskultur in das vielfältige städtische Leben Münchens zu bringen.",
    aboutP2: "Die Mindful Peace Kultur wurzelt in der edlen buddhistischen Tradition und ist auf moderne Lebensweisen abgestimmt. Sie betont tiefes Selbstverständnis durch Achtsamkeit und Mitgefühl. Mindful Peace International ist in Zürich registriert und in Asien, Europa, Amerika und Ozeanien präsent.",
    aboutMasterTitle: "Lehrplanersteller",
    aboutMasterName: "Ehrw. Meister Jiqun",
    aboutMasterDesc: "Der Lehrplan wurde von Ehrwürdigem Meister Jiqun entwickelt, basierend auf über 40 Jahren persönlicher Praxis und 30 Jahren Dharma-Lehre. Er befasst sich mit drei Kernfragen: Was ist der einzigartige Wert des Menschseins? Was ist der Sinn des Lebens? Wie können moderne Menschen Körper und Geist zur Ruhe bringen?",
    aboutMPITitle: "Mindful Peace International",
    aboutMPIDesc: "Mindful Peace International (MPI) ist eine gemeinnützige Organisation mit Sitz in Zürich, Schweiz, die das buddhistische Erbe und das Chan-inspirierte Leben weltweit verbreitet.",
    actTitle: "Aktivitäten",
    actHeading: "Chan Kaffee Workshop",
    actSubheading: "Jede Veranstaltung",
    actP1: 'Jede Veranstaltung steht unter dem Motto \u201eChan Kaffee\u201c und findet in München für etwa einen halben Tag statt. Das Programm umfasst achtsames Brühen, stilles Verkosten und Gruppenaustausch. Der Kaffee wird aus ganzen gerösteten Bohnen per Hand gemahlen \u2014 der Prozess selbst steht im Mittelpunkt.',
    actFree: "Kaffee ist kostenlos. Nach der Veranstaltung können Teilnehmende freiwillig spenden. Alle Spenden fließen vollständig in den Projektbetrieb — keine kommerzielle Nutzung.",
    actFreq: "Häufigkeit",
    actFreqVal: "Alle 1–2 Wochen, ca. halber Tag",
    actAudience: "Zielgruppe",
    actAudienceVal: "Münchner, internationale Studierende, Expats",
    actLang: "Sprachen",
    actLangVal: "中文 · English · Deutsch",
    actWhat: "Die Veranstaltung umfasst",
    actItem1: "Achtsames Brüherlebnis (Handmahlen, Handaufguss)",
    actItem2: "Geführtes stilles Verkosten",
    actItem3: "Gruppenaustausch und Reflexion",
    actItem4: "Erweiterte Aktivitäten: Chan-Tee, Achtsamkeitsball u.v.m.",
    artTitle: "Texte",
    artHeading: "Langsam gebrüht, langsam geantwortet",
    art1Title: "Kein Urteil — das Gefühl des Augenblicks vollständig annehmen",
    art1Body: "Heute saß ich in Stille und brühte Kaffee, ließ das äußere Rauschen hinter mir. In langsamen, bedächtigen Bewegungen und stiller Beobachtung wurde ich meines eigenen Körpers und Geistes gewahr. Ohne erzwungene Entspannung oder Anspannung — nur den gegenwärtigen Zustand so sehen, wie er ist... Die Wärme breitet sich langsam im Körper aus, Unruhe setzt sich ab, das Herz wird sanft von Wärme gehalten.",
    art2Title: "Woran denkst du beim Handaufguss?",
    art2Body: 'Das Denken l\u00e4sst sich in sechs W\u00f6rtern zusammenfassen: \u201eDas Kaffeemehl sp\u00fcren, das Wasser kontrollieren.\u201c Handaufguss mag wie das Befolgen einer Formel erscheinen, aber beim tats\u00e4chlichen Br\u00fchen interagieren Kaffeemehl und Wasser dynamisch. Ein Mensch ist keine Maschine \u2014 es gibt Flexibilit\u00e4t, die F\u00e4higkeit, dynamisch und ma\u00dfvoll anzupassen.',
    art3Title: "Gut und schlecht sind nur sehr begrenzte Urteile",
    art3Body: "Gut und schlecht sind nicht feststehend — sie sind nur begrenzte Urteile. Also lass das Urteilen los. Nach langer Übung beginnt sich die Art, den Geist einzusetzen, zu verändern, gute Gewohnheiten entstehen — in dem Wissen, dass das Trainieren von Konzentration dazu dient, Bewusstsein freizusetzen, die Kraft der Klarheit des Lebens.",
    joinTitle: "Anmelden",
    joinHeading: "An einer Veranstaltung teilnehmen",
    joinDesc: "Füllen Sie das Formular aus und wir schicken Ihnen Veranstaltungsinformationen. Kaffee ist kostenlos — Beitrag kommt von Herzen.",
    fieldName: "Name",
    fieldContact: "Kontakt (WeChat / E-Mail / WhatsApp)",
    fieldLang: "Sprachpräferenz",
    fieldLangZh: "中文",
    fieldLangEn: "English",
    fieldLangDe: "Deutsch",
    fieldSource: "Wie haben Sie von uns erfahren?",
    fieldSourceFriend: "Empfehlung von Freunden",
    fieldSourceSocial: "Soziale Medien",
    fieldSourceOther: "Sonstiges",
    fieldMsg: "Nachricht (optional)",
    fieldMsgPH: "Was möchten Sie mitteilen…",
    submitBtn: "Absenden",
    submitSuccess: "Vielen Dank! Wir melden uns bald bei Ihnen.",
    submitSaved: "Ihre Informationen wurden lokal gespeichert.",
    footerOrg: "Mindful Peace e.V. München",
    footerCopy: "© 2025 Mindful Coffee München · 正念咖啡",
    footerMPI: "Mindful Peace International",
    footerWeb: "Webseite",
    footerFollow: "Folgt uns",
    footerIG: "Instagram",
    footerXHS: "Xiaohongshu (RED)",
    selectDefault: "Bitte auswählen…",
  },
};

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function RevealDiv({ className, children, delay = 0 }: { className?: string; children: React.ReactNode; delay?: number }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${delay === 1 ? "reveal-delay-1" : delay === 2 ? "reveal-delay-2" : delay === 3 ? "reveal-delay-3" : delay === 4 ? "reveal-delay-4" : ""} ${className || ""}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");
  const [activeSection, setActiveSection] = useState("hero");
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    language: "",
    source: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const tx = t[lang];

  const sections = ["hero", "philosophy", "about", "activities", "articles", "join"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submissions = JSON.parse(localStorage.getItem("mindfulcoffee_signups") || "[]");
    submissions.push({ ...formData, lang, timestamp: new Date().toISOString() });
    localStorage.setItem("mindfulcoffee_signups", JSON.stringify(submissions));
    setSubmitted(true);
  };

  const navLinks = [
    { id: "philosophy", label: tx.navPhilosophy },
    { id: "about", label: tx.navAbout },
    { id: "activities", label: tx.navActivities },
    { id: "articles", label: tx.navArticles },
    { id: "join", label: tx.navJoin },
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: "var(--app-font-mono)" }}>
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{
          background: "hsl(38 28% 95% / 0.88)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid hsl(38 15% 78% / 0.4)",
        }}
      >
        <a
          href="#hero"
          className="text-xs tracking-[0.18em] uppercase"
          style={{ fontFamily: "var(--app-font-mono)", color: "hsl(148 20% 29%)", opacity: 0.9 }}
        >
          正念咖啡
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav-link text-xs tracking-[0.14em] uppercase ${activeSection === l.id ? "active" : ""}`}
              style={{ fontFamily: "var(--app-font-mono)" }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {(["zh", "en", "de"] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className="text-xs tracking-widest transition-all duration-300"
              style={{
                fontFamily: "var(--app-font-mono)",
                color: lang === l ? "hsl(148 20% 29%)" : "hsl(0 0% 38%)",
                opacity: lang === l ? 1 : 0.5,
                fontWeight: lang === l ? 400 : 300,
              }}
            >
              {l === "zh" ? "中" : l === "en" ? "EN" : "DE"}
            </button>
          ))}
        </div>
      </nav>
      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-end"
        style={{ paddingBottom: "6rem" }}
      >
        <div className="absolute inset-0 img-overlay">
          <img
            src={img2}
            alt="正念咖啡"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.82) saturate(0.7)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, hsl(0 0% 0% / 0.1) 0%, hsl(38 28% 8% / 0.55) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 px-8 md:px-16 max-w-3xl">
          <div
            className="animate-fade-in-up mb-3 text-xs tracking-[0.28em] uppercase"
            style={{ color: "hsl(38 28% 85%)", animationDelay: "0.2s", opacity: 0 }}
          >
            {tx.heroCity}
          </div>
          <h1
            className="animate-fade-in-up mb-4"
            style={{
              fontFamily: "var(--app-font-serif)",
              fontSize: "clamp(2.8rem, 8vw, 6rem)",
              fontWeight: 300,
              color: "hsl(38 28% 94%)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              animationDelay: "0.4s",
              opacity: 0,
            }}
          >
            {tx.heroTagline}
          </h1>
          <p
            className="animate-fade-in-up mb-2 text-[#5aa35a]"
            style={{
              fontFamily: "var(--app-font-serif)",
              fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
              fontWeight: 300,
              color: "hsl(38 28% 88%)",
              fontStyle: "italic",
              animationDelay: "0.65s",
              opacity: 0,
            }}
          >
            {tx.heroSubtitle}
          </p>
          <p
            className="animate-fade-in-up mb-10 text-xs tracking-[0.15em]"
            style={{ color: "hsl(38 28% 78%)", animationDelay: "0.85s", opacity: 0, fontFamily: "var(--app-font-mono)" }}
          >
            {tx.heroDesc}
          </p>
          <div
            className="animate-fade-in-up flex gap-4"
            style={{ animationDelay: "1.05s", opacity: 0 }}
          >
            <a
              href="#philosophy"
              className="text-xs tracking-[0.16em] uppercase px-6 py-3 border transition-all duration-300"
              style={{
                borderColor: "hsl(38 28% 85% / 0.5)",
                color: "hsl(38 28% 94%)",
                fontFamily: "var(--app-font-mono)",
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "hsl(38 28% 85% / 0.1)"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "transparent"; }}
            >
              {tx.heroCTA}
            </a>
            <a
              href="#join"
              className="text-xs tracking-[0.16em] uppercase px-6 py-3 transition-all duration-300"
              style={{
                background: "hsl(148 20% 29%)",
                color: "hsl(38 28% 95%)",
                fontFamily: "var(--app-font-mono)",
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "hsl(148 20% 22%)"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "hsl(148 20% 29%)"; }}
            >
              {tx.heroJoin}
            </a>
          </div>
        </div>

        {/* Animated GIF in corner */}
        <div
          className="absolute bottom-8 right-8 animate-fade-in"
          style={{ animationDelay: "1.5s", opacity: 0, width: 64 }}
        >
          <img src={imgGif} alt="" className="w-16 opacity-70" />
        </div>
      </section>
      {/* PHILOSOPHY */}
      <section id="philosophy" className="section-padding" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <RevealDiv>
          <span className="text-xs tracking-[0.22em] uppercase" style={{ color: "hsl(148 20% 29%)", fontFamily: "var(--app-font-mono)" }}>
            {tx.philTitle}
          </span>
          <div className="divider mt-3 mb-8" />
        </RevealDiv>

        <RevealDiv delay={1}>
          <h2
            style={{
              fontFamily: "var(--app-font-serif)",
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              fontWeight: 300,
              lineHeight: 1.25,
              color: "hsl(0 0% 15%)",
              marginBottom: "2.5rem",
            }}
          >
            {tx.philHeading}
          </h2>
        </RevealDiv>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <RevealDiv delay={1}>
            <div className="quote-block">
              <p className="text-sm font-serif italic mb-3" style={{ fontFamily: "var(--app-font-serif)", fontSize: "1.05rem", lineHeight: 1.7, color: "hsl(148 20% 25%)" }}>
                {tx.philQ1}
              </p>
            </div>
            <p className="text-sm leading-loose" style={{ color: "hsl(0 0% 28%)" }}>{tx.philP1}</p>
          </RevealDiv>

          <RevealDiv delay={2}>
            <div className="quote-block">
              <p className="text-sm font-serif italic mb-3" style={{ fontFamily: "var(--app-font-serif)", fontSize: "1.05rem", lineHeight: 1.7, color: "hsl(148 20% 25%)" }}>
                {tx.philQ2}
              </p>
            </div>
            <p className="text-sm leading-loose" style={{ color: "hsl(0 0% 28%)" }}>{tx.philP2}</p>
          </RevealDiv>
        </div>

        <RevealDiv delay={2}>
          <div className="p-8 mb-6" style={{ background: "hsl(38 22% 91%)", borderLeft: "2px solid hsl(148 20% 29% / 0.3)" }}>
            <p className="text-sm leading-loose mb-4" style={{ color: "hsl(0 0% 25%)" }}>{tx.philP3}</p>
            <p className="text-xs tracking-widest" style={{ color: "hsl(148 20% 35%)", fontStyle: "italic" }}>{tx.philAuthor}</p>
          </div>
        </RevealDiv>

        {/* Image strip */}
        <RevealDiv delay={3}>
          <div className="grid grid-cols-3 gap-3 mt-10">
            {[imgMoodyPour, img9, imgBrewing].map((src, i) => (
              <div key={i} className="overflow-hidden" style={{ aspectRatio: "1/1" }}>
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  style={{ filter: "saturate(0.7) brightness(0.95)" }}
                />
              </div>
            ))}
          </div>
        </RevealDiv>
      </section>
      {/* FULL WIDTH IMAGE BREAK */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={img7}
          alt="Group workshop"
          className="w-full h-full object-cover"
          style={{ filter: "saturate(0.6) brightness(0.88)", objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0" style={{ background: "hsl(38 28% 10% / 0.35)" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <p
            style={{
              fontFamily: "var(--app-font-serif)",
              fontSize: "clamp(1.2rem, 4vw, 2.2rem)",
              fontWeight: 300,
              color: "hsl(38 28% 92%)",
              fontStyle: "italic",
              textAlign: "center",
              padding: "0 2rem",
            }}
          >
            {lang === "zh" ? "心安之处，即是吾乡。" : lang === "en" ? "Where the mind rests in peace, there is home." : "Wo der Geist in Frieden ruht, dort ist die Heimat."}
          </p>
        </div>
      </div>
      {/* ABOUT */}
      <section id="about" className="section-padding" style={{ maxWidth: "900px", margin: "0 auto" }}>
        <RevealDiv>
          <span className="text-xs tracking-[0.22em] uppercase" style={{ color: "hsl(148 20% 29%)", fontFamily: "var(--app-font-mono)" }}>
            {tx.aboutTitle}
          </span>
          <div className="divider mt-3 mb-8" />
        </RevealDiv>

        <RevealDiv delay={1}>
          <h2
            style={{
              fontFamily: "var(--app-font-serif)",
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              fontWeight: 300,
              color: "hsl(0 0% 15%)",
              marginBottom: "2rem",
            }}
          >
            {tx.aboutHeading}
          </h2>
        </RevealDiv>

        <div className="grid md:grid-cols-2 gap-12 mb-14">
          <RevealDiv delay={1}>
            <p className="text-sm leading-loose mb-5" style={{ color: "hsl(0 0% 28%)" }}>{tx.aboutP1}</p>
            <p className="text-sm leading-loose" style={{ color: "hsl(0 0% 28%)" }}>{tx.aboutP2}</p>

            <div className="mt-8">
              <p className="text-xs tracking-[0.18em] uppercase mb-4" style={{ color: "hsl(148 20% 35%)" }}>{tx.aboutMPITitle}</p>
              <p className="text-sm leading-loose" style={{ color: "hsl(0 0% 32%)" }}>{tx.aboutMPIDesc}</p>
              <p className="text-xs mt-3 tracking-wider" style={{ color: "hsl(148 20% 35%)" }}>
                www.mindfulpeace.org
              </p>
            </div>
          </RevealDiv>

          <RevealDiv delay={2}>
            <div
              className="p-6 h-full"
              style={{ background: "hsl(38 22% 91%)", border: "1px solid hsl(38 15% 78% / 0.5)" }}
            >
              <div className="overflow-hidden mb-5" style={{ aspectRatio: "3/2" }}>
                <img
                  src={imgMonk}
                  alt="Venerable Master Jiqun illustration"
                  className="w-full h-full object-cover"
                  style={{ filter: "saturate(0.55) brightness(1.02)", objectPosition: "center 20%" }}
                />
              </div>
              <p className="text-xs tracking-[0.16em] uppercase mb-3" style={{ color: "hsl(148 20% 35%)" }}>
                {tx.aboutMasterTitle}
              </p>
              <h3
                style={{
                  fontFamily: "var(--app-font-serif)",
                  fontSize: "1.6rem",
                  fontWeight: 400,
                  color: "hsl(0 0% 15%)",
                  marginBottom: "1rem",
                }}
              >
                {tx.aboutMasterName}
              </h3>
              <p className="text-sm leading-loose" style={{ color: "hsl(0 0% 30%)" }}>{tx.aboutMasterDesc}</p>
            </div>
          </RevealDiv>
        </div>

        {/* Photo gallery */}
        <RevealDiv delay={3}>
          <div className="gallery-grid">
            {[imgSetup, imgScene, img6, img3].map((src, i) => (
              <div key={i} className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  style={{ filter: "saturate(0.72) brightness(0.95)" }}
                />
              </div>
            ))}
          </div>
        </RevealDiv>
      </section>
      {/* ACTIVITIES */}
      <section
        id="activities"
        className="section-padding"
        style={{ background: "hsl(38 22% 91%)" }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <RevealDiv>
            <span className="text-xs tracking-[0.22em] uppercase" style={{ color: "hsl(148 20% 29%)", fontFamily: "var(--app-font-mono)" }}>
              {tx.actTitle}
            </span>
            <div className="divider mt-3 mb-8" />
          </RevealDiv>

          <RevealDiv delay={1}>
            <h2
              style={{
                fontFamily: "var(--app-font-serif)",
                fontSize: "clamp(1.8rem, 5vw, 3rem)",
                fontWeight: 300,
                color: "hsl(0 0% 15%)",
                marginBottom: "0.75rem",
              }}
            >
              {tx.actHeading}
            </h2>
            <p
              className="text-sm mb-8 tracking-wider"
              style={{ color: "hsl(148 20% 35%)", fontStyle: "italic", fontFamily: "var(--app-font-serif)" }}
            >
              {tx.actSubheading}
            </p>
          </RevealDiv>

          <RevealDiv delay={1}>
            <p className="text-sm leading-loose mb-5" style={{ color: "hsl(0 0% 28%)" }}>{tx.actP1}</p>
            <p className="text-sm leading-loose mb-10" style={{ color: "hsl(0 0% 28%)", fontStyle: "italic" }}>✦ {tx.actFree}</p>
          </RevealDiv>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { label: tx.actFreq, val: tx.actFreqVal },
              { label: tx.actAudience, val: tx.actAudienceVal },
              { label: tx.actLang, val: tx.actLangVal },
            ].map((item, i) => (
              <RevealDiv key={i} delay={(i + 1) as 1 | 2 | 3}>
                <div className="p-5" style={{ background: "hsl(38 28% 95%)", border: "1px solid hsl(38 15% 78% / 0.5)" }}>
                  <p className="text-xs tracking-[0.16em] uppercase mb-2" style={{ color: "hsl(148 20% 35%)" }}>{item.label}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(0 0% 20%)" }}>{item.val}</p>
                </div>
              </RevealDiv>
            ))}
          </div>

          <RevealDiv delay={2}>
            <p className="text-xs tracking-[0.16em] uppercase mb-4" style={{ color: "hsl(148 20% 35%)" }}>{tx.actWhat}</p>
            <ul className="space-y-3">
              {[tx.actItem1, tx.actItem2, tx.actItem3, tx.actItem4].map((item, i) => (
                <li key={i} className="flex gap-3 items-start text-sm" style={{ color: "hsl(0 0% 28%)" }}>
                  <span style={{ color: "hsl(148 20% 35%)", marginTop: "0.15rem", flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </RevealDiv>

          <RevealDiv delay={3}>
            <div className="mt-10 overflow-hidden" style={{ maxHeight: "340px" }}>
              <img
                src={imgPouringTop}
                alt=""
                className="w-full object-cover"
                style={{ filter: "saturate(0.7) brightness(0.92)", objectPosition: "center 40%", maxHeight: "340px" }}
              />
            </div>
          </RevealDiv>
        </div>
      </section>
      {/* ARTICLES */}
      <section id="articles" className="section-padding" style={{ maxWidth: "900px", margin: "0 auto" }}>
        <RevealDiv>
          <span className="text-xs tracking-[0.22em] uppercase" style={{ color: "hsl(148 20% 29%)", fontFamily: "var(--app-font-mono)" }}>
            {tx.artTitle}
          </span>
          <div className="divider mt-3 mb-8" />
        </RevealDiv>

        <RevealDiv delay={1}>
          <h2
            style={{
              fontFamily: "var(--app-font-serif)",
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              fontWeight: 300,
              color: "hsl(0 0% 15%)",
              marginBottom: "2.5rem",
            }}
          >
            {tx.artHeading}
          </h2>
        </RevealDiv>

        <div className="space-y-10">
          {[
            { title: tx.art1Title, body: tx.art1Body, img: imgScene },
            { title: tx.art2Title, body: tx.art2Body, img: imgMoodyPour },
            { title: tx.art3Title, body: tx.art3Body, img: img4 },
          ].map((article, i) => (
            <RevealDiv key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="grid md:grid-cols-3 gap-6 pb-10" style={{ borderBottom: "1px solid hsl(38 15% 78% / 0.5)" }}>
                <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={article.img}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    style={{ filter: "saturate(0.65) brightness(0.92)" }}
                  />
                </div>
                <div className="md:col-span-2 flex flex-col justify-center">
                  <h3
                    style={{
                      fontFamily: "var(--app-font-serif)",
                      fontSize: "1.25rem",
                      fontWeight: 400,
                      color: "hsl(0 0% 15%)",
                      marginBottom: "0.85rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-sm leading-loose" style={{ color: "hsl(0 0% 35%)" }}>{article.body}</p>
                </div>
              </div>
            </RevealDiv>
          ))}
        </div>
      </section>
      {/* JOIN / FORM */}
      <section
        id="join"
        className="section-padding"
        style={{ background: "hsl(148 20% 29%)" }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <RevealDiv>
            <span className="text-xs tracking-[0.22em] uppercase" style={{ color: "hsl(38 28% 78%)", fontFamily: "var(--app-font-mono)" }}>
              {tx.joinTitle}
            </span>
            <div className="mt-3 mb-8" style={{ width: "48px", height: "1px", background: "hsl(38 28% 78% / 0.5)" }} />
          </RevealDiv>

          <RevealDiv delay={1}>
            <h2
              style={{
                fontFamily: "var(--app-font-serif)",
                fontSize: "clamp(1.8rem, 5vw, 3rem)",
                fontWeight: 300,
                color: "hsl(38 28% 94%)",
                marginBottom: "0.75rem",
              }}
            >
              {tx.joinHeading}
            </h2>
            <p className="text-sm mb-10 leading-loose" style={{ color: "hsl(38 28% 78%)" }}>{tx.joinDesc}</p>
          </RevealDiv>

          {submitted ? (
            <RevealDiv delay={1}>
              <div
                className="p-8 text-center"
                style={{ border: "1px solid hsl(38 28% 78% / 0.3)", background: "hsl(148 20% 24%)" }}
              >
                <p
                  style={{
                    fontFamily: "var(--app-font-serif)",
                    fontSize: "1.4rem",
                    color: "hsl(38 28% 90%)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {tx.submitSuccess}
                </p>
                <p className="text-xs" style={{ color: "hsl(38 28% 70%)" }}>{tx.submitSaved}</p>
              </div>
            </RevealDiv>
          ) : (
            <RevealDiv delay={2}>
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <label className="block text-xs tracking-[0.14em] uppercase mb-2" style={{ color: "hsl(38 28% 70%)" }}>
                    {tx.fieldName} *
                  </label>
                  <input
                    required
                    className="wabi-input"
                    style={{ borderBottomColor: "hsl(38 28% 55%)", color: "hsl(38 28% 92%)" }}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={lang === "zh" ? "您的姓名" : lang === "en" ? "Your name" : "Ihr Name"}
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-[0.14em] uppercase mb-2" style={{ color: "hsl(38 28% 70%)" }}>
                    {tx.fieldContact} *
                  </label>
                  <input
                    required
                    className="wabi-input"
                    style={{ borderBottomColor: "hsl(38 28% 55%)", color: "hsl(38 28% 92%)" }}
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="WeChat / email@example.com / +49..."
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-[0.14em] uppercase mb-2" style={{ color: "hsl(38 28% 70%)" }}>
                    {tx.fieldLang}
                  </label>
                  <select
                    className="wabi-input"
                    style={{ borderBottomColor: "hsl(38 28% 55%)", color: formData.language ? "hsl(38 28% 92%)" : "hsl(38 28% 60%)" }}
                    value={formData.language}
                    onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                  >
                    <option value="">{tx.selectDefault}</option>
                    <option value="zh">{tx.fieldLangZh}</option>
                    <option value="en">{tx.fieldLangEn}</option>
                    <option value="de">{tx.fieldLangDe}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.14em] uppercase mb-2" style={{ color: "hsl(38 28% 70%)" }}>
                    {tx.fieldSource}
                  </label>
                  <select
                    className="wabi-input"
                    style={{ borderBottomColor: "hsl(38 28% 55%)", color: formData.source ? "hsl(38 28% 92%)" : "hsl(38 28% 60%)" }}
                    value={formData.source}
                    onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                  >
                    <option value="">{tx.selectDefault}</option>
                    <option value="friend">{tx.fieldSourceFriend}</option>
                    <option value="social">{tx.fieldSourceSocial}</option>
                    <option value="other">{tx.fieldSourceOther}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.14em] uppercase mb-2" style={{ color: "hsl(38 28% 70%)" }}>
                    {tx.fieldMsg}
                  </label>
                  <textarea
                    className="wabi-input"
                    rows={3}
                    style={{ borderBottom: "1px solid hsl(38 28% 55%)", borderTop: "none", borderLeft: "none", borderRight: "none", color: "hsl(38 28% 92%)", resize: "none" }}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={tx.fieldMsgPH}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300"
                  style={{
                    background: "hsl(38 28% 92%)",
                    color: "hsl(148 20% 22%)",
                    fontFamily: "var(--app-font-mono)",
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "hsl(38 28% 98%)"; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "hsl(38 28% 92%)"; }}
                >
                  {tx.submitBtn}
                </button>
              </form>
            </RevealDiv>
          )}
        </div>
      </section>
      {/* FOOTER */}
      <footer
        className="px-8 py-12"
        style={{ background: "hsl(148 20% 14%)", borderTop: "1px solid hsl(148 20% 20%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
            <div>
              <p
                style={{
                  fontFamily: "var(--app-font-serif)",
                  fontSize: "1.2rem",
                  fontWeight: 300,
                  color: "hsl(38 28% 85%)",
                  marginBottom: "0.4rem",
                }}
              >
                {tx.footerOrg}
              </p>
              <p className="text-xs tracking-wider" style={{ color: "hsl(38 28% 55%)" }}>
                {tx.footerCopy}
              </p>
            </div>
            <div className="flex flex-col gap-1 text-xs" style={{ color: "hsl(38 28% 55%)" }}>
              <span className="tracking-[0.14em] uppercase mb-2" style={{ color: "hsl(38 28% 70%)" }}>
                {tx.footerMPI}
              </span>
              <a
                href="https://www.mindfulpeace.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                style={{ color: "hsl(38 28% 60%)" }}
              >
                www.mindfulpeace.org
              </a>
              <a
                href="mailto:mpi@mindfulpeace.org"
                className="hover:opacity-80 transition-opacity"
                style={{ color: "hsl(38 28% 60%)" }}
              >
                mpi@mindfulpeace.org
              </a>
            </div>
          </div>

          {/* Social media row */}
          <div style={{ borderTop: "1px solid hsl(148 20% 22%)", paddingTop: "1.5rem" }}>
            <p className="text-xs tracking-[0.18em] uppercase mb-4" style={{ color: "hsl(38 28% 55%)" }}>
              {tx.footerFollow}
            </p>
            <div className="flex gap-6 flex-wrap">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/mindfulcoffeemunich"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs transition-opacity hover:opacity-70"
                style={{ color: "hsl(38 28% 65%)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
                {tx.footerIG}
              </a>
              {/* Xiaohongshu / RED */}
              <a
                href="https://www.xiaohongshu.com/user/profile/mindfulcoffee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs transition-opacity hover:opacity-70"
                style={{ color: "hsl(38 28% 65%)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                {tx.footerXHS}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
