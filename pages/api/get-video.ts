import { NextApiRequest, NextApiResponse } from 'next';
import getVideos from '../../libs/getVideo';

export default function getVideoAPI(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    status: true,
    videos: getVideos().videos,
  });
}
