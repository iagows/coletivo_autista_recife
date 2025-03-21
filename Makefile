MAKEFLAGS += -s # comente essa linha para depurar

all: menu

frontend@install:
	@bun i

frontend@run:
	@bun run dev

frontend@assets:
	@bun run gen-assets

update@patch:
	@bun run buildPatch

update@minor:
	@bun run buildMinor

update@major:
	@bun run buildMajor

menu:
	@ESCOLHA=$$(whiptail --title "Iot Menu" --menu "Escolha uma opção:" 15 40 6 \
	"1" "Instalar dependências" \
	"2" "Executar o frontend" \
	"3" "Atualizar assets"  \
	"4" "Atualizar patch" \
	"5" "Atualizar minor" \
	"6" "Atualizar major" 3>&1 1>&2 2>&3); \
	case $$ESCOLHA in \
		1) $(MAKE) frontend@install ;; \
		2) $(MAKE) frontend@run ;; \
		3) $(MAKE) frontend@assets ;; \
		4) $(MAKE) update@patch ;; \
		5) $(MAKE) update@minor ;; \
		6) $(MAKE) update@major ;; \
	esac