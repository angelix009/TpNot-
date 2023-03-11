import { NewsService } from '../service/news-service.js';

export default {
  data() {
    return {
      articles: [],
    };
  },
  created() {
    const newsService = new NewsService('9cb954a00f0946329ef63fb2022850e9');

    newsService.getEsportNews().then(articles => {
      this.articles = articles;
    });
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
    },
  },
  template: `
    <div>
      <h2>HOME</h2>
      <ul>
        <li v-for="article in articles" :key="article.publishedAt">
          <h3>{{ article.title }}</h3>
          <p>{{ formatDate(article.publishedAt) }}</p>
        </li>
      </ul>
    </div>
  `,
};
