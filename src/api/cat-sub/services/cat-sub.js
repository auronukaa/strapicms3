'use strict';

/**
 * cat-sub service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cat-sub.cat-sub');
