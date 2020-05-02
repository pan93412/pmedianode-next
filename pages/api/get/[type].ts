import { NextApiRequest, NextApiResponse } from 'next';
import getVideo from '../../../libs/getVideo';
import getAudio from '../../../libs/getAudio';

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

export default function getAPI(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { type },
  } = req;

  if (type === 'video') getVideoAPI(req, res);
  else if (type === 'audio') getAudioAPI(req, res);
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

export async function getStaticPaths() {
  return {
    paths: [
      { params: { type: 'video' } },
      { params: { type: 'audio' } },
    ],
    fallback: false,
  };
}
