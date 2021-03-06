// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from './layouts/Default.vue';

// Tailwind
import './css/main.css';

/* eslint-disable no-unused-vars */
const run = (Vue, { router, head, isClient }) => {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
};
export default run;
