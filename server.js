const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'MintFlow Landing Backend is running',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Waitlist endpoint
app.post('/api/waitlist', async (req, res) => {
  try {
    const { email, name, role, interests } = req.body;
    
    // Validate required fields
    if (!email || !name) {
      return res.status(400).json({
        success: false,
        error: 'Email and name are required'
      });
    }
    
    console.log('\n🎯 === NEW WAITLIST SIGNUP ===');
    console.log('📧 Email:', email);
    console.log('👤 Name:', name);
    console.log('💼 Role:', role || 'Not specified');
    console.log('💭 Interests:', interests || 'Not specified');
    console.log('⏰ Timestamp:', new Date().toISOString());
    
    // Save to JSON file
    const waitlistEntry = {
      email,
      name,
      role: role || 'Not specified',
      interests: interests || 'Not specified',
      timestamp: new Date().toISOString(),
      source: 'landing_page'
    };
    
    try {
      const waitlistFile = 'waitlist.json';
      let existingData = [];
      
      try {
        const fileContent = await fs.readFile(waitlistFile, 'utf8');
        existingData = JSON.parse(fileContent);
      } catch (readError) {
        // File doesn't exist yet, start with empty array
      }
      
      existingData.push(waitlistEntry);
      await fs.writeFile(waitlistFile, JSON.stringify(existingData, null, 2));
      console.log('✅ Saved to waitlist.json');
    } catch (fileError) {
      console.error('⚠️ File storage error:', fileError.message);
    }
    
    console.log('================================\n');
    
    res.json({
      success: true,
      message: 'Successfully joined the waitlist!',
      data: {
        email,
        name,
        role,
        interests,
        timestamp: new Date().toISOString()
      }
    });
    
  } catch (error) {
    console.error('❌ Waitlist signup error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to join waitlist. Please try again.'
    });
  }
});

// Serve static files (for production deployment)
app.use(express.static('.'));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 MintFlow Landing Backend running on port ${PORT}`);
  console.log(`📧 Waitlist endpoint: http://localhost:${PORT}/api/waitlist`);
  console.log(`🌐 Health check: http://localhost:${PORT}/health`);
});

module.exports = app;
