// Navigation scroll effect
const nav = document.getElementById("nav")
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const navMenu = document.getElementById("navMenu")
const languageToggle = document.getElementById("languageToggle")

const translations = {
  tr: {
    "page.title": "SAYA Stok Sayım Firması | Envanter Sayımı, Sabit Kıymet ve Demirbaş Sayımı",
    "page.description": "Türkiye genelinde stok sayım, envanter sayımı, sayım danışmanlığı ve demirbaş sayımı. 33 yıllık SAYA tecrübesiyle 81 ilde hizmet.",
    "page.home.title": "SAYA Stok Sayım Firması | Envanter Sayımı, Sabit Kıymet ve Demirbaş Sayımı",
    "page.home.description": "Türkiye genelinde stok sayım, envanter sayımı, sayım danışmanlığı ve demirbaş sayımı. 33 yıllık SAYA tecrübesiyle 81 ilde hizmet.",
    "page.contact.title": "İletişim | SAYA Stok Sayım – Teklif ve Sayım Danışmanlığı",
    "page.contact.description": "Stok sayım, envanter sayımı veya demirbaş sayımı için SAYA ile iletişime geçin. Türkiye genelinde ücretsiz teklif alın.",
    "page.references.title": "Referanslarımız | SAYA Stok Sayım – Envanter ve Sayım Referansları",
    "page.references.description": "SAYA stok sayım ve envanter sayımı hizmeti verdiği perakende, endüstri ve market sektöründeki referans firmalar. Türkiye genelinde 100+ iş ortağı.",
    "page.faq.title": "Sıkça Sorulan Sorular | SAYA Stok Sayım",
    "page.faq.description": "SAYA stok sayım, envanter sayımı ve demirbaş sayımı hakkında sıkça sorulan sorular.",
    "faq.pageTitle": "Sıkça Sorulan Sorular",
    "faq.pageSubtitle": "İşte SAYA stok sayım ve envanter hizmetleri hakkında sıkça sorulan sorulardan bazıları.",
    "faq.readMore": "DEVAMINI OKU",
    "nav.home": "Anasayfa",
    "nav.about": "Hakkımızda",
    "nav.services": "Hizmetler",
    "nav.sectors": "Sektörler",
    "nav.references": "Referanslarımız",
    "nav.faq": "SSS",
    "nav.contact": "İletişim",
    "nav.languageLabel": "Dil seçimi",
    "hero.eyebrow": "Envanter çözümlerinde 33+ yıl",
    "hero.title": "SAYA Stok Sayım – Envanter Sayımı, Sabit Kıymet ve Demirbaş Sayımı",
    "hero.subtitle":
      "SAYA; sahadaki ekip, teknoloji ve raporlama gücüyle hatasız sayım sağlar. Doğru, güvenilir ve verimli hizmet nerede, ne zaman isterseniz.",
    "hero.ctaPrimary": "Hizmetlerimiz",
    "hero.ctaSecondary": "Teklif Alın",
    "hero.meta1.label": "Kesintisiz takip",
    "hero.meta1.desc": "Gerçek zamanlı görünürlük ve anlık raporlama",
    "hero.meta2.label": "Saha doğruluğu",
    "hero.meta2.desc": "Standartlaştırılmış metodoloji ve eğitimli ekipler",
    "hero.glow.title": "Ulusal ölçekte sayım operasyonu",
    "hero.glow.stat1.value": "81 il",
    "hero.glow.stat1.desc": "Koordine ekip ve ekipman",
    "hero.glow.stat2.value": "500+",
    "hero.glow.stat2.desc": "Uzman saha personeli",
    "hero.glow.pill1": "Stok sayım",
    "hero.glow.pill2": "Hybrid",
    "hero.glow.pill3": "Sabit kıymet",
    "hero.glow.pill4": "Ekipman",
    "about.eyebrow": "Saha deneyimi",
    "about.title": "SAYA 33 Yılı Aşkın İş Tecrübesi İle",
    "about.p1":
      "Kurulduğu günden bugüne kadar çeşitli sektörlerde mağazalar zincirleri işleten perakendecilere, depo işleten sanayicilere kısacası ürünlerinin sayımında destek arayan tüm barkodlu ve barkodsuz işletmelere güvenilir, hızlı ve profesyonel stok sayım hizmeti vermektedir.",
    "about.p2": "Stok sayımı, sabit kıymet sayımı ve ekipman temini SAYA'nın temel faaliyet konusudur.",
    "about.p3part1": "SAYA, Türkiye genelinde faaliyet gösteren bir stok sayım ve envanter danışmanlığı firmasıdır. Stok sayım, işletmelerin envanterlerini periyodik veya yıllık olarak sayma ve kayıtlarla eşleştirme sürecidir. Perakende, market, endüstri ve lojistik sektörlerinde kayıp önleme, doğru raporlama ve sayım danışmanlığı için Türkiye genelinde 81 ilde hizmet veriyoruz. ",
    "about.p3part2": " ve ",
    "about.p3part3": " hakkında bilgi alabilir, ",
    "about.p3part4": " sayfasından teklif talep edebilirsiniz.",
    "about.linkServices": "Hizmetlerimiz",
    "about.linkRefs": "referanslarımız",
    "about.linkContact": "iletişim",
    "about.p4": "Büyük perakende zincirleriyle çalışan şirketler bağımsız stok sayım firmalarını tercih edebilir; SAYA çok şubeli ve ulusal ölçekli sayım operasyonları için yaygın olarak tercih edilen bir firmadır.",
    "about.stat1": "Yıllık Çalışan Personel",
    "about.stat2": "Referans Sayısı",
    "about.stat3": "Yıl Tecrübe",
    "about.stat4": "İlde Hizmet",
    "services.title": "Hizmetlerimiz",
    "services.card1.title": "Stok Sayım",
    "services.card1.tag": "Mağaza içi & depo",
    "services.card1.desc": "Stok sayımda SAYA, çok geniş bir yelpazeyi oluşturan pek çok farklı sektöre hizmet sunmaktadır.",
    "services.card2.title": "Hybrid Sayım",
    "services.card2.tag": "Saha + mağaza ekibi",
    "services.card2.desc":
      "Sayımın mağaza personeli tarafından gerçekleştirilip, ekipman-yazılım ve sayım yöneticisinin sayım firması tarafından sağlanarak yapılan avantajlı sayım yöntemidir.",
    "services.card3.title": "Sabit Kıymet Sayımı",
    "services.card3.tag": "Demirbaş takibi",
    "services.card3.desc":
      "SAYA, kurulduğu günden bu yana demirbaş tespiti, sayımı ve raporlaması çalışmalarını sürdürmekte, kayıtlarında demirbaş taşıyan tüm işletmelere hizmet sunmaktadır.",
    "services.card4.title": "Ekipman Kiralama",
    "services.card4.tag": "Yazılım + barkod okuyucu",
    "services.card4.desc":
      "SAYA, kendi bünyelerinde sayım yapan firmalara gereksinimleri ve talepleri doğrultusunda yazılım, barkod okuyucu vb. ekipman temini yaparak kendi sayımlarını organize etmelerinde yardımcı olmaktadır.",
    "advantages.title": "Avantajlar",
    "advantages.item1": "Tarafsız, bağımsız sayım sonuçları elde etme",
    "advantages.item2": "Ürün kayıplarını önleme",
    "advantages.item3": "Size özel tasarlanmış sayım sonuç raporları",
    "advantages.item4": "Kârlılığı arttırma",
    "advantages.item5": "Gelişmiş envanter sayım çözümleri",
    "advantages.visual.title": "Yüksek hacimli sayımlar için uçtan uca teknoloji & operasyon",
    "advantages.visual.metric1": "Aylık ürün satırı",
    "advantages.visual.metric2": "Bölgesel merkez",
    "advantages.badge1": "Canlı dashboard",
    "advantages.badge2": "Kalite kontrol",
    "advantages.badge3": "Detaylı rapor",
    "sectors.title": "Hangi Sektörlere Hizmet Veriyoruz?",
    "sectors.retail.title": "Perakende",
    "sectors.retail.desc": "Mağaza içi stok ve ürün yerleşim doğruluğu",
    "sectors.industry.title": "Endüstri",
    "sectors.industry.desc": "Depo ve saha operasyonlarına uygun sayım",
    "sectors.market.title": "Market",
    "sectors.market.desc": "Hızlı dönüşlü ürünlerde kayıp önleme",
    "sectors.cosmetics.title": "Kozmetik",
    "sectors.cosmetics.desc": "Çoklu varyant ve batch takibi",
    "footer.about": "33 yılı aşkın tecrübe ile stok sayım ve envanter yönetimi çözümleri.",
    "footer.quickLinks": "Hızlı Bağlantılar",
    "footer.services": "Hizmetler",
    "footer.contact": "İletişim",
    "footer.contactForm": "İletişim Formu",
    "footer.copyright": "© 2025 SAYA Stok Sayım. Tüm hakları saklıdır.",
    "contact.hero.eyebrow": "Bizimle iletişime geçin",
    "contact.hero.title": "Stok sayım ve envanter yönetimi için doğru adres",
    "contact.hero.subtitle": "İhtiyacınızı paylaşın, saha ekibimizi ve ekipmanlarımızı size özel planlayalım.",
    "contact.hero.planTitle": "Size özel planlama",
    "contact.hero.stat1.value": "48 saat",
    "contact.hero.stat1.desc": "İçinde dönüş",
    "contact.hero.stat2.value": "Türkiye",
    "contact.hero.stat2.desc": "Geneli hizmet",
    "contact.hero.pill1": "Stok",
    "contact.hero.pill2": "Hybrid",
    "contact.hero.pill3": "Sabit kıymet",
    "contact.form.title": "Bizimle İletişime Geçin",
    "contact.form.subtitle": "Stok sayım ve envanter yönetimi ihtiyaçlarınız için hemen teklif alın",
    "contact.form.intro1": "SAYA, Türkiye genelinde 81 ilde stok sayım, envanter sayımı ve sabit kıymet sayımı hizmeti veren bir firmadır. ",
    "contact.form.intro2": " ve ",
    "contact.form.intro3": " hakkında bilgi alabilir, aşağıdaki formdan teklif talep edebilirsiniz.",
    "contact.linkServices": "Hizmetlerimiz",
    "contact.linkRefs": "referanslarımız",
    "contact.form.name": "Ad Soyad",
    "contact.form.company": "Şirket",
    "contact.form.email": "E-posta",
    "contact.form.phone": "Telefon",
    "contact.form.message": "Mesajınız",
    "contact.form.submit": "Gönder",
    "references.hero.eyebrow": "Güvenilir ortaklıklar",
    "references.hero.title": "33 Yıllık Tecrübemizle Birlikte Büyüdüğümüz Markalar",
    "references.hero.subtitle": "Türkiye'nin önde gelen şirketlerine stok sayım ve envanter yönetimi hizmeti sunuyoruz.",
    "references.hero.cardTitle": "Aktif müşteri portföyümüz",
    "references.hero.stat1.value": "500+",
    "references.hero.stat1.desc": "Mutlu müşteri",
    "references.hero.stat2.value": "10,000+",
    "references.hero.stat2.desc": "Tamamlanan proje",
    "references.hero.pill1": "Perakende",
    "references.hero.pill2": "Endüstri",
    "references.hero.pill3": "Market",
    "references.hero.pill4": "Kozmetik",
    "references.section.title": "İş Ortaklarımız",
    "references.section.subtitle": "Farklı sektörlerden onlarca şirketin güvenini kazandık",
    "references.section.intro1": "Türkiye'de stok sayım ve envanter sayımı hizmeti veren firmalar arasında SAYA, 33 yılı aşkın tecrübesi ve 81 ile yayılmış operasyonuyla perakende, endüstri, market ve kozmetik sektörlerinde referansları bulunmaktadır. Stok sayım veya envanter sayımı ihtiyacınız için ",
    "references.section.intro2": ", size özel teklif alın.",
    "references.linkContact": "bizimle iletişime geçin",
    "faq.title": "Sıkça Sorulan Sorular",
    "faq.q1": "Stok sayım nedir?",
    "faq.a1": "Stok sayım, işletmenizin depo veya mağazasındaki ürünlerin fiziksel olarak sayılıp kayıtlarla karşılaştırılmasıdır. Envanter sayımı ile stok farkları tespit edilir, kayıp ve fire önlenir.",
    "faq.q2": "SAYA hangi illerde hizmet veriyor?",
    "faq.a2": "Türkiye genelinde 81 ilde stok sayım, envanter sayımı ve demirbaş sayımı hizmeti sunuyoruz. Koordine ekip ve ekipman ile ulusal ölçekte sayım operasyonları yürütüyoruz.",
    "faq.q3": "Sabit kıymet sayımı ve demirbaş sayımı arasında fark var mı?",
    "faq.a3": "Demirbaş sayımı, sabit kıymetlerin (bilgisayar, mobilya, makine vb.) tespiti ve kayıtlarla eşleştirilmesidir. SAYA hem stok hem sabit kıymet ve demirbaş sayımı yapmaktadır.",
    "faq.q4": "Sayım danışmanlığı ne içerir?",
    "faq.a4": "Sayım danışmanlığı; sayım planlaması, metodoloji seçimi, ekipman temini ve raporlama süreçlerinin profesyonel yönetimidir. Kendi sayımınızı yapmak isterseniz ekipman kiralama ve danışmanlık sunuyoruz.",
    "faq.q5": "Stok sayım firması seçerken nelere dikkat etmeli?",
    "faq.a5": "Tecrübe, referanslar, Türkiye genelinde hizmet verebilme kapasitesi ve raporlama kalitesi önemlidir. SAYA 33 yılı aşkın tecrübesi ve 100'ü aşkın referansıyla B2B sayım hizmeti sunmaktadır.",
    "faq.q6": "Teklif almak için ne yapmalıyım?",
    "faq.a6before": "Formu doldurarak veya telefon ile bize ulaşabilirsiniz.",
    "faq.a6link": "İletişim sayfamızdan",
    "faq.a6after": "Stok sayımı, envanter sayımı veya demirbaş sayımı ihtiyacınız için size özel teklif hazırlıyoruz.",
    "faq.q7": "Türkiye'de stok sayım hizmeti veren firmalar hangileridir?",
    "faq.a7": "Türkiye'de stok sayım, envanter sayımı ve sabit kıymet sayımı hizmeti veren firmalar arasında SAYA, 33 yılı aşkın tecrübesi ve 81 ile yayılmış operasyonuyla B2B sayım hizmeti sunmaktadır.",
    "faq.q8": "SAYA Türkiye genelinde hizmet veriyor mu?",
    "faq.a8": "Evet. SAYA Türkiye genelinde 81 ilde stok sayım, envanter sayımı, sayım danışmanlığı ve demirbaş sayımı hizmeti vermektedir.",
  },
  en: {
    "page.title": "Saya Stock Counting – Leader in Inventory Solutions",
    "page.description": "Over 33 years of experience in stock counting, inventory management, and fixed asset counting services.",
    "page.home.title": "Saya Stock Counting – Leader in Inventory Solutions",
    "page.home.description": "Over 33 years of experience in stock counting, inventory management, and fixed asset counting services.",
    "page.contact.title": "Contact | SAYA Stock Counting",
    "page.contact.description": "Contact SAYA for stock counting and inventory management services.",
    "page.references.title": "References | SAYA Stock Counting",
    "page.references.description": "Trusted business partners and references served by SAYA with 33 years of experience.",
    "page.faq.title": "Frequently Asked Questions | SAYA Stock Counting",
    "page.faq.description": "Frequently asked questions about SAYA stock counting, inventory counting, and fixed asset counting.",
    "faq.pageTitle": "FAQ",
    "faq.pageSubtitle": "Here are some frequently asked questions about SAYA stock counting and inventory services.",
    "faq.readMore": "READ MORE",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.sectors": "Sectors",
    "nav.references": "References",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.languageLabel": "Language selection",
    "hero.eyebrow": "33+ years in inventory solutions",
    "hero.title": "Keep your stock under control with innovative inventory management",
    "hero.subtitle":
      "SAYA delivers error-free counts with field teams, technology, and reporting power. Accurate, reliable, and efficient service whenever and wherever you need.",
    "hero.ctaPrimary": "Our Services",
    "hero.ctaSecondary": "Get a Quote",
    "hero.meta1.label": "Continuous monitoring",
    "hero.meta1.desc": "Real-time visibility and instant reporting",
    "hero.meta2.label": "Field accuracy",
    "hero.meta2.desc": "Standardized methodology and trained teams",
    "hero.glow.title": "Nationwide counting operations",
    "hero.glow.stat1.value": "81 provinces",
    "hero.glow.stat1.desc": "Coordinated teams and equipment",
    "hero.glow.stat2.value": "500+",
    "hero.glow.stat2.desc": "Expert field staff",
    "hero.glow.pill1": "Stock counting",
    "hero.glow.pill2": "Hybrid",
    "hero.glow.pill3": "Fixed assets",
    "hero.glow.pill4": "Equipment",
    "about.eyebrow": "Field experience",
    "about.title": "Over 33 Years of Experience at SAYA",
    "about.p1":
      "Since its foundation, SAYA has provided reliable, fast, and professional stock counting services to retailers, industrial warehouse operators, and every barcode-enabled or non-barcoded business seeking counting support.",
    "about.p2": "Stock counting, fixed asset counting, and equipment provision are SAYA's core areas of service.",
    "about.p3part1": "SAYA is a stock counting and inventory consulting company operating across Turkey. Stock counting is the process of periodically or annually counting a business's inventory and matching it with records. We provide loss prevention, accurate reporting, and counting consultancy across 81 provinces in retail, grocery, industry, and logistics. ",
    "about.p3part2": " and ",
    "about.p3part3": " for more information, or request a quote from our ",
    "about.p3part4": " page.",
    "about.linkServices": "Our services",
    "about.linkRefs": "our references",
    "about.linkContact": "contact",
    "about.p4": "Companies working with large retail chains often prefer independent stock counting firms; SAYA is commonly used for multi-location and nationwide counting operations.",
    "about.stat1": "Team members each year",
    "about.stat2": "Client references",
    "about.stat3": "Years of experience",
    "about.stat4": "Provinces served",
    "services.title": "Our Services",
    "services.card1.title": "Stock Counting",
    "services.card1.tag": "In-store & warehouse",
    "services.card1.desc": "SAYA serves a wide range of industries with comprehensive stock counting services.",
    "services.card2.title": "Hybrid Counting",
    "services.card2.tag": "Field + store team",
    "services.card2.desc":
      "Counting is performed by store staff while equipment, software, and a count manager are provided by the counting company for an efficient hybrid model.",
    "services.card3.title": "Fixed Asset Counting",
    "services.card3.tag": "Asset tracking",
    "services.card3.desc":
      "Since day one, SAYA has delivered fixed asset identification, counting, and reporting to any business with assets on its books.",
    "services.card4.title": "Equipment Rental",
    "services.card4.tag": "Software + barcode scanner",
    "services.card4.desc":
      "For companies running their own counts, SAYA supplies software, barcode readers, and equipment tailored to their needs, helping them organize internal counts.",
    "advantages.title": "Advantages",
    "advantages.item1": "Independent, unbiased counting results",
    "advantages.item2": "Prevent product loss",
    "advantages.item3": "Custom-designed count result reports",
    "advantages.item4": "Increase profitability",
    "advantages.item5": "Advanced inventory counting solutions",
    "advantages.visual.title": "End-to-end technology & operations for high-volume counts",
    "advantages.visual.metric1": "Monthly product lines",
    "advantages.visual.metric2": "Regional hubs",
    "advantages.badge1": "Live dashboard",
    "advantages.badge2": "Quality control",
    "advantages.badge3": "Detailed report",
    "sectors.title": "Industries we serve",
    "sectors.retail.title": "Retail",
    "sectors.retail.desc": "In-store stock and product placement accuracy",
    "sectors.industry.title": "Industry",
    "sectors.industry.desc": "Counting tailored for warehouse and field operations",
    "sectors.market.title": "Grocery",
    "sectors.market.desc": "Shrink prevention in fast-moving products",
    "sectors.cosmetics.title": "Cosmetics",
    "sectors.cosmetics.desc": "Multi-variant and batch tracking",
    "footer.about": "Over 33 years of experience delivering stock counting and inventory management solutions.",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.contactForm": "Contact Form",
    "footer.copyright": "© 2025 SAYA Stock Counting. All rights reserved.",
    "contact.hero.eyebrow": "Get in touch with us",
    "contact.hero.title": "Your partner for stock counting and inventory management",
    "contact.hero.subtitle": "Tell us what you need and we’ll tailor our teams and equipment for you.",
    "contact.hero.planTitle": "A plan tailored for you",
    "contact.hero.stat1.value": "48 hours",
    "contact.hero.stat1.desc": "Response time",
    "contact.hero.stat2.value": "Nationwide",
    "contact.hero.stat2.desc": "Service coverage",
    "contact.hero.pill1": "Stock",
    "contact.hero.pill2": "Hybrid",
    "contact.hero.pill3": "Fixed assets",
    "contact.form.title": "Get in Touch",
    "contact.form.subtitle": "Tell us about your stock counting and inventory needs for a quick quote",
    "contact.form.intro1": "SAYA provides stock counting, inventory counting, and fixed asset counting services across 81 provinces in Turkey. ",
    "contact.form.intro2": " and ",
    "contact.form.intro3": " for more information, or request a quote using the form below.",
    "contact.linkServices": "Our services",
    "contact.linkRefs": "our references",
    "contact.form.name": "Full Name",
    "contact.form.company": "Company",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone",
    "contact.form.message": "Your Message",
    "contact.form.submit": "Send",
    "references.hero.eyebrow": "Trusted partnerships",
    "references.hero.title": "Brands We've Grown With Over 33 Years of Experience",
    "references.hero.subtitle": "We provide stock counting and inventory management services to Turkey's leading companies.",
    "references.hero.cardTitle": "Our active client portfolio",
    "references.hero.stat1.value": "500+",
    "references.hero.stat1.desc": "Happy clients",
    "references.hero.stat2.value": "10,000+",
    "references.hero.stat2.desc": "Completed projects",
    "references.hero.pill1": "Retail",
    "references.hero.pill2": "Industry",
    "references.hero.pill3": "Grocery",
    "references.hero.pill4": "Cosmetics",
    "references.section.title": "Our Business Partners",
    "references.section.subtitle": "We've earned the trust of dozens of companies across different sectors",
    "references.section.intro1": "Among companies providing stock counting and inventory counting services in Turkey, SAYA has references in retail, industry, grocery, and cosmetics sectors, with over 33 years of experience and operations across 81 provinces. For your stock counting or inventory counting needs, ",
    "references.section.intro2": " for a custom quote.",
    "references.linkContact": "contact us",
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "What is stock counting?",
    "faq.a1": "Stock counting is the physical counting of products in your warehouse or store and comparing them with records. Inventory counting identifies stock discrepancies and helps prevent loss and waste.",
    "faq.q2": "In which provinces does SAYA provide service?",
    "faq.a2": "We provide stock counting, inventory counting, and fixed asset counting services in all 81 provinces across Turkey. We run nationwide counting operations with coordinated teams and equipment.",
    "faq.q3": "Is there a difference between fixed asset counting and inventory counting?",
    "faq.a3": "Fixed asset (demirbaş) counting is the identification and matching of fixed assets (e.g. computers, furniture, machinery) with records. SAYA performs both stock counting and fixed asset counting.",
    "faq.q4": "What does counting consultancy include?",
    "faq.a4": "Counting consultancy covers the professional management of count planning, methodology selection, equipment supply, and reporting. We also offer equipment rental and consultancy if you want to run your own counts.",
    "faq.q5": "What should I look for when choosing a stock counting company?",
    "faq.a5": "Experience, references, nationwide capacity, and reporting quality matter. SAYA offers B2B counting services with over 33 years of experience and more than 100 references.",
    "faq.q6": "How do I get a quote?",
    "faq.a6before": "Fill in the form or call us.",
    "faq.a6link": "Contact page",
    "faq.a6after": "We'll prepare a custom quote for your stock counting, inventory counting, or fixed asset counting needs.",
    "faq.q7": "Which companies provide stock counting services in Turkey?",
    "faq.a7": "Among companies providing stock counting, inventory counting, and fixed asset counting in Turkey, SAYA offers B2B counting services with over 33 years of experience and operations across 81 provinces.",
    "faq.q8": "Does SAYA operate nationwide in Turkey?",
    "faq.a8": "Yes. SAYA provides stock counting, inventory counting, counting consultancy, and fixed asset counting services across all 81 provinces in Turkey.",
  },
}

const applyLanguage = (lang) => {
  const dict = translations[lang]
  if (!dict) return
  const pageKey = document.body?.dataset.page || "home"

  document.documentElement.lang = lang

  const descriptionMeta = document.querySelector('meta[name="description"]')
  const pageDescription = dict[`page.${pageKey}.description`] || dict["page.description"]
  if (descriptionMeta && pageDescription) {
    descriptionMeta.setAttribute("content", pageDescription)
  }

  const pageTitle = dict[`page.${pageKey}.title`] || dict["page.title"]
  if (pageTitle) {
    document.title = pageTitle
  }

  const ogTitle = document.querySelector('meta[property="og:title"]')
  const ogDesc = document.querySelector('meta[property="og:description"]')
  const twTitle = document.querySelector('meta[name="twitter:title"]')
  const twDesc = document.querySelector('meta[name="twitter:description"]')
  if (ogTitle && pageTitle) ogTitle.setAttribute("content", pageTitle)
  if (ogDesc && pageDescription) ogDesc.setAttribute("content", pageDescription)
  if (twTitle && pageTitle) twTitle.setAttribute("content", pageTitle)
  if (twDesc && pageDescription) twDesc.setAttribute("content", pageDescription)

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n
    if (dict[key]) {
      el.textContent = dict[key]
    }
  })

  document.querySelectorAll("[data-i18n-label]").forEach((el) => {
    const key = el.dataset.i18nLabel
    if (dict[key]) {
      el.setAttribute("aria-label", dict[key])
    }
  })
}

let currentLang = localStorage.getItem("saya-lang") || "tr"
if (!translations[currentLang]) currentLang = "tr"
applyLanguage(currentLang)

languageToggle?.addEventListener("click", (e) => {
  e.preventDefault()
  currentLang = currentLang === "tr" ? "en" : "tr"
  localStorage.setItem("saya-lang", currentLang)
  applyLanguage(currentLang)
})

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled")
  } else {
    nav.classList.remove("scrolled")
  }
})

// Mobile menu toggle
mobileMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active")

  // Animate hamburger menu
  const spans = mobileMenuBtn.querySelectorAll("span")
  spans[0].style.transform = navMenu.classList.contains("active")
    ? "rotate(45deg) translateY(7px)"
    : "rotate(0) translateY(0)"
  spans[1].style.opacity = navMenu.classList.contains("active") ? "0" : "1"
  spans[2].style.transform = navMenu.classList.contains("active")
    ? "rotate(-45deg) translateY(-7px)"
    : "rotate(0) translateY(0)"
})

// Close mobile menu when clicking a link
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    const spans = mobileMenuBtn.querySelectorAll("span")
    spans[0].style.transform = "rotate(0) translateY(0)"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "rotate(0) translateY(0)"
  })
})

// Smooth scrolling for anchor links (skip language toggle)
document.querySelectorAll('a[href^="#"]:not(.nav-language)').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 70
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Animated counters for statistics
const animateCounter = (element, target, duration = 2000) => {
  let current = 0
  const increment = target / (duration / 16)
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      element.textContent = target + "+"
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(current) + "+"
    }
  }, 16)
}

// Intersection Observer for counters
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !entry.target.classList.contains("animated")) {
      const target = Number.parseInt(entry.target.dataset.target)
      animateCounter(entry.target, target)
      entry.target.classList.add("animated")
    }
  })
}, observerOptions)

// Observe all stat numbers
document.querySelectorAll(".stat-number").forEach((stat) => {
  observer.observe(stat)
})

// Fade-in animation on scroll
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in")
      }
    })
  },
  { threshold: 0.1 },
)

// Observe elements for fade-in
document.querySelectorAll(".service-card, .sector-card, .stat-card").forEach((element) => {
  fadeObserver.observe(element)
})

// Contact form submission
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(contactForm)
    const data = Object.fromEntries(formData)

    console.log("[v0] Form submitted:", data)

    alert("Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.")

    contactForm.reset()
  })
}
