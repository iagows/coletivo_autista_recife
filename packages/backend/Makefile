MAKEFLAGS += -s # comente essa linha para depurar

all: menu

all@install:
	@bun i

prisma@init:
	@bunx prisma init

prisma@push:
	@bunx prisma db push

server@build:
	@bun run build

server@run:
	@bun run dev

menu:
	@ESCOLHA=$$(whiptail --title "Menu do backend" --menu "Escolha uma opção:" 15 40 5 \
	"1" "Instalar dependências" \
	"2" "Iniciar o prisma" \
	"3" "Atualizar o banco" \
	"4" "Transpilar o servidor"  \
	"5" "Rodar o servidor" 3>&1 1>&2 2>&3); \
	case $$ESCOLHA in \
		1) $(MAKE) all@install ;; \
		2) $(MAKE) prisma@init ;; \
		3) $(MAKE) prisma@push ;; \
		4) $(MAKE) server@build ;; \
		5) $(MAKE) server@run ;; \
	esac