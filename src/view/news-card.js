export default {
    props: {
        article: {
        type: Object,
        required: true
        }
    },
    methods: {
        formatDate(dateString) {
        const date = new Date(dateString);
        const day = this.formatNumber(date.getDate());
        const month = this.formatNumber(date.getMonth() + 1);
        const year = date.getFullYear();
        const hours = this.formatNumber(date.getHours());
        const minutes = this.formatNumber(date.getMinutes());
        return `${day}/${month}/${year} ${hours}h${minutes}`;
        },
        formatNumber(number) {
        return number.toString().padStart(2, '0');
        }
    },
    template : `
        <div class="news-card">
            <h2 class="news-card__title">{{ article.title }}</h2>
            <p class="news-card__date">{{ formatDate(article.publishedAt) }}</p>
        </div>
    `
};

