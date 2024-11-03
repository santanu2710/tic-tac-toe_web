//document.getElementById('b1').innerHTML = "X"
//document.getElementById('b5').innerHTML = "O"

let turn_number = 1;

let undo_box = 0;

let box_number;
let arr = [
    [11 , 12 , 13 ],
    [14 , 15 , 16 ],
    [17 , 18 , 19 ]
];

function winner_checker(arr)
{
    if ((arr[0][0] == arr[0][1]) && (arr[0][1] == arr[0][2]))
    {
        return true;
    }
    else if ((arr[1][0] == arr[1][1]) && (arr[1][1] == arr[1][2]))     
    {
        return true;
    }
    else if ((arr[2][0] == arr[2][1]) && (arr[2][1] == arr[2][2]))
    {
        return true;
    }
    
    else if ((arr[0][0] == arr[1][0]) && (arr[1][0] == arr[2][0]))
    {
        return true;
    }
    else if ((arr[0][1] == arr[1][1]) && (arr[1][1] == arr[2][1]))
    {
        return true;
    }
    else if ((arr[0][2] == arr[1][2]) && (arr[1][2] == arr[2][2]))
    {
        return true;
    }
    
    else if ((arr[0][0] == arr[1][1]) && (arr[1][1] == arr[2][2]))
    {
        return true;
    }
    else if ((arr[2][0] == arr[1][1]) && (arr[1][1] == arr[0][2]))
    {
        return true;
    }
    else{                                                                 
        return false;
    }
}


function bf(number){

    box_number = number;

    const k = document.getElementById(`b${box_number}`);

    if (turn_number%2 == 1) 
    {
        if(arr[parseInt((box_number-1)/3)][(box_number-1)%3] >=10)
        {
            arr[parseInt((box_number-1)/3)][(box_number-1)%3] = 1;
            k.innerHTML = "X";
            turn_number++;
            document.getElementById('turn').innerHTML = "PLAYER 2'S TURN";

            undo_box = box_number;
        }
        else
        {
            document.getElementById('warning').innerHTML = window.alert("sorry this is a cheating");
            document.getElementById('turn').innerHTML = "PLAYER 1'S TURN";
        }


        if(winner_checker(arr))                    //condition checking that player 1 won or not after this move
        {
            document.getElementById('turn').innerHTML = "PLAYER 1 WON";
        }
    }
    else
    {
        if(arr[parseInt((box_number-1)/3)][(box_number-1)%3] >= 10)
        {
            arr[parseInt((box_number-1)/3)][(box_number-1)%3] = 0;
            k.innerHTML = "O";
            turn_number++;
            document.getElementById('turn').innerHTML = "PLAYER 1'S TURN";

            undo_box = box_number;
        }
        else
        {
            document.getElementById('warning').innerHTML = window.alert("sorry this is a cheating");
            document.getElementById('turn').innerHTML = "PLAYER 2'S TURN";
        }


        if(winner_checker(arr))
        {
            document.getElementById('turn').innerHTML = "PLAYER 2 WON";
        }
    }
    
}
let z;

function undo(){
    arr[parseInt((undo_box-1)/3)][(undo_box-1)%3] = box_number+10;
    document.getElementById(`b${undo_box}`).innerHTML = "";
    turn_number--;

    if (turn_number%2 == 1) 
    {
        document.getElementById('turn').innerHTML = "PLAYER 1'S TURN";
    }
    else
    {
        document.getElementById('turn').innerHTML = "PLAYER 2'S TURN";
    }
}
let y;


function replay(){
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            
            arr[i][j] = (i*3) + (j+1) + 10;
            document.getElementById(`b${(i*3)+j+1}`).innerHTML = "";
            document.getElementById('turn').innerHTML = "PLAYER 1'S TURN";

            turn_number = 1;
            undo_box = 0;
        }
    }
}

console.log(arr);


