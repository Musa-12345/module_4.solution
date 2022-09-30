(function(){
    var speakWord='hello!'
    var speak=function(name){
        console.log(speak + '' + name)
    }
    window.speak=speak;
})(window);