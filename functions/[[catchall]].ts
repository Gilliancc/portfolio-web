// Cloudflare Pages Function — SPA fallback for client-side routing
// Routes without a file extension serve index.html so React Router can handle them

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  // If the URL has a file extension (asset, image, video, etc.), serve it directly
  if (/\.\w+$/.test(url.pathname)) {
    return next();
  }

  // For all other routes, serve index.html for the SPA
  const indexUrl = new URL(url.origin);
  indexUrl.pathname = "/index.html";
  return context.env.ASSETS.fetch(new Request(indexUrl, request));
}
