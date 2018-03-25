import Backbone from 'backbone';
import contact from './page/contact.html';
import equipment from './page/equipment.html';
import promote from './page/promote.html';
import team from './page/team.html';
import tech from './page/tech.html';
import home from './page/home.html';

export default Backbone.Router.extend({
    routes: {
        '': 'home',
        'tech': 'tech',
        'equipment': 'equipment',
        'promote': 'promote',
        'team': 'team',
        'contact': 'contact',
    },

    home() {
        $('#app').html(home);
    },
    tech() {
        $('#app').html(tech);
    },
    equipment() {
        $('#app').html(equipment);
    },
    promote() {
        $('#app').html(promote);
    },
    team() {
        $('#app').html(team);
    },
    contact() {
        $('#app').html(contact);
    },
});
