export async function onRequest(context) {
  const { request, next, env } = context;
  const accept = request.headers.get("Accept") || "";

  if (!accept.includes("text/markdown")) {
    return next();
  }

  const url = new URL(request.url);
  const mdPath = url.pathname === "/"
    ? "/index.md"
    : url.pathname.endsWith("/")
      ? url.pathname.slice(0, -1) + "/index.md"
      : url.pathname + "/index.md";

  const mdUrl = new URL(mdPath, url);
  const mdRequest = new Request(mdUrl.toString(), {
    method: "GET",
    headers: request.headers,
  });

  try {
    const response = await env.ASSETS.fetch(mdRequest);

    if (response.ok) {
      const text = await response.text();
      const tokenCount = Math.round(text.trim().length / 4);
      const respHeaders = {
        "Content-Type": "text/markdown; charset=utf-8",
        "x-markdown-tokens": String(tokenCount),
      };

      return new Response(text, { status: 200, headers: { ...respHeaders, "Vary": "Accept" } });
    }
  } catch {
    // .md file not found — fall through to next()
  }

  return next();
}
