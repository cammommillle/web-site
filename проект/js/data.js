function cl()
{
	if(document.getElementById('t1').style.display === "none")
	{
		document.getElementById('t1').style.display = "block";
		document.getElementById('t2').style.display = "block";
		document.getElementById('t3').style.display = "block";
		document.getElementById('t4').style.display = "block";
		document.getElementById('t5').style.display = "block";
		document.getElementById('test1').style.display = "none";

	}
	else
	{
		document.getElementById('t2').style.display = "none";
		document.getElementById('t1').style.display = "none";
		document.getElementById('t3').style.display = "none";
		document.getElementById('t4').style.display = "none";
		document.getElementById('t5').style.display = "none";
		document.getElementById('test1').style.display = "block";
	}
document.getElementById('vopros1').style.display = "none";
document.getElementById('vopros2').style.display = "none";
document.getElementById('vopros3').style.display = "none";
document.getElementById('vopros4').style.display = "none";
document.getElementById('vopros5').style.display = "none";
document.getElementById('vopros1').style.display = "block";
document.getElementById('kn_sl').style.display = "block";
document.getElementById('kn_pr').style.display = "none";
document.getElementById('rezultat').innerHTML = "";
document.getElementById('z_1').value="";
document.getElementById('z_2').value="";
document.getElementById('z_3').value="";
document.getElementById('z_4').value="";
document.getElementById('z_5').value="";
}

function myF1()
{
	if(document.getElementById('t1').style.display === "none")
	{
		document.getElementById('t1').style.display = "block";
		document.getElementById('t2').style.display = "block";
		document.getElementById('t3').style.display = "block";
		document.getElementById('t4').style.display = "block";
		document.getElementById('t5').style.display = "block";
		document.getElementById('test1').style.display = "none";

	}
	else
	{
		document.getElementById('t2').style.display = "none";
		document.getElementById('t1').style.display = "none";
		document.getElementById('t3').style.display = "none";
		document.getElementById('t4').style.display = "none";
		document.getElementById('t5').style.display = "none";
		document.getElementById('test1').style.display = "block";
	}

	vopros_1 = "Убийцей оказался главный герой? (ответ да/нет)";
	vopros_2 = "Смог ли выйти из тюрьмы Джи Тэ? (ответ да/нет)";
	vopros_3 = "Пытался ли стереть улики главный герой? (ответ да/нет)";
	vopros_4 = "Сколько адвокатов было у главного героя?";
	vopros_5 = "Была ли такая сцена: Хён Су выбрасывает сигарету с крыши высотки. Качается. Вперёд. Назад. Вперёд. Назад? (ответ да/нет)";


	pr_otv_zadachi_1 = "нет"; 
	pr_otv_zadachi_2 = "нет";
	pr_otv_zadachi_3 = "да";
	pr_otv_zadachi_4 = 2;
	pr_otv_zadachi_5 = "да";

	document.getElementById('v_1').innerHTML = vopros_1;
	document.getElementById('v_2').innerHTML = vopros_2;
	document.getElementById('v_3').innerHTML = vopros_3;
	document.getElementById('v_4').innerHTML = vopros_4;
	document.getElementById('v_5').innerHTML = vopros_5;
}

function myF2()
{
	if(document.getElementById('t1').style.display === "none")
	{
		document.getElementById('t1').style.display = "block";
		document.getElementById('t2').style.display = "block";
		document.getElementById('t3').style.display = "block";
		document.getElementById('t4').style.display = "block";
		document.getElementById('t5').style.display = "block";
		document.getElementById('test1').style.display = "none";

	}
	else
	{
		document.getElementById('t2').style.display = "none";
		document.getElementById('t1').style.display = "none";
		document.getElementById('t3').style.display = "none";
		document.getElementById('t4').style.display = "none";
		document.getElementById('t5').style.display = "none";
		document.getElementById('test1').style.display = "block";
	}

	vopros_1 = "Вышла ли замуж главная героиня? (ответ да/нет)";
	vopros_2 = "Узнал ли Хен Сик о суперсиле главной героини? (ответ да/нет)";
	vopros_3 = "Пропадали ли силы главной героини? (ответ да/нет)";
	vopros_4 = "Сколько мужчин боролись за сердце главной героини?";
	vopros_5 = "Осталась ли в конце героиня с другом детства? (ответ да/нет)";


	pr_otv_zadachi_1 = "да"; 
	pr_otv_zadachi_2 = "да";
	pr_otv_zadachi_3 = "да";
	pr_otv_zadachi_4 = 2;
	pr_otv_zadachi_5 = "нет";

	document.getElementById('v_1').innerHTML = vopros_1;
	document.getElementById('v_2').innerHTML = vopros_2;
	document.getElementById('v_3').innerHTML = vopros_3;
	document.getElementById('v_4').innerHTML = vopros_4;
	document.getElementById('v_5').innerHTML = vopros_5;
}

function myF3()
{
	if(document.getElementById('t1').style.display === "none")
	{
		document.getElementById('t1').style.display = "block";
		document.getElementById('t2').style.display = "block";
		document.getElementById('t3').style.display = "block";
		document.getElementById('t4').style.display = "block";
		document.getElementById('t5').style.display = "block";
		document.getElementById('test1').style.display = "none";

	}
	else
	{
		document.getElementById('t2').style.display = "none";
		document.getElementById('t1').style.display = "none";
		document.getElementById('t3').style.display = "none";
		document.getElementById('t4').style.display = "none";
		document.getElementById('t5').style.display = "none";
		document.getElementById('test1').style.display = "block";
	}

	vopros_1 = "Узнала ли главная героииня кто виновен в смерти ее отца? (ответ да/нет)";
	vopros_2 = "Стал ли Хан Сок директором? (ответ да/нет)";
	vopros_3 = "Снесли ли Кымга Плазу? (ответ да/нет)";
	vopros_4 = "Смогли ли главные герои достать золото? (ответ да/нет)";
	vopros_5 = "Были ли иные причины, кроме золота, почему Винченцо приехал в Корею? (ответ да/нет)";


	pr_otv_zadachi_1 = "да"; 
	pr_otv_zadachi_2 = "да";
	pr_otv_zadachi_3 = "нет";
	pr_otv_zadachi_4 = "да";
	pr_otv_zadachi_5 = "нет";

	document.getElementById('v_1').innerHTML = vopros_1;
	document.getElementById('v_2').innerHTML = vopros_2;
	document.getElementById('v_3').innerHTML = vopros_3;
	document.getElementById('v_4').innerHTML = vopros_4;
	document.getElementById('v_5').innerHTML = vopros_5;
}

function myF4()
{
	if(document.getElementById('t1').style.display === "none")
	{
		document.getElementById('t1').style.display = "block";
		document.getElementById('t2').style.display = "block";
		document.getElementById('t3').style.display = "block";
		document.getElementById('t4').style.display = "block";
		document.getElementById('t5').style.display = "block";
		document.getElementById('test1').style.display = "none";

	}
	else
	{
		document.getElementById('t2').style.display = "none";
		document.getElementById('t1').style.display = "none";
		document.getElementById('t3').style.display = "none";
		document.getElementById('t4').style.display = "none";
		document.getElementById('t5').style.display = "none";
		document.getElementById('test1').style.display = "block";
	}
	
	vopros_1 = "Оказался ли убийцей матери главной героини член её семьи? (ответ да/нет)";
	vopros_2 = "Кем , оказалось, приходилась главная героиня её дедушке? (ответ в И.п.)";
	vopros_3 = "Главная героиня познакомилась с главным героем в супермаркете? (ответ да/нет)";
	vopros_4 = "Сколько детей было у отца главной героини?";
	vopros_5 = "Были ли у второго сына семьи Мо странные увлечения? (ответ да/нет)";


	pr_otv_zadachi_1 = "да"; 
	pr_otv_zadachi_2 = "дочь";
	pr_otv_zadachi_3 = "нет";
	pr_otv_zadachi_4 = 3;
	pr_otv_zadachi_5 = "да";

	document.getElementById('v_1').innerHTML = vopros_1;
	document.getElementById('v_2').innerHTML = vopros_2;
	document.getElementById('v_3').innerHTML = vopros_3;
	document.getElementById('v_4').innerHTML = vopros_4;
	document.getElementById('v_5').innerHTML = vopros_5;
}

function myF5()
{
	if(document.getElementById('t1').style.display === "none")
	{
		document.getElementById('t1').style.display = "block";
		document.getElementById('t2').style.display = "block";
		document.getElementById('t3').style.display = "block";
		document.getElementById('t4').style.display = "block";
		document.getElementById('t5').style.display = "block";
		document.getElementById('test1').style.display = "none";

	}
	else
	{
		document.getElementById('t2').style.display = "none";
		document.getElementById('t1').style.display = "none";
		document.getElementById('t3').style.display = "none";
		document.getElementById('t4').style.display = "none";
		document.getElementById('t5').style.display = "none";
		document.getElementById('test1').style.display = "block";
	}
	
	vopros_1 = "Убийцей оказался главный герой? (ответ да/нет)";
	vopros_2 = "Был ли психопатам Сон Ё Хан? (ответ да/нет)";
	vopros_3 = "Была ли тётя кровной родственницей главного героя? (ответ да/нет)";
	vopros_4 = "Раскаялся ли главный герой? (ответ да/нет)";
	vopros_5 = "Убил ли Хан Со Джуна его кровный сын? (ответ да/нет)";


	pr_otv_zadachi_1 = "да"; 
	pr_otv_zadachi_2 = "нет";
	pr_otv_zadachi_3 = "нет";
	pr_otv_zadachi_4 = "да";
	pr_otv_zadachi_5 = "да";

	document.getElementById('v_1').innerHTML = vopros_1;
	document.getElementById('v_2').innerHTML = vopros_2;
	document.getElementById('v_3').innerHTML = vopros_3;
	document.getElementById('v_4').innerHTML = vopros_4;
	document.getElementById('v_5').innerHTML = vopros_5;
}
