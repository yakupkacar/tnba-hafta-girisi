# Handoff: T-NBA Championship Görsel Sistemi

## Overview
T-NBA Championship (18 takımlı özel Yahoo Fantasy Basketball ligi) için haftalık sosyal medya görsel sistemi. Amaç: **tasarımları birebir koruyarak, her hafta güncellenen veriden otomatik PNG üretimini** (1080×1920, Instagram Story / WhatsApp) kurmak.

## About the Design Files
Bu paketteki dosyalar **HTML ile üretilmiş tasarım referanslarıdır** — hedef, bunları yeniden tasarlamak değil, **olduğu gibi render edip PNG çıktısını otomatikleştirmektir**. Dosyalar tarayıcıda doğrudan açılır (`support.js` runtime'ı ekranları render eder; sayfalar arası import'lar dosya adlarıyla çalışır — **dosya adlarını değiştirmeyin**). Yerel sunucu gerekir (ES module import'ları yüzünden `file://` çalışmaz): `python3 -m http.server` yeterli.

## Fidelity
**High-fidelity.** Renkler, tipografi, boşluklar ve kompozisyon finaldir; piksel piksel korunmalı.

## Tek Veri Kaynağı — `tnba-data.js`
Tüm ekranlar SADECE bu dosyadan beslenir. Haftalık iş akışı: Yahoo verileri bu dosyaya işlenir → tüm ekranlar kendini günceller → PNG'ler alınır.
- `TEAMS`: takım → [monogram, renk]. Monogramlar logo yüklenene kadarki yedektir.
- `WEEK`: `hafta`, `standings` (r/rec/form/prev), `matchups`, `leaders`. `prev` = geçen haftaki sıra; ▲▼ okları bundan hesaplanır (yeni haftada mevcut sıralar prev'e taşınır).
- `FIXTURES`: gelecek haftanın eşleşmeleri (teaser bunu okur).
- `PLAYER_LEADERS`: kategori lideri oyuncular — **paketteki değerler ÖRNEKTİR**, gerçek veriyle değiştirilmeli.
- `CHAMPIONS`: sezon → şampiyon listesi (şampiyonlar sayfası + ★ sayaçları otomatik).
Türetilenler (elle girilmez): sıra okları, 3+ galibiyet/mağlubiyet seri rozetleri, "EN ÇEKİŞMELİ / EN FARKLI" etiketi, "HAFTANIN HÂKİMİ" bandı, şampiyonluk ★'ları.

## Screens
Hepsi 1080×1920, kök eleman `[data-screen-label]` attribute'u taşır — PNG yakalama hedefi budur.

### 2026-27 Haftalık Set (Modernist kimlik)
Ortak dil: zemin `#f3f2f2`, mürekkep `#201e1d`, tek vurgu kırmızı `#ec3013`, font **Archivo** (Google Fonts; 136px/900 hafta başlığı, 2px mürekkep çizgiler, sıfır köşe yuvarlatma). Ortak başlık: 72px logo + "T-NBA CHAMPIONSHIP" + kırmızı "2026-27 SEZONU" rozeti; altbilgi çizgi + "T-NBA CHAMPIONSHIP / 2026-27 SEZONU".
1. **Puan Durumu** (`T-NBA 2026-27 Puan Durumu.dc.html`, label `Puan Durumu 26-27`): 18 satır grid (92/56/1fr/150/210px), 72px satır; ilk 3 kırmızı sıra numarası; 8. sıradan sonra kırmızı "PLAYOFF SINIRI" çizgisi; form = 26px kare W (dolu mürekkep) / L (çerçeve) / T (kırmızı çerçeve).
2. **Maç Sonuçları** (`...Mac Sonuclari...`, label `Mac Sonuclari 26-27`): 9 kart, grid 1fr/210/1fr; kartlar `#fbfaf9`, kenarlarda 6px takım rengi şeridi; 56px/900 skorlar (kaybeden %35 opak); kazanana kırmızı "KAZANAN"; uç maçlara kırmızı etiket.
3. **Haftanın En'leri** (label `Haftanin Enleri 26-27`): 11 kategori satırı (270/1fr/360), kod 31px/900 + İngilizce açıklama 13px; değer 54px/900; altta kırmızı zeminli "HAFTANIN HÂKİMİ" bandı (2+ kategori kazanana otomatik).
4. **Oyuncu Liderleri** (label `Oyuncu Liderleri 26-27`): aynı tablo dili; oyuncu 27px/800 + takım 14px; değer sağda 50px/900.
5. **Fikstür Teaser** (label `Fikstur 26-27`): 9 skorsuz VS kartı; ortada 30px/900 "VS" + 22px kırmızı çizgi.
6. **Sistem** (`T-NBA 2026-27 Sistem.dc.html`): tüm ekranları yan yana gösteren genel bakış (üretim hedefi değil, referans).

### Şampiyonlar — Klasik Yeşil (`T-NBA Sampiyonlar Klasik Yesil.dc.html`, label `Sampiyonlar Klasik Yesil`)
Gravür/onur panosu: zemin `#122A1E`, metin `#EDE2C4`, vurgu pirinç `#BC9440`; çift ince çerçeve (inset 30px/40px); başlık **Playfair Display** 90px/700 "Şampiyonlar Listesi", baklava uçlu ayraçlar; her giriş: sezon (20px, 0.34em aralık, pirinç) → takım (Playfair 54px/700) → ★'lar (13px pirinç, kümülatif); son şampiyonda "SON ŞAMPİYON" satırı; boş sezon girişi: `2026-27` → italik *"Sıradaki şampiyon?"* (47px) → "SEZON SONUNDA YAZILACAK"; en altta "EN ÇOK ŞAMPİYONLUK" sayacı (17px/500 isimler + pirinç ★).

### Animasyonlu Story (`T-NBA Story Animasyon.dc.html` + `tnba-story-scene.jsx` + `animations-v3.jsx`)
23sn, 5 sahne (Açılış → Skorlar → İlk 3 → En'ler → Kapanış), sahne listesi `window.OM_SCENES`'te; aynı `tnba-data.js`'ten beslenir. PNG değil video/canlı kullanım içindir; MP4 export tarayıcıdan yapılır.

### Sezon Arşivi (`T-NBA Arsiv.dc.html`)
Paylaşım görseli değil, gezilebilir arşiv sayfası: `arsiv/haftalar.js` manifesti + `arsiv/hafta-N.js` kopyaları; hafta kapanınca `tnba-data.js` arşive kopyalanıp manifeste satır eklenir.

## Logo Slotları (image-slot.js)
Tüm takım rozetleri `<image-slot id="tl-XX">` alanıdır (XX = monogram). Gerçek logo bir kez bırakıldığında `.image-slots.state.json` sidecar dosyasına kaydedilir ve aynı id'li tüm ekranlarda görünür. Sidecar, HTML dosyalarının YANINDA durur — PNG otomasyonunda bu dosya varsa korunmalı. Boş slotlar monogram gösterir (tasarım bozulmaz).

## PNG Otomasyonu (hedef iş)
Önerilen: Playwright/Puppeteer ile yerel sunucudan her sayfayı aç, fontların yüklenmesini bekle, `[data-screen-label]` elemanını 2x ölçekle yakala:
```js
const page = await browser.newPage({ deviceScaleFactor: 2 });
await page.goto('http://localhost:8000/T-NBA%202026-27%20Puan%20Durumu.dc.html');
await page.waitForFunction(() => document.fonts.status === 'loaded');
await page.waitForTimeout(1200); // veri import + render
await page.locator('[data-screen-label]').screenshot({ path: 'out/puan-durumu.png' });
```
Beş haftalık ekran + şampiyonlar sayfası için döngü yeterli. Çıktı: 2160×3840 PNG.

## Design Tokens
**2026-27 set:** bg `#f3f2f2` · ink `#201e1d` · kırmızı `#ec3013` · kart `#fbfaf9` · çizgiler `rgba(32,30,29,.14/.22)` · font Archivo (200-900) · başlık 136/900 · gövde 24-28/600-800 · radius 0.
**Klasik Yeşil:** bg `#122A1E` · dış zemin `#0C1D15` · metin `#EDE2C4` · pirinç `#BC9440` · fontlar Playfair Display + Archivo · radius 0.
**Takım renkleri:** `tnba-data.js` → `TEAMS` (her takımın tek accent rengi; yalnız rozet çerçevesi ve kart kenar şeritlerinde kullanılır).

## Assets
- `assets/tnba-logo.png` — resmi lig logosu (Est. 2019); tüm ekranlar bunu kullanır, deforme edilmez, daire maskeyle kırpılır.
- Google Fonts: Archivo, Playfair Display (sayfa başlıklarındaki `<link>`'ler).
- `_ds/…/styles.css + _ds_bundle.js` — 2026-27 setinin stil değişkenleri (sayfalar fallback değer taşır ama birebir görünüm için pakette).

## Files
Yukarıda adı geçen tüm dosyalar bu klasördedir. `support.js` render runtime'ıdır — değiştirmeyin. Dosya adları import anahtarıdır — yeniden adlandırmayın.
