import type { NextRequest } from 'next/server';
import { updateSession } from './app/lib/supabase/middleware';

export async function middleware(req: NextRequest) {
  return await updateSession(req);
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico|signup|login|onboarding).*)', '/'],
};
