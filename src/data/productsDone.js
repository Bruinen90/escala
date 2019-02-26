const productsData = [
    {
        name: 'Rust',
        description:
            'Komoda Rust to unikatowe połączenie barwy i geometrycznej formy. Prawdziwa powierzchnia z rdzy uzyskana w procesie utleniania żelaza inspiruje i wyzwala silne emocje. Frez na bokach, blacie i frontach oraz stalowy stelaż, na którym jest osadzona komoda, eksponują jej surowy i industrialny charakter. Korpus i fronty, wykonane z płyty z włókien drzewnych, połączone pod kątem 45 stopni, tworzą wrażenie jednolitej bryły bez widocznych krawędzi. Eleganckim detalem wykończenia jest wnętrze pokryte czarnym, matowym lakierem. Komoda Rust wyposażona jest w cztery półki.',
        warning: 'Zewnętrzna warstwa rdzy jest efektem niepowtarzalnym. Różnice występujące w odcieniu i fakturze, w odniesieniu do prezentowanego produktu, nie stanowią wady, lecz są cechą charakterystyczną dla procesu utleniania żelaza. Powierzchnia uzyskanego efektu rdzy jest zabezpieczana specjalnym, bezbarwnym lakierem. Do czyszczenia komody należy używać wyłącznie bawełnianej ściereczki zwilżonej wodą lub specjalnych, neutralnych produktów do powierzchni lakierowanych.',
        // imagesCount: 7,
        // sceneImg: true,
        colours: ['bronze', 'silver', 'gold'],
        diameters: {
            width: '1209',
            depth: '380',
            height: '900',
        },
        materials: {
            body: 'płyta MDF 18 mm',
            frame: 'stal'
        },
        finish: 'metal – żelazo utleniane (rdza), lakier poliuretanowy: czarny matowy'
    },
    {
        name: 'Lagoon',
        description:
            'Komoda Lagoon to fascynujące połączenie barwy i prostej formy. Piękno powierzchni patynowanego mosiądzu doskonale współgra z linią mebla. Korpus i fronty wykonane z płyty z włókien drzewnych, połączone pod kątem 45 stopni, tworzą wrażenie jednolitej bryły bez widocznych krawędzi. Eleganckim detalem wykończenia jest wnętrze pokryte czarnym, matowym lakierem, natomiast stalowy stelaż w kolorze mosiądzu znakomicie podkreśla lekką formę komody Lagoon. Wnętrze wyposażone jest w cztery półki.',
        warning:
            'Zewnętrzna warstwa patyny jest efektem niepowtarzalnym. Różnice występujące w odcieniu i fakturze, w odniesieniu do prezentowanego produktu, nie stanowią wady, lecz są cechą charakterystyczną dla procesu patynowania mosiądzu. Powierzchnia uzyskanego efektu patyny jest zabezpieczana specjalnym bezbarwnym lakierem. Do czyszczenia komody należy używać wyłącznie bawełnianej ściereczki zwilżonej wodą lub specjalnych, neutralnych produktów do powierzchni lakierowanych.',
        colours: ['bronze', 'silver', 'gold'],
        diameters: {
            width: '1209',
            depth: '380',
            height: '900',
        },
        materials: {
            body: 'płyta MDF 18 mm',
            frame: 'stal'
        },
        finish: 'mosiądz patynowany, lakier poliuretanowy: czarny matowy',
    },
    {
        name: 'Diamond',
        description:
            'Komoda Diamond to intrygująca bryła o geometrycznym kształcie. Wybiórcze pokrycie zewnętrznej powierzchni przy zastosowaniu dwóch metali: żelaza i mosiądzu uwydatnia trójwymiarową formę mebla. Charakterystyczny frez przechodzący przez boki, blat i fronty nawiązuje do stalowego stelaża, jednocześnie podkreślając głębię i dynamizm. Korpus i fronty, wykonane z płyty z włókien drzewnych, połączone pod kątem 45 stopni, tworzą wrażenie jednolitej bryły bez widocznych krawędzi. Eleganckim detalem wykończenia jest wnętrze pokryte czarnym, matowym lakierem. Komoda Diamond wyposażona jest w cztery półki.',
        warning:
            'Zewnętrzna warstwa żelaza i mosiądzu jest efektem niepowtarzalnym. Różnice występujące w odcieniu i fakturze, w odniesieniu do prezentowanego produktu, nie stanowią wady, lecz są cechą charakterystyczną dla metali. Powierzchnia uzyskanego efektu jest zabezpieczana specjalnym, bezbarwnym lakierem. Do czyszczenia komody należy używać wyłącznie bawełnianej ściereczki zwilżonej wodą lub specjalnych, neutralnych produktów do powierzchni lakierowanych.',
        colours: ['bronze', 'silver', 'gold'],
        diameters: {
            width: '1209',
            depth: '380',
            height: '900',
        },
        materials: {
            body: 'płyta MDF 18 mm',
            frame: 'stal'
        },
        finish: 'metal:  mosiądz, żelazo, lakier poliuretanowy: czarny matowy',
    },
    {
        name: 'Mystic ver. Iron',
        description:
            'Komoda Mystic ver. Iron — subtelna, piękna i lekka dzięki swoim proporcjom. Ozdobny, ryflowany frez podkreśla głębię powierzchni pokrytej żelazem, a powstające refleksy i cienie, dodają zmysłowości. Połączenie frezowanych elementów pod kątem 45 stopni tworzy wrażenie jednolitej bryły bez widocznych krawędzi. Stalowy stelaż o prostej formie dodaje lekkości i nie przytłacza, stanowi delikatne dopełnienie całości. Eleganckim detalem wykończenia jest wnętrze pokryte czarnym, matowym lakierem. Komoda Mystic ver.  Iron wyposażona jest w cztery półki. Konstrukcja i fronty wykonane są z płyty z włókien drzewnych.',
        warning:
            'Zewnętrzna warstwa żelaza jest efektem niepowtarzalnym. Różnice występujące w odcieniu i fakturze, w odniesieniu do prezentowanego produktu, nie stanowią wady, lecz są cechą charakterystyczną dla metali. Powierzchnia uzyskanego efektu jest zabezpieczana specjalnym, bezbarwnym lakierem. Do czyszczenia komody należy używać wyłącznie bawełnianej ściereczki zwilżonej wodą lub specjalnych, neutralnych produktów do powierzchni lakierowanych. ',
        colours: ['bronze', 'silver', 'gold'],
        diameters: {
            width: '1227',
            depth: '331',
            height: '900',
        },
        materials: {
            body: 'płyta MDF 18 mm',
            frame: 'stal'
        },
        finish: 'metal:  żelazo, lakier poliuretanowy: czarny matowy',
    },
    {
        name: 'Shadows short ver. Coral',
        description:
            'Komoda Mystic low ver. Coral — subtelna, piękna i lekka dzięki swoim proporcjom. Ozdobny, ryflowany frez podkreśla głębię powierzchni pokrytej matowym lakierem w modnym, koralowym kolorze, a powstające refleksy i cienie, dodają zmysłowości. Połączenie frezowanych elementów pod kątem 45 stopni tworzy wrażenie jednolitej bryły bez widocznych krawędzi. Stalowy stelaż w kolorze mosiądzu dodaje lekkości i nie przytłacza, stanowi delikatne dopełnienie całości. Eleganckim detalem wykończenia jest wnętrze pokryte czarnym, matowym lakierem. Komoda Mystic low ver. Coral wyposażona jest w dwa uchylne fronty. Konstrukcja i fronty wykonane są z płyty z włókien drzewnych.',
        warning:
            'Do czyszczenia komody należy używać wyłącznie bawełnianej ściereczki zwilżonej wodą lub specjalnych, neutralnych produktów do powierzchni lakierowanych.',
        colours: ['bronze', 'silver', 'gold'],
        diameters: {
            width: '1227',
            depth: '331',
            height: '775',
        },
        materials: {
            body: 'płyta MDF 18 mm',
            frame: 'stal'
        },
        finish: 'lakier poliuretanowy: koralowy matowy',
    },
    {
        name: 'Mystic ver. Brass',
        description:
            'Komoda Mystic ver. Brass — subtelna, piękna i lekka dzięki swoim proporcjom. Ozdobny, ryflowany frez podkreśla głębię powierzchni pokrytej mosiądzem, a powstające refleksy i cienie, dodają zmysłowości. Połączenie frezowanych elementów pod kątem 45 stopni tworzy wrażenie jednolitej bryły bez widocznych krawędzi. Stalowy stelaż o prostej formie dodaje lekkości i nie przytłacza, stanowi delikatne dopełnienie całości. Eleganckim detalem wykończenia jest wnętrze pokryte czarnym, matowym lakierem. Komoda Mystic ver. Brass wyposażona jest w cztery półki. Konstrukcja i fronty wykonane są z płyty z włókien drzewnych.',
        warning:
            'Zewnętrzna warstwa mosiądzu jest efektem niepowtarzalnym. Różnice występujące w odcieniu i fakturze, w odniesieniu do prezentowanego produktu, nie stanowią wady, lecz są cechą charakterystyczną dla metali. Powierzchnia uzyskanego efektu jest zabezpieczana specjalnym, bezbarwnym lakierem. Do czyszczenia komody należy używać wyłącznie bawełnianej ściereczki zwilżonej wodą lub specjalnych, neutralnych produktów do powierzchni lakierowanych. ',
        colours: ['bronze', 'silver', 'gold'],
        diameters: {
            width: '1227',
            depth: '331',
            height: '900',
        },
        materials: {
            body: 'płyta MDF 18 mm',
            frame: 'stal'
        },
        finish: 'metal:  mosiądz, lakier poliuretanowy: czarny matowy',
    },
    {
        name: 'Shades ver. 2',
        description:
            'Komoda Shades ver. 2 to niebanalne połączenie prostej formy i stylowego wzoru. Zewnętrzna powierzchnia pokryta mosiądzem doskonale komponuje się z ozdobnym i wyrazistym frezem na frontach komody. Korpus ukryty za frontami i połączony pod kątem 45 stopni tworzy wrażenie jednolitej bryły bez widocznych krawędzi. Stalowy stelaż o prostej formie dodaje lekkości i nie przytłacza, stanowi delikatne dopełnienie całości. Eleganckim detalem wykończenia jest wnętrze pokryte czarnym, matowym lakierem. Komoda Shades ver. 2 wyposażona jest w dwie półki.',
        warning:
            'Zewnętrzna warstwa mosiądzu jest efektem niepowtarzalnym. Różnice występujące w odcieniu i fakturze, w odniesieniu do prezentowanego produktu, nie stanowią wady, lecz są cechą charakterystyczną dla metali. Powierzchnia uzyskanego efektu jest zabezpieczana specjalnym, bezbarwnym lakierem. Do czyszczenia komody należy używać wyłącznie bawełnianej ściereczki zwilżonej wodą lub specjalnych, neutralnych produktów do powierzchni lakierowanych.',
        colours: ['bronze', 'silver', 'gold'],
        diameters: {
            width: '1263',
            depth: '360',
            height: '800',
        },
        materials: {
            body: 'płyta MDF 18 mm',
            frame: 'stal'
        },
        finish: 'metal:  mosiądz, lakier poliuretanowy: czarny matowy',
    },
    {
        name: 'Shades ver. 3',
        description:
            'Komoda Shades ver. 3 to niebanalne połączenie prostej formy i stylowego wzoru. Zewnętrzna powierzchnia pokryta żelazem doskonale komponuje się z ozdobnym i wyrazistym frezem na frontach komody. Korpus ukryty za frontami i połączony pod kątem 45 stopni tworzy wrażenie jednolitej bryły bez widocznych krawędzi. Stalowy stelaż o prostej formie dodaje lekkości i nie przytłacza, stanowi delikatne dopełnienie całości. Eleganckim detalem wykończenia jest wnętrze pokryte czarnym, matowym lakierem. Komoda Shades ver. 3 wyposażona jest w trzy półki.',
        warning:
            'Zewnętrzna warstwa żelaza jest efektem niepowtarzalnym. Różnice występujące w odcieniu i fakturze, w odniesieniu do prezentowanego produktu, nie stanowią wady, lecz są cechą charakterystyczną dla metali. Powierzchnia uzyskanego efektu jest zabezpieczana specjalnym, bezbarwnym lakierem. Do czyszczenia komody należy używać wyłącznie bawełnianej ściereczki zwilżonej wodą lub specjalnych, neutralnych produktów do powierzchni lakierowanych.',
        colours: ['bronze', 'silver', 'gold'],
        diameters: {
            width: '1896',
            depth: '360',
            height: '800',
        },
        materials: {
            body: 'płyta MDF 18 mm',
            frame: 'stal'
        },
        finish: 'metal:  żelazo, lakier poliuretanowy: czarny matowy',
    },
    {
        name: 'Shades ver. 4',
        description:
            'Komoda Shades ver. 4 to niebanalne połączenie prostej formy i stylowego wzoru. Zewnętrzna powierzchnia i stalowy stelaż pokryte akrylowym lakierem w kolorze miedzi doskonale komponują się z ozdobnym i wyrazistym frezem na frontach komody. Korpus ukryty za frontami i połączony pod kątem 45 stopni tworzy wrażenie jednolitej bryły bez widocznych krawędzi. Stalowy stelaż o prostej formie dodaje lekkości i nie przytłacza, stanowi delikatne dopełnienie całości. Eleganckim detalem wykończenia jest wnętrze pokryte czarnym, matowym lakierem. Komoda Shades ver. 4 wyposażona jest w sześć półek. ',
        warning:
            'Do czyszczenia komody należy używać wyłącznie bawełnianej ściereczki zwilżonej wodą lub specjalnych, neutralnych produktów do powierzchni lakierowanych. Zalecany jest montaż do ściany.',
        colours: ['bronze', 'silver', 'gold'],
        diameters: {
            width: '1209',
            depth: '380',
            height: '900',
        },
        materials: {
            body: 'płyta MDF 18 mm',
            frame: 'stal'
        },
        finish: 'lakier akrylowy: miedź, lakier poliuretanowy: czarny matowy',
    },
    {
        name: 'Butterfly',
        description:
            'Konsola Butterfly — lekka i zmysłowa dzięki swoim proporcjom. Delikatny frez przechodzący przez całą konstrukcję dodaje energii i zwiewności. Połączenie lakierowanej, matowej powierzchni w kolorze turkusowej zieleni ze szlachetnym mosiądzem na stalowej podstawie tworzy  wyrafinowane i eleganckie wykończenie. Cała konstrukcja konsoli połączona pod kątem 45 stopni daje wrażenie jednolitej bryły bez widocznych krawędzi. Konstrukcja blatu wykonana jest z płyty z włókien drzewnych.',
        warning:
            'Do czyszczenia konsoli należy używać wyłącznie bawełnianej ściereczki zwilżonej wodą lub specjalnych neutralnych produktów do powierzchni lakierowanych. ',
        colours: ['bronze', 'silver', 'gold'],
        diameters: {
            width: '1000',
            depth: '350',
            height: '850',
        },
        materials: {
            body: 'płyta MDF 18 mm',
            frame: 'stal'
        },
        finish: 'akier poliuretanowy: Blaugrun 6004 matowy',
    },
    {
        name: 'Belle',
        description:
            'Komoda Belle — połączenie prostej formy, szlachetnego metalu i eleganckiej czerni. Konstrukcja wykonana z płyty z włókien drzewnych i połączona pod kątem 45 stopni tworzy elegancką ramę wykończoną czarnym, matowym lakierem. Prostą linię frontów i widocznego boku zdobi powłoka z mosiądzu z ręcznie wytłaczaną fakturą. Otwarta przestrzeń ze szklaną półką stanowi lekkie dopełnienie całości. Eleganckim detalem wykończenia jest wnętrze i drewniane nogi pokryte czarnym, matowym lakierem. \n\n Komoda Belle występuje również w wersji wyspy, jako mebel dzielący pomieszczenie na strefy, dedykowany do przestrzeni otwartych.  W wersji wyspy komoda osadzona jest na sześciu nogach i posiada dwustronny dostęp do wnętrza z czterema półkami.',
        warning:
            'Zewnętrzna warstwa mosiądzu jest efektem niepowtarzalnym. Różnice występujące w odcieniu i fakturze, w odniesieniu do prezentowanego produktu, nie stanowią wady, lecz są cechą charakterystyczną dla metali. Powierzchnia uzyskanego efektu jest zabezpieczana specjalnym, bezbarwnym lakierem. Do czyszczenia komody należy używać wyłącznie bawełnianej ściereczki zwilżonej wodą lub specjalnych, neutralnych produktów do powierzchni lakierowanych. ',
        colours: ['bronze', 'silver', 'gold'],
        diameters: {
            width: '1692',
            depth: '331',
            height: '752',
        },
        materials: {
            body: 'płyta MDF 18 mm',
            frame: 'drewno lakierowane czarny matowy'
        },
        finish: 'metal:  mosiądz, lakier poliuretanowy: czarny matowy',
    },

];

export default productsData;
