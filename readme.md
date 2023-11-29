#### ŁADOWANIE STRONY ####
# $('do-jakiego-miejsca').loadPage('nazwa-katalogu-strony') -- Ładowanie strony
# $('do-jakiego-miejsca').loadSubPage('nazwa-pliku-podstrony') -- Ładowanie podstrony

## ---------------------------------------------------------------------------------------------------------------------------- ##

#### ŁADOWANIE STRONY (Z PRZYCIKU) ####
# data-browser-page="nazwa-katalogu-strony" -- Ładowanie strony

## PRZYKŁAD ##
# <button data-browser-page="vbrowser" class="" type="button">Button</button>

## ---------------------------------------------------------------------------------------------------------------------------- ##

#### ŁADOWANIE PODSTRONY (Z PRZYCIKU) ####
# data-browser-subpage="nazwa-pliku-podstrony" data-browser-subpage-target="do-jakiego-miejsca"

## PRZYKŁAD ##
# <button data-browser-subpage="dashboard" data-browser-subpage-target=".container" class="" type="button">Button</button>

## ---------------------------------------------------------------------------------------------------------------------------- ##

### TOOLTIP ###
# data-tooltip="Tekst.." data-flow="top"

### ZMIANA URL ###
# setUrl('job-offers');