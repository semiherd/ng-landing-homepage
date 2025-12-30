
import express from 'express';
import Redis from 'ioredis';

const app = express();
export const redis = new Redis({
  host: 'redis',   // NOT localhost
  port: 6379
});

app.get('/destinations', async (req, res) => {
  const key = JSON.stringify(req.query);
  const cached = await redis.get(key);
  if (cached) return res.json(JSON.parse(cached));

  const data = [{ id:'paris', label:'Paris', country:'France', activities:['culture'] }];
  await redis.set(key, JSON.stringify(data), 'EX', 600);
  res.json(data);
});

app.listen(3000);
