(function(){
    var speakWord='hello!'
    var helloSpeaker=function(name){
        console.log(speak + '' + name)
    }
    window.helloSpeaker=helloSpeaker;
})(window);
