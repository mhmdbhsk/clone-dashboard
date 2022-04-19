// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { worksData } from '@/constants/works';
import { WorksList } from '@/types/works';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<WorksList>
) {
  res.status(200).json(worksData);
}
