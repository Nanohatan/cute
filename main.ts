import pogo from 'https://deno.land/x/pogo/main.ts';

const server = pogo.server({ port : 3000 });
server.router.get('/', (request, h) => {
    return h.file('index.html');
});
server.router.get('/about', () => {
    return 'about!';
});
server.router.get('/contact', () => {
    return 'contact!';
});


server.start();