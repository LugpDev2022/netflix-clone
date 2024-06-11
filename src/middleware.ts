import { NextRequest, NextResponse } from 'next/server';

import { stackHandler } from './middlewares/stackHandler';
import { langMiddleware } from './middlewares/lang';

const middlewares = [
  {
    matcher: () => true,
    middleware: langMiddleware,
  },
];

const composedMiddleware = stackHandler(middlewares);

export async function middleware(request: NextRequest) {
  const result = await composedMiddleware(request);

  if (result instanceof NextResponse) {
    return result;
  }

  // Default response if no middleware returned a response
  return new NextResponse('Next.js middleware executed successfully!', {
    status: 200,
  });
}

export const config = {
  matcher: [
    // Skip all internal paths (_next), API routes, and static files
    '/((?!api/|_next/|.*\\..*).*)',
  ],
};
