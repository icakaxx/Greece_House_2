import createMiddleware from 'next-intl/middleware';
import {NextRequest, NextResponse} from 'next/server';

const locales = ['en', 'bg', 'el'];
const defaultLocale = 'en';

const handleI18nRouting = createMiddleware({
  locales,
  defaultLocale,
});

export default function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl;

  // Redirect bare "/" to the default locale to avoid 404 on Vercel
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: [
    // Match all paths except API, static assets, and favicon
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};