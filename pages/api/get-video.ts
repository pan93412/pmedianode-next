import { NextApiRequest, NextApiResponse } from 'next'
import videos from '../../testdata/video.json';

export default function getVideoAPI (req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    status: true,
    videos,
  });
}