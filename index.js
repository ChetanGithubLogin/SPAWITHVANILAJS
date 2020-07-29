
document.getElementById('nav').addEventListener('click',function(e){
    console.log(e.target.id);
   location.href = location.origin + location.pathname + '#' + e.target.id
})

window.addEventListener('popstate',function(e){
 console.log(e);
 module.navigateToRoute();
})

window.onload = function(){
    module.navigateToRoute();
}

var module ={
    clearDivs:function(){
        document.getElementById('bookDiv').innerHTML = null;
        document.getElementById('gamesDiv').innerHTML = null;
        document.getElementById('mobileDiv').innerHTML = null;
    },

    callrender:function(data,renderId){
        var cntr = document.getElementById(renderId);
        var UL = document.createElement('ul')
        UL.id ="bookLst"
        cntr.appendChild(UL);
        var ulcnt = document.getElementById('bookLst')
        data.forEach(element => {
        var LI =document.createElement('li');
        LI.innerText = element.name;
        ulcnt.appendChild(LI);

        });

    },
    navigateToRoute:function(){
        var currentPath = location.hash.substr(1);
        if(currentPath === 'Home'){

            var d = [{
                 id:1,
                 name:'Test1'
            },{
                id:2,
                name:'Test2'
           }];
           module.clearDivs();
           module.callrender(d,'bookDiv')

        }else if(currentPath === 'Games'){
            var d = [{
                id:1,
                name:'Game1'
           },{
               id:2,
               name:'Game2'
          }];
          module.clearDivs();
          module.callrender(d,'gamesDiv')

        }else if(currentPath === 'Mobile'){

        }
    }

}

