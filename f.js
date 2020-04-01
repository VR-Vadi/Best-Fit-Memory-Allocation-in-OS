function Firstfit(){
	
	var pid = document.getElementById("pid").value;
	var psize = document.getElementById("psize").value;
	var patime = document.getElementById("patime").value;
	var mbsize = document.getElementById("mbsize").value;
	pid = pid.split(",");
	psize = psize.split(",");
	patime = patime.split(",");
	mbsize = mbsize.split(",");

	var n = pid.length;

	if(pid.length!=psize.length || psize.length!= patime.length || patime.length!= pid.length){
		alert("Please Enter same no of correct data in pid,psize and arrival time");
	}

	for (var i = 0; i < pid.length; i++) {
		if(patime[i]<0 || psize[i]<0){
			alert("Process arrival time and Process size must be greater than 0");
		}
	}

	for (var i = 0; i < pid.length; i++) {
		for (var j = i; j < pid.length; j++) {
			if(pid[i] == pid[j] && i!=j){
				alert("Enter Same Process ID twice");
			}
		}
	}

	var p = new Array(3);
	p[0]=pid;
	p[1]=psize;
	p[2]=patime;

	var noofp = pid.length;
	var noofb = mbsize.length;

	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < noofp; j++) {
			p[i][j]=parseInt(p[i][j]);
		}
	}
	var temp=0;
	for (var i = 0; i < n; i++) {
		for (var j = i; j < n; j++) {
			if(p[2][i]>p[2][j]){
				temp = p[0][i];
				p[0][i]=p[0][j];
				p[0][j]=temp;
				temp = p[1][i];
				p[1][i]=p[1][j];
				p[1][j]=temp;
				temp = p[2][i];
				p[2][i]=p[2][j];
				p[2][j]=temp;
			}
		}
	}

	var allocate = new Array(noofp);

	for(var i = 0 ; i < noofp ; i++){
		allocate[i] = -1;
	}

	for (var i = 0; i < noofp; i++) {
		for (var j = 0; j < noofb; j++) {
			if(mbsize[j] >= p[1][i]){
				allocate[i] = j;
				mbsize[j] -= p[1][i];
				break;
			}
		}
	}

	for (var i = 0; i < noofp; i++) {
		allocate[i]++;
	}

	document.write("<center><br><br><table border=1><tr><th>Process ID.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Process Arrival Time&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Process Size&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Block No.</th></tr>");


	for (var i = 0; i < noofp; i++) {

		document.write("<tr><td>"+p[0][i]+"</td><td>"+p[2][i]+"</td><td>"+p[1][i]+"</td><td>");
		if(allocate[i]){
			document.write(allocate[i]);
		}
		else{
			document.write("Unavailable");
		}

		document.write("</td></tr>");


	}

	document.write("</tabe>");

}


function Bestfit(){

	var pid = document.getElementById("pid").value;
	var psize = document.getElementById("psize").value;
	var patime = document.getElementById("patime").value;
	var mbsize = document.getElementById("mbsize").value;
	pid = pid.split(",");
	psize = psize.split(",");
	patime = patime.split(",");
	mbsize = mbsize.split(",");

	var n = pid.length;

	if(pid.length!=psize.length || psize.length!= patime.length || patime.length!= pid.length){
		alert("Please Enter correct data");
	}

	for (var i = 0; i < pid.length; i++) {
		if(patime[i]<0 || psize[i]<0){
			alert("Process arrival time and Process size must be greater than 0");
		}
	}

	for (var i = 0; i < pid.length; i++) {
		for (var j = i; j < pid.length; j++) {
			if(pid[i] == pid[j] && i!=j){
				alert("Enter Same Process ID twice");
			}
		}
	}

	var p = new Array(3);
	p[0]=pid;
	p[1]=psize;
	p[2]=patime;

	var noofp = pid.length;
	var noofb = mbsize.length;

	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < noofp; j++) {
			p[i][j]=parseInt(p[i][j]);
		}
	}
	var temp=0;
	for (var i = 0; i < n; i++) {
		for (var j = i; j < n; j++) {
			if(p[2][i]>p[2][j]){
				temp = p[0][i];
				p[0][i]=p[0][j];
				p[0][j]=temp;
				temp = p[1][i];
				p[1][i]=p[1][j];
				p[1][j]=temp;
				temp = p[2][i];
				p[2][i]=p[2][j];
				p[2][j]=temp;
			}
		}
	}


}