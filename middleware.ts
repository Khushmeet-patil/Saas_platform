import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/', // 👈 Make root path public
  '/sign-in(.*)', // Sign-in page
  '/sign-up(.*)', // Sign-up page
]);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    const authObject = await auth();
    if (!authObject.userId) {
      return authObject.redirectToSignIn(); // Redirect unauthenticated users to sign-in
    }
  }
});

export const config = {
  matcher: [
    // Don't match static files, favicon, etc.
    '/((?!_next|favicon.ico|.*\\.(?:js|css|png|jpg|jpeg|gif|svg|ico|woff2?|ttf|eot|otf|json|txt)).*)',
    '/(api|trpc)(.*)', // Include API routes if needed
  ],
};
