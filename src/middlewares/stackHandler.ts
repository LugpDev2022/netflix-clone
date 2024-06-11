import { NextRequest, NextResponse } from 'next/server';

type Middleware = (req: NextRequest) => NextResponse | Promise<NextResponse>;

interface MiddlewareConfig {
  matcher: (req: NextRequest) => boolean;
  middleware: Middleware;
}

export function stackHandler(middlewares: MiddlewareConfig[]) {
  return async function (
    req: NextRequest
  ): Promise<NextRequest | NextResponse> {
    for (const { matcher, middleware } of middlewares) {
      if (matcher(req)) {
        const result = await middleware(req);
        if (result instanceof NextResponse) {
          return result;
        }
      }
    }
    return req;
  };
}
