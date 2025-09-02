import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { message } = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }
  return res.status(200).json({ reply: `Demo response: "${message}"` });
}
