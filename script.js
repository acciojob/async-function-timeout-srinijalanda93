document.getElementById("btn").addEventListener("click",async ()=>{
	const text=document.getElementById("text").value;
	const delay=document.getElementById("delay").value;
	//create a Promise Class where it take the text in delay ms
	if(text && delay){
	let p=new Promise((reslove,reject) =>{
		setTimeOut(()=>{
			resolve(text)
		},delay);
	})
	//using await keyword
		let text2=await p;
		if(text2){
			document.getElmentById("output").textContent=text2;
		}
	}
	
	
})