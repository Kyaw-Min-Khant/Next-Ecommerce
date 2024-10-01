// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isAuthenticated = req.cookies.get('auth_token'); // Check cookie or session
   console.log(isAuthenticated)
  // If user is logged in and tries to access login page, redirect to dashboard
  if (pathname === '/login' && isAuthenticated) {
    return NextResponse.redirect(new URL('/products', req.url));
  }

  const protectedRoutes = ['/profile']; // No need to include dynamic routes here
  const isProtectedRoute = pathname.startsWith('/products') || protectedRoutes.includes(pathname);
  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next(); // Continue request
}

export const config = {
  matcher: ['/','/products/:path*','/profile', '/login'], // Define routes where middleware should apply
};
