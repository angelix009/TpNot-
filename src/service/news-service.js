export class NewsService {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async getEsportNews() {
    const url = `https://newsapi.org/v2/everything?q=esport&sortBy=publishedAt&language=fr&apiKey=${this.apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Une erreur est survenue durant l'appel HTTP : ${response.status}`);
    }

    const data = await response.json();
    const articles = data.articles.filter(article => article.title.toLowerCase().includes('esport'));

    return articles.slice(0, 5);
  }
}