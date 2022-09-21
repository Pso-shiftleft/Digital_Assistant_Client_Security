/**
 * Author: Lakshman Veti
 * Type: MAP
 * Objective: Config Objects
 */
import { environment } from "../../environments/environment";

const base = environment.baseURL;

export const CONFIG = {
  current: "TEST",
  UDADebug: false,
  UDA_CONTAINER_CLASS: "udan-main-panel",
  UDA_CLICK_IGNORE_CLASS: "uda_exclude",
  UDA_DOMAIN: "https://udantest.nistapp.ai",
  UDA_API_URL: "https://udantest.nistapp.ai/voiceapi",
  UDASessionID:
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15),
  UDA_POST_INTERVAL: 1000,
  UDALastMutationTime: 0,
  UDALogLevel: 0,
  RECORDING_SWITCH_KEY: "recordingSwitch",
  RECORDING_SEQUENCE: "activeRecordingData",
  USER_AUTH_DATA_KEY: "udaUserData",
  USER_SESSION_KEY: "udaSessionKey",
  USER_SESSION_ID: "udaSessionId",
  SYNC_INTERVAL: 1000,
  JARO_WEIGHT: 0.89,
  set Environment(value) {
    this.current = value.toString().toUpperCase();
    if (this.current === "PROD") {
      this.UDA_DOMAIN = "https://udan.nistapp.ai";
    } else {
      this.UDA_DOMAIN = "https://udantest.nistapp.ai";
    }
    this.UDA_API_URL = this.UDA_DOMAIN + "/voiceapi";
  },
  get Environment() {
    return this.current;
  },
  sdkUrl: "/",
  totalScripts: 0,
  scriptsCompleted: 0,
  totalotherScripts: 0,
  totalotherScriptsCompleted: 0,
  functionsToRunWhenReady: [],
  jqueryready: false,
  request: {},
  userdata: {},
  ignoreelements: ["script", "h1", "h2", "h3", "link", "noscript", "style"],
  availablenavtabs: [],
  htmlindex: [],
  textfromspeech: "",
  nodeid: 0,
  speechrecognitionavailable: false,
  SpeechRecognition: [],
  recognition: {},
  targetNode: [],
  updatesOccur: true,
  updatecounter: 0,
  lastupdatecounter: 0,
  menuitems: [],
  indexnewnodes: false,
  previousurl: "",
  currenturl: "",
  sessionID: "",
  sessiondata: {
    sessionkey: "",
    authenticated: false,
    authenticationsource: "",
    authdata: {},
    csp: { cspenabled: false, udanallowed: true, domain: "" },
  },
  cookiename: "nist-voice-usersessionid",
  recordingcookiename: "nistsequence",
  recordedsequenceids: [],
  recordclicknodecookiename: "nistclickrecord",
  cookieexpires: 365,
  addedtoslidingdiv: false,
  elastic: {
    apiurl: "http://localhost:9200",
    indexname: "nistapp",
    currentpage: 0,
    querystring: "",
  },
  navigationcookiename: "nistnavshow",
  autoplay: false,
  processcount: 0,
  totalcount: 0,
  rerenderhtml: true,
  processingnodes: false,
  processedclickobjectscount: 0,
  recording: false,
  addcustomcssdomains: [
    "app.vantagecircle.co.in",
    "app.vantagecircle.com",
    "dashboard.vantagecircle.com",
    "dashboard.vantagecircle.co.in",
  ],
  containersections: [],
  lastclickednode: "",
  lastclickedtime: "",
  maxstringlength: 40,
  confirmednode: false,
  ignoreattributes: [
    "translate",
    "draggable",
    "spellcheck",
    "tabindex",
    "clientHeight",
    "clientLeft",
    "clientTop",
    "clientWidth",
    "offsetHeight",
    "offsetLeft",
    "offsetTop",
    "offsetWidth",
    "scrollHeight",
    "scrollLeft",
    "scrollTop",
    "scrollWidth",
    "baseURI",
    "isConnected",
    "ariaPressed",
    "aria-pressed",
    "nodePosition",
    "outerHTML",
    "innerHTML",
    "style",
    "aria-controls",
    "aria-activedescendant",
    "ariaExpanded",
    "autocomplete",
    "aria-expanded",
    "aria-owns",
    "formAction",
    "ng-star-inserted",
    "ng-star",
    "aria-describedby",
    "width",
    "height",
    "x",
    "y",
    "selectionStart",
    "selectionEnd",
    "required",
    "validationMessage",
    "selectionDirection",
    "naturalWidth",
    "naturalHeight",
    "complete",
    "_indexOf",
    "value",
    "defaultValue",
    "min",
    "max",
    "nodeInfo",
  ],
  innerTextWeight: 5,
  logLevel: 1,
  playNextAction: true,
  forceReindex: false,
  searchText: null,
  searchInProgress: false,
  ignoreNodesFromIndexing: [
    "ng-dropdown-panel",
    "ckeditor",
    "fusioncharts",
    "ngb-datepicker",
    "ngx-daterangepicker-material",
    "uda-panel",
    "mat-datepicker-content",
    "ng-select",
  ],
  ignoreNodesContainingClassNames: [
    "cke_dialog_container",
    "cke_notifications_area",
    "gldp-default",
    "ajs-layer",
    "aui-list",
    "herknl",
  ],
  cancelRecordingDuringRecordingNodes: [],
  addClickToSpecialNodes: ["ng-select", "ngb-datepicker"],
  ignoreClicksOnSpecialNodes: ["ngx-daterangepicker-material"],
  customNameForSpecialNodes: {
    "ngb-datepicker": "Date selector",
    "mat-datepicker-content": "Date selector",
    "ngx-daterangepicker-material": "Date Range Selector",
  },
  specialInputClickClassNames: ["ghx-dropdown-trigger", "aui-list"],
  tooltipDisplayedNodes: [],
  // replay variables
  autoplayCompleted: false,
  autoplayPaused: false,
  // manual click variables
  invokedActionManually: false,
  // personal node ignore attributes
  personalNodeIgnoreAttributes: [
    "innerText",
    "innerHTML",
    "outerText",
    "outerHTML",
    "nodeValue",
    "src",
    "naturalWidth",
    "naturalHeight",
    "currentSrc",
  ],
  clickeOn: "",
  invokingnode: null,
  currentPage: "search",
  navigatedToNextPage: { check: false, url: "" },
  popperInstance: null,
  //Azure content moderator attributes
  profanity: {
    enabled: true,
    provider: "azure",
    config: {
      key1: "",
      key2: "",
      endPoint:
        "https://nistapp-content-moderator.cognitiveservices.azure.com/contentmoderator/moderate/v1.0/ProcessText/Screen",
      region: "eastus",
    },
  },
  multilingual: {
    enabled: true,
    searchInLang: "en-US",
    selectedLang: "en-US",
    displayText: "",
    translatedText: "",
    translate: {
      provider: "google",
      apikey: "",
      translateTo: "en",
      apiurl: "https://translation.googleapis.com/language/translate/v2",
    },
  },
  set enableMultilingual(val) {
    this.multilingual.enabled = val;
    // this.showhtml();
  },
  get enableMultilingual() {
    return CONFIG.multilingual.enabled;
  },
  // BCP list of languages
  bcplang: [
    ["Afrikaans", ["af-ZA"]],
    ["አማርኛ", ["am-ET"]],
    ["Azərbaycanca", ["az-AZ"]],
    ["বাংলা", ["bn-BD", "বাংলাদেশ"], ["bn-IN", "ভারত"]],
    ["Bahasa Indonesia", ["id-ID"]],
    ["Bahasa Melayu", ["ms-MY"]],
    ["Català", ["ca-ES"]],
    ["Čeština", ["cs-CZ"]],
    ["Dansk", ["da-DK"]],
    ["Deutsch", ["de-DE"]],
    [
      "English",
      ["en-AU", "Australia"],
      ["en-CA", "Canada"],
      ["en-IN", "India"],
      ["en-KE", "Kenya"],
      ["en-TZ", "Tanzania"],
      ["en-GH", "Ghana"],
      ["en-NZ", "New Zealand"],
      ["en-NG", "Nigeria"],
      ["en-ZA", "South Africa"],
      ["en-PH", "Philippines"],
      ["en-GB", "United Kingdom"],
      ["en-US", "United States"],
    ],
    [
      "Español",
      ["es-AR", "Argentina"],
      ["es-BO", "Bolivia"],
      ["es-CL", "Chile"],
      ["es-CO", "Colombia"],
      ["es-CR", "Costa Rica"],
      ["es-EC", "Ecuador"],
      ["es-SV", "El Salvador"],
      ["es-ES", "España"],
      ["es-US", "Estados Unidos"],
      ["es-GT", "Guatemala"],
      ["es-HN", "Honduras"],
      ["es-MX", "México"],
      ["es-NI", "Nicaragua"],
      ["es-PA", "Panamá"],
      ["es-PY", "Paraguay"],
      ["es-PE", "Perú"],
      ["es-PR", "Puerto Rico"],
      ["es-DO", "República Dominicana"],
      ["es-UY", "Uruguay"],
      ["es-VE", "Venezuela"],
    ],
    ["Euskara", ["eu-ES"]],
    ["Filipino", ["fil-PH"]],
    ["Français", ["fr-FR"]],
    ["Basa Jawa", ["jv-ID"]],
    ["Galego", ["gl-ES"]],
    ["ગુજરાતી", ["gu-IN"]],
    ["Hrvatski", ["hr-HR"]],
    ["IsiZulu", ["zu-ZA"]],
    ["Íslenska", ["is-IS"]],
    ["Italiano", ["it-IT", "Italia"], ["it-CH", "Svizzera"]],
    ["ಕನ್ನಡ", ["kn-IN"]],
    ["ភាសាខ្មែរ", ["km-KH"]],
    ["Latviešu", ["lv-LV"]],
    ["Lietuvių", ["lt-LT"]],
    ["മലയാളം", ["ml-IN"]],
    ["मराठी", ["mr-IN"]],
    ["Magyar", ["hu-HU"]],
    ["ລາວ", ["lo-LA"]],
    ["Nederlands", ["nl-NL"]],
    ["नेपाली भाषा", ["ne-NP"]],
    ["Norsk bokmål", ["nb-NO"]],
    ["Polski", ["pl-PL"]],
    ["Português", ["pt-BR", "Brasil"], ["pt-PT", "Portugal"]],
    ["Română", ["ro-RO"]],
    ["සිංහල", ["si-LK"]],
    ["Slovenščina", ["sl-SI"]],
    ["Basa Sunda", ["su-ID"]],
    ["Slovenčina", ["sk-SK"]],
    ["Suomi", ["fi-FI"]],
    ["Svenska", ["sv-SE"]],
    ["Kiswahili", ["sw-TZ", "Tanzania"], ["sw-KE", "Kenya"]],
    ["ქართული", ["ka-GE"]],
    ["Հայերեն", ["hy-AM"]],
    [
      "தமிழ்",
      ["ta-IN", "இந்தியா"],
      ["ta-SG", "சிங்கப்பூர்"],
      ["ta-LK", "இலங்கை"],
      ["ta-MY", "மலேசியா"],
    ],
    ["తెలుగు", ["te-IN"]],
    ["Tiếng Việt", ["vi-VN"]],
    ["Türkçe", ["tr-TR"]],
    ["اُردُو", ["ur-PK", "پاکستان"], ["ur-IN", "بھارت"]],
    ["Ελληνικά", ["el-GR"]],
    ["български", ["bg-BG"]],
    ["Pусский", ["ru-RU"]],
    ["Српски", ["sr-RS"]],
    ["Українська", ["uk-UA"]],
    ["한국어", ["ko-KR"]],
    [
      "中文",
      ["cmn-Hans-CN", "普通话 (中国大陆)"],
      ["cmn-Hans-HK", "普通话 (香港)"],
      ["cmn-Hant-TW", "中文 (台灣)"],
      ["yue-Hant-HK", "粵語 (香港)"],
    ],
    ["日本語", ["ja-JP"]],
    ["हिन्दी", ["hi-IN"]],
    ["ภาษาไทย", ["th-TH"]],
  ],
  // Flag to enable node type detection
  enableNodeTypeChangeSelection: false,
  set enableNodeTypeSelection(val) {
    this.enableNodeTypeChangeSelection = val;
    // this.showhtml();
  },
  get enableNodeTypeSelection() {
    return CONFIG.multilingual.enabled;
  },
  cspUserAcceptance: {
    storageName: "uda-csp-user-consent",
    data: { proceed: true },
  },
  screenAcceptance: {
    storageName: "uda-user-screen-consent",
    data: { proceed: true },
  },
};
