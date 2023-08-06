import Vue from 'vue';
import App from './App.vue';

/**
 * TODO 1: Import VueRouter
 */

/**
 * TODO 6: Import Home and About components
 */

/**
 * TODO 2: for the app to use the VueRouter, we have to declare it.
 * Vue.use(VueRouter)
 */

/**
 * TODO 7: create the routes array containing 
 * * an empty route ('/') for the Home component and 
 * * an '/about' route for the About component.
 * 
 * Hints:
 * How to declare an array in javascript - https://www.w3schools.com/js/js_arrays.asp
 * 
 * Every route is an object containing a path, usually '/route-name' and a component, the name of the component.
 * Example: { path: '/new-route', component: NewRoute }
 */

/**
 * TODO 8: create the router object using the routes array
 * Hint: the router remains the same, so it's a 'const' variable. Assign it with new VueRouter({ routes })
 */

const app = Vue.createApp({})
app.mount('#app')

