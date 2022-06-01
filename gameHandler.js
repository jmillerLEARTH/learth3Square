import {uiHandler} from "./uiHandler.js";
import {ShuffleArray} from "./utils.js";

export class gameHandler
{
    constructor(langHandler){
        
        this.langHandler = langHandler;
        
        this.uiHandler = new uiHandler(this);
        
        this.gameLangs = [];
        
        this.eligibleContent = [];
    }
    
    GoToGameSettingsPage(){
        
    }
    
    StartGame(){ 
        
        this._LoadSelectedSettings();
        
        this._LoadEligibleContent();
        
        this.uiHandler.BuildGrid();
        
        this._DistributeContent();
        
        this.uiHandler.SetContentToFade
    }
    
    _LoadSelectedSettings(){
        
        this.gameLangs = ["ojibwemowin"];
    }
    
    _LoadEligibleContent(){
        
        for(const lang of this.gameLangs){
            
            for(const ph of this.langHandler.GetDict(lang)){
                
                this.eligibleContent.push(ph);
            }
        }  
    }
    
    _TransformEachLetterToSpan(text){
        
        let $returnString = "";
        
        for(let letter of text){
            
            letter = `<span class="init">` + letter + `</span>`;
            $returnString += letter;
        }
        
        return $returnString
    }
    
    _DistributeContent(){
        
        let $destructoArr = [...this.eligibleContent];
        
        $destructoArr = ShuffleArray($destructoArr);
        
        console.log($destructoArr);
        
        console.log(this.uiHandler.gridSpaces);
        
        for(const gs of this.uiHandler.gridSpaces){
            
            const $phraseSpan = document.createElement("div");
            
            const $engPhrase = $destructoArr.shift().engPhrase;
            
            $phraseSpan.innerHTML = this._TransformEachLetterToSpan($engPhrase);
            
            this.uiHandler.UpdateGridspace(gs,$phraseSpan);
        }
    }
}