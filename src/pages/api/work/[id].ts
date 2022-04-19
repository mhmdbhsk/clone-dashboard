import { worksData } from '@/constants/works';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const filtered = worksData.filter((work) => work.id === id);

  res.status(200).json(filtered[0]);
}
