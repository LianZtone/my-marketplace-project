<template>
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-column fade-in">
                    <h3>GreenLife</h3>
                    <p>Menyediakan produk organik terbaik untuk mendukung gaya hidup sehat dan ramah lingkungan.</p>
                    <div class="social-icons">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>

                <div class="footer-column fade-in delay-1">
                    <h3>Tautan Cepat</h3>
                    <ul>
                        <li><a href="#">Beranda</a></li>
                        <li><a href="#">Produk</a></li>
                        <li><a href="#">Artikel</a></li>
                        <li><a href="#">Tentang Kami</a></li>
                        <li><a href="#">Kontak</a></li>
                    </ul>
                </div>

                <div class="footer-column fade-in delay-2">
                    <h3>Kategori Produk</h3>
                    <ul>
                        <li><a href="#">Makanan Sehat</a></li>
                        <li><a href="#">Minuman Herbal</a></li>
                        <li><a href="#">Skincare Organik</a></li>
                        <li><a href="#">Produk Rumah Tangga</a></li>
                        <li><a href="#">Bahan Masak Organik</a></li>
                    </ul>
                </div>

                <div class="footer-column fade-in delay-3">
                    <h3>Kontak Kami</h3>
                    <ul>
                        <li><i class="fas fa-map-marker-alt"></i> Jl. Green Life Limbu, Makale</li>
                        <li><i class="fas fa-phone"></i> +62 21 1234 5678</li>
                        <li><i class="fas fa-envelope"></i> info@greenlife.com</li>
                    </ul>
                </div>
            </div>

            <div class="copyright">
                <p>&copy; 2023 GreenLife - All Rights Reserved</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
defineOptions({
    name : 'Footer'
})
</script>

<style lang="scss" scoped>
@import "@/style.scss";

footer {
    background: $dark-bg;
    color: $white;
    padding: 80px 0 30px;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-bottom: 50px;
}

.footer-column {
    h3 {
        color: $white;
        margin-bottom: 25px;
        font-size: 1.3rem;
        position: relative;
        padding-bottom: 10px;

        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 40px;
            height: 3px;
            background: $accent;
            border-radius: 2px;
        }
    }

    p {
        margin-bottom: 20px;
        opacity: 0.8;
    }

    ul {
        list-style: none;
    }

    li {
        margin-bottom: 12px;
    }

    a {
        color: $white;
        text-decoration: none;
        transition: $transition;
        opacity: 0.8;

        &:hover {
            opacity: 1;
            color: $accent;
            padding-left: 5px;
        }
    }
}

.social-icons {
    display: flex;
    gap: 15px;
    margin-top: 20px;

    a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 45px;
        height: 45px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        transition: $transition;

        &:hover {
            background: $primary;
            transform: translateY(-3px);
        }
    }
}

.copyright {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.9rem;
    opacity: 0.7;
}
</style>