import axios from 'axios';

class LeadSquaredService {
  constructor() {
    this.baseURL = 'https://api-in21.leadsquared.com';
  }

  // Initialize credentials when needed (lazy loading)
  _initCredentials() {
    if (!this.accessKey || !this.secretKey) {
      this.accessKey = process.env.LEADSQUARED_ACCESS_KEY;
      this.secretKey = process.env.LEADSQUARED_SECRET_KEY;
      
      if (!this.accessKey || !this.secretKey) {
        throw new Error('LeadSquared credentials not configured. Check LEADSQUARED_ACCESS_KEY and LEADSQUARED_SECRET_KEY environment variables.');
      }
    }
  }

  // Map page type to campaign value - Source remains "Google_lp" for all
  getCampaignFromPageType(pageType) {
    const campaignMapping = {
      'comprehensive': 'Comprehensive_Full_Body_93P',
      'executive': 'Executive_Male_100P', 
      'essential': 'Essential_Body_83P'
    };
    
    return campaignMapping[pageType] || 'Google_LP_General';
  }

  // Transform frontend data to LeadSquared format
  transformLeadData(leadData) {
    const { 
      name, 
      phone, 
      city, 
      service, 
      pageType,
      utmSource,
      utmTerm,
      gclid,
      adName,
      adsetName,
      campaign
    } = leadData;
    
    // Split name into first and last name
    const nameParts = name.trim().split(' ');
    const firstName = nameParts[0] || name;
    const lastName = nameParts.slice(1).join(' ') || "";

    // Get page-specific campaign
    const sourceCampaign = campaign || this.getCampaignFromPageType(pageType);

    const payload = [
      {
        "Attribute": "FirstName",
        "Value": firstName
      },
      {
        "Attribute": "LastName", 
        "Value": lastName
      },
      {
        "Attribute": "Phone",
        "Value": phone
      },
      {
        "Attribute": "mx_Patient_City",
        "Value": city
      },
      {
        "Attribute": "Source",
        "Value": "Google_lp"
      },
      {
        "Attribute": "mx_Lead_Type",
        "Value": "P1 - Curelo New"
      },
      {
        "Attribute": "mx_Product_Service_Interest",
        "Value": service || ""
      },
      {
        "Attribute": "SourceCampaign",
        "Value": sourceCampaign
      }
    ];

    // Add optional UTM tracking fields if provided
    if (utmSource) {
      payload.push({
        "Attribute": "mx_utm_source",
        "Value": utmSource
      });
    }

    if (utmTerm) {
      payload.push({
        "Attribute": "mx_utm_term",
        "Value": utmTerm
      });
    }

    if (gclid) {
      payload.push({
        "Attribute": "mx_GCLid",
        "Value": gclid
      });
    }

    if (adName) {
      payload.push({
        "Attribute": "mx_Ad_Name",
        "Value": adName
      });
    }

    if (adsetName) {
      payload.push({
        "Attribute": "mx_Adset_Name",
        "Value": adsetName
      });
    }

    return payload;
  }

  // Create or update lead in LeadSquared
  async createLead(leadData) {
    try {
      // Initialize credentials
      this._initCredentials();
      
      const payload = this.transformLeadData(leadData);
      
      const config = {
        method: 'POST',
        url: `${this.baseURL}/v2/LeadManagement.svc/Lead.CreateOrUpdate`,
        params: {
          postUpdatedLead: false,
          accessKey: this.accessKey,
          secretKey: this.secretKey
        },
        headers: {
          'Content-Type': 'application/json'
        },
        data: payload,
        timeout: 10000 // 10 second timeout
      };

      const response = await axios(config);
      
      // LeadSquared returns 200 even for some errors, check response structure
      if (response.data && response.data.Status === 'Error') {
        throw new Error(`LeadSquared API Error: ${response.data.ExceptionMessage || 'Unknown error'}`);
      }

      return {
        success: true,
        leadId: response.data?.Message?.Id || null,
        data: response.data
      };

    } catch (error) {
      // Log error details but don't expose sensitive information
      console.error('LeadSquared API Error:', {
        message: error.message,
        status: error.response?.status,
        statusText: error.response?.statusText,
        // Don't log the full response as it might contain sensitive data
      });

      // Determine error type and throw appropriate error
      if (error.code === 'ECONNABORTED') {
        throw new Error('Request timeout - LeadSquared API is not responding');
      } else if (error.response?.status === 401) {
        throw new Error('Authentication failed - Invalid API credentials');
      } else if (error.response?.status === 400) {
        throw new Error('Invalid request data format');
      } else if (error.response?.status >= 500) {
        throw new Error('LeadSquared service temporarily unavailable');
      } else {
        throw new Error('Failed to submit lead data');
      }
    }
  }
}

export default new LeadSquaredService();