let submit = document.getElementById('submit')
submit.addEventListener('click',function(){
	import (/* webpackPrefetch: true,  webpackChunkName: "group-walia" */ './walia.js');
});


if(window.location.href.indexOf("pro") > -1){
	import (/* webpackPrefetch: true, webpackChunkName: 'pro' */ './pro.js');	
}
