import { SignJWT } from "jose";
import { EnvVars } from "../../utils/EnvVars";

export const createMagicLinkToken = async (email: string) => {
	return await new SignJWT({ email })
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime("15m")
		.sign(new TextEncoder().encode(EnvVars.jwt.create));
};

export const createSessionToken = async (email: string) => {
	return await new SignJWT({ email })
		.setProtectedHeader({ alg: "HS256" })
		.setExpirationTime("15d")
		.sign(new TextEncoder().encode(EnvVars.jwt.renew));
};
