<template>
    <section class="categories container">
        <div class="section-title fade-in">
            <h2>Kategori Produk</h2>
            <p>Temukan berbagai kategori produk organik untuk kebutuhan sehat Anda</p>
        </div>

        <div class="category-container">
            <div v-for="(category, index) in categories" :key="category.id" class="category-card fade-in"
                :class="`delay-${index + 1}`">
                <img :src="category.image" :alt="category.name">
                <div class="category-overlay">
                    <h3>{{ category.name }}</h3>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Categories',
    data() {
        return {
            categories: [
                {
                    id: 1,
                    name: 'Makanan Sehat',
                    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                },
                {
                    id: 2,
                    name: 'Minuman Herbal',
                    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
                },
                {
                    id: 3,
                    name: 'Skincare Organik',
                    image: 'https://plus.unsplash.com/premium_photo-1661454224348-5ebd8dc380bb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/style.scss";

.categories {
    margin: 80px 0;
}

.category-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
}

.category-card {
    position: relative;
    height: 220px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: $card-shadow;
    transition: $transition;

    &:hover {
        transform: translateY(-5px);
        box-shadow: $card-hover-shadow;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s;
    }

    &:hover img {
        transform: scale(1.1);
    }
}

.category-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    display: flex;
    align-items: flex-end;
    padding: 25px;

    h3 {
        color: $white;
        font-size: 1.5rem;
    }
}
</style>