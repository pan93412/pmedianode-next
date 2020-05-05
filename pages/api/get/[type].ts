import { NextApiRequest, NextApiResponse, GetStaticPaths } from 'next';
import getVideo from '../../../libs/getVideo';
import getAudio from '../../../libs/getAudio';
import getAnnounce from '../../../libs/getAnnounce';

export function getVideoAPI(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    status: true,
    ...getVideo(),
  });
}

export function getAudioAPI(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    status: true,
    ...getAudio(),
  });
}

export function getAnnounceAPI(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    status: true,
    ...getAnnounce(),
  });
}

export default function getAPI(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { type },
  } = req;

  if (type === 'video') getVideoAPI(req, res);
  else if (type === 'audio') getAudioAPI(req, res);
  else if (type === 'announce') getAnnounceAPI(req, res);
  else {
    res.status(400).json({
      status: false,
      errors: {
        code: 'NO_SUCH_METHOD',
        msg: `No such method: ${type}`,
      },
    });
  }
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    { params: { type: 'video' } },
    { params: { type: 'audio' } },
    { params: { type: 'announce' } },
  ],
  fallback: false,
});
