import { Page, LogoRow, Logo, LogoSeparator, Badge, Title, Subtitle, Grid, Card, CardIcon, CardTitle, CardBody, Tag, Notice, NoticeIcon, NoticeText } from './styles/App.css.ts';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';

const cards = [
  {
    icon: '⚡',
    title: 'Vite + React + TypeScript',
    body: 'Bundler ultra-rapide avec HMR natif, couplé à React et un typage strict TypeScript sur l\'ensemble du projet.',
    tags: ['vite', 'react 19', 'typescript'],
  },
  {
    icon: '🔄',
    title: 'TanStack React Query',
    body: 'Gestion du cache et des requêtes API avec query keys typées via query-key-factory. Les erreurs déclenchent automatiquement un toast.',
    tags: ['@tanstack/react-query', '@lukemorales/query-key-factory'],
  },
  {
    icon: '✅',
    title: 'Zod',
    body: 'Validation et inférence de types sur les réponses API. Les schémas vivent dans src/types/ et sont partagés entre les couches API et UI.',
    tags: ['zod', 'src/types/'],
  },
  {
    icon: '🎨',
    title: 'Styled Components',
    body: 'CSS-in-JS avec typage TypeScript complet. Chaque composant encapsule ses styles sans collision de classes.',
    tags: ['styled-components'],
  },
  {
    icon: '🔔',
    title: 'React Hot Toast',
    body: 'Notifications légères montées via le QueryClient : toute erreur réseau remonte automatiquement en toast.error().',
    tags: ['react-hot-toast'],
  },
  {
    icon: '🧩',
    title: 'Material UI',
    body: 'Bibliothèque de composants UI complète avec thème, icônes et CssBaseline pour une base de styles cohérente.',
    tags: ['@mui/material', '@mui/icons-material'],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

function App() {
  return (
    <Page>
      <LogoRow>
        <Logo src={viteLogo} alt="Vite" />
        <LogoSeparator>|</LogoSeparator>
        <Logo src={reactLogo} alt="React" $spin />
      </LogoRow>

      <Badge>Project Template</Badge>

      <Title>React · Vite · TypeScript</Title>

      <Subtitle>
        Template préconfigurée avec les libs essentielles pour démarrer rapidement.
      </Subtitle>

      <Grid>
        {cards.map((card) => (
          <Card key={card.title}>
            <CardIcon>{card.icon}</CardIcon>
            <CardTitle>{card.title}</CardTitle>
            <CardBody>
              {card.body}
              <br />
              <br />
              {card.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </CardBody>
          </Card>
        ))}
      </Grid>

      <Notice>
        <NoticeIcon>🗑️</NoticeIcon>
        <NoticeText>
          <strong>Pour démarrer :</strong> supprime les fichiers d&apos;exemple{' '}
          <code>src/api/queries/getPosts.ts</code>,{' '}
          <code>src/api/mutations/createPost.ts</code> et{' '}
          <code>src/types/post.ts</code>, puis remplace ce composant{' '}
          <code>App.tsx</code> par ta première page.
        </NoticeText>
      </Notice>
    </Page>
  );
}

export default App;
