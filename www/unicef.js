
var imageNamePmt = "";
var imageName2Pmt = "";
var imagePathPmtA="";
var imagePath2PmtA="";
var pmt_achPhoto="";



var achPhoto="";
var achPhoto2="";
var imageName = "";
var imageName2 = "";
var imagePathA="";
var imagePath2A="";

var latitude="";
var longitude="";
var upListFlag=0;



function getLocationInfoAchPmt() {	
	var options = { enableHighAccuracy: false};	
	navigator.geolocation.getCurrentPosition(onSuccessPmt, onErrorPmt, options);				
	$(".errorChk").html("Confirming location. Please wait.");
}
// onSuccess Geolocation
function onSuccessPmt(position) {
	$("#pmt_ach_lat").val(position.coords.latitude);
	$("#pmt_ach_long").val(position.coords.longitude);
	$(".errorChk").html("Location Confirmed");
}
// onError Callback receives a PositionError object
function onErrorPmt(error) {
   $("#pmt_ach_lat").val(0);
   $("#pmt_ach_long").val(0);
   $(".errorChk").html("Failed to Confirmed Location.");
}

function getLocationInfoAchComp() {	
	var options = { enableHighAccuracy: false};	
	navigator.geolocation.getCurrentPosition(onSuccessComp, onErrorComp, options);				
	$(".errorChk").html("Confirming location. Please wait.");
}
// onSuccess Geolocation
function onSuccessComp(position) {
	$("#com_ach_lat").val(position.coords.latitude);
	$("#com_ach_long").val(position.coords.longitude);
	$(".errorChk").html("Location Confirmed");
}
// onError Callback receives a PositionError object
function onErrorComp(error) {
   $("#com_ach_lat").val(0);
   $("#com_ach_long").val(0);
   $(".errorChk").html("Failed to Confirmed Location.");
}


//---- online 
//var apipath_pmt="http://c003.cloudapp.net/banbeis/syncmobile_new/";

//--- local
var apipath_pmt="http://127.0.0.1:8000/banbeis/syncmobile_new/";

 url ="";


$(document).ready(function(){
	if (localStorage.synced!='YES'){
			 url = "#pagesync";						
		}else{
			
			if (upListFlag==0){
				$("#ffUpDiv").html(localStorage.upazilaList);	
				upListFlag=1;
			}else{
				$('#ffUpDiv').empty();
				$('#ffUpDiv').append(localStorage.upazilaList).trigger('create');
			}
			
			/*--------compliance-----------*/
			$("#agr_type_con").hide();		
			$("#act_con").hide();
			$("#pta_con").hide();
			$("#drh").hide();
			$("#sa_report").hide();
			$("#isf").hide();
			$("#iaa").hide();
			$("#award_dist").hide();
			$("#arsenic").hide();
			$("#ins_tube").hide();
			$("#eacm").hide();
			$("#social_audit").hide();
			/*--------compliance-end----------*/
			
			url = "#homePage";
		}
	$.mobile.navigate(url);
	
	/*if (localStorage.selectedSchool!='YES'){
	 $("#c_search").show();
	 $("#c_selected").hide();
	 
	 */
		/*var temp='';
		temp=localStorage.cp1;
		if(temp.length > 3){
			$("#cp1").html(localStorage.cp1);
			}*/
	/*}else{		
		$("#c_search").hide();
		$("#c_selected").show();
	}*/
	
});

function syncBasic() {
					
		var mobile=$("#mobile").val() ;
	 	var password=$("#password").val() ;
		
		/*if (mobile=="" || password==""){
			 $(".errorMsg").html("Required mobile no and password");	
		 }else{	
			 $('#syncBasic').hide();			 
			 $(".errorMsg").html("Sync in progress. Please wait...");
			if(localStorage.sync_code==undefined || localStorage.sync_code==""){
					localStorage.sync_code=0
				}*/
		
		 	//alert(apipath_pmt+'passwordCheck?cid=BANBEIS&mobile='+mobile+'&password='+encodeURIComponent(password)+'&sync_code='+localStorage.sync_code);
			//$.ajax({
//			  url:apipath_pmt+'passwordCheck?cid=BANBEIS&mobile='+mobile+'&password='+encodeURIComponent(password)+'&sync_code='+localStorage.sync_code,
//			  success: function(result) {
//				syncResult=result
//				//alert(syncResult);
//				var syncResultArray = syncResult.split('rdrd');
//					localStorage.synced=syncResultArray[0];
//					if (localStorage.synced=='YES'){	
//						localStorage.sync_code=syncResultArray[1];
//						localStorage.upazilaList=syncResultArray[2];						
//						
//						localStorage.mobile_no=mobile;
//						
//						
//						$(".errorMsg").html("Sync Successful");
//						//alert('aa');
//						
//						$('#syncBasic').show();
//						
//						/*--------------*/
//						$("input[name='agr_seqaep']:checked").val('2');
//						//$("#agr_type_con").hide();
//						$("input[name='add_cls_seqaep']:checked").val('2');						
//						//$("#act_con").hide();
//						$("input[name='add_cls_seqaep']:checked").val('2');
//						//$("#pta_con").hide();
//						$("input[name='pta_exist_ins']:checked").val('2');
//						//$("#drh").hide();
//						$("input[name='ins_drh_pro']:checked").val('2');
//						//$("#sa_report").hide();
//						$("input[name='report_pre_annu_exam']:checked").val('2');
//						//$("#isf").hide();
//						$("input[name='ins_rec_isf']:checked").val('2');
//						//$("#iaa").hide();
//						$("input[name='ins_receive_tk']:checked").val('2');
//						//$("#award_dist").hide();
//						$("input[name='smc_awared_dis']:checked").val('1');
//						
//						$("input[name='ins_per_dphe_water']:checked").val('2');
//						
//						$("input[name='tube_setup_ins']:checked").val('2');
//						
//						$("input[name='ins_rec_grant_eacm']:checked").val('2');
//						
//						$("input[name='ins_rec_grant_sa']:checked").val('2');
						
						/*--------------*/
						//$("#agr_type_con").val('');
						
						
						
						url = "#homePage";
						$.mobile.navigate(url);
						
						//localStorage.selectedSchool='NO';
						/*localStorage.cp1='NO';
						localStorage.cp2='NO';
						localStorage.cp3='NO';
						localStorage.cp4='NO';
						localStorage.cp5='NO';
						localStorage.cp6='NO';
						localStorage.cp7='NO';
						localStorage.cp8='NO';*/
												
					//}else{
//						
//						$(".errorMsg").html("Sync Failed. Authorization or Network Error.");
//						$('#syncBasic').show();
//					}
//				
			  }//----/success f
			//});//------/ajax
			
		// }//-----/field
			
	//}
	

function menuClick(){
		$(".errorChk").text("");
		$(".sucChk").text("");
		
		$("#btn_take_pic").show();
		$("#btn_ach_lat_long").show();
		
		$('#up_list_search').val('');
		
		url = "#homePage";
		$.mobile.navigate(url);
	
	}
//----------------back button
function backClick(){
	$(".errorChk").text("");
	}


	
//---------------------------Banbeis data page 
var banbeisFirstData="";
var banbeisData="";
var banbeisDataPage2="";
var banbeisDataPage3="";
var banbeisDataPage4="";
var banbeisDataPage5="";
var banbeisDataPage6="";


function pmthhVerification(){
	
	$("#studentQuickID").val("");
		
	/*if(localStorage.sync_code==undefined || localStorage.sync_code==""){
			$(".errorChk").text("Required Sync");
		}else{*/
			//alert(apipath+'get_div_list?cid=BANBEIS&sync_code='+localStorage.sync_code);
			$.ajax({
			  url:apipath_pmt+'get_div_list?cid=BANBEIS&sync_code='+localStorage.sync_code,
			  success: function(divStr) {
					  divNameList=divStr.split("<fd>");
					  divCmbo="";
					  for (i=0;i<divNameList.length;i++){					 
						  divCmbo+="<option value="+encodeURIComponent(divNameList[i])+">"+divNameList[i]+"</option>";					  
					  }				  
					var rpt_rep_ob=$("#s_div");
						rpt_rep_ob.empty();
						rpt_rep_ob.append(divCmbo);
						rpt_rep_ob.selectmenu("refresh");				  
					 									  
				  }		  
			});	 
			//$("#s_div").html(divCmbo);
			
			url="#page1";					
			$.mobile.navigate(url);		
		}
	
//}


//-----------------
function student(type){// not use
	$(".comp_error").text("");
	
	if (type=="QUICKS"){
		var s_student=$("#studentQuickID").val();
		
	}else if (type=="BTNS"){
		var s_student=$("#studentID").val();
		
		}
		
	
	if (s_student==""){
		$(".comp_error").text("Required Student");
		
	}else{
 /*function student(){
	studentQuickID=$("#studentQuickID").val();		
	sch_student_id=$("#studentID").val();
	
	if (studentQuickID==""){
		student_id=sch_student_id
	}else{
		student_id=studentQuickID
		}
			
	localStorage.student_id=student_id	*/
		
		//alert(apipath_pmt+'studentInfoCheck?cid=BANBEIS&s_student='+encodeURIComponent(s_student));
		$.ajax({
			  url:apipath_pmt+'studentInfoCheck?cid=BANBEIS&s_student='+encodeURIComponent(s_student),
			  //apipath_pmt+'studentInfoCheck?cid=BANBEIS&sync_code='+localStorage.sync_code+'&s_student='+encodeURIComponent(s_student),
			  success: function(result) {
				  resultStr=result.split("<fd>");
				  	//alert(resultStr);			  	
					  if (resultStr[0]=="Success"){
						  studentStr=resultStr[1].split("fdfd");
					  	  //alert(studentStr);
						 
						  
						  current_school_name=studentStr[0];
						  current_eiin=studentStr[1];
						  union_name=studentStr[2]; 
						  pourashava_name=studentStr[3];
						  upazila_thana=studentStr[4];
						  dist_name=studentStr[5];
						  
						  div_name=studentStr[6];
						  student_name=studentStr[7];
						  student_id=studentStr[8];
						  dob=studentStr[9];
						  fathers_name=studentStr[10];
						  mothers_name=studentStr[11];
						  gender=studentStr[12];		
						  parents_village=studentStr[13];
						  parents_post=studentStr[14];
						  parents_union=studentStr[15];
						  parents_upazila=studentStr[16];						  
						
						  //alert(parents_village);
						 $("#insName").val(current_school_name);
						 $("#eiinNo").val(current_eiin);
						 $("#union_name").val(union_name);
						 $("#pourashava_name").val(pourashava_name);
						 $("#upazila_name").val(upazila_thana);
						 $("#zila_name").val(dist_name);
						 $("#division_name").val(div_name);
						 $("#student_name").val(student_name);	 
						 $("#student_id").val(student_id);
						 $("#dob").val(dob);
						 $("#fathers_name").val(fathers_name);	
						 $("#mothers_name").val(mothers_name);	
						 $("#gen_der").val(gender);
						 $("#parents_village").val(parents_village); 
						 $("#parents_post").val(parents_post); 
						 $("#parents_union").val(parents_union); 
						 $("#parents_upazila").val(parents_upazila); 
						 
						 url="#page1";					
						 $.mobile.navigate(url);
						 
					}else if (resultStr[0]=="Failed"){
						$(".pmt_error").text("Audit report already submitted for this Student or wrong Student ID. Please contact with admin if you think this Student in incorrectly flagged.");					
					}	
									
			  }
			  
		});
 }
}





function getDist(){	
	
	div_name=$("#s_div").val();
	
	//localStorage.sDivName=div_name		
	//alert(apipath+'get_div_dist_list?cid=BANBEIS&sync_code='+localStorage.sync_code+'&div_name='+div_name);
	$.ajax({
		  url:apipath_pmt+'get_div_dist_list?cid=BANBEIS&sync_code='+localStorage.sync_code+'&div_name='+div_name,
		  success: function(distStr) {
				  distNameList=distStr.split("<fd>");
				  distCmbo="";
				  for (i=0;i<distNameList.length;i++){					 
					  distCmbo+="<option value="+encodeURIComponent(distNameList[i])+">"+distNameList[i]+"</option>";					  
				  }	
				 
				  var rpt_rep_ob=$("#s_dist");
					rpt_rep_ob.empty();
					rpt_rep_ob.append(distCmbo);
					rpt_rep_ob.selectmenu("refresh");
	
				 // url="#page1";					
				 // $.mobile.navigate(url);				  	  
				   
			  }		  
		});	
		
		
}
	

function getUp(){	
	div_name=$("#s_div").val();
	dist_name=$("#s_dist").val();	
	//alert(apipath+'get_dist_up_list?cid=BANBEIS&sync_code='+localStorage.sync_code+'&div_name='+div_name+'&dist_name='+dist_name);
	$.ajax({
		  url:apipath_pmt+'get_dist_up_list?cid=BANBEIS&sync_code='+localStorage.sync_code+'&div_name='+encodeURIComponent(div_name)+'&dist_name='+encodeURIComponent(dist_name),
		  success: function(upStr) {
				  upNameList=upStr.split("<fd>");
				  upCmbo="";
				  for (i=0;i<upNameList.length;i++){					 
					  upCmbo+="<option value="+encodeURIComponent(upNameList[i])+">"+upNameList[i]+"</option>";					  
				  }			  
				  //$("#s_up").html(upCmbo);
				  var rpt_rep_ob=$("#s_up");
					rpt_rep_ob.empty();
					rpt_rep_ob.append(upCmbo);
					rpt_rep_ob.selectmenu("refresh");
	
				 // url="#page1";					
				 // $.mobile.navigate(url);
				 
			  }		  
		});	 
		
}

function getUn(){	
	div_name=$("#s_div").val();
	dist_name=$("#s_dist").val();
	upzila_name=$("#s_up").val();	
	
	//alert(apipath_pmt+'get_up_un_list?cid=BANBEIS&sync_code='+localStorage.sync_code+'&div_name='+encodeURIComponent(div_name)+'&dist_name='+encodeURIComponent(dist_name)+'&upzila_name='+encodeURIComponent(upzila_name));
	$.ajax({
		  url:apipath_pmt+'get_up_un_list?cid=BANBEIS&sync_code='+localStorage.sync_code+'&div_name='+encodeURIComponent(div_name)+'&dist_name='+encodeURIComponent(dist_name)+'&upzila_name='+encodeURIComponent(upzila_name),
		  success: function(unStr) {
				  unNameList=unStr.split("<fd>");
				  unCmbo="";
				  for (i=0;i<unNameList.length;i++){					 
					  unCmbo+="<option value="+encodeURIComponent(unNameList[i])+">"+unNameList[i]+"</option>";					  
				  }			  
				  var rpt_rep_ob=$("#s_un");
					rpt_rep_ob.empty();
					rpt_rep_ob.append(unCmbo);
					rpt_rep_ob.selectmenu("refresh");
	
				 
			  }		  
		});	 
		
}



function getpou(){	
	div_name=$("#s_div").val();
	dist_name=$("#s_dist").val();
	upzila_name=$("#s_up").val();	
	union_name=$("#s_un").val();
	
	//alert(apipath_pmt+'get_un_pou_list?cid=BANBEIS&sync_code='+localStorage.sync_code+'&div_name='+encodeURIComponent(div_name)+'&dist_name='+encodeURIComponent(dist_name)+'&upzila_name='+encodeURIComponent(upzila_name)+'&union_name='+encodeURIComponent(union_name));
	
	$.ajax({
		  url:apipath_pmt+'get_un_pou_list?cid=BANBEIS&sync_code='+localStorage.sync_code+'&div_name='+encodeURIComponent(div_name)+'&dist_name='+encodeURIComponent(dist_name)+'&upzila_name='+encodeURIComponent(upzila_name)+'&union_name='+encodeURIComponent(union_name),
		  success: function(pouStr) {
				  pouNameList=pouStr.split("-");
				  pouName=pouNameList[0]
				  pouID=pouNameList[1]
				 
				  	  				  
				  /*pouCmbo="";
				  for (i=0;i<pouNameList.length;i++){					 
					  pouCmbo+="<option value="+encodeURIComponent(pouNameList[i])+">"+pouNameList[i]+"</option>";					  
				  }			  
				  var rpt_rep_ob=$("#s_pou");
					rpt_rep_ob.empty();
					rpt_rep_ob.append(pouCmbo);
					rpt_rep_ob.selectmenu("refresh");*/
				 
				
				 $("#s_pou").val(pouName); 
				
				 $("#boothNo").val(pouID);
				 
			  }		  
		});	 
		
}

function secondPage(){	
	
		var edu_year=$("#edu_year").val();
		var division_name=$("#s_div").val();
		var zila_name=$("#s_dist").val();
		var upazila_name=$("#s_up").val();
		var union_name=$("#s_un").val();
		//alert(pourashava_name+"-"+boothNo);
		if (edu_year=="" || edu_year==0 ){
			$(".errorChk").text("Required Education Year");
		}else if (division_name=="" ){
			$(".errorChk").text("Required Division Name");	
		}else if (zila_name=="" ){
			$(".errorChk").text("Required Zila Name");	
		}else if (upazila_name=="" ){
			$(".errorChk").text("Required Upazila Name");	
		
		}else{
			
			banbeisDataSearch="&edu_year="+edu_year+"&division_name="+division_name+"&zila_name="+zila_name+"&upazila_name="+upazila_name+"&union_name="+union_name
		
		//alert(banbeisDataSearch);
		}
		$(".errorChk").text("");
		url="#page2";					
		$.mobile.navigate(url);	
	
	}

//===================		
function thirdPage(){
						
	url="#page3"
	$.mobile.navigate(url);	
				
	};	
	
function fourPage(){
						
	url="#page4"
	$.mobile.navigate(url);	
				
	};
	
function fivePage(){
						
	url="#page5"
	$.mobile.navigate(url);	
				
	};	
	
function sixPage(){
						
	url="#page6"
	$.mobile.navigate(url);	
				
	};	
	
function sevenPage(){
						
	url="#page7"
	$.mobile.navigate(url);	
				
	};	
	
function eightPage(){
						
	url="#page8"
	$.mobile.navigate(url);	
				
	};
	
function ninePage(){
						
	url="#inPhoto"
	$.mobile.navigate(url);	
				
	};			






function pmtDataSubmit(){
		$("#btn_pmt_submit").hide();
		
		var d = new Date();	
		var get_time_pmt=d.getTime();		

		
		pmt_latitude=$("#pmt_ach_lat").val();
		pmt_longitude=$("#pmt_ach_long").val();
		
		pmt_achPhoto=$("#pmt_achPhoto").val();
		pmt_achPhoto_2=$("#pmt_achPhoto_2").val();
		
		/*if (pmt_latitude==undefined || pmt_latitude==''){
			pmt_latitude=0;
			}
		if (pmt_longitude==undefined || pmt_longitude==''){
			pmt_longitude=0;
			}
		//---------------
		if (pmt_achPhoto=='' || pmt_achPhoto==undefined){
			$(".errorChk").text("Please confirm Photo 1 ");
			$("#btn_pmt_submit").show();
		}else{
			if (pmt_achPhoto_2=='' || pmt_achPhoto_2==undefined){
				$(".errorChk").text("Please confirm Photo 2 ");
				$("#btn_pmt_submit").show();
			}else{		
				//if(pmt_latitude==0 || pmt_latitude==0){
				//	$(".errorChk").text("Please confirm your location ");
				//	$("#btn_pmt_submit").show();
				//}else{				
					//imagePathPmtA="test"					
					if (imagePathPmtA!=""){							
						$(".errorChk").text("Syncing photo 1..");
						imageNamePmt = localStorage.mobile_no+"_"+get_time_pmt+".jpg";										
						uploadPhotoAchPmt(imagePathPmtA, imageNamePmt);	
						//$("#btn_pmt_submit").show();					
					}
										
				//} //-end check location
				
			}//Photo 2
		}//chk photo*/
		
	syncDataPmt();
		
	}

//------------------------------------image 1
function getAchivementImage1Pmt() {
	navigator.camera.getPicture(onSuccessPmtA, onFailPmtA, { quality: 50,
	targetWidth: 300,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true});		
}

function onSuccessPmtA(imageURIPmt) {		
    var image = document.getElementById('pmt_myImageA');
    image.src = imageURIPmt;
	imagePathPmtA = imageURIPmt;	
	$("#pmt_achPhoto").val(imagePathPmtA);
	
}

function onFailPmtA(message) {
	imagePathPmtA="";
    alert('Failed because: ' + message);
}




function uploadPhotoAchPmt(imageURIPmt, imageNamePmt) { 	
	//winAchInfoPmt();
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageNamePmt;
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";

    options.params = params;

    var ftPmt = new FileTransfer();
	ftPmt.upload(imageURIPmt, encodeURI("http://e4.businesssolutionapps.com/mrepimage/banbeis_upload/fileUploader/"),winAchInfoPmt,onfailPmt,options);
	
}

function winAchInfoPmt(r) {	
	$(".errorChk").text('Image 1 upload Successful. Syncing image 2...');
	
	var d = new Date();	
	var get_time_pmt=d.getTime();
		
	//imagePath2PmtA="test2"
	if (imagePath2PmtA!=""){							
		$(".errorChk").text("Syncing photo 2..");
		imageName2Pmt = localStorage.mobile_no+"_"+get_time_pmt+".jpg";
				
		uploadPhoto2AchPmt(imagePath2PmtA, imageName2Pmt);
		//$("#btn_com_submit").show();		
	}
	
	
}

function onfailPmt(r) {
	$(".errorChk").text('File upload Failed. Please check internet connection.');
	$("#btn_pmt_submit").show();
}

//-----------------------image 2

function getAchivementImage2Pmt() { //unused
	navigator.camera.getPicture(onSuccess2PmtA, onFail2PmtA, { quality: 50,
	targetWidth: 300,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });		
}

function onSuccess2PmtA(imageURIPmt) {	//unused	
    var image = document.getElementById('pmt_myImage2A');
    image.src = imageURIPmt;
	imagePath2PmtA = imageURIPmt;	
	$("#pmt_achPhoto_2").val(imagePath2PmtA);
	
}

function onFail2PmtA(message) { //unused
	imagePath2PmtA="";
    alert('Failed because: ' + message);
}


function uploadPhoto2AchPmt(imageURIPmt, imageName2Pmt) { // second step
	
	//winComInfo2Pmt();
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName2Pmt;
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";

    options.params = params;

    var ftPmt = new FileTransfer();
	ftPmt.upload(imageURIPmt, encodeURI("http://e4.businesssolutionapps.com/mrepimage/banbeis_upload/fileUploader/"),winComInfo2Pmt,onfailPmt,options);
	
}

function winComInfo2Pmt(r) {
	$(".errorChk").text('Image 2 upload successfull. Syncing Data ...');
	syncDataPmt();
}





function syncDataPmt(){	
			var boothNo=$("#boothNo").val();
			var app_serial_no=$("#appSerialNo").val();
			var division_name=$("#s_div").val();
			var zila_name=$("#s_dist").val();
			var upazila_name=$("#s_up").val();
			var union_name=$("#s_un").val();
			var pou_name=$("#s_pou").val();
			
			
			//alert(apipath_pmt+"submitData_pmt?cid=BANBEIS&mobile_no="+localStorage.mobile_no+"&syncCode="+localStorage.sync_code+'&pmt_achPhoto='+imageNamePmt+'&pmt_achPhoto2='+imageName2Pmt+'&latitude='+pmt_latitude+'&longitude='+pmt_longitude+"&app_serial_no="+app_serial_no+"&division_name="+division_name+"&zila_name="+zila_name+"&upazila_name="+upazila_name+"&union_name="+union_name+"&pou_name="+encodeURIComponent(pou_name)+'&tempText='+ encodeURIComponent(banbeisDataSearch)+encodeURIComponent(banbeisData)+encodeURIComponent(banbeisDataPage2)+encodeURIComponent(banbeisDataPage3));
			$.ajax({
					type: 'POST',
					url:apipath_pmt+"submitData_pmt?cid=BANBEIS&mobile_no="+localStorage.mobile_no+"&syncCode="+localStorage.sync_code+'&pmt_achPhoto='+imageNamePmt+'&pmt_achPhoto2='+imageName2Pmt+'&latitude='+pmt_latitude+'&longitude='+pmt_longitude+"&boothNo="+boothNo+"&app_serial_no="+app_serial_no+"&division_name="+division_name+"&zila_name="+zila_name+"&upazila_name="+upazila_name+"&union_name="+union_name+"&pou_name="+encodeURIComponent(pou_name)+'&tempText='+ encodeURIComponent(banbeisDataSearch)+encodeURIComponent(banbeisData)+encodeURIComponent(banbeisDataPage2)+encodeURIComponent(banbeisDataPage3),
					
					
					   success: function(result) {
						   if(result=='Success'){							
							//alert(result)
							//--------------
							 $("#edu_year").val(0);
							 $("#s_div").val("");
							 $("#s_dist").val("");
							 $("#s_up").val("");
							 $("#s_un").val("");
							 $("#s_pou").val("");
							 $("#union_name").val("");
							 $("#pourashava_name").val("");
							 $("#boothNo").val("");
							 $("#appSerialNo").val("");
							 							 
							 $("#student_name").val("");
							 $("#fathers_name").val("");
							 $("#fathers_nid").val("");
							 $("#mothers_name").val("");
							 $("#mothers_nid").val("");
							 
							 $("#dob").val("");
							 $("#gen_der").val("BOY");
							 $("#pre_stu_located").val("");
							 $("#guardian_absence_of_parents").val("");
							 $("#relation_student_with_guardian").val(1);
							
							 $("#parents_village").val("");
							 $("#parents_post").val("");
							 $("#parents_union").val("");
							 $("#parents_upazila").val("");
							 $("#parents_district").val("");
							 
							 $("#student_village").val("");
							 $("#student_post").val("");
							 $("#student_union").val("");
							 $("#student_upazila").val("");
							 $("#student_district").val("");
							
							 $("#q1_a").val("");
							 $("#q2_a").val(1);
							 $("#q3_a").val(1);
							 $("#q4_a").val(1);
							 $("#q5_a").val(1);
							 $("#q6_a").val(1);
							 $("#q7_a").val("");
							 $("#q8_a").val("");
							 $("#q9_a").val("");
							 $("#q10_a").val("");
							 $("#q11_a").val(1);
							 $("#q12_a").val(1);
							 $("#q13_a").val("");
							 $("#q14_a").val(1);
							 $("#q15_a").val(1);
							 $("#q16_a").val(1);
							 $("#q17_a").val(1);
							 $("#q18_a").val(1);
							 $("#q19_a").val(1);
							 $("#q20_a").val(1);
							 $("#q21_a").val(1);	
							 $("#q22_a").val(1);
							 $("#q23_a").val(1);
							 $("#q24_a").val(1);
							 $("#q25_a").val(1);
							 $("#q26_a").val(1);
							 $("#q27_a").val(1);
							
							//--------------
							
							$("#pmt_ach_lat").val(0);
							$("#pmt_ach_long").val(0);
							$("#pmt_achPhoto").val("");										
							$("#pmt_achPhoto_2").val("");	
							
							$(".sucChk").text('Successfully Submitted');
							$(".errorChk").text("");
							$("#btn_pmt_submit").show();						
						}else{
							$(".errorChk").text('Unauthorized Access');																	
							$("#btn_pmt_submit").show();
							}
							
					   }//end result
			});//end ajax
	
	}

