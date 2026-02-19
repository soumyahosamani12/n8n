import http from 'k6/http';

export default function () {
  const uniqueEmail = `test_${Date.now()}_${Math.random()}@email.com`;

  http.post(
    'http://localhost:5678/webhook/create-user',
    JSON.stringify({
      name: 'Soumya',
      email: uniqueEmail,
    }),
    { headers: { 'Content-Type': 'application/json' } }
  );
}
