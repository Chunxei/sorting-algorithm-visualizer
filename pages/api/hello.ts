// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';

type Data = {
  name: string
}

/**
 * request handler
 *
 * @param {NextApiRequest} req - request object
 * @param {NextApiResponse} res - response object
 * @return {void}
 * */
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
  res.status(200).json({name: 'John Doe'});
}
