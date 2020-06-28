module.exports = {
  mongodb_connection_uri: process.env.URI, // The URL to connect to the MongoDB database
  prefix: "a", // The bots prefix
  token: process.env.TOKEN, // The bots token
  users_that_are_able_to_add_premium: [
    "492708936290402305",
    "710645707735957614",
  ],
  bump_cooldown: "30 minutes", // The cooldown between bumping
  support_invite: "https://discord.gg/EXYDFmF", // The invite for the support server
};
