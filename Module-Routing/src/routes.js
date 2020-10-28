// A list of routes we are going to use 
import User from './components/user/User.vue';
import Home from './components/Home.vue';
import UserStart from './components/user/UserStart.vue';
import UserEdit from './components/user/UserEdit.vue';
import UserDetail from './components/user/UserDetail.vue';
import Header from './components/Header.vue'
export const routes = [
    //multiple router-views being populated with different components
    {path: '', name: 'home', components: {  
        default: Home,
        'header-top': Header
    }},  

    //load user component when /user is visited
    {path: '/user/', components: {
        default: User,
        'header-bottom': Header
    }, children: [
        {path: '', component: UserStart },
        {path: ':id', component: UserDetail},
        {path: ':id/edit', component: UserEdit, name: 'userEdit' },
    ]},    

    //redirection
    {path: '/redirect', redirect: {name: 'home'}},
    {path: '*', redirect: '/user'}
];