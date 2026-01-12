import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const locales = ['en', 'bg', 'el'];
const defaultLocale = 'en';

export default async function middleware(request: NextRequest) {
  // Create the middleware with our locales
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale,
  });

  const response = handleI18nRouting(request);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};