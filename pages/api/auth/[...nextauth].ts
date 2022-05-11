import NextAuth from "next-auth"

export default NextAuth({
  providers: [
    {
      id: "zitadel",
      name: "zitadel",
      type: "oauth",
      version: "2",
      wellKnown: "https://issuer.zitadel.ch",
      authorization: {
        params: {
          scope: "openid email profile",
        },
      },
      idToken: false,
      checks: ["pkce", "state"],
      client: {
        token_endpoint_auth_method: "none",
      },
      clientId: "160657439937654201@for_next_auth_issues",
    },
  ],
})
