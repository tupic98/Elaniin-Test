import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Introduction extends Vue {
  mainText: string = 'Photography is \n a journey.'

  mainParagraph: string = 'My advice to everyone is to create life, not consume it. I\'m curious to \n ' +
    'see how many emotions now appear in things created with the help of \n ' +
    'complex technologies. They are so loaded with different feelings that it \n ' +
    'is no longer possible to separate emotions and work from the \n ' +
    ' instrument on which is done.'
}
