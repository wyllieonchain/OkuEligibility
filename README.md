# Oku Eligibility API

API wrapper for Icarus Tools Layer3 trades endpoint, hosted on Vercel.

## Endpoint

### Check Eligibility

**URL:** `/api/check-eligibility`

**Methods:** `GET` or `POST`

**Parameters:**
- `address` (required): The wallet address to check

**GET Request Example:**
```
GET /api/check-eligibility?address=0x1234...
```

**POST Request Example:**
```json
POST /api/check-eligibility
Content-Type: application/json

{
  "address": "0x1234..."
}
```

**Response:**
```json
{
  "result": true
}
```
or
```json
{
  "result": false
}
```

## Deployment

1. Install Vercel CLI (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. Deploy to Vercel:
   ```bash
   vercel
   ```

3. Or connect your GitHub repository to Vercel for automatic deployments.

## Local Development

Run the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000/api/check-eligibility`

