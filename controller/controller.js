const mysql=require("../db/sql")
 function get(req,res){
    let get=new mysql.db(req.body);
   get.get()
    .then(js => {
        if (js == 1) {
            res.send("not okay");
        }
         else {
            if(js.length==0){
                a=get.add()
                if(a==true)
                    res.send("find")
                else
                    res.send("no")
            }
            else{ 
                console.log(js,typeof(js));
            res.send(js);}
        }
    })
}
module.exports={get}