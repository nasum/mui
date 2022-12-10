import { html } from "html/mod.ts";
import { serve } from "std/http/server.ts";
import { urlParse } from "url_parse/mod.ts";

const str = html`
  <html>
    <head>
      <title>nui nasum's user interface</title>
      <script src="./script" defer></script>
    </head>
    <body>
      <div id="app">
        hoge
      </div>
    </body>
  </html>
  `;

const port = 8080;

const handler = (request: Request): Response => {
  const encoder = new TextEncoder();
  const parsed_url = urlParse(request.url);
  console.log(parsed_url.pathname);
  switch (parsed_url.pathname) {
    case "/":
      return new Response(encoder.encode(str), { status: 200 });
    case "/script":
      return new Response(encoder.encode('alert("hoge")'), { status: 200 });
    default:
      return new Response("not found", { status: 404 });
  }
};

console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handler, { port });
