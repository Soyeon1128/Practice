function getDayName(a,b){
  
  var array = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var new_array = [];
  var new_month = 0;
	
    for	(var i=0, l=array.length; i<l; i++) {
        new_month += array[i];
		new_array.push(new_month);
    }

    if( a === 1 ) {
        total_days = b;
    }
    else if (a === 2) {
        total_days = new_array[0] + b
    }
    else if (a === 3) {
        total_days = new_array[1] + b
    }
    else if (a === 4) {
        total_days = new_array[2] + b
    }
    else if (a === 5) {
        total_days = new_array[3] + b
    }
    else if (a === 6) {
        total_days = new_array[4] + b
    }
    else if (a === 7) {
        total_days = new_array[5] + b
    }
    else if (a === 8) {
        total_days = new_array[6] + b
    }
    else if (a === 9) {
        total_days = new_array[7] + b
    }
    else if (a === 10) {
        total_days = new_array[8] + b
    }
    else if (a === 11) {
        total_days = new_array[9] + b
    }
    else if (a === 12) {
        total_days = new_array[10] + b
    }
    
    var result;

    if(total_days % 7 === 1) {
        result = 'FRI';
    }
    else if(total_days % 7 === 2) {
        result = 'SAT';
    }
    else if(total_days % 7 === 3) {
        result = 'SUN';
    }
    else if(total_days % 7 === 4) {
        result = 'MON';
    }
    else if(total_days % 7 === 5) {
        result = 'TUE';
    }
    else if(total_days % 7 === 6) {
        result = 'WED';
    }
    else if(total_days % 7 === 0) {
        result = 'THU';
    }
    
    return result;
};

