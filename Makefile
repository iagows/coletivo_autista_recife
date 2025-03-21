MAKEFLAGS += -s # comente essa linha para depurar

all: menu

frontend@install:
	@bun i

frontend@run:
	@bun run dev

frontend@assets:
	@bun run gen-assets

menu:
	@ESCOLHA=$$(whiptail --title "Iot Menu" --menu "Escolha uma opção:" 10 40 3 \
	"1" "Instalar dependências" \
	"2" "Executar o frontend" \
	"3" "Atualizar assets" 3>&1 1>&2 2>&3); \
	case $$ESCOLHA in \
		1) $(MAKE) frontend@install ;; \
		2) $(MAKE) frontend@run ;; \
		3) $(MAKE) frontend@assets ;; \
	esac