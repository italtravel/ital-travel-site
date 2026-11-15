/* Ital Travel: photos and videos for every tour (used by trip.html and landing.html).
   First file = the big picture. Add more files to img/ or video/ and list them here. */
(function () {
  // Pictures per tour (first one is the big one). Add more files to img/ or video/ and list them here.
  var GALLERY = {
    t1: ["img/fl-duomo-aerial.jpg", "video/florence-tour.mp4", "img/fl-group-selfie.jpg", "img/fl-group-street.webp", "img/fl-duomo-sunset.jpg", "img/fl-hills-view.jpg"],
    t2: ["video/sunset-h.jpg", "video/pontevecchio.jpg", "video/uffizi.jpg"],
    t5: ["img/cooking-1680-m.jpg", "img/cooking.webp", "img/cook-tiramisu.webp", "img/cook-group.jpg", "img/cook-pasta.jpg", "img/cook-1.jpg", "img/cook-3.jpg", "img/cook-2.jpg"],
    t6: ["img/tu-villa-vineyards.jpg", "img/sg-towers.jpg", "img/pi-tower.jpg", "img/tu-town-sunset.jpg", "img/tu-cypress-road.jpg", "img/tu-wine-table.jpg", "img/tu-vineyard-group.jpg",
         "img/tu-hilltop-town.webp", "img/tu-tasting-room.jpg", "img/tu-wine-cellar.webp", "img/tu-grapes.webp", "img/tu-hills.jpg",
         "img/chianti.jpg", "img/tu-minivans.jpg"],
    t3: ["img/rome-7071.jpg", "img/rome-trevi.jpg", "img/rome-forum.jpg", "img/rome-7072.jpg", "img/rome-7073.jpg"],
    t15: ["img/fl-piazzale.jpg", "img/fl-san-miniato.jpg", "img/sg-towers.jpg", "img/our-cars.jpg", "img/tu-wine-table.jpg"],
    t16: ["img/fiat-front.jpg", "video/fiat500.mp4", "img/fiat-duomo.jpg", "img/fiat-view.jpg", "img/fiat-michelangelo.jpg", "img/fiat-hills.jpg"],
    t9: ["img/si-duomo.jpg", "img/si-city.jpg", "img/sg-towers.jpg", "img/tu-wine-table.jpg", "img/tu-vineyard-group.jpg", "img/chianti.jpg", "img/tu-minivans.jpg"],
    t18: ["img/monteriggioni.jpg", "img/sg-towers.jpg", "img/chianti.jpg", "img/tu-vineyard-group.jpg", "img/tu-wine-table.jpg", "img/tu-tasting-room.jpg", "img/tu-minivans.jpg"],
    t10: ["img/sg-towers.jpg", "img/tu-villa-vineyards.jpg", "img/tu-tasting-room.jpg", "img/tu-grapes.webp", "img/tu-minivans.jpg"],
    t11: ["img/vo-castle-vines.jpg", "img/tu-town-sunset.jpg", "img/tu-hilltop-town.webp", "img/tu-cypress-road.jpg", "img/tu-hills.jpg", "img/tu-wine-cellar.webp", "img/tu-minivans.jpg"],
    t12: ["img/pi-tower.jpg", "img/lu-piazza.jpg", "img/lu-tower.jpg", "img/pisa.jpg", "img/tu-minivans.jpg"],
    t13: ["img/ct-vernazza.jpg", "img/ct-manarola.jpg", "img/pi-tower.jpg", "img/ct-riomaggiore.jpg", "img/ct-monterosso.jpg", "img/cinque-terre.jpg", "img/tu-minivans.jpg"],
    t14: ["img/ct-manarola.jpg", "img/ct-monterosso.jpg", "img/ct-riomaggiore.jpg", "img/ct-vernazza.jpg", "img/cinque-terre.jpg", "img/tu-minivans.jpg"],
    t17: ["img/vat-aerial.jpg", "img/rome-7071.jpg", "img/rome-trevi.jpg", "img/vat-square.jpg", "img/rome-forum.jpg", "img/vat-street.jpg"],
    t19: ["img/vat-square.jpg", "img/vat-street.jpg", "img/vat-aerial.jpg"],
    t7: ["img/vat-street.jpg", "img/vat-aerial.jpg", "img/vat-square.jpg"],
    t4: ["img/ve-rialto.jpg", "img/ve-canal.jpg", "img/ve-salute.jpg", "img/venice.jpg"],
    t8: ["img/sl-island.jpg", "img/sl-cloister.jpg", "img/sl-church.jpg"],
    tr1: ["img/transfer.jpg"]
  };
  // Names shown on photos (on the picture and in the photo viewer): [English, Armenian]. Photos not listed have no name.
  var CAPS = {
    // Florence
    "img/fl-duomo-sunset.jpg": ["Florence", "Ֆլորենցիա"], "img/fl-group-street.webp": ["Florence", "Ֆլորենցիա"],
    "img/fl-group-signoria.webp": ["Piazza della Signoria", "Սինյորիայի հրապարակ"], "img/fl-hills-view.jpg": ["Florence", "Ֆլորենցիա"],
    "img/fl-san-miniato.jpg": ["San Miniato al Monte", "Սան Մինիատո ալ Մոնտե"], "img/fl-piazzale.jpg": ["Piazzale Michelangelo", "Միքելանջելոյի հրապարակ"],
    "img/fl-duomo-aerial.jpg": ["Florence Cathedral", "Ֆլորենցիայի տաճար"],
    "video/florence-tour.mp4": ["Our tour in Florence", "Մեր տուրը Ֆլորենցիայում"], "img/fl-group-duomo-night.jpg": ["Florence Cathedral", "Ֆլորենցիայի տաճար"],
    "img/fl-group-selfie.jpg": ["Florence Cathedral", "Ֆլորենցիայի տաճար"], "img/fl-group-dinner.jpg": ["An evening in Florence", "Երեկո Ֆլորենցիայում"],
    "img/cook-1.jpg": ["Florence", "Ֆլորենցիա"], "img/cook-2.jpg": ["Florence", "Ֆլորենցիա"], "img/cook-3.jpg": ["Florence", "Ֆլորենցիա"], "img/cook-group.jpg": ["Florence", "Ֆլորենցիա"], "img/cook-pasta.jpg": ["Florence", "Ֆլորենցիա"],
    "img/cook-tiramisu.webp": ["Florence", "Ֆլորենցիա"],"img/cooking.webp": ["Florence", "Ֆլորենցիա"], "img/cooking-1680-m.jpg": ["Florence", "Ֆլորենցիա"],
    "img/fiat-front.jpg": ["Florence", "Ֆլորենցիա"], "img/fiat-view.jpg": ["Florence", "Ֆլորենցիա"], "img/fiat-duomo.jpg": ["Florence Cathedral", "Ֆլորենցիայի տաճար"],
    "img/fiat-michelangelo.jpg": ["Piazzale Michelangelo", "Միքելանջելոյի հրապարակ"], "img/fiat-hills.jpg": ["Florentine hills", "Ֆլորենտինյան բլուրներ"],
    // Tuscany
    "img/si-duomo.jpg": ["Siena", "Սիենա"], "img/si-city.jpg": ["Siena", "Սիենա"], "img/sg-towers.jpg": ["San Gimignano", "Սան Ջիմինյանո"], "img/monteriggioni.jpg": ["Monteriggioni", "Մոնտերիջոնի"],
    "img/tu-town-sunset.jpg": ["Montepulciano", "Մոնտեպուլչանո"], "img/tu-hilltop-town.webp": ["Montepulciano", "Մոնտեպուլչանո"],
    "img/vo-castle-vines.jpg": ["Val d'Orcia", "Վալ դ'Օրչա"], "img/chianti.jpg": ["Chianti", "Կյանտի"],
    "img/tu-cypress-road.jpg": ["Tuscany", "Տոսկանա"], "img/tu-hills.jpg": ["Tuscany", "Տոսկանա"], "img/tu-villa-vineyards.jpg": ["Tuscany", "Տոսկանա"],
    "img/tu-vineyard-group.jpg": ["Tuscany", "Տոսկանա"], "img/tu-wine-table.jpg": ["Tuscany", "Տոսկանա"], "img/tu-tasting-room.jpg": ["Tuscany", "Տոսկանա"], "img/tu-minivans.jpg": ["Our minivans", "Մեր մինիվենները"],
    "img/tu-wine-cellar.webp": ["Tuscany", "Տոսկանա"], "img/tu-grapes.webp": ["Tuscany", "Տոսկանա"],
    "img/pi-tower.jpg": ["Pisa", "Պիզա"], "img/pisa.jpg": ["Pisa", "Պիզա"], "img/lu-piazza.jpg": ["Lucca", "Լուկկա"], "img/lu-tower.jpg": ["Lucca", "Լուկկա"],
    "img/ct-manarola.jpg": ["Manarola", "Մանարոլա"], "img/ct-monterosso.jpg": ["Monterosso al Mare", "Մոնտերոսսո ալ Մարե"],
    "img/ct-riomaggiore.jpg": ["Riomaggiore", "Ռիոմաջորե"], "img/ct-vernazza.jpg": ["Vernazza", "Վերնացցա"], "img/cinque-terre.jpg": ["Cinque Terre", "Չինկվե Տերե"],
    // Rome and the Vatican
    "img/transfer.jpg": ["Rome", "Հռոմ"], "img/rome-7071.jpg": ["Colosseum", "Կոլիզեում"],
    "img/rome-trevi.jpg": ["Trevi Fountain", "Տրևիի շատրվան"], "img/rome-forum.jpg": ["Roman Forum", "Հռոմեական ֆորում"],
    "img/rome-7072.jpg": ["Trajan's Markets", "Տրայանոսի շուկաներ"], "img/rome-7073.jpg": ["Trajan's Column", "Տրայանոսի սյուն"],
    "img/vat-street.jpg": ["Vatican", "Վատիկան"], "img/vat-square.jpg": ["St Peter's Square", "Սուրբ Պետրոսի հրապարակ"], "img/vat-aerial.jpg": ["St Peter's Basilica", "Սուրբ Պետրոսի տաճար"],
    // Venice
    "img/venice.jpg": ["Venice", "Վենետիկ"], "img/ve-canal.jpg": ["Venice", "Վենետիկ"], "img/ve-rialto.jpg": ["Rialto Bridge", "Ռիալտոյի կամուրջ"],
    "img/ve-salute.jpg": ["Santa Maria della Salute", "Սանտա Մարիա դելլա Սալուտե"],
    "img/sl-island.jpg": ["San Lazzaro", "Սուրբ Ղազար"], "img/sl-cloister.jpg": ["San Lazzaro", "Սուրբ Ղազար"], "img/sl-church.jpg": ["San Lazzaro", "Սուրբ Ղազար"]
  };
  // Where to centre the big first picture, when it isn't the same as the homepage card picture (IT.POS)
  var GPOS = { t3: "50% 72%", t7: "50% 45%", t4: "50% 60%", t11: "50% 22%", t12: "50% 50%", t9: "50% 45%" };
  // Instagram reels per tour: the cover is saved in img/ig/ (named after the reel code); tapping it opens the reel on Instagram.
  // To add one: save its cover as img/ig/CODE.jpg and add "CODE" to the tour's list.
  var REELS = {
    // the home page shows them in this order
    t1: ["DfIIhHkCrhf", "Det-iyoieux", "DemoIiGCusC", "DbyH5I9snf4"], // Florence (DfIIhHkCrhf: Florentine perfumes; DbyH5I9snf4: Ponte Vecchio)
    t3: ["DfZzZazi_U2"],  // Rome: coffee culture
    t14: ["DbNZWnjMobE"]  // Cinque Terre
  };
  var IG = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.4" cy="6.6" r="1.3" fill="currentColor"/></svg>';
  // Reel covers (a tour id or a list of reel codes), each a link to Instagram (opens in a new tab). Empty when there are none.
  function reelsHTML(id) {
    var hy = window.IT && IT.state.lang === "hy", list = Array.isArray(id) ? id : REELS[id] || [];
    if (!list.length) return "";
    return '<h2>' + (hy ? "Տեսանյութեր Instagram-ում" : "Videos on Instagram") + '</h2><div class="reels">' + list.map(function (code) {
      return '<a class="reel" href="https://www.instagram.com/reel/' + code + '/" target="_blank" rel="noopener" aria-label="' + (hy ? "Դիտել Instagram-ում" : "Watch on Instagram") + '">' +
        '<img src="img/ig/' + code + '.jpg" alt="" loading="lazy" decoding="async"><span class="reel-b">' + IG + "</span></a>";
    }).join("") + "</div>";
  }
  window.IT_GAL = { GALLERY: GALLERY, CAPS: CAPS, GPOS: GPOS, REELS: REELS, reelsHTML: reelsHTML };
})();
