import { LinkService } from '../service/link-service.js';

export default {
    data: function() {
      return {
        links: []
      };
    },
    mounted() {
      this.loadLinks();
    },
    methods: {
      loadLinks: function() {
        const linkService = new LinkService();
        const links = linkService.getLinks();
        this.links = [
          { label: 'Home', url: links[0] },
          { label: 'Teams', url: links[1] },
          { label: 'Results', url: links[2] }
        ];
      }
    },
    template: `
        <nav>
            <ul class="menu-pannel">
            <li  v-for="link in links" :key="link.label">
                <a :href="link.url">{{ link.label }}</a>
            </li>
            </ul>
        </nav>
    `   
  };