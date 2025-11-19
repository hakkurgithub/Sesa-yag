# Copilot Instructions for Sesa Yağ Website

## Proje Hakkında
- Bu depo, Sesa Yağ'ın modern ve mobil uyumlu ayçiçeği yağı üretim/satış web sitesidir.
- Tamamen statik bir frontend projesidir: **HTML5**, **CSS3**, **Vanilla JavaScript** kullanılır.
- Sunucu tarafı kodu veya framework bulunmaz; tüm işlevler istemci tarafında çalışır.

## Temel Dosya ve Yapı
- `index.html`: Ana sayfa ve tüm içerik bölümleri (navigasyon, ürünler, üretim, iletişim, vs.)
- `styles.css`: Tüm stil ve responsive tasarım kuralları burada.
- `script.js`: Navigasyon, mobil menü, sepete ekleme gibi etkileşimli fonksiyonlar burada.
- `README.md`: Proje açıklaması, kullanım ve özelleştirme rehberi.

## Geliştirici Akışları
- Geliştirme için ek araç gerekmez, doğrudan dosya düzenlenir.
- Başlatmak için: `npm install -g serve` ile `serve .` komutunu kullanarak lokal sunucu açılır.
- Değişiklikler için sayfayı yenilemek yeterlidir.

## Proje Konvansiyonları
- Tüm bölümler tek bir HTML dosyasında (SPA benzeri) tutulur.
- CSS değişkenleriyle tema kolayca değiştirilebilir (`:root` içinde).
- Ürünler, `product-card` sınıfı ile tanımlanır; yeni ürün eklemek için bu yapıyı kopyalayın.
- İletişim ve bülten formları sadece görseldir, backend entegrasyonu yoktur.
- Responsive ve mobil uyumluluk zorunludur; CSS media query ve grid/flex kullanılır.

## Dış Bağımlılıklar
- [Font Awesome](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css) ikonları CDN ile yüklenir.
- Görseller Unsplash üzerinden örnek olarak eklenmiştir.

## Sık Karşılaşılan Sorunlar
- Script veya stil değişiklikleri görünmüyorsa, tarayıcı önbelleğini temizleyin.
- Mobil menü ve sepete ekleme işlevleri `script.js` içindedir; JS hatalarında konsolu kontrol edin.

## Genişletme ve Entegrasyon
- Backend, ödeme, admin paneli gibi işlevler için yeni dosya ve dizinler eklenebilir.
- Tüm yeni bölümler mevcut HTML/CSS/JS yapısına uygun eklenmelidir.

## Örnekler
- Yeni ürün eklemek için:
  ```html
  <div class="product-card">
    ...
  </div>
  ```
- Renk temasını değiştirmek için `styles.css`:
  ```css
  :root {
    --primary-color: #f4b400;
    --secondary-color: #ff6f00;
  }
  ```

---
Daha fazla bilgi için `README.md` dosyasına bakın veya info@sesayag.com adresine ulaşın.
