process.env.CI = "true";
process.env.__NEXT_AGENT_UPGRADE = "none";

import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default {
  ...defineCloudflareConfig(),
  buildCommand: "npx next build",
};
