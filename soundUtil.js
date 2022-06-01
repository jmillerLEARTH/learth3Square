class audioHolder
{
    constructor(audioPaths){
        
        this.loaded = 0;
        this.totalPaths;
        this.preloadedSounds = [];
    }
    
    PreloadAudio(url) {
        const $audio = new Audio();
        // once this file loads, it will call loadedAudio()
        // the file will be kept by the browser as cache

        const $self = this;    

        $audio.addEventListener('canplaythrough', function(){$self.LoadedAudio()}, false);
        $audio.src = url;
        this.preloadedSounds.push($audio);
    }   
    
    LoadedAudio(){
        
        console.log("LOADED");
        console.log(this);
        
        this.loaded++;
        if (this.loaded == this.preloadedSounds.length){
    	// all have loaded
    	   this.Init();
        }
    }
    Init(){
    
        let audios = this.preloadedSounds;

        for(let i=0; i<audios.length; i++){

            if(i != 0){

                audios[i-1].addEventListener('ended', function(){

                    try{
                        audios[i].play();
                    }
                    catch{
                        console.log("fail");
    //                    if(debugLogObject != null){
    //                        debugLogObject.failedAudioSources.push(audios[i]);
    //                        console.warn(debugLogObject.failedAudioSources);
                        //}       
                    }
                })

                //sessionStorage.failedAudioArray = audios;
                //sessionStorage.failedAudio = audios[i-1];
            }
        }

        //console.error("I WANT THIS TO LOG FAILED AUDIO SOURCES");

        //debugger

        //audios[0].CreateAndPlayAudio();

        audios[0].play();
        

    }

 
}

export function PlaySequentialSounds(soundPaths,debugLogObject = null){
    
    const $audioHolder = new audioHolder();
    $audioHolder.totalPaths = soundPaths.length;
    
    // we start preloading all the audio files
    for (const snd of soundPaths) {
        $audioHolder.PreloadAudio(snd);
    }
    

    
    
    
}