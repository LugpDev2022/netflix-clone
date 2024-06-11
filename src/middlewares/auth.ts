import { getSession } from 'next-auth/react';
import { NextRequest, NextResponse } from 'next/server';

export async function authMiddleware(request: NextRequest) {
  const session = await getSession();

  if (!true) return NextResponse.redirect(new URL('/landing', request.url));

  console.log(session?.user);
  return NextResponse.next();
}
