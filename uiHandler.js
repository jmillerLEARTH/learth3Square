import {ShuffleArray} from "./utils.js";

class gridspace
{
    constructor(domId){
        
        this.domId = domId;
        this.initialString;
        this.destString;
        this.ogDestString;
        this.myInterval;
    }
    
    SetMyIntervalFnToRandomSecs(){
        
        const $this = this;
        
        this.myInterval = setInterval(function(){
            
            window.gameHandler.uiHandler.ReplaceGSContent($this);
            
        },(3100 + Math.random()*6500))
    }
}


export class uiHandler
{
    constructor(gameHandler){
        
        this.gameHandler = gameHandler;
        this.grid;
        this.gridSpaces = [];
        this.gridSpaceWidth = "450px";
        this.gridSpaceHeight = "300px";
    }
    
    DisplayGameSettingsPage(){
        
    }
    
    BuildGrid(){
        
        this.grid = document.createElement("div");
        this.grid.style = `display: grid;
            place-items: center;
            grid-template-columns:` + this.gridSpaceWidth + ` ` + this.gridSpaceWidth + ` ` + this.gridSpaceWidth + `;
            grid-template-rows:` + this.gridSpaceHeight + ` ` + this.gridSpaceHeight + ` ` + this.gridSpaceHeight + `;
            gap: 5px;`;
        
        document.getElementById("mainContent").innerHTML = "";  
        
        document.getElementById("mainContent").append(this.grid);
        
        for(let i = 0; i < 9; i++){
            
            this._AddGridspace(i);
        }
    }
    
    AddPauseButton(){
        
        const $pauseButton = document.createElement("button");
        $pauseButton.innerText = "PAUSE";
        $pauseButton.style.fontSize = "60px";
        $pauseButton.style.position = "fixed";
        $pauseButton.style.top = "300px";
        $pauseButton.style.left = String(Number(this.gridSpaceWidth.replace("px","")) * 3 + 50) + "px";;
        
        $pauseButton.addEventListener("click",function(){
           
            const $GH = window.gameHandler;
            
            if($GH.paused){
                
                $GH.paused = false;
                $pauseButton.innerText = "PAUSE";
            }
            else{
                
                $GH.paused = true;
                $pauseButton.innerText = "RESUME";
            }
            
        });
        
        document.getElementById("mainContent").append($pauseButton);
    }
    
    AddNextRoundButton(){
        
        const $nextButton = document.createElement("button");
        $nextButton.innerText = "NEXT";
        $nextButton.style.fontSize = "60px";
        $nextButton.style.position = "fixed";
        $nextButton.style.top = "600px";
        console.log(String(Number(this.gridSpaceWidth) * 3) + "px");
        $nextButton.style.left = String(Number(this.gridSpaceWidth.replace("px","")) * 3 + 50) + "px";
        
        $nextButton.addEventListener("click",function(){
         
               const $GH = window.gameHandler;
            
                for(const gs of $GH.uiHandler.gridSpaces){
                    
                    const $allInternalDivs = document.getElementById(gs.domId).querySelectorAll("div");
                    
                    for(const div of $allInternalDivs){
                        
                        div.remove();
                    }
                    
                    document.getElementById(gs.domId).removeEventListener("click",function(){});
                    
                    clearInterval(gs.myInterval);
                }
            
                $GH.DistributeContent();
        });
        
        document.getElementById("mainContent").append($nextButton);
    }
    
    _AddGridspace(seed){
        
        let $gridSpaceDOM = document.createElement("div");
        $gridSpaceDOM.id = "gridSpace" + seed;
        $gridSpaceDOM.style.backgroundColor = "lightGray";
        $gridSpaceDOM.style.placeItems = "center";
        $gridSpaceDOM.style.height = this.gridSpaceHeight;
        $gridSpaceDOM.style.width = this.gridSpaceWidth;
        
        this.grid.append($gridSpaceDOM);
        
        this.gridSpaces.push(new gridspace($gridSpaceDOM.id));
    }
    
    UpdateGridspace(gs,domObj){
        
        const $gsDOM = document.getElementById(gs.domId);
        
        const $replaceableDiv = document.createElement("div");
        $replaceableDiv.style.height = this.gridSpaceHeight;
        $replaceableDiv.style.width = this.gridSpaceWidth;
        
        $gsDOM.append($replaceableDiv);
        
        domObj.style.fontSize = "85px";
        domObj.style.margin = "10px";
        domObj.style.textAlign = "center";
        
        $replaceableDiv.append(domObj);
        
        $replaceableDiv.innerHTML += "<div class='destDiv' style='font-family:sans-serif;font-size:80px;word-break:break-all;inner-width:" + this.gridSpaceWidth + ";padding-left:10px;padding-right:10px;text-align:center'></div>";
        
        domObj.style.marginTop = Number(100-domObj.clientHeight/2);
        
        domObj.style.textAlign = 'center';
        
        gs.initialString = domObj.innerText;
        
        gs.destString = this.gameHandler.langHandler.FindMatchingPhrase(this.gameHandler.gameLangs[0],gs.initialString,true).phrase;
        
        const $ogDestString = gs.destString;
        
        this.gameHandler._TransformEachLetterToSpan($gsDOM.innerText);
        
        
        $replaceableDiv.addEventListener("click",function(){
           
            const $GH = window.gameHandler;
            
            $GH.langHandler.PlayPhrases($GH.gameLangs[0],[$ogDestString]);
            
        });
        
    }
    
    ReplaceGSContent(gs){
        
        if(this.gameHandler.paused) return
        
        const $nextDestSpan = document.getElementById(gs.domId).querySelector(".destDiv");
    
        $nextDestSpan.append(gs.destString.slice(0,1));
        
        gs.destString = gs.destString.slice(1);
        
        
    }
}