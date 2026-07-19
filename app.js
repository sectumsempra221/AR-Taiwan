
const AWARDS_BY_WORK = {
  "Die Hard": ["☐ AFI — 100 Years…100 Heroes & Villains (#46 Villain, 2003)"],
  "Quigley Down Under": ["✓ London Film Critics' Circle — British Actor of the Year (Won, 1992)"],
  "Robin Hood": ["✓ BAFTA — Best Actor in a Supporting Role (Won, 1992)", "✓ London Film Critics' Circle — British Actor of the Year (Won, 1992)", "✓ Evening Standard British Film Awards — Best Actor (Won, 1992)", "☐ Saturn Award — Best Supporting Actor (Nom, 1992)", "☐ MTV Movie Award — Best Villain (Nom, 1992)", "☐ Chicago Film Critics Association Award — Best Supporting Actor (Nom, 1991)"],
  "Truly Madly Deeply": ["✓ Evening Standard British Film Awards — Best Actor (Won, 1992)", "✓ London Film Critics' Circle — British Actor of the Year (Won, 1992)", "✓ Seattle International Film Festival — Golden Space Needle Award for Best Actor (Won, 1991) [shared with Close My Eyes]", "☐ BAFTA — Best Actor in a Leading Role (Nom, 1992)"],
  "Close My Eyes": ["✓ London Film Critics' Circle — British Actor of the Year (Won, 1992)", "✓ Evening Standard British Film Awards — Best Actor (Won, 1992)", "✓ Seattle International Film Festival — Golden Space Needle Award for Best Actor (Won, 1991) [shared with Truly Madly Deeply]"],
  "Mesmer": ["✓ Montreal World Film Festival — Best Actor (Won, 1994)"],
  "Sense and Sensibility": ["☐ BAFTA — Best Actor in a Supporting Role (Nom, 1996)", "☐ Screen Actors Guild Award — Outstanding Performance by a Cast in a Motion Picture (Nom, 1996)", "☐ Chlotrudis Award — Best Supporting Actor (Nom, 1996)"],
  "Michael Collins": ["☐ BAFTA — Best Actor in a Supporting Role (Nom, 1997)"],
  "Rasputin": ["✓ Primetime Emmy Award — Outstanding Lead Actor in a Miniseries or a Special (Won, 1996)", "✓ Golden Globe Award — Best Performance by an Actor in a Miniseries or Motion Picture Made for Television (Won, 1997)", "✓ Screen Actors Guild Award — Outstanding Performance by a Male Actor in a Television Movie or Miniseries (Won, 1997)", "✓ Satellite Award — Best Actor – Miniseries or Television Film (Won, 1997)"],
  "The Winter Guest": ["✓ Venice Film Festival — OCIC Award (Won, 1997)", "✓ Venice Film Festival — CinemAvvenire Award (Won, 1997)", "✓ Chicago International Film Festival — Gold Hugo – Best Film (Won, 1997)", "✓ Brussels International Film Festival — Audience Award (Won, 1998)", "☐ Venice Film Festival — Golden Lion (Nom, 1997)", "☐ Chlotrudis Award — Best Director (Nom, 1998)", "☐ Czech Lion — Best Foreign Language Film (Nom, 1999)"],
  "Dogma": ["☐ Satellite Award — Best Supporting Actor – Motion Picture (Nom, 1999)"],
  "Galaxy Quest": ["☐ Saturn Award — Best Supporting Actor (Nom, 2000)"],
  "Harry Potter": ["☐ Teen Choice Award — Film – Choice Sleazebag (Nom, 2002)", "☐ Phoenix Film Critics Society Award — Best Acting Ensemble (Nom, 2002) [Harry Potter and the Chamber of Secrets]", "☐ Teen Choice Award — Choice Movie Villain (Nom, 2003)", "✓ Scream Award — Best Ensemble (Won, 2009)", "✓ MTV Movie Award — Favorite Harry Potter Character Portrayal (Won, 2011)", "✓ San Diego Film Critics Society Award — Best Ensemble Performance (Won, 2011)", "✓ People's Choice Award — Favorite Ensemble Movie Cast (Won, 2011)", "☐ Alliance of Women Film Journalists — Best Supporting Actor (Nom, 2011)", "☐ Washington D.C. Area Film Critics Association Award — Best Cast (Nom, 2011)", "☐ St. Louis Gateway Film Critics Association Award — Best Supporting Actor (Nom, 2011)", "☐ Scream Award — Best Supporting Actor (Nom, 2011)", "☐ Scream Award — Best Ensemble (Nom, 2011)", "☐ Saturn Award — Best Supporting Actor (Nom, 2012)", "☐ EDA Award (Alliance of Women Film Journalists) — Best Supporting Actor (Nom, 2012)", "☐ BAFTA — Best Supporting Actor (Longlisted only, 2012)"],
  "Love Actually": ["☐ Broadcast Film Critics Association Award — Best Acting Ensemble (Nom, 2004)", "☐ Phoenix Film Critics Society Award — Best Acting Ensemble (Nom, 2004)"],
  "Sweeney Todd": ["☐ Saturn Award — Best Supporting Actor (Nom, 2008)", "☐ Scream Award — Best Villain (Nom, 2008)", "☐ Broadcast Film Critics Association Award — Best Acting Ensemble (Nom, 2008)"],
  "Something the Lord Made": ["☐ Primetime Emmy Award — Outstanding Lead Actor in a Miniseries or a Movie (Nom, 2004)", "☐ Satellite Award — Best Actor – Miniseries or Television Film (Nom, 2005)"],
  "The Butler": ["☐ Acapulco Black Film Festival — Hollywood Award for Best Ensemble Cast (Nom, 2014)", "☐ Screen Actors Guild Award — Outstanding Performance by a Cast in a Motion Picture (Nom, 2014)"],
  "Les Liaisons Dangereuses": ["☐ Laurence Olivier Award — Best Actor (Nom, 1986)", "☐ Tony Award — Best Actor in a Play (Nom, 1987)", "☐ Drama Desk Award — Outstanding Actor in a Play (Nom, 1987)"],
  "Private Lives": ["☐ Evening Standard Theatre Award — Best Actor (Nom, 2001)", "✓ Variety Club Award — Best Actor (Won, 2002)", "☐ Laurence Olivier Award — Best Actor (Nom, 2002)", "☐ Tony Award — Best Actor in a Play (Nom, 2002)", "☐ Drama Desk Award — Outstanding Actor in a Play (Nom, 2002)"],
  "Seminar": ["☐ Drama League Award — Distinguished Performance Award (Nom, 2012)", "☐ Outer Critics Circle Award — Outstanding Actor in a Play (Nom, 2012)", "✓ Broadway.com Audience Choice Award — Favorite Actor in a Play (Won, 2012)"],
  "Snow Cake": ["☐ Seattle International Film Festival — Golden Space Needle Award for Best Actor (1st Runner-up, 2006)"],
  "Bottle Shock": ["✓ Seattle International Film Festival — Golden Space Needle Award for Best Actor (Won, 2008)"],
  "Eye in the Sky": ["☐ Evening Standard British Film Awards — Best Supporting Actor (Nom, 2017)"],
  "My Name Is Rachel Corrie": ["✓ Theatregoers' Choice Awards — Best Director (Won, 2006)", "✓ Theatregoers' Choice Awards — Best New Play (Won, 2006)"],
  "Audiobook": ["✓ Audie Award — Audiobook of the Year (Won, 2010)", "✓ Audie Award — Multi-Voiced Performance (Won, 2010)"],
  "A Promise": ["✓ Beijing International Film Festival — Tiantan Award for Best Supporting Actor (Won, 2014)"]
};

const FEATURETTES_BY_WORK = {
  "Die Hard": [
    "2000 — Twentieth Century Fox: The Blockbuster Years ",
    "2000 — Hollywood Salutes Bruce Willis: An American Cinematheque Tribute",
    "2019 — The Movies That Made Us: Die Hard (Netflix・S1E4)",
    "2021 — Guns, Muscles, and Kung Fu — The 1980s and the Birth of the 'Action Movie' (archive footage)"
  ],
  "Quigley Down Under": [
    "2002 — The Rebirth of the Western (MGM DVD featurette)"
  ],
  "Robin Hood": [
    "1991 — Robin Hood: The Myth, the Man, the Movie (TV)"
  ],
  "Bob Roberts": [
    "1992 — HBO First Look"
  ],
  "Galaxy Quest": [
    "2000 — Galaxy Quest: On Location in Space (DVD・IMDb tt5276662)",
    "2009 — Galaxy Quest: Actors in Space (DVD short)",
    "2009 — Alien School – Creating the Thermian Race (DVD short)",
    "2009 — Historical Documents – The Story of Galaxy Quest (DVD short)",
    "2019 — Never Surrender: A Galaxy Quest Documentary"
  ],
  "Dogma": [
    "2001 — Judge Not: In Defense of Dogma (DVD)"
  ],
  "Victoria Wood": [
    "2000 — Victoria Wood with All the Trimmings: Outtakes (Video short・uncredited)",
    "2005 — Victoria Wood: A BAFTA Tribute (TV Special・uncredited)",
    "2017 — Our Friend Victoria (BBC 悼念特輯・archive footage)"
  ],
  "Harry Potter": [
    "2003 — Interviews with Professors & More (DVD)",
    "2004 — Creating the Vision (DVD short・uncredited)",
    "2006 — Harry vs. the Horntail: The First Task (DVD)",
    "2009 — Creating the World of Harry Potter (Blu-ray・Part 1–2〔2009〕/ Part 8〔2012〕)",
    "2011 — When Harry Left Hogwarts (ITV / DH2 Blu-ray)",
    "2011 — 50 Greatest Harry Potter Moments (ITV)",
    "2022 — Harry Potter 20th Anniversary: Return to Hogwarts (HBO Max)"
  ],
  "Hitchhiker's Guide": [
    "2005 — Making of 'The Hitchhiker's Guide to the Galaxy' (DVD)"
  ],
  "Snow Cake": [
    "2007 — Snow Cake: Behind the Scenes / Autism Awareness (DVD)"
  ],
  "Sweeney Todd": [
    "2008 — Sweeney Todd: Burton + Carter + Depp = Todd (DVD)"
  ],
  "A Little Chaos": [
    "2015 — The Making of a Little Chaos (DVD)"
  ]
};


const WW_PERIODS = [
  {
    id: "pre1990", label: "1990 以前", years: "1974–1989",
    works: [
      // ---- 1974 ----
      { tag: "Babes in the Wood", label: "Babes in the Wood", year: 1974, role: "Chorus (Library Theatre, Manchester・舞台・耶誕pantomime)", type: "stage" },
      { tag: "Lock Up Your Daughters", label: "Lock Up Your Daughters", year: 1974, role: "Dabble (Library Theatre, Manchester・舞台)", type: "stage" },
      { tag: "Uncle Vanya", label: "Uncle Vanya", year: 1974, role: "(Library Theatre, Manchester・舞台)", type: "stage" },

      // ---- 1975 ----
      { tag: "Romeo and Juliet 1975", label: "Romeo and Juliet", year: 1975, role: "Paris (Haymarket Theatre, Leicester・Michael Bogdanov 執導・舞台)", type: "stage" },
      { tag: "Manchester Enthusiasts", label: "The Manchester Enthusiasts", year: 1975, role: "演出 (BBC Radio・現存最早的廣播 credit)", type: "voice" },
      { tag: "Saint Joan", label: "Saint Joan", year: 1975, role: "Inquisitor 等 (Library Theatre, Manchester・舞台)", type: "stage" },
      { tag: "Girl in My Soup", label: "There's a Girl in My Soup", year: 1975, role: "Andrew Hunter (Library Theatre, Manchester・舞台)", type: "stage" },
      { tag: "Joseph", label: "Joseph and the Amazing Technicolor Dreamcoat", year: 1975, role: "Asher (Haymarket Theatre, Leicester・舞台)", type: "stage" },
      { tag: "Guys and Dolls", label: "Guys and Dolls", year: 1975, role: "Liverlips Louie / 扒手 (Haymarket Theatre, Leicester・舞台)", type: "stage" },

      // ---- 1976 ----
      { tag: "Antique Baby", label: "The Antique Baby(Jennifer Phillips 作)", year: 1976, role: "(Haymarket Theatre, Leicester・舞台)", type: "stage" },
      { tag: "Gunslinger", label: "Gunslinger(Richard Crane 作)", year: 1976, role: "Little Thunder / a Rancher / Chief Black Moon (Phoenix Theatre, Leicester・Peter Moss 執導・舞台・同台 Victoria Wood)", type: "stage" },
      { tag: "Nijinsky", label: "Nijinsky(Rex Doyle 作)", year: 1976, role: "Vaslav Nijinsky (Crucible Theatre, Sheffield・舞台)", type: "stage" },
      { tag: "Carnation Gang", label: "The Carnation Gang", year: 1976, role: "Daniel (Crucible Theatre, Sheffield・舞台)", type: "stage" },
      { tag: "When We Dead Awaken", label: "When We Dead Awaken", year: 1976, role: "Arnold Rubek (Crucible Theatre, Sheffield・舞台)", type: "stage" },
      { tag: "As You Like It 1976", label: "As You Like It", year: 1976, role: "Jaques (Crucible Theatre, Sheffield・舞台)", type: "stage" },
      { tag: "Sherlock Holmes", label: "Sherlock Holmes", year: 1976, role: "Sherlock Holmes (Birmingham Repertory Theatre・舞台)", type: "stage" },

      // ---- 1977 ----
      { tag: "The Devil is an Ass", label: "The Devil Is an Ass", year: 1977, role: "Wittipol (Birmingham Rep → 愛丁堡藝術節 → National Theatre, Lyttelton・舞台)", type: "stage" },
      { tag: "Measure for Measure", label: "Measure for Measure", year: 1977, role: "Friar Peter (Birmingham Rep → 愛丁堡藝術節 → National Theatre, Lyttelton・舞台)", type: "stage" },
      { tag: "Ubu Rex", label: "Ubu Rex", year: 1977, role: "Ma Ubu〔反串〕 (New Vic, Bristol・舞台)", type: "stage" },
      { tag: "A Mans a Man", label: "A Man's a Man", year: 1977, role: "Uriah Shelly (Little Theatre, Bristol・舞台)", type: "stage" },
      { tag: "Hamlet Bristol", label: "Hamlet (Bristol Old Vic)", year: 1977, role: "Laertes (Bristol Old Vic – Theatre Royal・舞台)", type: "stage" },
      { tag: "Dick Whittington", label: "Dick Whittington", year: 1977, role: "King Rat (Bristol Old Vic – Theatre Royal・舞台・1977–78)", type: "stage" },

      // ---- 1978 ----
      { tag: "The Tempest", label: "The Tempest", year: 1978, role: "Ferdinand (RSC, Royal Shakespeare Theatre・舞台)", type: "stage" },
      { tag: "Captain Swing", label: "Captain Swing", year: 1978, role: "Farquarson (RSC, The Other Place・舞台)", type: "stage" },
      { tag: "Love's Labour's Lost", label: "Love's Labour's Lost", year: 1978, role: "Boyet (RSC, Stratford → Aldwych Theatre 1979・舞台)", type: "stage" },
      { tag: "Antony and Cleopatra 1978", label: "Antony and Cleopatra", year: 1978, role: "Alexas / Thidias (RSC・Peter Brook 執導・舞台)", type: "stage" },
      { tag: "Winter's Tale", label: "Winter's Tale(Rosalind Winter 作)", year: 1978, role: "Father Garnet (RSC, The Other Place・Ron Daniels 執導・舞台)", type: "stage" },
      { tag: "A View from the Bridge", label: "A View from the Bridge", year: 1978, role: "(Court Drama Group・舞台)", type: "stage" },
      { tag: "Romeo and Juliet", label: "Romeo and Juliet", year: 1978, role: "Tybalt (BBC TV)", type: "tv" },

      // ---- 1979 ----
      { tag: "Antonio", label: "Antonio(Marston 原作・Peter Barnes 改編)", year: 1979, role: "Antonio (Nottingham Playhouse・舞台)", type: "stage" },
      { tag: "Fears and Miseries", label: "Fears and Miseries of the Third Reich(Brecht 作)", year: 1979, role: "法官等七個角色 (Citizens Theatre, Glasgow・舞台)", type: "stage" },

      // ---- 1980 ----
      { tag: "The Summer Party", label: "The Summer Party", year: 1980, role: "Nigel (Crucible Theatre, Sheffield・舞台)", type: "stage" },
      { tag: "Shelley", label: "《Shelley》", year: 1980, role: "Clive (ITV)", type: "tv" },
      { tag: "Commitments", label: "Commitments(Dusty Hughes 作)", year: 1980, role: "Hugh (Bush Theatre・舞台)", type: "stage" },
      { tag: "The Devil Himself", label: "The Devil Himself(Peter Barnes 改編自 Wedekind)", year: 1980, role: "(Lyric Studio Theatre, Hammersmith・舞台)", type: "stage" },
      { tag: "Desperately Yours", label: "Desperately Yours(Ruby Wax 作・主演)", year: 1980, role: "導演 (紐約・Off-Broadway)", type: "stage" },
      { tag: "Therese Raquin", label: "《Thérèse Raquin》", year: 1980, role: "Vidal (BBC TV・3 集)", type: "tv" },

      // ---- 1981 ----
      { tag: "The Seagull", label: "The Seagull", year: 1981, role: "Mr. Aston〔Trigorin〕 (Royal Court Theatre・舞台・Kilroy 愛爾蘭改編)", type: "stage" },
      { tag: "Philadelphia Story", label: "The Philadelphia Story(Philip Barry 作)", year: 1981, role: "Mike Connor (Oxford Playhouse・舞台)", type: "stage" },
      { tag: "Brothers Karamazov", label: "The Brothers Karamazov(Richard Crane 改編)", year: 1981, role: "Ivan (愛丁堡國際藝術節 → Theatre Royal Brighton → West End・並巡演蘇聯・舞台)", type: "stage" },
      { tag: "The Last Elephant", label: "The Last Elephant(Stephen Davis 作)", year: 1981, role: "Edward Rumsey (Bush Theatre・舞台)", type: "stage" },

      // ---- 1982 ----
      { tag: "Salvation Now", label: "Salvation Now", year: 1982, role: "Hector Dupoids (RSC Warehouse, London・舞台)", type: "stage" },
      { tag: "Seagull Radio", label: "The Seagull(廣播版)", year: 1982, role: "Mr. Aston〔Trigorin〕 (BBC Radio)", type: "voice" },
      { tag: "Smiley's People", label: "《Smiley's People》", year: 1982, role: "Mr. Brownlow (BBC TV)", type: "tv" },
      { tag: "The Barchester Chronicles", label: "《巴切斯特傳》", year: 1982, role: "Obadiah Slope (BBC TV)", type: "tv" },

      // ---- 1983 ----
      { tag: "Polly", label: "Polly(John Gay 作)", year: 1983, role: "演出 (BBC Radio 3)", type: "voice" },
      { tag: "Busted", label: "《Busted》", year: 1983, role: "Simon (BBC1 Play for Today)", type: "tv" },
      { tag: "Other Worlds", label: "Other Worlds(Robert Holman 作)", year: 1983, role: "助理導演 (Royal Court Theatre・舞台)", type: "stage" },
      { tag: "Actors", label: "Actors, or Playing for Real(Peter Barnes 改編)", year: 1983, role: "Carinus (BBC 廣播劇)", type: "voice" },
      { tag: "Dutch Courtesan", label: "The Dutch Courtesan(Marston 作)", year: 1983, role: "Cocledemoy (BBC Radio 3)", type: "voice" },
      { tag: "Bad Language", label: "Bad Language(Dusty Hughes 作)", year: 1983, role: "Bob Thomas (Hampstead Theatre・舞台)", type: "stage" },
      { tag: "Rope", label: "Rope(Patrick Hamilton 作)", year: 1983, role: "Rupert Cadell (BBC Radio 4)", type: "voice" },
      { tag: "The Grass Widow", label: "The Grass Widow(Snoo Wilson 作)", year: 1983, role: "Dennis (Royal Court Theatre・舞台)", type: "stage" },

      // ---- 1984 ----
      { tag: "Lucky Chance", label: "The Lucky Chance(Aphra Behn 作)", year: 1984, role: "Gayman (Royal Court Theatre・舞台)", type: "stage" },
      
      // ---- 1985 ----
      { tag: "Return of the Native", label: "《Return of the Native》", year: 1985, role: "有聲書", type: "voice" },
      { tag: "Wetherby", label: "《陌生男子 Wetherby》", year: 1985, role: "電視畫面裡的TV Commentator（嚴格定義的銀幕電影出道作）",type: "film" },
      { tag: "Good Man in Africa", label: "A Good Man in Africa(William Boyd 原著)", year: 1985, role: "主演 (BBC Radio 4)", type: "voice" },
      { tag: "As You Like It", label: "As You Like It", year: 1985, role: "Jaques (RSC, Stratford → Barbican Theatre・舞台・再度飾演)", type: "stage" },
      { tag: "Gridlock", label: "Gridlock(Nigel Gearing 作)", year: 1985, role: "Charles (BBC Radio 3)", type: "voice" },
      { tag: "Troilus and Cressida", label: "Troilus and Cressida", year: 1985, role: "Achilles (RSC・舞台)", type: "stage" },
      { tag: "Pity in History", label: "《Pity in History》(Howard Barker 作)", year: 1985, role: "Croop (BBC2 Playhouse)", type: "tv" },
      { tag: "Les Liaisons Dangereuses", label: "Les Liaisons Dangereuses", year: 1985, role: "Vicomte de Valmont (The Other Place 1985 → Barbican Pit 1986 → Ambassadors, West End 1986 → Music Box, Broadway 1987)", type: "stage", awards: AWARDS_BY_WORK["Les Liaisons Dangereuses"] },
      { tag: "Barnes People", label: "Barnes' People", year: 1985, role: "導演 (RSC, The Other Place)", type: "stage" },
      { tag: "Gone to Heaven", label: "Gone to Heaven (Back Soon)", year: 1985, role: "演出 (RSC, The Other Place・舞台)", type: "stage" },
      { tag: "Girls on Top", label: "《Girls on Top》", year: 1985, role: "Dmitri + 配音 (ITV・共 2 集)", type: "tv" },
      { tag: "Magic of My Youth", label: "The Magic of My Youth(Arthur Calder-Marshall 回憶錄)", year: 1985, role: "演出 (BBC Radio)", type: "voice" },

      // ---- 1986 ----
      { tag: "Blood Wedding Radio", label: "Blood Wedding(Lorca 作・廣播版)", year: 1986, role: "Leonardo (BBC Radio)", type: "voice" },
      { tag: "Blind Corner", label: "Blind Corner(Dornford Yates 原著)", year: 1986, role: "有聲書朗讀・全本", type: "voice" },
      { tag: "Mephisto", label: "Mephisto", year: 1986, role: "Hendrik Höfgen (RSC, Barbican Theatre・舞台)", type: "stage" },
      { tag: "That Man Bracken", label: "That Man, Bracken(Thomas Kilroy 作)", year: 1986, role: "Brendan Bracken (BBC Radio 3)", type: "voice" },
      { tag: "Blood on the Neck of the Cat", label: "Blood on the Neck of the Cat", year: 1986, role: "導演 (RSC 青年團, Almeida Theatre・舞台)", type: "stage" },
      { tag: "Live Wax", label: "Live Wax(Ruby Wax 獨角戲)", year: 1986, role: "導演 (愛丁堡藝術節)", type: "stage" },

      // ---- 1987 ----
      { tag: "Dont Miss Wax", label: "《Don't Miss Wax》(Ruby Wax 深夜脫口秀)", year: 1987, role: "共同編劇 (第一季)", type: "tv" },


      // ---- 1988 ----
      { tag: "True Stories", label: "《True Stories》", year: 1988, role: "旁白 (紀錄片單集)", type: "voice" },
      { tag: "Late Show", label: "The Late Show: 'Seven Daily Sins'", year: 1988, role: "演出 (BBC)", type: "tv" },
      { tag: "Peace of Brest", label: "The Peace of Brest(Mikhail Shatrov 作)", year: 1988, role: "現場同步口譯 (Lyric Hammersmith・全俄語卡司演出)", type: "performance" },
      { tag: "Die Hard", label: "《終極警探》", year: 1988, role: "Hans Gruber (公認的電影出道作)", type: "film", awards: AWARDS_BY_WORK["Die Hard"] },

      // ---- 1989 ----
      { tag: "The January Man", label: "《耀武揚威》", year: 1989, role: "Ed", type: "film" },
      { tag: "Revolutionary Witness", label: "《Revolutionary Witness》", year: 1989, role: "Jacques Roux ('The Preacher' 單集・BBC TV 短片)", type: "tv" },
      { tag: "Spirit of Man", label: "ScreenPlay: The Spirit of Man", year: 1989, role: "Israel Yates ('From Sleep and Shadow' 單集・BBC TV)", type: "tv" },
      { tag: "Benefactors", label: "《Benefactors》", year: 1989, role: "Colin (Theatre Night, S4.E6・BBC TV)", type: "tv" },
      { tag: "A Little Like Drowning", label: "A Little Like Drowning", year: 1989, role: "Alfredo (BBC Radio 廣播劇・Anthony Minghella 編劇)", type: "voice" },
      { tag: "Trick to Catch", label: "A Trick to Catch the Old One(Middleton 作)", year: 1989, role: "Theodorus Witgood (BBC Radio 4)", type: "voice" }
    ]
  },
  {
    id: "1990s", label: "1990s", years: "1990–1999",
    works: [
      { tag: "Quigley Down Under", label: "《捍衛遊俠》", year: 1990, role: "Elliott Marston", type: "film", awards: AWARDS_BY_WORK["Quigley Down Under"] },
      { tag: "Closet Land", label: "《叛國作家》", year: 1991, role: "The Interrogator", type: "film" },
      { tag: "Truly Madly Deeply", label: "《人鬼未了情》", year: 1991, role: "Jamie", type: "film", awards: AWARDS_BY_WORK["Truly Madly Deeply"] },
      { tag: "Robin Hood", label: "《俠盜王子羅賓漢》", year: 1991, role: "Sheriff of Nottingham", type: "film", awards: AWARDS_BY_WORK["Robin Hood"] },
      { tag: "Tango at the End of Winter", label: "《冬末探戈》", year: 1991, role: "Sei (蜷川幸雄執導・愛丁堡藝術節 → Piccadilly Theatre, West End・舞台)", type: "stage" },
      { tag: "Close My Eyes", label: "《閉上我的眼睛》", year: 1991, role: "Sinclair Bryant", type: "film", awards: AWARDS_BY_WORK["Close My Eyes"] },
      { tag: "Tubular Bells II", label: "Tubular Bells II", year: 1992, role: "司儀(Mike Oldfield 音樂專輯)", type: "voice" },
      { tag: "Bob Roberts", label: "《天生贏家》", year: 1992, role: "Lukas Hart III", type: "film" },
      { tag: "Hamlet", label: "Hamlet", year: 1992, role: "Hamlet (Riverside Studios・Robert Sturua 執導・舞台)", type: "stage" },
      { tag: "Wax Acts", label: "Wax Acts(Ruby Wax 獨角戲)", year: 1992, role: "導演 (Globe Theatre, West End → 巡演)", type: "stage" },
      { tag: "All Day Breakfast", label: "《Victoria Wood's All Day Breakfast》", year: 1992, role: "本人/客串 (BBC・耶誕特輯)", type: "tv" },
      { tag: "Fallen Angels", label: "《墮落天使》", year: 1993, role: "Dwight Billings (Showtime 選集・'Murder, Obliquely' 單集)", type: "tv" },
      { tag: "Mesmer", label: "《瘋狂遊戲 Mesmer》", year: 1994, role: "Franz Mesmer", type: "film", awards: AWARDS_BY_WORK["Mesmer"] },
      { tag: "The Winter Guest Play", label: "The Winter Guest (《冬天的訪客》原著舞台劇)", year: 1995, role: "導演 (West Yorkshire Playhouse → Almeida Theatre)", type: "stage" },
      { tag: "An Awfully Big Adventure", label: "《新愛情樂園》", year: 1995, role: "P.L. O'Hara", type: "film" },
      { tag: "Refuse to Dance", label: "Charlie Dore - Refuse to Dance", year: 1995, role: "聲音演出 (《Things Change》)", type: "voice" },
      { tag: "Lumière and Company", label: "《Lumière and Company》", year: 1995, role: "本人 (John Boorman 片段)", type: "self" },
      { tag: "Sense and Sensibility", label: "《理性與感性》", year: 1995, role: "布蘭登上校", type: "film", awards: AWARDS_BY_WORK["Sense and Sensibility"] },
      { tag: "Rasputin", label: "《俄宮奸雄 Rasputin》", year: 1996, role: "Grigori Rasputin (HBO TV)", type: "film", awards: AWARDS_BY_WORK["Rasputin"] },
      { tag: "Michael Collins", label: "《豪情本色》", year: 1996, role: "Éamon de Valera", type: "film", awards: AWARDS_BY_WORK["Michael Collins"] },
      { tag: "Space Bar", label: "The Space Bar", year: 1997, role: "My Parker / Ty Parker (遊戲配音)", type: "voice" },
      { tag: "The Winter Guest", label: "《冬天的訪客》", year: 1997, role: "導演 / 共同編劇", type: "film", awards: AWARDS_BY_WORK["The Winter Guest"] },
      { tag: "Take Me With You", label: "Take Me With You(《冬天的訪客》片尾曲)", year: 1997, role: "作詞 (Elizabeth Fraser 演唱・Michael Kamen 作曲)", type: "voice" },
      { tag: "The Directors", label: "《The Directors》", year: 1997, role: "本人 (紀錄片系列單集)", type: "self" },
      { tag: "Judas Kiss", label: "《猶大之吻》", year: 1998, role: "Detective David Friedman", type: "film" },
      { tag: "Dark Harbor", label: "《惡夜謀殺》", year: 1998, role: "David Weinberg", type: "film" },
      { tag: "Antony and Cleopatra 1998", label: "Antony and Cleopatra", year: 1998, role: "Mark Antony (National Theatre – Olivier・與 Helen Mirren 合演・舞台)", type: "stage" },
      { tag: "Dogma", label: "《怒犯天條》", year: 1999, role: "Metatron", type: "film", awards: AWARDS_BY_WORK["Dogma"] },
      { tag: "Galaxy Quest", label: "《驚爆銀河系》", year: 1999, role: "Alexander Dane", type: "film", awards: AWARDS_BY_WORK["Galaxy Quest"] }
    ]
  },
  {
    id: "2000s", label: "2000s", years: "2000–2009",
    works: [
      { tag: "Eco-Challenge", label: "《Eco-Challenge Argentina》", year: 2000, role: "旁白 (Discovery Channel)", type: "voice" },
      { tag: "Texas In Demand", label: "Texas - In Demand", year: 2000, role: "MV 演出 (Sharleen Spiteri)", type: "voice" },
      { tag: "Help Im a Fish", label: "《救命呀!我是一隻魚》", year: 2000, role: "Joe (配音)", type: "film" },
      { tag: "Victoria Wood", label: "《Victoria Wood with All the Trimmings》", year: 2000, role: "Capt. George Fallon (BBC One)", type: "tv" },
      { tag: "Babitsky's War", label: "《Babitsky's War》", year: 2000, role: "旁白 (紀錄片)", type: "voice" },
      { tag: "Blow Dry", label: "《大放異彩》", year: 2001, role: "Phil Allen", type: "film" },
      { tag: "Amnesty 2001", label: "《We Know Where You Live. Live!》", year: 2001, role: "Four Yorkshiremen (Amnesty 40 週年・Wembley)", type: "performance" },
      { tag: "Play", label: "《Play》", year: 2001, role: "Man (Beckett on Film 短片)", type: "film" },
      { tag: "The Search for John Gissing", label: "《尋找約翰·吉辛》", year: 2001, role: "John Gissing", type: "film" },
      { tag: "Willows", label: "《Willows》(又名 Inspiration)", year: 2001, role: "執行監製", type: "tv" },
      { tag: "Private Lives", label: "Private Lives", year: 2001, role: "Elyot Chase (Albery Theatre, West End 2001 → Richard Rodgers Theatre, Broadway 2002)", type: "stage", awards: AWARDS_BY_WORK["Private Lives"] },
      { tag: "Harry Potter", label: "《哈利波特》系列", year: 2001, role: "Severus Snape (2001–2011・共八部電影)", type: "film", awards: AWARDS_BY_WORK["Harry Potter"] },
      { tag: "War Poems", label: "War Poems(Goran Simic 詩作)", year: 2001, role: "朗讀 (四首)", type: "voice" },
      { tag: "When Love Speaks", label: "When Love Speaks", year: 2002, role: "Sonnet 130 朗讀 (CD・並參與 Old Vic 現場音樂會)", type: "voice" },
      { tag: "King of the Hill", label: "King of the Hill", year: 2002, role: "King Philip (配音・Fox・'Joust Like a Woman' 單集)", type: "voice" },
      { tag: "Collateral Damage", label: "Collateral Damage II", year: 2003, role: "朗讀 Robert Byrd 反戰演說 (National Theatre)", type: "voice" },
      { tag: "Standing Room Only", label: "《Standing Room Only》", year: 2003, role: "演出 (短片)", type: "tv" },
      { tag: "Love Actually", label: "《愛是您·愛是我》", year: 2003, role: "Harry", type: "film", awards: AWARDS_BY_WORK["Love Actually"] },
      { tag: "Unforgivable Blackness", label: "《Unforgivable Blackness: The Rise and Fall of Jack Johnson》", year: 2004, role: "旁白 (Ken Burns 執導・PBS 紀錄片)", type: "voice" },
      { tag: "Something the Lord Made", label: "《天賜良醫》", year: 2004, role: "Alfred Blalock (HBO TV)", type: "film", awards: AWARDS_BY_WORK["Something the Lord Made"] },
      { tag: "Peace One Day", label: "《Peace One Day》", year: 2004, role: "本人 (紀錄片)", type: "self" },
      { tag: "My Name Is Rachel Corrie", label: "My Name Is Rachel Corrie", year: 2005, role: "導演 / 共同編劇 (Royal Court → Off-Broadway)", type: "stage", awards: AWARDS_BY_WORK["My Name Is Rachel Corrie"] },
      { tag: "Hitchhiker's Guide", label: "《星際大奇航》", year: 2005, role: "Marvin (配音)", type: "film" },
      { tag: "Snow Cake", label: "《雪季過客》", year: 2006, role: "Alex Hughes", type: "film", awards: AWARDS_BY_WORK["Snow Cake"] },
      { tag: "Perfume", label: "《香水》", year: 2006, role: "Antoine Richis", type: "film" },
      { tag: "Kings Head Maverick", label: "《The King's Head: A Maverick in London》", year: 2006, role: "本人 (紀錄片)", type: "self" },
      { tag: "Ground Beneath Her Feet", label: "The Ground Beneath Her Feet(Salman Rushdie 原著)", year: 2007, role: "旁白 (Manchester International Festival・舞台化演出)", type: "performance" },
      { tag: "Nobel Son", label: "《諾貝爾獎得主的兒子》", year: 2007, role: "Eli Michaelson", type: "film" },
      { tag: "Sweeney Todd", label: "《瘋狂理髮師》", year: 2007, role: "Judge Turpin", type: "film", awards: AWARDS_BY_WORK["Sweeney Todd"] },
      { tag: "Bottle Shock", label: "《戀戀酒鄉》", year: 2008, role: "Steven Spurrier", type: "film", awards: AWARDS_BY_WORK["Bottle Shock"] },
      { tag: "Creditors", label: "Creditors(Strindberg 作)", year: 2008, role: "導演 (Donmar Warehouse・2010 移師 BAM 重演)", type: "stage" },
      { tag: "Harold Pinter Celebration", label: "Harold Pinter: A Celebration", year: 2009, role: "演出 (National Theatre – Olivier・舞台)", type: "stage" }
    ]
  },
  {
    id: "2010s", label: "2010s", years: "2010–2016",
    works: [
      { tag: "For Love of Liberty", label: "《For Love of Liberty: The Story of America's Black Patriots》", year: 2010, role: "旁白", type: "voice" },
      { tag: "Alice in Wonderland", label: "《魔境夢遊》", year: 2010, role: "智蟲 Absolem (配音)", type: "film" },
      { tag: "The Wildest Dream", label: "《最狂野的夢》", year: 2010, role: "Noel Odell (配音・紀錄片)", type: "voice" },
      { tag: "The Song of Lunch", label: "《午餐之歌》", year: 2010, role: "He (BBC TV)", type: "tv" },
      { tag: "John Gabriel Borkman", label: "John Gabriel Borkman", year: 2010, role: "John Gabriel Borkman (Abbey Theatre, Dublin → BAM, New York・舞台)", type: "stage" },
      { tag: "Audiobook", label: "《曼德拉非洲寓言集》", year: 2010, role: "有聲書", type: "voice", awards: AWARDS_BY_WORK["Audiobook"] },
      { tag: "Arena 2010", label: "《Arena》", year: 2010, role: "Various characters (BBC 紀錄片系列・1 集)", type: "tv" },
      { tag: "The Boy in the Bubble", label: "《泡泡男孩》", year: 2011, role: "旁白 (動畫短片)", type: "voice" },
      { tag: "Little Voice Big Mountain", label: "《Little Voice, Big Mountain》", year: 2011, role: "旁白 (紀錄短片・尼泊爾首屆全國青年辯論賽與五位弱勢學童的故事)", type: "voice" },
      { tag: "Portraits in Dramatic Time", label: "Portraits in Dramatic Time", year: 2011, role: "Self (視覺藝術短片・林肯中心展出)", type: "self" },
      { tag: "Seminar", label: "Seminar", year: 2011, role: "Leonard (Broadway, John Golden Theatre)", type: "stage", awards: AWARDS_BY_WORK["Seminar"] },
      { tag: "Falls the Shadow", label: "《Falls the Shadow: The Life and Times of Athol Fugard》", year: 2012, role: "本人 (紀錄片)", type: "self" },
      { tag: "Gambit", label: "《冤家偷很大》", year: 2012, role: "Lord Lionel Shahbandar", type: "film" },
      { tag: "BAM150", label: "《BAM150》", year: 2012, role: "本人 (紀錄片)", type: "film" },
      { tag: "Muse of Fire", label: "《Muse of Fire》", year: 2013, role: "本人 (紀錄片)", type: "film" },
      { tag: "The Butler", label: "《白宮第一管家》", year: 2013, role: "Ronald Reagan", type: "film", awards: AWARDS_BY_WORK["The Butler"] },
      { tag: "A Promise", label: "《愛的承諾》", year: 2013, role: "Karl Hoffmeister", type: "film", awards: AWARDS_BY_WORK["A Promise"] },
      { tag: "CBGB", label: "《龐克地下城》", year: 2013, role: "Hilly Kristal", type: "film" },
      { tag: "Dust", label: "《Dust》", year: 2013, role: "Todd (短片)", type: "tv" },
      { tag: "A Little Chaos", label: "《美人情園 A Little Chaos》", year: 2014, role: "路易十四 / 導演 / 共同編劇", type: "film" },
      { tag: "Texas Start A Family", label: "Texas - Start A Family", year: 2015, role: "聲音 / MV 演出 (與 Sharleen Spiteri 再度合作)", type: "voice" },
      { tag: "Eye in the Sky", label: "《天眼行動》", year: 2015, role: "Lt. Gen. Frank Benson (最後真人演出・遺作)", type: "film", awards: AWARDS_BY_WORK["Eye in the Sky"] },
      { tag: "This Tortoise Could Save a Life", label: "《This Tortoise Could Save a Life》", year: 2015, role: "旁白 (公益短片・難民募款)", type: "voice" },
      { tag: "Alice 2", label: "《魔境夢遊:時光怪客》", year: 2016, role: "Absolem (配音・遺作)", type: "film" },
      { tag: "Alan documentary", label: "《Alan》紀錄片", year: 2016, role: "本人 (2007 年造訪喬治亞紀錄片・2016 年過世後發表)", type: "self" }
    ]
  }
];

const WORK_KEYWORDS = {
"Die Hard": ["die hard", "終極警探", "gruber"],
  "Les Liaisons Dangereuses": ["liaisons", "valmont", "危險關係", "merteuil"],
  "Sherlock Holmes": ["sherlock", "holmes", "福爾摩斯", "偵探"],
  "Robin Hood": ["robin hood", "sheriff", "nottingham", "俠盜王子", "羅賓漢"],
  "Truly Madly Deeply": ["truly madly", "人鬼未了情"],
  "Sense and Sensibility": ["sense and sensibility", "sense & sensibility", "brandon", "理性與感性", "dashwood"],
  "The Barchester Chronicles": ["barchester", "slope", "巴切斯特"],
  "Tango at the End of Winter": ["tango at the end", "冬末探戈", "ninagawa", "蜷川"],
  "A Little Like Drowning": ["a little like drowning", "drowning", "alfredo", "minghella"],
  "Romeo and Juliet": ["Tybalt", "提伯爾特", "羅密歐與茱麗葉"],
  "Carnation Gang": ["carnation gang"],
  "When We Dead Awaken": ["when we dead awaken", "rubek"],
  "Spirit of Man": ["spirit of man", "israel yates", "screenplay bbc"],
  "Space Bar": ["space bar", "ty parker", "my parker", "boffo"],
  "Hamlet": ["hamlet", "哈姆雷特"],
  "Antony and Cleopatra 1978": ["antony and cleopatra", "cleopatra", "peter brook", "alan howard", "glenda jackson"],
  "Antony and Cleopatra 1998": ["antony and cleopatra", "mark antony", "helen mirren", "national theatre", "olivier theatre"],
  "Mesmer": ["mesmer", "瘋狂遊戲"],
  "Lumière and Company": ["lumière and company", "lumiere and company", "boorman", "電影誕生", "百年"],
  "Arena 2010": ["arena 2010", "arena bbc"],
  "The Winter Guest Play": ["冬天的訪客》舞台劇", "west yorkshire playhouse"],
  "The Winter Guest": ["winter guest", "冬天的訪客", "sharman macdonald"],
  "Rasputin": ["rasputin", "俄宮奸雄"],
  "Michael Collins": ["michael collins", "de valera", "豪情本色", "valera"],
  "Galaxy Quest": ["galaxy quest", "驚爆銀河系"],
  "Gambit": ["gambit", "冤家偷很大"],
  "Dogma": ["dogma", "怒犯天條", "metatron"],
  "Harry Potter": ["harry potter", "snape", "石內卜", "哈利波特", "hogwarts", "severus", "potter"],
  "Love Actually": ["love actually", "愛是您", "愛是我"],
  "Something the Lord Made": ["something the lord", "blalock", "天賜良醫"],
  "My Name Is Rachel Corrie": ["rachel corrie", "瑞秋·科里", "corrie"],
  "Snow Cake": ["snow cake", "雪季過客", "wawa"],
  "Perfume": ["perfume", "香水", "grenouille"],
  "Sweeney Todd": ["sweeney todd", "turpin", "瘋狂理髮師", "sondheim"],
  "Nobel Son": ["nobel son", "諾貝爾", "michaelson"],
  "Bottle Shock": ["bottle shock", "戀戀酒鄉", "spurrier", "napa"],
  "Creditors": ["creditors", "strindberg", "債主"],
  "John Gabriel Borkman": ["borkman", "john gabriel", "博克曼"],
  "Seminar": ["seminar", "研討會", "rebeck", "leonard"],
  "A Little Chaos": ["little chaos", "美人情園", "versailles", "louis xiv"],
  "Wetherby": ["wetherby"],
  "Dont Miss Wax": ["don't miss wax", "dont miss wax"],
  "For Love of Liberty": ["for love of liberty", "black patriots"],
  "Little Voice Big Mountain": ["little voice, big mountain", "little voice big mountain"],
  "Falls the Shadow": ["falls the shadow", "athol fugard", "fugard"],
  "CBGB": ["cbgb", "龐克地下城", "hilly kristal", "punk"],
  "A Promise": ["a promise", "承諾", "hoffmeister"],
  "The Butler": ["the butler", "白宮第一管家", "reagan"],
  "Eye in the Sky": ["eye in the sky", "天眼行動", "benson"],
  "Alan documentary": ["alan documentary", "giga agladze", "tbilisi", "robert sturua", "第比利斯", "喬治亞"],
  "Private Lives": ["private lives", "私生活", "elyot", "coward", "lindsay duncan"],
  "Quigley Down Under": ["quigley", "捍衛遊俠", "marston"],
  "Mephisto": ["mephisto", "hofgen", "barbican"],
  "As You Like It": ["as you like it", "jaques", "stratford"],
  "Bob Roberts": ["bob roberts", "tim robbins", "天生贏家"],
  "An Awfully Big Adventure": ["awfully big adventure", "新愛情樂園", "o'hara", "bainbridge"],
  "Closet Land": ["closet land", "叛國作家", "interrogator"],
  "Close My Eyes": ["close my eyes", "閉上我的眼睛", "sinclair", "poliakoff"],
  "Audiobook": ["audiobook", "有聲書", "mandela", "非洲寓言" ],
  "Play": ["beckett on film", "beckett"],
  "Texas In Demand": ["in demand", "texas - in demand"],
  "Texas Start A Family": ["start a family"],
  "Refuse to Dance": ["refuse to dance", "charlie dore"],
  "This Tortoise Could Save a Life": ["tortoise", "難民募款", "save the children"],
  "Amnesty 2001": ["we know where you live", "four yorkshiremen", "amnesty international", "amnesty 40"]
};

const SEARCH_ALIASES = [
  ["rca", "royal college of art"],
  ["rada", "royal academy of dramatic art"],
  ["rsc", "royal shakespeare company", "royal shakespeare"],
  ["bbc", "british broadcasting"],
  ["npr", "national public radio"],
  ["hbo", "home box office"],
  ["ew", "entertainment weekly"],
  ["nyt", "new york times"],
  ["la times", "los angeles times", "洛杉磯時報"],
  ["royal court", "皇家宮廷劇院"],

  ["金球", "golden globe", "金球獎"],
  ["艾美", "emmy", "primetime emmy", "艾美獎"],
  ["sag", "screen actors guild", "美國演員工會獎"],
  ["bafta", "british academy", "英國電影學院獎", "bafta scotland"],
  ["olivier", "奧利佛", "olivier award"],
  ["tony", "東尼", "東尼獎", "tony award"],
  ["獲獎", "won", "✓"],
  ["提名", "nominated", "nom", "☐"],
  ["威尼斯", "venice", "venice film festival"],
  ["seattle international", "西雅圖影展"],
  ["montreal", "蒙特婁影展"],
  ["audie", "audie award"],
 
  
  ["艾瑪", "emma thompson", "艾瑪·湯普森", "湯普森"],
  ["雪歌妮", "sigourney weaver", "sigourney", "雪歌妮·薇佛"],
  ["麥可·肯門", "michael kamen", "kamen"],
  ["艾倫", "alan rickman", "rickman"],
  ["蜷川", "ninagawa", "蜷川幸雄"],
  ["李安", "ang lee", "sense and sensibility", "sense & sensibility", "理性與感性", "飲食男女", "台灣", "臺灣", "Taiwan", "Taiwanese"],

  ["return of the native", "thomas hardy", "還鄉", "audible","湯瑪士哈代"],
  ["die hard", "終極警探"],
  ["quigley down under", "捍衛遊俠"],
  ["truly madly deeply", "人鬼未了情"],
  ["robin hood", "俠盜王子羅賓漢", "羅賓漢"],
  ["close my eyes", "閉上我的眼睛"],
  ["closet land", "叛國作家"],
  ["bob roberts", "天生贏家"],
  ["mesmer", "瘋狂遊戲"],
  ["an awfully big adventure", "新愛情樂園"],
  ["sense and sensibility", "理性與感性"],
  ["rasputin", "俄宮奸雄", "拉斯普丁", "撒旦帝國"],
  ["michael collins", "豪情本色"],
  ["winter guest", "冬天的訪客"],
  ["dogma", "怒犯天條"],
  ["galaxy quest", "驚爆銀河系"],
  ["blow dry", "大放異彩"],
  ["harry potter", "哈利波特"],
  ["love actually", "愛是您·愛是我", "愛是您", "愛是我"],
  ["something the lord made", "天賜良醫"],
  ["hitchhiker's guide", "星際大奇航"],
  ["my name is rachel corrie", "瑞秋·科里"],
  ["snow cake", "雪季過客"],
  ["perfume", "香水"],
  ["sweeney todd", "瘋狂理髮師"],
  ["nobel son", "諾貝爾獎得主的兒子"],
  ["bottle shock", "戀戀酒鄉"],
  ["alice in wonderland", "魔境夢遊"],
  ["alice through the looking glass", "魔境夢遊:時光怪客"],
  ["song of lunch", "午餐之歌"],
  ["the butler", "白宮第一管家"],
  ["cbgb", "龐克地下城"],
  ["a promise", "愛的承諾"],
  ["a little chaos", "美人情園"],
  ["eye in the sky", "天眼行動"],
  ["barchester chronicles", "巴切斯特傳"],
  ["tango at the end of winter", "冬末探戈"],
  ["les liaisons dangereuses", "危險關係"],
  ["smiley's people", "史邁利的人馬"],
  ["dark harbor", "惡夜謀殺", "弩哥", "Norman Reedus"],
  ["gambit", "冤家偷很大"],
  ["help im a fish", "救命呀！我是一隻魚"],
  ["the january man", "耀武揚威"],
  ["private lives", "私生活"],
  ["fallen angels", "墮落天使"],
  ["snape", "石內卜", "severus snape", "賽佛勒斯"],
  ["布蘭登上校", "colonel brandon", "brandon"],
  ["sheriff of nottingham", "sheriff", "諾丁漢"],
  ["hans gruber", "gruber"],
  ["judge turpin", "turpin"],
  ["metatron", "智蟲 absolem", "absolem"],
  ["路易十四", "louis xiv"],
  ["de valera", "valera"],
  ["valmont", "瓦爾蒙"],
  ["blalock", "天賜良醫"],
  ["benson", "天眼行動"],
  ["reagan", "白宮第一管家"],
  ["hilly kristal", "kristal"],
  ["hoffmeister", "愛的承諾"],
  ["alex hughes", "雪季過客"],
  ["antoine richis", "香水"],
  ["eli michaelson", "諾貝爾"],
  ["spurrier", "戀戀酒鄉"],
  ["slope", "巴切斯特"],
];

const BOOK_SUBCATS = {
  10126: "雜誌",     10127: "雜誌",     10128: "電影書",   10129: "雜誌",
  10130: "電影書",   10131: "電影書",   10132: "電影書",   10133: "繁體書",
  10134: "電影書",   10135: "電影書",   10136: "攝影集",   10137: "朋友回憶",
  10138: "舞台",     10139: "舞台",     10140: "攝影集",   10141: "電影書",
  10142: "電影書",   10143: "繁體書",   10144: "雜誌",     10145: "舞台",
  10146: "繁體書",   10147: "雜誌",     10149: "舞台",     10150: "朋友回憶",
  10151: "朋友回憶", 10152: "電影書",   10153: "電影書",   10154: "電影書",
  10155: "朋友回憶", 10156: "電影書",   10157: "朋友回憶", 10158: "日記",
  10159: "朋友回憶", 10160: "繁體書",   10161: "朋友回憶"
};


const BOOK_SUBCAT_ORDER = ["雜誌", "朋友回憶", "舞台", "電影書", "攝影集", "繁體書", "日記"];

const TAG_CATEGORIES = [
  "圖庫", "哈利波特：艾倫幕後小故事", "哈利波特：J.K.羅琳、小說與編劇", "哈利波特：爛導演大衛葉慈",
  "哈利波特：劇本與刪減片段整理", "哈利波特：合約爭議", "朋友回憶", "我的名字是瑞秋·科里",
  "བོད་ Tibet", "艾倫與台灣", "MV", "個人紀錄片", "有聲書", "訪談摘錄", "書籍&雜誌", "其他資料"
];
  
// Icons from Lucide (lucide.dev), ISC License
const TAG_ICONS = {
  "圖庫": '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-3.09-3.09a2 2 0 0 0-2.82 0L6 21"/></svg>',
  "哈利波特：艾倫幕後小故事": '<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  "哈利波特：J.K.羅琳、小說與編劇": '<svg viewBox="0 0 24 24"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>',
  "哈利波特：爛導演大衛葉慈": '<svg viewBox="0 0 24 24"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"/><path d="m6.2 5.3 3.1 3.9"/><path d="m12.4 3.4 3.1 4"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg>',
  "哈利波特：劇本與刪減片段整理": '<svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>',
  "哈利波特：合約爭議": '<svg viewBox="0 0 24 24"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>',
  "朋友回憶": '<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  "我的名字是瑞秋·科里": '<svg viewBox="0 0 24 24"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
  "བོད་ Tibet": '<svg viewBox="0 0 24 24"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>',
  "艾倫與台灣": '<svg viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  "MV": '<svg viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
  "個人紀錄片": '<svg viewBox="0 0 24 24"><path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>',
  "有聲書": '<svg viewBox="0 0 24 24"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a9 9 0 0 1 18 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>',
  "訪談摘錄": '<svg viewBox="0 0 24 24"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/></svg>',
  "書籍&雜誌": '<svg viewBox="0 0 24 24"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>',
  "其他資料": '<svg viewBox="0 0 24 24"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>'
};

const TYPE_ICON = { film: "🎬", tv: "📺", stage: "🎭", voice: "🎙", performance: "🎵", self: "📽" };

const PERIOD_ERA_LABELS = [
 { id: "all",     label: "全部",     color: "#3C3221" },
 { id: "pre1990", label: "1990 以前", color: "#574328" },
 { id: "1990s",   label: "1990s",    color: "#715630" },
 { id: "2000s",   label: "2000s",    color: "#8C6C39" },
 { id: "2010s",   label: "2010s",    color: "#A48748" },
];


const TYPE_FILTER_OPTIONS = [
  { id: "all",   label: "全部" },
  { id: "film",  label: "電影" },
  { id: "stage", label: "舞台劇" },
  { id: "other", label: "其他" },
];

// 
const TYPE_FILTER_OTHER = ["tv", "performance", "voice", "self"];

const QUICK_LINKS = [
  { label: "Alan Rickman — IMDb", url: "https://www.imdb.com/name/nm0000614/" },
  { label: "BBC Alan Rickman", url: "https://www.bbc.com/search?q=Alan+Rickman" },
  { label: "The Guardian", url: "https://www.theguardian.com/film/alan-rickman" },
  { label: "New York Magazine", url: "https://nymag.com/tags/alan-rickman/" },
  { label: "艾倫·瑞克曼粉絲站", url: "https://www.britbitsandclips.com/" }
];

const SPECIAL_NOTES = [
  {
    tag: "我的名字是瑞秋·科里",
    variant: "green",
    html: `
      <p style="margin:0 0 10px">瑞秋·科里（Rachel Corrie），美國和平運動家。2003 年 3 月 16 日，23 歲的她在加薩走廊身穿亮橘色反光背心，以肉身擋在以色列軍方的裝甲推土機前，抗議其強制拆除巴勒斯坦房屋的軍事行動，隨後被推土機輾壓致死。現場目擊者控訴軍方殺人，以色列官方則認定是一場視線死角造成的意外。</p>
      <p style="margin:0 0 10px">瑞秋死後，她的行動在國際間引發不同政治解讀
。支持巴勒斯坦的人權團體將她視為英雄，並將她站在推土機前的行動與 1989 年天安門六四事件中的「坦克人」相提並論；然而在親以色列的陣營裡，她卻被貼上「恐怖分子的同情者」、「被激進運動利用的天真左派」等標籤。眼看女兒的犧牲被各方簡化成政治象徵，瑞秋的父母決定將她生前從加薩寄回家的電子郵件與書信提供給英國《衛報》刊登，以此還原她最真實的一面。</p>
      <p style="margin:0 0 10px">當艾倫在《衛報》讀到瑞秋留下的文字後，他認為這些文字非常適合改編成舞台劇，於是帶著報紙前往倫敦皇家宮廷劇院，並透過劇院的關係聯繫上《衛報》記者 Katharine Viner。在取得瑞秋家人的同意後，兩人共同整理瑞秋留下的文字，將她的日記、書信與電子郵件改編成舞台劇《我的名字是瑞秋・科里》（My Name Is Rachel Corrie）。</p>
      <div style="background:rgba(79,99,84,0.08);border-left:3px solid var(--color-primary);border-radius:0 6px 6px 0;padding:10px 14px;margin:12px 0;font-style:italic;font-size:13px;color:var(--color-note-text)">
        "We were never going to paint Rachel as a golden saint or sentimentalise her, but we also needed to face the fact that she'd been demonised. We wanted to present a balanced portrait." — Alan Rickman
      </div>
      <p style="margin:0 0 6px">在舞台劇公演期間，艾倫安排瑞秋的家人到倫敦觀看演出。瑞秋的爸爸 Craig Corrie 回憶：</p>
      <div style="background:rgba(79,99,84,0.08);border-left:3px solid var(--color-primary);border-radius:0 6px 6px 0;padding:10px 14px;margin:8px 0 0;font-style:italic;font-size:12.5px;color:var(--color-note-text);line-height:1.75">
        「我們都知道艾倫是一個樂於付出的人，而最重要的是，他總是毫無保留地付出自己。2005 年《我的名字是瑞秋・科里》在倫敦皇家宮廷劇院演出期間，他其實正在拍攝一部電影，但仍然設法兼顧這齣戲的導演工作，以及安排我們一家人第一次前往倫敦觀看演出……隨著時間過去，我們漸漸發現，有些貼心的安排帶著鮮明的艾倫風格。這裡一頓午餐，那裡幾張劇院門票。無論何時，我們受到的都是無比細心而溫暖的照顧，而他其實根本不用做這麼多。」 — Craig Corrie
      </div>
    `
  },
    
 {
    tag: "哈利波特：爛導演大衛葉慈",
    variant: "diary",
    html: `
      <div class="diary-grid">
        <div class="diary-date"><span class="diary-d">25</span><span class="diary-m">NOV 2009</span></div>
        <div class="diary-main">
          <p>凌晨 6 點 15 分接送，前往 Flight Shed……天氣又冷又濕，四處灌風，不過劇組好像離得很遠，所以我和雷夫（佛地魔）可以專心地慢慢琢磨這場戲。大衛・葉慈還是跟以前一樣固執，堅持要讓佛地魔用咒語殺死我。（實在難以理解，尤其讀者肯定會因此氣到抓狂。）不過和雷夫合作真的很棒。</p>
          <p>回到家後，Rima（劇情邏輯高手）說：「他不能用咒語殺你——唯一辦得到的咒語是『啊哇呾喀呾啦』（Avada Kedavra）但它會讓人立刻死亡——那樣你根本來不及演完那場戲。」</p>
          <p class="diary-src">— Madly, Deeply: The Diaries of Alan Rickman</p>
        </div>
      </div>
    `
  },

  {
    tag: "書籍&雜誌",
    variant: "warning",
    html: `
      <div class="special-note__heading">⚠ 避雷警語</div>
      <div style="margin-bottom:6px">千萬不要看記者未經艾倫同意出版、被艾倫稱作垃圾的《Alan Rickman: The Unauthorised Biography》。</div>
      <div style="margin-bottom:6px">還有翻譯錯誤百出、製造的謠言比《Alan Rickman: The Unauthorised Biography》還多的《瘋狂與深情：艾倫．瑞克曼日記絮語》（繁中／朱崇旻、林小綠 譯）。</div>
      <div>避開這兩本書，你就能避開網路上絕大多數的謠言。也盡量不要去看有引用這兩本書當資料來源的網路文章。</div>
    `
  }
];

const BATCH_SIZE = 40;
const YT_HOSTS = ["www.youtube.com", "youtu.be", "youtube.com"];

function sanitizeUrl(url) {
  if (!url) return "";
  let u = url.trim();
  if (!u.startsWith("http")) u = "https://" + u;
  try {
    const p = new URL(u);
    if (!["https:", "http:"].includes(p.protocol)) return "";
    if (YT_HOSTS.includes(p.hostname)) {
      let vid = p.searchParams.get("v");
      if (!vid && p.hostname === "youtu.be") vid = p.pathname.slice(1);
      if (vid) return "https://www.youtube.com/watch?v=" + vid;
    }
    return p.origin + p.pathname + (p.search || "");
  } catch {
    return "";
  }
}

function getYouTubeId(url) {
  try {
    const p = new URL(url);
    if (p.hostname === "youtu.be") return p.pathname.slice(1);
    return p.searchParams.get("v") || null;
  } catch {
    return null;
  }
}

function buildTrigrams(str) {
  const s = str.toLowerCase().replace(/\s+/g, "");
  if (!s) return new Set();
  if (s.length < 3) return new Set(s.split(""));
  const t = new Set();
  for (let i = 0; i <= s.length - 3; i++) t.add(s.slice(i, i + 3));
  return t;
}

function trigramJaccard(a, b) {
  const ta = buildTrigrams(a);
  const tb = buildTrigrams(b);
  if (!ta.size || !tb.size) return 0;
  let inter = 0;
  for (const t of ta) if (tb.has(t)) inter++;
  return inter / (ta.size + tb.size - inter);
}

function isSubseq(q, text) {
  let qi = 0;
  for (let i = 0; i < text.length && qi < q.length; i++) {
    if (text[i] === q[qi]) qi++;
  }
  return qi === q.length;
}

function fuzzyField(q, text, exactW, fuzzyW) {
  if (!text) return 0;
  const t = text.toLowerCase();
  if (t.includes(q)) return exactW;
  const jac = trigramJaccard(q, t);
  if (jac > 0.25) return fuzzyW * jac;
  if (q.length >= 2 && isSubseq(q, t)) return fuzzyW * 0.4;
  return 0;
}

function matchWorkKeywords(work, item) {
  if ((item.excludeFromWork || []).includes(work.tag)) return false;   
  const hay = [item.title, item.subtitle || "", ...(item.tags || [])]
    .join(" ")
    .toLowerCase();
  const keys = WORK_KEYWORDS[work.tag] || [work.tag.toLowerCase()];
  return keys.some((k) => {
    const kLower = k.toLowerCase();
    if (/[^\x00-\x7f]/.test(kLower)) return hay.includes(kLower);
    const escaped = kLower.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp("\\b" + escaped + "\\b", "i");
    return regex.test(hay);
  });
}

function findMatchedWorks(query) {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  return WW_PERIODS
    .flatMap((p) => p.works)
    .filter((work) => {
      const keys = WORK_KEYWORDS[work.tag] || [work.tag.toLowerCase()];
      return (
        keys.some((k) => {
          const kLower = k.toLowerCase();
          return kLower.includes(q) || q.includes(kLower);
        }) ||
        work.label.toLowerCase().includes(q) ||
        work.tag.toLowerCase().includes(q) ||
        (work.role || "").toLowerCase().includes(q)
      );
    });
}

function expandSearchTerms(query) {
  const expanded = new Set([query]);
  if (query.length < 2) return expanded;

  const allGroups = [...Object.values(WORK_KEYWORDS), ...SEARCH_ALIASES];
  for (const group of allGroups) {
    const hit = group.some((k) => {
      const kLower = k.toLowerCase();
      return (
        kLower === query ||
        kLower.includes(query) ||
        (k.length >= 3 && query.includes(kLower))
      );
    });
    if (hit) group.forEach((k) => expanded.add(k.toLowerCase()));
  }
  return expanded;
}

function searchItems(query, items) {
  const q = query.trim().toLowerCase();
  if (!q) return items;

  const YT_KEYWORDS = ["youtube", "yt", "影片", "video"];
  if (YT_KEYWORDS.includes(q)) {
    return items.filter((i) => i.type === "youtube");
  }

  const expandedTerms = expandSearchTerms(q);
  const allWorksFlat = WW_PERIODS.flatMap((p) => p.works);

  return items
    .map((item) => {
      const title = item.title.toLowerCase();
      const subtitle = (item.subtitle || "").toLowerCase();
      const tags = (item.tags || []).join(" ").toLowerCase();
      const url = (item.url || "").toLowerCase();
      const notes = (item.notes || []).join(" ").toLowerCase();

      const matchedWork = allWorksFlat.find((w) => matchWorkKeywords(w, item));
      const awards = matchedWork
        ? (AWARDS_BY_WORK[matchedWork.tag] || []).join(" ").toLowerCase()
        : "";

      let score = 0;
      if (title.includes(q)) score += 20;
      if (subtitle.includes(q)) score += 12;
      if (tags.includes(q)) score += 8;
      if (url.includes(q)) score += 4;
      if (notes.includes(q)) score += 6;
      if (awards.includes(q)) score += 14;

      for (const term of expandedTerms) {
        if (term === q) continue;
        if (title.includes(term)) score += 10;
        if (subtitle.includes(term)) score += 6;
        if (tags.includes(term)) score += 4;
        if (notes.includes(term)) score += 3;
        if (awards.includes(term)) score += 8;
      }

      if (score === 0) {
        score += fuzzyField(q, title, 10, 5);
        score += fuzzyField(q, subtitle, 8, 4);
        score += fuzzyField(q, tags, 5, 3);
        score += fuzzyField(q, awards, 8, 4);
      }

      return { item, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ item }) => item);
}

function sortByYear(items, order) {
  return [...items].sort((a, b) =>
    order === "desc" ? (b.year || 0) - (a.year || 0) : (a.year || 0) - (b.year || 0)
  );
}

/* ---------------------------------------------------------------------
 * Render helpers
 * ------------------------------------------------------------------- */

function renderYouTubeThumb(url) {
  const vid = getYouTubeId(url);
  if (!vid) return null;

  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.className = "card__thumb";

  const img = document.createElement("img");
  img.src = `https://img.youtube.com/vi/${vid}/mqdefault.jpg`;
  img.alt = "YouTube";
  img.loading = "lazy";

  const play = document.createElement("span");
  play.className = "card__thumb-play";
  play.textContent = "▶";
  play.setAttribute("aria-hidden", "true");

  a.append(img, play);
  return a;
}

function renderCard(item) {
  const clean = sanitizeUrl(item.url);
  const type = item.type || "link";
  const tags = item.tags || [];
  const isWW = tags.includes("wordswithalan");

  const visibleTags = tags.filter((t) => {
    if (t === "wordswithalan") return false;
    if (isWW && t === "其他資料") return false;
    return true;
  });

  const card = document.createElement("div");
  card.className = "card" + (isWW ? " card--ww" : "");
  card.setAttribute("role", "listitem");

  if (item.year) {
    const meta = document.createElement("div");
    meta.className = "card__meta";
    const year = document.createElement("span");
    year.className = "card__year";
    year.textContent = String(item.year);
    meta.appendChild(year);
    if (type === "audio") {
      const badge = document.createElement("span");
      badge.style.cssText = "font-size:13px;color:var(--color-muted-text);margin-left:5px";
      badge.textContent = "🎧";
      meta.appendChild(badge);
    }
    card.appendChild(meta);
  }

  if (visibleTags.length > 0) {
    const kicker = document.createElement("div");
    kicker.className = "card__kicker";
    kicker.textContent = visibleTags[0];
    card.appendChild(kicker);
  }

  const title = document.createElement("div");
  title.className = "card__title" + (item.subtitle ? " card__title--with-subtitle" : "");
  title.textContent = item.title;
  card.appendChild(title);

  if (item.subtitle) {
    const subtitle = document.createElement("div");
    subtitle.className = "card__subtitle";
    subtitle.textContent = item.subtitle;
    card.appendChild(subtitle);
  }

  if (item.notes && item.notes.length > 0) {
    item.notes.forEach((note) => {
      const noteEl = document.createElement("div");
      noteEl.className = "card__note";
      noteEl.textContent = note;
      card.appendChild(noteEl);
    });
  }

  if (type === "youtube") {
    const thumb = renderYouTubeThumb(clean);
    if (thumb) card.appendChild(thumb);
  }

  const footer = document.createElement("div");
  footer.className = "card__footer";
  const link = document.createElement("a");
  link.href = clean;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.className = "card__link";
  link.textContent = clean;
  footer.appendChild(link);
  card.appendChild(footer);

  return card;
}

function renderTagListItem(tag, count, isActive, onSelect) {
  const li = document.createElement("li");

  const btn = document.createElement("button");
  btn.className = "tag-item__btn" + (isActive ? " is-active" : "");
  btn.type = "button";

  const icon = document.createElement("span");
  icon.className = "tag-item__icon";
  icon.innerHTML = TAG_ICONS[tag] || "•";
  icon.setAttribute("aria-hidden", "true");

  const label = document.createElement("span");
  label.className = "tag-item__label";
  label.textContent = tag;

  const countEl = document.createElement("span");
  countEl.className = "tag-item__count";
  countEl.textContent = String(count);

  btn.append(icon, label, countEl);
  btn.addEventListener("click", () => onSelect(tag));

  li.appendChild(btn);
  return li;
}

function renderWorkListItem(work, isActive, eraColor, onSelect) {
  const li = document.createElement("li");

  const btn = document.createElement("button");
  btn.className = "work-item__btn" + (isActive ? " is-active" : "");
  btn.type = "button";
  if (isActive) {
    btn.style.borderLeftColor = eraColor;
  }

  const icon = document.createElement("span");
  icon.className = "work-item__icon";
  icon.textContent = TYPE_ICON[work.type] || "▪";

  const body = document.createElement("div");
  body.className = "work-item__body";

  const label = document.createElement("div");
  label.textContent = work.label;
  body.appendChild(label);

  if (work.role) {
    const role = document.createElement("div");
    role.className = "work-item__role";
    role.textContent = work.role;
    body.appendChild(role);
  }

  btn.append(icon, body);

  if (work.year) {
    const year = document.createElement("span");
    year.className = "work-item__year";
    year.textContent = String(work.year);
    btn.appendChild(year);
  }

  btn.addEventListener("click", () => onSelect(work));

  li.appendChild(btn);
  return li;
}

function renderEraPill(era, isActive, onSelect) {
  const btn = document.createElement("button");
  btn.className = "era-pill" + (isActive ? " is-active" : "");
  btn.type = "button";
  btn.textContent = era.label;

  if (isActive) {
    btn.style.background = era.color;
    btn.style.borderColor = era.color;
  } else {
    btn.style.borderColor = "var(--color-border)";
  }

  btn.addEventListener("click", () => onSelect(era.id));
  return btn;
}

function renderQuickLink(link) {
  const a = document.createElement("a");
  a.className = "quick-link";
  a.href = link.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";

  const label = document.createElement("span");
  label.className = "quick-link__label";
  label.textContent = link.label;

  a.appendChild(label);
  return a;
}

function renderRelatedWorkPill(work, onSelect) {
  const btn = document.createElement("button");
  btn.className = "related-work-pill";
  btn.type = "button";
  btn.textContent = work.label;
  btn.addEventListener("click", () => onSelect(work));
  return btn;
}

function renderBookSubcatPill(subcat, count, isActive, onSelect) {
  const btn = document.createElement("button");
  btn.className = "book-subcat-pill" + (isActive ? " is-active" : "");
  btn.type = "button";

  const label = document.createElement("span");
  label.textContent = subcat || "全部";

  const countEl = document.createElement("span");
  countEl.className = "book-subcat-pill__count";
  countEl.textContent = `(${count})`;

  btn.append(label, countEl);
  btn.addEventListener("click", () => onSelect(subcat));
  return btn;
}

function renderSpecialNote(note) {
  const wrap = document.createElement("div");
  wrap.className = `special-note special-note--${note.variant}`;
  wrap.innerHTML = note.html;
  return wrap;
}

/* ---------------------------------------------------------------------
 * State
 * ------------------------------------------------------------------- */

const state = {
  items: [],
  sidebarView: "tag",
  selectedTag: null,
  selectedEra: "all",
  selectedWork: null,
  searchQuery: "",
  bookSubcat: null,
  sortOrder: "asc",
  displayCount: BATCH_SIZE,
  sidebarOpen: window.innerWidth > 768,
  fontScale: 1,
  hintSeen: false,
  selectedType: "all",
};

const listeners = new Set();

function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function notify() {
  listeners.forEach((fn) => fn());
}

function setState(partial) {
  Object.assign(state, partial);
  notify();
}


function switchSidebarView(view) {
  setState({
    sidebarView: view,
    selectedTag: null,
    bookSubcat: null,
    selectedWork: null,
    selectedEra: "all",
    selectedType: "all",
    searchQuery: "",
    displayCount: BATCH_SIZE,
  });
}

function computeTagCounts(items) {
  const counts = {};
  items.forEach((item) => {
    const tags = item.tags || [];
    const isWW = tags.includes("wordswithalan");
    tags
      .filter((t) => t !== "wordswithalan")
      .forEach((t) => {
        if ((t === "其他資料" || t === "朋友回憶") && isWW) return;
        counts[t] = (counts[t] || 0) + 1;
      });
  });
  return counts;
}

function computeDisplayedItems() {
  const { items, searchQuery, sidebarView, selectedTag, selectedWork, selectedEra, bookSubcat } = state;

  if (searchQuery.trim()) {
    return searchItems(searchQuery, items);
  }

  let base = [...items];

  if (sidebarView === "tag" && selectedTag) {
    base = base.filter((i) => (i.tags || []).includes(selectedTag));
    if (selectedTag === "其他資料" || selectedTag === "朋友回憶") {
      base = base.filter((i) => !(i.tags || []).includes("wordswithalan"));
    }

    if (selectedTag === "書籍&雜誌" && bookSubcat) {
      base = base.filter((i) => BOOK_SUBCATS[i.id] === bookSubcat);
    }
  } else if (sidebarView === "work") {
    if (selectedWork) {
      base = base.filter((i) => matchWorkKeywords(selectedWork, i));
    } else if (selectedEra !== "all") {
      const period = WW_PERIODS.find((p) => p.id === selectedEra);
      const works = period ? period.works : [];
      base = base.filter((i) => works.some((w) => matchWorkKeywords(w, i)));
    } else {
      // 「作品」分頁底下的「全部資料」：只顯示有對應到任一作品的資料
      const allWorks = WW_PERIODS.flatMap((p) => p.works);
      base = base.filter((i) => allWorks.some((w) => matchWorkKeywords(w, i)));
    }
  }

// 作品類型（work 檢視）
if (sidebarView === "work" && state.selectedType !== "all") {
  const selectedType = state.selectedType;
  const allWorks = WW_PERIODS.flatMap((p) => p.works);
  base = base.filter((item) => {
    const matchedWorks = allWorks.filter((w) => matchWorkKeywords(w, item));
    if (matchedWorks.length === 0) return false;
    return matchedWorks.some((w) =>
      selectedType === "other"
        ? TYPE_FILTER_OTHER.includes(w.type)
        : w.type === selectedType
    );
  });
}


  return base;
}

function computeSortedItems(displayed) {
  if (state.searchQuery.trim()) return displayed;
  return sortByYear(displayed, state.sortOrder);
}

function computeEraWorks() {
  if (state.selectedEra === "all") return WW_PERIODS.flatMap((p) => p.works);
  const period = WW_PERIODS.find((p) => p.id === state.selectedEra);
  return period ? period.works : [];
}

function computeActiveLabel() {
  const { searchQuery, sidebarView, selectedTag, selectedWork, selectedEra, selectedType } = state;

  if (searchQuery.trim()) return "搜尋:" + searchQuery;
  if (sidebarView === "tag" && selectedTag) return selectedTag;
  if (sidebarView === "work" && selectedWork) return selectedWork.label;

  if (sidebarView === "work" && (selectedEra !== "all" || selectedType !== "all")) {
    const eraPart = selectedEra !== "all"
      ? (() => {
          const p = WW_PERIODS.find((x) => x.id === selectedEra);
          return p ? `${p.label} (${p.years})` : null;
        })()
      : null;
    const typePart = selectedType !== "all"
      ? (TYPE_FILTER_OPTIONS.find((t) => t.id === selectedType) || {}).label
      : null;
    return [eraPart, typePart].filter(Boolean).join(" · ") || null;
  }

  return null;
}

/* ---------------------------------------------------------------------
 * Main
 * ------------------------------------------------------------------- */

(function () {
  const el = {
    loader: document.getElementById("loader"),
    sidebar: document.getElementById("sidebar"),
    sidebarToggle: document.getElementById("sidebar-toggle"),
    tabBtns: document.querySelectorAll(".tab-btn"),
    viewTag: document.getElementById("view-tag"),
    viewWork: document.getElementById("view-work"),
    quickLinks: document.getElementById("quick-links"),
    tagList: document.getElementById("tag-list"),
    eraFilter: document.getElementById("era-filter"),
    workList: document.getElementById("work-list"),
    workListLabel: document.getElementById("work-list-label"),
    workListLabelText: document.getElementById("work-list-label-text"),
    workListCount: document.getElementById("work-list-count"),
    searchInput: document.getElementById("search-input"),
    searchClear: document.getElementById("search-clear"),
    fontDecrease: document.getElementById("font-decrease"),
    fontIncrease: document.getElementById("font-increase"),
    relatedWorksBar: document.getElementById("related-works-bar"),
    mobileHint: document.getElementById("mobile-hint"),
    contentTitle: document.getElementById("content-title"),
    contentSubtitle: document.getElementById("content-subtitle"),
    sortOrder: document.getElementById("sort-order"),
    specialNote: document.getElementById("special-note"),
    bookSubcats: document.getElementById("book-subcats"),
    awardsPanel: document.getElementById("awards-panel"),
    featPanel: document.getElementById("feat-panel"),
    cardGrid: document.getElementById("card-grid"),
    emptyState: document.getElementById("empty-state"),
    sentinel: document.getElementById("sentinel"),
    loadingMore: document.getElementById("loading-more"),
    typeFilter: document.getElementById("type-filter"),
    content: document.getElementById("content"),
  };

  function setupSidebarPhoto() {
    const photo = document.querySelector(".sidebar-photo");
    const caption = document.querySelector(".sidebar-photo-caption");
    if (!photo) return;

    const hide = () => {
      photo.style.display = "none";
      if (caption) caption.style.display = "none";
    };

    // If the image already failed (or finished with 0 dimensions) before this
    // listener was attached, the "error" event will never fire — check
    // img.complete/naturalWidth as a fallback for that race condition.
    if (photo.complete) {
      if (photo.naturalWidth === 0) hide();
    } else {
      photo.addEventListener("error", hide);
      photo.addEventListener("load", () => {
        if (photo.naturalWidth === 0) hide();
      });
    }
  }

  state.items = ALL_DATA;
  applySidebarVisibility();
  setupSidebarPhoto();

  window.setTimeout(() => {
    el.loader.classList.add("is-hidden");
  }, 300);

  subscribe(render);
  render();

  el.sidebarToggle.addEventListener("click", () => {
    setState({ sidebarOpen: !state.sidebarOpen, hintSeen: true });
    applySidebarVisibility();
  });

  el.tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      switchSidebarView(btn.dataset.view);
      scrollContentToTop();
    });
  });

el.searchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  const update = { searchQuery: value, displayCount: BATCH_SIZE };
  update.selectedTag = null;
  update.bookSubcat = null;
  update.selectedWork = null;
  update.selectedEra = "all";
  update.selectedType = "all";
  setState(update);
  scrollContentToTop();
});

   el.searchClear.addEventListener("click", () => {
    setState({ searchQuery: "", displayCount: BATCH_SIZE });
    el.searchInput.value = "";
    el.searchInput.focus();
    scrollContentToTop();
  });

   el.sortOrder.addEventListener("change", (e) => {
    setState({ sortOrder: e.target.value, displayCount: BATCH_SIZE });
    scrollContentToTop();
  });

  el.fontDecrease.addEventListener("click", () => {
    setState({ fontScale: Math.max(0.8, +(state.fontScale - 0.1).toFixed(2)) });
    applyFontScale();
  });

  el.fontIncrease.addEventListener("click", () => {
    setState({ fontScale: Math.min(2.0, +(state.fontScale + 0.1).toFixed(2)) });
    applyFontScale();
  });

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        const total = computeSortedItems(computeDisplayedItems()).length;
        if (state.displayCount < total) {
          setState({ displayCount: Math.min(state.displayCount + BATCH_SIZE, total) });
        }
      }
    },
    { threshold: 0.1 }
  );
  observer.observe(el.sentinel);

  function applySidebarVisibility() {
    el.sidebar.classList.toggle("is-collapsed", !state.sidebarOpen);
    el.sidebarToggle.setAttribute("aria-expanded", String(state.sidebarOpen));
    el.mobileHint.hidden = state.sidebarOpen || state.hintSeen;
  }

 function applyFontScale() {
  const scale = state.fontScale;
const selector = ".content-title,.content-subtitle,.card__title,.card__subtitle,.card__note,.card__kicker,.card__link,.card__year,.special-note,.special-note *,.awards-panel__label,.awards-panel__item,.feat-panel__label,.feat-panel__item,.book-subcat-pill,.book-subcat-pill__count,.empty-state,.loading-more";
  const nodes = el.content.querySelectorAll(selector);
  const reads = [];
  nodes.forEach((node) => {
    let base = node.dataset.baseFs;
    if (base == null || base === "") {
      base = parseFloat(getComputedStyle(node).fontSize);
      node.dataset.baseFs = String(base);
    } else {
      base = parseFloat(base);
    }
    reads.push([node, base]);
  });
  reads.forEach(([node, base]) => {
    node.style.fontSize = (base * scale) + "px";
  });
}

 function scrollContentToTop() {
  if (el.content) {
    el.content.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function scrollWorkListToActive() {
  requestAnimationFrame(() => {
    const activeBtn = el.workList.querySelector(".work-item__btn.is-active");
    const container = el.workList.closest(".sidebar-work-scroll");
    if (!activeBtn || !container) return;
    const btnRect = activeBtn.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const offset = btnRect.top - containerRect.top;
    const target = container.scrollTop + offset - (containerRect.height / 2 - btnRect.height / 2);
    container.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
  });
}

function clearSearchInput() {
  if (state.searchQuery) {
    setState({ searchQuery: "" });
  }
  el.searchInput.value = "";
}

 function selectTag(tag) {
  clearSearchInput();
  const isActive = state.selectedTag === tag;
  setState({
    selectedTag: isActive ? null : tag,
    bookSubcat: null,
    displayCount: BATCH_SIZE,
  });
  scrollContentToTop();
}

function selectEra(eraId) {
clearSearchInput();
setState({ selectedEra: eraId, selectedWork: null, displayCount: BATCH_SIZE });
  scrollContentToTop();
}

function selectWork(work) {
  clearSearchInput();
  const isActive = state.selectedWork && state.selectedWork.tag === work.tag;
  if (isActive) {
    setState({ selectedWork: null, displayCount: BATCH_SIZE });
 } else {
    setState({
      selectedWork: work,
      displayCount: BATCH_SIZE,
    });
  }

  scrollContentToTop();
  scrollWorkListToActive();
}

function selectType(typeId) {
  clearSearchInput();
  setState({ selectedType: typeId, selectedWork: null, displayCount: BATCH_SIZE });
  scrollContentToTop();
}

function selectBookSubcat(subcat) {
  clearSearchInput();
  setState({ bookSubcat: subcat, displayCount: BATCH_SIZE });
  scrollContentToTop();
}

function jumpToWork(work) {
  const era = WW_PERIODS.find((p) => p.works.some((w) => w.tag === work.tag));
  setState({
    sidebarView: "work",
    selectedWork: work,
    selectedEra: era ? era.id : "all",
    selectedTag: null,
    bookSubcat: null,
    searchQuery: "",
    displayCount: BATCH_SIZE,
  });
  el.searchInput.value = "";
  scrollContentToTop();
  scrollWorkListToActive();
}

 function render() {
  renderTabs();
  renderSidebarPanels();
  renderTopbar();
  renderRelatedWorksBar();
  renderContentHeader();
  renderSpecialNotePanel();
  renderBookSubcatsBar();
  renderAwardsPanelSection();
  renderFeaturettePanel();
  renderCards();
  applyFontScale();
}

 function renderTabs() {
    el.tabBtns.forEach((btn) => {
      const active = btn.dataset.view === state.sidebarView;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", String(active));
    });
    el.viewTag.hidden = state.sidebarView !== "tag";
    el.viewWork.hidden = state.sidebarView !== "work";
  }

  function renderSidebarPanels() {
  if (state.sidebarView === "tag") {
    renderQuickLinksList();
    renderTagListPanel();
  } else {
    renderEraFilterPanel();
    renderTypeFilterPanel();   
    renderWorkListPanel();
  }
}

  function renderQuickLinksList() {
    el.quickLinks.innerHTML = "";
    QUICK_LINKS.forEach((link) => {
      el.quickLinks.appendChild(renderQuickLink(link));
    });
  }

  function renderTagListPanel() {
    el.tagList.innerHTML = "";
    const counts = computeTagCounts(state.items);
    TAG_CATEGORIES.forEach((tag) => {
      const isActive = state.selectedTag === tag;
      el.tagList.appendChild(
        renderTagListItem(tag, counts[tag] || 0, isActive, selectTag)
      );
    });
  }

  function renderEraFilterPanel() {
    el.eraFilter.innerHTML = "";
    PERIOD_ERA_LABELS.forEach((era) => {
      const isActive = state.selectedEra === era.id;
      el.eraFilter.appendChild(renderEraPill(era, isActive, selectEra));
    });
  }

  function renderTypeFilterPanel() {
  if (!el.typeFilter) return;
  el.typeFilter.innerHTML = "";
  TYPE_FILTER_OPTIONS.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "type-pill" + (state.selectedType === opt.id ? " is-active" : "");
    btn.type = "button";
    btn.textContent = opt.label;
    btn.addEventListener("click", () => selectType(opt.id));
    el.typeFilter.appendChild(btn);
  });
}

function renderWorkListPanel() {
    el.workList.innerHTML = "";

if (state.selectedEra === "all") {
  el.workListLabelText.textContent = "全部作品";
} else {
  const period = WW_PERIODS.find((p) => p.id === state.selectedEra);
  el.workListLabelText.textContent = (period ? period.label : "") + " 作品";
}

    const allWorks = computeEraWorks();
const works = state.selectedType === "all"
  ? allWorks
  : allWorks.filter(w =>
      state.selectedType === "other"
        ? TYPE_FILTER_OTHER.includes(w.type)
        : w.type === state.selectedType
    );
el.workListCount.textContent = works.length; 

works.forEach((work) => {
      const isActive = state.selectedWork && state.selectedWork.tag === work.tag;
      const period = WW_PERIODS.find((p) => p.works.some((w) => w.tag === work.tag));
      const era = period ? PERIOD_ERA_LABELS.find((e) => e.id === period.id) : null;
      const eraColor = era ? era.color : "var(--color-primary)";
      el.workList.appendChild(renderWorkListItem(work, isActive, eraColor, selectWork));
    });
  }

   function renderTopbar() {
    el.searchClear.hidden = !state.searchQuery.trim();
    el.sortOrder.value = state.sortOrder;
    el.sortOrder.hidden = !!state.searchQuery.trim();
    if (el.searchInput.value !== state.searchQuery) {
      el.searchInput.value = state.searchQuery;
    }
  }
  

 function renderRelatedWorksBar() {
    const query = state.searchQuery.trim();
    const matched = query.length >= 2 ? findMatchedWorks(query) : [];

    if (matched.length === 0) {
      el.relatedWorksBar.hidden = true;
      el.relatedWorksBar.style.display = "none";
      el.relatedWorksBar.innerHTML = "";
      return;
    }

    el.relatedWorksBar.hidden = false;
    el.relatedWorksBar.style.display = "flex";
    el.relatedWorksBar.innerHTML = "";

    const label = document.createElement("span");
    label.className = "related-works-bar__label";
    label.textContent = "相關作品：";
    el.relatedWorksBar.appendChild(label);

    matched.forEach((work) => {
      el.relatedWorksBar.appendChild(renderRelatedWorkPill(work, jumpToWork));
    });
  }

  function renderContentHeader() {
    const activeLabel = computeActiveLabel();

    el.contentTitle.innerHTML = "";
    const fallbackLabel = state.sidebarView === "work" ? "全部作品資料" : "全部資料";
el.contentTitle.appendChild(document.createTextNode(activeLabel || fallbackLabel));

    if (state.sidebarView === "work" && state.selectedWork && state.selectedWork.role) {
      el.contentSubtitle.hidden = false;
      el.contentSubtitle.textContent = state.selectedWork.role;
    } else {
      el.contentSubtitle.hidden = true;
    }
  }

function renderSpecialNotePanel() {
    if (state.searchQuery.trim()) {
      el.specialNote.hidden = true;
      return;
    }
    el.specialNote.innerHTML = "";

    if (state.sidebarView !== "tag" || !state.selectedTag) {
      el.specialNote.hidden = true;
      return;
    }

    const note = SPECIAL_NOTES.find((n) => n.tag === state.selectedTag);
    if (!note) {
      el.specialNote.hidden = true;
      return;
    }

    el.specialNote.hidden = false;
    el.specialNote.appendChild(renderSpecialNote(note));
  }

  function renderBookSubcatsBar() {
    if (state.searchQuery.trim()) {
      el.bookSubcats.hidden = true;
      return;
    }
    el.bookSubcats.innerHTML = "";

    if (state.sidebarView !== "tag" || state.selectedTag !== "書籍&雜誌") {
      el.bookSubcats.hidden = true;
      return;
    }

    el.bookSubcats.hidden = false;
    const allItems = state.items.filter((i) => (i.tags || []).includes("書籍&雜誌"));

    const subcats = [null, ...BOOK_SUBCAT_ORDER];
    subcats.forEach((sub) => {
      const count =
        sub === null
          ? allItems.length
          : allItems.filter((i) => BOOK_SUBCATS[i.id] === sub).length;
      const isActive = state.bookSubcat === sub;
      el.bookSubcats.appendChild(renderBookSubcatPill(sub, count, isActive, selectBookSubcat));
    });
  }

function renderAwardsPanelSection() {
    if (state.searchQuery.trim()) {
      el.awardsPanel.hidden = true;
      return;
    }
    el.awardsPanel.innerHTML = "";

    if (state.sidebarView !== "work" || !state.selectedWork || !state.selectedWork.awards) {
      el.awardsPanel.hidden = true;
      return;
    }

    const awards = state.selectedWork.awards;
    if (!awards || !awards.length) {
      el.awardsPanel.hidden = true;
      return;
    }

    const won = awards.filter(a => a.startsWith("✓"));
    const nom = awards.filter(a => a.startsWith("☐"));

    const label = document.createElement("p");
    label.className = "awards-panel__label";
    label.textContent = "獎項與提名";
    el.awardsPanel.appendChild(label);

    won.forEach(a => {
      const item = document.createElement("div");
      item.className = "awards-panel__item awards-panel__item--won";
      item.textContent = a;
      el.awardsPanel.appendChild(item);
    });

nom.forEach(a => {
      const item = document.createElement("div");
      item.className = "awards-panel__item awards-panel__item--nominated";
      item.textContent = a;
      el.awardsPanel.appendChild(item);
    });

    el.awardsPanel.hidden = false;
  }

  function renderFeaturettePanel() {
    el.featPanel.innerHTML = "";

    // 決定目前對應到哪些作品:
    // 搜尋中 → 用搜尋比對到的作品;否則 → 用作品分頁選取的作品
    let workTags = [];
    const q = state.searchQuery.trim();
    if (q.length >= 2) {
      workTags = findMatchedWorks(q).map((w) => w.tag);
    } else if (state.sidebarView === "work" && state.selectedWork) {
      workTags = [state.selectedWork.tag];
    }

    const entries = [...new Set(workTags.flatMap((t) => FEATURETTES_BY_WORK[t] || []))];

    if (!entries.length) {
      el.featPanel.hidden = true;
      return;
    }

    const label = document.createElement("p");
    label.className = "feat-panel__label";
    label.textContent = "紀錄片&幕後花絮";
    el.featPanel.appendChild(label);

    entries.forEach((a) => {
      const item = document.createElement("div");
      item.className = "feat-panel__item";
      item.textContent = a;
      el.featPanel.appendChild(item);
    });

    el.featPanel.hidden = false;
  }

function renderCards() {
    const displayed = computeDisplayedItems();
    const sorted = computeSortedItems(displayed);
    const visible = sorted.slice(0, state.displayCount);

    el.cardGrid.innerHTML = "";
    visible.forEach((item) => {
      el.cardGrid.appendChild(renderCard(item));
    });

    el.emptyState.hidden = sorted.length !== 0;
if (!el.emptyState.hidden) {
  el.emptyState.textContent =
    state.sidebarView === "work" && state.selectedWork
      ? "此作品暫無收錄資料"
      : "查無符合條件的資料";
}
    el.loadingMore.hidden = state.displayCount >= sorted.length;
  }
})();

