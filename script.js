// script.js
// Global sepet objesi: Ürün Adı : Miktar
let cart = {}; 
const WA_NUMBER = "+905333715577"; // Yeni WhatsApp numaranız

// ... (Diğer tüm mevcut kodlarınız: Hamburger, Scroll, Smooth Scroll)

// Sepete Ekle Butonu
const cartButtons = document.querySelectorAll('.btn-cart');

cartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const productCard = e.target.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        
        // Sepete ürün ekleme/artırma
        cart[productName] = (cart[productName] || 0) + 1;
        console.log('Güncel Sepet:', cart);
        
        // Sepet Sayacını Güncelle (Eğer ekranda bir sayaç varsa)
        updateCartDisplay(); 

        // Bildirim göster
        showNotification(`${productName} sepete eklendi! (Toplam Ürün: ${Object.keys(cart).length})`);
        
        // Animasyon (Mevcut kodunuzdaki gibi)
        // ...
    });
});

// Sipariş Mesajını Hazırlama Fonksiyonu
function generateOrderMessage() {
    let message = "Merhaba Sesa Yağ, aşağıdaki ürünleri sipariş etmek istiyorum:\n\n";
    let totalItems = 0;
    
    // Sepeti listeleyin
    for (const product in cart) {
        if (cart[product] > 0) {
            message += `* ${product}: ${cart[product]} adet\n`;
            totalItems += cart[product];
        }
    }
    
    if (totalItems === 0) {
        return "Sepetim boş.";
    }
    
    message += "\nLütfen siparişimi onaylamak için bana ulaşın.";
    
    // URL uyumlu hale getir
    return encodeURIComponent(message);
}

// Yeni: WhatsApp Sipariş Butonu İşlevi
const checkoutButton = document.querySelector('.btn-checkout'); // index.html'e yeni bir buton eklenmeli

if (checkoutButton) {
    checkoutButton.addEventListener('click', () => {
        if (Object.keys(cart).length === 0) {
            showNotification('Sepetinizde ürün bulunmamaktadır.', '#e74c3c');
            return;
        }

        const message = generateOrderMessage();
        const whatsappLink = `https://wa.me/${WA_NUMBER.replace(/\D/g, '')}?text=${message}`;
        
        window.open(whatsappLink, '_blank');
        
        // Sipariş gönderildikten sonra sepeti boşalt
        cart = {}; 
        updateCartDisplay(); 
    });
}

// ... (updateCartDisplay ve showNotification fonksiyonlarını bırakın/güncelleyin)

// NOT: showNotification'ın ikinci parametresini (background color) eklemek için 
// fonksiyonunuzu güncelleyebilirsiniz.
// function showNotification(message, bgColor = '#27ae60') { ... }