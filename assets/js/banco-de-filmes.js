// Arquivo: assets/js/banco-de-filmes.js
// Banco de Dados da Peak Fiction

const movieDatabase = [
  // --- LOTE 1: ABSOLUTE CINEMA (Mindfuck, Cult, Sci-Fi) ---
  { 
    title: "Interestelar", 
    desc: "Uma jornada absurda pelo buraco negro do espaço-tempo para salvar a humanidade. Visual indescritível e trilha sonora que arrepia a alma.", 
    tags: ["epic", "scifi", "chorar", "moderno"] 
  },
  { 
    title: "Clube da Luta", 
    desc: "A primeira regra é não falar sobre o clube. Um mergulho no caos psicológico, consumismo e na quebra das regras da sociedade.", 
    tags: ["tenso", "mindfuck", "anos90", "cult", "real"] 
  },
  { 
    title: "Matrix", 
    desc: "E se o mundo que você vive for uma simulação? Pílula vermelha ou azul: uma revolução do cinema de ação e ficção.", 
    tags: ["tenso", "mindfuck", "anos90", "scifi", "padrao"] 
  },
  { 
    title: "Pulp Fiction: Tempo de Violência", 
    desc: "Máfia, maletas brilhantes e diálogos que entraram para a história. O ápice do cinema cult com narrativas entrelaçadas.", 
    tags: ["rir", "cult", "anos90", "real", "padrao"] 
  },
  { 
    title: "A Origem (Inception)", 
    desc: "Roubar segredos invadindo os sonhos das pessoas. Um espetáculo visual de Christopher Nolan que vai derreter seu cérebro.", 
    tags: ["mindfuck", "tenso", "moderno", "scifi", "padrao"] 
  },
  { 
    title: "Blade Runner 2049", 
    desc: "O que nos faz humanos? Uma obra de arte visual absoluta ambientada em um futuro cyberpunk opressivo e melancólico.", 
    tags: ["epic", "scifi", "chorar", "moderno"] 
  },
  { 
    title: "O Show de Truman", 
    desc: "Ele acha que tem uma vida normal, mas o mundo inteiro o assiste 24 horas por dia em um reality show. Angustiante e genial.", 
    tags: ["mindfuck", "cult", "anos90", "real", "padrao"] 
  },
  { 
    title: "Coringa (Joker)", 
    desc: "A descida brutal de um comediante fracassado rumo à loucura em uma cidade corrompida. Uma atuação monstruosa.", 
    tags: ["tenso", "chorar", "moderno", "real", "padrao"] 
  },
  { 
    title: "Se7en - Os Sete Crimes Capitais", 
    desc: "Dois detetives (um novato e um veterano) caçam um assassino em série que usa os sete pecados capitais como inspiração. Pesado.", 
    tags: ["tenso", "mindfuck", "anos90", "real", "padrao"] 
  },
  { 
    title: "Whiplash: Em Busca da Perfeição", 
    desc: "O limite da obsessão. Um jovem baterista e um professor sádico em um duelo de tensão absurda que vai te deixar sem ar.", 
    tags: ["tenso", "curto", "moderno", "real", "cult"] 
  },
  { 
    title: "Parasita", 
    desc: "Uma família pobre se infiltra aos poucos na casa de uma família rica. O que acontece depois vai explodir sua cabeça.", 
    tags: ["tenso", "mindfuck", "moderno", "real", "padrao"] 
  },
  { 
    title: "O Iluminado", 
    desc: "O isolamento em um hotel amaldiçoado no meio da neve. A obra-prima do terror psicológico dirigida por Stanley Kubrick.", 
    tags: ["tenso", "mindfuck", "cult", "real", "padrao"] 
  },
  { 
    title: "Mad Max: Estrada da Fúria", 
    desc: "Ação ininterrupta, carros monstruosos e guitarras flamejantes em um deserto pós-apocalíptico. Pura adrenalina.", 
    tags: ["tenso", "moderno", "scifi", "padrao"] 
  },
  { 
    title: "Donnie Darko", 
    desc: "Um adolescente perturbado recebe a visita de um coelho gigante assustador que diz que o mundo vai acabar em 28 dias.", 
    tags: ["mindfuck", "cult", "scifi", "padrao"] 
  },
  { 
    title: "O Silêncio dos Inocentes", 
    desc: "Para capturar um assassino, o FBI precisa da ajuda de um psicopata brilhante e canibal. Tensão em cada diálogo.", 
    tags: ["tenso", "anos90", "cult", "real", "padrao"] 
  },
  { 
    title: "Chegada (Arrival)", 
    desc: "Naves alienígenas pousam na Terra e uma linguista precisa descobrir como se comunicar com eles antes que a guerra comece.", 
    tags: ["mindfuck", "scifi", "moderno", "chorar", "padrao"] 
  },
  { 
    title: "Django Livre", 
    desc: "Um escravo liberto se une a um caçador de recompensas para resgatar sua esposa. Quentin Tarantino no ápice da violência e humor.", 
    tags: ["rir", "tenso", "epic", "moderno", "cult", "real"] 
  },
  { 
    title: "Duna", 
    desc: "Intrigas políticas, vermes da areia gigantes e um planeta desértico letal. Um épico imensurável de ficção científica.", 
    tags: ["epic", "scifi", "moderno"] 
  },
  { 
    title: "O Lobo de Wall Street", 
    desc: "Ascensão rápida, dinheiro infinito, drogas e caos total na bolsa de valores. A vida insana de Jordan Belfort.", 
    tags: ["rir", "epic", "moderno", "real", "cult"] 
  },
  { 
    title: "A Ilha do Medo (Shutter Island)", 
    desc: "Um detetive investiga o desaparecimento de uma assassina em um hospital psiquiátrico isolado. O final vai te deixar mudo.", 
    tags: ["mindfuck", "tenso", "moderno", "real", "padrao"] 
  },

// --- LOTE 2: EXPANSÃO DE GÊNEROS (Terror, Romance, Animação, Comédia, Ação) ---
  { 
    title: "O Cavaleiro das Trevas", 
    desc: "O caos toma conta de Gotham quando o Coringa decide testar os limites morais do Batman. O ápice dos filmes de heróis.", 
    tags: ["tenso", "epic", "moderno", "real"] 
  },
  { 
    title: "Homem-Aranha no Aranhaverso", 
    desc: "Múltiplas dimensões se chocam nesta obra-prima da animação. Visualmente deslumbrante e com uma trilha sonora absurda.", 
    tags: ["rir", "epic", "moderno", "scifi", "padrao"] 
  },
  { 
    title: "Hereditário", 
    desc: "Após uma tragédia na família, segredos perturbadores vêm à tona. Um terror psicológico que vai destruir o seu sono.", 
    tags: ["tenso", "mindfuck", "moderno", "cult"] 
  },
  { 
    title: "Corra! (Get Out)", 
    desc: "Um jovem negro vai visitar a família da namorada branca e percebe que as coisas são bizarras demais. Tensão do início ao fim.", 
    tags: ["tenso", "mindfuck", "moderno", "real", "padrao"] 
  },
  { 
    title: "Questão de Tempo", 
    desc: "Ao descobrir que pode viajar no tempo, um jovem tenta consertar sua vida amorosa. Uma comédia romântica que te faz chorar e valorizar a vida.", 
    tags: ["chorar", "rir", "scifi", "padrao", "moderno"] 
  },
  { 
    title: "Superbad: É Hoje", 
    desc: "Dois adolescentes perdedores tentam comprar bebida para a festa do ano antes de irem pra faculdade. A comédia definitiva da geração.", 
    tags: ["rir", "curto", "moderno", "real", "cult"] 
  },
  { 
    title: "O Senhor dos Anéis: A Sociedade do Anel", 
    desc: "O início da maior jornada da história do cinema. Magia, guerras épicas e um anel para a todos governar.", 
    tags: ["epic", "scifi", "padrao", "cult"] 
  },
  { 
    title: "Gladiador", 
    desc: "Um general romano é traído e se torna um escravo gladiador em busca de vingança. Épico, visceral e emocionante.", 
    tags: ["epic", "tenso", "chorar", "real", "padrao"] 
  },
  { 
    title: "Toy Story", 
    desc: "O que os seus brinquedos fazem quando você sai do quarto? A animação clássica que marcou a infância de uma geração inteira.", 
    tags: ["rir", "chorar", "anos90", "scifi", "curto"] 
  },
  { 
    title: "10 Coisas Que Eu Odeio em Você", 
    desc: "O bad boy da escola é pago para namorar a garota mais temperamental da cidade. O auge da comédia romântica adolescente.", 
    tags: ["rir", "anos90", "real", "padrao", "cult"] 
  },
  { 
    title: "Sicario: Terra de Ninguém", 
    desc: "Uma agente do FBI entra em uma força-tarefa tática brutal na fronteira do México. Ação militar realista, crua e sufocante.", 
    tags: ["tenso", "moderno", "real", "padrao"] 
  },
  { 
    title: "Brilho Eterno de uma Mente sem Lembranças", 
    desc: "Após o término, ele decide apagar a ex-namorada da memória, mas se arrepende no meio do processo. Romântico e genial.", 
    tags: ["mindfuck", "chorar", "moderno", "scifi", "padrao"] 
  },
  { 
    title: "A Bruxa", 
    desc: "Uma família puritana no século 17 é assombrada por forças obscuras na floresta. Terror folclórico e perturbador.", 
    tags: ["tenso", "cult", "moderno", "real", "padrao"] 
  },
  { 
    title: "Vingadores: Guerra Infinita", 
    desc: "O vilão Thanos está coletando as Joias do Infinito e todos os heróis do universo precisam impedi-lo. Ação ininterrupta.", 
    tags: ["epic", "tenso", "scifi", "moderno"] 
  },
  { 
    title: "O Resgate do Soldado Ryan", 
    desc: "Durante a Segunda Guerra, um esquadrão arrisca tudo para salvar um único soldado. A cena da praia de Omaha é um marco do cinema.", 
    tags: ["tenso", "epic", "chorar", "anos90", "real"] 
  },
  { 
    title: "As Branquelas", 
    desc: "Dois agentes do FBI se disfarçam de socialites brancas para evitar um sequestro. Roteiro hilário, memes eternos.", 
    tags: ["rir", "moderno", "real", "padrao", "cult"] 
  },
  { 
    title: "La La Land: Cantando Estações", 
    desc: "Um músico e uma atriz se apaixonam enquanto tentam a sorte em Los Angeles. Visual mágico e um final de quebrar o coração.", 
    tags: ["chorar", "moderno", "real", "padrao"] 
  },
  { 
    title: "O Profissional (Léon: The Professional)", 
    desc: "Um assassino de aluguel solitário acaba protegendo uma garotinha cuja família foi morta. Ação clássica e muita emoção.", 
    tags: ["tenso", "anos90", "cult", "real", "padrao"] 
  },
  { 
    title: "Up: Altas Aventuras", 
    desc: "Um viúvo ranzinza amarra milhares de balões em sua casa para realizar o sonho da esposa falecida. Prepara o lenço de papel.", 
    tags: ["chorar", "rir", "scifi", "curto", "moderno"] 
  },
  { 
    title: "O Exterminador do Futuro 2", 
    desc: "Um ciborgue viaja no tempo para proteger o futuro líder da resistência humana. Ação impecável e efeitos à frente do tempo.", 
    tags: ["tenso", "epic", "anos90", "scifi", "padrao"] 
  },
  { 
    title: "Shrek", 
    desc: "Um ogro antissocial e um burro falante precisam resgatar uma princesa. A sátira de contos de fadas que mudou a comédia.", 
    tags: ["rir", "scifi", "moderno", "padrao", "cult"] 
  },
  { 
    title: "Fragmentado", 
    desc: "Três garotas são sequestradas por um homem que tem 23 personalidades diferentes vivendo dentro da sua mente.", 
    tags: ["tenso", "mindfuck", "moderno", "real", "padrao"] 
  },
  { 
    title: "Kill Bill: Volume 1", 
    desc: "A Noiva acorda de um coma e vai atrás da equipe de assassinos que a traiu no dia do seu casamento. Muito sangue e espadas samurais.", 
    tags: ["tenso", "moderno", "cult", "real", "padrao"] 
  },
  { 
    title: "Antes do Amanhecer", 
    desc: "Dois estranhos se conhecem em um trem e passam uma única noite caminhando e conversando por Viena. O romance mais pé no chão do cinema.", 
    tags: ["chorar", "anos90", "real", "padrao", "cult"] 
  },
  { 
    title: "O Sexto Sentido", 
    desc: "Um psicólogo infantil tenta ajudar um garotinho que afirma ver pessoas mortas o tempo todo. O plot twist mais famoso de todos.", 
    tags: ["mindfuck", "tenso", "anos90", "real", "padrao"] 
  },
  { 
    title: "Cidade de Deus", 
    desc: "O crime e a sobrevivência em uma das favelas mais perigosas do Rio de Janeiro. Uma obra-prima visceral e nacional.", 
    tags: ["tenso", "epic", "moderno", "real", "cult"] 
  },
  { 
    title: "De Volta para o Futuro", 
    desc: "Um adolescente viaja acidentalmente para a época em que seus pais eram jovens e precisa garantir que eles se apaixonem.", 
    tags: ["rir", "scifi", "cult", "padrao"] 
  },
  { 
    title: "Clube dos Cinco", 
    desc: "Cinco adolescentes totalmente diferentes ficam de castigo na escola no sábado e descobrem que têm muito em comum.", 
    tags: ["rir", "chorar", "cult", "real", "padrao"] 
  },
  { 
    title: "Midsommar: O Mal Não Espera a Noite", 
    desc: "Um casal em crise vai a um festival de verão na Suécia e cai nas garras de um culto bizarro que atua à luz do dia.", 
    tags: ["mindfuck", "tenso", "moderno", "cult", "padrao"] 
  },
  { 
    title: "John Wick: De Volta ao Jogo", 
    desc: "Eles roubaram seu carro e mataram seu cachorro. Agora, o maior assassino do mundo saiu da aposentadoria para aniquilar todo mundo.", 
    tags: ["tenso", "moderno", "real", "curto"] 
  },
  { 
    title: "Orgulho e Preconceito", 
    desc: "O clássico romance de época. A química avassaladora e os atritos de classes entre Elizabeth Bennet e o Sr. Darcy.", 
    tags: ["chorar", "real", "padrao", "cult"] 
  },
  { 
    title: "A Viagem de Chihiro", 
    desc: "Uma garota entra em um mundo mágico habitado por deuses, bruxas e espíritos. O auge absoluto do Studio Ghibli.", 
    tags: ["mindfuck", "scifi", "cult", "padrao", "epic"] 
  },
  { 
    title: "O Grande Truque", 
    desc: "Dois mágicos rivais competem ferozmente para criar a ilusão de palco definitiva. Final surpreendente e genial.", 
    tags: ["mindfuck", "tenso", "moderno", "padrao"] 
  },
  { 
    title: "Um Sonho de Liberdade", 
    desc: "Um homem inocente é condenado à prisão perpétua e constrói amizades e esperança dentro de uma penitenciária brutal.", 
    tags: ["chorar", "epic", "anos90", "real", "padrao"] 
  },
  { 
    title: "Deadpool", 
    desc: "Um mercenário sarcástico com fator de cura acelerado quebra a quarta parede enquanto busca vingança. Violência e piadas sujas.", 
    tags: ["rir", "tenso", "moderno", "scifi", "padrao"] 
  },
  { 
    title: "Como Treinar o Seu Dragão", 
    desc: "Um jovem viking que não tem talento para caçar se torna o melhor amigo do dragão mais letal do mundo.", 
    tags: ["epic", "scifi", "rir", "moderno", "padrao"] 
  },
  { 
    title: "Pânico (Scream)", 
    desc: "Um assassino mascarado fã de filmes de terror persegue uma adolescente e seus amigos. Sangue, sustos e metalinguagem.", 
    tags: ["tenso", "anos90", "cult", "real", "padrao"] 
  },
  { 
    title: "500 Dias com Ela", 
    desc: "A história de um relacionamento não-linear mostrando exatamente como as expectativas românticas podem ser cruéis.", 
    tags: ["rir", "chorar", "moderno", "real", "padrao"] 
  },
  { 
    title: "Bastardos Inglórios", 
    desc: "Na Segunda Guerra, um esquadrão americano focado em eliminar nazistas tem seus planos cruzados com uma dona de cinema.", 
    tags: ["tenso", "rir", "moderno", "real", "cult"] 
  },
  { 
    title: "Alien, o Oitavo Passageiro", 
    desc: "A tripulação de uma nave comercial responde a um sinal de socorro e acaba com uma criatura letal a bordo.", 
    tags: ["tenso", "scifi", "cult", "padrao"] 
  },
  { 
    title: "Forrest Gump: O Contador de Histórias", 
    desc: "A vida de um homem simples que, sem querer, acaba participando dos maiores eventos históricos do século XX.", 
    tags: ["chorar", "rir", "anos90", "real", "epic"] 
  },
  { 
    title: "Tudo em Todo o Lugar ao Mesmo Tempo", 
    desc: "Uma imigrante chinesa que não consegue pagar os impostos descobre que o multiverso depende dela. Caos, artes marciais e emoção.", 
    tags: ["mindfuck", "rir", "chorar", "moderno", "scifi", "epic"] 
  },
  { 
    title: "Diário de uma Paixão", 
    desc: "Um casal de classes sociais diferentes que se apaixona perdidamente na década de 1940. O romance dramático definitivo.", 
    tags: ["chorar", "moderno", "real", "padrao"] 
  },
  { 
    title: "O Auto da Compadecida", 
    desc: "As aventuras inesquecíveis e os golpes de João Grilo e Chicó no sertão nordestino. A maior comédia brasileira já feita.", 
    tags: ["rir", "cult", "real", "padrao"] 
  },
  { 
    title: "Homem de Ferro", 
    desc: "Um bilionário arrogante constrói uma armadura superpoderosa para escapar do cativeiro. O filme que deu origem ao UCM.", 
    tags: ["rir", "tenso", "moderno", "scifi", "padrao"] 
  },
  { 
    title: "Ratatouille", 
    desc: "Um rato de esgoto com paladar refinado sonha em se tornar um grande chef de cozinha em Paris.", 
    tags: ["rir", "moderno", "scifi", "padrao"] 
  },
  { 
    title: "Meninas Malvadas", 
    desc: "Uma garota criada na selva africana entra na escola pública e aprende da pior forma as regras cruéis das panelinhas.", 
    tags: ["rir", "moderno", "real", "curto", "cult"] 
  },
  { 
    title: "Amnésia (Memento)", 
    desc: "Um homem com perda de memória recente usa tatuagens e anotações para encontrar o assassino da sua esposa. A história é contada de trás pra frente.", 
    tags: ["mindfuck", "tenso", "moderno", "real", "padrao"] 
  },
  { 
    title: "O Exorcista", 
    desc: "Uma atriz chama dois padres para ajudar sua filha que parece estar dominada por uma entidade demoníaca assustadora.", 
    tags: ["tenso", "cult", "real", "padrao"] 
  },
  { 
    title: "Jurassic Park: O Parque dos Dinossauros", 
    desc: "Um parque de diversões com dinossauros clonados sai de controle. Ação épica com um pezinho no suspense.", 
    tags: ["tenso", "epic", "anos90", "scifi", "padrao"] 
  },
// ... final do lote 2
  { 
    title: "Jurassic Park: O Parque dos Dinossauros", 
    desc: "Um parque de diversões com dinossauros clonados sai de controle. Ação épica com um pezinho no suspense.", 
    tags: ["tenso", "epic", "anos90", "scifi", "padrao"] 
  }, // <-- NÃO ESQUEÇA DESSA VÍRGULA AQUI!

  // --- LOTE 3: O IMPÉRIO CRESCE (Ação Tática, Máfia, Drama, Animações e Terror) ---
  { 
    title: "O Poderoso Chefão", 
    desc: "A ascensão e a queda da família Corleone. A maior obra-prima sobre máfia, poder e lealdade já feita no cinema.", 
    tags: ["tenso", "epic", "cult", "real"] 
  },
  { 
    title: "Fogo Contra Fogo (Heat)", 
    desc: "Um detetive obcecado e um mestre do roubo a bancos se enfrentam nas ruas. Tiroteios táticos incrivelmente realistas.", 
    tags: ["tenso", "anos90", "cult", "real", "epic"] 
  },
  { 
    title: "O Resgate (Extraction)", 
    desc: "Um mercenário implacável precisa resgatar um garoto em Bangladesh. Ação tática frenética e coreografias de combate brutais.", 
    tags: ["tenso", "moderno", "real", "curto"] 
  },
  { 
    title: "Invocação do Mal", 
    desc: "Investigadores paranormais tentam ajudar uma família aterrorizada por uma presença demoníaca. O terror moderno definitivo.", 
    tags: ["tenso", "moderno", "real", "padrao"] 
  },
  { 
    title: "Se Beber, Não Case!", 
    desc: "Uma despedida de solteiro em Las Vegas dá muito errado. Eles acordam sem o noivo e sem memória. Comédia pura.", 
    tags: ["rir", "moderno", "real", "padrao"] 
  },
  { 
    title: "Divertida Mente", 
    desc: "O que acontece dentro da cabeça de uma garotinha? Uma animação genial sobre emoções que faz adulto chorar igual criança.", 
    tags: ["chorar", "rir", "moderno", "scifi", "padrao"] 
  },
  { 
    title: "O Rei Leão", 
    desc: "Um jovem leão precisa enfrentar seu tio maligno para retomar o trono. A trilha sonora e a animação são lendárias.", 
    tags: ["epic", "chorar", "anos90", "scifi", "padrao"] 
  },
  { 
    title: "Avatar", 
    desc: "Um soldado paraplégico é enviado ao planeta Pandora e se divide entre cumprir ordens e proteger um novo mundo.", 
    tags: ["epic", "scifi", "moderno", "padrao"] 
  },
  { 
    title: "Gênio Indomável", 
    desc: "Um zelador rebelde de uma universidade é, na verdade, um gênio da matemática, mas precisa de ajuda para lidar com seu passado.", 
    tags: ["chorar", "real", "cult", "anos90", "padrao"] 
  },
  { 
    title: "Scarface", 
    desc: "A ascensão sangrenta de um refugiado cubano que se torna o maior chefão do narcotráfico em Miami.", 
    tags: ["tenso", "anos90", "cult", "real", "epic"] 
  },
  { 
    title: "Vingadores: Ultimato", 
    desc: "Os heróis sobreviventes arriscam tudo em uma viagem no tempo para reverter o estalo de Thanos. O maior evento da cultura pop.", 
    tags: ["epic", "scifi", "moderno", "chorar", "padrao"] 
  },
  { 
    title: "Um Lugar Silencioso", 
    desc: "Se eles te ouvirem, eles te caçam. Uma família tenta sobreviver em silêncio absoluto em um mundo pós-apocalíptico.", 
    tags: ["tenso", "moderno", "scifi", "curto"] 
  },
  { 
    title: "Falcão Negro em Perigo", 
    desc: "Uma missão militar na Somália dá errado e soldados americanos ficam encurralados. Tensão, sobrevivência e combate urbano intenso.", 
    tags: ["tenso", "epic", "real", "moderno"] 
  },
  { 
    title: "O Diabo Veste Prada", 
    desc: "Uma jornalista recém-formada consegue emprego com a editora de moda mais implacável e diabólica de Nova York.", 
    tags: ["rir", "real", "moderno", "padrao", "cult"] 
  },
  { 
    title: "Como Perder um Homem em 10 Dias", 
    desc: "Ela precisa fazer um cara terminar com ela em 10 dias. Ele fez uma aposta de que faria qualquer mulher se apaixonar. Caos romântico.", 
    tags: ["rir", "real", "moderno", "padrao"] 
  },
  { 
    title: "WALL-E", 
    desc: "Um robozinho lixeiro solitário na Terra destruída descobre uma planta e embarca numa jornada pelo espaço.", 
    tags: ["chorar", "scifi", "moderno", "padrao"] 
  },
  { 
    title: "Jogos Mortais", 
    desc: "Dois homens acordam acorrentados em um banheiro sujo e precisam jogar um jogo sádico para sobreviver.", 
    tags: ["tenso", "mindfuck", "moderno", "cult", "padrao"] 
  },
  { 
    title: "Taxi Driver", 
    desc: "Um veterano de guerra solitário e insone trabalha como taxista e lentamente desce à loucura nas ruas de Nova York.", 
    tags: ["tenso", "cult", "real", "padrao"] 
  },
  { 
    title: "Oppenheimer", 
    desc: "O dilema moral, a política e a ciência por trás do homem que criou a bomba atômica. Um épico tenso e biográfico.", 
    tags: ["epic", "tenso", "real", "moderno"] 
  },
  { 
    title: "Curtindo a Vida Adoidado", 
    desc: "Um adolescente decide matar aula para aproveitar o dia perfeito em Chicago com o melhor amigo e a namorada.", 
    tags: ["rir", "cult", "real", "curto"] 
  },
  { 
    title: "O Labirinto do Fauno", 
    desc: "Na Espanha fascista, uma garotinha descobre um mundo de fantasia sombrio e criaturas bizarras em um labirinto antigo.", 
    tags: ["mindfuck", "epic", "cult", "scifi", "padrao"] 
  },
  { 
    title: "A Bruxa de Blair", 
    desc: "Três estudantes de cinema se perdem na floresta enquanto gravam um documentário sobre uma lenda local. O terror found footage original.", 
    tags: ["tenso", "anos90", "cult", "real", "curto"] 
  },
  { 
    title: "Clube de Compras Dallas", 
    desc: "Um eletricista diagnosticado com HIV contrabandeia remédios não aprovados para ajudar outros pacientes. Atuações monstruosas.", 
    tags: ["chorar", "real", "moderno", "padrao"] 
  },
  { 
    title: "Batman: O Retorno", 
    desc: "Batman enfrenta o Pinguim e a Mulher-Gato em uma Gotham gótica e sombria com o toque bizarro de Tim Burton.", 
    tags: ["tenso", "anos90", "scifi", "cult", "padrao"] 
  },
  { 
    title: "Logan", 
    desc: "Um Wolverine envelhecido e cansado precisa proteger uma jovem mutante em um futuro onde os X-Men não existem mais.", 
    tags: ["chorar", "tenso", "moderno", "scifi", "padrao"] 
  },
  { 
    title: "Homem-Aranha 2 (2004)", 
    desc: "Peter Parker tenta equilibrar sua vida pessoal caótica com a responsabilidade de deter o Doutor Octopus. O clássico definitivo.", 
    tags: ["rir", "tenso", "anos90", "scifi", "padrao"] 
  },
  { 
    title: "Shrek 2", 
    desc: "O ogro e a princesa conhecem os sogros, enquanto uma Fada Madrinha tenta arruinar o casamento. Sequência melhor que o original.", 
    tags: ["rir", "scifi", "moderno", "cult", "padrao"] 
  },
  { 
    title: "O Menino do Pijama Listrado", 
    desc: "A amizade inocente entre o filho de um oficial nazista e um menino judeu através da cerca de um campo de concentração.", 
    tags: ["chorar", "real", "padrao"] 
  },
  { 
    title: "Titanic", 
    desc: "O romance proibido a bordo do navio "inafundável" que chocou o mundo. Uma das maiores bilheterias da história.", 
    tags: ["epic", "chorar", "anos90", "real"] 
  },
  { 
    title: "Os Suspeitos (Prisoners)", 
    desc: "A filha de um carpinteiro desaparece e, sem respostas da polícia, ele faz justiça com as próprias mãos. Tensão absurda.", 
    tags: ["tenso", "mindfuck", "moderno", "real", "epic"] 
  },
  { 
    title: "Contato", 
    desc: "Uma astrônoma finalmente capta um sinal de rádio vindo de uma estrela distante, mudando a ciência e a religião para sempre.", 
    tags: ["mindfuck", "scifi", "anos90", "padrao"] 
  },
  { 
    title: "O Quinto Elemento", 
    desc: "No século 23, um taxista se vê no meio de uma corrida para encontrar uma arma cósmica e salvar o universo. Ação colorida e cult.", 
    tags: ["scifi", "rir", "anos90", "cult", "padrao"] 
  },
  { 
    title: "À Espera de um Milagre", 
    desc: "Guardas no corredor da morte descobrem que um preso condenado por assassinato tem um dom milagroso. Destrói qualquer coração.", 
    tags: ["chorar", "epic", "cult", "real"] 
  },
  { 
    title: "Os Fantasmas se Divertem (Beetlejuice)", 
    desc: "Um casal de fantasmas contrata um bio-exorcista maluco para expulsar os novos moradores humanos de sua casa.", 
    tags: ["rir", "anos90", "cult", "scifi", "padrao"] 
  },
  { 
    title: "Psicose", 
    desc: "Uma secretária em fuga se esconde em um motel de beira de estrada administrado por um jovem estranho e sua mãe. Clássico absoluto.", 
    tags: ["tenso", "mindfuck", "cult", "real", "padrao"] 
  },
  { 
    title: "O Curioso Caso de Benjamin Button", 
    desc: "A história de um homem que nasce velho e vai rejuvenescendo com o passar dos anos, e o amor que tenta sobreviver ao tempo.", 
    tags: ["chorar", "scifi", "moderno", "epic"] 
  },
  { 
    title: "Gravidade", 
    desc: "Uma tempestade de destroços destrói um ônibus espacial e deixa dois astronautas isolados no vácuo do espaço. Visualmente agoniante.", 
    tags: ["tenso", "moderno", "scifi", "curto"] 
  },
  { 
    title: "Perdido em Marte", 
    desc: "Um astronauta é dado como morto e precisa usar a ciência para sobreviver sozinho em Marte até que o resgate chegue.", 
    tags: ["rir", "tenso", "moderno", "scifi", "padrao"] 
  },
  { 
    title: "Uma Linda Mulher", 
    desc: "Um milionário contrata uma garota de programa para acompanhá-lo por uma semana, mas o dinheiro não compra sentimentos.", 
    tags: ["rir", "anos90", "real", "cult", "padrao"] 
  },
  { 
    title: "Corações de Ferro (Fury)", 
    desc: "Nos últimos dias da Segunda Guerra, a tripulação de um tanque de guerra americano avança em território nazista suicida.", 
    tags: ["tenso", "epic", "real", "moderno"] 
  },
  { 
    title: "1917", 
    desc: "Dois soldados britânicos precisam cruzar o território inimigo para entregar uma mensagem que salvará centenas de vidas. Filmado em um plano-sequência.", 
    tags: ["tenso", "epic", "moderno", "real"] 
  },
  { 
    title: "O Grande Hotel Budapeste", 
    desc: "As aventuras frenéticas de um lendário concierge em um famoso hotel europeu entre as guerras mundiais. Estética perfeita e humor único.", 
    tags: ["rir", "cult", "moderno", "real", "padrao"] 
  },
  { 
    title: "Cisne Negro", 
    desc: "Uma bailarina obcecada com a perfeição começa a perder a sanidade enquanto se prepara para o papel principal.", 
    tags: ["mindfuck", "tenso", "moderno", "real", "padrao"] 
  },
  { 
    title: "Zodíaco", 
    desc: "A caçada desesperada e não resolvida a um assassino em série que brincou com a polícia e com a imprensa por anos.", 
    tags: ["tenso", "mindfuck", "moderno", "real", "epic"] 
  },
  { 
    title: "Simplesmente Acontece", 
    desc: "Dois melhores amigos de infância passam anos se desencontrando, apesar da atração óbvia. Romance leve e frustrante na medida certa.", 
    tags: ["chorar", "rir", "moderno", "real", "padrao"] 
  },
  { 
    title: "Garota Exemplar (Gone Girl)", 
    desc: "Sua esposa desaparece no aniversário de casamento e ele se torna o principal suspeito. O plot twist é lendário.", 
    tags: ["mindfuck", "tenso", "moderno", "real", "padrao"] 
  },
  { 
    title: "Atirador (Shooter)", 
    desc: "Um atirador de elite isolado é chamado para evitar um assassinato, mas descobre que caiu em uma conspiração gigante.", 
    tags: ["tenso", "moderno", "real", "padrao"] 
  },
  { 
    title: "Creed: Nascido para Lutar", 
    desc: "O filho de Apollo Creed busca Rocky Balboa para treiná-lo. O renascimento da franquia de boxe com muita emoção e porrada.", 
    tags: ["tenso", "chorar", "moderno", "real", "padrao"] 
  },
  { 
    title: "Procurando Nemo", 
    desc: "Um peixe-palhaço neurótico cruza o oceano enfrentando tubarões e tartarugas hippies para encontrar seu filho sequestrado.", 
    tags: ["rir", "chorar", "moderno", "scifi", "padrao"] 
  },
  { 
    title: "Prenda-Me Se For Capaz", 
    desc: "A história real de um jovem mestre do disfarce que falsificou milhões em cheques e fugiu do FBI por anos.", 
    tags: ["rir", "tenso", "moderno", "real", "padrao"] 
  }