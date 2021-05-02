import {
  EmojiNature,
  LocalMall,
} from '@material-ui/icons';

import {
  Main,
  Pokedex,
} from '../pages';

export default {
  initial: '/nature',
  routes: [
    {
      id: 1,
      label: 'Nature',
      icon: EmojiNature,
      path: '/nature',
      exact: true,
      component: Main,
    },

    {
      id: 2,
      label: 'My Pokedex',
      icon: LocalMall,
      path: '/pokedex',
      exact: true,
      component: Pokedex,
    },
  ]
};
