const template = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>URL to OGP</title>
    <meta property="og:title"
        content="IMAGE_URL" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://x.sublimer.me" />
    <meta property="og:image"
        content="IMAGE_URL" />
    <meta property="og:description" content="URL to OGP" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title"
        content="IMAGE_URL" />
    <meta name="twitter:description" content="URL to OGP" />
    <meta name="twitter:image"
        content="IMAGE_URL" />
    <meta name="twitter:url" content="https://x.sublimer.me" />
</head>
<body>
<img src="IMAGE_URL" />
</body>
</html>
`;

addEventListener("fetch", (event: FetchEvent) => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request) {
    const [, param] = request.url.match(/^.*x\.sublimer\.me\/(.*)$/) || [''];
    const html = template.replace(/IMAGE_URL/g, param);
    return new Response(html, {
        headers: { "content-type": "text/html" }
    });
}