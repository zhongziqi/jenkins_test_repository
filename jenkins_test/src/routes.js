import  App from  './App.vue'
const routes = [
    { 
        path: '/', component:App,
        children: [
            {
                path: '',
                redirect: '/main'
            }, 
            {
                path: '/main',
                component: require('./vuepage/main.vue'),                
            },
                                    
        ]
            }
        ]
export  default  routes;
