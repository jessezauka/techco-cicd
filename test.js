const http = require('http');
const assert = require('assert');

http.get('http://localhost:3000/api', (res) => {
  try {
    assert.strictEqual(res.statusCode, 200);
    console.log('✅ /api endpoint responded with 200 OK');
    process.exit(0);
  } catch (err) {
    console.error('❌ Test failed:', err.message);
    process.exit(1);
  }
}).on('error', (err) => {
  console.error('❌ Test failed to connect:', err.message);
  process.exit(1);
});
