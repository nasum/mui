import { html } from "html/mod.ts";
import { serve } from "std/http/server.ts";

const str = html`
  <html>
    <div id="app">
      hoge
    </div>
  </html>
  `;

const port = 8080;

const handler = (request: Request): Response => {
  const encoder = new TextEncoder();
  return new Response(encoder.encode(str), { status: 200 });
};

console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handler, { port });
