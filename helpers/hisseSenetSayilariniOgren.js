import fs from "fs";

const stocks = [
  // "A1CAP",
  // "ACSEL",
  // "ADEL",
  // "ADESE",
  // "ADGYO",
  // "AEFES",
  // "AFYON",
  // "AGESA",
  // "AGHOL",
  // "AGROT",
  // "AGYO",
  // "AHGAZ",
  // "AHSGY",
  // "AKBNK",
  // "AKCNS",
  // "AKENR",
  // "AKFGY",
  // "AKFYE",
  // "AKGRT",
  // "AKMGY",
  // "AKSA",
  // "AKSEN",
  // "AKSGY",
  // "AKSUE",
  // "AKYHO",
  // "ALARK",
  // "ALBRK",
  // "ALCAR",
  // "ALCTL",
  // "ALFAS",
  // "ALGYO",
  // "ALKA",
  // "ALKIM",
  // "ALKLC",
  // "ALMAD",
  // // "ALTNY",
  // // "ALVES",
  // // "ANELE",
  // // "ANGEN",
  // // "ANHYT",
  // // "ANSGR",
  // // "APBDL",
  // // "APLIB",
  // // "APX30",
  // // "ARASE",
  // // "ARCLK",
  // // "ARDYZ",
  // // "ARENA",
  // // "ARSAN",
  // // "ARTMS",
  // // "ARZUM",
  // // "ASELS",
  // // "ASGYO",
  // // "ASTOR",
  // "ASUZU",
  // "ATAGY",
  // "ATAKP",
  // "ATATP",
  // "ATEKS",
  // "ATLAS",
  // "ATSYH",
  // "AVGYO",
  // "AVHOL",
  // "AVOD",
  // "AVPGY",
  // "AVTUR",
  // "AYCES",
  // "AYDEM",
  // "AYEN",
  // "AYES",
  // "AYGAZ",
  // "AZTEK",
  // "BAGFS",
  // "BAHKM",
  // "BAKAB",
  // "BALAT",
  // "BANVT",
  // "BARMA",
  // "BASCM",
  // "BASGZ",
  // "BAYRK",
  // "BEGYO",
  // "BERA",
  // "BEYAZ",
  // "BFREN",
  // "BIENY",
  // "BIGCH",
  // "BIMAS",
  // "BINBN",
  // "BINHO",
  // "BIOEN",
  // "BIZIM",
  // "BJKAS",
  // "BLCYT",
  // "BMSCH",
  // "BMSTL",
  // "BNTAS",
  // "BOBET",
  // "BORLS",
  // "BORSK",
  // "BOSSA",
  // "BRISA",
  // "BRKO",
  // "BRKSN",
  // "BRKVY",
  // "BRLSM",
  // "BRMEN",
  // "BRSAN",
  // "BRYAT",
  // "BSOKE",
  // "BTCIM",
  // "BUCIM",
  // "BURCE",
  // "BURVA",
  // "BVSAN",
  // "BYDNR",
  // "CANTE",
  // "CASA",
  // "CATES",
  // "CCOLA",
  // "CELHA",
  // "CEMAS",
  // "CEMTS",
  // "CEMZY",
  // "CEOEM",
  // "CGCAM",
  // "CIMSA",
  // "CLEBI",
  // "CMBTN",
  // "CMENT",
  // "CONSE",
  // "COSMO",
  // "CRDFA",
  // "CRFSA",
  // "CUSAN",
  // "CVKMD",
  // "CWENE",
  // "DAGHL",
  // "DAGI",
  // "DAPGM",
  // "DARDL",
  // "DCTTR",
  // "DENGE",
  // "DERHL",
  // "DERIM",
  // "DESA",
  // "DESPC",
  // "DEVA",
  // "DGATE",
  // "DGGYO",
  // "DGNMO",
  // "DIRIT",
  // "DITAS",
  // "DMRGD",
  // "DMSAS",
  // "DNISI",
  // "DOAS",
  // "DOBUR",
  // "DOCO",
  // "DOFER",
  // "DOGUB",
  // "DOHOL",
  // "DOKTA",
  // "DURDO",
  // "DURKN",
  // "DYOBY",
  // "DZGYO",
  // "EBEBK",
  // "ECILC",
  // "ECZYT",
  // "EDATA",
  // "EDIP",
  // "EFORC",
  // "EGEEN",
  // "EGEPO",
  // "EGGUB",
  // "EGPRO",
  // "EGSER",
  // "EKGYO",
  // "EKIZ",
  // "EKOS",
  // "EKSUN",
  // "ELITE",
  // "EMKEL",
  // "EMNIS",
  // "ENERY",
  // "ENJSA",
  // "ENKAI",
  // "ENSRI",
  // "ENTRA",
  // "EPLAS",
  // "ERBOS",
  // "ERCB",
  // "EREGL",
  // "ERSU",
  // "ESCAR",
  // "ESCOM",
  // "ESEN",
  // "ETILR",
  // "ETYAT",
  // "EUHOL",
  // "EUKYO",
  // "EUPWR",
  // "EUREN",
  // "EUYO",
  // "EYGYO",
  // "FADE",
  // "FENER",
  // "FLAP",
  // "FMIZP",
  // "FONET",
  // "FORMT",
  // "FORTE",
  // "FRIGO",
  // "FROTO",
  // "FZLGY",
  // "GARAN",
  // "GARFA",
  // "GEDIK",
  // "GEDZA",
  // "GENIL",
  // "GENTS",
  // "GEREL",
  // "GESAN",
  // "GIPTA",
  // "GLBMD",
  // "GLCVY",
  // "GLDTR",
  // "GLRYH",
  // "GLYHO",
  // "GMSTR",
  // "GMTAS",
  // "GOKNR",
  // "GOLTS",
  // "GOODY",
  // "GOZDE",
  // "GRNYO",
  // "GRSEL",
  // "GRTHO",
  // "GSDDE",
  // "GSDHO",
  // "GSRAY",
  // "GUBRF",
  // "GUNDG",
  // "GWIND",
  // "GZNMI",
  // "HALKB",
  "HALKS",
  "HATEK",
  "HATSN",
  "HDFGS",
  "HEDEF",
  "HEKTS",
  "HKTM",
  "HLGYO",
  "HOROZ",
  "HRKET",
  "HTTBT",
  "HUBVC",
  "HUNER",
  "HURGZ",
  "ICBCT",
  "ICUGS",
  "IDGYO",
  "IEYHO",
  "IHAAS",
  "IHEVA",
  "IHGZT",
  "IHLAS",
  "IHLGM",
  "IHYAY",
  "IMASM",
  "INDES",
  "INFO",
  "INGRM",
  "INTEK",
  "INTEM",
  "INVEO",
  "INVES",
  "IPEKE",
  "ISATR",
  "ISBIR",
  "ISBTR",
  "ISCTR",
  "ISDMR",
  "ISFIN",
  "ISGLK",
  "ISGSY",
  "ISGYO",
  "ISIST",
  "ISKPL",
  "ISKUR",
  "ISMEN",
  "ISSEN",
  "ISYAT",
  "IZENR",
  "IZFAS",
  "IZINV",
  "IZMDC",
  "JANTS",
  "KAPLM",
  "KAREL",
  "KARSN",
  "KARTN",
  "KARYE",
  "KATMR",
  "KAYSE",
  "KBORU",
  "KCAER",
  "KCHOL",
  "KENT",
  "KERVN",
  "KERVT",
  "KFEIN",
  "KGYO",
  "KIMMR",
  "KLGYO",
  "KLKIM",
  "KLMSN",
  "KLNMA",
  "KLRHO",
  "KLSER",
  "KLSYN",
  "KMPUR",
  "KNFRT",
  "KOCMT",
  "KONKA",
  "KONTR",
  "KONYA",
  "KOPOL",
  "KORDS",
  "KOTON",
  "KOZAA",
  "KOZAL",
  "KRDMA",
  "KRDMB",
  "KRDMD",
  "KRGYO",
  "KRONT",
  "KRPLS",
  "KRSTL",
  "KRTEK",
  "KRVGD",
  "KSTUR",
  "KTLEV",
  "KTSKR",
  "KUTPO",
  "KUVVA",
  "KUYAS",
  "KZBGY",
  "KZGYO",
  "LIDER",
  "LIDFA",
  "LILAK",
  "LINK",
  "LKMNH",
  "LMKDC",
  "LOGO",
  "LRSHO",
  "LUKSK",
  "LYDHO",
  "LYDYE",
  "MAALT",
  "MACKO",
  "MAGEN",
  "MAKIM",
  "MAKTK",
  "MANAS",
  "MARBL",
  "MARKA",
  "MARTI",
  "MAVI",
  "MEDTR",
  "MEGAP",
  "MEGAP",
  "MEGMT",
  "MEKAG",
  "MEPET",
  "MERCN",
  "MERIT",
  "MERKO",
  "METRO",
  "METUR",
  "MGROS",
  "MHRGY",
  "MIATK",
  "MMCAS",
  "MNDRS",
  "MNDTR",
  "MOBTL",
  "MOGAN",
  "MPARK",
  "MRGYO",
  "MRSHL",
  "MSGYO",
  "MTRKS",
  "MTRYO",
  "MZHLD",
  "NATEN",
  "NETAS",
  "NIBAS",
  "NTGAZ",
  "NTHOL",
  "NUGYO",
  "NUHCM",
  "OBAMS",
  "OBASE",
  "ODAS",
  "ODINE",
  "OFSYM",
  "ONCSM",
  "ONRYT",
  "OPT25",
  "OPX30",
  "ORCAY",
  "ORGE",
  "ORMA",
  "OSMEN",
  "OSTIM",
  "OTKAR",
  "OTTO",
  "OYAKC",
  "OYAYO",
  "OYLUM",
  "OYYAT",
  "OZATD",
  "OZGYO",
  "OZKGY",
  "OZKGY",
  "OZRDN",
  "OZSUB",
  "OZYSR",
  "PAGYO",
  "PAMEL",
  "PAPIL",
  "PARSN",
  "PASEU",
  "PATEK",
  "PCILT",
  "PEHOL",
  "PEKGY",
  "PENGD",
  "PENTA",
  "PETKM",
  "PETUN",
  "PGSUS",
  "PINSU",
  "PKART",
  "PKENT",
  "PLTUR",
  "PNLSN",
  "PNSUT",
  "POLHO",
  "POLTK",
  "PRDGS",
  "PRKAB",
  "PRKME",
  "PRZMA",
  "PSDTC",
  "PSDTC",
  "PSDTC",
  "PSDTC",
  "PSGYO",
  "QNBFK",
  "QNBTR",
  "QTEMZ",
  "QUAGR",
  "RALYH",
  "RAYSG",
  "REEDR",
  "RGYAS",
  "RNPOL",
  "RODRG",
  "RTALB",
  "RUBNS",
  "RYGYO",
  "RYSAS",
  "SAFKR",
  "SAHOL",
  "SAMAT",
  "SANEL",
  "SANFM",
  "SANKO",
  "SARKY",
  "SASA",
  "SAYAS",
  "SDTTR",
  "SEGMN",
  "SEGYO",
  "SEKFK",
  "SEKUR",
  "SELEC",
  "SELGD",
  "SELVA",
  "SEYKM",
  "SILVR",
  "SISE",
  "SKBNK",
  "SKTAS",
  "SKYLP",
  "SKYMD",
  "SMART",
  "SMRTG",
  "SMRVA",
  "SNGYO",
  "SNICA",
  "SNKRN",
  "SNPAM",
  "SODSN",
  "SOKE",
  "SOKM",
  "SONME",
  "SRVGY",
  "SUMAS",
  "SUNTK",
  "SURGY",
  "SUWEN",
  "TABGD",
  "TARKM",
  "TATEN",
  "TATGD",
  "TAVHL",
  "TBORG",
  "TCELL",
  "TCKRC",
  "TDGYO",
  "TEKTU",
  "TERA",
  "TEZOL",
  "TGSAS",
  "THYAO",
  "TKFEN",
  "TKNSA",
  "TLMAN",
  "TMPOL",
  "TMSN",
  "TNZTP",
  "TOASO",
  "TRCAS",
  "TRGYO",
  "TRILC",
  "TSGYO",
  "TSKB",
  "TSPOR",
  "TTKOM",
  "TTRAK",
  "TUCLK",
  "TUKAS",
  "TUPRS",
  "TUREX",
  "TURGG",
  "TURSG",
  "UFUK",
  "ULAS",
  "ULKER",
  "ULUFA",
  "ULUSE",
  "ULUUN",
  "UNLU",
  "USAK",
  "USDTR",
  "VAKBN",
  "VAKFN",
  "VAKKO",
  "VANGD",
  "VBTYZ",
  "VERTU",
  "VERUS",
  "VESBE",
  "VESTL",
  "VKFYO",
  "VKGYO",
  "VKING",
  "VRGYO",
  "X030S",
  "X100S",
  "XBANA",
  "XBANK",
  "XBLSM",
  "XELKT",
  "XFINK",
  "XGIDA",
  "XGMYO",
  "XHARZ",
  "XHOLD",
  "XILTM",
  "XINSA",
  "XKAGT",
  "XKMYA",
  "XKOBI",
  "XKURY",
  "XMADN",
  "XMANA",
  "XMESY",
  "XSADA",
  "XSANK",
  "XSANT",
  "XSBAL",
  "XSBUR",
  "XSDNZ",
  "XSGRT",
  "XSIST",
  "XSIZM",
  "XSKAY",
  "XSKOC",
  "XSKON",
  "XSPOR",
  "XSTKR",
  "XTAST",
  "XTCRT",
  "XTEKS",
  "XTM25",
  "XTMTU",
  "XTRZM",
  "XTUMY",
  "XU030",
  "XU050",
  "XU100",
  "XUHIZ",
  "XULAS",
  "XUMAL",
  "XUSIN",
  "XUSRD",
  "XUTEK",
  "XUTUM",
  "XYLDZ",
  "XYORT",
  "XYUZO",
  "YAPRK",
  "YATAS",
  "YAYLA",
  "YBTAS",
  "YEOTK",
  "YESIL",
  "YGGYO",
  "YGYO",
  "YIGIT",
  "YKBNK",
  "YKSLN",
  "YONGA",
  "YUNSA",
  "YYAPI",
  "YYLGD",
  "Z30EA",
  "Z30KE",
  "Z30KP",
  "ZEDUR",
  "ZELOT",
  "ZGOLD",
  "ZOREN",
  "ZPBDL",
  "ZPLIB",
  "ZPT10",
  "ZPX30",
  "ZRE20",
  "ZRGYO",
  "ZSR25",
  "ZTM25",
];
for (let stock of stocks) {
  try{
    await handleStock(stock); // Saves the HTML to 'page.html'
  }catch(ex){
    console.log(stock + " error: " + ex)
  }
  
}

async function handleStock(stock) {
  console.log(stock);
  const x = await fetch("https://uzmanpara.milliyet.com.tr/borsa/anahtar-oranlar/" + stock, {
    headers: {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,tr;q=0.7",
      "cache-control": "max-age=0",
      priority: "u=0, i",
      "sec-ch-ua": '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "none",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
    },
    referrerPolicy: "strict-origin-when-cross-origin",
    body: null,
    method: "GET",
  });
  const htmlText = await x.text(); // Convert the response to text
  const regex = /<td class="currency">Senet Sayısı<\/td>\s*<td.*?>([\d.,]+)<\/td>/;
  const match = htmlText.match(regex);
  const number = match[1].replace(/\./g, "").trim();
  console.log(number); // Log

  const regexSermaye = /<td class="currency">Sermaye<\/td>\s*<td.*?>([\d.,]+)<\/td>/;
  const matchSermaye = htmlText.match(regexSermaye);
  const numberSermaye = matchSermaye[1].replace(/\./g, "").trim();
  if (numberSermaye !== number) {
    throw new Error("PROBLEM");
  }

  fs.writeFileSync(stock + ".html", htmlText, "utf8");
}
