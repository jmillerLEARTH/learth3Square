import {uiHandler} from "./uiHandler.js";
import {ShuffleArray} from "./utils.js";

export class gameHandler
{
    constructor(langHandler){
        
        this.langHandler = langHandler;
        
        this.uiHandler = new uiHandler(this);
        
        this.gameLangs = [];
        
        this.eligibleContent = [];
        
        this.clicksWithinLastFiveSeconds = 0
    }
    
    GoToGameSettingsPage(){
        
    }
    
    StartGame(){
        
        this._LoadSelectedSettings();
        
        this._LoadEligibleContent();
        
        this.uiHandler.BuildGrid();
        
        this.DistributeContent();
        
        this.uiHandler.AddPauseButton();
        
        this.uiHandler.AddNextRoundButton();
    }
    
    _LoadSelectedSettings(){
        
        this.gameLangs = ["ojibwemowin"];
    }
    
    _LoadEligibleContent(){
        
        for(const lang of this.gameLangs){
            
            for(const ph of this.langHandler.GetDict(lang)){
                
                if(ph.groups.includes("animal")) this.eligibleContent.push(ph);
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
    
    DistributeContent(){
        
        let $destructoArr = [...this.eligibleContent];
        
        $destructoArr = ShuffleArray($destructoArr);
        
        for(const gs of this.uiHandler.gridSpaces){
            
            let $phraseSpan = document.createElement("div");
            
            $phraseSpan.style.fontWeight = "bold";
            //$phraseSpan.style.textDecoration = "underline";
            $phraseSpan.style.fontFamily = "sans-serif";
            
            const $engPhrase = $destructoArr.shift().engPhrase;
            
            if($destructoArr.length == 0){
                
                $destructoArr = [...this.eligibleContent];
        
                $destructoArr = ShuffleArray($destructoArr);
                
            }
            
            $phraseSpan.innerHTML = this._TransformEachLetterToSpan($engPhrase);
            
            this.uiHandler.UpdateGridspace(gs,$phraseSpan);
            
            gs.SetMyIntervalFnToRandomSecs();
        }
    }
}