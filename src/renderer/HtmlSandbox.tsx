import { buildSandboxCSP } from '../lib/csp';

interface HtmlSandboxProps {
  payload: Record<string, any>;
}

export function HtmlSandbox({ payload }: HtmlSandboxProps) {
  const html = payload.html || '';
  const csp = buildSandboxCSP();

  return (
    <iframe
      srcDoc={html}
      sandbox="allow-same-origin"
      csp={csp}
      className="w-full h-full border-0 rounded-lg"
      title="Contenu HTML"
    />
  );
}

