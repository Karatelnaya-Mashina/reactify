import { searchModule } from './search.js';
import { actions, state } from './state/state.js';

document.addEventListener('DOMContentLoaded', () => {
  searchModule(state, actions);
});
