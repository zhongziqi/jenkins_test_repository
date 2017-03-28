import index from './pages/index/index.vue';
import task from './pages/index/task.vue'
export default {
    routes: [
        {
            path: '/index',
            component: index
        },
        {
            path: '/task/:taskID',
            component: task
        }
    ]
};