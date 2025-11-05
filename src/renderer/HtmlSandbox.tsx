interface HtmlSandboxProps {
  payload: Record<string, any>;
}

export function HtmlSandbox({ payload }: HtmlSandboxProps) {
  const html = payload.html || '';

  // Wrap HTML to ensure proper rendering with styles and scripts
  const fullHtml = html.includes('<!DOCTYPE') || html.includes('<html')
    ? html
    : `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      width: 100%; 
      height: 100vh; 
      overflow: auto;
      font-family: system-ui, -apple-system, sans-serif;
    }
  </style>
</head>
<body>
${html}
</body>
</html>`;

  return (
    <iframe
      srcDoc={fullHtml}
      sandbox="allow-scripts allow-same-origin allow-forms allow-modals"
      className="w-full h-full border-0 rounded-lg bg-white"
      title="Contenu HTML"
    />
  );
}

