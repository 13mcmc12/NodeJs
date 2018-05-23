function createImports(name, connectionId, cb) {
  var body = {
    _connectionId: connectionId,
    apiIdentifier: 'if2a4e8711',
    name: 'NestSuite Import Dummy1',
    netsuite: {
      operation: 'addupdate',
      recordType: 'customer',
      internalIdLookup: {
        expression: '["email","is","{{{email}}}"]'
      },
      lookups: [],
      mapping: {
        lists: [],
        fields: [{
            generate: 'customform',
            hardCodedValue: '35',
            internalId: true,
            immutable: false
          },
          {
            generate: 'isperson',
            hardCodedValue: 'true',
            internalId: false,
            immutable: false
          },
          {
            generate: 'firstname',
            extract: 'firstName',
            internalId: false,
            immutable: false
          },
          {
            generate: 'lastname',
            extract: 'lastName',
            internalId: false,
            immutable: false
          },
          {
            generate: 'emailtransactions',
            extract: 'email',
            internalId: false,
            immutable: false
          },
          {
            generate: 'subsidiary',
            hardCodedValue: '3',
            internalId: true,
            immutable: false
          }
        ]
      }
    },
    json: true
  };
  var options = createOptions('POST', 'imports', body);
  createRequest(options, cb);
}

module.exports = createImports;
