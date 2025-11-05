import fs from 'node:fs';
import path from 'node:path';

type Levana = Record<string, any>;
type State = { windows: any[]; projects: any[] };

export function buildSystemPrompt(levanaData: Levana, state: State) {
  const basePath = path.resolve(process.cwd(), 'server', 'prompts', 'system.md');
  let base = '';
  try {
    base = fs.readFileSync(basePath, 'utf8');
  } catch {
    base = 'Tu es l\'assistant du portfolio de Levana.';
  }

  const levanaSection = [
    `- Nom: ${levanaData.name}`,
    `- Titre: ${levanaData.title}`,
    levanaData.bio ? `- Bio: ${levanaData.bio}` : undefined,
    levanaData.skills ? `- Compétences: ${levanaData.skills.join(', ')}` : undefined,
    levanaData.interests ? `- Centres d'intérêt: ${levanaData.interests.join(', ')}` : undefined,
    levanaData.style ? `- Style: ${levanaData.style}` : undefined,
    levanaData.achievements ? `- Réalisations: ${levanaData.achievements.join('; ')}` : undefined,
    levanaData.urls ? `- Liens: ${Object.entries(levanaData.urls).map(([k,v])=>`${k}: ${v}`).join(', ')}` : undefined,
    levanaData.photos ? `- Photos: ${levanaData.photos.join(', ')}` : undefined,
  ].filter(Boolean).join('\n');

  return base
    .replace('{{LEVANA_SECTION}}', levanaSection)
    .replace('{{STATE_WINDOWS}}', JSON.stringify(state.windows))
    .replace('{{STATE_PROJECTS}}', JSON.stringify(state.projects.map((p: any) => ({ title: p.title, tags: p.tags }))));
}



