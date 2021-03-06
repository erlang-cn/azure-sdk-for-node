// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'lchency4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://lchency4.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ee7eaf5-6a2f-49fd-953f-d760b5ac2e05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .head('/pools/nodesdktestpool1/nodes/tvm-14141481_2-20180821t200555z/files/startup%2Fwd%2Fhello.txt?api-version=2018-08-01.7.0')
  .reply(503, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'eea76181-49b0-4ba2-9214-76b37a428550',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:29:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .head('/pools/nodesdktestpool1/nodes/tvm-14141481_2-20180821t200555z/files/startup%2Fwd%2Fhello.txt?api-version=2018-08-01.7.0')
  .reply(503, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'eea76181-49b0-4ba2-9214-76b37a428550',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:29:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .head('/pools/nodesdktestpool1/nodes/tvm-14141481_2-20180821t200555z/files/startup%2Fwd%2Fhello.txt?api-version=2018-08-01.7.0')
  .reply(503, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '8f018830-bbfe-4e1c-aa66-e0da10fd020b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:29:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .head('/pools/nodesdktestpool1/nodes/tvm-14141481_2-20180821t200555z/files/startup%2Fwd%2Fhello.txt?api-version=2018-08-01.7.0')
  .reply(503, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '8f018830-bbfe-4e1c-aa66-e0da10fd020b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:29:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .head('/pools/nodesdktestpool1/nodes/tvm-14141481_2-20180821t200555z/files/startup%2Fwd%2Fhello.txt?api-version=2018-08-01.7.0')
  .reply(200, "", { 'content-length': '8',
  'content-type': 'application/octet-stream',
  'last-modified': 'Tue, 21 Aug 2018 20:30:11 GMT',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'b490723d-3d62-4e80-b0a1-22109f1adcf0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  'ocp-creation-time': 'Tue, 21 Aug 2018 20:30:11 GMT',
  'ocp-batch-file-isdirectory': 'False',
  'ocp-batch-file-url': 'https%3A%2F%2Flchency4.westcentralus.batch.azure.com%2Fpools%2Fnodesdktestpool1%2Fnodes%2Ftvm-14141481_2-20180821t200555z%2Ffiles%2Fstartup%2Fwd%2Fhello.txt',
  date: 'Tue, 21 Aug 2018 20:30:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .head('/pools/nodesdktestpool1/nodes/tvm-14141481_2-20180821t200555z/files/startup%2Fwd%2Fhello.txt?api-version=2018-08-01.7.0')
  .reply(200, "", { 'content-length': '8',
  'content-type': 'application/octet-stream',
  'last-modified': 'Tue, 21 Aug 2018 20:30:11 GMT',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'b490723d-3d62-4e80-b0a1-22109f1adcf0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  'ocp-creation-time': 'Tue, 21 Aug 2018 20:30:11 GMT',
  'ocp-batch-file-isdirectory': 'False',
  'ocp-batch-file-url': 'https%3A%2F%2Flchency4.westcentralus.batch.azure.com%2Fpools%2Fnodesdktestpool1%2Fnodes%2Ftvm-14141481_2-20180821t200555z%2Ffiles%2Fstartup%2Fwd%2Fhello.txt',
  date: 'Tue, 21 Aug 2018 20:30:57 GMT',
  connection: 'close' });
 return result; }]];