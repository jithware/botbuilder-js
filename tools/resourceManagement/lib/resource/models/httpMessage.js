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
 * HTTP message.
 *
 */
class HttpMessage {
  /**
   * Create a HttpMessage.
   * @member {object} [content] HTTP message content.
   */
  constructor() {
  }

  /**
   * Defines the metadata of HttpMessage
   *
   * @returns {object} metadata of HttpMessage
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'HttpMessage',
      type: {
        name: 'Composite',
        className: 'HttpMessage',
        modelProperties: {
          content: {
            required: false,
            serializedName: 'content',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = HttpMessage;