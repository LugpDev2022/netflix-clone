import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'es'];

export function langMiddleware(request: NextRequest): NextResponse {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameHasLocale) return NextResponse.next();

  request.nextUrl.pathname = `/en${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}
