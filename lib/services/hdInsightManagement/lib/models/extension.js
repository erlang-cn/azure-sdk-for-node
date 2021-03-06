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
 * Cluster monitoring extensions
 *
 */
class Extension {
  /**
   * Create a Extension.
   * @member {string} [workspaceId] The workspace ID for the cluster monitoring
   * extension.
   * @member {string} [primaryKey] The certificate for the cluster monitoring
   * extensions.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Extension
   *
   * @returns {object} metadata of Extension
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Extension',
      type: {
        name: 'Composite',
        className: 'Extension',
        modelProperties: {
          workspaceId: {
            required: false,
            serializedName: 'workspaceId',
            type: {
              name: 'String'
            }
          },
          primaryKey: {
            required: false,
            serializedName: 'primaryKey',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Extension;
