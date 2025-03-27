import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import { Box, type SxProps } from "@mui/material";
import useUtils from "../../hooks/useUtils";
import type { ContatoModelType } from "../../models/ContatoModel";
import NoReferrerButton from "../NoReferrerButton";
import AddressButton from "./AddressButton";
import PhoneButton from "./PhoneButton";

const boxGap: SxProps = { gap: 2, marginBottom: 2 };

const ContactButton = ({
	email,
	link,
	telefone,
	instagram,
	linktree,
	endereco,
}: ContatoModelType) => {
	const { translate } = useUtils();
	const subject = translate("indicacoes.email.assunto");
	const body = translate("indicacoes.email.corpo");

	return (
		<Box sx={boxGap}>
			{endereco?.map((e, i) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<AddressButton {...e} key={i} />
			))}
			<Box display={"flex"}>
				{email && (
					<NoReferrerButton
						href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
					>
						<EmailOutlinedIcon />
					</NoReferrerButton>
				)}
				{link?.length > 0 &&
					link.map((link) => (
						<NoReferrerButton key={link.id} href={link.url}>
							{link.texto}
						</NoReferrerButton>
					))}
				{telefone?.length > 0 &&
					telefone.map((telefone) => (
						<PhoneButton key={telefone.numero} {...telefone} />
					))}
				{instagram && (
					<NoReferrerButton href={instagram}>
						<InstagramIcon />
					</NoReferrerButton>
				)}
				{linktree && (
					<NoReferrerButton href={linktree}>
						<ParkOutlinedIcon />
					</NoReferrerButton>
				)}
			</Box>
		</Box>
	);
};

export default ContactButton;
