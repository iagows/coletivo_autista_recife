import { Type, type Static } from "@sinclair/typebox";

export const emailTokenDTO = Type.Object({
	id: Type.String(),
	sender: Type.String(),
	when: Type.Date(),
	ip: Type.String(),
});

export type emailTokenType = Static<typeof emailTokenDTO>;

export const authDTO = Type.Omit(emailTokenDTO, ["when", "ip"]);

export type authType = Static<typeof authDTO>;
