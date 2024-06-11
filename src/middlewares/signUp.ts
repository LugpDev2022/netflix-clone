import { NextRequest, NextResponse } from 'next/server';

export function signUpMiddleware(request: NextRequest) {
  console.log('sign up');
  return NextResponse.next();
}
