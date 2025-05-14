import nodemailer from "nodemailer";
import { EnvVars, isDevMode } from "../../utils/EnvVars";

const transporter = nodemailer.createTransport({
	host: EnvVars.smtp.server,
	port: EnvVars.smtp.port,
	secure: true,
	auth: {
		user: EnvVars.smtp.user,
		pass: EnvVars.smtp.pass,
	},
});

const getSite = (): string => {
	return isDevMode
		? "http://localhost:13131"
		: "https://iagows.github.io/coletivo_autista_recife";
};

export const sendMagicLink = async (email: string, token: string) => {
	const link = `${getSite()}/auth?token=${token}`;
	await transporter.sendMail({
		to: email,
		subject: "🔑 Seu link de acesso ao Coletivo de Autistas Adultos de Recife",
		html: `<a href="${link}">Clique aqui para entrar</a> (expira em 15min)`,
	});
};
