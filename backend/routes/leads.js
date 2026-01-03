import express from 'express';
import { validateLeadData } from '../middleware/validation.js';
import leadSquaredService from '../services/leadsquared.js';

const router = express.Router();

// POST /api/lead - Submit lead data
router.post('/', validateLeadData, async (req, res) => {
  try {
    const { 
      name, 
      phone, 
      city, 
      service,
      _pageType,
      utmSource, 
      utmTerm, 
      gclid, 
      adName, 
      adsetName, 
      campaign 
    } = req.body;
    
    // Log incoming request (without sensitive data) - note: _pageType is internal only
    console.log('Lead submission received:', {
      name: name?.substring(0, 10) + '...',
      phone: phone?.substring(0, 3) + '***',
      city,
      service: service?.substring(0, 20) + (service?.length > 20 ? '...' : ''),
      pageType: _pageType, // Internal mapping only
      hasUTMParams: !!(utmSource || utmTerm || gclid),
      timestamp: new Date().toISOString()
    });

    // Submit to LeadSquared
    const result = await leadSquaredService.createLead({
      name,
      phone, 
      city,
      service,
      pageType: _pageType, // Map internal field to service parameter
      utmSource,
      utmTerm,
      gclid,
      adName,
      adsetName,
      campaign
    });

    // Success response
    res.status(200).json({
      success: true,
      message: 'Lead submitted successfully',
      leadId: result.leadId,
      timestamp: new Date().toISOString()
    });

    // Log successful submission
    console.log('Lead submitted successfully:', {
      leadId: result.leadId,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    // Log error
    console.error('Lead submission failed:', {
      error: error.message,
      timestamp: new Date().toISOString()
    });

    // Return user-friendly error response
    res.status(500).json({
      success: false,
      error: 'Failed to submit lead data',
      message: 'We encountered an issue processing your request. Please try again later.',
      timestamp: new Date().toISOString()
    });
  }
});

// GET /api/lead/health - Health check for lead service
router.get('/health', async (req, res) => {
  try {
    // Basic health check - verify environment variables are set
    const hasCredentials = !!(process.env.LEADSQUARED_ACCESS_KEY && process.env.LEADSQUARED_SECRET_KEY);
    
    res.status(200).json({
      status: 'OK',
      service: 'Lead Management',
      credentials: hasCredentials ? 'configured' : 'missing',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      status: 'ERROR',
      service: 'Lead Management', 
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

export default router;