import {InitOjibwemowin} from "./ojibwemowin.js";
import {InitCherokee} from "./cherokee.js";
import {database} from "./../database.js";

export function InitLangs(langHandler){
    
    const ojibwemowin = langHandler.AddLang("ojibwemowin","ojibwe");
    
    InitOjibwemowin(ojibwemowin);
    
    const db = new database();
    
    //db.data = ojibwemowin;
    
    //db.OutputData();
    
    const cherokee = langHandler.AddLang("cherokee","cherokee");
    
    InitCherokee(cherokee);
}