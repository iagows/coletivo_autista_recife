MAKEFLAGS += -s # comente essa linha para depurar

PROJECT_DIRS := . apps/backend apps/frontend packages/models packages/storage

all: menu

update@project:
	@for D in $(PROJECT_DIRS); do \
        ( \
            echo "Atualizando '$$D' ..."; \
            cd $$D || { echo "Falha ao entrar no diretório $$D"; exit 1; } && bun update; \
        ); \
    done

install@project:
	@bun i

run@front:
	@bun run frontend

run@back:
	@bun run backend

build@front:
	@bun run build:frontend

build@back:
	@bun run build:backend

build:
	@bun run build

menu:
	@ESCOLHA=$$(whiptail --title "Menu do projeto" --menu "Escolha uma opção:" 15 40 6 \
	"1" "Instalar dependências" \
	"2" "Executar o frontend" \
	"3" "Executar o backend" \
	"4" "Build frontend"  \
	"5" "Build backend" \
	"6" "Build all" 3>&1 1>&2 2>&3); \
	case $$ESCOLHA in \
		1) $(MAKE) install@project ;; \
		2) $(MAKE) run@front ;; \
		3) $(MAKE) run@back ;; \
		4) $(MAKE) build@front ;; \
		5) $(MAKE) build@back ;; \
		6) $(MAKE) build ;; \
	esac