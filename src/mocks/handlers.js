import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com/', () => {
    return HttpResponse.json({
      when: '2023-12-24T09:00',
      lanes: '1',
      people: '3',
      shoes: ['41', '42', '43'],
      price: 460,
      id: 'FakeIdTestWithMock1234567',
      active: true,
    });
  }),
];
