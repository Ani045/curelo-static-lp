# Curelo Backend - Secure Lead Management

This backend service securely handles form submissions and integrates with LeadSquared API.

## 🔒 Security Features

- ✅ API keys stored in environment variables (never exposed to frontend)
- ✅ Input validation and sanitization
- ✅ CORS protection
- ✅ Request timeout handling
- ✅ Error logging without exposing sensitive data

## 🚀 Quick Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the backend directory:

```bash
cp .env.example .env
```

Edit `.env` and add your actual LeadSquared credentials:

```env
# LeadSquared API Configuration
LEADSQUARED_ACCESS_KEY=your_actual_access_key
LEADSQUARED_SECRET_KEY=your_actual_secret_key

# Server Configuration
PORT=3001
NODE_ENV=development
```

### 3. Start the Server

```bash
# Development with auto-reload
npm run dev

# Production
npm start
```

## 📋 API Endpoints

### POST /api/lead
Submit lead data to LeadSquared

**Request Body (Official LeadSquared Compatible):**
```json
{
  "name": "John Doe",
  "phone": "9876543210", 
  "city": "Mumbai",
  "service": "Basic Full Body Package",
  "utmSource": "google",
  "utmTerm": "health checkup",
  "gclid": "test_gclid_123",
  "adName": "ad_name",
  "adsetName": "adset_name",
  "campaign": "campaign_name"
}
```

**Required Fields:**
- `name`: Full name (string)
- `phone`: 10-digit phone number (string)
- `city`: City name (string)

**Optional Fields (All Official LeadSquared Attributes):**
- `service`: Selected service/test → `mx_Product_Service_Interest`
- `utmSource`: UTM source → `mx_utm_source`
- `utmTerm`: UTM term → `mx_utm_term` 
- `gclid`: Google Click ID → `mx_GCLid`
- `adName`: Ad name → `mx_Ad_Name`
- `adsetName`: Ad set name → `mx_Adset_Name`
- `campaign`: Campaign → `SourceCampaign`

**Success Response:**
```json
{
  "success": true,
  "message": "Lead submitted successfully",
  "leadId": "12345",
  "timestamp": "2024-01-03T10:30:00.000Z"
}
```

### GET /health
Health check endpoint

### GET /api/lead/health  
Lead service health check

## 🔍 Data Flow

1. **Frontend** → Sends form data including UTM parameters to backend (`/api/lead`)
2. **Backend** → Validates data (email format, 6-digit pincode, 10-digit phone)
3. **Backend** → Transforms to official LeadSquared payload format
4. **Backend** → Securely calls LeadSquared API with all tracking parameters
5. **Backend** → Returns success/error response to frontend

**Official LeadSquared Payload Mapping:**
- `name` → `FirstName` + `LastName`
- `phone` → `Phone` (mandatory)
- `city` → `mx_Patient_City`
- `service` → `mx_Product_Service_Interest`
- `utmSource` → `mx_utm_source`
- `utmTerm` → `mx_utm_term`
- `gclid` → `mx_GCLid`
- `adName` → `mx_Ad_Name`
- `adsetName` → `mx_Adset_Name`
- `campaign` → `SourceCampaign`
- Fixed: `Source` = "Google_lp", `mx_Lead_Type` = "P1 - Curelo New"

**Page Identification via SourceCampaign:**

| Route | SourceCampaign Value | How Identified |
|-------|---------------------|----------------|
| `/` or `/comprehensive` | `Comprehensive_Full_Body_93P` | Internal route mapping |
| `/executive` | `Executive_Male_100P` | Internal route mapping |
| `/essential` | `Essential_Body_83P` | Internal route mapping |
| *Default* | `Google_LP_General` | When no page type specified |

**Key Benefits:**
- ✅ **100% Official LeadSquared Structure** - No custom fields
- ✅ **SourceCampaign tracks page origin** - Using official attribute
- ✅ **Clean form payload** - Only standard LeadSquared fields
- ✅ **Route-based page identification** - No slug dependencies

## 🛡️ Security Measures

- **No API keys in frontend**: All LeadSquared credentials stored server-side
- **Input validation**: Phone must be 10 digits, required fields validated
- **Data sanitization**: Trim whitespace, length limits
- **Error handling**: Generic error messages to prevent information leakage
- **CORS protection**: Configurable allowed origins
- **Request timeouts**: Prevents hanging requests

## 🔧 Production Deployment

1. Set `NODE_ENV=production` in environment
2. Update CORS origins to your actual domain
3. Use process manager like PM2
4. Enable HTTPS
5. Set up proper logging and monitoring

## 📝 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `LEADSQUARED_ACCESS_KEY` | Yes | LeadSquared API access key |
| `LEADSQUARED_SECRET_KEY` | Yes | LeadSquared API secret key |
| `PORT` | No | Server port (default: 3001) |
| `NODE_ENV` | No | Environment (development/production) |