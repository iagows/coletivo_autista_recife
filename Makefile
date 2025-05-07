MAKEFLAGS += -s # comente essa linha para depurar

all: menu

all@install:
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
	@ESCOLHA=$$(whiptail --title "Iot Menu" --menu "Escolha uma opção:" 15 40 7 \
	"1" "Instalar dependências" \
	"2" "Executar o frontend" \
	"3" "Executar o backend" \
	"4" "Build frontend"  \
	"5" "Build backend" \
	"6" "Build all" 3>&1 1>&2 2>&3); \
	case $$ESCOLHA in \
		1) $(MAKE) all@install ;; \
		2) $(MAKE) run@front ;; \
		3) $(MAKE) run@back ;; \
		4) $(MAKE) build@front ;; \
		5) $(MAKE) build@back ;; \
		6) $(MAKE) build ;; \
	esac