import {MomentOfTheDay} from "./domaine/moment/MomentOfTheDay";
import {ActualMomentOfDay} from "./tech/adapter/ActualMomentOfDay";
import {LanguageInteface} from "./domaine/languages/Language.interface";
import {LanguageSystemAdapter} from "./tech/adapter/LanguageSystemAdapter";
import {ConsoleHandler} from "./tech/adapter/ConsoleHandler";
import {VerificateurPalindrome} from "./domaine/VerificateurPalindrome";


const moment:MomentOfTheDay = ActualMomentOfDay.getInstance().getMomentOfDay();
const language: LanguageInteface = LanguageSystemAdapter.getInstance().getLanguage();

let consoleHandler: ConsoleHandler = ConsoleHandler.getInstance();

const chaine:string = consoleHandler.getUserInput();
let verificateurPalindrome:VerificateurPalindrome = new VerificateurPalindrome(language, moment);
consoleHandler.displayOutput(verificateurPalindrome.Verifier(chaine));




