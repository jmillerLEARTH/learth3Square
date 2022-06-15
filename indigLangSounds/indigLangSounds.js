import {PlaySequentialSounds} from "./../soundUtil.js";
import {ojibwemowinDict} from "./ojibwemowin.js";
import {ArrArgHelper} from "./../utils.js";

export class langHandler {
    
    constructor(){
        
        this.langs = [ojibwemowinDict];
    }
    
    GetDict(lang){
        
        if(lang == "ojibwemowin") return this.langs[0];
    }
    
    FindMatchingPhrase(lang,phrase,searchByEngPhrase=false){
        
        let $dictToSearch;
        
        let $evalPhrase;
        
        if(lang == "ojibwemowin") $dictToSearch = this.langs[0];
        
        if(searchByEngPhrase) $evalPhrase = "engPhrase"
        else $evalPhrase = "phrase"

        for(const ph of $dictToSearch){

            if(ph[$evalPhrase] == phrase) return ph
        }
        
        return false
    }
    
    PlayPhrases(lang,phraseArr,searchByEngPhrase=false,playbackRate = 1){
        
        let $sounds = [];
        
        phraseArr = ArrArgHelper(phraseArr);
        
        for(const ph of phraseArr){
            
            let $sPaths = this.FindMatchingPhrase(lang,ph,searchByEngPhrase).soundFiles;
            
            if($sPaths == false) continue
            
            for(const sPath of $sPaths){
                
                $sounds.push(sPath);
            }
        }
        
        PlaySequentialSounds($sounds,this,playbackRate);
        
        //debugger;
    }
    
    GetTransliteratedString(lang,phraseArr){
        
        let $strings = [];
        
        for(let i = 0; i < phraseArr.length; i++){
            
            let $searchKey = phraseArr[i];
            
            let $phrase = String(this.GetPhrase(lang,$searchKey,true));
            
            if ($phrase == "false") continue
            
            if(i != phraseArr.length - 1) $phrase += " ";
            
            $strings.push($phrase);
        }
        
        return $strings
    }
}



