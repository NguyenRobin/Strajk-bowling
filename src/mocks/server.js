import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = setupServer(...handlers);

// To confirm a successful setup:
server.events.on('request:start', ({ request }) => {
  console.log(
    'MSW intercepted, confirm a successful setup ✅:',
    request.method,
    request.url
  );
});

server.events.on('request:start', ({ request }) => {
  console.log('MSW intercepted:', request.method, request.url);
});
