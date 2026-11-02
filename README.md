# Kasas · Kıssalarla Arapça Okuma (pilot)

Kasasu'n-Nebiyyîn serisi üzerine kurulu, okuma temelli Arapça öğrenme sitesi. Derleme gerektirmez; GitHub Pages'te doğrudan çalışır.

**İçerik:** 11 kıssa (İbrahim'den Îsâ'ya), her biri okuma öncesi / okuma / okuma sonrası adımlarından oluşan kısa ünitelere ayrılmış. Sitede bir **çalışma rehberi** de var (`#/rehber`).

## Dosyalar
- `index.html`: giriş sayfası
- `css/style.css`: görünüm
- `js/app.js`: uygulama (kıssa sayfaları, üniteler, çalışma rehberi)
- `data/catalog.js`: ana sayfadaki kıssa listesi
- `data/<kıssa>.js`: kıssa metinleri, çeviriler ve etkinlikler
- `data/glossary.js`: ortak sözlük (metindeki kelimelere dokununca açılır)
- `data/overrides.js`: sözlük eşleşme düzeltmeleri
- `img/covers/`: kapak görselleri

## Yayın
Settings → Pages → Source: **Deploy from a branch** → Branch: `main` / `(root)` → Save.
Birkaç dakika sonra site `https://<kullanıcı-adı>.github.io/<depo-adı>/` adresinde açılır.

Öğrenci ilerlemesi yalnızca kullanıcının kendi tarayıcısında saklanır; site veri toplamaz.
