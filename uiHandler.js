import {ShuffleArray} from "./utils.js";

class gridspace
{
    constructor(domId){
        
        this.domId = domId;
        this.initialString;
        this.destString;
    }
    
    SetMyTimeoutFnToRandomSecs(){
        
        setInterval()
    }
}


export class uiHandler
{
    constructor(gameHandler){
        
        this.gameHandler = gameHandler;
        this.grid;
        this.gridSpaces = [];
    }
    
    DisplayGameSettingsPage(){
        
    }
    
    BuildGrid(){
        
        this.grid = document.createElement("div");
        this.grid.style = `display: grid;
            place-items: center;
            grid-template-columns: 200px 200px 200px;
            grid-template-rows: 200px 200px 200px;
            gap: 5px;
            padding: 5px;`;
        
        document.getElementById("mainContent").innerHTML = "";  
        
        document.getElementById("mainContent").append(this.grid);
        
        for(let i = 0; i < 9; i++){
            
            this._AddGridspace(i);
        }
    }
    
    _AddGridspace(seed){
        
        let $gridSpaceDOM = document.createElement("div");
        $gridSpaceDOM.id = "gridSpace" + seed;
        $gridSpaceDOM.style.backgroundColor = "lightGray";
        $gridSpaceDOM.style.placeItems = "center";
        $gridSpaceDOM.style.height = "200px";
        $gridSpaceDOM.style.width = "200px";
        
        this.grid.append($gridSpaceDOM);
        
        this.gridSpaces.push(new gridspace($gridSpaceDOM.id));
    }
    
    UpdateGridspace(gs,domObj){
        
        console.log(gs);
        
        const $gsDOM = document.getElementById(gs.domId);
        
        domObj.style.fontSize = "48px";
        
        $gsDOM.append(domObj);
        
        domObj.style.marginTop = Number(100-domObj.clientHeight/2);
        
        domObj.style.textAlign = 'center';
        
        gs.initialString = domObj.innerText;
        
        gs.destString = this.gameHandler.langHandler.FindMatchingPhrase(this.gameHandler.gameLangs[0],gs.initialString,true).phrase;
        
        this._TransformEachLetterToSpan($gsDOM.innerText);
        
        
    }
    
    ReplaceGSContent(gs){
        
        const $textDivDOM = document.getElementById(gs).querySelector("div");
        
        const $nextDestSpan = document.createElement("span");
        $nextDestSpan.innerText = gs.destString.shift();
        
        $textDivDOM.querySelectorAll("init")[0].remove();
        
        $textDivDOM.prepend($nextDestSpan);
        
        
    }
}