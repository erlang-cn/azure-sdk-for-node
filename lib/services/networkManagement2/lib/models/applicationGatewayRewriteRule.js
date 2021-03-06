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
 * Rewrite rule of an application gateway.
 *
 */
class ApplicationGatewayRewriteRule {
  /**
   * Create a ApplicationGatewayRewriteRule.
   * @property {string} [name] Name of the rewrite rule that is unique within
   * an Application Gateway.
   * @property {object} [actionSet] Set of actions to be done as part of the
   * rewrite Rule.
   * @property {array} [actionSet.requestHeaderConfigurations] Request Header
   * Actions in the Action Set
   * @property {array} [actionSet.responseHeaderConfigurations] Response Header
   * Actions in the Action Set
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationGatewayRewriteRule
   *
   * @returns {object} metadata of ApplicationGatewayRewriteRule
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationGatewayRewriteRule',
      type: {
        name: 'Composite',
        className: 'ApplicationGatewayRewriteRule',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          actionSet: {
            required: false,
            serializedName: 'actionSet',
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayRewriteRuleActionSet'
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationGatewayRewriteRule;
