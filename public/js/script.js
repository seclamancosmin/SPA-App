const request = new Request("https://gist.githubusercontent.com/dalgard/3651234da390712c04f5/raw/fa56b499c10051af1cfdb9f71f8d9e5595cb3660/peopleMock.json");

    fetch(request)
        .then(function(data){
            if(data.ok) {
                return data.json();  //returns a promise containing the JSON data extracted from the Response object            
            } else {
                console.log(data.status);
                return Promise.reject(data.status);
            }
        })
        .catch(function(err){
            console.log("Error: " + err);
        })
        .then(function createTableFromJson(data){
                let col = [];
                for (let i = 0; i < data.length; i++) {
                    for (let key in data[i]) {
                        if (col.indexOf(key) === -1) {
                            col.push(key);
                        }
                    }
                }

                // CREATE DYNAMIC TABLE.
                let table = document.createElement("table");
                table.id = 'table';                 //ADD ID TO TABLE
                table.className = 'table table-condensed';

                // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

                let tr = table.insertRow(-1);                   // TABLE ROW.

                for (let i = 0; i < col.length; i++) {
                    let th = document.createElement("th");      // TABLE HEADER.
                    th.innerHTML = col[i];
                    tr.appendChild(th);
                    th.id = 'th' + [i];
                }

                // ADD JSON DATA TO THE TABLE AS ROWS.
                for (let i = 0; i < data.length; i++) {

                    tr = table.insertRow(-1);
                    tr.className = 'tr';                        //ADD className TO TR


                    for (let j = 0; j < col.length; j++){
                        let tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = data[i][col[j]];
                    }
                }

                // ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
                let divContainer = document.getElementById("showData");
                divContainer.innerHTML = "";
                divContainer.appendChild(table);
        })
    //     .then(function callModules(){
    //         changePageModule();
    //         countRowsModule();
    //         selectRowsModule();
    //     });

    //     //CHANGE PAGE
    // let changePageModule = (function () {
    //     let changePage = function () {
    //         document.getElementById('th1').onclick = function () {
    //             location.href = 'http://google.com';
    //         };
    //     };
    //     return changePage;
    // } ());
    //     //COUNT ROWS
    // let countRowsModule = (function () {
    //     let countRows = function () {
    //         let recordsInTable = document.getElementById("table").rows.length - 1;   //get all tr records and remove header
    //         document.getElementById("tableRecords").innerHTML = "Found " + recordsInTable + " users in the table.";
    //     };
    //     return countRows;
    // } ());
    //     //SELECT ROWS
    // let selectRowsModule = (function(){
    //     let selectRows = function() {
    //         let tableRows = document.querySelectorAll('.tr');
    //         for (i = 0; i < tableRows.length; i++) {
    //             tableRows[i].addEventListener('click', function (){
    //                 this.className = {
    //                     tr: 'first', first:'second', second: 'tr'
    //                 }[this.className];
    //             });
    //         }
    //     };
    //     return selectRows;
    // }());
    