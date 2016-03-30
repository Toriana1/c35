$(document).ready(function(){
  getStub('/getTrains', function(results))
  $.get('/trains', function(results){
    var tableString = "<tr><th>Print</th><th>Edit Request</th><th>Course Name</th>End Date<th>Supervisor Approval</th><th>Dept Head Approval</th><th>Course Completion Status</th>Completion<th></th></tr>"
    console.log(results);
    $.each(results, function(index, rowObject){
      tableString += "<tr><td>" + rowObject.name + "</td>" +
        "<td>" + rowObject.inservice + "</td>" +
        "<td>" + rowObject.numberofavailable + "</td></tr>"
    });
    $('#trainTable').html(tableString);
  });

});
function getStub(endpoint, callback){
  var stubbedJson="";
  if (endpoint =="/getTrains"){
    stubbedJson = [
{"id":1,"name":"Print","inservice":true,"numberofavailable":8},
{"id":2,"name":"Edit Request","inservice":true,"numberofavailable":10},
{"id":3,"name":"Course Name","inservice":true,"numberofavailable":10},
{"id":4,"name":"End Date","inservice":true,"numberofavailable":8}]
{"id":5,"name":"Supervisor Approval","inservice":true,"numberofavailable":8},
{"id":6,"name":"Dept Head","inservice":true,"numberofavailable":10},
{"id":7,"name":"Course Completion Status","inservice":true,"numberofavailable":10},
{"id":8,"name":"Completion","inservice":true,"numberofavailable":8}]
;
  }
  callback(stubbedJson);  
}

