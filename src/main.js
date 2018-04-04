import style from './css/style.scss';
import home_style from './css/home.scss';
import team_style from './css/team.scss';
import equipment_style from './css/equipment.scss';
import promote_style from './css/promote.scss';
import contact_style from './css/contact.scss';
import tech_style from './css/tech.scss';
import html from '../index.html';
import Router from './router.js';
import Map from './javascript/osm.js';

$(() => {
    new Router();
    Backbone.history.start();
})
