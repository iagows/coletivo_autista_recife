import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import { Box, type SxProps } from "@mui/material";
import useUtils from "../../hooks/useUtils";
import type { EnderecoModelType } from "../../models/EnderecoModel";
import type { LinkModelType } from "../../models/LinkModel";
import type { TelefoneModelType } from "../../models/TelefoneModel";
import NoReferrerButton from "../NoReferrerButton";
import AddressButton from "./AddressButton";
import PhoneButton from "./PhoneButton";

const isolatedLinks = (links: LinkModelType[] = []) =>
	links.reduce(
		(acc, link) => {
			if (link.isEmail) {
				acc.emailList.push(link);
			} else if (link.url.includes("instagram.com")) {
				acc.instagramList.push(link);
			} else if (link.url.includes("linktr.ee")) {
				acc.linktreeList.push(link);
			} else {
				acc.otherLinksList.push(link);
			}
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
	const { translate } = useUtils();
	const subject = translate("indicacoes.email.assunto");
	const body = translate("indicacoes.email.corpo");

	const { emailList, instagramList, linktreeList, otherLinksList } =
		isolatedLinks(links);

	return (
		<Box sx={boxGap}>
			{addresses?.map((e) => (
				<AddressButton {...e} key={e.id} />
			))}
			<Box display={"flex"}>
				{emailList?.map((email) => (
					<NoReferrerButton
						href={`mailto:${email.url}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
						key={email.id}
					>
						<EmailOutlinedIcon />
					</NoReferrerButton>
				))}
				{otherLinksList?.map((link) => (
					<NoReferrerButton key={link.id} href={link.url}>
						{link.texto}
					</NoReferrerButton>
				))}
				{telephones.map((telephone) => (
					<PhoneButton key={telephone.numero} {...telephone} />
				))}
				{instagramList?.map((inst) => (
					<NoReferrerButton href={inst.url} key={inst.id}>
						<InstagramIcon />
					</NoReferrerButton>
				))}
				{linktreeList?.map((tree) => (
					<NoReferrerButton href={tree.url} key={tree.id}>
						<ParkOutlinedIcon />
					</NoReferrerButton>
				))}
			</Box>
		</Box>
	);
};

export default ContactButton;
