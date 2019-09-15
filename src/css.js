

window.onload = function () {


    var a = document.getElementById('switch');
    var b=document.getElementById('content');
   
    a.onclick = function() {
      
        if (this.innerHTML=='On')this.innerHTML = 'Off';
	        else this.innerHTML = 'On';
        
        return false;
    }
	
	b.onclick=function(){
		if(a.innerHTML=='On')
		{
		if(this.style.backgroundColor=='rgb(255, 255, 255)') 
			this.style.backgroundColor='rgb(148, 143, 143)';
			else this.style.backgroundColor='rgb(255, 255, 255)';
		}return false;
}
}
