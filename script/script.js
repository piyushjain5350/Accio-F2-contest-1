    let arr = [
        { id: 1, name: "john", age: "18", profession: "developer" },
        { id: 2, name: "jack", age: "20", profession: "developer" },
        { id: 3, name: "karen", age: "19", profession: "admin" },
    ];
    
    function PrintDeveloperbyMap() {
        //Write your code here , just console.log
        arr.map((element)=>{
            if(element.profession==="developer"){
            console.log(element); 
            }
        });
    }
    
    function PrintDeveloperbyForEach() {
        //Write your code here , just console.log

        arr.forEach((element)=>{
            if(element.profession==='developer'){
                console.log(element);
            }
        })
    }
    
    function addData() {
        //Write your code here, just console.log
        let newData={
            id:4,
            name:"susan",
            age:"20",
            profession:"intern"
        }
        arr.push(newData);
        
        console.log(arr);
    }
    
    function removeAdmin() {
        //Write your code here, just console.log
        arr.filter((element)=>{
            if(element.profession!=='admin'){
                console.log(element);
            }
        })
    }
    
    function concatenateArray() {
        //Write your code here, just console.log
        let newArr = [
            { id: 5, name: "karine", age: "22", profession: "developer" },
            { id: 6, name: "Ralph", age: "27", profession: "admin" },
            { id: 7, name: "Phuc", age: "24", profession: "developer" },
        ];

        const concatedArr=arr.concat(newArr);
        console.log(concatedArr);
        
    }