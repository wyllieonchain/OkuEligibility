export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow GET and POST methods
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get address from query params (GET) or body (POST)
    const address = req.method === 'GET' 
      ? req.query.address 
      : req.body?.address;

    // Validate address is provided
    if (!address) {
      return res.status(400).json({ 
        error: 'Address parameter is required',
        result: false 
      });
    }

    // Construct the Icarus Tools API URL
    const icarusUrl = `https://accounts.icarus.tools/layer3/trades/288/1763874000/1808002000/49?address=${encodeURIComponent(address)}`;

    // Make request to Icarus Tools API
    const response = await fetch(icarusUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    // Check if request was successful
    if (!response.ok) {
      return res.status(200).json({ 
        result: false 
      });
    }

    // Parse the response
    const data = await response.json();

    // Check if status is "success"
    const result = data.status === 'success';

    // Return the result
    return res.status(200).json({ 
      result 
    });

  } catch (error) {
    console.error('Error checking eligibility:', error);
    return res.status(200).json({ 
      result: false 
    });
  }
}

