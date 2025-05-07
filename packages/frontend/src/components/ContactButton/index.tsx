import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import { Box, type SxProps } from "@mui/material";
import NoReferrerButton from "../NoReferrerButton";
import AddressButton from "./AddressButton";
import PhoneButton from "./PhoneButton";
import type { LinkModelType } from "@car/models/src/models/LinkModel";
import type { TelefoneModelType } from "@car/models/src/models/TelefoneModel";
import type { EnderecoModelType } from "@car/models/src/models/EnderecoModel";

const isolatedLinks = (links: LinkModelType[] = []) =>
	links.reduce(
		(acc, link) => {
			// if (link.isEmail) {
			// 	acc.emailList.push(link);
			// } else if (link.url.includes("instagram.com")) {
			// 	acc.instagramList.push(link);
			// } else if (link.url.includes("linktr.ee")) {
			// 	acc.linktreeList.push(link);
			// } else {
			// 	acc.otherLinksList.push(link);
			// }
			return acc;
		},
		{
			emailList: [] as LinkModelType[],
			instagramList: [] as LinkModelType[],
			linktreeList: [] as LinkModelType[],
			otherLinksList: [] as LinkModelType[],
		},
	);

const boxGap: SxProps = { gap: 2, marginBottom: 2 };

type Props = {
	links?: LinkModelType[];
	telephones?: TelefoneModelType[];
	addresses?: EnderecoModelType[];
};
const ContactButton = ({
	links = [],
	telephones = [],
	addresses = [],
}: Props) => {
	const subject = "indicacoes.email.assunto";
	const body = "indicacoes.email.corpo";

	const { emailList, instagramList, linktreeList, otherLinksList } =
		isolatedLinks(links);

	return (
		<Box sx={boxGap}>
			{addresses?.map((e) => (
				<AddressButton {...e} key={`${e.cidade} ${e.bairro} ${e.numero}`} />
			))}
			<Box display={"flex"} flexWrap={"wrap"}>
				{emailList?.map((email) => (
					<NoReferrerButton
						href={`mailto:${email.url}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
						key={email.url}
					>
						<EmailOutlinedIcon />
					</NoReferrerButton>
				))}
				{otherLinksList?.map((link) => (
					<NoReferrerButton key={link.url} href={link.url}>
						<InsertLinkOutlinedIcon />
					</NoReferrerButton>
				))}
				{telephones.map((telephone) => (
					<PhoneButton key={telephone.numero} {...telephone} />
				))}
				{instagramList?.map((inst) => (
					<NoReferrerButton href={inst.url} key={inst.url}>
						<InstagramIcon />
					</NoReferrerButton>
				))}
				{linktreeList?.map((tree) => (
					<NoReferrerButton href={tree.url} key={tree.url}>
						<ParkOutlinedIcon />
					</NoReferrerButton>
				))}
			</Box>
		</Box>
	);
};

export default ContactButton;
