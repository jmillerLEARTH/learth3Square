import {uiHandler} from "./uiHandler.js";

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
}