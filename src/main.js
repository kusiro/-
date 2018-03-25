import style from './css/style.scss';
import home_style from './css/home.scss'
import html from '../index.html';
import Router from './router.js';

$(() => {
    new Router();
    Backbone.history.start();
})
