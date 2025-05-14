# backend

> Make

## Libs

- O projeto usa o [prisma](https://www.prisma.io/) para abstrair a geral de servidor de banco de dados.

## E-mail

[Lista de servidores gratuitos](https://www.emailtooltester.com/en/blog/free-smtp-servers/)

[SMTP](https://app.mailersend.com)

## Comando para gerar segredo forte (128 caracteres)

> openssl rand -hex 64 | openssl dgst -sha3-512 -binary | base64 | tr -d '+/=\n' | cut -c1-64