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
            justify-items: center;
            align-items: center;
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
        $gridSpaceDOM.style.height = "200px";
        $gridSpaceDOM.style.width = "200px";
        
        this.grid.append($gridSpaceDOM);
        
        this.gridSpaces.push($gridSpaceDOM.id);
    }
    
    FadeContent(){
        
        
    }
}