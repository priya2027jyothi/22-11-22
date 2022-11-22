const  http=require("http")

http.createServer((req,res)=>{
	res.write("winter bear in christmas tree")
	res.end()
}).listen(2003)