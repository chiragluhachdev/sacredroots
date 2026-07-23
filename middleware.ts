import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only protect /admin routes, but not the login page itself
  if (request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.startsWith('/admin/login')) {
    
    // Check for the admin session cookie
    const adminToken = request.cookies.get('admin_token')?.value;
    
    // Simple verification (in production, use JWT or proper session DB)
    const validToken = process.env.ADMIN_TOKEN || 'sacred-roots-secret-token';
    
    if (!adminToken || adminToken !== validToken) {
      // Redirect to login page
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
