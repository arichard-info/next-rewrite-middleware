import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/nice-public-path')) {
    return NextResponse.rewrite(new URL('/internalPath', request.url))
  }
}