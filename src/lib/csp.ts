export function buildSandboxCSP() {
  return [
    "default-src 'none'",
    "style-src 'unsafe-inline'",
    "img-src data: https:",
  ].join('; ');
}

export function createSandboxAttributes() {
  return {
    sandbox: 'allow-same-origin',
    csp: buildSandboxCSP(),
  };
}

