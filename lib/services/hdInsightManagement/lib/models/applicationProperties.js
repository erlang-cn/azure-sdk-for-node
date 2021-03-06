/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The HDInsight cluster application GET response.
 *
 */
class ApplicationProperties {
  /**
   * Create a ApplicationProperties.
   * @member {object} [computeProfile] The list of roles in the cluster.
   * @member {array} [computeProfile.roles] The list of roles in the cluster.
   * @member {array} [installScriptActions] The list of install script actions.
   * @member {array} [uninstallScriptActions] The list of uninstall script
   * actions.
   * @member {array} [httpsEndpoints] The list of application HTTPS endpoints.
   * @member {array} [sshEndpoints] The list of application SSH endpoints.
   * @member {string} [provisioningState] The provisioning state of the
   * application.
   * @member {string} [applicationType] The application type.
   * @member {string} [applicationState] The application state.
   * @member {array} [errors] The list of errors.
   * @member {string} [createdDate] The application create date time.
   * @member {string} [marketplaceIdentifier] The marketplace identifier.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationProperties
   *
   * @returns {object} metadata of ApplicationProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationProperties',
      type: {
        name: 'Composite',
        className: 'ApplicationProperties',
        modelProperties: {
          computeProfile: {
            required: false,
            serializedName: 'computeProfile',
            type: {
              name: 'Composite',
              className: 'ComputeProfile'
            }
          },
          installScriptActions: {
            required: false,
            serializedName: 'installScriptActions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RuntimeScriptActionElementType',
                  type: {
                    name: 'Composite',
                    className: 'RuntimeScriptAction'
                  }
              }
            }
          },
          uninstallScriptActions: {
            required: false,
            serializedName: 'uninstallScriptActions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RuntimeScriptActionElementType',
                  type: {
                    name: 'Composite',
                    className: 'RuntimeScriptAction'
                  }
              }
            }
          },
          httpsEndpoints: {
            required: false,
            serializedName: 'httpsEndpoints',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ApplicationGetHttpsEndpointElementType',
                  type: {
                    name: 'Composite',
                    className: 'ApplicationGetHttpsEndpoint'
                  }
              }
            }
          },
          sshEndpoints: {
            required: false,
            serializedName: 'sshEndpoints',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ApplicationGetEndpointElementType',
                  type: {
                    name: 'Composite',
                    className: 'ApplicationGetEndpoint'
                  }
              }
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'provisioningState',
            type: {
              name: 'String'
            }
          },
          applicationType: {
            required: false,
            serializedName: 'applicationType',
            type: {
              name: 'String'
            }
          },
          applicationState: {
            required: false,
            readOnly: true,
            serializedName: 'applicationState',
            type: {
              name: 'String'
            }
          },
          errors: {
            required: false,
            serializedName: 'errors',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ErrorsElementType',
                  type: {
                    name: 'Composite',
                    className: 'Errors'
                  }
              }
            }
          },
          createdDate: {
            required: false,
            readOnly: true,
            serializedName: 'createdDate',
            type: {
              name: 'String'
            }
          },
          marketplaceIdentifier: {
            required: false,
            readOnly: true,
            serializedName: 'marketplaceIdentifier',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationProperties;
