# underway.sh

My personal website, built using agents.

Three surfaces off one codebase:
- **underway.sh** — the landing / hub
- **alex.underway.sh** — bio, career, and projects
- **q.underway.sh** — Querium

## Stack
- Vite + React + TypeScript
- Tailwind CSS
- AWS Amplify (hosting), Cloudflare (DNS)

## Run locally
```bash
npm install
npm run dev
```

## Deploy
Pushing to the repo triggers an automatic build and deploy on AWS Amplify.
