import { NextRequest, NextResponse } from 'next/server';

import { stackHandler } from './middlewares/stackHandler';
import { langMiddleware } from './middlewares/lang';
import { signUpMiddleware } from './middlewares/signUp';

const prefixes = ['/es', '/en'];
const middlewares = [
  {
    // Detect if the url starts with /es or /en
    matcher: (req: NextRequest) =>
      !prefixes.some((prefix) => req.nextUrl.pathname.startsWith(prefix)),
    middleware: langMiddleware,
  },
  {
    matcher: (req: NextRequest) => req.nextUrl.pathname.includes('/signup'),
    middleware: signUpMiddleware,
  },
];

const composedMiddleware = stackHandler(middlewares);

export async function middleware(request: NextRequest) {
  const result = await composedMiddleware(request);

  if (result instanceof NextResponse) {
    return result;
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next), API routes, and static files
    '/((?!api/|_next/|.*\\..*).*)',
  ],
};
