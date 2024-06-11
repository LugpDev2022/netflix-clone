import { NextRequest, NextResponse } from 'next/server';

import { stackHandler } from './middlewares/stackHandler';
import { langMiddleware } from './middlewares/lang';
import { signUpMiddleware } from './middlewares/signUp';
import { authMiddleware } from './middlewares/auth';

const prefixes = ['/es', '/en'];
const authSkippedUrls = ['/signup', '/landing', '/login'];

const middlewares = [
  {
    // Detect if the url starts with /es or /en
    matcher: (req: NextRequest) =>
      !prefixes.some((prefix) => req.nextUrl.pathname.startsWith(prefix)),
    middleware: langMiddleware,
  },
  {
    matcher: (req: NextRequest) =>
      !authSkippedUrls.some((path) => req.nextUrl.pathname.includes(path)),
    middleware: authMiddleware,
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
