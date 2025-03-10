MAKEFLAGS += -s # comente essa linha para depurar

all: menu

backend@install:
	@bun i

backend@run:
	@bun run dev

menu:
	@ESCOLHA=$$(whiptail --title "Iot Menu" --menu "Escolha uma opção:" 10 40 2 \
	"1" "Instalar dependências" \
	"2" "Executar o backend" 3>&1 1>&2 2>&3); \
	case $$ESCOLHA in \
		1) $(MAKE) backend@install ;; \
		2) $(MAKE) backend@run ;; \
	esac