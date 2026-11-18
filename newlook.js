/* Ital Travel: on the new pages (home, trip, info, partner), links made for the old pages lead to the new ones.
   index.html → ./, ./?tours=rome → ./?city=rome, page.html?… → info.html?…, tour.html?… → trip.html?…
   On the home page the footer is left alone (the home page points it at its own sections). */
(function () {
  var onHome = /\/(index\.html)?$/.test(location.pathname);
  // trip.html?id=t1 → florence-walking-tour.html, info.html?p=faq → faq.html (the pages' own addresses, see SLUG in core.js);
  // other parts of the address (?lang=en, #book…) are kept
  function ownPage(h) {
    var m = /^(trip|info)\.html\?([^#]*)(#.*)?$/.exec(h); if (!m || !window.IT || !IT.slugOf) return h;
    var q = new URLSearchParams(m[2]), p = m[1] === "info" ? q.get("p") : "", id = q.get("id") || "", slug = IT.slugOf(p, id);
    if (!slug || (m[1] === "trip" && !id)) return h;
    q.delete("p"); q.delete("id"); var s = q.toString();
    return slug + (s ? "?" + s : "") + (m[3] || "");
  }
  function fix() {
    document.querySelectorAll("a[href]").forEach(function (a) {
      var h = a.getAttribute("href"), m, n;
      if (onHome && a.closest("#site-foot")) { n = ownPage(h); if (n !== h) a.setAttribute("href", n); return; }
      if (h === "index.html") a.setAttribute("href", "./");
      else if ((m = /^\.\/\?tours=([a-z]+)/.exec(h))) a.setAttribute("href", "./?city=" + m[1]);
      else if (h.indexOf("page.html?") === 0) a.setAttribute("href", ownPage(h.replace("page.html?", "info.html?")));
      else if (h.indexOf("tour.html?") === 0) a.setAttribute("href", ownPage(h.replace("tour.html?", "trip.html?")));
      else if ((n = ownPage(h)) !== h) a.setAttribute("href", n);
    });
  }
  // Floating buttons on every page, bottom right: the language (ՀԱՅ / EN) and WhatsApp.
  // They stay on top of the tour pop-up and the About us window; the booking window covers them.
  function floating() {
    if (document.getElementById("it-float")) return;
    var css = document.createElement("style");
    css.textContent =
      ".it-float{position:fixed;z-index:60;right:max(16px,env(safe-area-inset-right,0px));bottom:max(16px,env(safe-area-inset-bottom,0px));display:grid;justify-items:end;gap:10px;pointer-events:none}" +
      ".it-float>*{pointer-events:auto}" +
      ".it-lang{display:flex;padding:3px;border-radius:99px;background:rgba(255,255,255,.94);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:0 0 0 1px #E2E6DF,0 10px 24px -12px rgba(20,32,25,.5)}" +
      ".it-lang button{border:0;background:transparent;border-radius:99px;min-width:44px;min-height:32px;padding:4px 10px;font:600 .8rem/1 'Outfit','Noto Sans Armenian',system-ui,sans-serif;color:#3A5F4A;cursor:pointer}" +
      ".it-lang button[aria-pressed=true]{background:#4E7D63;color:#fff}" +
      ".it-wa{width:54px;height:54px;border-radius:50%;display:grid;place-items:center;background:#4E7D63;color:#fff;box-shadow:0 12px 26px -12px rgba(20,32,25,.7);transition:background .2s,transform .2s}" +
      ".it-wa:hover{background:#3A5F4A;transform:translateY(-2px)}.it-wa svg{width:28px;height:28px}" +
      "body>.fab{display:none!important}";  // the home page's own WhatsApp button is replaced by this one
    document.head.appendChild(css);
    var hy = (document.documentElement.lang || "hy") === "hy", wa = (window.IT && IT.WA) || "https://wa.me/393281770199";
    var box = document.createElement("div"); box.className = "it-float"; box.id = "it-float";
    // only WhatsApp here; the language buttons are in the top menu of every page
    box.innerHTML = '<a class="it-wa" href="' + wa + '" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.2.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg></a>';
    document.body.appendChild(box);
  }
  function start() { floating(); fix(); new MutationObserver(fix).observe(document.body, { childList: true, subtree: true }); }
  if (document.body) start(); else document.addEventListener("DOMContentLoaded", start);
})();
