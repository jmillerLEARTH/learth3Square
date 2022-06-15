import {phraseHandler} from "./indigLangSounds.js";

const cherokeeDict = [
    
    {
    phrase: "sowo",
    lang: "cherokee",
    engPhrase: "1",
    groups: ["number","cardinal","traditional", "simple number", "very simple number"],
    syllables: 2,
    soundFiles: ["indigLangSounds/cherokeeSounds/01.mp3"];
    },
    
    {
    phrase: "tali",
    lang: "cherokee",
    engPhrase: "2",
    groups: ["number","cardinal","traditional", "simple number", "very simple number"],
    syllables: 2,
    soundFiles: ["indigLangSounds/cherokeeSounds/02.mp3"];
    },
    
    {
    phrase: "tsoi",
    lang: "cherokee",
    engPhrase: "3",
    groups: ["number","cardinal","traditional", "simple number", "very simple number"],
    syllables: 2,
    soundFiles: ["indigLangSounds/cherokeeSounds/03.mp3"];
    },
    
    {
    phrase: "nvgi",
    lang: "cherokee",
    engPhrase: "4",
    groups: ["number","cardinal","traditional", "simple number", "very simple number"],
    syllables: 2,
    soundFiles: ["indigLangSounds/cherokeeSounds/04.mp3"];
    },
    
    {
    phrase: "hisgi",
    lang: "cherokee",
    engPhrase: "5",
    groups: ["number","cardinal","traditional", "simple number", "very simple number"],
    syllables: 2,
    soundFiles: ["indigLangSounds/cherokeeSounds/05.mp3"];
    },
    
    {
    phrase: "sudali",
    lang: "cherokee",
    engPhrase: "6",
    groups: ["number","cardinal","traditional", "simple number"],
    syllables: 3,
    soundFiles: ["indigLangSounds/cherokeeSounds/06.mp3"];
    },
    
    {
    phrase: "galiquogi",
    lang: "cherokee",
    engPhrase: "7",
    groups: ["number","cardinal","traditional", "simple number"],
    syllables: 4,
    soundFiles: ["indigLangSounds/cherokeeSounds/07.mp3"];
    },
    
    {
    phrase: "tsunela",
    lang: "cherokee",
    engPhrase: "8",
    groups: ["number","cardinal","traditional", "simple number"],
    syllables: 3,
    soundFiles: ["indigLangSounds/cherokeeSounds/08.mp3"];
    },
    
    {
    phrase: "sonela",
    lang: "cherokee",
    engPhrase: "9",
    groups: ["number","cardinal","traditional", "simple number"],
    syllables: 3,
    soundFiles: ["indigLangSounds/cherokeeSounds/09.mp3"];
    },
    
    {
    phrase: "sgohi",
    lang: "cherokee",
    engPhrase: "10",
    groups: ["number","cardinal","traditional", "simple number"],
    syllables: 2,
    soundFiles: ["indigLangSounds/cherokeeSounds/10.mp3"];
    },
    
]

function _InitNumbers(cherokee){
    
    cherokee.AddPhrase("sowo", "1")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/01.mp3");
    
    cherokee.AddPhrase("tali", "2")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/02.mp3");
    
    cherokee.AddPhrase("tsoi", "3")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/03.mp3");
    
    cherokee.AddPhrase("nvgi", "4")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/04.mp3");
    
    cherokee.AddPhrase("hisgi", "5")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/05.mp3");
    
    cherokee.AddPhrase("sudali", "6")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/06.mp3");
    
    cherokee.AddPhrase("galiquogi", "7")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/07.mp3");
    
    cherokee.AddPhrase("tsunela", "8")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/08.mp3");
    
    cherokee.AddPhrase("sonela", "9")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/09.mp3");
    
    cherokee.AddPhrase("sgohi", "10")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/10.mp3");
    
    cherokee.AddPhrase("sadu", "11")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/11.mp3");
    
    cherokee.AddPhrase("talidu", "12")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/12.mp3");
    
    cherokee.AddPhrase("tsogadu", "13")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/13.mp3");
    
    cherokee.AddPhrase("nigadu", "14")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/14.mp3");
    
    cherokee.AddPhrase("hisgadu", "15")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/15.mp3");
    
    cherokee.AddPhrase("daladu", "16")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/16.mp3");
    
    cherokee.AddPhrase("galiquadu", "17")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/17.mp3");
    
    cherokee.AddPhrase("neladu", "18")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/18.mp3");
    
    cherokee.AddPhrase("soneladu", "19")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/19.mp3");
    
    cherokee.AddPhrase("talisgohi", "20")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/20.mp3");
    
    cherokee.AddPhrase("talisgohi", "20")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/20.mp3");
    
    cherokee.AddPhrase("talisgohi sowo", "21")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/21.mp3");
    
    cherokee.AddPhrase("talisgohi tali", "22")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/22.mp3");
    
    cherokee.AddPhrase("talisgohi tsoi", "23")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/23.mp3");
    
    cherokee.AddPhrase("talisgohi nvgi", "24")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/24.mp3");
    
    cherokee.AddPhrase("talisgohi hisgi", "25")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/25.mp3");
    
    cherokee.AddPhrase("talisgohi sudali", "26")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/26.mp3");
    
    cherokee.AddPhrase("talisgohi galiquogi", "27")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/27.mp3");
    
    cherokee.AddPhrase("talisgohi tsunela", "28")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/28.mp3");
    
    cherokee.AddPhrase("talisgohi sonela", "29")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/29.mp3");
    
    cherokee.AddPhrase("tsoisgohi", "30")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/30.mp3");
    
    cherokee.AddPhrase("tsoisgohi sowo", "31")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/30.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/01.mp3");
    
    cherokee.AddPhrase("tsoisgohi tali", "32")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/30.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/02.mp3");
    
    cherokee.AddPhrase("tsoisgohi tsoi", "33")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/30.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/03.mp3");
    
    cherokee.AddPhrase("tsoisgohi nvgi", "34")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/30.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/04.mp3");
    
    cherokee.AddPhrase("tsoisgohi hisgi", "35")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/30.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/05.mp3");
    
    cherokee.AddPhrase("tsoisgohi sudali", "36")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/30.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/06.mp3");
    
    cherokee.AddPhrase("tsoisgohi galiquogi", "37")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/30.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/07.mp3");
    
    cherokee.AddPhrase("tsoisgohi tsunela", "38")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/30.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/08.mp3");
    
    cherokee.AddPhrase("tsoisgohi sonela", "39")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/30.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/09.mp3");
    
    cherokee.AddPhrase("nvgisgohi", "40")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/40.mp3");
    
    cherokee.AddPhrase("nvgisgohi sowo", "41")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/40.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/01.mp3");
    
    cherokee.AddPhrase("nvgisgohi tali", "42")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/40.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/02.mp3");
    
    cherokee.AddPhrase("nvgisgohi tsoi", "43")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/40.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/03.mp3");
    
    cherokee.AddPhrase("nvgisgohi nvgi", "44")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/40.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/04.mp3");
    
    cherokee.AddPhrase("nvgisgohi hisgi", "45")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/40.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/05.mp3");
    
    cherokee.AddPhrase("nvgisgohi sudali", "46")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/40.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/06.mp3");
    
    cherokee.AddPhrase("nvgisgohi galiquogi", "47")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/40.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/07.mp3");
    
    cherokee.AddPhrase("nvgisgohi tsunela", "48")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/40.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/08.mp3");
    
    cherokee.AddPhrase("nvgisgohi sonela", "49")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/40.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/09.mp3");
    
    cherokee.AddPhrase("hisgisgohi", "50")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/50.mp3");
    
    cherokee.AddPhrase("hisgisgohi sowo", "51")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/50.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/01.mp3");
    
    cherokee.AddPhrase("hisgisgohi tali", "52")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/50.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/02.mp3");
    
    cherokee.AddPhrase("hisgisgohi tsoi", "53")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/50.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/03.mp3");
    
    cherokee.AddPhrase("hisgisgohi nvgi", "54")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/50.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/04.mp3");
    
    cherokee.AddPhrase("hisgisgohi hisgi", "55")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/50.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/05.mp3");
    
    cherokee.AddPhrase("hisgisgohi sudali", "56")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/50.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/06.mp3");
    
    cherokee.AddPhrase("hisgisgohi galiquogi", "57")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/50.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/07.mp3");
    
    cherokee.AddPhrase("hisgisgohi tsunela", "58")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/50.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/08.mp3");
    
    cherokee.AddPhrase("hisgisgohi sonela", "59")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/50.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/09.mp3");
    
    cherokee.AddPhrase("sudalisgohi", "60")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/60.mp3");
    
    cherokee.AddPhrase("sudalisgohi sowo", "61")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/60.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/01.mp3");
    
    cherokee.AddPhrase("sudalisgohi tali", "62")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/60.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/02.mp3");
    
    cherokee.AddPhrase("sudalisgohi tsoi", "63")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/60.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/03.mp3");
    
    cherokee.AddPhrase("sudalisgohi nvgi", "64")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/60.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/04.mp3");
    
    cherokee.AddPhrase("sudalisgohi hisgi", "65")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/60.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/05.mp3");
    
    cherokee.AddPhrase("sudalisgohi sudali", "66")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/60.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/06.mp3");
    
    cherokee.AddPhrase("sudalisgohi galiquogi", "67")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/60.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/07.mp3");
    
    cherokee.AddPhrase("sudalisgohi tsunela", "68")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/60.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/08.mp3");
    
    cherokee.AddPhrase("sudalisgohi sonela", "69")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/60.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/09.mp3");
    
    cherokee.AddPhrase("galiquasgohi", "70")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/70.mp3");
    
    cherokee.AddPhrase("galiquasgohi sowo", "71")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/70.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/01.mp3");
    
    cherokee.AddPhrase("galiquasgohi tali", "72")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/70.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/02.mp3");
    
    cherokee.AddPhrase("galiquasgohi tsoi", "73")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/70.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/03.mp3");
    
    cherokee.AddPhrase("galiquasgohi nvgi", "74")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/70.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/04.mp3");
    
    cherokee.AddPhrase("galiquasgohi hisgi", "75")
        .soundHandler.AddSoundFile("indigLangSounds/cherokeeSounds/70.mp3")
        .AddSoundFile("indigLangSounds/cherokeeSounds/05.mp3");
    
   
}