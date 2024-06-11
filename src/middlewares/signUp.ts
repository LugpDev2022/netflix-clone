import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export function signUpMiddleware(request: NextRequest) {
  const cookiesStore = cookies();
  const cookie = cookiesStore.get('sign-up-cookie');

  if (!cookie) {
    if (request.nextUrl.pathname.endsWith('/signup')) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/signup', request.url));
  }

  const { email, password, plan, price } = JSON.parse(cookie.value);

  if (!email || !password) {
    if (request.nextUrl.pathname.endsWith('/signup')) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/signup', request.url));
  }

  if (!plan || !price) {
    if (request.nextUrl.pathname.endsWith('/signup/plans')) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/signup/plans', request.url));
  }

  if (!request.nextUrl.pathname.endsWith('/signup/confirmation')) {
    return NextResponse.redirect(new URL('/signup/confirmation', request.url));
  }

  return NextResponse.next();
}
