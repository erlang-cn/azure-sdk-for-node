// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'South Central US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '2cac2a14-ba6b-46a6-bce8-2d9781a41ba2';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616?api-version=2017-04-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616\",\"name\":\"testHub4616\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs\",\"location\":\"South Central US\",\"tags\":null,\"properties\":{\"registrationTtl\":\"10675199.02:48:05.4775807\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '369',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c4f77210-f74c-4cd3-ae54-938b4908e987_M1_M1',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'e4d83d0a-1683-459c-ad29-507cf1e3bd7c',
  'x-ms-routing-request-id': 'WESTUS:20170506T014111Z:e4d83d0a-1683-459c-ad29-507cf1e3bd7c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 May 2017 01:41:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616?api-version=2017-04-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616\",\"name\":\"testHub4616\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs\",\"location\":\"South Central US\",\"tags\":null,\"properties\":{\"registrationTtl\":\"10675199.02:48:05.4775807\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '369',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c4f77210-f74c-4cd3-ae54-938b4908e987_M1_M1',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'e4d83d0a-1683-459c-ad29-507cf1e3bd7c',
  'x-ms-routing-request-id': 'WESTUS:20170506T014111Z:e4d83d0a-1683-459c-ad29-507cf1e3bd7c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 May 2017 01:41:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616?api-version=2017-04-01')
  .reply(200, "{\"id\":\"/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616\",\"name\":\"testHub4616\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs\",\"location\":\"South Central US\",\"tags\":null,\"properties\":{\"registrationTtl\":\"10675199.02:48:05.4775807\",\"authorizationRules\":[]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '393',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4ed9756c-5867-49b0-8bbd-bb6289bc7371_M2_M2',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '40c16e74-7857-4b92-bcb3-0401b213c3e5',
  'x-ms-routing-request-id': 'WESTUS2:20170506T014112Z:40c16e74-7857-4b92-bcb3-0401b213c3e5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 May 2017 01:41:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616?api-version=2017-04-01')
  .reply(200, "{\"id\":\"/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616\",\"name\":\"testHub4616\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs\",\"location\":\"South Central US\",\"tags\":null,\"properties\":{\"registrationTtl\":\"10675199.02:48:05.4775807\",\"authorizationRules\":[]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '393',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4ed9756c-5867-49b0-8bbd-bb6289bc7371_M2_M2',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '40c16e74-7857-4b92-bcb3-0401b213c3e5',
  'x-ms-routing-request-id': 'WESTUS2:20170506T014112Z:40c16e74-7857-4b92-bcb3-0401b213c3e5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 May 2017 01:41:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs?api-version=2017-04-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testhub4616\",\"name\":\"testhub4616\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs\",\"location\":\"South Central US\",\"tags\":null,\"properties\":{\"registrationTtl\":\"10675199.02:48:05.4775807\",\"authorizationRules\":[]}}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '421',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e85235f7-99b2-4d2f-ac52-2e8232d62a5b_M5_M5',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '7d5f3152-e55c-41af-bb21-c045b1bc9a22',
  'x-ms-routing-request-id': 'WESTUS2:20170506T014113Z:7d5f3152-e55c-41af-bb21-c045b1bc9a22',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 May 2017 01:41:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs?api-version=2017-04-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testhub4616\",\"name\":\"testhub4616\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs\",\"location\":\"South Central US\",\"tags\":null,\"properties\":{\"registrationTtl\":\"10675199.02:48:05.4775807\",\"authorizationRules\":[]}}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '421',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e85235f7-99b2-4d2f-ac52-2e8232d62a5b_M5_M5',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '7d5f3152-e55c-41af-bb21-c045b1bc9a22',
  'x-ms-routing-request-id': 'WESTUS2:20170506T014113Z:7d5f3152-e55c-41af-bb21-c045b1bc9a22',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 May 2017 01:41:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/pnsCredentials?api-version=2017-04-01')
  .reply(200, "{\"id\":\"/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/pnsCredentials\",\"name\":\"testHub4616\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs/pnsCredentials\",\"location\":null,\"tags\":null,\"properties\":{\"apnsCredential\":{\"properties\":{\"endpoint\":\"https://api.push.apple.com:443/3/device\",\"keyId\":\"TXRXD9P6K7\",\"appName\":\"Sample\",\"appId\":\"EF9WEB9D5K\",\"token\":\"MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgpVB15km4qskA5Ra5XvdtOwWPvaXIhVVQZdonzINh + hGgCgYIKoZIzj0DAQehRANCAASS3ek04J20BqA6WWDlD6 + xd3dJEifhW87wI0nnkfUB8LDb424TiWlzGIgnxV79hb3QHCAUNsPdBfLLF + Od8yqL\"}},\"wnsCredential\":{\"properties\":{\"packageSid\":\"ms-app://s-1-15-2-1817505189-427745171-3213743798-2985869298-800724128-1004923984-4143860699\",\"secretKey\":\"w7TBprR-THIS-IS-DUMMY-KEYAzSYFhp\",\"windowsLiveEndpoint\":\"http://pushtestservice.cloudapp.net/LiveID/accesstoken.srf\"}}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '975',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ad920ee7-0eed-44d1-a75e-82e6729a32df_M2_M2',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '3a55961e-1de5-4cdb-bdf6-d80f293f275c',
  'x-ms-routing-request-id': 'WESTUS2:20170506T014113Z:3a55961e-1de5-4cdb-bdf6-d80f293f275c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 May 2017 01:41:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/pnsCredentials?api-version=2017-04-01')
  .reply(200, "{\"id\":\"/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/pnsCredentials\",\"name\":\"testHub4616\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs/pnsCredentials\",\"location\":null,\"tags\":null,\"properties\":{\"apnsCredential\":{\"properties\":{\"endpoint\":\"https://api.push.apple.com:443/3/device\",\"keyId\":\"TXRXD9P6K7\",\"appName\":\"Sample\",\"appId\":\"EF9WEB9D5K\",\"token\":\"MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgpVB15km4qskA5Ra5XvdtOwWPvaXIhVVQZdonzINh + hGgCgYIKoZIzj0DAQehRANCAASS3ek04J20BqA6WWDlD6 + xd3dJEifhW87wI0nnkfUB8LDb424TiWlzGIgnxV79hb3QHCAUNsPdBfLLF + Od8yqL\"}},\"wnsCredential\":{\"properties\":{\"packageSid\":\"ms-app://s-1-15-2-1817505189-427745171-3213743798-2985869298-800724128-1004923984-4143860699\",\"secretKey\":\"w7TBprR-THIS-IS-DUMMY-KEYAzSYFhp\",\"windowsLiveEndpoint\":\"http://pushtestservice.cloudapp.net/LiveID/accesstoken.srf\"}}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '975',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ad920ee7-0eed-44d1-a75e-82e6729a32df_M2_M2',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '3a55961e-1de5-4cdb-bdf6-d80f293f275c',
  'x-ms-routing-request-id': 'WESTUS2:20170506T014113Z:3a55961e-1de5-4cdb-bdf6-d80f293f275c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 May 2017 01:41:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/AuthorizationRules/testAuth1674?api-version=2017-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/AuthorizationRules/testAuth1674\",\"name\":\"testAuth1674\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs/authorizationRules\",\"location\":null,\"tags\":null,\"properties\":{\"rights\":[\"Listen\",\"Send\"]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '388',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '54c128a8-e963-4d36-935f-00d6aa48cac1_M5_M5',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'b521d970-a1d9-4e4b-9978-d75d1ec674bd',
  'x-ms-routing-request-id': 'WESTUS2:20170506T014115Z:b521d970-a1d9-4e4b-9978-d75d1ec674bd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 May 2017 01:41:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/AuthorizationRules/testAuth1674?api-version=2017-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/AuthorizationRules/testAuth1674\",\"name\":\"testAuth1674\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs/authorizationRules\",\"location\":null,\"tags\":null,\"properties\":{\"rights\":[\"Listen\",\"Send\"]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '388',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '54c128a8-e963-4d36-935f-00d6aa48cac1_M5_M5',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'b521d970-a1d9-4e4b-9978-d75d1ec674bd',
  'x-ms-routing-request-id': 'WESTUS2:20170506T014115Z:b521d970-a1d9-4e4b-9978-d75d1ec674bd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 May 2017 01:41:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/AuthorizationRules/testAuth1674?api-version=2017-04-01')
  .reply(200, "{\"id\":\"/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/AuthorizationRules/testAuth1674\",\"name\":\"testAuth1674\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs/authorizationRules\",\"location\":null,\"tags\":null,\"properties\":{\"rights\":[\"Listen\",\"Send\"]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '388',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'efaa7330-1f0a-4207-88a2-f64b115e7669_M3_M3',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '1f93b745-a430-491b-a59a-22e0fd67d2d7',
  'x-ms-routing-request-id': 'WESTUS2:20170506T014115Z:1f93b745-a430-491b-a59a-22e0fd67d2d7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 May 2017 01:41:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/AuthorizationRules/testAuth1674?api-version=2017-04-01')
  .reply(200, "{\"id\":\"/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/AuthorizationRules/testAuth1674\",\"name\":\"testAuth1674\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs/authorizationRules\",\"location\":null,\"tags\":null,\"properties\":{\"rights\":[\"Listen\",\"Send\"]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '388',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'efaa7330-1f0a-4207-88a2-f64b115e7669_M3_M3',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '1f93b745-a430-491b-a59a-22e0fd67d2d7',
  'x-ms-routing-request-id': 'WESTUS2:20170506T014115Z:1f93b745-a430-491b-a59a-22e0fd67d2d7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 May 2017 01:41:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/AuthorizationRules?api-version=2017-04-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/AuthorizationRules/DefaultListenSharedAccessSignature\",\"name\":\"DefaultListenSharedAccessSignature\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs/authorizationRules\",\"location\":null,\"tags\":null,\"properties\":{\"rights\":[\"Listen\"]}},{\"id\":\"/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/AuthorizationRules/DefaultFullSharedAccessSignature\",\"name\":\"DefaultFullSharedAccessSignature\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs/authorizationRules\",\"location\":null,\"tags\":null,\"properties\":{\"rights\":[\"Listen\",\"Manage\",\"Send\"]}},{\"id\":\"/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/AuthorizationRules/testAuth1674\",\"name\":\"testAuth1674\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs/authorizationRules\",\"location\":null,\"tags\":null,\"properties\":{\"rights\":[\"Listen\",\"Send\"]}}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1280',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ec4479f2-f005-45d9-bd8d-1c55a8914d8e_M1_M1',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1',
  'x-ms-ratelimit-remaining-subscription-reads': '14848',
  'x-ms-correlation-request-id': '4f66c404-07b2-48b9-b4eb-dae95bc2d71a',
  'x-ms-routing-request-id': 'WESTUS2:20170506T014116Z:4f66c404-07b2-48b9-b4eb-dae95bc2d71a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 May 2017 01:41:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/AuthorizationRules?api-version=2017-04-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/AuthorizationRules/DefaultListenSharedAccessSignature\",\"name\":\"DefaultListenSharedAccessSignature\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs/authorizationRules\",\"location\":null,\"tags\":null,\"properties\":{\"rights\":[\"Listen\"]}},{\"id\":\"/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/AuthorizationRules/DefaultFullSharedAccessSignature\",\"name\":\"DefaultFullSharedAccessSignature\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs/authorizationRules\",\"location\":null,\"tags\":null,\"properties\":{\"rights\":[\"Listen\",\"Manage\",\"Send\"]}},{\"id\":\"/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/AuthorizationRules/testAuth1674\",\"name\":\"testAuth1674\",\"type\":\"Microsoft.NotificationHubs/namespaces/notificationHubs/authorizationRules\",\"location\":null,\"tags\":null,\"properties\":{\"rights\":[\"Listen\",\"Send\"]}}],\"nextLink\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1280',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ec4479f2-f005-45d9-bd8d-1c55a8914d8e_M1_M1',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1',
  'x-ms-ratelimit-remaining-subscription-reads': '14848',
  'x-ms-correlation-request-id': '4f66c404-07b2-48b9-b4eb-dae95bc2d71a',
  'x-ms-routing-request-id': 'WESTUS2:20170506T014116Z:4f66c404-07b2-48b9-b4eb-dae95bc2d71a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 May 2017 01:41:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/AuthorizationRules/testAuth1674/listKeys?api-version=2017-04-01')
  .reply(200, "{\"primaryConnectionString\":\"Endpoint=sb://testns4256.servicebus.windows.net/;SharedAccessKeyName=testAuth1674;SharedAccessKey=kKw4gBElGZ5FSKAxeuyz9e1dBhTuRl0Oledi0YxohPM=\",\"secondaryConnectionString\":\"Endpoint=sb://testns4256.servicebus.windows.net/;SharedAccessKeyName=testAuth1674;SharedAccessKey=He4liXD+6pPGQIdRjqMejX3ACwOmHyC6Ih34rHCVPbU=\",\"primaryKey\":\"kKw4gBElGZ5FSKAxeuyz9e1dBhTuRl0Oledi0YxohPM=\",\"secondaryKey\":\"He4liXD+6pPGQIdRjqMejX3ACwOmHyC6Ih34rHCVPbU=\",\"keyName\":\"testAuth1674\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '492',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8f72ca2d-c99e-4d72-9bdb-dc0c3f57d94a_M4_M4',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '66ad603b-8115-4c7a-b33a-91e35b2f6c2f',
  'x-ms-routing-request-id': 'WESTUS2:20170506T014116Z:66ad603b-8115-4c7a-b33a-91e35b2f6c2f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 May 2017 01:41:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/AuthorizationRules/testAuth1674/listKeys?api-version=2017-04-01')
  .reply(200, "{\"primaryConnectionString\":\"Endpoint=sb://testns4256.servicebus.windows.net/;SharedAccessKeyName=testAuth1674;SharedAccessKey=kKw4gBElGZ5FSKAxeuyz9e1dBhTuRl0Oledi0YxohPM=\",\"secondaryConnectionString\":\"Endpoint=sb://testns4256.servicebus.windows.net/;SharedAccessKeyName=testAuth1674;SharedAccessKey=He4liXD+6pPGQIdRjqMejX3ACwOmHyC6Ih34rHCVPbU=\",\"primaryKey\":\"kKw4gBElGZ5FSKAxeuyz9e1dBhTuRl0Oledi0YxohPM=\",\"secondaryKey\":\"He4liXD+6pPGQIdRjqMejX3ACwOmHyC6Ih34rHCVPbU=\",\"keyName\":\"testAuth1674\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '492',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8f72ca2d-c99e-4d72-9bdb-dc0c3f57d94a_M4_M4',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '66ad603b-8115-4c7a-b33a-91e35b2f6c2f',
  'x-ms-routing-request-id': 'WESTUS2:20170506T014116Z:66ad603b-8115-4c7a-b33a-91e35b2f6c2f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 May 2017 01:41:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/AuthorizationRules/testAuth1674/regenerateKeys?api-version=2017-04-01', '*')
  .reply(200, "{\"primaryConnectionString\":\"Endpoint=sb://testns4256.servicebus.windows.net/;SharedAccessKeyName=testAuth1674;SharedAccessKey=742mSFJ41aFSvfOs1/s5UVZBnuit9Lmw8EGhsfgZs0I=;EntityPath=testHub4616\",\"secondaryConnectionString\":\"Endpoint=sb://testns4256.servicebus.windows.net/;SharedAccessKeyName=testAuth1674;SharedAccessKey=He4liXD+6pPGQIdRjqMejX3ACwOmHyC6Ih34rHCVPbU=;EntityPath=testHub4616\",\"primaryKey\":\"742mSFJ41aFSvfOs1/s5UVZBnuit9Lmw8EGhsfgZs0I=\",\"secondaryKey\":\"He4liXD+6pPGQIdRjqMejX3ACwOmHyC6Ih34rHCVPbU=\",\"keyName\":\"testAuth1674\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '538',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b9b629f7-a3e7-4ea2-baaa-f86573fe58d7_M2_M2',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '61120199-0099-4a15-96f1-f598d7e9c22f',
  'x-ms-routing-request-id': 'WESTUS2:20170506T014117Z:61120199-0099-4a15-96f1-f598d7e9c22f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 May 2017 01:41:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/AuthorizationRules/testAuth1674/regenerateKeys?api-version=2017-04-01', '*')
  .reply(200, "{\"primaryConnectionString\":\"Endpoint=sb://testns4256.servicebus.windows.net/;SharedAccessKeyName=testAuth1674;SharedAccessKey=742mSFJ41aFSvfOs1/s5UVZBnuit9Lmw8EGhsfgZs0I=;EntityPath=testHub4616\",\"secondaryConnectionString\":\"Endpoint=sb://testns4256.servicebus.windows.net/;SharedAccessKeyName=testAuth1674;SharedAccessKey=He4liXD+6pPGQIdRjqMejX3ACwOmHyC6Ih34rHCVPbU=;EntityPath=testHub4616\",\"primaryKey\":\"742mSFJ41aFSvfOs1/s5UVZBnuit9Lmw8EGhsfgZs0I=\",\"secondaryKey\":\"He4liXD+6pPGQIdRjqMejX3ACwOmHyC6Ih34rHCVPbU=\",\"keyName\":\"testAuth1674\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '538',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b9b629f7-a3e7-4ea2-baaa-f86573fe58d7_M2_M2',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '61120199-0099-4a15-96f1-f598d7e9c22f',
  'x-ms-routing-request-id': 'WESTUS2:20170506T014117Z:61120199-0099-4a15-96f1-f598d7e9c22f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 May 2017 01:41:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/AuthorizationRules/testAuth1674/listKeys?api-version=2017-04-01')
  .reply(200, "{\"primaryConnectionString\":\"Endpoint=sb://testns4256.servicebus.windows.net/;SharedAccessKeyName=testAuth1674;SharedAccessKey=742mSFJ41aFSvfOs1/s5UVZBnuit9Lmw8EGhsfgZs0I=\",\"secondaryConnectionString\":\"Endpoint=sb://testns4256.servicebus.windows.net/;SharedAccessKeyName=testAuth1674;SharedAccessKey=He4liXD+6pPGQIdRjqMejX3ACwOmHyC6Ih34rHCVPbU=\",\"primaryKey\":\"742mSFJ41aFSvfOs1/s5UVZBnuit9Lmw8EGhsfgZs0I=\",\"secondaryKey\":\"He4liXD+6pPGQIdRjqMejX3ACwOmHyC6Ih34rHCVPbU=\",\"keyName\":\"testAuth1674\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '492',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ddb0d5e0-638d-4f46-b8bd-6702a1db8342_M4_M4',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'efe5b6d6-b93b-4084-aeaf-38f7d8633e3e',
  'x-ms-routing-request-id': 'WESTUS2:20170506T014118Z:efe5b6d6-b93b-4084-aeaf-38f7d8633e3e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 May 2017 01:41:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/AuthorizationRules/testAuth1674/listKeys?api-version=2017-04-01')
  .reply(200, "{\"primaryConnectionString\":\"Endpoint=sb://testns4256.servicebus.windows.net/;SharedAccessKeyName=testAuth1674;SharedAccessKey=742mSFJ41aFSvfOs1/s5UVZBnuit9Lmw8EGhsfgZs0I=\",\"secondaryConnectionString\":\"Endpoint=sb://testns4256.servicebus.windows.net/;SharedAccessKeyName=testAuth1674;SharedAccessKey=He4liXD+6pPGQIdRjqMejX3ACwOmHyC6Ih34rHCVPbU=\",\"primaryKey\":\"742mSFJ41aFSvfOs1/s5UVZBnuit9Lmw8EGhsfgZs0I=\",\"secondaryKey\":\"He4liXD+6pPGQIdRjqMejX3ACwOmHyC6Ih34rHCVPbU=\",\"keyName\":\"testAuth1674\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '492',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ddb0d5e0-638d-4f46-b8bd-6702a1db8342_M4_M4',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'efe5b6d6-b93b-4084-aeaf-38f7d8633e3e',
  'x-ms-routing-request-id': 'WESTUS2:20170506T014118Z:efe5b6d6-b93b-4084-aeaf-38f7d8633e3e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 May 2017 01:41:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/AuthorizationRules/testAuth1674?api-version=2017-04-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '31166faf-d5cb-4803-a99c-c526f8697866_M6_M6',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '1400c369-f127-4ef6-ba5e-cc551fc3b2f8',
  'x-ms-routing-request-id': 'WESTUS2:20170506T014118Z:1400c369-f127-4ef6-ba5e-cc551fc3b2f8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 May 2017 01:41:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616/AuthorizationRules/testAuth1674?api-version=2017-04-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '31166faf-d5cb-4803-a99c-c526f8697866_M6_M6',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '1400c369-f127-4ef6-ba5e-cc551fc3b2f8',
  'x-ms-routing-request-id': 'WESTUS2:20170506T014118Z:1400c369-f127-4ef6-ba5e-cc551fc3b2f8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 May 2017 01:41:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616?api-version=2017-04-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '83c097a7-4156-4fb4-a1f0-a469f949f054_M2_M2',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '10c1bff7-5e07-4d8a-b5f0-385a1227077a',
  'x-ms-routing-request-id': 'WESTUS2:20170506T014121Z:10c1bff7-5e07-4d8a-b5f0-385a1227077a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 May 2017 01:41:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2cac2a14-ba6b-46a6-bce8-2d9781a41ba2/resourceGroups/nodeTestGroup2845/providers/Microsoft.NotificationHubs/namespaces/testNS4256/notificationHubs/testHub4616?api-version=2017-04-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '83c097a7-4156-4fb4-a1f0-a469f949f054_M2_M2',
  'server-sb': 'Service-Bus-Resource-Provider/SN1',
  server: 'Service-Bus-Resource-Provider/SN1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '10c1bff7-5e07-4d8a-b5f0-385a1227077a',
  'x-ms-routing-request-id': 'WESTUS2:20170506T014121Z:10c1bff7-5e07-4d8a-b5f0-385a1227077a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 06 May 2017 01:41:20 GMT',
  connection: 'close' });
 return result; }]];