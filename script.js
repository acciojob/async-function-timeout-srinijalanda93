document.getElementById("btn").addEventListener("click",async ()=>{
	const text=document.getElementById("text").value;
	const delay=document.getElementById("delay").value;
	//create a Promise Class where it take the text in delay ms
	if(text && delay){
	let pro=new Promise((reslove,reject) =>{
		setTimeOut(()=>{
			resolve(text)
		},delay);
	})
	//using await keyword
		let text2=await pro;
		if(text2){
			document.getElmentById("output").textContent=text2;
		}
	}
	
	
})