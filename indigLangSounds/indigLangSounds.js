import {InitLangs} from "./initLangs.js";
import {PlaySequentialSounds} from "./../soundUtil.js";

export class soundFile{
    
    constructor(soundHandlerOwner,path){
        
        this.soundHandlerOwner = soundHandlerOwner;
        this.path = path;
    }
}

export class soundHandler{
    
        constructor(phraseOwner){
                
            this.phraseOwner = phraseOwner;
            this.sounds = [];
        }
    
    AddSoundFile(path){
        
        let $soundFile = new soundFile(this,path);
        this.sounds.push($soundFile);
        
        return this
        
    }
    
    PlaySounds(){
        
        let $playArr = [];
        
        for(const snd of this.sounds){
            
            $playArr.push(snd.path);
        }
        
        PlaySequentialSounds($playArr);
        
//        for(const snd of this.sounds){
//            
//            console.warn("currently will only work with single sound phrases");
//
//            const $tempAudio = new Audio(snd.path);
//            $tempAudio.play()
//
//        }
    }

}

export class phraseHandler {
    
    constructor(phrase,engPhrase){
        
        this.lang = lang;
        this.phrase = phrase;
        this.engPhrase = engPhrase;
        this.soundHandler = new soundHandler(this);
    }
}

export class lang {
    
    constructor(langName,langEngName){
        
        this.langName = langName;
        this.langEngName = langEngName;
        this.phrases = [];
    }
    
    AddPhrase(phrase,engPhrase){
        
        let $phrase = new phraseHandler(phrase,engPhrase);
        $phrase.lang = this.langName;
        this.phrases.push($phrase);
        
        return $phrase
    }
}

export class langHandler {
    
    constructor(){
        
        this.langs = [];
    }
    
    AddLang(langName,langEngName){
        
        let $lang = new lang(langName,langEngName);
        this.langs.push($lang);
        
        return $lang
    }
    
    InitiateLangs(){
        
        InitLangs(this);
    }
    
    _FindMatchingPhrase(lang,phrase,searchByEngLangName=false,searchByEngPhrase=false){
        
        let $evalLangName;
        let $evalPhrase;
        
        if(searchByEngLangName) $evalLangName = "langEngName"
        else $evalLangName = "langName"
        
        if(searchByEngPhrase) $evalPhrase = "engPhrase"
        else $evalPhrase = "phrase"
        
        for(const l of this.langs){
            
            if(l[$evalLangName] == lang){

                for(const ph of l.phrases){

                    if(ph[$evalPhrase] == phrase) return ph
                }
            }
        }
        
        return false
    }
    
    //DEPRECATED PlayLangSound(lang,phrase,searchByEngLangName=false,searchByEngPhrase=false){

//        let $phrase = this._FindMatchingPhrase(lang,phrase,searchByEngLangName,searchByEngPhrase);
//        
//        if($phrase == false) return false
//        
//        $phrase.soundHandler.PlaySounds();
                
    //}
    
    PlayPhrases(lang,phraseArr,searchByEngLangName=false,searchByEngPhrase=false){
        
        let $sounds = [];
        
        for(const ph of phraseArr){
            
            let $sPaths = this.GetSoundPaths(lang,ph,searchByEngLangName,searchByEngPhrase);
            
            if($sPaths == false) continue
            
            for(const sPath of $sPaths){
                
                $sounds.push(sPath);
            }
        }
        
        console.log($sounds);
        
        PlaySequentialSounds($sounds,this);
        
        //debugger;
    }
    
    GetTransliteratedString(lang,phraseArr,searchByEngLangName=false){
        
        let $strings = [];
        
        for(let i = 0; i < phraseArr.length; i++){
            
            let $searchKey = phraseArr[i];
            
            let $phrase = String(this.GetPhrase(lang,$searchKey,searchByEngLangName,true));
            
            if ($phrase == "false") continue
            
            if(i != phraseArr.length - 1) $phrase += " ";
            
            $strings.push($phrase);
        }
        
        return $strings
    }
    
    GetSoundPaths(lang,phrase,searchByEngLangName=false,searchByEngPhrase=false){
        
        let $phrase = this._FindMatchingPhrase(lang,phrase,searchByEngLangName,searchByEngPhrase);
        
        if($phrase == false) return false
        
        //console.log($phrase);
        
        let $returnArr = [];
        
        for(const snd of $phrase.soundHandler.sounds){
            
            $returnArr.push(snd.path);
        }
        
        return $returnArr
    }
    
    GetPhrase(lang,phrase,searchByEngLangName=false,searchByEngPhrase=false){
        
        let $phrase = this._FindMatchingPhrase(lang,phrase,searchByEngLangName,searchByEngPhrase);
        
        if($phrase != false) return $phrase.phrase;
        else return false
    }
}



