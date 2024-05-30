const mysql=require("mysql2");


var con =mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "aryan0011",
    database:"info"
  })
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  class db{
    constructor(body){
        this.body=body;
        this.email=body.email;
        this.pn=body.phone_number
    }
     add(){
            try{
                con.query(
                    "INSERT INTO contacts (id, phone_number, email, linkedin_id, linkprecedence, updatedat, deletedat) VALUES (?, ?, ?, ?, ?, ?, ?)",
                    [2, this.pn, this.email, null, 'primary', new Date(), null],
                    (err) => {
                        if (err) {
                            throw err;
                        }
                    }
                );
                return true
            }catch(err){
                return false
            }
    }
   async get(){
        try{
            if(this.email==null&&this.pn==null){
                return 1
            }
            else{
                if(this.email!=null){
                    var [results]=await con.promise().query("SELECT * FROM contacts WHERE email = ?", [this.email]);
                    return results
                }
                else{
                        var [results]=await con.promise().query("SELECT * FROM contacts WHERE phone_number = ?", [this.pn]);
                        return results
                }
            }
        }catch{
            return 1
        }
    }
  }
module.exports={con,db}