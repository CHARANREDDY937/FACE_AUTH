# FACE_AUTH (Upgraded)

Modernized face-authentication project with cleaner folder layout and environment-driven configuration.

## New Structure

- `apps/frontend` React client
- `apps/backend` Node auth APIs + Flask ML services
- `data` attendance/model/training artifacts

## Quick Start

### 1) Frontend

```bash
cd apps/frontend
npm install
npm start
```

### 2) Node Auth APIs

```bash
cd apps/backend
npm install
copy .env.example .env
node server.js      # admin auth on 5000
node server1.js     # user auth on 5003
```

### 3) Flask Services (same folder)

```bash
cd apps/backend
pip install -r requirements.txt
python singleface.py   # single-face APIs (default flask port)
python multipleface.py # group-face stream (5010)
python crowd.py        # crowd counter (5002)
```

## Environment Files

- Frontend template: `apps/frontend/.env.example`
- Backend template: `apps/backend/.env.example`

## Security Changes

- Removed hardcoded Mongo URI and JWT secret from Node auth services.
- Frontend hardcoded localhost URLs moved to env-backed config at `apps/frontend/src/config/api.js`.
- Single-face Flask service now reads `MONGO_URI` from environment.
