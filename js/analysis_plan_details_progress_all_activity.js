// report plan with progress
//local
var apipath="http://127.0.0.1:8000/wateraid/analysis/";

//online
//var apipath="http://e2.businesssolutionapps.com/wateraid/analysis/";

var plan_list="";
var ach_list="";

var plan_list_array=[];
var plan_array=[];
var ach_list_array=[];
var ach_array=[];


var plan_ach_array="";
var temp_ach_array="";


function get_plan(from_month,from_year,to_month,to_year,access_type,access_type_val,ana_sector) {		

//alert(apipath+'get_plan_details_all_activity?anaProgram='+anaProgram+'&anaProject='+anaProject+'&from_month='+from_month+'&from_year='+from_year+'&to_month='+to_month+'&to_year='+to_year+'&sector='+ana_sector);			
			$.ajax({				   
					url:apipath+'get_plan_details_all_activity?access_type='+access_type+'&access_type_val='+access_type_val+'&from_month='+from_month+'&from_year='+from_year+'&to_month='+to_month+'&to_year='+to_year+'&sector='+ana_sector,
						  success: function(result) {
							  plan_list = result;
//							  $('#plan_text').val(result);
							  get_achivement(from_month,from_year,to_month,to_year,access_type,access_type_val,ana_sector);
						  }	
				});
				
	}


function get_achivement(from_month,from_year,to_month,to_year,access_type,access_type_val,ana_sector){
	//alert(apipath+'get_plan_details_all_activity?anaProject='+anaProject+'&from_month='+from_month+'&from_year='+from_year+'&to_month='+to_month+'&to_year='+to_year+'&sector='+ana_sector);
	$.ajax({				   
		url:apipath+'get_achievement_details_all_activity?access_type='+access_type+'&access_type_val='+access_type_val+'&from_month='+from_month+'&from_year='+from_year+'&to_month='+to_month+'&to_year='+to_year+'&sector='+ana_sector,
			  success: function(result) {
				  ach_list=result;
				  //$('#ach_text').val(result);
				  compare_data();
			  }
	});
	
}

// compare

function compare_data() {
	
	// PREPARE aCHIVEMENT ARRAY ============================================
	ach_list_array=(ach_list).split("rdrd");
	var ach_list_count=ach_list_array.length;
	
	temp_ach_array=createArray(ach_list_count, 7);
		
	for(j=0;j<ach_list_count;j++){
		ach_array=ach_list_array[j].split("fdfd");
		temp_ach_array[j][0]=ach_array[0]; //pngo id
		temp_ach_array[j][1]=ach_array[1]; // project name
		temp_ach_array[j][2]=ach_array[2]; // sector
		temp_ach_array[j][3]=ach_array[3]; // activity
		temp_ach_array[j][4]=ach_array[4]; //achivement qty
		temp_ach_array[j][5]=ach_array[5];	//ach population
		temp_ach_array[j][6]=0;	// flag
		
		}
	
	
	// PREPARE PLAN ARRAY ============================================
	plan_list_array=(plan_list).split("rdrd");
	var plan_list_count=plan_list_array.length;	
	
	plan_ach_array = createArray(plan_list_count, 8);
	var temp='';
	/* PNGO_ID, ProjectName, Sector , Output_Qty, OutputPopulation, AchQty , achPopulation */
	$('#plan_text').val('testaaa');
	for(i=0;i<plan_list_count;i++){
		plan_array=plan_list_array[i].split("fdfd")
		plan_ach_array[i][0]=plan_array[0]; //PNGO_ID
		plan_ach_array[i][1]=plan_array[1]; //ProjectName
		plan_ach_array[i][2]=plan_array[2]; //Sector
		plan_ach_array[i][3]=plan_array[3]; //activity
		plan_ach_array[i][4]=plan_array[4]; //Output_Qty
		plan_ach_array[i][5]=plan_array[5];	//OutputPopulation
		plan_ach_array[i][6]=0;
		plan_ach_array[i][7]=0;
		
		for(j=0;j<ach_list_count;j++){
			if ((plan_ach_array[i][0]==temp_ach_array[j][0]) && 
					(plan_ach_array[i][1]==temp_ach_array[j][1]) &&
					(plan_ach_array[i][2]==temp_ach_array[j][2]) && 
					(plan_ach_array[i][3]==temp_ach_array[j][3])){
				
				plan_ach_array[i][6]=temp_ach_array[j][4];	//AchQty
				plan_ach_array[i][7]=temp_ach_array[j][5];	//achPopulation
				temp_ach_array[j][6] = 1;
				
				}
				/*else
					{
					plan_ach_array[i][6]=0;	//AchQty
					plan_ach_array[i][7]=0;	//achPopulation
				}*/		
			
			}
			
		}
	
//	plan_ach_array.push(['00','test','test','test','test','test','test']);
//	plan_ach_array.push(['00','abc','test','test','test','test','test']);
	
	//Push the Records those are in achivement, but not im plan	
	for(j=0;j<ach_list_count;j++){		
			if (temp_ach_array[j][6] == 0){
				plan_ach_array.push([temp_ach_array[j][0],temp_ach_array[j][1],temp_ach_array[j][2],temp_ach_array[j][3],0,0,temp_ach_array[j][4],temp_ach_array[j][5]]);
			}
		
		}
	
	plan_ach_array.sort();
	
	$('#plan_text').val(plan_ach_array);
	$('#ach_text').val(temp_ach_array);
	show_report()
	
	
}


// show report
function show_report(){
	//plan_ach_array
	var plan_ach_array_count = plan_ach_array.length;
	var plan_show_array="";	
	for (i=0;i<plan_ach_array_count;i++){		
		plan_show_array=plan_ach_array[i];
		if(plan_show_array[1]!=undefined){					
			$('#plan_details_progress_all_activity').append('<tr><td>'+plan_show_array[0]+'</td><td>'+plan_show_array[1]+'</td><td>'+plan_show_array[2]+'</td><td>'+plan_show_array[3]+'</td><td>'+plan_show_array[4]+'</td><td>'+plan_show_array[5]+'</td><td>'+plan_show_array[6]+'</td><td>'+plan_show_array[7]+'</td></tr>');
			
			$('#loader').hide();
			$('#dataChk').text("");
		}else{
			$('#loader').hide();
			$('#dataChk').text("No data found");
			}
	}
	
}




function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}