/* Rayanabrand.aktau — сайт логикасы / логика сайта.
   Тауарларды өзгерту үшін бұл файлды ашудың қажеті жоқ — data.js-ті өзгертіңіз.
   Чтобы менять товары, этот файл трогать не нужно — редактируйте data.js. */
(function () {
  "use strict";

  /* ---------- Мәтіндер / Тексты ---------- */
  const T = {
    kz: {
      nav_catalog: "Каталог", nav_delivery: "Жеткізу", nav_payment: "Төлем", nav_sizes: "Өлшемдер", nav_contacts: "Байланыс",
      hero_title: "Балаңызға арналған әдемі әрі жайлы киім",
      hero_text: "Ақтаудағы балалар киімі дүкені. Тапсырысты WhatsApp арқылы қабылдаймыз, төлем Kaspi арқылы.",
      hero_btn_catalog: "Каталогты қарау", hero_btn_wa: "WhatsApp-қа жазу",
      perk_delivery: "{sum}-ден бастап жеткізу", perk_kaspi: "Kaspi арқылы төлем", perk_sizes: "Бойы 80–158 см",
      marquee: ["Жаңа коллекция", "Балалар киімі", "Kaspi арқылы төлем", "{sum}-ден бастап жеткізу", "Ақтау"],
      seasons_kicker: "Коллекциялар", seasons_title: "Маусым бойынша таңдаңыз", tile_cta: "Қарау",
      catalog_kicker: "Rayanabrand.aktau",
      gender_all: "Барлығы", gender_girl: "Қыздарға", gender_boy: "Ұлдарға",
      season_all: "Барлық маусым", season_spring: "Көктем", season_summer: "Жаз", season_autumn: "Күз", season_winter: "Қыс", season_allyear: "Маусымаралық",
      filters: "Сүзгі", sort_new: "Алдымен жаңалары", sort_cheap: "Арзанынан бастап", sort_expensive: "Қымбатынан бастап",
      f_size: "Бойы, см", f_color: "Түс", f_price: "Баға, ₸", f_from: "бастап", f_to: "дейін", f_reset: "Сүзгіні тазалау",
      found: "Табылды: {n}", empty: "Ештеңе табылмады. Сүзгіні өзгертіп көріңіз.",
      badge_new: "Жаңа", badge_order: "Тапсырыспен", more: "Толығырақ",
      in_stock: "Қоймада бар", on_order: "Тапсырыспен әкелінеді",
      size: "Бойы", color: "Түс", size_chart_link: "Өлшемдер кестесі",
      pick_size: "Баланың бойын (өлшемді) таңдаңыз", pick_color: "Түсті таңдаңыз",
      add_cart: "Себетке қосу", added: "Себетке қосылды", ask_wa: "WhatsApp арқылы сұрау",
      fabric: "Құрамы", season: "Маусым", for_whom: "Кімге", photo_soon: "Фото жақында",
      cart: "Себет", cart_empty: "Себет бос", cart_empty_hint: "Каталогтан ұнаған киімді таңдаңыз",
      go_catalog: "Каталогқа өту", clear_cart: "Себетті тазалау", remove: "Өшіру",
      subtotal: "Жалпы сома",
      delivery_left: "Жеткізуге дейін тағы {left} қалды", delivery_ok: "✓ Жеткізу қолжетімді",
      checkout: "Тапсырысты рәсімдеу",
      f_name: "Атыңыз", f_phone: "Телефон", f_delivery: "Алу тәсілі", f_address: "Мекенжай (қала, көше, үй)",
      f_payment: "Төлем тәсілі", f_comment: "Пікір (міндетті емес)",
      send_order: "Тапсырысты WhatsApp-қа жіберу",
      min_warn: "Жеткізу {sum}-ден бастап жасалады. Тағы {left} сомасына тауар қосыңыз немесе «{pickup}» тәсілін таңдаңыз.",
      err_name: "Атыңызды жазыңыз", err_phone: "Телефон нөмірін дұрыс жазыңыз", err_address: "Мекенжайды жазыңыз",
      wa_opened: "WhatsApp ашылды, хабарламаны жіберіңіз",
      delivery_notice: "Жеткізу тапсырыс сомасы <b>{sum}</b> және одан жоғары болғанда жасалады.",
      delivery_tag: "{sum}-ден бастап", any_sum: "Кез келген сомаға",
      sizes_title: "Өлшемдер кестесі",
      sizes_note: "Өлшем баланың бойымен (см) белгіленеді. Баланың бойын өлшеп, кестеден таңдаңыз. Күмәнданып тұрсаңыз, WhatsApp-қа жазыңыз, көмектесеміз.",
      th_size: "Өлшем (бойы, см)", th_age: "Жасы", th_chest: "Кеуде, см", th_waist: "Бел, см",
      c_phone: "Телефон", c_wa: "WhatsApp", c_insta: "Instagram", c_city: "Қала", c_address: "Мекенжай", c_hours: "Жұмыс уақыты",
      footer_rights: "Барлық құқықтар қорғалған",
      wa_hello: "Сәлеметсіз бе!", wa_intro: "Rayanabrand.aktau сайтынан тапсырыс:", wa_total: "Барлығы",
      wa_name: "Аты", wa_phone: "Телефон", wa_delivery: "Алу тәсілі", wa_address: "Мекенжай", wa_payment: "Төлем", wa_comment: "Пікір",
      wa_ask: "{name} {code} ({price}) туралы сұрағым бар еді.", wa_general: "Сәлеметсіз бе! Rayanabrand.aktau сайтынан жазып тұрмын.",
      pcs: "дана", cm: "см",
      install: "Телефонға орнату",
      install_ios: "Safari-де төмендегі «Бөлісу» ⬆ батырмасын басып, «Басты экранға қосу» (На экран «Домой») таңдаңыз.",
      install_other: "Сайтты телефоннан ашып, браузер мәзірінен (⋮) «Басты экранға қосу» таңдаңыз.",
      installed: "Орнатылды! RB иконкасы телефон экранында пайда болады.",
      doc_title: "Rayanabrand.aktau — балалар киімі, Ақтау"
    },
    ru: {
      nav_catalog: "Каталог", nav_delivery: "Доставка", nav_payment: "Оплата", nav_sizes: "Размеры", nav_contacts: "Контакты",
      hero_title: "Красивая и удобная одежда для ваших детей",
      hero_text: "Магазин детской одежды в Актау. Принимаем заказы через WhatsApp, оплата через Kaspi.",
      hero_btn_catalog: "Смотреть каталог", hero_btn_wa: "Написать в WhatsApp",
      perk_delivery: "Доставка от {sum}", perk_kaspi: "Оплата через Kaspi", perk_sizes: "Рост 80–158 см",
      marquee: ["Новая коллекция", "Детская одежда", "Оплата через Kaspi", "Доставка от {sum}", "Актау"],
      seasons_kicker: "Коллекции", seasons_title: "Выберите по сезону", tile_cta: "Смотреть",
      catalog_kicker: "Rayanabrand.aktau",
      gender_all: "Все", gender_girl: "Девочкам", gender_boy: "Мальчикам",
      season_all: "Все сезоны", season_spring: "Весна", season_summer: "Лето", season_autumn: "Осень", season_winter: "Зима", season_allyear: "Всесезонное",
      filters: "Фильтры", sort_new: "Сначала новинки", sort_cheap: "Сначала дешевле", sort_expensive: "Сначала дороже",
      f_size: "Рост, см", f_color: "Цвет", f_price: "Цена, ₸", f_from: "от", f_to: "до", f_reset: "Сбросить фильтры",
      found: "Найдено: {n}", empty: "Ничего не найдено. Попробуйте изменить фильтры.",
      badge_new: "Новинка", badge_order: "Под заказ", more: "Подробнее",
      in_stock: "В наличии", on_order: "Привезём под заказ",
      size: "Рост", color: "Цвет", size_chart_link: "Таблица размеров",
      pick_size: "Выберите рост (размер) ребёнка", pick_color: "Выберите цвет",
      add_cart: "В корзину", added: "Добавлено в корзину", ask_wa: "Спросить в WhatsApp",
      fabric: "Состав", season: "Сезон", for_whom: "Для кого", photo_soon: "Фото скоро",
      cart: "Корзина", cart_empty: "Корзина пуста", cart_empty_hint: "Выберите понравившиеся вещи в каталоге",
      go_catalog: "Перейти в каталог", clear_cart: "Очистить корзину", remove: "Удалить",
      subtotal: "Итого",
      delivery_left: "До доставки осталось {left}", delivery_ok: "✓ Доставка доступна",
      checkout: "Оформление заказа",
      f_name: "Ваше имя", f_phone: "Телефон", f_delivery: "Способ получения", f_address: "Адрес (город, улица, дом)",
      f_payment: "Способ оплаты", f_comment: "Комментарий (необязательно)",
      send_order: "Отправить заказ в WhatsApp",
      min_warn: "Доставка осуществляется от {sum}. Добавьте товаров ещё на {left} или выберите «{pickup}».",
      err_name: "Укажите имя", err_phone: "Укажите корректный номер телефона", err_address: "Укажите адрес",
      wa_opened: "WhatsApp открыт, отправьте сообщение",
      delivery_notice: "Доставка осуществляется при сумме заказа от <b>{sum}</b>.",
      delivery_tag: "От {sum}", any_sum: "При любой сумме",
      sizes_title: "Таблица размеров",
      sizes_note: "Размер соответствует росту ребёнка (см). Измерьте рост и выберите размер по таблице. Сомневаетесь? Напишите в WhatsApp, поможем подобрать.",
      th_size: "Размер (рост, см)", th_age: "Возраст", th_chest: "Грудь, см", th_waist: "Талия, см",
      c_phone: "Телефон", c_wa: "WhatsApp", c_insta: "Instagram", c_city: "Город", c_address: "Адрес", c_hours: "Часы работы",
      footer_rights: "Все права защищены",
      wa_hello: "Здравствуйте!", wa_intro: "Заказ с сайта Rayanabrand.aktau:", wa_total: "Итого",
      wa_name: "Имя", wa_phone: "Телефон", wa_delivery: "Получение", wa_address: "Адрес", wa_payment: "Оплата", wa_comment: "Комментарий",
      wa_ask: "Интересует {name} {code} ({price}).", wa_general: "Здравствуйте! Пишу с сайта Rayanabrand.aktau.",
      pcs: "шт.", cm: "см",
      install: "Установить на телефон",
      install_ios: "В Safari нажмите кнопку «Поделиться» ⬆ внизу и выберите «На экран „Домой“».",
      install_other: "Откройте сайт с телефона и в меню браузера (⋮) выберите «Добавить на главный экран».",
      installed: "Готово! Иконка RB появится на экране телефона.",
      doc_title: "Rayanabrand.aktau — детская одежда, Актау"
    }
  };

  const SEASONS = ["spring", "summer", "autumn", "winter"];
  const GENDERS = ["all", "girl", "boy"];
  const TILE_BG = {
    spring: "linear-gradient(160deg, #F1DCD6 0%, #D7AFA5 100%)",
    summer: "linear-gradient(160deg, #F4E6C8 0%, #D8B680 100%)",
    autumn: "linear-gradient(160deg, #D2A57D 0%, #7F5235 100%)",
    winter: "linear-gradient(160deg, #DDE2E7 0%, #8E99A6 100%)"
  };

  /* ---------- Көмекші / Помощники ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* ignore */ } }
  };
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  let lang = store.get("rb_lang", SHOP.defaultLang || "kz");
  if (!T[lang]) lang = "kz";

  const t = (k, vars) => {
    let s = (T[lang] && T[lang][k]) || T.ru[k] || k;
    if (vars && typeof s === "string") Object.keys(vars).forEach(v => { s = s.split("{" + v + "}").join(vars[v]); });
    return s;
  };
  const L = o => o == null ? "" : (typeof o === "string" ? o : (o[lang] || o.ru || o.kz || ""));
  const money = n => Number(n || 0).toLocaleString("ru-RU").replace(/[  ]/g, " ") + " " + SHOP.currency;
  const byId = id => PRODUCTS.find(p => String(p.id) === String(id));
  const colorOf = key => COLORS[key] || { kz: key, ru: key, hex: "#ccc" };
  const code = p => "#" + String(p.id).padStart(3, "0");
  const sizeLabel = s => /^\d+$/.test(String(s)) ? s + " " + t("cm") : s;
  const waLink = text => "https://wa.me/" + SHOP.whatsapp + (text ? "?text=" + encodeURIComponent(text) : "");

  const SIZE_ORDER = SIZE_CHART.map(r => r.size);
  const allSizes = (() => {
    const set = new Set();
    PRODUCTS.forEach(p => (p.sizes || []).forEach(s => set.add(String(s))));
    return Array.from(set).sort((a, b) => {
      const ia = SIZE_ORDER.indexOf(a), ib = SIZE_ORDER.indexOf(b);
      return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib) || a.localeCompare(b, undefined, { numeric: true });
    });
  })();
  const allColors = (() => {
    const set = new Set();
    PRODUCTS.forEach(p => (p.colors || []).forEach(c => set.add(c)));
    return Array.from(set);
  })();

  /* ---------- Фото / Фото ----------
     Фото табылмаса — әдемі бос орын көрсетіледі.
     Если фото не найдено — показывается аккуратная заглушка. */
  function placeholder(p) {
    const hex = colorOf((p.colors || [])[0]).hex;
    return '<div class="ph" style="--c:' + hex + '"><span class="ph__r">RB</span><span class="ph__txt">' + esc(t("photo_soon")) + "</span></div>";
  }
  function photoHTML(p, idx, lazy) {
    const src = (p.photos || [])[idx || 0];
    if (!src) return placeholder(p);
    return '<img src="' + esc(src) + '" alt="' + esc(L(p.name) + " " + code(p)) + '"' + (lazy ? ' loading="lazy"' : "") +
      ' onerror="RB.fallback(this,' + JSON.stringify(String(p.id)).replace(/"/g, "&quot;") + ')">';
  }
  window.RB = {
    fallback(img, id) {
      const p = byId(id);
      if (!p) { img.remove(); return; }
      const wrap = document.createElement("div");
      wrap.innerHTML = placeholder(p);
      img.replaceWith(wrap.firstChild);
    },
    hideThumb(img) {
      const b = img.closest(".thumb");
      if (b) b.remove();
      const thumbs = $(".thumbs");
      if (thumbs && thumbs.children.length < 2) thumbs.remove();
    }
  };

  /* ---------- Күй / Состояние ---------- */
  const F = { gender: "all", season: "all", sizes: new Set(), colors: new Set(), min: "", max: "", sort: "new" };
  let cart = store.get("rb_cart", []).filter(it => byId(it.id));
  let cur = null; // ашық тауар / открытый товар

  /* ---------- Тіл / Язык ---------- */
  function applyLang() {
    document.documentElement.lang = lang === "kz" ? "kk" : "ru";
    document.title = t("doc_title");
    $$("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-ph]").forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
    $$(".lang button").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
    renderStatic();
    renderTiles();
    renderGenders();
    renderSeasons();
    renderFilters();
    renderGrid();
    renderCart();
    if (cur) renderModal();
  }

  /* ---------- Статикалық бөлімдер / Статичные блоки ---------- */
  function renderStatic() {
    $$('[data-link="whatsapp"]').forEach(a => { a.href = waLink(t("wa_general")); });
    $$('[data-link="instagram"]').forEach(a => { a.href = SHOP.instagram; });
    $$('[data-link="phone"]').forEach(a => { a.href = "tel:" + SHOP.phoneLink; });

    const sum = money(SHOP.deliveryMin);
    $("#perkDelivery").textContent = t("perk_delivery", { sum });

    const items = t("marquee").map(s => s.replace("{sum}", sum));
    const row = items.map(s => "<span>" + esc(s) + '</span><span class="star">✦</span>').join("");
    $("#marquee").innerHTML = row + row + row + row;

    $("#deliveryNotice").innerHTML =
      '<svg viewBox="0 0 24 24"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></svg>' +
      "<span>" + t("delivery_notice", { sum: esc(sum) }) + "</span>";

    const deliveryIcons = {
      aktau: '<svg viewBox="0 0 24 24"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></svg>',
      kz: '<svg viewBox="0 0 24 24"><path d="M4 8l8-4 8 4v8l-8 4-8-4z"/><path d="M4 8l8 4 8-4M12 12v8"/></svg>',
      pickup: '<svg viewBox="0 0 24 24"><path d="M5 8h14l-1.2 12H6.2z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/></svg>'
    };
    $("#deliveryList").innerHTML = SHOP.delivery.map(d =>
      '<div class="info"><div class="info__icon">' + (deliveryIcons[d.id] || deliveryIcons.aktau) + "</div>" +
      "<h3>" + esc(L(d)) + "</h3><p>" + esc(L(d.info)) + "</p>" +
      '<span class="tag">' + esc(d.needsMin ? t("delivery_tag", { sum }) : t("any_sum")) + "</span></div>"
    ).join("");

    const payIcon = '<svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M7 15h4"/></svg>';
    $("#paymentList").innerHTML = SHOP.payment.map(p =>
      '<div class="info"><div class="info__icon">' + payIcon + "</div><h3>" + esc(L(p)) + "</h3><p>" + esc(L(p.info)) + "</p></div>"
    ).join("");

    $("#sizeTable").innerHTML =
      "<thead><tr><th>" + t("th_size") + "</th><th>" + t("th_age") + "</th><th>" + t("th_chest") + "</th><th>" + t("th_waist") + "</th></tr></thead><tbody>" +
      SIZE_CHART.map(r => "<tr><td>" + esc(r.size) + "</td><td>" + esc(L(r.age)) + "</td><td>" + esc(r.chest) +
        "</td><td>" + esc(r.waist) + "</td></tr>").join("") + "</tbody>";

    const ic = {
      phone: '<svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
      wa: '<svg viewBox="0 0 24 24"><path d="M3.5 20.5l1.3-4A8.5 8.5 0 1 1 8 19.6z"/><path d="M9.2 8.4c0 3 2.6 6.4 6.4 6.4l.9-1.4-2-1-1 .8c-1-.5-2-1.5-2.4-2.5l.8-1-1-2z"/></svg>',
      ig: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" class="fill"/></svg>',
      pin: '<svg viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
      clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'
    };
    const contacts = [
      { href: "tel:" + SHOP.phoneLink, icon: ic.phone, label: t("c_phone"), value: SHOP.phone },
      { href: waLink(t("wa_general")), icon: ic.wa, cls: "--wa", label: t("c_wa"), value: SHOP.phone, blank: true },
      { href: SHOP.instagram, icon: ic.ig, cls: "--ig", label: t("c_insta"), value: SHOP.instagramName, blank: true },
      { icon: ic.pin, label: t("c_city"), value: L(SHOP.city) }
    ];
    if (L(SHOP.address)) contacts.push({ icon: ic.pin, label: t("c_address"), value: L(SHOP.address) });
    if (L(SHOP.hours)) contacts.push({ icon: ic.clock, label: t("c_hours"), value: L(SHOP.hours) });
    $("#contactsList").innerHTML = contacts.map(c => {
      const inner = '<span class="contact__icon' + (c.cls ? " contact__icon" + c.cls : "") + '">' + c.icon + "</span>" +
        "<span><small>" + esc(c.label) + "</small><strong>" + esc(c.value) + "</strong></span>";
      return c.href
        ? '<a class="contact" href="' + esc(c.href) + '"' + (c.blank ? ' target="_blank" rel="noopener"' : "") + ">" + inner + "</a>"
        : '<div class="contact">' + inner + "</div>";
    }).join("");

    $("#sort").innerHTML = ["new", "cheap", "expensive"].map(v =>
      '<option value="' + v + '"' + (F.sort === v ? " selected" : "") + ">" + t("sort_" + v) + "</option>").join("");

    const dSel = $("#deliverySelect"), dVal = dSel.value;
    dSel.innerHTML = SHOP.delivery.map(d => '<option value="' + esc(d.id) + '">' + esc(L(d)) + "</option>").join("");
    if (dVal) dSel.value = dVal;
    const pSel = $("#paymentSelect"), pVal = pSel.selectedIndex;
    pSel.innerHTML = SHOP.payment.map((p, i) => '<option value="' + i + '">' + esc(L(p)) + "</option>").join("");
    if (pVal > 0) pSel.selectedIndex = pVal;

    if (SHOP.heroImage) $(".hero").style.setProperty("--hero-img", 'url("' + SHOP.heroImage + '")');
  }

  /* ---------- Маусым карточкалары / Плитки сезонов ----------
     Фото қойғыңыз келсе: images/season-spring.jpg, season-summer.jpg, season-autumn.jpg, season-winter.jpg */
  function renderTiles() {
    $("#tiles").innerHTML = SEASONS.map((s, i) =>
      '<button type="button" class="tile" data-action="season-tile" data-v="' + s + '">' +
      '<span class="tile__bg" style="--g:' + TILE_BG[s] + ';--tile-img:url(\'images/season-' + s + '.jpg\')"></span>' +
      '<span class="tile__num">0' + (i + 1) + "</span>" +
      '<span class="tile__name">' + t("season_" + s) + '</span><span class="tile__cta">' + t("tile_cta") + "</span></button>"
    ).join("");
  }

  /* ---------- Сүзгілер / Фильтры ---------- */
  function renderGenders() {
    $("#genders").innerHTML = GENDERS.map(g =>
      '<button type="button" class="' + (F.gender === g ? "active" : "") + '" data-action="gender" data-v="' + g + '">' + t("gender_" + g) + "</button>").join("");
  }
  function renderSeasons() {
    $("#seasons").innerHTML = ["all"].concat(SEASONS).map(s =>
      '<button type="button" class="chip' + (F.season === s ? " active" : "") + '" data-action="season" data-v="' + s + '">' +
      t("season_" + s) + "</button>").join("");
  }

  function renderFilters() {
    $("#fSizes").innerHTML = allSizes.map(s =>
      '<button type="button" class="chip' + (F.sizes.has(s) ? " active" : "") + '" data-action="f-size" data-v="' + esc(s) + '">' + esc(s) + "</button>").join("");
    $("#fColors").innerHTML = allColors.map(c => {
      const col = colorOf(c);
      return '<button type="button" class="swatch' + (F.colors.has(c) ? " active" : "") + '" style="--c:' + col.hex +
        '" data-action="f-color" data-v="' + esc(c) + '" title="' + esc(L(col)) + '" aria-label="' + esc(L(col)) + '"></button>';
    }).join("");
    const n = F.sizes.size + F.colors.size + (F.min !== "" ? 1 : 0) + (F.max !== "" ? 1 : 0);
    const badge = $("#filtersCount");
    badge.hidden = !n;
    badge.textContent = n;
  }

  function filtered() {
    const list = PRODUCTS.filter(p => {
      const seasons = p.season || [];
      const who = p.for || "all";
      if (F.gender !== "all" && who !== "all" && who !== F.gender) return false;
      if (F.season !== "all" && !seasons.some(s => s === F.season || s === "all")) return false;
      if (F.sizes.size && !(p.sizes || []).some(s => F.sizes.has(String(s)))) return false;
      if (F.colors.size && !(p.colors || []).some(c => F.colors.has(c))) return false;
      if (F.min !== "" && p.price < Number(F.min)) return false;
      if (F.max !== "" && p.price > Number(F.max)) return false;
      return true;
    });
    if (F.sort === "cheap") list.sort((a, b) => a.price - b.price);
    else if (F.sort === "expensive") list.sort((a, b) => b.price - a.price);
    return list;
  }

  function labelsHTML(p) {
    let h = "";
    if (p.isNew) h += '<span class="label label--new">' + t("badge_new") + "</span>";
    if (p.oldPrice && p.oldPrice > p.price) h += '<span class="label label--sale">−' + Math.round((1 - p.price / p.oldPrice) * 100) + "%</span>";
    if (p.inStock === false) h += '<span class="label label--order">' + t("badge_order") + "</span>";
    return h ? '<div class="labels">' + h + "</div>" : "";
  }
  const priceHTML = p => '<span class="price">' + money(p.price) +
    (p.oldPrice && p.oldPrice > p.price ? "<s>" + money(p.oldPrice) + "</s>" : "") + "</span>";

  function renderGrid() {
    const list = filtered();
    $("#found").textContent = t("found", { n: list.length });
    if (!list.length) {
      $("#grid").innerHTML = '<div class="empty"><p>' + t("empty") + '</p><button type="button" class="btn btn--outline btn--sm" data-action="reset-filters">' + t("f_reset") + "</button></div>";
      return;
    }
    $("#grid").innerHTML = list.map(p =>
      '<article class="card" data-action="open-product" data-id="' + esc(p.id) + '" tabindex="0">' +
      '<div class="card__img">' + photoHTML(p, 0, true) + labelsHTML(p) + '<span class="card__more">' + t("more") + "</span></div>" +
      '<div class="card__body"><span class="card__cat">' + esc(L(p.name)) + "</span>" + priceHTML(p) +
      '<div class="dots">' + (p.colors || []).map(c => '<i style="--c:' + colorOf(c).hex + '" title="' + esc(L(colorOf(c))) + '"></i>').join("") +
      "</div></div></article>"
    ).join("");
  }

  /* ---------- Тауар терезесі / Окно товара ---------- */
  function openProduct(id) {
    const p = byId(id);
    if (!p) return;
    cur = {
      p, photo: 0, qty: 1, error: "",
      size: (p.sizes || []).length === 1 ? String(p.sizes[0]) : null,
      color: (p.colors || []).length === 1 ? p.colors[0] : null
    };
    renderModal();
    $("#modal").hidden = false;
    $("#modalOverlay").hidden = false;
    document.body.classList.add("lock");
    $("#modalBody").scrollTop = 0;
  }
  function closeModal() {
    cur = null;
    $("#modal").hidden = true;
    $("#modalOverlay").hidden = true;
    if ($("#cart").hidden) document.body.classList.remove("lock");
  }
  function renderModal() {
    const p = cur.p;
    const photos = p.photos || [];
    const seasons = (p.season || []).map(s => t(s === "all" ? "season_allyear" : "season_" + s)).join(", ");
    const who = p.for && p.for !== "all" ? t("gender_" + p.for) : "";
    const colorName = cur.color ? L(colorOf(cur.color)) : "";
    $("#modalBody").innerHTML =
      '<div class="gallery"><div class="gallery__main">' + photoHTML(p, cur.photo) + labelsHTML(p) + "</div>" +
      (photos.length > 1 ? '<div class="thumbs">' + photos.map((src, i) =>
        '<button type="button" class="thumb' + (i === cur.photo ? " active" : "") + '" data-action="thumb" data-i="' + i + '">' +
        '<img src="' + esc(src) + '" alt="" onerror="RB.hideThumb(this)"></button>').join("") + "</div>" : "") +
      "</div>" +
      '<div class="pinfo">' +
      '<div><div class="pinfo__code">Rayanabrand ' + code(p) + "</div><h2>" + esc(L(p.name)) + '</h2><div style="margin-top:12px">' + priceHTML(p) + "</div></div>" +
      '<span class="stock' + (p.inStock === false ? " stock--order" : "") + '">' + t(p.inStock === false ? "on_order" : "in_stock") + "</span>" +
      (L(p.desc) ? "<p>" + esc(L(p.desc)) + "</p>" : "") +
      '<div><div class="opt__head"><h4>' + t("size") + (cur.size ? "<em>" + esc(sizeLabel(cur.size)) + "</em>" : "") +
      '</h4><button type="button" class="link-btn" data-action="goto-sizes">' + t("size_chart_link") + "</button></div>" +
      '<div class="chips">' + (p.sizes || []).map(s =>
        '<button type="button" class="chip' + (cur.size === String(s) ? " active" : "") + '" data-action="pick-size" data-v="' + esc(s) + '">' + esc(s) + "</button>").join("") +
      "</div></div>" +
      '<div><div class="opt__head"><h4>' + t("color") + (colorName ? "<em>" + esc(colorName) + "</em>" : "") + "</h4></div>" +
      '<div class="swatches">' + (p.colors || []).map(c =>
        '<button type="button" class="swatch' + (cur.color === c ? " active" : "") + '" style="--c:' + colorOf(c).hex +
        '" data-action="pick-color" data-v="' + esc(c) + '" title="' + esc(L(colorOf(c))) + '" aria-label="' + esc(L(colorOf(c))) + '"></button>').join("") +
      "</div></div>" +
      (cur.error ? '<p class="opt-error">' + esc(cur.error) + "</p>" : "") +
      '<div class="pactions"><div class="row">' +
      '<div class="qty"><button type="button" data-action="m-minus" aria-label="−">−</button><span>' + cur.qty +
      '</span><button type="button" data-action="m-plus" aria-label="+">+</button></div>' +
      '<button type="button" class="btn btn--dark" data-action="add-cart">' + t("add_cart") + "</button></div>" +
      '<a class="btn btn--light" target="_blank" rel="noopener" href="' + esc(waLink(t("wa_hello") + " " + t("wa_ask", { name: L(p.name), code: code(p), price: money(p.price) }))) + '">' +
      '<svg viewBox="0 0 24 24"><path d="M3.5 20.5l1.3-4A8.5 8.5 0 1 1 8 19.6z"/><path d="M9.2 8.4c0 3 2.6 6.4 6.4 6.4l.9-1.4-2-1-1 .8c-1-.5-2-1.5-2.4-2.5l.8-1-1-2z"/></svg>' +
      t("ask_wa") + "</a></div>" +
      '<dl class="meta">' +
      (who ? "<div><dt>" + t("for_whom") + "</dt><dd>" + esc(who) + "</dd></div>" : "") +
      (L(p.fabric) ? "<div><dt>" + t("fabric") + "</dt><dd>" + esc(L(p.fabric)) + "</dd></div>" : "") +
      (seasons ? "<div><dt>" + t("season") + "</dt><dd>" + esc(seasons) + "</dd></div>" : "") +
      "</dl></div>";
  }
  function addToCart() {
    const p = cur.p;
    if (!cur.size && (p.sizes || []).length) { cur.error = t("pick_size"); renderModal(); return; }
    if (!cur.color && (p.colors || []).length) { cur.error = t("pick_color"); renderModal(); return; }
    const found = cart.find(it => String(it.id) === String(p.id) && it.size === cur.size && it.color === cur.color);
    if (found) found.qty += cur.qty;
    else cart.push({ id: p.id, size: cur.size, color: cur.color, qty: cur.qty });
    saveCart();
    renderCart();
    closeModal();
    toast(t("added"));
    const b = $("#cartCount");
    b.classList.remove("bump"); void b.offsetWidth; b.classList.add("bump");
  }

  /* ---------- Себет / Корзина ---------- */
  const saveCart = () => store.set("rb_cart", cart);
  const cartTotal = () => cart.reduce((s, it) => { const p = byId(it.id); return s + (p ? p.price * it.qty : 0); }, 0);
  const cartQty = () => cart.reduce((s, it) => s + it.qty, 0);
  const selectedDelivery = () => SHOP.delivery.find(d => d.id === $("#deliverySelect").value) || SHOP.delivery[0];
  const itemOpts = it => [it.size ? sizeLabel(it.size) : "", it.color ? L(colorOf(it.color)) : ""].filter(Boolean);

  function openCart() {
    $("#cart").hidden = false;
    $("#cartOverlay").hidden = false;
    document.body.classList.add("lock");
  }
  function closeCart() {
    $("#cart").hidden = true;
    $("#cartOverlay").hidden = true;
    if ($("#modal").hidden) document.body.classList.remove("lock");
  }

  function renderCart() {
    const count = cartQty();
    $("#cartCount").textContent = count;
    $("#cartCount").hidden = !count;
    const total = cartTotal();
    $("#cartTotal").textContent = money(total);

    const empty = !cart.length;
    $("#orderForm").hidden = empty;
    $("#cartFoot").hidden = empty;

    if (empty) {
      $("#cartItems").innerHTML = '<div class="cart-empty"><svg viewBox="0 0 24 24"><path d="M5 8h14l-1.2 12H6.2z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/></svg>' +
        "<p><b>" + t("cart_empty") + "</b><br>" + t("cart_empty_hint") + '</p><a href="#catalog" class="btn btn--dark btn--sm" data-action="close-cart">' + t("go_catalog") + "</a></div>";
      return;
    }

    const min = SHOP.deliveryMin;
    const pct = Math.min(100, Math.round(total / min * 100));
    const ok = total >= min;
    $("#cartItems").innerHTML = cart.map((it, i) => {
      const p = byId(it.id);
      return '<div class="citem"><div class="citem__img">' + photoHTML(p, 0) + "</div>" +
        "<div><h5>" + esc(L(p.name)) + "<span>" + code(p) + "</span></h5><small>" + esc(itemOpts(it).join(" · ")) + "</small><small>" + money(p.price) + "</small>" +
        '<div class="qty"><button type="button" data-action="c-minus" data-i="' + i + '" aria-label="−">−</button><span>' + it.qty +
        '</span><button type="button" data-action="c-plus" data-i="' + i + '" aria-label="+">+</button></div></div>' +
        '<div class="citem__right"><strong>' + money(p.price * it.qty) + '</strong><button type="button" class="link-btn" data-action="c-remove" data-i="' + i + '">' + t("remove") + "</button></div></div>";
    }).join("") +
      '<div class="progress' + (ok ? " ok" : "") + '">' + (ok ? t("delivery_ok") : t("delivery_left", { left: money(min - total) })) +
      '<div class="progress__bar"><i style="width:' + pct + '%"></i></div></div>' +
      '<div class="cart-actions"><button type="button" class="link-btn" data-action="clear-cart">' + t("clear_cart") + "</button></div>";

    updateCheckout();
  }

  function updateCheckout() {
    const d = selectedDelivery();
    const total = cartTotal();
    $("#addressField").hidden = !d.needsAddress;
    const blocked = d.needsMin && total < SHOP.deliveryMin;
    const pickup = SHOP.delivery.find(x => !x.needsMin);
    const w = $("#minWarn");
    w.hidden = !blocked;
    if (blocked) w.textContent = t("min_warn", { sum: money(SHOP.deliveryMin), left: money(SHOP.deliveryMin - total), pickup: pickup ? L(pickup) : "" });
    $("#sendBtn").disabled = blocked;
  }

  function submitOrder(e) {
    e.preventDefault();
    const f = e.target;
    const err = $("#formError");
    const name = f.name.value.trim();
    const phone = f.phone.value.trim();
    const address = f.address.value.trim();
    const d = selectedDelivery();
    let msg = "";
    if (!name) msg = t("err_name");
    else if (phone.replace(/\D/g, "").length < 10) msg = t("err_phone");
    else if (d.needsAddress && !address) msg = t("err_address");
    if (msg) { err.textContent = msg; err.hidden = false; return; }
    err.hidden = true;
    if (d.needsMin && cartTotal() < SHOP.deliveryMin) return;

    const lines = cart.map((it, i) => {
      const p = byId(it.id);
      const opts = itemOpts(it).join(", ");
      return (i + 1) + ". " + L(p.name) + " " + code(p) + (opts ? " — " + opts : "") + " × " + it.qty + " " + t("pcs") + " = " + money(p.price * it.qty);
    });
    const pay = SHOP.payment[Number(f.payment.value)] || SHOP.payment[0];
    const text = [
      t("wa_hello"), t("wa_intro"), "",
      lines.join("\n"), "",
      t("wa_total") + ": " + money(cartTotal()), "",
      t("wa_name") + ": " + name,
      t("wa_phone") + ": " + phone,
      t("wa_delivery") + ": " + L(d),
      d.needsAddress ? t("wa_address") + ": " + address : null,
      t("wa_payment") + ": " + L(pay),
      f.comment.value.trim() ? t("wa_comment") + ": " + f.comment.value.trim() : null
    ].filter(x => x !== null).join("\n");

    const url = waLink(text);
    const a = document.createElement("a");
    a.href = url; a.target = "_blank"; a.rel = "noopener";
    document.body.appendChild(a); a.click(); a.remove();
    toast(t("wa_opened"));
  }

  /* ---------- Хабарлама / Уведомление ---------- */
  let toastTimer;
  function toast(text, ms) {
    const el = $("#toast");
    el.textContent = text;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), ms || 2600);
  }

  /* ---------- Телефонға орнату (PWA) / Установка на телефон ---------- */
  let installPrompt = null;
  const isStandalone = () => window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  if (isStandalone()) $("#installBtn").hidden = true;
  window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); installPrompt = e; });
  window.addEventListener("appinstalled", () => { installPrompt = null; $("#installBtn").hidden = true; toast(t("installed"), 4000); });
  function install() {
    if (installPrompt) {
      installPrompt.prompt();
      installPrompt.userChoice.finally(() => { installPrompt = null; });
    } else {
      toast(t(isIOS ? "install_ios" : "install_other"), 8000);
    }
  }
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }

  /* ---------- Оқиғалар / События ---------- */
  document.addEventListener("click", e => {
    const el = e.target.closest("[data-action]");
    if (!el) {
      if (!e.target.closest(".header")) $("#nav").classList.remove("open");
      return;
    }
    const a = el.dataset.action, v = el.dataset.v, i = Number(el.dataset.i);
    switch (a) {
      case "set-lang": lang = el.dataset.lang; store.set("rb_lang", lang); applyLang(); break;
      case "burger": $("#nav").classList.toggle("open"); break;
      case "gender": F.gender = v; renderGenders(); renderGrid(); break;
      case "season": F.season = v; renderSeasons(); renderGrid(); break;
      case "season-tile":
        F.season = v; renderSeasons(); renderGrid();
        $("#catalog").scrollIntoView({ behavior: "smooth" }); break;
      case "toggle-filters": $("#filters").hidden = !$("#filters").hidden; break;
      case "f-size": F.sizes.has(v) ? F.sizes.delete(v) : F.sizes.add(v); renderFilters(); renderGrid(); break;
      case "f-color": F.colors.has(v) ? F.colors.delete(v) : F.colors.add(v); renderFilters(); renderGrid(); break;
      case "reset-filters":
        F.gender = "all"; F.season = "all"; F.sizes.clear(); F.colors.clear(); F.min = F.max = "";
        $("#fMin").value = $("#fMax").value = "";
        renderGenders(); renderSeasons(); renderFilters(); renderGrid(); break;
      case "open-product": openProduct(el.dataset.id); break;
      case "close-modal": closeModal(); break;
      case "thumb": cur.photo = i; renderModal(); break;
      case "pick-size": cur.size = v; cur.error = ""; renderModal(); break;
      case "pick-color": cur.color = v; cur.error = ""; renderModal(); break;
      case "m-minus": cur.qty = Math.max(1, cur.qty - 1); renderModal(); break;
      case "m-plus": cur.qty = Math.min(20, cur.qty + 1); renderModal(); break;
      case "add-cart": addToCart(); break;
      case "goto-sizes": closeModal(); $("#sizes").scrollIntoView({ behavior: "smooth" }); break;
      case "open-cart": openCart(); break;
      case "close-cart": closeCart(); break;
      case "c-minus": if (cart[i].qty > 1) { cart[i].qty--; saveCart(); renderCart(); } break;
      case "c-plus": cart[i].qty = Math.min(20, cart[i].qty + 1); saveCart(); renderCart(); break;
      case "c-remove": cart.splice(i, 1); saveCart(); renderCart(); break;
      case "clear-cart": cart = []; saveCart(); renderCart(); break;
      case "install": install(); break;
    }
  });

  $("#nav").addEventListener("click", e => { if (e.target.closest("a")) $("#nav").classList.remove("open"); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { if (cur) closeModal(); else if (!$("#cart").hidden) closeCart(); }
    if (e.key === "Enter" && e.target.classList && e.target.classList.contains("card")) openProduct(e.target.dataset.id);
  });
  $("#sort").addEventListener("change", e => { F.sort = e.target.value; renderGrid(); });
  $("#fMin").addEventListener("input", e => { F.min = e.target.value; renderFilters(); renderGrid(); });
  $("#fMax").addEventListener("input", e => { F.max = e.target.value; renderFilters(); renderGrid(); });
  $("#deliverySelect").addEventListener("change", updateCheckout);
  $("#orderForm").addEventListener("submit", submitOrder);

  $("#year").textContent = new Date().getFullYear();
  applyLang();
})();
