import {SystemClock} from "./tech/SystemClock";
import {SystemLanguage} from "./tech/SystemLanguage";
import {MomentDeLaJournee} from "./domaine/momentDeLaJournee";
import {LangueInterface} from "./domaine/langue.interface";
import {VerificateurPalindrome} from "./domaine/VerificateurPalindrome";
import {ConsoleHandler} from "./tech/ConsoleHandler";

const moment:MomentDeLaJournee = SystemClock.getInstance().getMoment();
const langue:LangueInterface = SystemLanguage.getInstance().getLangueInstance();

let consoleHandler: ConsoleHandler = ConsoleHandler.getInstance();

const chaine:string = consoleHandler.getUserInput();
let verificateurPalindrome:VerificateurPalindrome = new VerificateurPalindrome(langue, moment);
consoleHandler.displayOutput(verificateurPalindrome.Verifier(chaine));




