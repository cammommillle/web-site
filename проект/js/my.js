function myF(id)
{
	var x = document.getElementById(id);
	if(x.style.display === "none")
	{
		x.style.display ="block";
	}
	else
	{
		x.style.display="none"
	}
}




function proverit()
{
	otv_uch_1 = document.getElementById('z_1').value;
	otv_uch_2 = document.getElementById('z_2').value;
	otv_uch_3 = document.getElementById('z_3').value;
	otv_uch_4 = document.getElementById('z_4').value;
	otv_uch_5 = document.getElementById('z_5').value;

	ball = 0;
	if(otv_uch_1 == pr_otv_zadachi_1){
	ball +=1;
}

if(otv_uch_2 == pr_otv_zadachi_2)
{
	ball +=1;
}
if(otv_uch_3 == pr_otv_zadachi_3)
{
	ball +=1;
}
if(otv_uch_4 == pr_otv_zadachi_4)
{
	ball +=1;
}
if(otv_uch_5 == pr_otv_zadachi_5)
{
	ball +=1;
}
vsego_zadach = 5;
procent_vip = ball/vsego_zadach * 100;
document.getElementById('rezultat').innerHTML = "Задания выполнены верно на "+Math.round(procent_vip)+"%.";

}

function sled_vopr(){
    if(document.getElementById('vopros4').style.display == "block"){
        document.getElementById('vopros4').style.display = "none";
        document.getElementById('vopros5').style.display = "block";
        document.getElementById('kn_sl').style.display = "none";
        document.getElementById('kn_pr').style.display = "block";
    }
	if(document.getElementById('vopros3').style.display == "block"){
        document.getElementById('vopros3').style.display = "none";
        document.getElementById('vopros4').style.display = "block";
    }
    if(document.getElementById('vopros2').style.display == "block"){
        document.getElementById('vopros2').style.display = "none";
        document.getElementById('vopros3').style.display = "block";
        
    }
    if(document.getElementById('vopros1').style.display == "block"){
        document.getElementById('vopros1').style.display = "none";
        document.getElementById('vopros2').style.display = "block";
    }
}

