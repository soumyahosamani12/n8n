import http from 'k6/http';
import { check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 5 },   // ramp up
    { duration: '1m', target: 5 },    // steady
    { duration: '30s', target: 0 },   // ramp down
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<5000'],
  },
};

export default function () {
  const url = 'http://localhost:5678/webhook/create-user';

  const uniqueId = `${__VU}_${__ITER}_${Date.now()}`;

  const payload = JSON.stringify({
  	name: `user_${uniqueId}`,
  	email: `user_${uniqueId}@email.com`
  });
  

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: '60s',
  };

  const res = http.post(url, payload, params);

  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}
