import Vue from 'vue';
import Router from 'vue-router';
// 引入3个页面组件
import Starter from './pages/StarterPage.vue';
import StarterNavbar from './layout/StarterNavbar.vue';
import StarterFooter from './layout/StarterFooter.vue';
import myfooter from './pages/MyFooter.vue';
// import StarterFooter from './layout/StarterFooter.vue';
import Login from './pages/Login.vue'; // 登录
import Register from './pages/Register.vue'; // 注册
import Test from './pages/test.vue';
import MainNavbar from './layout/MainNavbar.vue';
import Layout from './layout/Layout.vue'; // 教师主体框架（导航栏，侧边栏）
import LayoutStu from './layout/LayoutStu.vue'; // 学生主体框架（导航栏，侧边栏）
import EmptyNavbar from './layout/EmptyNavbar.vue';

import Landing from './pages/Landing.vue';
import Profile from './pages/Profile.vue'; // demo个人展示
import Baidu from './pages/OutPage.vue'; // 百度
import PersonInfo from './pages/PersonInfo.vue'; // 个人信息
import Classes from './pages/Classes.vue'; // 班级管理页面
import ClassesStu from './pages/ClassesStu.vue'; // 学生班级管理页面
import Upload from './pages/Upload.vue'; // 上传文件页面
import UploadStu from './pages/UploadStu.vue'; // 学生上传文件页面
import Resource from './pages/Resource.vue'; // 资源展示/删除页面
import Homework from './pages/Homework.vue'; // 作业创建/展示/修改/删除页面
import HomeworkStu from './pages/HomeworkStu.vue'; // 学生作业展示/提交页面

// import myLogin from './login.vue';
Vue.use(Router); // 引入路由插件

// 创建路由实例
export default new Router({
    mode: 'history',
    routes: [
        { // 路由配置
            path: '/index',
            name: 'index',
            components: {
                default: Starter,
                // header: StarterNavbar,
                header: myfooter,
                footer: StarterFooter
                // footer: MyFooter
            },
            props: {
                header: {
                    colorOnScroll: 400
                },
                footer: {
                    backgroundColor: 'black'
                }
            }
        }, {
            path: '/',
            redirect: '/login' // 重定向为登录界面
        }, {
            path: '/login',
            name: 'Login',
            components: {
                default: Login,
                header: EmptyNavbar
            },
            props: {
                header: {
                    colorOnScroll: 400
                }
            }
        }, {
            path: '/register',
            name: 'Register',
            components: {
                default: Register,
                header: EmptyNavbar
            },
            props: {
                header: {
                    colorOnScroll: 400
                }
            }
        }, {
            path: '/test',
            name: 'Test',
            components: {
                default: Test,
                // header: StarterNavbar
                header: EmptyNavbar
            }
        }, {//======================== 教师主页======================
            path: '/layout',
            name: 'layout',
            components: {
                default: Layout,
                header: EmptyNavbar
            },
            children: [
                { // 嵌套路由
                    path: '/',
                    name: 'PersonInfo',
                    component: PersonInfo
                }, {
                    path: '/Profile',
                    name: 'Profile',
                    component: Profile
                }, {
                    path: '/Baidu',
                    name: 'Baidu',
                    component: Baidu
                }, {
                    path: '/PersonInfo',
                    name: 'PersonInfo',
                    component: PersonInfo
                }, {
                    path: '/Classes',
                    name: 'Classes',
                    component: Classes
                }, {
                    path: '/Upload',
                    name: 'Upload',
                    component: Upload
                }, {
                    path: '/Resource',
                    name: 'Resource',
                    component: Resource
                }, {
                    path: '/Homework',
                    name: 'Homework',
                    component: Homework
                }
            ],
            props: {
                header: {
                    colorOnScroll: 400
                }
            }
        },{ //======================== 学生主页======================
            path: '/layoutStu',
            name: 'layoutStu',
            components: {
                default: LayoutStu,
                // header: StarterNavbar
                header: EmptyNavbar
            },
            children: [
                { // 嵌套路由
                    path: '/',
                    name: 'PersonInfoStu',
                    component: PersonInfo
                }, {
                    path: '/Profile',
                    name: 'Profile',
                    component: Profile
                }, {
                    path: '/BaiduStu',
                    name: 'Baidu',
                    component: Baidu
                }, {
                    path: '/PersonInfoStu',
                    name: 'PersonInfo',
                    component: PersonInfo
                }, {
                    path: '/ClassesStu',
                    name: 'ClassesStu',
                    component: ClassesStu
                }, {
                    path: '/UploadStu',
                    name: 'UploadStu',
                    component: UploadStu
                }, {
                    path: '/ResourceStu',
                    name: 'Resource',
                    component: Resource
                }, {
                    path: '/HomeworkStu',
                    name: 'HomeworkStu',
                    component: HomeworkStu
                }
            ],
            props: {
                header: {
                    colorOnScroll: 400
                }
            }
        }
    ],
    scrollBehavior: to => {
        if (to.hash) {
            return {selector: to.hash};
        } else {
            return {x: 0, y: 0};
        }
    }
});
