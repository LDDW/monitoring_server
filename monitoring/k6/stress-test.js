import http from 'k6/http';
import { check, sleep} from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 100 },
    { duration: '30s', target: 100 },
    { duration: '10s', target: 200 },
    { duration: '1m', target: 200 },
    { duration: '10s', target: 0 },
  ],
};

export default function () {
  let res = http.get('http://192.168.1.79:8080/'); 
  check(res, {
    'status est 200': (r) => r.status === 200,
  });

  sleep(1);
}