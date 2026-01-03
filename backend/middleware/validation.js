// Validation middleware for lead data
export const validateLeadData = (req, res, next) => {
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
  const errors = [];

  // Validate name
  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    errors.push('Name is required and must be a non-empty string');
  } else if (name.trim().length > 100) {
    errors.push('Name must be less than 100 characters');
  }

  // Validate phone
  if (!phone || typeof phone !== 'string') {
    errors.push('Phone number is required');
  } else {
    // Remove any non-digit characters for validation
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      errors.push('Phone number must be exactly 10 digits');
    }
    // Store clean phone for processing
    req.body.phone = cleanPhone;
  }

  // Validate city
  if (!city || typeof city !== 'string' || city.trim().length === 0) {
    errors.push('City is required and must be a non-empty string');
  } else if (city.trim().length > 50) {
    errors.push('City must be less than 50 characters');
  }

  // Validate service (optional but if provided should be valid)
  if (service !== undefined) {
    if (typeof service !== 'string') {
      errors.push('Service must be a string');
    } else if (service.length > 200) {
      errors.push('Service name must be less than 200 characters');
    }
  }

  // Validate _pageType (internal field, optional)
  if (_pageType !== undefined) {
    if (typeof _pageType !== 'string') {
      errors.push('Internal page type must be a string');
    } else if (!['comprehensive', 'executive', 'essential'].includes(_pageType)) {
      errors.push('Internal page type must be one of: comprehensive, executive, essential');
    }
  }

  // Validate optional tracking fields (basic string validation)
  const optionalFields = [
    { name: 'utmSource', value: utmSource },
    { name: 'utmTerm', value: utmTerm },
    { name: 'gclid', value: gclid },
    { name: 'adName', value: adName },
    { name: 'adsetName', value: adsetName },
    { name: 'campaign', value: campaign }
  ];

  optionalFields.forEach(field => {
    if (field.value !== undefined) {
      if (typeof field.value !== 'string') {
        errors.push(`${field.name} must be a string`);
      } else if (field.value.length > 200) {
        errors.push(`${field.name} must be less than 200 characters`);
      }
    }
  });

  // Return errors if any
  if (errors.length > 0) {
    return res.status(400).json({
      error: 'Validation failed',
      details: errors
    });
  }

  // Sanitize data
  req.body.name = name.trim();
  req.body.city = city.trim();
  req.body.service = service ? service.trim() : '';
  req.body._pageType = _pageType ? _pageType.trim() : '';
  req.body.utmSource = utmSource ? utmSource.trim() : '';
  req.body.utmTerm = utmTerm ? utmTerm.trim() : '';
  req.body.gclid = gclid ? gclid.trim() : '';
  req.body.adName = adName ? adName.trim() : '';
  req.body.adsetName = adsetName ? adsetName.trim() : '';
  req.body.campaign = campaign ? campaign.trim() : '';

  next();
};