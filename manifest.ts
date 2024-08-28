import { Manifest } from "deno-slack-sdk/mod.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
export default Manifest({
  name: "NAME YOUR APP HERE", //CHANGE THIS
  description: "Summarize and format Salesforce data with EinsteinAI",
  icon: "assets/default_new_app_icon.png",
  functions: [],
  workflows: [],
  outgoingDomains: ["api.salesforce.com", "d7u000000i8qbuak.my.salesforce.com"],
  botScopes: [
    "commands",
    "chat:write",
    "chat:write.public",
  ],
});
