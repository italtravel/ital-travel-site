/* Ital Travel — shared texts, tour data and page logic for all three design options.
   Each page calls IT.init({ places, chips, cards, guides }) with its own HTML templates. */
(function () {
  var WA = "https://wa.me/393281770199";

  var UI = {
    en: {
      tagline: "Italy, in your language", navTours: "Tours", navGuides: "Guides", navJoin: "For guides", navContact: "Contact", navBook: "Book a tour", menu: "Menu",
      stamp: "Children under 14 go free", eyebrow: "Tuscany · Rome · Venice", h1a: "Discover Italy", h1b: "with Armenian‑speaking guides",
      lead: "Private and Group Tours, Events and Special Occasions, Transfers, Wine Tasting and Masterclasses",
      sv1: "Private and group tours", sv2: "Events and special occasions", sv3: "Transfers", sv4: "Wine tasting", sv5: "Masterclasses",
      cta: "Travel with us", waShort: "WhatsApp us", heroJoin: "Become a partner",
      whoTag: "Who we're for", whoH: "Italy feels closer when your guide speaks your language",
      a1t: "Travelers from Armenia", a1d: "Your first trip to Italy or your fifth: we plan the day, and you enjoy it in your own language.", a1c: "See the tours",
      a2t: "Armenians around the world", a2d: "Flying in from Los Angeles, Moscow, Paris or Beirut? Book a guide who will speak Armenian with you.", a2c: "Ask about your dates",
      a3t: "Local guides in Italy", a3d: "Know your city and want to meet travelers from Armenia? Get listed on our website.", a3c: "Apply to join",
      occH: "School trips, events, special occasions", moreServ: "Other services", occP: "Tell us what you're planning, and we'll put together the program, transport and guides.", occC: "Write to us",
      o1t: "Business trips", o1d: "Meetings in Italy and free time well spent: transfers, short city tours and dinners for your team.",
      o2t: "School trips", o2d: "Educational tours for students and teachers, told in Armenian in a way kids remember.",
      o3t: "Events", o3d: "Conferences, festivals or a group celebration: we help with venues, transport and guided visits.",
      o4t: "Special occasions", o4d: "Honeymoon, anniversary, birthday or proposal: a day in Italy planned just for you.",
      placesTag: "Choose the destination", top: "Top tours", allTours: "All tours", toursH: "Tuscany, one of Italy's most beautiful regions",
      intro: "We run cultural and gastro tours in Tuscany: Florence, the cradle of the Renaissance; Pisa; fairy-tale Siena; mysterious San Gimignano; Chianti wine country and more. We also guide city tours in Rome and Venice.",
      placesHint: "Tap a city to see its tours",
      toursTag: "Tours & experiences", toursH2: "Pick your day in Italy", adults: "Adults in your group", adultsNote: "Children under 14 go free",
      euro: "Prices are in euros. The final price for private tours, the cooking class and transfers depends on the option you choose.", euroShort: "Prices are in euros",
      all: "All", tr: "Transfers", kt: "Tour", ke: "Experience", kr: "Transfer",
      dur: "Duration", hrs: "hours", show: "Show itinerary", hide: "Hide itinerary", onReq: "Price on request", req: "Request this tour", from: "from",
      kids: "Children under 14 go free.", total: "Total for {n} adults", per: "per person",
      howTag: "How it works", howH: "Three steps to your tour",
      s1t: "Choose a tour", s1d: "Browse tours in Tuscany, Rome and Venice, or ask us for a custom day.",
      s2t: "Send your dates", s2d: "Write to us on WhatsApp with your dates and group size.",
      s3t: "Meet your guide", s3d: "Your Armenian-speaking guide meets you in Italy, and the day begins.",
      guidesTag: "Our team", guidesH: "Our team", role: "Armenian-speaking guide", spotT: "Your name here", spotD: "Are you a local guide in Italy? Join us.",
      joinTag: "For partners", joinH: "Do you work in tourism in Italy? Become our partner",
      joinP: "We're looking for local guides, restaurants, event planners and other partners in Italy who want to work with us and welcome travelers from Armenia and around the world. Tell us about yourself and we'll get in touch.",
      p1: "Meet travelers from Armenia and around the world", p2: "Get your profile on our website", p3: "We contact you to talk through the details",
      fName: "Your name", gCity: "City or region in Italy", pName: "Your name or business", gLang: "What do you do?", gKindPh: "Guide, restaurant, events…", gMsg: "Tell us about your work and what you offer", gSend: "Apply via WhatsApp",
      waNote: "Opens WhatsApp with your message ready to send.",
      contactTag: "Contact", contactH: "Request a tour", contactP: "Tell us your dates and group size. We'll get back to you.",
      am: "Armenia", it: "Italy · WhatsApp", copy: "Copy", copied: "Copied",
      fAdults: "Adults (14+)", fTour: "Tour or service", fMsg: "Dates, group size, questions", send: "Send request via WhatsApp", other: "Something else / custom tour",
      optAll: "All design options", dragHint: "drag the photos ↖",
      partnerTag: "Partner program", partnerH: "Recommend our tours and earn 10%",
      partnerP: "Share your personal link with friends, family or followers. When someone books through it and the tour takes place, you earn 10% of the tour price.",
      partnerBtn: "Become a partner", partnerFoot: "Partner program",
      navGroups: "Large groups", viewProfile: "View profile",
      tag: { sell: "Likely to sell out", best: "Best seller", "new": "New" }, freeCancel: "Free cancellation", availFrom: "Available from", for2: "for 2 people", lang_hy: "Armenian", lang_en: "English", langs: "Languages",
      freeCancelD: "Plans changed? Cancel at no cost", pickup: "Pickup from your hotel", pickupD: "We meet you at your hotel", noPickup: "Hotel pickup not included", noPickupD: "We meet at the meeting point", highlights: "Highlights",
      curNote: "Prices are set in euros. Dram and dollar prices are approximate, at today's exchange rate.",
      ckText: "With your OK, we count visits and see how the site is used (Microsoft Clarity), and remember which partner sent you. No advertising.",
      ckAll: "Accept", ckNec: "Only necessary", ckMore: "Cookie Policy", fCookiePol: "Cookie Policy", fCookies: "Cookie settings",
      igTag: "On Instagram", igH: "Fresh from Italy", igFollow: "Follow @ital_travel_", igBio: "Armenian-speaking tours in Italy · Florence · Rome · Tuscany · Venice", igOpen: "Open on Instagram",
      sLoc: "Location", sType: "Activity type", sDate: "Date", sPeople: "Participants", sGo: "Search",
      sAnyLoc: "All locations", sAnyType: "All activities", sTours: "Tours", sExp: "Experiences", sTr: "Transfers",
      sNone: "No activities match your search.", sReset: "Show all activities",
      grpH: "Tours for large groups",
      grpP: "Travelling with 10 or more people: family, friends, a school, church or company group? Tell us about your group and we'll plan the day and send you an offer.",
      gp1: "One Armenian-speaking guide for the whole group", gp2: "A route planned around your dates and interests", gp3: "A group price sent to you on WhatsApp",
      qSize: "Group size", qDate: "Dates", qCity: "Where in Italy", qAny: "Not sure yet / several cities", qMsg: "What would you like to see? Any questions", qSend: "Send group request via WhatsApp",
      fAbout: "Cultural and gastro tours in Italy, led by Armenian-speaking guides. For travelers from Armenia and around the world.", fContact: "Contact", fHelp: "Help", fCompany: "Company",
      fBlog: "Blog", fBook: "Free info book", fManage: "Manage my booking", fFaq: "FAQ", fPartner: "Partner with us", fTerms: "Terms & Conditions", fPrivacy: "Privacy Policy", fRights: "All rights reserved.",
      fTag: "Italy's stories,\ntold in Armenian.", fWhere: "Florence · Rome · Tuscany · Venice", fToursH: "Tours", fAll: "All tours", fGroups: "Large groups", fGuides: "Our team", fWa: "Write on WhatsApp",
      fShort: { t3: "Rome walking tour", t7: "Vatican tour", t19: "Vatican + Museums", t17: "Rome & the Vatican", t1: "Florence tour", t15: "Florence by car", t16: "Fiat 500 tour", t9: "Siena & Chianti", t18: "Monteriggioni & Chianti", t10: "San Gimignano, half day", t11: "Val d'Orcia", t12: "Pisa & Lucca", t13: "Cinque Terre & Pisa", t14: "Cinque Terre", t6: "More Tuscany tours", t5: "Cooking class", t4: "Venice walk", t8: "San Lazzaro island", tr1: "Rome airport transfer" }
    },
    hy: {
      tagline: "Իտալիա՝ ձեր լեզվով", navTours: "Տուրեր", navGuides: "Էքսկուրսավարներ", navJoin: "Էքսկուրսավարների համար", navContact: "Կապ", navBook: "Պատվիրել տուր", menu: "Մենյու",
      stamp: "Մինչև 14 տարեկան երեխաները՝ անվճար", eyebrow: "Տոսկանա · Հռոմ · Վենետիկ", h1a: "Բացահայտեք Իտալիան", h1b: "հայախոս էքսկուրսավարների հետ",
      lead: "Անհատական և խմբային տուրեր, միջոցառումներ և հատուկ առիթներ, տրանսֆերներ, գինու համտես և վարպետության դասեր",
      sv1: "Անհատական և խմբային տուրեր", sv2: "Միջոցառումներ և հատուկ առիթներ", sv3: "Տրանսֆերներ", sv4: "Գինու համտես", sv5: "Վարպետության դասեր",
      cta: "Ճանապարհորդեք մեզ հետ", waShort: "Գրել WhatsApp-ով", heroJoin: "Դառնալ գործընկեր",
      whoTag: "Ում համար ենք", whoH: "Իտալիան ավելի մոտ է, երբ էքսկուրսավարը խոսում է ձեր լեզվով",
      a1t: "Ճանապարհորդներ Հայաստանից", a1d: "Առաջին անգամ եք գալիս Իտալիա, թե հինգերորդ, մենք կկազմակերպենք օրը, իսկ դուք կվայելեք այն ձեր մայրենի լեզվով։", a1c: "Դիտել տուրերը",
      a2t: "Հայերն ամբողջ աշխարհում", a2d: "Գալիս եք Լոս Անջելեսից, Մոսկվայից, Փարիզից, թե Բեյրութից։ Պատվիրեք էքսկուրսավար, ով ձեզ հետ կխոսի հայերեն։", a2c: "Հարցնել ամսաթվերի մասին",
      a3t: "Տեղացի էքսկուրսավարներ Իտալիայում", a3d: "Լավ գիտեք ձեր քաղաքը և ցանկանում եք հանդիպել ճանապարհորդների Հայաստանից։ Ներկայացվեք մեր կայքում։", a3c: "Դիմել",
      occH: "Դպրոցական էքսկուրսիաներ, միջոցառումներ, հատուկ առիթներ", moreServ: "Այլ ծառայություններ", occP: "Պատմեք, թե ինչ եք ծրագրում, և մենք կկազմենք ծրագիրը, տրանսպորտը և կգտնենք էքսկուրսավարներ։", occC: "Գրել մեզ",
      o1t: "Գործնական ուղևորություններ", o1d: "Հանդիպումներ Իտալիայում և լավ անցկացրած ազատ ժամանակ՝ տրանսֆերներ, կարճ քաղաքային տուրեր և ընթրիքներ ձեր թիմի համար։",
      o2t: "Դպրոցական էքսկուրսիաներ", o2d: "Կրթական տուրեր աշակերտների և ուսուցիչների համար՝ հայերենով և այնպես, որ երեխաները հիշեն։",
      o3t: "Միջոցառումներ", o3d: "Կոնֆերանսներ, փառատոներ կամ խմբային տոնակատարություն․ օգնում ենք վայրի, տրանսպորտի և էքսկուրսիաների հարցում։",
      o4t: "Հատուկ առիթներ", o4d: "Մեղրամիս, տարեդարձ, ծննդյան օր կամ ամուսնության առաջարկ․ մի օր Իտալիայում՝ հատուկ ձեզ համար։",
      placesTag: "Ընտրեք ուղղությունը", top: "Լավագույն տուրեր", allTours: "Բոլոր տուրերը", toursH: "Տոսկանա՝ Իտալիայի ամենագեղեցիկ մարզերից մեկը",
      intro: "Մենք իրականացնում ենք մշակութային և գաստրո տուրեր Տոսկանայում։ Միասին կայցելենք Վերածննդի օրրան Ֆլորենցիա, հրաշքների քաղաք Պիզա, հեքիաթային Սիենա, առեղծվածային Սան Ջիմինյանո, գինեգործության արքայություն Կյանտի և այլ վայրեր։ Նաև անցկացնում ենք քաղաքային տուրեր Հռոմում և Վենետիկում։",
      placesHint: "Սեղմեք քաղաքի վրա՝ նրա տուրերը տեսնելու համար",
      toursTag: "Տուրեր և փորձառություններ", toursH2: "Ընտրեք ձեր օրը Իտալիայում", adults: "Մեծահասակներ ձեր խմբում", adultsNote: "Մինչև 14 տարեկան երեխաները՝ անվճար",
      euro: "Գները նշված են եվրոյով։ Անհատական տուրերի, խոհարարական դասընթացի և տրանսֆերների վերջնական գինը կախված է ձեր ընտրած տարբերակից։", euroShort: "Գները նշված են եվրոյով",
      all: "Բոլորը", tr: "Տրանսֆերներ", kt: "Տուր", ke: "Փորձառություն", kr: "Տրանսֆեր",
      dur: "Տևողությունը", hrs: "ժամ", show: "Տեսնել երթուղին", hide: "Թաքցնել երթուղին", onReq: "Գինը՝ հարցման դեպքում", req: "Պատվիրել", from: "սկսած",
      kids: "Մինչև 14 տարեկան երեխաները՝ անվճար։", total: "Ընդամենը {n} մեծահասակի համար", per: "մեկ անձի համար",
      howTag: "Ինչպես է աշխատում", howH: "Երեք քայլ դեպի ձեր տուրը",
      s1t: "Ընտրեք տուրը", s1d: "Դիտեք տուրերը Տոսկանայում, Հռոմում և Վենետիկում կամ խնդրեք անհատական առաջարկ։",
      s2t: "Ուղարկեք ամսաթվերը", s2d: "Գրեք մեզ WhatsApp-ով՝ նշելով ամսաթվերը և խմբի չափը։",
      s3t: "Հանդիպեք էքսկուրսավարին", s3d: "Ձեր հայախոս էքսկուրսավարը կդիմավորի ձեզ Իտալիայում, և օրը կսկսվի։",
      guidesTag: "Մեր թիմը", guidesH: "Մեր թիմը", role: "Հայախոս էքսկուրսավար", spotT: "Այստեղ կարող է լինել ձեր անունը", spotD: "Տեղացի էքսկուրսավար եք Իտալիայում։ Միացեք մեզ։",
      joinTag: "Գործընկերների համար", joinH: "Աշխատո՞ւմ եք Իտալիայում զբոսաշրջության ոլորտում։ Դարձեք մեր գործընկերը",
      joinP: "Մենք փնտրում ենք տեղացի էքսկուրսավարների, ռեստորանների, միջոցառումների կազմակերպիչների և այլ գործընկերների Իտալիայում, ովքեր ցանկանում են աշխատել մեզ հետ և ընդունել Հայաստանից ու աշխարհի տարբեր երկրներից ժամանող ճանապարհորդների։ Պատմեք ձեր մասին, և մենք կկապնվենք ձեզ հետ։",
      p1: "Հանդիպեք ճանապարհորդների Հայաստանից և աշխարհի տարբեր երկրներից", p2: "Ձեր էջը մեր կայքում", p3: "Մենք կկապնվենք ձեզ հետ՝ մանրամասները քննարկելու համար",
      fName: "Ձեր անունը", gCity: "Իտալիայի քաղաքը կամ մարզը", pName: "Ձեր անունը կամ ընկերությունը", gLang: "Ինչո՞վ եք զբաղվում", gKindPh: "Էքսկուրսավար, ռեստորան…", gMsg: "Պատմեք ձեր աշխատանքի և առաջարկների մասին", gSend: "Դիմել WhatsApp-ով",
      waNote: "Կբացվի WhatsApp-ը՝ պատրաստի հաղորդագրությամբ։",
      contactTag: "Կապ", contactH: "Պատվիրել տուր", contactP: "Գրեք մեզ ձեր ամսաթվերը և խմբի չափը, և մենք կպատասխանենք։",
      am: "Հայաստան", it: "Իտալիա · WhatsApp", copy: "Պատճենել", copied: "Պատճենված է",
      fAdults: "Մեծահասակներ (14+)", fTour: "Տուր կամ ծառայություն", fMsg: "Ամսաթվեր, խմբի չափը, հարցեր", send: "Ուղարկել հայտը WhatsApp-ով", other: "Այլ / անհատական տուր",
      optAll: "Դիզայնի բոլոր տարբերակները", dragHint: "տեղաշարժեք լուսանկարները ↖",
      partnerTag: "Գործընկերային ծրագիր", partnerH: "Խորհուրդ տվեք մեր տուրերը և վաստակեք 10%",
      partnerP: "Կիսվեք ձեր անձնական հղումով ընկերների, հարազատների կամ հետևորդների հետ։ Երբ որևէ մեկն ամրագրի այդ հղումով, և տուրը կայանա, դուք կստանաք տուրի գնի 10%-ը։",
      partnerBtn: "Դառնալ գործընկեր", partnerFoot: "Գործընկերային ծրագիր",
      navGroups: "Մեծ խմբեր", viewProfile: "Դիտել էջը",
      tag: { sell: "Շուտով կսպառվի", best: "Ամենապահանջված", "new": "Նոր" }, freeCancel: "Անվճար չեղարկում", availFrom: "Սկսած", for2: "2 անձի համար", lang_hy: "Հայերեն", lang_en: "Անգլերեն", langs: "Լեզուներ",
      freeCancelD: "Ծրագրերը փոխվե՞լ են՝ չեղարկեք անվճար", pickup: "Դիմավորում հյուրանոցից", pickupD: "Կդիմավորենք ձեզ ձեր հյուրանոցում", noPickup: "Դիմավորում հյուրանոցից՝ ներառված չէ", noPickupD: "Հանդիպում ենք հանդիպման վայրում", highlights: "Առանձնահատկություններ",
      curNote: "Գները սահմանված են եվրոյով։ Դրամով և դոլարով գները մոտավոր են՝ այսօրվա փոխարժեքով։",
      ckText: "Ձեր համաձայնությամբ մենք հաշվում ենք այցելությունները և տեսնում, թե ինչպես է օգտագործվում կայքը (Microsoft Clarity), ինչպես նաև հիշում ենք, թե որ գործընկերն է ձեզ ուղարկել։ Ոչ մի գովազդ։",
      ckAll: "Ընդունել", ckNec: "Միայն անհրաժեշտը", ckMore: "Cookie-ների քաղաքականություն", fCookiePol: "Cookie-ների քաղաքականություն", fCookies: "Cookie-ների կարգավորումներ",
      igTag: "Instagram-ում", igH: "Թարմ կադրեր Իտալիայից", igFollow: "Հետևել @ital_travel_", igBio: "Հայալեզու տուրեր Իտալիայում · Ֆլորենցիա · Հռոմ · Տոսկանա · Վենետիկ", igOpen: "Բացել Instagram-ում",
      sLoc: "Վայրը", sType: "Տեսակը", sDate: "Ամսաթիվը", sPeople: "Մասնակիցներ", sGo: "Որոնել",
      sAnyLoc: "Բոլոր վայրերը", sAnyType: "Բոլոր տեսակները", sTours: "Տուրեր", sExp: "Փորձառություններ", sTr: "Տրանսֆերներ",
      sNone: "Ձեր որոնմանը համապատասխան առաջարկ չգտնվեց։", sReset: "Ցույց տալ բոլորը",
      grpH: "Տուրեր մեծ խմբերի համար",
      grpP: "Ճամփորդո՞ւմ եք 10 և ավելի հոգով՝ ընտանիքով, ընկերներով, դպրոցական, եկեղեցական կամ աշխատանքային խմբով։ Պատմեք ձեր խմբի մասին, և մենք կկազմենք օրվա ծրագիրը և կուղարկենք առաջարկ։",
      gp1: "Մեկ հայախոս էքսկուրսավար ամբողջ խմբի համար", gp2: "Երթուղի՝ ձեր ամսաթվերին և հետաքրքրություններին համապատասխան", gp3: "Խմբային գինը կուղարկենք WhatsApp-ով",
      qSize: "Խմբի չափը", qDate: "Ամսաթվեր", qCity: "Իտալիայի որ վայրում", qAny: "Դեռ չգիտեմ / մի քանի քաղաք", qMsg: "Ինչ կցանկանայիք տեսնել, հարցեր", qSend: "Ուղարկել խմբային հայտը WhatsApp-ով",
      fAbout: "Մշակութային և գաստրո տուրեր Իտալիայում՝ հայախոս էքսկուրսավարների հետ։ Ճանապարհորդների համար Հայաստանից և աշխարհի տարբեր երկրներից։", fContact: "Կապ", fHelp: "Օգնություն", fCompany: "Ընկերություն",
      fBlog: "Բլոգ", fBook: "Անվճար տեղեկատու գիրք", fManage: "Կառավարել ամրագրումը", fFaq: "Հաճախ տրվող հարցեր", fPartner: "Համագործակցել մեզ հետ", fTerms: "Պայմաններ և դրույթներ", fPrivacy: "Գաղտնիության քաղաքականություն", fRights: "Բոլոր իրավունքները պաշտպանված են։",
      fTag: "Իտալիայի պատմությունները՝\nհայերենով։", fWhere: "Ֆլորենցիա · Հռոմ · Տոսկանա · Վենետիկ", fToursH: "Տուրեր", fAll: "Բոլոր տուրերը", fGroups: "Մեծ խմբեր", fGuides: "Մեր թիմը", fWa: "Գրել WhatsApp-ով",
      fShort: { t3: "Զբոսատուր Հռոմում", t7: "Տուր Վատիկանում", t19: "Վատիկան և թանգարաններ", t17: "Հռոմ և Վատիկան", t1: "Տուր Ֆլորենցիայով", t15: "Ֆլորենցիա մեքենայով", t16: "Fiat 500 տուր", t9: "Սիենա և Կյանտի", t18: "Մոնտերիջոնի և Կյանտի", t10: "Սան Ջիմինյանո՝ կես օր", t11: "Վալ դ'Օրչա", t12: "Պիզա և Լուկկա", t13: "Չինկվե Տերե և Պիզա", t14: "Չինկվե Տերե", t6: "Այլ տուրեր Տոսկանայում", t5: "Խոհարարական դասընթաց", t4: "Զբոսանք Վենետիկում", t8: "Սուրբ Ղազար կղզի", tr1: "Տրանսֆեր Հռոմում" }
    }
  };
  UI.en.ppl = function (n) { return n === 5 ? "5+ people, each" : n + " people"; };
  UI.hy.ppl = function (n) { return n === 5 ? "5 և ավել, յուրաքանչյուրը" : n + " անձ"; };
  UI.en.waReq = function (name, tour, n, msg) { return "Hello! My name is " + (name || "…") + ". I would like to request: " + tour + ". Adults: " + n + ". " + msg; };
  UI.hy.waReq = function (name, tour, n, msg) { return "Բարև, իմ անունը " + (name || "…") + " է։ Ցանկանում եմ պատվիրել՝ " + tour + "։ Մեծահասակներ՝ " + n + "։ " + msg; };
  UI.en.waJoin = "Hello! I would like to become a partner of Ital Travel. ";
  UI.hy.waJoin = "Բարև, ես ցանկանում եմ դառնալ Ital Travel-ի գործընկեր։ ";
  UI.en.waGroup = "Hello! I would like to order a tour for a large group. ";
  UI.hy.waGroup = "Բարև, ցանկանում եմ պատվիրել տուր մեծ խմբի համար։ ";
  UI.en.acts = function (n) { return n === 1 ? "1 activity" : n + " activities"; };
  UI.hy.acts = function (n) { return n + " առաջարկ"; };

  // Company details for the footer. Fill in the empty ones and they appear automatically.
  // The business behind Ital Travel (sole proprietor). The bank account is not shown on the site.
  var COMPANY = {
    email: "ital.travel.guide@gmail.com",
    hy: { legal: "ԱՁ Գայանե Այվազյան", reg: "ՀՎՀՀ՝ 82592899" },
    en: { legal: "Sole proprietor Gayane Ayvazyan", reg: "Tax ID (ՀՎՀՀ): 82592899" }
  };

  var CITY = {
    florence: { en: "Florence", hy: "Ֆլորենցիա", it: "Firenze" },
    tuscany: { en: "Tuscany", hy: "Տոսկանա", it: "Toscana" },
    rome: { en: "Rome", hy: "Հռոմ", it: "Roma" },
    vatican: { en: "Vatican", hy: "Վատիկան", it: "Vaticano" },
    venice: { en: "Venice", hy: "Վենետիկ", it: "Venezia" },
    transfer: { en: "Transfers", hy: "Տրանսֆերներ", it: "Transfer" }
  };

  var PLACES = [
    { id: "venice", f: "venice", it: "Venezia", en: ["Venice", "The most romantic city"], hy: ["Վենետիկ", "Ամենառոմանտիկ քաղաքը"] },
    { id: "florence", f: "florence", it: "Firenze", en: ["Florence", "Cradle of the Renaissance"], hy: ["Ֆլորենցիա", "Վերածննդի օրրան"] },
    { id: "pisa", f: "tuscany", it: "Pisa", en: ["Pisa", "City of wonders"], hy: ["Պիզա", "Հրաշքների քաղաք"] },
    { id: "cinque", f: "tuscany", it: "Cinque Terre", en: ["Cinque Terre", "Five villages by the sea"], hy: ["Չինկվե Տերե", "Հինգ գյուղ ծովափին"] },
    { id: "sangi", f: "tuscany", it: "San Gimignano", en: ["San Gimignano", "Mysterious towers"], hy: ["Սան Ջիմինյանո", "Առեղծվածային աշտարակներ"] },
    { id: "siena", f: "tuscany", it: "Siena", en: ["Siena", "Fairy-tale city"], hy: ["Սիենա", "Հեքիաթային քաղաք"] },
    { id: "chianti", f: "tuscany", it: "Chianti", en: ["Chianti", "Wine country"], hy: ["Կյանտի", "Գինեգործության արքայություն"] },
    { id: "rome", f: "rome", it: "Roma", en: ["Rome", "City tour and the Vatican"], hy: ["Հռոմ", "Քաղաքային տուր և Վատիկան"] }
  ];

  function G(h, a, x) { return { h: h, a: a, x: x || [] }; }
  var TOURS = [
    // One Florence walking tour. The two extra destinations cost extra: pricesX is the price with them
    // (the same as the old "tour 2", which the booking system still uses for these bookings).
    { id: "t1", city: "florence", kind: "t", dur: "2.5–3.5", prices: [140, 180, 200, 40], pricesX: [150, 190, 220, 50],
      en: { t: "Florence cultural walking tour", d: "See the main sights and hidden corners of Florence with an Armenian-speaking guide.",
        g: [G("", ["Santa Maria Novella church", "Officina Santa Maria Novella pharmacy", "Duomo, Santa Maria del Fiore", "Piazza della Repubblica", "Casa di Dante (Dante's house)", "Porcellino (the wild boar statue)", "Piazza della Signoria", "Uffizi Gallery", "Ponte Vecchio", "Palazzo Pitti"]),
            G("Extra destinations (additional payment)", ["San Miniato church (Saint Minas)", "Piazzale Michelangelo, with a wide view of the city"],
              ["Extra payment: +€10 for 2 or 3 people, +€20 for 4 people, +€10 per person from 5 people. Adds about 1 hour.", "Taxi to the extra destinations is available: €20–30 per car for 3–4 people."])],
        n: ["A walking tour. No museum interiors are planned."] },
      hy: { t: "Մշակութային զբոսատուր Ֆլորենցիայով", d: "Բացահայտեք Ֆլորենցիան հայախոս գիդի ուղեկցությամբ՝ քաղաքի գլխավոր և թաքնված անկյունները։",
        g: [G("", ["Սանտա Մարիա Նովելլա (Santa Maria Novella)", "Սանտա Մարիա Նովելլա դեղատուն (Officina Santa Maria Novella)", "Դուոմո՝ Սանտա Մարիա դել Ֆիորե", "Հանրապետության հրապարակ (Piazza della Repubblica)", "Դանթեի տուն (Casa di Dante)", "Վայրի խոզուկ (Porcellino)", "Սինյորիայի հրապարակ (Piazza della Signoria)", "Ուֆֆիցի պատկերասրահ (Galleria degli Uffizi)", "Հին կամուրջ (Ponte Vecchio)", "Պիտտի դղյակ (Palazzo Pitti)"]),
            G("Լրացուցիչ վայրեր (հավելյալ վճարով)", ["San Miniato / Սուրբ Մինաս եկեղեցի", "Միքելանջելոյի հրապարակ (հիասքանչ տեսարան քաղաքի վրա)"],
              ["Հավելյալ վճար՝ +10 եվրո 2 կամ 3 անձի համար, +20 եվրո 4 անձի համար, +10 եվրո յուրաքանչյուր անձի համար՝ 5 անձից սկսած։ Տուրը երկարում է մոտ 1 ժամով։", "Լրացուցիչ վայրեր հասնելու համար հասանելի է տաքսի՝ 20–30 եվրո մեկ մեքենա, 3–4 անձ։"])],
        n: ["Զբոսանքը ոտքով է, թանգարանների ներսում այցելություններ չեն նախատեսված։"] } },
    { id: "t5", city: "florence", kind: "e", from: 75, dur: "2.5",
      en: { t: "Authentic cooking class in Florence", d: "An authentic cooking experience in Florence, with dishes made from scratch.",
        g: [G("Class options", ["Group class: fresh pasta, ravioli & tiramisù, with unlimited wine", "Private pasta making class, at the start time you choose", "Panoramic tour + class"])], n: [] },
      hy: { t: "Իսկական խոհարարական փորձ Ֆլորենցիայում", d: "Իսկական խոհարարական դասընթաց Ֆլորենցիայում՝ ուտեստները պատրաստվում են զրոյից։",
        g: [G("Դասընթացի տարբերակներ", ["Խմբային դասընթաց՝ թարմ մակարոնեղեն, ռավիոլի և տիրամիսու, անսահմանափակ գինով", "Անհատական մակարոնեղենի դասընթաց՝ ձեր ընտրած ժամին", "Պանորամային տուր + դասընթաց"])], n: [] } },
    { id: "t6", city: "tuscany", kind: "t", prices: [100], fromPP: true, max: 7,
      en: { t: "More private tours in Tuscany", d: "More private tours across Tuscany, most of them with wine tasting.",
        g: [G("Full-day tours (9 hours unless noted)", ["San Gimignano & Volterra, with wine tasting", "Pisa, San Gimignano & Chianti, with wine tasting", "Pisa & Bolgheri, with wine tasting", "Castellina in Chianti & Montefioralle, with wine tasting: full day"])], n: ["Private tour by minivan, up to 7 people.", "Wine tasting and lunch at the wineries are not included in the tour price and are paid separately on site: wine tasting €35, lunch with wine tasting €65 per person."] },
      hy: { t: "Այլ անհատական տուրեր Տոսկանայում", d: "Այլ անհատական տուրեր Տոսկանայով, դրանց մեծ մասը՝ գինու համտեսով։",
        g: [G("Մեկօրյա տուրեր (9 ժամ, եթե այլ բան նշված չէ)", ["Սան Ջիմինյանո և Վոլտերա՝ գինու համտեսով", "Պիզա, Սան Ջիմինյանո և Կյանտի՝ գինու համտեսով", "Պիզա և Բոլգերի՝ գինու համտեսով", "Կաստելինա ին Կյանտի և Մոնտեֆիորալե՝ գինու համտեսով՝ ամբողջ օր"])], n: ["Անհատական տուր մինիվենով՝ մինչև 7 անձ։", "Գինու համտեսը և ճաշը գինեգործարաններում ներառված չեն տուրի արժեքի մեջ և վճարվում են առանձին՝ տեղում․ գինու համտես՝ 35 եվրո, ճաշ գինու համտեսով՝ 65 եվրո մեկ անձի համար։"] } },
    // Florence by car: two special tours (price on request)
    { id: "t15", city: "florence", kind: "t",
      en: { t: "Private car tour: Florence & San Gimignano", d: "A panoramic drive around Florence with stops at Piazzale Michelangelo and San Miniato, then San Gimignano with lunch and wine tasting.",
        g: [G("Route", ["Pickup from your hotel in Florence", "Panoramic drive through Florence", "Piazzale Michelangelo", "San Miniato Basilica", "San Gimignano: lunch and wine tasting"])], n: [] },
      hy: { t: "Մեքենայով անհատական տուր՝ Ֆլորենցիա և Սան Ջիմինյանո", d: "Պանորամային շրջայց Ֆլորենցիայով՝ կանգառներով Միքելանջելոյի հրապարակում և Սան Մինիատոյի բազիլիկայում, ապա Սան Ջիմինյանո՝ ճաշով և գինու համտեսով։",
        g: [G("Երթուղի", ["Դիմավորում Ֆլորենցիայի ձեր հյուրանոցից", "Պանորամային շրջայց Ֆլորենցիայով", "Միքելանջելոյի հրապարակ", "Սան Մինիատոյի բազիլիկա", "Սան Ջիմինյանո՝ ճաշ և գինու համտես"])], n: [] } },
    { id: "t16", city: "florence", kind: "e",
      en: { t: "Fiat 500 cabrio tour of Florence", d: "A ride in a 1967 Fiat 500 Jolly Spiaggina cabrio, with Piazzale Michelangelo and the Florentine hills or Fiesole.",
        g: [G("Route", ["Pickup from your hotel in Florence", "Piazzale Michelangelo", "The Florentine hills or Fiesole"])], n: [] },
      hy: { t: "Fiat 500 կաբրիոլետով տուր Ֆլորենցիայում", d: "Զբոսանք 1967 թվականի Fiat 500 Jolly Spiaggina կաբրիոլետով՝ Միքելանջելոյի հրապարակով և ֆլորենտինյան բլուրներով կամ Ֆիեզոլեով։",
        g: [G("Երթուղի", ["Դիմավորում Ֆլորենցիայի ձեր հյուրանոցից", "Միքելանջելոյի հրապարակ", "Ֆլորենտինյան բլուրներ կամ Ֆիեզոլե"])], n: [] } },
    // Tuscany day trips by minivan from Florence (up to 7 people), each its own tour. €100 per person for now.
    { id: "t9", city: "tuscany", kind: "t", dur: "9", prices: [100], fromPP: true, max: 7,
      en: { t: "Siena, San Gimignano & Chianti", d: "A full day in the heart of Tuscany: medieval Siena, the towers of San Gimignano and the Chianti wine hills.",
        g: [G("Route", ["Pickup from your hotel in Florence", "Siena", "San Gimignano", "Chianti"])], n: ["Private tour by minivan, up to 7 people.", "Wine tasting and lunch at the wineries are not included in the tour price and are paid separately on site: wine tasting €35, lunch with wine tasting €65 per person."] },
      hy: { t: "Սիենա, Սան Ջիմինյանո և Կյանտի", d: "Մեկ օր Տոսկանայի սրտում՝ միջնադարյան Սիենա, Սան Ջիմինյանոյի աշտարակները և Կյանտիի գինու բլուրները։",
        g: [G("Երթուղի", ["Դիմավորում Ֆլորենցիայի ձեր հյուրանոցից", "Սիենա", "Սան Ջիմինյանո", "Կյանտի"])], n: ["Անհատական տուր մինիվենով՝ մինչև 7 անձ։", "Գինու համտեսը և ճաշը գինեգործարաններում ներառված չեն տուրի արժեքի մեջ և վճարվում են առանձին՝ տեղում․ գինու համտես՝ 35 եվրո, ճաշ գինու համտեսով՝ 65 եվրո մեկ անձի համար։"] } },
    { id: "t18", city: "tuscany", kind: "t", dur: "9", prices: [100], fromPP: true, max: 7,
      en: { t: "San Gimignano, Monteriggioni & Chianti", d: "A full day of medieval Tuscany: the towers of San Gimignano, the walled village of Monteriggioni and the Chianti wine hills.",
        g: [G("Route", ["Pickup from your hotel in Florence", "San Gimignano", "Monteriggioni", "Chianti"])], n: ["Private tour by minivan, up to 7 people.", "Wine tasting and lunch at the wineries are not included in the tour price and are paid separately on site: wine tasting €35, lunch with wine tasting €65 per person."] },
      hy: { t: "Սան Ջիմինյանո, Մոնտերիջոնի և Կյանտի", d: "Մեկ օր միջնադարյան Տոսկանայում՝ Սան Ջիմինյանոյի աշտարակները, պարիսպներով շրջապատված Մոնտերիջոնի գյուղը և Կյանտիի գինու բլուրները։",
        g: [G("Երթուղի", ["Դիմավորում Ֆլորենցիայի ձեր հյուրանոցից", "Սան Ջիմինյանո", "Մոնտերիջոնի", "Կյանտի"])], n: ["Անհատական տուր մինիվենով՝ մինչև 7 անձ։", "Գինու համտեսը և ճաշը գինեգործարաններում ներառված չեն տուրի արժեքի մեջ և վճարվում են առանձին՝ տեղում․ գինու համտես՝ 35 եվրո, ճաշ գինու համտեսով՝ 65 եվրո մեկ անձի համար։"] } },
    { id: "t10", city: "tuscany", kind: "t", dur: "6", prices: [100], fromPP: true, max: 7,
      en: { t: "San Gimignano & Chianti, half day", d: "A half-day trip to the towers of San Gimignano and the vineyards of Chianti.",
        g: [G("Route", ["Pickup from your hotel in Florence", "San Gimignano", "Chianti"])], n: ["Private tour by minivan, up to 7 people.", "Wine tasting and lunch at the wineries are not included in the tour price and are paid separately on site: wine tasting €35, lunch with wine tasting €65 per person."] },
      hy: { t: "Սան Ջիմինյանո և Կյանտի՝ կես օր", d: "Կես օրվա ուղևորություն Սան Ջիմինյանոյի աշտարակներ և Կյանտիի խաղողի այգիներ։",
        g: [G("Երթուղի", ["Դիմավորում Ֆլորենցիայի ձեր հյուրանոցից", "Սան Ջիմինյանո", "Կյանտի"])], n: ["Անհատական տուր մինիվենով՝ մինչև 7 անձ։", "Գինու համտեսը և ճաշը գինեգործարաններում ներառված չեն տուրի արժեքի մեջ և վճարվում են առանձին՝ տեղում․ գինու համտես՝ 35 եվրո, ճաշ գինու համտեսով՝ 65 եվրո մեկ անձի համար։"] } },
    { id: "t11", city: "tuscany", kind: "t", dur: "10–12", prices: [100], fromPP: true, max: 7,
      en: { t: "Val d'Orcia: Montalcino, Montepulciano & Pienza", d: "The rolling hills and cypress roads of Val d'Orcia, with the wine towns of Montalcino, Montepulciano and Pienza.",
        g: [G("Route", ["Pickup from your hotel in Florence", "Val d'Orcia", "Montalcino", "Montepulciano", "Pienza"])], n: ["Private tour by minivan, up to 7 people.", "Wine tasting and lunch at the wineries are not included in the tour price and are paid separately on site: wine tasting €35, lunch with wine tasting €65 per person."] },
      hy: { t: "Վալ դ'Օրչա՝ Մոնտալչինո, Մոնտեպուլչանո և Պիենցա", d: "Վալ դ'Օրչայի բլուրներն ու նոճիների ճանապարհները՝ գինու քաղաքներ Մոնտալչինո, Մոնտեպուլչանո և Պիենցա։",
        g: [G("Երթուղի", ["Դիմավորում Ֆլորենցիայի ձեր հյուրանոցից", "Վալ դ'Օրչա", "Մոնտալչինո", "Մոնտեպուլչանո", "Պիենցա"])], n: ["Անհատական տուր մինիվենով՝ մինչև 7 անձ։", "Գինու համտեսը և ճաշը գինեգործարաններում ներառված չեն տուրի արժեքի մեջ և վճարվում են առանձին՝ տեղում․ գինու համտես՝ 35 եվրո, ճաշ գինու համտեսով՝ 65 եվրո մեկ անձի համար։"] } },
    { id: "t12", city: "tuscany", kind: "t", prices: [100], fromPP: true, max: 7,
      en: { t: "Pisa & Lucca", d: "The Leaning Tower of Pisa and Lucca, the city inside its Renaissance walls.",
        g: [G("Route", ["Pickup from your hotel in Florence", "Pisa", "Lucca"])], n: ["Private tour by minivan, up to 7 people."] },
      hy: { t: "Պիզա և Լուկկա", d: "Պիզայի թեք աշտարակը և Լուկկան՝ Վերածննդի պարիսպներով շրջապատված քաղաքը։",
        g: [G("Երթուղի", ["Դիմավորում Ֆլորենցիայի ձեր հյուրանոցից", "Պիզա", "Լուկկա"])], n: ["Անհատական տուր մինիվենով՝ մինչև 7 անձ։"] } },
    { id: "t13", city: "tuscany", kind: "t", prices: [100], fromPP: true, max: 7,
      en: { t: "Cinque Terre & Pisa", d: "The five colourful villages of Cinque Terre by the sea, and the Leaning Tower of Pisa.",
        g: [G("Route", ["Pickup from your hotel in Florence", "Cinque Terre", "Pisa"])], n: ["Private tour by minivan, up to 7 people.", "Wine tasting and lunch at the wineries are not included in the tour price and are paid separately on site: wine tasting €35, lunch with wine tasting €65 per person."] },
      hy: { t: "Չինկվե Տերե և Պիզա", d: "Չինկվե Տերեի հինգ գունավոր գյուղերը ծովի ափին և Պիզայի թեք աշտարակը։",
        g: [G("Երթուղի", ["Դիմավորում Ֆլորենցիայի ձեր հյուրանոցից", "Չինկվե Տերե", "Պիզա"])], n: ["Անհատական տուր մինիվենով՝ մինչև 7 անձ։", "Գինու համտեսը և ճաշը գինեգործարաններում ներառված չեն տուրի արժեքի մեջ և վճարվում են առանձին՝ տեղում․ գինու համտես՝ 35 եվրո, ճաշ գինու համտեսով՝ 65 եվրո մեկ անձի համար։"] } },
    { id: "t14", city: "tuscany", kind: "t", dur: "12–13", prices: [100], fromPP: true, max: 7,
      en: { t: "Cinque Terre", d: "A full day in the five colourful seaside villages of Cinque Terre.",
        g: [G("Route", ["Pickup from your hotel in Florence", "Cinque Terre"])], n: ["Private tour by minivan, up to 7 people.", "Wine tasting and lunch at the wineries are not included in the tour price and are paid separately on site: wine tasting €35, lunch with wine tasting €65 per person."] },
      hy: { t: "Չինկվե Տերե", d: "Մեկ օր Չինկվե Տերեի հինգ գունավոր ծովափնյա գյուղերում։",
        g: [G("Երթուղի", ["Դիմավորում Ֆլորենցիայի ձեր հյուրանոցից", "Չինկվե Տերե"])], n: ["Անհատական տուր մինիվենով՝ մինչև 7 անձ։", "Գինու համտեսը և ճաշը գինեգործարաններում ներառված չեն տուրի արժեքի մեջ և վճարվում են առանձին՝ տեղում․ գինու համտես՝ 35 եվրո, ճաշ գինու համտեսով՝ 65 եվրո մեկ անձի համար։"] } },
    { id: "t3", city: "rome", kind: "t", dur: "3–4", prices: [160, 200, 240, 280, 40],
      en: { t: "Rome cultural walking tour", d: "A walk through Rome's historic sites and landmarks. Let's discover the city's beautiful corners and colourful Rome together.",
        g: [G("City tour", ["Colosseum", "Arch of Constantine", "Trajan's Markets (Mercati di Traiano)", "Capitoline Hill (Campidoglio)", "Vittorio Emanuele II Monument", "Trevi Fountain", "Coffee break", "Spanish Steps", "Church of Sant'Ignazio", "Pantheon", "Sapienza University (Palazzo della Sapienza)", "Piazza Navona"])], n: [] },
      hy: { t: "Մշակութային զբոսատուր Հռոմում", d: "Զբոսանք Հռոմի պատմական և տեսարժան վայրերով։ Բացահայտենք միասին քաղաքի գեղեցիկ անկյուններն ու կոլորիտային Հռոմը։",
        g: [G("Քաղաքային տուր", ["Կոլիզեում (Colosseo)", "Կոնստանտինի հաղթակամար", "Տրայանոսի շուկաներ (Mercati di Traiano)", "Կապիտոլիումի բլուր (Campidoglio)", "Վիտտորիո Էմանուելեի հուշարձան", "Տրևիի շատրվան", "Սուրճի ընդմիջում", "Իսպանական սանդուղքներ", "Սուրբ Իգնատիոսի եկեղեցի (Sant'Ignazio)", "Պանթեոն", "Սապիենցա համալսարան (Palazzo della Sapienza)", "Նավոնա հրապարակ"])], n: [] } },
    // Vatican: its own tour (price on request for now)
    { id: "t7", city: "vatican", kind: "t",
      en: { t: "Vatican tour", d: "St Peter's Square and Basilica, Michelangelo's Pietà and Bernini's Baldacchino, with stories about the history and art of the Vatican.",
        g: [G("Vatican", ["Ponte Sant'Angelo and Castel Sant'Angelo", "Vatican City State", "St Peter's Square", "St Gregory the Illuminator Square", "St Peter's Basilica", "Michelangelo's Pietà", "Bernini's Baldacchino"],
              ["We'll discover the history of the Vatican, its exceptional artistic heritage and some of the most important pages of Christian culture."])],
        n: ["The Vatican Museums are not included in this tour."] },
      hy: { t: "Տուր Վատիկանում", d: "Սուրբ Պետրոսի հրապարակ և տաճար, Միքելանջելոյի «Պիետան» և Բեռնինիի «Բալդակինը»՝ պատմություններով Վատիկանի պատմության և արվեստի մասին։",
        g: [G("Վատիկան", ["Սուրբ Հրեշտակի կամուրջ և Սուրբ Հրեշտակի ամրոց", "Վատիկան պետություն", "Սուրբ Պետրոսի հրապարակ", "Սուրբ Գրիգոր Լուսավորչի հրապարակ", "Սուրբ Պետրոսի տաճար", "Միքելանջելոյի «Պիետա»", "Բեռնինիի «Բալդակին»"],
              ["Էքսկուրսիայի ընթացքում կբացահայտենք Վատիկանի պատմությունը, արվեստի բացառիկ ժառանգությունը և քրիստոնեական մշակույթի կարևորագույն էջերը։"])],
        n: ["Վատիկանի թանգարանները ներառված չեն այս տուրում։"] } },
    // Vatican tour + the Vatican Museums: the same walk, a coffee break, then a guided visit of the Museums (price on request)
    { id: "t19", city: "vatican", kind: "t",
      en: { t: "Vatican tour with the Vatican Museums", d: "St Peter's Square and Basilica with the Pietà and the Baldacchino, then, after a coffee break, a guided visit of the Vatican Museums.",
        g: [G("Vatican", ["Ponte Sant'Angelo and Castel Sant'Angelo", "Vatican City State", "St Peter's Square", "St Gregory the Illuminator Square", "St Peter's Basilica", "Michelangelo's Pietà", "Bernini's Baldacchino"]),
            G("Vatican Museums", ["Coffee break", "Vatican Museums: the papal collections, sculptures and Renaissance masterpieces", "Sistine Chapel, with Michelangelo's famous frescoes"])],
        n: ["Tickets for the Vatican Museums are not included."] },
      hy: { t: "Տուր Վատիկանում՝ Վատիկանի թանգարաններով", d: "Սուրբ Պետրոսի հրապարակ և տաճար՝ «Պիետա»-ով և «Բալդակին»-ով, այնուհետև՝ սուրճի ընդմիջումից հետո, էքսկուրսիա Վատիկանի թանգարաններում։",
        g: [G("Վատիկան", ["Սուրբ Հրեշտակի կամուրջ և Սուրբ Հրեշտակի ամրոց", "Վատիկան պետություն", "Սուրբ Պետրոսի հրապարակ", "Սուրբ Գրիգոր Լուսավորչի հրապարակ", "Սուրբ Պետրոսի տաճար", "Միքելանջելոյի «Պիետա»", "Բեռնինիի «Բալդակին»"]),
            G("Վատիկանի թանգարաններ", ["Սուրճի ընդմիջում", "Վատիկանի թանգարաններ՝ պապական հավաքածուներ, քանդակներ և Վերածննդի գլուխգործոցներ", "Սիքստինյան կապելլա՝ Միքելանջելոյի նշանավոր որմնանկարներով"])],
        n: ["Վատիկանի թանգարանների տոմսերը ներառված չեն։"] } },
    // Rome and the Vatican, combined: the Rome city tour price + €20 (plus). Starts at the Colosseum and ends at St Peter's; no Vatican Museums.
    { id: "t17", city: "rome", also: ["vatican"], kind: "t", prices: [160, 200, 240, 280, 40], plus: 20,
      en: { t: "Rome and the Vatican", d: "A combined tour: from the Colosseum through Rome's main landmarks to the Vatican, St Peter's Square and the Basilica.",
        g: [G("Rome", ["Colosseum", "Arch of Constantine", "Trajan's Markets (Mercati di Traiano)", "Capitoline Hill (Campidoglio)", "Vittorio Emanuele II Monument", "Trevi Fountain", "Coffee break", "Pantheon", "Piazza Navona"]),
            G("Vatican", ["Ponte Sant'Angelo and Castel Sant'Angelo", "St Peter's Square", "St Peter's Basilica: Michelangelo's Pietà and Bernini's Baldacchino"],
              ["Stories about the history and art of the Vatican."])],
        n: ["The Vatican Museums are not included in this tour."] },
      hy: { t: "Հռոմ և Վատիկան", d: "Համակցված տուր՝ Կոլիզեումից Հռոմի գլխավոր տեսարժան վայրերով դեպի Վատիկան՝ Սուրբ Պետրոսի հրապարակ և տաճար։",
        g: [G("Հռոմ", ["Կոլիզեում (Colosseo)", "Կոնստանտինի հաղթակամար", "Տրայանոսի շուկաներ (Mercati di Traiano)", "Կապիտոլիումի բլուր (Campidoglio)", "Վիտտորիո Էմանուելեի հուշարձան", "Տրևիի շատրվան", "Սուրճի ընդմիջում", "Պանթեոն", "Նավոնա հրապարակ"]),
            G("Վատիկան", ["Սուրբ Հրեշտակի կամուրջ և Սուրբ Հրեշտակի ամրոց", "Սուրբ Պետրոսի հրապարակ", "Սուրբ Պետրոսի տաճար՝ Միքելանջելոյի «Պիետա» և Բեռնինիի «Բալդակին»"],
              ["Պատմություններ Վատիկանի պատմության և արվեստի մասին։"])],
        n: ["Վատիկանի թանգարանները ներառված չեն այս տուրում։"] } },
    { id: "t4", city: "venice", kind: "t",
      en: { t: "Walk in Venice", d: "The world's most romantic city, full of history, bridges and squares.",
        g: [G("Program", ["Piazzale Santa Lucia", "The Grand Canal", "Scalzi Bridge", "A walk through Venice's narrow streets and along the canals", "Rialto Bridge", "St Mark's Square", "St Mark's Basilica", "Doge's Palace"])], n: [] },
      hy: { t: "Զբոսանք Վենետիկում", d: "Աշխարհի ամենառոմանտիկ քաղաքը՝ պատմության, կամուրջների և հրապարակների գեղեցկությամբ։",
        g: [G("Ծրագրում", ["Սանտա Լուչիա հրապարակ", "Վենետիկի Մեծ ջրանցք", "Սկալցի կամուրջ", "Զբոսանք Վենետիկի նեղ փողոցներով և ջրանցքների երկայնքով", "Ռիալտոյի կամուրջ", "Սուրբ Մարկոսի հրապարակ", "Սուրբ Մարկոսի տաճար", "Դոժերի պալատ"])], n: [] } },
    // San Lazzaro degli Armeni, the island of the Armenian Mekhitarist monks: its own tour. Price on request.
    { id: "t8", city: "venice", kind: "t",
      en: { t: "San Lazzaro island", d: "A boat trip to San Lazzaro degli Armeni, the Armenian island of the Mekhitarist monks in the Venetian lagoon.",
        g: [G("San Lazzaro degli Armeni island", ["Boat across the lagoon to the island", "The Mekhitarist monastery, home of Armenian monks since 1717", "The church and the cloister garden",
              "The museum and library, with old Armenian manuscripts and rare books", "The room where Lord Byron studied Armenian"],
              ["The boat to the island and the entry ticket to the monastery are not included."])], n: [] },
      hy: { t: "Սուրբ Ղազար կղզի", d: "Նավակով այց Սուրբ Ղազար կղզի՝ Մխիթարյան միաբանության հայկական կղզին Վենետիկի ծովածոցում։",
        g: [G("Սուրբ Ղազար կղզի", ["Նավակով՝ ծովածոցով դեպի կղզի", "Մխիթարյան վանքը՝ հայ միաբանների տունը 1717 թվականից", "Եկեղեցին և վանքի բակը",
              "Թանգարանն ու գրադարանը՝ հին հայկական ձեռագրերով և հազվագյուտ գրքերով", "Սենյակը, որտեղ լորդ Բայրոնը հայերեն էր սովորում"],
              ["Կղզի տանող նավակի և վանքի մուտքի տոմսերը ներառված չեն։"])], n: [] } },
    { id: "tr1", city: "rome", kind: "r", from: 50,
      en: { t: "Rome airport transfer", d: "Transfer from Rome airport to the city center or the station.", g: [G("Routes", ["Rome airport → city center", "Rome airport → station"])], n: [] },
      hy: { t: "Տրանսֆեր Հռոմի օդանավակայանից", d: "Տրանսֆեր Հռոմի օդանավակայանից դեպի քաղաքի կենտրոն կամ կայարան։", g: [G("Ուղղություններ", ["Հռոմի օդանավակայան → քաղաքի կենտրոն", "Հռոմի օդանավակայան → կայարան"])], n: [] } }
  ];
  // Order of the tours everywhere on the site: Rome, Vatican, Florence, Tuscany day trips, more Tuscany, cooking class, Venice, San Lazzaro, transfers
  var TOUR_ORDER = ["t3", "t7", "t19", "t17", "t1", "t15", "t16", "t9", "t18", "t10", "t11", "t12", "t13", "t14", "t6", "t5", "t4", "t8", "tr1"];
  TOURS.sort(function (a, b) { return TOUR_ORDER.indexOf(a.id) - TOUR_ORDER.indexOf(b.id); });

  // Badges on the tour cards: "sell" = Likely to sell out, "best" = Best seller, "new" = New.
  var TAGS = { t1: "sell", t3: "best", t5: "new", t7: "new", t8: "new", t17: "new" };

  // Highlights with icons on every tour. dur: hours from the tour, otherwise this text.
  var DUR_TXT = {
    t6: { en: "6–13 hours, depends on the route", hy: "6–13 ժամ՝ կախված երթուղուց" },
    t12: { en: "Full day", hy: "Ամբողջ օր" }, t13: { en: "Full day", hy: "Ամբողջ օր" }, t15: { en: "Full day", hy: "Ամբողջ օր" },
    _: { en: "By arrangement", hy: "Ըստ պայմանավորվածության" }
  };
  var ICON = {
    dur: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    cancel: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="m8 12.5 2.6 2.5L16 9.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    lang: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M8 9.5h8M8 12.5h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    pickup: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 15v-3l2-5h11l3 5h2v3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="7.5" cy="16.5" r="1.8" fill="currentColor"/><circle cx="17" cy="16.5" r="1.8" fill="currentColor"/></svg>'
  };
  var NO_PICKUP = { t3: 1, t7: 1, t19: 1, t17: 1, t5: 1 }; // Rome tours and cooking class: guests come to the meeting point
  ICON.nopick = ICON.pickup;
  function highlights(x) {
    var u = t(), d = x.dur ? x.dur + " " + u.hrs : (DUR_TXT[x.id] || DUR_TXT._)[state.lang];
    var pick = NO_PICKUP[x.id] ? { k: "nopick", h: u.noPickup, v: u.noPickupD } : { k: "pickup", h: u.pickup, v: u.pickupD };
    return [{ k: "dur", h: u.dur, v: d }, { k: "cancel", h: u.freeCancel, v: u.freeCancelD }, { k: "lang", h: u.langs, v: langLabel(x) }, pick];
  }

  // Languages of each tour (shown on the cards and tour pages). "note" adds an explanation on the tour page.
  var LANGS = {
    t1: { l: ["hy", "en"] }, t3: { l: ["hy", "en"] }, t7: { l: ["hy", "en"] }, t19: { l: ["hy", "en"] }, t17: { l: ["hy", "en"] }, t4: { l: ["hy", "en"] }, t8: { l: ["hy", "en"] }, tr1: { l: ["hy", "en"] },
    t5: { l: ["en"] },
    t6: { l: ["en", "hy"], short: { en: "English · Armenian with our guide by car", hy: "Անգլերեն · հայերեն՝ մեր էքսկուրսավարի հետ մեքենայով" },
          note: { en: "Mostly in English. In Armenian when our guide travels with you by car.", hy: "Հիմնականում անգլերենով։ Հայերենով՝ եթե մեր էքսկուրսավարը ձեզ հետ է գալիս մեքենայով։" } }
  };
  ["t9", "t18", "t10", "t11", "t12", "t13", "t14", "t15", "t16"].forEach(function (id) { LANGS[id] = LANGS.t6; }); // the tours by car: same as the other Tuscany tours
  function langLabel(x) {
    var o = LANGS[x.id]; if (!o) return "";
    return o.short ? o.short[state.lang] : o.l.map(function (k, i) { var w = t()["lang_" + k]; return i && state.lang === "hy" ? w.toLowerCase() : w; }).join(", ");
  }

  // "What's included" on each tour page. Check these and change them as you like.
  function IE(inc) { return { inc: inc }; }
  var INCL = {
    t1: { en: IE(["Armenian-speaking guide", "Walking tour of the main sights"]),
          hy: IE(["Հայախոս էքսկուրսավար", "Զբոսանք գլխավոր տեսարժան վայրերով"]) },
    t5: { en: IE(["Hands-on class with a professional local chef", "All ingredients, aprons and equipment", "Unlimited Chianti & Vermentino wine (juices and soft drinks for kids)",
                  "The full meal you cooked, eaten together at our long table", "Recipes to take home"]),
          hy: IE(["Գործնական դասընթաց պրոֆեսիոնալ տեղացի խոհարարի հետ", "Բոլոր բաղադրիչները, գոգնոցները և պարագաները", "Անսահմանափակ Կյանտի և Վերմենտինո գինի (երեխաների համար՝ հյութեր և զովացուցիչ ըմպելիքներ)",
                  "Ձեր պատրաստած ամբողջական ճաշը՝ միասին մեր երկար սեղանի շուրջ", "Բաղադրատոմսեր՝ տանը պատրաստելու համար"]) },
    t6: { en: IE(["Private driver and minivan, up to 7 people", "Pickup from your hotel and drop-off"]),
          hy: IE(["Անհատական վարորդ և մինիվեն՝ մինչև 7 անձ", "Դիմավորում հյուրանոցից և ճանապարհում"]) },
    t15: { en: IE(["Private driver and car", "Pickup from your hotel and drop-off", "Lunch and wine tasting in San Gimignano"]),
           hy: IE(["Անհատական վարորդ և մեքենա", "Դիմավորում հյուրանոցից և ճանապարհում", "Ճաշ և գինու համտես Սան Ջիմինյանոյում"]) },
    t16: { en: IE(["1967 Fiat 500 Jolly Spiaggina cabrio with driver", "Pickup from your hotel and drop-off"]),
           hy: IE(["1967 թվականի Fiat 500 Jolly Spiaggina կաբրիոլետ՝ վարորդով", "Դիմավորում հյուրանոցից և ճանապարհում"]) },
    t3: { en: IE(["Armenian-speaking guide", "Walking tour of Rome's historic centre"]),
          hy: IE(["Հայախոս էքսկուրսավար", "Զբոսանք Հռոմի պատմական կենտրոնով"]) },
    t7: { en: IE(["Armenian-speaking guide", "Walk from Castel Sant'Angelo to St Peter's Square", "Visit of St Peter's Basilica: the Pietà and the Baldacchino"]),
          hy: IE(["Հայախոս էքսկուրսավար", "Զբոսանք Սուրբ Հրեշտակի ամրոցից մինչև Սուրբ Պետրոսի հրապարակ", "Այց Սուրբ Պետրոսի տաճար՝ «Պիետա» և «Բալդակին»"]) },
    t19: { en: IE(["Armenian-speaking guide", "Walk from Castel Sant'Angelo to St Peter's Square", "Visit of St Peter's Basilica: the Pietà and the Baldacchino", "Guided visit of the Vatican Museums and the Sistine Chapel"]),
           hy: IE(["Հայախոս էքսկուրսավար", "Զբոսանք Սուրբ Հրեշտակի ամրոցից մինչև Սուրբ Պետրոսի հրապարակ", "Այց Սուրբ Պետրոսի տաճար՝ «Պիետա» և «Բալդակին»", "Էքսկուրսիա Վատիկանի թանգարաններում և Սիքստինյան կապելլայում"]) },
    t17: { en: IE(["Armenian-speaking guide", "Walking tour of Rome's historic centre", "St Peter's Square and Basilica"]),
           hy: IE(["Հայախոս էքսկուրսավար", "Զբոսանք Հռոմի պատմական կենտրոնով", "Սուրբ Պետրոսի հրապարակ և տաճար"]) },
    t4: { en: IE(["Armenian-speaking guide", "Walk through the most interesting corners of Venice"]),
          hy: IE(["Հայախոս էքսկուրսավար", "Զբոսանք Վենետիկի ամենահետաքրքիր անկյուններով"]) },
    t8: { en: IE(["Armenian-speaking guide", "Visit to the Armenian monastery on San Lazzaro island"]),
          hy: IE(["Հայախոս էքսկուրսավար", "Այց Սուրբ Ղազար կղզու հայկական վանք"]) },
    tr1: { en: IE(["Car with driver", "Pickup at the airport"]),
           hy: IE(["Մեքենա վարորդով", "Դիմավորում օդանավակայանում"]) }
  };

  INCL.t9 = INCL.t18 = INCL.t10 = INCL.t11 = INCL.t12 = INCL.t13 = INCL.t14 = INCL.t6; // all Tuscany minivan tours; wine tasting and lunch are paid on site

  // Travel tips, shown in the blog. Change them as you like.
  var TIP = {
    shoes: { en: "Wear comfortable shoes: there is a lot of walking on old stone streets.", hy: "Հագեք հարմարավետ կոշիկներ․ շատ ենք քայլելու հին քարե փողոցներով։" },
    water: { en: "Bring a bottle of water. In Rome and Florence you can refill it for free at the street fountains.", hy: "Վերցրեք ջրի շիշ։ Հռոմում և Ֆլորենցիայում այն կարող եք անվճար լցնել փողոցային աղբյուրներից։" },
    bags: { en: "Keep your phone and wallet in a closed bag in front of you: crowded places attract pickpockets.", hy: "Հեռախոսն ու դրամապանակը պահեք փակ պայուսակում՝ ձեր առջևում․ մարդաշատ վայրերում գրպանահատներ են լինում։" },
    church: { en: "To enter churches, shoulders and knees must be covered. A light scarf is handy.", hy: "Եկեղեցիներ մտնելու համար ուսերն ու ծնկները պետք է ծածկված լինեն։ Թեթև շարֆը շատ հարմար է։" },
    vatican: { en: "Shoulders and knees must be covered to enter St Peter's Basilica, or you will not be let in.", hy: "Սուրբ Պետրոսի տաճար մտնելու համար ուսերն ու ծնկները պետք է ծածկված լինեն, հակառակ դեպքում ներս չեն թողնի։" },
    security: { en: "There is a security check at the entrance, like at an airport: leave big bags and sharp objects at the hotel.", hy: "Մուտքի մոտ անվտանգության ստուգում կա, ինչպես օդանավակայանում․ մեծ պայուսակներն ու սուր առարկաները թողեք հյուրանոցում։" },
    early: { en: "Be at the meeting point 10 minutes early.", hy: "Հանդիպման վայրում եղեք 10 րոպե շուտ։" },
    sun: { en: "In summer bring a hat, sunglasses and sun cream.", hy: "Ամռանը վերցրեք գլխարկ, արևային ակնոց և արևապաշտպան քսուք։" },
    layers: { en: "Dress in layers: mornings and evenings in the hills can be cool.", hy: "Հագնվեք շերտերով․ բլուրներում առավոտներն ու երեկոները կարող են զով լինել։" },
    cash: { en: "Bring some cash for small shops, coffee and souvenirs.", hy: "Վերցրեք մի քիչ կանխիկ գումար՝ փոքր խանութների, սուրճի և հուշանվերների համար։" },
    wine: { en: "Enjoy the wine tasting: our driver does the driving.", hy: "Վայելեք գինու համտեսը․ մեքենան վարում է մեր վարորդը։" },
    allergy: { en: "Tell us in advance about any food allergies or diets.", hy: "Նախապես տեղեկացրեք մեզ սննդային ալերգիաների կամ սննդակարգի մասին։" },
    hungry: { en: "Come hungry: you will eat everything you cook.", hy: "Եկեք սոված․ ձեր պատրաստած ամեն ինչը ուտելու եք։" },
    bridges: { en: "Venice has many bridges with steps: travel light, a backpack is easier than a suitcase or stroller.", hy: "Վենետիկում շատ կամուրջներ կան աստիճաններով․ եկեք թեթև, ուսապարկն ավելի հարմար է, քան ճամպրուկը կամ մանկասայլակը։" },
    acqua: { en: "From October to January there can be high water (acqua alta): check the forecast and bring waterproof shoes.", hy: "Հոկտեմբերից հունվար կարող է լինել բարձր ջուր (acqua alta)․ ստուգեք կանխատեսումը և վերցրեք անջրանցիկ կոշիկներ։" },
    boat: { en: "We go to the island by public boat (vaporetto) from the San Zaccaria pier.", hy: "Կղզի գնում ենք հասարակական նավակով (վապորետտո)՝ Սան Զաքարիա նավամատույցից։" },
    queue: { en: "Book early in high season (April–October): the best days fill up fast.", hy: "Բարձր սեզոնին (ապրիլ–հոկտեմբեր) ամրագրեք շուտ․ լավագույն օրերն արագ են զբաղվում։" },
    cabrio: { en: "The car is open: bring sunglasses, a hat or scarf, and only a small bag.", hy: "Մեքենան բաց է․ վերցրեք արևային ակնոց, գլխարկ կամ շարֆ և միայն փոքր պայուսակ։" },
    photos: { en: "Charge your phone: there are many beautiful photo stops.", hy: "Լիցքավորեք հեռախոսը․ շատ գեղեցիկ վայրեր կլինեն լուսանկարվելու համար։" },
    swim: { en: "In summer bring a swimsuit and a towel if you want to swim in the sea.", hy: "Ամռանը վերցրեք լողազգեստ և սրբիչ, եթե ուզում եք լողալ ծովում։" },
    trains: { en: "The villages are linked by small trains that can be crowded: keep your belongings close.", hy: "Գյուղերը միացված են փոքր գնացքներով, որոնք կարող են մարդաշատ լինել․ ձեր իրերը պահեք մոտ։" },
    flight: { en: "Send us your flight number, so the driver knows if your flight is late.", hy: "Ուղարկեք ձեր չվերթի համարը, որպեսզի վարորդն իմանա, եթե չվերթը ուշանա։" },
    luggage: { en: "Tell us how many suitcases you have, so we send the right car.", hy: "Տեղեկացրեք, թե քանի ճամպրուկ ունեք, որպեսզի համապատասխան մեքենա ուղարկենք։" }
  };
  // The "Travel tips" blog post (page.html?p=blog): tips grouped by destination, using the texts above.
  var TIP_GROUPS = [
    { en: "Rome", hy: "Հռոմ", k: ["shoes", "water", "bags", "sun", "early"] },
    { en: "The Vatican", hy: "Վատիկան", k: ["vatican", "security"] },
    { en: "Florence", hy: "Ֆլորենցիա", k: ["shoes", "water", "church", "bags"] },
    { en: "Venice and San Lazzaro", hy: "Վենետիկ և Սուրբ Ղազար", k: ["bridges", "acqua", "boat", "church"] },
    { en: "Tuscany day trips", hy: "Տոսկանայի օրական ուղևորություններ", k: ["layers", "shoes", "wine", "allergy", "cash", "photos"] },
    { en: "Cinque Terre", hy: "Չինկվե Տերե", k: ["swim", "trains", "sun"] },
    { en: "Fiat 500 tour", hy: "Fiat 500 տուր", k: ["cabrio", "queue"] },
    { en: "Cooking class", hy: "Խոհարարական դասընթաց", k: ["hungry", "allergy"] },
    { en: "Airport transfers", hy: "Տրանսֆերներ", k: ["flight", "luggage"] }
  ];
  function tipGroups() { return TIP_GROUPS.map(function (g) { return { h: g[state.lang], tips: g.k.map(function (k) { return TIP[k][state.lang]; }) }; }); }
  // Map pins for the route on the tour page: one [latitude, longitude] per stop, in the same order as the route
  // (all groups one after another). null = no pin for that stop (e.g. the coffee break).
  var MAP = {
    t1: [[43.7746, 11.2494], [43.7738, 11.2478], [43.7731, 11.2560], [43.7714, 11.2541], [43.7710, 11.2566], [43.7697, 11.2539],
         [43.7696, 11.2558], [43.7678, 11.2553], [43.7680, 11.2531], [43.7651, 11.2500],
         [43.7594, 11.2650], [43.7629, 11.2650]],
    // Tuscany: the tour has many routes, so the map shows every destination with its name.
    //  [lat, lng, English, Armenian, label side, words that find this place in a route of the list]
    t6: { start: [43.7696, 11.2558, "Florence · start", "Ֆլորենցիա · մեկնարկ", "top", ["Florence", "Ֆլորենցիա"]], places: [
      [43.3188, 11.3308, "Siena", "Սիենա", "bottom", ["Siena", "Սիենա"]], [43.4677, 11.0434, "San Gimignano", "Սան Ջիմինյանո", "left", ["Gimignano", "Ջիմինյանո"]],
      [43.3895, 11.2236, "Monteriggioni", "Մոնտերիջոնի", "right", ["Monteriggioni", "Մոնտերիջոնի"]], [43.4705, 11.2869, "Castellina in Chianti", "Կաստելինա ին Կյանտի", "right", ["Castellina", "Կաստելինա"]],
      [43.5869, 11.3105, "Montefioralle · Chianti", "Մոնտեֆիորալե · Կյանտի", "right", ["Montefioralle", "Մոնտեֆիորալե", "Chianti", "Կյանտի"]], [43.4019, 10.8608, "Volterra", "Վոլտերա", "left", ["Volterra", "Վոլտերա"]],
      [43.7230, 10.3966, "Pisa", "Պիզա", "left", ["Pisa", "Պիզա"]], [43.2350, 10.6150, "Bolgheri", "Բոլգերի", "left", ["Bolgheri", "Բոլգերի"]],
      [43.0586, 11.4889, "Montalcino", "Մոնտալչինո", "left", ["Montalcino", "Մոնտալչինո"]], [43.0766, 11.6788, "Pienza", "Պիենցա", "bottom", ["Pienza", "Պիենցա"]],
      [43.0920, 11.7806, "Montepulciano", "Մոնտեպուլչանո", "right", ["Montepulciano", "Մոնտեպուլչանո"]], [44.1350, 9.6840, "Cinque Terre", "Չինկվե Տերե", "right", ["Cinque Terre", "Չինկվե Տերե"]]] },
    // Florence by car and by Fiat 500
    t15: [[43.7696, 11.2558], null, [43.7629, 11.2650], [43.7594, 11.2650], [43.4677, 11.0434]],
    t16: [[43.7696, 11.2558], [43.7629, 11.2650], [43.8070, 11.2919]],
    // Tuscany day trips: Florence (pickup), then the places of the route
    t9: [[43.7696, 11.2558], [43.3188, 11.3308], [43.4677, 11.0434], [43.5840, 11.3170]],
    t18: [[43.7696, 11.2558], [43.4677, 11.0434], [43.3895, 11.2236], [43.5840, 11.3170]],
    t10: [[43.7696, 11.2558], [43.4677, 11.0434], [43.5840, 11.3170]],
    t11: [[43.7696, 11.2558], null, [43.0586, 11.4889], [43.0920, 11.7806], [43.0766, 11.6788]],
    t12: [[43.7696, 11.2558], [43.7230, 10.3966], [43.8429, 10.5027]],
    t13: [[43.7696, 11.2558], [44.1350, 9.6840], [43.7230, 10.3966]],
    t14: [[43.7696, 11.2558], [44.1350, 9.6840]],
    t3: [[41.8902, 12.4922], [41.8898, 12.4906], [41.8958, 12.4862], [41.8933, 12.4829], [41.8946, 12.4831], [41.9009, 12.4833], null,
         [41.9057, 12.4823], [41.8991, 12.4799], [41.8986, 12.4769], [41.8985, 12.4741], [41.8992, 12.4731]],
    t7: [[41.9031, 12.4663], null, [41.9022, 12.4572], [41.9030, 12.4527], [41.9022, 12.4539], null, null],
    // Vatican with the Museums: the same walk, then the coffee break (no pin), the Museums and the Sistine Chapel
    t19: [[41.9031, 12.4663], null, [41.9022, 12.4572], [41.9030, 12.4527], [41.9022, 12.4539], null, null, null, [41.9065, 12.4536], [41.9029, 12.4545]],
    // Rome and the Vatican: Rome (green), then the Vatican (red)
    t17: [[41.8902, 12.4922], [41.8898, 12.4906], [41.8958, 12.4862], [41.8933, 12.4829], [41.8946, 12.4831], [41.9009, 12.4833], null, [41.8986, 12.4769], [41.8992, 12.4731],
          [41.9031, 12.4663], [41.9022, 12.4572], [41.9022, 12.4539]],
    t4: [[45.4410, 12.3210], null, [45.4413, 12.3226], null, [45.4380, 12.3359], [45.4341, 12.3388], [45.4345, 12.3397], [45.4337, 12.3404]],
    // San Lazzaro: the boat from San Zaccaria pier to the island (the monastery stops share the island pin)
    t8: [[45.4336, 12.3428], [45.4122, 12.3606], null, null, null]
  };

  // Long description on each tour page, between "About this tour" and "Route" (up to 400 characters). Empty for now.
  // Paragraphs are separated by an empty line (\n\n).
  // A paragraph wrapped in ** … ** is shown in bold.
  var LONG = {
    t1: {
      en: "### FLORENCE: the cradle of the Renaissance, the city of the Medici and the world of Tuscan flavours\n\n" +
          "A walk through Florence is more than a visit to its sights. It's a journey to a time when one city managed to change the history, art, science and banking of all of Europe, and the way people saw themselves.\n\n" +
          "Florence is the birthplace of the Renaissance: a city where wealth met art, power met science, and the human mind discovered new horizons.\n\n" +
          "On our walk we'll uncover the secrets of the Medici family's wealth and glory, and talk about how one of Europe's most powerful families ruled Florence without a royal title.\n\n" +
          "We'll visit the historic centre, Piazza della Signoria and Palazzo Vecchio, to learn about the history of the Florentine Republic, how it was governed and its political struggles.\n\n" +
          "We'll uncover the secrets of the Renaissance, talking about Leonardo da Vinci, Michelangelo and Raphael, whose works are tied to the history of this city. We'll see the magnificent cathedral of Santa Maria del Fiore, Brunelleschi's famous dome, Giotto's bell tower and other architectural treasures of the city.\n\n" +
          "Our route continues to Ponte Vecchio, the famous old bridge where goldsmiths' shops still work today. We'll also visit Florence's famous leather market, where you can discover the traditions of Italian leatherwork and handmade goods.\n\n" +
          "It would be impossible to discover Florence without its flavours. We'll get to know Italian coffee culture and the specialities of Tuscan cuisine.\n\n" +
          "This walk lets you not only see Florence, but feel its true character: its history, art, beauty, crafts and the unique atmosphere of Tuscan life.",
      hy: "### ՖԼՈՐԵՆՑԻԱ․ Վերածննդի օրրանը, Մեդիչիների քաղաքը և տոսկանական համերի աշխարհը\n\n" +
          "Ֆլորենցիայի քաղաքային զբոսանքը պարզապես ծանոթություն չէ քաղաքի տեսարժան վայրերին։ Սա ճանապարհորդություն է դեպի մի ժամանակաշրջան, երբ մեկ քաղաք կարողացավ փոխել ամբողջ Եվրոպայի պատմությունը, արվեստը, գիտությունը, բանկային համակարգը և մարդու մասին պատկերացումները։\n\n" +
          "Ֆլորենցիան Վերածննդի ծննդավայրն է՝ քաղաք, որտեղ հարստությունը հանդիպեց արվեստին, իշխանությունը՝ գիտությանը, իսկ մարդկային միտքը բացահայտեց նոր հորիզոններ։\n\n" +
          "Մեր զբոսանքի ընթացքում կբացահայտենք Մեդիչիների ընտանիքի հարստության և փառքի գաղտնիքները և կխոսենք այն մասին, թե ինչպես Եվրոպայի ամենաազդեցիկ տոհմերից մեկը առանց թագավորական տիտղոսի կարողացավ ղեկավարել Ֆլորենցիան։\n\n" +
          "Կայցելենք քաղաքի պատմական կենտրոնը, Սինյորիայի հրապարակը և Պալացցո Վեկիոն՝ ծանոթանալու Ֆլորենցիայի հանրապետության պատմությանը, կառավարման համակարգին և քաղաքական պայքարներին։\n\n" +
          "Կբացահայտենք Վերածննդի գաղտնիքները՝ խոսելով Լեոնարդո դա Վինչիի, Միքելանջելոյի և Ռաֆայելի մասին, որոնց ստեղծագործությունները կապված են այս քաղաքի պատմության հետ։ Կտեսնենք Սանտա Մարիա դել Ֆիորեի հիասքանչ տաճարը, Բրունելեսկիի հանրահայտ գմբեթը, Ջոտտոյի զանգակատունը և քաղաքի ճարտարապետական այլ գանձեր։\n\n" +
          "Մեր ճանապարհը կշարունակվի դեպի Պոնտե Վեկիո՝ հայտնի հին կամուրջը, որի վրա այսօր էլ գործում են ոսկերչական խանութներ։ Կծանոթանանք նաև Ֆլորենցիայի հայտնի կաշվի շուկային, որտեղ կարելի է բացահայտել իտալական կաշեգործության ավանդույթները և ձեռագործ արտադրանքները։\n\n" +
          "Անհնար էր բացահայտել Ֆլորենցիան առանց նրա համերի։ Կծանոթանանք իտալական սուրճի մշակույթին և կբացահայտենք տոսկանական խոհանոցի առանձնահատկությունները։\n\n" +
          "Այս զբոսանքը հնարավորություն է տալիս ոչ միայն տեսնել Ֆլորենցիան, այլև զգալ նրա իրական բնավորությունը՝ պատմությունը, արվեստը, գեղեցկությունը, արհեստները և տոսկանական կյանքի անկրկնելի մթնոլորտը։"
    },
    t5: {
      en: "This is the class most of our guests come for. In two and a half hours you’ll make fresh egg pasta from just flour and eggs, roll it into pappardelle, fill and seal spinach-and-ricotta ravioli, and layer a classic tiramisù with espresso and mascarpone.\n\n" +
          "Our chefs explain why each step matters, where the recipes come from, and how to get the same result at home. Then everyone sits down together at our long wooden table to eat what they made, with unlimited Tuscan wine. It works just as well for first-timers, families with kids and confident home cooks.\n\n" +
          "Prefer the kitchen to yourselves? The same menu is also a private pasta making class at the start time you choose, and the panoramic tour + class adds a ride over the city’s viewpoints first.",
      hy: "### Պատրաստեք իսկական իտալական պաստա և տիրամիսու՝ Ֆլորենցիայի սրտում 🇮🇹\n\n" +
          "Բացահայտեք իտալական խոհանոցի գաղտնիքները մեր ամենասիրված խոհարարական դասի ընթացքում։\n\n" +
          "Ընդամենը **2,5 ժամում** դուք ձեր ձեռքերով կպատրաստեք թարմ պաստա՝ միայն ալյուրից և ձվից, կսովորեք պատրաստել պապարդելե, սպանախով ու ռիկոտա պանրով ռավիոլի, ինչպես նաև դասական տիրամիսու՝ էսպրեսոյով և մասկարպոնեով։\n\n" +
          "Մեր փորձառու շեֆ-խոհարարները ձեզ կսովորեցնեն ոչ միայն պատրաստման տեխնիկան, այլև կպատմեն իտալական ուտեստների պատմությունն ու փոքրիկ գաղտնիքները, որպեսզի կարողանաք նույն համերը վերստեղծել նաև ձեր տանը։\n\n" +
          "Իսկ դասի ամենահաճելի մասը դեռ առջևում է։ Բոլորս միասին կնստենք մեր մեծ փայտե սեղանի շուրջ, կվայելենք ձեր իսկ պատրաստած ուտեստները՝ **Տոսկանայի անսահմանափակ գինու ուղեկցությամբ։** 🍷\n\n" +
          "Այս փորձառությունը հարմար է բոլորի համար՝ սկսնակների, փորձառու խոհարարների և երեխաների հետ ճանապարհորդող ընտանիքների։\n\n" +
          "**Ցանկանո՞ւմ եք ավելի անհատական փորձառություն։**\n\n" +
          "Ընտրեք մեր մասնավոր խոհարարական դասը ձեզ հարմար ժամին, կամ համատեղեք Ֆլորենցիայի գեղեցիկ տեսարաններով շրջագայությունը պաստայի պատրաստման դասի հետ։\n\n" +
          "**Միացեք մեզ և Ֆլորենցիայից ձեզ հետ տարեք ոչ միայն գեղեցիկ հիշողություններ, այլև իսկական իտալական խոհանոցի համերն ու գաղտնիքները։ ❤️**"
    },
    t6: {
      en: "### Tuscany: town tours and wine tasting 🇮🇹🍷\n\n" +
          "Tuscany is one of Italy's most beautiful and varied regions, famous for its rich nature and history, its medieval towns and its world-renowned wines.\n\n" +
          "Here you can admire the seaside views and the mountains, as well as green valleys and vineyards. These are the very vineyards where the grapes are grown for the world-famous Tuscan wines: **Chianti Classico, Brunello di Montalcino, Vino Nobile di Montepulciano and Vernaccia di San Gimignano**.\n\n" +
          "On our tour we'll discover Tuscany's historic towns, small medieval villages and famous wineries. We'll get to know the region's rich culture, its winemaking traditions and what makes Italian country life special.\n\n" +
          "At the wineries you'll be able to taste several kinds of Tuscan wine, learn how they're made and discover the unique taste and story of each one. If you'd like, we can also arrange lunch or dinner with traditional Tuscan dishes.\n\n" +
          "The tours run in **premium cars for up to 7 passengers**, for a pleasant and comfortable ride along Tuscany's roads.\n\n" +
          "Our drivers speak English, and if you wish you can also book an **Armenian-speaking guide** as an extra.\n\n" +
          "The route and the places we visit can be chosen around your own tastes and interests.\n\n" +
          "**Discover Tuscany with us and enjoy the beauty of Italian nature, the charm of its medieval towns and the unforgettable taste of its world-famous wines.** 🇦🇲🇮🇹🍷",
      hy: "### Տոսկանա․ քաղաքային շրջագայություններ և գինու համտես 🇮🇹🍷\n\n" +
          "Տոսկանան Իտալիայի ամենագեղեցիկ և բազմազան տարածաշրջաններից մեկն է, որը հայտնի է իր հարուստ բնությամբ և պատմությամբ, միջնադարյան քաղաքներով և աշխարհահռչակ գինիներով։\n\n" +
          "Այստեղ կարող եք հիանալ ինչպես ծովափնյա տեսարաններով ու լեռներով, այնպես էլ կանաչ հովիտներով և խաղողի այգիներով։ Հենց այս խաղողի այգիներում են աճեցվում խաղողի այն տեսակները, որոնցից արտադրվում են աշխարհահռչակ տոսկանական գինիները՝ **Chianti Classico, Brunello di Montalcino, Vino Nobile di Montepulciano և Vernaccia di San Gimignano**։\n\n" +
          "Մեր շրջագայության ընթացքում կբացահայտենք Տոսկանայի պատմական քաղաքները, միջնադարյան փոքրիկ բնակավայրերն ու հայտնի գինեգործարանները։ Կծանոթանանք տարածաշրջանի հարուստ մշակույթին, գինեգործության ավանդույթներին և իտալական գյուղական կյանքի առանձնահատկություններին։\n\n" +
          "Գինեգործարաններում հնարավորություն կունենաք համտեսելու տոսկանական գինիների մի քանի տեսակներ, ծանոթանալու դրանց պատրաստման գործընթացին և բացահայտելու յուրաքանչյուր գինու յուրահատուկ համն ու պատմությունը։ Ցանկության դեպքում հնարավոր է կազմակերպել նաև ճաշ կամ ընթրիք՝ վայելելով տոսկանական ավանդական խոհանոցի ուտեստները։\n\n" +
          "Շրջագայություններն իրականացվում են **բարձրակարգ, մինչև 7 ուղևորի համար նախատեսված ավտոմեքենաներով**, որոնք ապահովում են հաճելի և հարմարավետ ճանապարհորդություն Տոսկանայի ճանապարհներով։\n\n" +
          "Մեր վարորդները խոսում են անգլերեն, իսկ ցանկության դեպքում հնարավոր է հավելյալ պատվիրել նաև **հայալեզու զբոսավարի ծառայություն**։\n\n" +
          "Շրջագայության երթուղին և այցելության վայրերը կարող են ընտրվել՝ հաշվի առնելով ձեր նախասիրություններն ու հետաքրքրությունները։\n\n" +
          "**Բացահայտե՛ք Տոսկանան մեզ հետ՝ վայելելով իտալական բնության գեղեցկությունը, միջնադարյան քաղաքների հմայքն ու աշխարհահռչակ գինիների անկրկնելի համերը։** 🇦🇲🇮🇹🍷"
    },
    t3: {
      en: "A walk through Rome is more than a visit to ancient monuments. It's a journey to the roots of civilisation: a city where an empire was born and grew, whose laws, architecture, culture and political ideas shaped the whole world for centuries.\n\n" +
          "On our walk we'll discover Rome's thousand-year history, from the glory of the Roman Empire to the splendour of the Renaissance and the Baroque. At the Colosseum, an exceptional masterpiece of Roman engineering, we'll imagine the gladiator fights and uncover stories of emperors, political struggles and everyday life in Ancient Rome.\n\n" +
          "We'll continue to Piazza Venezia, the Trevi Fountain, the Pantheon and Piazza Navona, getting to know the city's architectural treasures and the works of the great masters. We'll also talk about the special relationship between Rome and the Vatican, the power of the popes, the influence of the Church and the city's spiritual heritage.\n\n" +
          "It's impossible to discover Rome without its cuisine. We'll get to know the most famous traditions of Italian food, from pasta carbonara to cacio e pepe, and discover Roman coffee culture and the atmosphere of the city's old cafés.\n\n" +
          "This walk lets you not only see Rome, but feel its true character: powerful, sometimes contradictory, eternal and full of endless stories.",
      hy: "Հռոմի քաղաքային զբոսանքը պարզապես ծանոթություն չէ հնագույն հուշարձաններին։ Սա ճանապարհորդություն է դեպի քաղաքակրթության ակունքները՝ մի քաղաք, որտեղ ծնվել և զարգացել է կայսրություն, որի օրենքները, ճարտարապետությունը, մշակույթն ու քաղաքական գաղափարները դարեր շարունակ ազդել են ամբողջ աշխարհի վրա։\n\n" +
          "Մեր զբոսանքի ընթացքում կբացահայտենք Հռոմի հազարամյա պատմությունը՝ սկսած Հռոմեական կայսրության փառքից մինչև Վերածննդի և բարոկկոյի շքեղությունը։ Կոլիզեումը՝ հռոմեական ինժեներական մտքի բացառիկ գլուխգործոցը, կպատկերացնենք գլադիատորների մարտերը և կբացահայտենք կայսրերի, քաղաքական պայքարների և Հին Հռոմի առօրյա կյանքի պատմությունները։\n\n" +
          "Կշարունակենք դեպի Վենետիկի հրապարակ, Տրևիի շատրվան, Պանթեոն և Նավոնա հրապարակ՝ ծանոթանալով քաղաքի ճարտարապետական գանձերին և մեծ վարպետների ստեղծագործություններին։ Կխոսենք նաև Հռոմի և Վատիկանի առանձնահատուկ հարաբերությունների, պապական իշխանության, եկեղեցու ազդեցության և քաղաքի հոգևոր ժառանգության մասին։\n\n" +
          "Հռոմը բացահայտելն անհնար է առանց նրա խոհանոցի։ Կծանոթանանք իտալական գաստրոնոմիայի ամենահայտնի ավանդույթներին՝ պաստա կարբոնարայից մինչև կաչո է պեպե, կբացահայտենք հռոմեական սուրճի մշակույթը և քաղաքի հին սրճարանների մթնոլորտը։\n\n" +
          "Այս զբոսանքը հնարավորություն է տալիս ոչ միայն տեսնել Հռոմը, այլև զգալ նրա իրական բնավորությունը՝ հզոր, երբեմն հակասական, հավերժական և անսպառ պատմություններով լի։"
    },
    t4: {
      en: "### VENICE: a city built on water, a world of love and secrets\n\n" +
          "Venice is not just a beautiful city. It's an extraordinary civilisation built on water, where for centuries trade, diplomacy, art and sea power created one of the most unusual cities in the world.\n\n" +
          "On our walk we'll discover the history of the Republic of Venice, the secrets of its wealth and the time when this small sea state controlled the most important trade routes of the Mediterranean. We'll start near Santa Lucia station and continue to the historic heart of the city, through narrow streets, over bridges and along the canals.\n\n" +
          "We'll see the Rialto Bridge, the historic centre of the city's trade and today one of its most romantic places. We'll admire St Mark's Square, St Mark's Basilica and the splendour of the Doge's Palace. We'll learn about the power of the Venetian doges, how the republic was governed and the mysterious system that kept Venice politically stable for centuries.\n\n" +
          "We'll tell you about the tradition of Venetian masks, the carnival, the famous glassmakers and the secrets of Murano glass. We'll also uncover the city's love stories, legends and secret passages.\n\n" +
          "Venice is not only history, it's also a way of life. We'll get to know Venetian cafés, local cicchetti, seafood dishes and the Italian aperitivo culture.\n\n" +
          "This walk lets you feel the unique atmosphere of Venice, in its world of canals, bridges, palaces and centuries-old secrets.",
      hy: "### ՎԵՆԵՏԻԿ․ ջրի վրա կառուցված քաղաք, սիրո և գաղտնիքների աշխարհ\n\n" +
          "Վենետիկը պարզապես գեղեցիկ քաղաք չէ։ Սա բացառիկ քաղաքակրթություն է՝ կառուցված ջրի վրա, որտեղ դարեր շարունակ առևտուրը, դիվանագիտությունը, արվեստը և ծովային հզորությունը ստեղծել են աշխարհի ամենաարտասովոր քաղաքներից մեկը։\n\n" +
          "Մեր զբոսանքի ընթացքում կբացահայտենք Վենետիկի հանրապետության պատմությունը, նրա հարստության գաղտնիքները և այն ժամանակաշրջանը, երբ այս փոքրիկ ծովային պետությունը վերահսկում էր Միջերկրական ծովի առևտրի կարևորագույն ուղիները։ Կսկսենք զբոսանքը Սանտա Լուչիա կայարանի մոտից և կշարունակենք դեպի քաղաքի պատմական սիրտը՝ անցնելով նեղ փողոցներով, կամուրջներով և ջրանցքների ափերով։\n\n" +
          "Կտեսնենք Ռիալտոյի կամուրջը՝ քաղաքի առևտրային կյանքի պատմական կենտրոնը, իսկ այսօր ամենառոմանտիկ վայրերից մեկը։ Կհիանանք Սուրբ Մարկոսի հրապարակով, Սուրբ Մարկոսի տաճարով և Դոժերի պալատի շքեղությամբ։ Կծանոթանանք վենետիկյան դոժերի իշխանությանը, հանրապետության կառավարման առանձնահատկություններին և այն խորհրդավոր համակարգին, որը դարեր շարունակ պահպանեց Վենետիկի քաղաքական կայունությունը։\n\n" +
          "Կպատմենք Վենետիկի դիմակների ավանդույթի, կառնավալի, հայտնի ապակեգործների և Մուրանոյի ապակու գաղտնիքների մասին։ Կբացահայտենք նաև քաղաքի սիրային պատմությունները, լեգենդներն ու գաղտնի անցուղիները։\n\n" +
          "Վենետիկը միայն պատմություն չէ, այն նաև առանձնահատուկ կենսակերպ է։ Կծանոթանանք վենետիկյան սրճարաններին, տեղական cicchetti-ներին, ծովամթերքի ուտեստներին և իտալական ապերիտիվոյի մշակույթին։\n\n" +
          "Այս զբոսանքը հնարավորություն է տալիս զգալ Վենետիկի անկրկնելի մթնոլորտը՝ նրա ջրանցքների, կամուրջների, պալատների և դարավոր գաղտնիքների աշխարհում։"
    },
    t8: { en: "San Lazzaro degli Armeni is a small island in the Venetian lagoon, home since 1717 of the Mekhitarist monks, an Armenian Catholic congregation. Its monastery keeps a rich library and museum of Armenian manuscripts, books and art, and Lord Byron came here to learn Armenian.",
          hy: "Սուրբ Ղազարը փոքրիկ կղզի է Վենետիկի ծովածոցում, որտեղ 1717 թվականից ապրում և աշխատում են Մխիթարյան միաբանության հայ վանականները։ Վանքում պահվում են հայկական ձեռագրերի, գրքերի և արվեստի հարուստ գրադարան և թանգարան, իսկ լորդ Բայրոնն այստեղ էր եկել հայերեն սովորելու։" },
    tr1: { en: "", hy: "" } };

  // Place texts shared by several Tuscany tours. Each starts with its own heading (###); a tour shows the places it visits, in route order.
  var PLACE = {
    siena: {
      en: "### SIENA: the heart of medieval Tuscany, a city kept in time\n\n" +
          "Siena is one of the most charming cities in Tuscany, an exceptional blend of medieval architecture, rich history and centuries-old traditions.\n\n" +
          "Here every street, square and building tells of a time when Siena was a powerful and wealthy city-republic, and its main rival was neighbouring Florence.\n\n" +
          "We'll see Siena's magnificent cathedral, the Duomo di Siena, and discover the treasures of its Gothic architecture, sculpture and art.\n\n" +
          "We'll round off the walk with Tuscan cuisine: local pasta, cheeses, wines and Siena's famous sweets, panforte and ricciarelli.\n\n" +
          "Siena lets you not only see a medieval city, but feel its pride, its traditions and the special atmosphere it has kept through the centuries.",
      hy: "### ՍԻԵՆԱ․ միջնադարյան Տոսկանայի սիրտը և ժամանակի մեջ պահպանված քաղաքը\n\n" +
          "Սիենան Տոսկանայի ամենահմայիչ քաղաքներից է՝ միջնադարյան ճարտարապետության, հարուստ պատմության և դարավոր ավանդույթների բացառիկ համադրությամբ։\n\n" +
          "Այստեղ ամեն փողոց, հրապարակ և շենք պատմում է մի ժամանակաշրջանի մասին, երբ Սիենան հզոր և հարուստ քաղաք-հանրապետություն էր, իսկ նրա գլխավոր մրցակիցը հարևան Ֆլորենցիան էր։\n\n" +
          "Կտեսնենք Սիենայի հոյակապ տաճարը՝ Duomo di Siena, և կբացահայտենք նրա գոթական ճարտարապետության, քանդակների ու արվեստի գանձերը։\n\n" +
          "Զբոսանքը կլրացնենք տոսկանական խոհանոցի բացահայտմամբ՝ տեղական մակարոնեղենով, պանիրներով, գինիներով և Սիենայի հայտնի քաղցրավենիքներով՝ պանֆորտեով և ռիցիարելլիով։\n\n" +
          "Սիենան հնարավորություն է տալիս ոչ միայն տեսնել միջնադարյան քաղաքը, այլև զգալ նրա հպարտությունը, ավանդույթները և այն առանձնահատուկ մթնոլորտը, որը պահպանվել է դարերի ընթացքում։"
    },
    sangimignano: {
      en: "### SAN GIMIGNANO: the city of medieval towers, a stone fairy tale of Tuscany\n\n" +
          "San Gimignano is one of those Tuscan towns where time seems to have stopped a few centuries ago. Its stone streets, medieval towers and little squares create an exceptional atmosphere that has earned it the name \"the medieval Manhattan\".\n\n" +
          "On our walk we'll discover how this small town became one of the important trade and economic centres of medieval Tuscany.\n\n" +
          "We'll tell the story of the town's famous towers.\n\n" +
          "We'll visit Piazza del Duomo and Piazza della Cisterna, the town's most beautiful historic squares. We'll see the frescoes of the Collegiata church, the medieval architecture and important chapters of the town's history.\n\n" +
          "We'll also talk about San Gimignano's geographical position.\n\n" +
          "And this corner of Tuscany can't be discovered without its food traditions. We'll get to know the famous white wine Vernaccia di San Gimignano, the local cuisine, Tuscan cheeses and olive oil. You'll also have the chance to taste the town's famous gelato.",
      hy: "### ՍԱՆ ՋԻՄԻՆՅԱՆՈ․ միջնադարյան աշտարակների քաղաքը և Տոսկանայի քարե հեքիաթը\n\n" +
          "Սան Ջիմինյանոն Տոսկանայի այն քաղաքներից է, որտեղ թվում է՝ ժամանակը կանգ է առել մի քանի դար առաջ։ Նրա քարե փողոցները, միջնադարյան աշտարակները և փոքրիկ հրապարակները ստեղծում են մի բացառիկ մթնոլորտ, որը քաղաքին տվել է «միջնադարյան Մանհեթեն» անվանումը։\n\n" +
          "Մեր զբոսանքի ընթացքում կբացահայտենք, թե ինչպես է այս փոքրիկ քաղաքը դարձել միջնադարյան Տոսկանայի կարևոր առևտրային և տնտեսական կենտրոններից մեկը։\n\n" +
          "Կպատմենք քաղաքի հայտնի աշտարակների պատմությունը։\n\n" +
          "Կայցելենք Պիացցա դել Դուոմո և Պիացցա դելլա Չիստեռնա՝ քաղաքի ամենագեղեցիկ պատմական հրապարակները։ Կծանոթանանք Կոլլեջիատայի եկեղեցու որմնանկարներին, միջնադարյան ճարտարապետությանը և քաղաքի պատմության կարևոր դրվագներին։\n\n" +
          "Կխոսենք նաև Սան Ջիմինյանոյի աշխարհագրական դիրքի մասին։\n\n" +
          "Իսկ Տոսկանայի այս անկյունը հնարավոր չէ բացահայտել առանց նրա գաստրոնոմիական ավանդույթների։ Կծանոթանանք հայտնի Vernaccia di San Gimignano սպիտակ գինուն, տեղական խոհանոցին, տոսկանական պանիրներին և ձիթապտղի յուղին։ Կունենանք նաև հնարավորություն համտեսելու քաղաքի հայտնի պաղպաղակը։"
    },
    tuscany: {
      en: "### TUSCANY: a world of hills, vineyards and the Italian Dolce Vita\n\n" +
          "Tuscany is not just a region of Italy. It's a symbol of Italian beauty, art, wine and a philosophy of life.\n\n" +
          "On our journey we'll discover Tuscany's beautiful countryside: gentle hills, avenues of cypresses, vineyards, olive groves and small medieval towns.\n\n" +
          "We'll learn about the region's history, its rural traditions and the culture that has made Tuscany one of the world's best-loved destinations.\n\n" +
          "We'll visit old villages, discover Tuscan architecture and local crafts, and get to know the traditions of growing grapes and making wine.\n\n" +
          "Food is an essential part of a Tuscan journey. We'll taste local wines, olive oil, cheeses, truffles and traditional dishes, and discover the atmosphere of family wineries and agriturismi.\n\n" +
          "This journey is for those who want to see not only Italy's famous cities, but feel its real life, through its nature, flavours, traditions and unique beauty.",
      hy: "### ՏՈՍԿԱՆԱ․ բլուրների, խաղողի այգիների և իտալական Dolce Vita-ի աշխարհը\n\n" +
          "Տոսկանան պարզապես Իտալիայի մի տարածաշրջան չէ։ Սա իտալական գեղեցկության, արվեստի, գինու և կյանքի փիլիսոփայության խորհրդանիշն է։\n\n" +
          "Մեր ճանապարհորդության ընթացքում կբացահայտենք Տոսկանայի գեղատեսիլ բնությունը՝ մեղմ բլուրներ, նոճիների ծառուղիներ, խաղողի այգիներ, ձիթենու պուրակներ և միջնադարյան փոքրիկ քաղաքներ։\n\n" +
          "Կծանոթանանք տարածաշրջանի պատմությանը, գյուղական ավանդույթներին և այն մշակույթին, որը Տոսկանան դարձրել է աշխարհի ամենասիրված զբոսաշրջային ուղղություններից մեկը։\n\n" +
          "Կայցելենք հին բնակավայրեր, կբացահայտենք տոսկանական ճարտարապետությունն ու տեղական արհեստները, կծանոթանանք խաղողագործության և գինեգործության ավանդույթներին։\n\n" +
          "Տոսկանական ճանապարհորդության անբաժանելի մասն է գաստրոնոմիան։ Կհամտեսենք տեղական գինիներ, ձիթապտղի յուղ, պանիրներ, տրյուֆել և ավանդական ուտեստներ։ Կբացահայտենք նաև ընտանեկան գինեգործարանների և ագրիտուրիզմների մթնոլորտը։\n\n" +
          "Այս ճանապարհորդությունը նրանց համար է, ովքեր ցանկանում են տեսնել ոչ միայն Իտալիայի հայտնի քաղաքները, այլև զգալ նրա իսկական կյանքը՝ բնության, համերի, ավանդույթների և անկրկնելի գեղեցկության միջոցով։"
    },
    lucca: {
      en: "### LUCCA: the medieval charm of Tuscany and the Italian art of a relaxed life\n\n" +
          "Lucca is one of those Tuscan towns where time seems to move more slowly. Its preserved medieval streets, historic squares, churches and old city walls create an atmosphere that lets you feel the real rhythm of Tuscan life.\n\n" +
          "On our walk we'll discover the town's rich history, from Roman times to the Middle Ages and the Renaissance.\n\n" +
          "We'll walk along the famous defensive walls, which today have become a lovely park and promenade. We'll see Piazza dell'Anfiteatro, a unique oval square built on the foundations of a Roman amphitheatre.\n\n" +
          "We'll visit the church of San Michele in Foro, learn the history of San Martino Cathedral and uncover the secret of the Guinigi Tower, famous for the trees growing on its top.\n\n" +
          "Lucca is also a city of music: the world-famous composer Giacomo Puccini was born here. We'll learn about his life and his path as a composer.\n\n" +
          "We'll round off the walk with the flavours of Tuscan cuisine, local cafés, wines and traditional sweets.\n\n" +
          "Lucca lets you discover not only Tuscany's famous sights, but its calmer, more refined and authentic side.",
      hy: "### ԼՈՒԿԿԱ․ Տոսկանայի միջնադարյան հմայքը և իտալական հանգիստ կյանքի արվեստը\n\n" +
          "Լուկկան Տոսկանայի այն քաղաքներից է, որտեղ ժամանակը կարծես ավելի դանդաղ է ընթանում։ Նրա պահպանված միջնադարյան փողոցները, պատմական հրապարակները, եկեղեցիներն ու հին քաղաքի պարիսպները ստեղծում են մի մթնոլորտ, որը թույլ է տալիս զգալ իսկական տոսկանական կյանքի ռիթմը։\n\n" +
          "Մեր զբոսանքի ընթացքում կբացահայտենք քաղաքի հարուստ պատմությունը՝ սկսած հռոմեական ժամանակներից մինչև միջնադար և Վերածնունդ։\n\n" +
          "Կքայլենք քաղաքի հայտնի պաշտպանական պարիսպներով, որոնք այսօր վերածվել են գեղեցիկ զբոսայգու և զբոսանքի վայրի։ Կտեսնենք Պիացցա դել Անֆիտեատրոն՝ հռոմեական ամֆիթատրոնի հիմքերի վրա ձևավորված յուրահատուկ օվալաձև հրապարակը։\n\n" +
          "Կայցելենք Սան Միկելե ին Ֆորո եկեղեցին, կծանոթանանք Սան Մարտինոյի տաճարի պատմությանը և կբացահայտենք Գվինիջի աշտարակի գաղտնիքը՝ նրա գագաթին աճող ծառերով հայտնի բացառիկ ճարտարապետական լուծումը։\n\n" +
          "Լուկկան նաև երաժշտության քաղաք է․ այստեղ է ծնվել աշխարհահռչակ կոմպոզիտոր Ջակոմո Պուչինին։ Կծանոթանանք նրա կյանքի և ստեղծագործական ճանապարհի հետ։\n\n" +
          "Զբոսանքը կլրացնենք տոսկանական խոհանոցի համերով, տեղական սրճարաններով, գինիներով և ավանդական քաղցրավենիքներով։\n\n" +
          "Լուկկան հնարավորություն է տալիս բացահայտել Տոսկանայի ոչ միայն հայտնի տեսարժան վայրերը, այլև նրա ավելի հանգիստ, նրբաճաշակ և իսկական կողմը։"
    },
    pisa: {
      en: "### PISA: the mystery of the tower and the glory of a medieval sea republic\n\n" +
          "On our walk we'll discover the time when Pisa was one of the most powerful sea republics of the Mediterranean, competing with Genoa and Venice.\n\n" +
          "We'll visit the Square of Miracles, Piazza dei Miracoli, home to the city's main architectural treasures: the famous Leaning Tower, the Cathedral of Santa Maria Assunta, the Baptistery and the monumental cemetery.\n\n" +
          "We'll explain why the tower began to lean, how people tried to save it over the centuries and which engineering solutions have preserved this unique monument.\n\n" +
          "We'll learn about Pisa's sea power, its trade, the political struggles of the Middle Ages and the families that played an important role in the city's history.\n\n" +
          "Pisa lets you discover not only one of the most famous buildings in the world, but the history of a whole seafaring civilisation.",
      hy: "### ՊԻԶԱ․ աշտարակի առեղծվածը և միջնադարյան ծովային հանրապետության փառքը\n\n" +
          "Մեր զբոսանքի ընթացքում կբացահայտենք Պիզայի այն ժամանակաշրջանը, երբ այն Միջերկրական ծովի հզորագույն ծովային հանրապետություններից մեկն էր և մրցակցում էր Ջենովայի ու Վենետիկի հետ։\n\n" +
          "Կայցելենք Հրաշքների հրապարակը՝ Piazza dei Miracoli, որտեղ գտնվում են քաղաքի գլխավոր ճարտարապետական գանձերը՝ հանրահայտ թեք աշտարակը, Սանտա Մարիա Ասունտայի տաճարը, մկրտարանը և հուշարձանային գերեզմանատունը։\n\n" +
          "Կպատմենք, թե ինչու է աշտարակը սկսել թեքվել, ինչպես են դարերի ընթացքում փորձել փրկել այն և ինչ ինժեներական լուծումներ են թույլ տվել պահպանել այս եզակի հուշարձանը։\n\n" +
          "Կծանոթանանք Պիզայի ծովային հզորության, առևտրի, միջնադարյան քաղաքական պայքարների և քաղաքի պատմության մեջ կարևոր դեր ունեցած ընտանիքների մասին։\n\n" +
          "Պիզան հնարավորություն է տալիս բացահայտել ոչ միայն աշխարհի ամենահայտնի ճարտարապետական հուշարձաններից մեկը, այլև մի ամբողջ ծովային քաղաքակրթության պատմություն։"
    }
  };
  PLACE.vatican = {
    en: "### THE VATICAN: the world's smallest state, with a vast legacy of art and spiritual power\n\n" +
        "The Vatican is not just the smallest state in the world. It's an exceptional place where two thousand years of Christian history, world art, architecture and spiritual power come together.\n\n" +
        "On our walk we'll visit St Peter's Square, Gian Lorenzo Bernini's architectural masterpiece, and discover the secrets of its symbolic colonnade.\n\n" +
        "We'll visit St Peter's Basilica, one of the most important churches in the Christian world. We'll uncover the story of how it was built, the contribution of great architects, and the works of Michelangelo, Bernini and other masters.\n\n" +
        "We'll pay special attention to Michelangelo's Pietà, and to Bernini's magnificent Baldacchino at the centre of the basilica.\n\n" +
        "We'll also talk about the story of St Peter the Apostle, how popes are elected in the conclave, the Swiss Guard and the Vatican's unique structure as a state.\n\n" +
        "This walk lets you not only see masterpieces of world art, but understand how a tiny state became one of the most important centres of world history, religion and culture.\n\n" +
        "**Note: this tour is for St Peter's Square and St Peter's Basilica. It does not include the Vatican Museums or the Sistine Chapel.**",
    hy: "### ՎԱՏԻԿԱՆ․ աշխարհի ամենափոքր պետությունը՝ արվեստի և հոգևոր իշխանության հսկայական ժառանգությամբ\n\n" +
        "Վատիկանը պարզապես աշխարհի ամենափոքր պետությունը չէ։ Սա մի բացառիկ վայր է, որտեղ միավորվում են քրիստոնեության երկու հազարամյա պատմությունը, համաշխարհային արվեստը, ճարտարապետությունը և հոգևոր իշխանությունը։\n\n" +
        "Մեր զբոսանքի ընթացքում կայցելենք Սուրբ Պետրոսի հրապարակը՝ Ջան Լորենցո Բերնինիի ճարտարապետական գլուխգործոցը, և կծանոթանանք նրա խորհրդանշական սյունաշարի գաղտնիքներին։\n\n" +
        "Կայցելենք Սուրբ Պետրոսի տաճարը՝ քրիստոնեական աշխարհի ամենանշանավոր տաճարներից մեկը։ Կբացահայտենք նրա կառուցման պատմությունը, մեծ ճարտարապետների ներդրումը և Միքելանջելոյի, Բերնինիի ու այլ վարպետների ստեղծագործությունները։\n\n" +
        "Հատուկ ուշադրություն կդարձնենք Միքելանջելոյի «Պիետա» քանդակին, ինչպես նաև Բերնինիի հոյակապ բալդախինին, որը գտնվում է տաճարի կենտրոնում։\n\n" +
        "Կխոսենք նաև Սուրբ Պետրոս առաքյալի պատմության, պապերի ընտրության՝ կոնկլավի, Շվեյցարական գվարդիայի և Վատիկանի առանձնահատուկ պետական կառուցվածքի մասին։\n\n" +
        "Այս զբոսանքը հնարավորություն է տալիս ոչ միայն տեսնել համաշխարհային արվեստի գլուխգործոցները, այլև հասկանալ, թե ինչպես է մի փոքրիկ պետություն դարձել համաշխարհային պատմության, կրոնի և մշակույթի կարևորագույն կենտրոններից մեկը։\n\n" +
        "**Նշում․ այս տուրը նախատեսված է Վատիկանի հրապարակն ու Սուրբ Պետրոսի տաճարը տեսնելու համար և չի ներառում Վատիկանի թանգարաններն ու Սիքստինյան կապելլան։**"
  };
  // Vatican tour with the Museums: the same Vatican text, with the Museums instead of the note
  PLACE.vaticanMuseums = {
    en: PLACE.vatican.en.replace(/\n\n\*\*Note:[\s\S]*$/, "") + "\n\n" +
        "After a coffee break we'll continue to the Vatican Museums: the papal collections, ancient sculptures and Renaissance masterpieces, ending in the Sistine Chapel with Michelangelo's famous frescoes.\n\n" +
        "**Note: tickets for the Vatican Museums are not included.**",
    hy: PLACE.vatican.hy.replace(/\n\n\*\*Նշում[\s\S]*$/, "") + "\n\n" +
        "Սուրճի ընդմիջումից հետո կշարունակենք դեպի Վատիկանի թանգարաններ՝ պապական հավաքածուներ, հնագույն քանդակներ և Վերածննդի գլուխգործոցներ, իսկ ավարտին՝ Սիքստինյան կապելլա՝ Միքելանջելոյի նշանավոր որմնանկարներով։\n\n" +
        "**Նշում․ Վատիկանի թանգարանների տոմսերը ներառված չեն։**"
  };
  // Rome and the Vatican: the Rome city walk text, then the Vatican
  PLACE.rome = { en: "### ROME: the Eternal City\n\n" + LONG.t3.en, hy: "### ՀՌՈՄ․ Հավերժական քաղաքը\n\n" + LONG.t3.hy };
  // Which place texts each tour shows (in route order)
  var TOUR_PLACES = {
    t9: ["siena", "sangimignano", "tuscany"], t18: ["sangimignano", "tuscany"], t10: ["sangimignano", "tuscany"],
    t11: ["tuscany"], t6: ["tuscany"], t12: ["pisa", "lucca"], t13: ["pisa"], t15: ["sangimignano"],
    t7: ["vatican"], t19: ["vaticanMuseums"], t17: ["rome", "vatican"]
  };
  Object.keys(TOUR_PLACES).forEach(function (id) {
    LONG[id] = { en: TOUR_PLACES[id].map(function (p) { return PLACE[p].en; }).join("\n\n"),
                 hy: TOUR_PLACES[id].map(function (p) { return PLACE[p].hy; }).join("\n\n") };
  });

  // Team members. Each has a page: page.html?p=team&id=… — write the bio texts (bioEn / bioHy) and they show there.
  var GUIDES = [
    { id: "gaya", en: "Gaya Ayvazyan", hy: "Գայա Այվազյան", photo: "img/gaya.jpg", pos: "60% 51%", zoom: 3.2,
      roleHy: "Ital Travel-ի համահիմնադիր | Զբոսավար և մշակութային պատմությունների բացահայտող",
      roleEn: "Co-founder of Ital Travel | Guide and storyteller of cultural history",
      bioHy: "### Ծանոթացե՛ք Գայայի հետ․ երբ պատմությունը կենդանանում է\n" +
        "*Որոշ զբոսավարներ պատմում են պատմությունը։ Գայան օգնում է ձեզ տեսնել, զգալ և վերաիմաստավորել այն։*\n" +
        "Գայայի համար պատմությունը պարզապես տարեթվերի, անունների և հուշարձանների հավաքածու չէ։ Այն կենդանի աշխարհ է, որտեղ յուրաքանչյուր մանրուք իր նշանակությունն ունի։ Նա կարողանում է անցյալը կապել ներկայի հետ, բացահայտել առաջին հայացքից աննկատ դետալները և սովորական զբոսանքը վերածել հետաքրքիր ու հիշարժան ճանապարհորդության։\n" +
        "Որպես *Ital Travel-ի համահիմնադիր*՝ Գայան համատեղում է իր երկարամյա փորձը, մշակույթի հանդեպ սերն ու պատմություններ ներկայացնելու յուրահատուկ տաղանդը։\n" +
        "Լեզվաբանական կրթությունն ու մասնագիտական փորձը նրան սովորեցրել են բառի իրական ուժը։ Նրա յուրաքանչյուր պատմություն մտածված է այնպես, որ դուք ոչ թե պարզապես լսեք պատմական փաստերը, այլ կարողանաք պատկերացնել իրադարձությունները, վերլուծել դրանք և հասկանալ դրանց նշանակությունը։\n" +
        "Նրա մասնագիտական ճանապարհը սկսվել է հայրենիքում, որտեղ տարիներ շարունակ ուսումնասիրել և այցելուներին ներկայացրել է սեփական երկրի պատմությունն ու մշակութային ժառանգությունը։ Այսօր Գայան իր գիտելիքներն ու փորձը կիրառում է Իտալիայում՝ ճանապարհորդներին առաջարկելով բացահայտել երկիրը նոր տեսանկյունից։\n" +
        "*Գայայի հետ սովորական զբոսանքներ չեն լինում։*\n" +
        "Աննշան թվացող մանրուքը կարող է դառնալ հետաքրքիր բացահայտում, իսկ ծանոթ փողոցը՝ պատմական իրադարձությունների վկան։ Նրա շրջագայությունների ընթացքում դուք ոչ միայն ծանոթանում եք տեսարժան վայրերին, այլև սովորում եք նկատել այն, ինչի կողքով շատերն անտարբեր անցնում են։\n" +
        "*Գայան պարզապես ցույց չի տալիս՝ ինչին նայել։ Նա սովորեցնում է՝ ինչպես տեսնել։*\n" +
        "Նրա համոզմամբ՝ ճանապարհորդության իրական արժեքը չի չափվում այցելած վայրերի քանակով, այլ այն գիտելիքներով, զգացողություններով և նոր հայացքներով, որոնք ձեռք եք բերում ճանապարհին։\n" +
        "*Գայայի առաքելությունն է, որ յուրաքանչյուր շրջագայությունից վերադառնաք ոչ միայն գեղեցիկ լուսանկարներով, այլև նոր գիտելիքներով, անմոռանալի տպավորություններով և պատմություններով, որոնք ձեզ հետ կմնան երկար տարիներ։*\n" +
        "Քայլե՛ք Գայայի հետ։ Տեսե՛ք ավելին, քան տեսանելի է առաջին հայացքից։",
      bioEn: "### Meet Gaya: where history comes alive\n" +
        "*Some guides tell history. Gaya helps you see it, feel it and understand it in a new way.*\n" +
        "For Gaya, history is not just a collection of dates, names and monuments. It is a living world where every detail has its meaning. She connects the past with the present, reveals details that are easy to miss at first glance, and turns an ordinary walk into an interesting and memorable journey.\n" +
        "As *co-founder of Ital Travel*, Gaya brings together many years of experience, a love of culture and a rare talent for telling stories.\n" +
        "Her background in linguistics and her professional experience have taught her the real power of words. Each of her stories is built so that you don't just hear historical facts, but can picture the events, think them through and understand what they mean.\n" +
        "Her career began in her homeland, where for years she studied and presented her own country's history and cultural heritage to visitors. Today Gaya brings that knowledge and experience to Italy, inviting travellers to discover the country from a new angle.\n" +
        "*With Gaya, there is no such thing as an ordinary walk.*\n" +
        "A detail that seems small can become a fascinating discovery, and a familiar street a witness to history. On her tours you don't only see the sights, you learn to notice what most people walk past without a second look.\n" +
        "*Gaya doesn't just show you what to look at. She teaches you how to see.*\n" +
        "She believes the real value of a journey is not measured by the number of places visited, but by the knowledge, feelings and new perspectives you gain along the way.\n" +
        "*Gaya's mission is for you to come back from every tour not only with beautiful photos, but with new knowledge, unforgettable impressions and stories that stay with you for years.*\n" +
        "Walk with Gaya. See more than meets the eye." },
    { id: "feliks", en: "Feliks Yeghiazaryan", hy: "Ֆելիքս Եղիազարյան", photo: "img/feliks.jpg", pos: "62% 24%", zoom: 1.5,
      roleHy: "Ital Travel-ի զբոսավար | Սոցիալական մեդիայի մենեջեր | Կայուն զարգացման մասնագետ",
      roleEn: "Ital Travel guide | Social media manager | Sustainability specialist",
      bioHy: "### Ծանոթացե՛ք Ֆելիքսի հետ․ բացահայտե՛ք Իտալիան նորովի 🇮🇹\n" +
        "*Որոշ զբոսավարներ ցույց են տալիս տեսարժան վայրերը։ Ֆելիքսը օգնում է սիրահարվել Իտալիային։*\n" +
        "Ֆելիքսի համար ճանապարհորդությունը միայն պատմական հուշարձաններ այցելելը չէ։ Այն նոր մարդկանց, մշակույթների, համերի ու հետաքրքիր վայրերի բացահայտում է՝ լի անմոռանալի պահերով և անսպասելի արկածներով։\n" +
        "Որպես զբոսավար, սոցիալական մեդիայի մենեջեր և կայուն զարգացման մասնագետ՝ Ֆելիքսը համատեղում է պատմության ու մշակույթի հանդեպ հետաքրքրությունը ժամանակակից իտալական կենսակերպի հետ։ Նրա էներգիան, գիտելիքներն ու ստեղծագործական մոտեցումը յուրաքանչյուր շրջագայություն դարձնում են յուրահատուկ։\n" +
        "*Նա գիտի՝ ուր գնալ, ինչ փորձել և որտեղ գտնել Իտալիայի լավագույնը։*\n" +
        "Ֆլորենցիայի պատմական փողոցներ, տեղացիների սիրելի սրճարաններ, ավանդական տրատորիաներ, շքեղ ռեստորաններ, տանիքային բարեր ու քաղաքի ամենագեղեցիկ տեսարաններ․ Ֆելիքսի հետ դուք կբացահայտեք Իտալիայի տարբեր կողմերը։\n" +
        "Ցանկանո՞ւմ եք իտալացի խոհարարների հետ պատրաստել թարմ պաստա, համտեսել տոսկանական գինիներ, վայելել Aperol Spritz՝ քաղաքի հիասքանչ տեսարանով, թե պարզապես զգալ իսկական իտալական La Dolce Vita-ն։\n" +
        "*Ֆելիքսի հետ ձեր շրջագայությունը դուրս է գալիս սովորական էքսկուրսիայի սահմաններից։*\n" +
        "Նա կարողանում է համատեղել պատմությունը, գաստրոնոմիան, ժամանցն ու տեղական մշակույթը՝ յուրաքանչյուր փորձառություն հարմարեցնելով հյուրերի հետաքրքրություններին։\n" +
        "Սոցիալական մեդիայի ոլորտում իր փորձի շնորհիվ Ֆելիքսը նաև գիտի քաղաքի ամենաֆոտոգենիկ անկյունները և օգնում է որսալ այն պահերը, որոնք արժանի են պահպանվելու ու կիսվելու։\n" +
        "*Նրա նպատակն է, որ դուք ոչ թե պարզապես այցելեք Իտալիա, այլ ապրեք իտալական կյանքով՝ թեկուզ մի քանի օրով։*\n" +
        "Որպեսզի տուն վերադառնաք ոչ միայն գեղեցիկ լուսանկարներով, այլև նոր ծանոթություններով, անմոռանալի զգացողություններով և պատմություններով, որոնք դեռ երկար կհիշեք։\n" +
        "Ճանապարհորդե՛ք Ֆելիքսի հետ։ Բացահայտե՛ք ավելին։ Ապրե՛ք իսկական Իտալիան։ 🇦🇲🇮🇹",
      bioEn: "### Meet Feliks: discover Italy in a new way 🇮🇹\n" +
        "*Some guides show you the sights. Feliks helps you fall in love with Italy.*\n" +
        "For Feliks, travel is not only about visiting historical monuments. It is about discovering new people, cultures, flavours and interesting places, full of unforgettable moments and unexpected adventures.\n" +
        "As a guide, social media manager and sustainability specialist, Feliks combines a passion for history and culture with the modern Italian way of life. His energy, knowledge and creative approach make every tour unique.\n" +
        "*He knows where to go, what to try and where to find the best of Italy.*\n" +
        "The historic streets of Florence, the cafés locals love, traditional trattorias, elegant restaurants, rooftop bars and the city's most beautiful views: with Feliks you'll discover many different sides of Italy.\n" +
        "Would you like to make fresh pasta with Italian chefs, taste Tuscan wines, enjoy an Aperol Spritz with a stunning view of the city, or simply feel the real Italian La Dolce Vita?\n" +
        "*With Feliks, your tour goes beyond an ordinary excursion.*\n" +
        "He brings together history, food, fun and local culture, shaping every experience around his guests' interests.\n" +
        "Thanks to his experience in social media, Feliks also knows the city's most photogenic corners and helps you capture the moments worth keeping and sharing.\n" +
        "*His goal is for you not just to visit Italy, but to live the Italian life, even if only for a few days.*\n" +
        "So that you go home not only with beautiful photos, but with new friendships, unforgettable feelings and stories you'll remember for a long time.\n" +
        "Travel with Feliks. Discover more. Live the real Italy. 🇦🇲🇮🇹" }
  ];

  // filter "top" = the "Top tours" button (shown first); "all" = every tour (used by the search bar)
  var TOP = ["t1", "t17", "t5", "t9", "t16", "t14"];
  var state = { lang: "hy", filter: "top", kind: "all", adults: 2, open: {}, sel: "t1", place: null };
  try { var s = localStorage.getItem("ital-lang"); if (s === "hy" || s === "en") state.lang = s; } catch (e) {}
  // ?lang=en / ?lang=hy in the address wins, so each language has its own address that Google can show
  (function () { var q = new URLSearchParams(location.search).get("lang"); if (q === "hy" || q === "en") { state.lang = q; try { localStorage.setItem("ital-lang", q); } catch (e) {} } })();

  /* ---- Search engines: each language has its own address (Armenian = no ?lang, English = ?lang=en).
     seo({ title, desc }) sets the page title, description, share texts, the canonical address and the
     links between the two language versions (hreflang). ---- */
  var SEO_KEEP = ["id", "p", "city"]; // address parts that make a different page; everything else (tracking, ?ref, ?book) is left out
  /* Each tour and info page also has its own address with its title and text built in, so Google sees one
     page per tour (made by tools/build-pages.ps1 from trip.html / info.html). The file says which page it is
     with <html data-id="t1"> or <html data-p="faq" data-id="…">; qp() reads the address first, then those. */
  var SLUG = {
    t1: "florence-walking-tour", t5: "florence-cooking-class", t6: "tuscany-private-tours", t15: "florence-san-gimignano-private-tour",
    t16: "florence-fiat-500-tour", t9: "siena-san-gimignano-chianti-tour", t18: "san-gimignano-monteriggioni-chianti-tour",
    t10: "san-gimignano-chianti-half-day-tour", t11: "val-d-orcia-tour", t12: "pisa-lucca-tour", t13: "cinque-terre-pisa-tour",
    t14: "cinque-terre-tour", t3: "rome-walking-tour", t7: "vatican-tour", t19: "vatican-museums-tour", t17: "rome-vatican-tour",
    t4: "venice-walking-tour", t8: "san-lazzaro-armenian-island-venice", tr1: "rome-airport-transfer",
    "p:blog": "blog", "p:blog/gelato": "blog-gelato", "p:blog/coffee": "blog-coffee", "p:blog/tips": "blog-italy-travel-tips",
    "p:faq": "faq", "p:infobook": "booking-info", "p:manage": "manage-booking", "p:terms": "terms",
    "p:privacy": "privacy-policy", "p:cookies": "cookie-policy", "p:team/gaya": "team-gaya", "p:team/feliks": "team-feliks"
  };
  function qp(k) { var v = new URLSearchParams(location.search).get(k); return v != null ? v : document.documentElement.getAttribute("data-" + k); }
  // The page's own address name (without .html) for a tour id, or for an info page p (+ id); "" if it has none
  function slugOf(p, id) { return (p ? SLUG["p:" + p + (id ? "/" + id : "")] : SLUG[id]) || ""; }
  function pageUrl(lang) {
    var p = qp("p"), id = qp("id"), onHome = /\/(index\.html)?$/.test(location.pathname), slug = onHome ? "" : slugOf(p, id);
    var q = new URLSearchParams(location.search), o = new URLSearchParams();
    if (!slug) SEO_KEEP.forEach(function (k) { if (q.get(k)) o.set(k, q.get(k)); });
    if (lang === "en") o.set("lang", "en");
    var path = slug ? "/" + slug + ".html" : location.pathname.replace(/\/index\.html$/, "/"), s = o.toString().replace(/%2C/g, ",");
    return location.origin + path + (s ? "?" + s : "");
  }
  function headTag(sel, make) { var el = document.head.querySelector(sel); if (!el) { el = make(); document.head.appendChild(el); } return el; }
  function meta(attr, key, val) { headTag("meta[" + attr + '="' + key + '"]', function () { var m = document.createElement("meta"); m.setAttribute(attr, key); return m; }).setAttribute("content", val); }
  function linkTag(rel, hreflang, href) {
    var sel = 'link[rel="' + rel + '"]' + (hreflang ? '[hreflang="' + hreflang + '"]' : "");
    headTag(sel, function () { var l = document.createElement("link"); l.rel = rel; if (hreflang) l.hreflang = hreflang; return l; }).href = href;
  }
  function seo(o) {
    var hy = state.lang === "hy";
    if (o.title) { document.title = o.title; meta("property", "og:title", o.title); }
    if (o.desc) { meta("name", "description", o.desc); meta("property", "og:description", o.desc); }
    meta("property", "og:locale", hy ? "hy_AM" : "en_GB");
    meta("property", "og:url", pageUrl(state.lang));
    linkTag("canonical", null, pageUrl(state.lang));
    linkTag("alternate", "hy", pageUrl("hy")); linkTag("alternate", "en", pageUrl("en")); linkTag("alternate", "x-default", pageUrl("hy"));
  }
  // After switching language, the address changes too (English adds ?lang=en), so links shared or bookmarked keep the language
  function langToUrl() {
    try { var u = new URL(location.href); if (state.lang === "en") u.searchParams.set("lang", "en"); else u.searchParams.delete("lang"); history.replaceState(history.state, "", u.pathname + u.search + u.hash); } catch (e) {}
  }
  // Home page titles and descriptions with the words people search for (Armenian: "Իտալիա տուր", "հայախոս էքսկուրսավար"…)
  var SEO_HOME = {
    hy: { title: "Իտալիա տուր Հայաստանից՝ հայախոս էքսկուրսավարներով | Ital Travel",
          desc: "Տուրեր Իտալիայում հայերենով՝ Ֆլորենցիա, Հռոմ, Վատիկան, Վենետիկ և Տոսկանա։ Հայախոս էքսկուրսավարներ, խոհարարական դասեր, գինու տուրեր և տրանսֆեր։ Ամրագրեք առցանց։" },
    en: { title: "Tours in Italy with Armenian-speaking guides: Florence, Rome, Venice | Ital Travel",
          desc: "Armenian-speaking guided tours in Italy for travellers from Armenia and around the world: Florence, Rome, the Vatican, Venice, San Lazzaro and Tuscany wine tours. Book online." }
  };
  // A tour page: the tour name plus the search words, and its short description with the language of the tour
  function seoTour(x) {
    var L = x[state.lang], hy = state.lang === "hy";
    seo({ title: L.t + (hy ? " | Տուրեր Իտալիայում | Ital Travel" : " | Tours in Italy | Ital Travel"),
          desc: L.d + " " + (hy ? "Լեզուն՝ " : "Language: ") + langLabel(x) + (hy ? "։ Ամրագրեք առցանց։" : ". Book online.") });
  }
  if (location.hash === "#hy") state.lang = "hy";
  if (location.hash === "#en") state.lang = "en";
  // footer links open the tours section on one of its buttons
  var toursLink = /[?&]tours=(top|rome|florence|tuscany|venice|vatican|every)\b/.exec(location.search);
  if (toursLink) state.filter = toursLink[1];

  function $(id) { return document.getElementById(id); }
  function esc(v) { return String(v).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function t() { return UI[state.lang]; }

  // Prices: flat rates for 2, 3, 4… people (one number each), and the last number is the per-person rate for bigger groups.
  //  Florence [140, 180, 200, 40] = 2:140, 3:180, 4:200, 5+: 40 each. Rome [160, 200, 240, 280, 40] = 2…5 flat, 6+: 40 each.
  function priceFor(p, n) { var f = p.length - 1, i = Math.max(0, n - 2); return i < f ? p[i] : p[f] * n; }
  // A tour's total for n adults, with its "plus" (an amount added on top of the prices). fromPrice: the smallest price on cards.
  function tourPrice(x, n) { return priceFor(x.prices, n) + (x.plus || 0); }
  function fromPrice(x) { return x.prices ? x.prices[0] + (x.plus || 0) : x.from; }

  // Currency (top right): prices are set in euros; dram and dollars are shown at today's rate.
  // Rates come from open.er-api.com once every 12 hours; RATE below is used until then (or if it fails).
  var RATE = { EUR: 1, AMD: 450, USD: 1.16 };
  try { var cs = localStorage.getItem("ital-cur"); if (RATE[cs]) state.cur = cs; } catch (e) {}
  if (!state.cur) state.cur = "EUR";
  try {
    var rc = JSON.parse(localStorage.getItem("ital-rates") || "null");
    if (rc && rc.AMD && rc.USD) { RATE.AMD = rc.AMD; RATE.USD = rc.USD; }
    if (!rc || Date.now() - rc.at > 12 * 3600e3) {
      fetch("https://open.er-api.com/v6/latest/EUR").then(function (r) { return r.json(); }).then(function (d) {
        if (!d || !d.rates || !d.rates.AMD || !d.rates.USD) return;
        RATE.AMD = d.rates.AMD; RATE.USD = d.rates.USD;
        try { localStorage.setItem("ital-rates", JSON.stringify({ AMD: RATE.AMD, USD: RATE.USD, at: Date.now() })); } catch (e) {}
        if (state.cur !== "EUR") curChanged();
      }).catch(function () {});
    }
  } catch (e) {}
  function group(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " "); }
  function eur(n) { return "€" + n; }
  // A euro amount in the chosen currency: €140 · ≈ 63 000 ֏ · ≈ $162
  function money(n) {
    if (state.cur === "AMD") return "≈ " + group(Math.round(n * RATE.AMD / 100) * 100) + " ֏";
    if (state.cur === "USD") return "≈ $" + group(Math.round(n * RATE.USD));
    return eur(n);
  }
  function curChanged() {
    document.querySelectorAll("[data-cur]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.cur === state.cur)); });
    document.dispatchEvent(new Event("it-cur"));
  }
  document.addEventListener("DOMContentLoaded", curChanged);
  document.addEventListener("it-cur", function () { if (tpl.cards) { renderTours(); if (tpl.after) tpl.after(); } });

  // Cookie choice (bottom banner): "all" = visit counting and partner codes are on, "necessary" = only settings
  // like language and currency. Nothing is counted until the visitor presses "Accept". "Cookie settings" in the footer reopens it.
  function consent() { try { return localStorage.getItem("it-consent") || ""; } catch (e) { return ""; } }
  function setConsent(v) {
    try {
      localStorage.setItem("it-consent", v);
      if (v !== "all") { localStorage.removeItem("it-v"); localStorage.removeItem("it-ref"); sessionStorage.removeItem("it-s"); }
    } catch (e) {}
    var b = $("ck-bar"); if (b) b.remove();
    document.dispatchEvent(new Event("it-consent"));
  }
  function consentBar(force) {
    var old = $("ck-bar"); if (old) old.remove();
    if (consent() && !force) return;
    var u = t(), d = document.createElement("div");
    d.id = "ck-bar"; d.className = "ck-bar"; d.setAttribute("role", "dialog"); d.setAttribute("aria-label", u.fCookies);
    d.innerHTML = "<p>" + esc(u.ckText) + ' <a href="page.html?p=cookies">' + esc(u.ckMore) + "</a></p>" +
      '<div><button type="button" class="ck-nec" data-consent="necessary">' + esc(u.ckNec) + '</button><button type="button" class="ck-all" data-consent="all">' + esc(u.ckAll) + "</button></div>";
    document.body.appendChild(d);
  }
  document.addEventListener("DOMContentLoaded", function () { consentBar(); });

  function priceInfo(x) {
    if (!x.prices) return null;
    var n = state.adults, p = x.prices, f = p.length - 1;
    return {
      total: tourPrice(x, n),
      totalLabel: t().total.replace("{n}", n) + (n - 2 >= f ? " · " + money(p[f]) + " × " + n : ""),
      from: p[f]
    };
  }
  // Location (chips / search) and activity type (search: t, e, r) together. The Rome airport transfer is listed under Rome.
  function filtered() {
    var f = state.filter, k = state.kind || "all";
    if (f === "every") return TOURS.slice(); // the "All tours" button (shown as photo tiles)
    if (f === "top") return TOP.map(function (id) { return TOURS.filter(function (x) { return x.id === id; })[0]; });
    return TOURS.filter(function (x) {
      if (f === "transfer") return x.kind === "r";
      if (f !== "all" && !inCity(x, f)) return false;
      return k === "all" || x.kind === k;
    });
  }
  // A tour belongs to its city, and also to the places listed in "also" (Rome and the Vatican is in both)
  function inCity(x, c) { return x.city === c || (x.also || []).indexOf(c) >= 0; }
  function count(city) { return TOURS.filter(function (x) { return inCity(x, city) && x.kind !== "r"; }).length; }
  function chipList() {
    return ["top", "rome", "florence", "tuscany", "venice", "vatican", "every"].map(function (id) {
      return { id: id, label: id === "top" ? t().top : id === "every" ? t().allTours : CITY[id][state.lang], on: state.filter === id };
    });
  }
  function kindLabel(x) { return { t: t().kt, e: t().ke, r: t().kr }[x.kind]; }
  function cityLabel(x) { return CITY[x.city][state.lang]; }

  var tpl = {};
  function put(id, html) { var el = $(id); if (el) el.innerHTML = html; }

  function renderStatic() {
    var u = t();
    document.documentElement.lang = state.lang;
    document.querySelectorAll("[data-t]").forEach(function (el) {
      var v = u[el.getAttribute("data-t")];
      if (typeof v === "string") el.textContent = v;
    });
    document.querySelectorAll("[data-lang]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === state.lang)); });
  }
  function renderSelect() {
    var sel = $("r-tour"); if (!sel) return;
    sel.innerHTML = TOURS.map(function (x) { return '<option value="' + x.id + '">' + esc(x[state.lang].t) + "</option>"; }).join("") +
      '<option value="other">' + esc(t().other) + "</option>";
    sel.value = state.sel;
  }
  function val(id) { var el = $(id); return el ? el.value.trim() : ""; }
  function updateWA() {
    var u = t(), sel = $("r-tour") ? $("r-tour").value : state.sel;
    var tour = sel === "other" ? u.other : (TOURS.filter(function (x) { return x.id === sel; })[0] || TOURS[0])[state.lang].t;
    if ($("r-send")) $("r-send").href = WA + "?text=" + encodeURIComponent(u.waReq(val("r-name"), tour, val("r-adults") || state.adults, val("r-msg")));
    var g = [val("g-name"), val("g-city"), val("g-lang"), val("g-msg")].filter(Boolean).join(" | ");
    if ($("g-send")) $("g-send").href = WA + "?text=" + encodeURIComponent(u.waJoin + g);
    var qc = $("q-city"), q = [val("q-name"), val("q-size") && u.qSize + ": " + val("q-size"), val("q-date") && u.qDate + ": " + val("q-date"),
      qc && qc.value && u.qCity + ": " + qc.options[qc.selectedIndex].text, val("q-msg")].filter(Boolean).join(" | ");
    if ($("q-send")) $("q-send").href = WA + "?text=" + encodeURIComponent(u.waGroup + q);
  }
  function renderGroupSelect() {
    var sel = $("q-city"); if (!sel) return;
    var v = sel.value;
    sel.innerHTML = ["florence", "tuscany", "rome", "venice"].map(function (c) { return '<option value="' + c + '">' + esc(CITY[c][state.lang]) + "</option>"; }).join("") +
      '<option value="any">' + esc(t().qAny) + "</option>";
    if (v) sel.value = v;
  }
  function footerHTML() {
    var u = t(), c = COMPANY[state.lang], IG = "https://www.instagram.com/ital_travel_/";
    function li(href, label, ext) { return '<li><a href="' + href + '"' + (ext ? ' target="_blank" rel="noopener"' : "") + ">" + esc(label) + "</a></li>"; }
    function pg(p, k) { return li("page.html?p=" + p, u[k]); }
    return '<span class="tricolore" aria-hidden="true"></span><div class="wrap sf-grid">' +
      '<div class="sf-brand"><a class="brand sf-badge" href="./" aria-label="Ital Travel"><b>Ital<span>·</span>Travel</b><i></i><small>տուրեր իտալիայում</small></a>' +
      '<p class="sf-tag">' + esc(u.fTag).replace("\n", "<br>") + "</p>" +
      '<p class="sf-info">' + esc(u.fWhere) + "<br>" + esc(u.am) + ' <a href="tel:+37499515169">+374 99 515169</a><br>' + esc(u.it) + ' <a href="tel:+393281770199">+39 328 177 0199</a><br>' +
      '<a href="mailto:' + esc(COMPANY.email) + '">' + esc(COMPANY.email) + '</a><br>Instagram <a href="' + IG + '" target="_blank" rel="noopener">@ital_travel_</a></p></div>' +
      "<div><h3>" + esc(u.fToursH) + "</h3><ul>" + chipList().map(function (c) { return li("./?tours=" + c.id + "#tours", c.label); }).join("") + "</ul></div>" +
      "<div><h3>Ital Travel</h3><ul>" + li("./#team", u.fGuides) + pg("blog", "fBlog") + pg("infobook", "fBook") + pg("partner", "fPartner") + "</ul></div>" +
      "<div><h3>" + esc(u.fHelp) + "</h3><ul>" + pg("manage", "fManage") + pg("faq", "fFaq") + li(WA, u.fWa, true) + li(IG, "Instagram @ital_travel_", true) + "</ul></div></div>" +
      '<div class="wrap sf-bottom"><p>© ' + new Date().getFullYear() + " Ital Travel · " + esc(c.legal) + " · " + esc(c.reg) + " · " + esc(u.fRights) + "</p>" +
      '<p class="sf-links"><a href="page.html?p=privacy">' + esc(u.fPrivacy) + '</a> · <a href="page.html?p=cookies">' + esc(u.fCookiePol) + '</a> · <a href="page.html?p=terms">' + esc(u.fTerms) + '</a> · <a href="' + IG + '" target="_blank" rel="noopener">Instagram @ital_travel_</a> · <button type="button" class="sf-ck" data-consent-open>' + esc(u.fCookies) + "</button>" +
      "<span>Venice photo: @mikecleggphoto</span></p></div>";
  }
  function renderTours() {
    if (tpl.chips) put("chips", tpl.chips(chipList()));
    if (tpl.cards) put("cards", tpl.cards(filtered()));
    document.querySelectorAll("[data-adults]").forEach(function (el) { el.textContent = state.adults; });
  }
  function renderAll() {
    renderStatic();
    if (tpl.places) put("places", tpl.places(PLACES));
    renderTours();
    if (tpl.guides) put("guides", tpl.guides(GUIDES));
    put("site-foot", footerHTML());
    renderSelect(); renderGroupSelect(); updateWA();
    if (tpl.after) tpl.after();
  }
  function setAdults(n) {
    state.adults = Math.max(2, Math.min(30, n));
    if ($("r-adults")) $("r-adults").value = state.adults;
    renderTours(); updateWA();
  }
  function scrollToTours() {
    var el = $("tours"); if (!el) return;
    el.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }

  document.addEventListener("click", function (e) {
    var el;
    if ((el = e.target.closest("[data-lang]"))) {
      state.lang = el.dataset.lang;
      try { localStorage.setItem("ital-lang", state.lang); } catch (err) {}
      langToUrl(); renderAll(); if ($("ck-bar")) consentBar(true); return;
    }
    if ((el = e.target.closest("[data-cur]"))) {
      state.cur = el.dataset.cur;
      try { localStorage.setItem("ital-cur", state.cur); } catch (err) {}
      curChanged(); return;
    }
    if ((el = e.target.closest("[data-consent]"))) { setConsent(el.dataset.consent); return; }
    if (e.target.closest("[data-consent-open]")) { consentBar(true); return; }
    if ((el = e.target.closest("[data-filter]"))) {
      state.filter = el.dataset.filter; state.kind = el.dataset.kind || "all"; state.searched = false;
      if (el.dataset.place) state.place = el.dataset.place;
      renderTours(); if (tpl.after) tpl.after();
      if (el.hasAttribute("data-scroll")) scrollToTours();
      return;
    }
    if ((el = e.target.closest("[data-open]"))) {
      var id = el.dataset.open, open = !state.open[id];
      state.open[id] = open;
      el.setAttribute("aria-expanded", String(open));
      var lab = el.querySelector("[data-label]"); if (lab) lab.textContent = open ? t().hide : t().show;
      var box = $("it-" + id); if (box) box.hidden = !open;
      return;
    }
    if ((el = e.target.closest("[data-pick]"))) { state.sel = el.dataset.pick; if ($("r-tour")) $("r-tour").value = state.sel; updateWA(); return; }
    if ((el = e.target.closest("[data-adj]"))) { setAdults(state.adults + parseInt(el.dataset.adj, 10)); return; }
    if ((el = e.target.closest("#menu-btn"))) {
      var nav = $("nav"), o = nav.classList.toggle("open"); el.setAttribute("aria-expanded", String(o)); return;
    }
    if (e.target.closest("#nav a")) { $("nav").classList.remove("open"); var mb = $("menu-btn"); if (mb) mb.setAttribute("aria-expanded", "false"); }
    if ((el = e.target.closest(".copy[data-num]"))) {
      var b = el, done = function () { b.textContent = t().copied; setTimeout(function () { b.textContent = t().copy; }, 1600); };
      var fallback = function () {
        var target = document.querySelector('[data-number="' + b.dataset.num + '"]'); if (!target) return;
        var r = document.createRange(); r.selectNodeContents(target); var sl = getSelection(); sl.removeAllRanges(); sl.addRange(r);
      };
      try { navigator.clipboard.writeText(b.dataset.num).then(done, fallback); } catch (err) { fallback(); }
    }
  });
  document.addEventListener("input", function (e) {
    if (e.target.id === "r-adults") { var n = parseInt(e.target.value, 10); if (n >= 2 && n <= 30) { state.adults = n; renderTours(); } }
    if (/^(r|g|q)-/.test(e.target.id)) updateWA();
  });
  document.addEventListener("change", function (e) { if (e.target.id === "r-tour") { state.sel = e.target.value; updateWA(); } if (e.target.id === "q-city") updateWA(); });
  document.addEventListener("submit", function (e) { e.preventDefault(); });

  // Photos supplied by Ital Travel (img/). Places without a photo fall back to a colour.
  var IMG = { t1: "img/fl-duomo-aerial.jpg", t2: "img/fl-duomo-aerial.jpg", t5: "img/cooking-1680-m.jpg", t6: "img/tu-villa-vineyards.jpg", t3: "img/rome-7071.jpg", t4: "img/venice.jpg", tr1: "img/transfer.jpg",
              t7: "img/vat-street.jpg", t19: "img/vat-square.jpg", t17: "img/vat-aerial.jpg", t8: "img/sl-island.jpg",
              t9: "img/si-duomo.jpg", t18: "img/monteriggioni.jpg", t10: "img/sg-towers.jpg", t11: "img/vo-castle-vines.jpg", t12: "img/pi-tower.jpg", t13: "img/ct-vernazza.jpg", t14: "img/ct-manarola.jpg",
              t15: "img/fl-piazzale.jpg", t16: "img/fiat-front.jpg" };
  var PIMG = { venice: "img/venice.jpg", florence: "img/fl-duomo-aerial.jpg", cinque: "img/cinque-terre.jpg", chianti: "img/chianti.jpg", rome: "img/rome-7071.jpg" };
  var POS = { t3: "50% 72%", t4: "50% 60%", t7: "50% 50%", t8: "50% 50%", t11: "50% 22%", t2: "50% 55%", t5: "50% 55%", rome: "50% 30%" };

  // Lighter 800px copies in img/t/ for cards on the home page. A photo not listed here simply uses its full size.
  var THUMBS = ["armenians-world.jpg", "aud-guides-0301.jpg", "blog-tips.jpg", "chianti.jpg", "cook-1.jpg", "cook-2.jpg", "cook-3.jpg", "cook-group.jpg", "cook-pasta.jpg", "ct-manarola.jpg", "ct-riomaggiore.jpg", "ct-vernazza.jpg", "fiat-duomo.jpg", "fiat-front.jpg", "fiat-hills.jpg", "fiat-michelangelo.jpg", "fiat-view.jpg", "fl-duomo-aerial.jpg", "fl-duomo-sunset.jpg", "fl-group-dinner.jpg", "fl-group-duomo-night.jpg", "fl-group-selfie.jpg", "fl-hills-view.jpg", "fl-san-miniato.jpg", "lu-tower.jpg", "monteriggioni.jpg", "occ-school.jpg", "occ-special.jpg", "our-cars.jpg", "rome-7071.jpg", "rome-7072.jpg", "rome-7073.jpg", "sg-towers.jpg", "si-duomo.jpg", "sl-church.jpg", "sl-cloister.jpg", "sl-island.jpg", "tu-cypress-road.jpg", "tu-minivans.jpg", "tu-tasting-room.jpg", "tu-town-sunset.jpg", "tu-villa-vineyards.jpg", "tu-vineyard-group.jpg", "tu-wine-table.jpg", "tu-winery-lunch.jpg", "vat-square.jpg", "vat-street.jpg", "ve-aerial.jpg", "ve-rialto.jpg", "venice.jpg", "yerevan.jpg"];
  function thumb(src) { var n = String(src || "").replace(/^img\//, ""); return THUMBS.indexOf(n) >= 0 ? "img/t/" + n : src; }

  window.IT = {
    thumb: thumb,
    IMG: IMG, PIMG: PIMG, POS: POS,
    UI: UI, CITY: CITY, PLACES: PLACES, TOURS: TOURS, GUIDES: GUIDES, state: state,
    // Instagram feed for the homepage: the JSON feed address from behold.so (e.g. "https://feeds.behold.so/AbC123"). Empty = show our own photos.
    IG_FEED: "https://feeds.behold.so/6U4JQewC2XuDlVz49SFL",    consent: consent,
    seo: seo, seoTour: seoTour, SEO_HOME: SEO_HOME, pageUrl: pageUrl, SLUG: SLUG, slugOf: slugOf, qp: qp,
    t: t, esc: esc, money: money, eur: eur, priceInfo: priceInfo, priceFor: priceFor, tourPrice: tourPrice, fromPrice: fromPrice, kindLabel: kindLabel, cityLabel: cityLabel, count: count, setAdults: setAdults, TAGS: TAGS, INCL: INCL, tipGroups: tipGroups, LONG: LONG, MAP: MAP, LANGS: LANGS, langLabel: langLabel, ICON: ICON, highlights: highlights, WA: WA, COMPANY: COMPANY,
    L: function (x) { return x[state.lang]; },
    init: function (templates) { tpl = templates || {}; renderAll(); }
  };
})();
