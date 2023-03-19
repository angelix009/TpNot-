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
          { label: 'home', url: links[0] },
          { label: 'team', url: links[1] },
          { label: 'result', url: links[2] }
        ];
      },
      changePage(page) {
        this.$emit('change-page', page);
      }
    },
    template: `
        <nav>
            <ul class="menu-pannel">
              <li class="menu-pannel-item" v-for="link in links" @click="changePage(link.label)" :key="link.label">
                  {{ link.label }}
              </li>
            </ul>
        </nav>
    `   
  };