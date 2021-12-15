// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import emailjs from 'emailjs-com';

type BadRequest = {
  status: string;
  reason: string;
};

type GoodRequest = {
  success: string;
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BadRequest | GoodRequest>
) {
  if (req.method != 'POST') {
    res.status(400).json({
      status: 'Request rejected',
      reason: 'Only post requests to this endpoint are allowed',
    });
    console.log('not post');
    return;
  }
  const body = JSON.parse(req.body);
  let name: string | undefined = body.name;
  let email: string | undefined = body.email;
  let message: string | undefined = body.message;

  if (!name || !email || !message) {
    res.status(400).json({
      status: 'Request rejected',
      reason: 'Request did not include valid name, email and message',
    });
    console.log('not all props');

    return;
  }
  emailjs
    .send(
      'service_lfzz6yh',
      'template_eln9q6s',
      { name, email, message },
      'user_lQMBSgUAJANh72HAQr5Kr'
    )
    .then(() => res.status(200).json({ success: 'Successfully sent email' }))
    .catch((e) => {
      console.log(e);
      res
        .status(400)
        .json({ status: 'Request failed', reason: 'Failed to send email' });
    });
  console.log('failed sending');
}
