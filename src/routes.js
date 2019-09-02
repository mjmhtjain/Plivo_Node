

const routes  = [
    {
        method: 'GET',
        path:'/',
        handler: (request, h) => {

            return 'Hello World!';
        }
    },
    {
        method: 'POST',
        path:'/add',
        handler: (request, h) => {

            return 'Hello World!';
        }
    },
    {
        method: 'POST',
        path:'/edit',
        handler: (request, h) => {

            return 'Hello World!';
        }
    },
    {
        method: 'GET',
        path:'/delete',
        handler: (request, h) => {

            return 'Hello World!';
        }
    },
    {
        method: 'GET',
        path:'/searchByName',
        handler: (request, h) => {

            return 'Hello World!';
        }
    },
    {
        method: 'GET',
        path:'/searchByEmail',
        handler: (request, h) => {

            return 'Hello World!';
        }
    }
];

module.exports = routes;