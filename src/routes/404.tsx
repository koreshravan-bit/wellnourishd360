import { createFileRoute } from '@tanstack/react-router';
import { NotFoundPage } from '@/components/not-found';

// Prerendered to /404/index.html; the Pages workflow copies it to 404.html.
// Its title and noindex tags come from NotFoundPage itself.
export const Route = createFileRoute('/404')({ component: NotFoundPage });
