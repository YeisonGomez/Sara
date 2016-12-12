#pragma strict

var labelMessage: UI.Text;
var labelMessage2: UI.Text;
var cont = 1;
private var note : String;

// Show the web view (with margins) and load the index page.
function ActivateWebView() {
    WebMediator.LoadUrl("http://chaira.udla.edu.co/api/v0.1/oauth2/authorize.asmx/authPin?response_type=pin&client_id=857614255265&state=x");
    WebMediator.SetMargin(12, Screen.height / 2 + 12, 12, 12);
    WebMediator.Show();
}

// Hide the web view.
private function DeactivateWebView() {
    WebMediator.Hide();
    // Clear the state of the web view (by loading a blank page).
    WebMediator.LoadUrl("about:blank");
}

// Process messages coming from the web view.
private function ProcessMessages() {
	
	while (true) {
		cont++;
		yield WaitForSeconds (2);
		try{
	        // Poll a message or break.
	        //var message = WebMediator.PollMessage();
	        labelMessage.text = "hola " + cont;
	        labelMessage2.text = "buqui " + WebMediator.getUrl();
	        //if (!message) break;

	        /*if (message.path == "/spawn") {
	            
	        } else if (message.path == "/note") {
            	// "note" message.
	            //note = message.args["text"] as String;
	        } else if (message.path == "/print") {
	            // "print" message.
	            //var text = message.args["line1"] as String;
	            //if (message.args.ContainsKey("line2")) {
	              //  text += "\n" + message.args["line2"] as String;
	            //}
	            //Debug.Log(text);
	            //Debug.Log("(" + text.Length + " chars)");
	        } else if (message.path == "/close") {
	            // "close" message.
	            //DeactivateWebView();
	        }*/
        }catch(e){
        	labelMessage2.text = e.Message;
		} 
    }  
}

function Start() {
    WebMediator.Install();
    labelMessage.text = "Empezo";
    labelMessage2.text = "Codigo";
    ProcessMessages();
}

function Update() {
}
