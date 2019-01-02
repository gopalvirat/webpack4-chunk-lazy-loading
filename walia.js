console.log('walia');

let link = document.getElementById('link');
link.addEventListener('click',function(){
	console.log('OM');
	   import(/* webpackPrefetch: true */ './walia.data.js');
});