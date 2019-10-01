import { Component, Vue } from 'vue-property-decorator';
// @ts-ignore
import image from '@/assets/about.png';

@Component
export default class AboutUs extends Vue {
  image: any = image;

  aboutParagraph: string = 'All that we do is work on the style of life, on "being". The object as such is not very interesting. \n '
    + 'I wonder how people will live with him, what metamorphoses he will undergo in the house. \n'
    + 'I always liked very simple things. In all. Doing simple things is the most difficult thing. \n'
    + 'If we talk about simplicity, then it is a synthesis.'
}
