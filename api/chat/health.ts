// api/chat/health.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(_req: VercelRequest, res: VercelResponse) {
  const hasKey = !!process.env.OPENAI_API_KEY;
  res.status(200).json({
    status: 'ok',
    demo: !hasKey,
    model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
  });
}
