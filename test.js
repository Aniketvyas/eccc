var requestList = {
    "requests":
    [
        {
            "request_id":"",
            "requester":{
              "name":"Aniket vyas",
              "email":"vyasai@gmail.com",
              "address":"add",
              "contact":"9876533212"
            },
            "appliance":"Computer",
            "description":"something something",
            "requested_date":"02-10-2023",
            "completed_date":"01-01-2024",
            "canceled_date":"",
            "provider":{
              "name":"Provider t",
              "email":"iball@sales.com",
              "contact":"4567656767",
              "status":"Inprogress n",
              "comments":[
                {
                  "from":"myself",
                  "message":"fuck off"
                }
              ]
            }
          
          }
    ]
   
   
  }
  function isValid(str){
    for (let i = 0; i < str.length; ++i) { 
        let ch = str.charCodeAt(i); 
        if ( 
            !(ch >= 65 && ch <= 90) && // A-Z 
            !(ch >= 97 && ch <= 122) && // a-z 
            !(ch >= 48 && ch <= 57) &&// 0-9 
            !(str[i]===" " || str[i]==="  "|| str[i]==="   ")
        ) { 
            return false;
        } 
    } 
    return true;
   }


   const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const postRequest = (request) => {
    errList = [];
    var err = false;
    for(var key in request){
        var requests = request[key];
        var requester = requests['requester']
        console.log(requester['name'].length >=3 ,isValid(requester['name']));
        if(requester['name'] || requester['email'] ||equester['address'] || requester['contact'] || requester['appliance']|| requester['description'] ){
            if(requester['name'].length >=3 && isValid(requester['name'])){
                console.log("name true");
            }
            else{
                err=true;
                errList.push("Please make sure that entered values are valid");
            }

            if(validateEmail(requester['email'])){
                console.log(true , "email")
            }
            else{
                err=true;
                errList.push("e Please make sure that entered values are valid");
            }
            if(requester['address'].length>=3){
                console.log(true, "Address")
            }
            else{
                err=true;
                errList.push("a Please make sure that entered values are valid");
            }
            if(requester['contact'].length===10 && (requester['contact'][0]==="9" || requester['contact'][0]==="8" ||requester['contact'][0]==="7"||requester['contact'][0]==="6" )){
                console.log(requester['contact'][0] === "1")
                console.log(true,"contact ");
            }
            else{
                err=true;
                errList.push("c Please make sure that entered values are valid");
            }
        }
        else{
            err=true;
            errList.push("Please enter values for requester_name, requester_address, requester_contact, appliance, and description")
        }

        console.log(errList)
       
    }
    if(!err){
        requestList.push(request);
    }
}


// postRequest(obj);


const deleteRequest = (id) => {
    var status = false;
    for(var key in request){
        if(request[key]['request_id'] === id){
            delete request['key'];
            status=true;
        }
    }
    if(!status) return "Invalid ID";
}


const getRequestList = (filters) => {
    var keys = "";
    var obj;
    var request = requestList['requests'];

    if(Object.keys(filters).length === 0){
        return requestList;
    }
    else{
        for(var k in filters){
            if(k ==="appliance"){
                keys = "appliance"
                for(let i=0;i<request.length;i++){
                    if(request[i]['appliance'] === filters[k]){
                        obj = request[i]
                    }
                }
            }
            if(k === "request_id"){
                keys = "request_id"
                for(let i=0;i<request.length;i++){
                    if(request[i]['request_id'] === filters[k]){
                        obj = request[i]
                    }
                }
            }
            if(k === "request_name"){
                keys = "request_name"
                for(let i=0;i<request.length;i++){
                    if(request[i]['request_name'] === filters[k]){
                        obj = request[i]
                    }
                }
            }
            if(k === "startDate"){
                keys = "startDate";
                var startDate = new Date(filters[k]);
                console.log("S",startDate);
                // var typeDate = new Date(request[i][type]);
                // console.log(mydate.toDateString());
                for(let i=0;i<request.length;i++){
                    console.log(request[i][filters['type']],new Date(request[i][filters[k]]));
                    if(new Date(request[i][filters['type']]) >=startDate){
                        obj = request[i]
                    }
                }
            }
            if(k === "provider_name"){
                keys = "provider_name"
                for(let i=0;i<request.length;i++){
                    if(request[i]['provider']['name'] === filters[k]){
                        obj = request[i]
                    }
                }
            }
            if(k === "endDate"){
                keys = "endDate"
                var endDate = new Date(filters[k]);
                // var typeDate = new Date(request[type]);
                // console.log(mydate.toDateString());
                for(let i=0;i<request.length;i++){
                    if(new Date(request[i][filters['type']]) >=endDate){
                        obj = request[i]
                    }
                }
            }
            if(k === "type"){
                keys = "type"
            }
            if(k === "status"){
                keys = "status";
                for(let i=0;i<request.length;i++){
                    if(request[i]['provider']['status'] === filters[k]){
                        obj = request[i]
                    }
                }
            }
            // for(var l in request){
            //     if(l['appliance'] === filters[k]){
            //         return request[i]
            //     }
            // }

        }
        console.log("\n\n\n obj",obj)
    }
  }



  const updateRequestList = (data) => {

    for(var key in data){
        if(key === "status"){

        }
        if(key === "from"){

        }
        if(Objects.keys(data).length === 0 ){
            return "Invalid Update Parameter";
        }
    }

  }

//   var mydate = new Date('04-23-2022');
//   console.log(mydate.toDateString());

//   keys = "startDate";
//   var startDate = new Date("01-28-2024");
// //   var typeDate = new Date(requester[type]);
//   console.log(mydate.toDateString());
//   for(var l in requestList){
//       if(new Date("01-29-2024") >=startDate){
//          console.log(true)
//       }
//   }


const test = (data,er) => {
    console.log(data,arguments.length);
}
test({},"re")

// getRequestList({ appliance: "Computer", provider_name: "Provider One" });