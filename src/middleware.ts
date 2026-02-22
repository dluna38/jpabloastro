import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  // Forzar UTF-8 en HTML
  if (response.headers.get("content-type")?.includes("text/html")) {
    response.headers.set(
      "content-type",
      "text/html; charset=utf-8"
    );
  }

  return response;
});