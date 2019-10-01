import { Component, Vue } from 'vue-property-decorator';
// @ts-ignore
import logo from '@/assets/cam.png';
import Introduction from '@/components/Introduction/Introduction.vue';
import AboutUs from '@/components/About Us/AboutUs.vue';
import MyWorks from '@/components/My Works/MyWorks.vue';
import Contact from '@/components/Contact/Contact.vue';
import LogoGrid from '@/components/Logo Grid/LogoGrid.vue';
import Pricing from "@/components/Pricing/Pricing.vue";

interface NavItems {
  id: number;

  name: string;

  ref: string;
}

@Component({
  name: 'App',
  components: {
    Introduction,
    AboutUs,
    MyWorks,
    Pricing,
    Contact,
    LogoGrid,
  },
})
export default class App extends Vue {
  logo: any = logo;

  drawer: boolean = false;

  type: string = 'selector';

  selector: string = '#home';

  duration: number = 900;

  offset: number = 0;

  easing: string = 'easeInOutCubic';

  navItems: NavItems[] = [
    {
      id: 1,
      name: 'Home.',
      ref: '#home',
    },
    {
      id: 2,
      name: 'About Me.',
      ref: '#about',
    },
    {
      id: 3,
      name: 'Works.',
      ref: '#works',
    },
    {
      id: 4,
      name: 'Journal.',
      ref: '#journal',
    },
    {
      id: 5,
      name: 'Contact.',
      ref: '#contact',
    },
  ]

  get target() {
    // @ts-ignore
    const value = this[this.type];
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(value)) return Number(value);
    return value;
  }

  get options() {
    return {
      duration: this.duration,
      offset: this.offset,
      easing: this.easing,
    };
  }

  scroll(ref: string) {
    this.selector = ref;
    this.drawer = false;
    // @ts-ignore
    this.$vuetify.goTo(this.target, this.options).catch();
  }
}
