/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const core = require('@actions/core');
const { setGlobalDispatcher, EnvHttpProxyAgent } = require('undici');

const setup = require('./lib/setup-tofu');

setGlobalDispatcher(new EnvHttpProxyAgent());

(async () => {
  try {
    await setup();
  } catch (error) {
    core.setFailed(error.message);
  }
})();
