import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

// Shared by the root not-found boundary and the prerendered /404 page that
// GitHub Pages serves as 404.html, so both render identical markup.
export function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <title>Page not found | WellNourishD360</title>
      <meta name="description" content="The requested WellNourishD360 page could not be found." />
      <meta property="og:title" content="Page not found | WellNourishD360" />
      <meta property="og:description" content="The requested WellNourishD360 page could not be found." />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="robots" content="noindex" />
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Button asChild variant="sitePrimary"><Link to="/">Go home</Link></Button>
        </div>
      </div>
    </main>
  );
}
