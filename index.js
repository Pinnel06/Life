var GameField = [10,11];
var temp = [0,0];
var main = document.getElementById("main");
var Rows = 50;
var Columns = 50;
var run = false;
var count = 0;
var colPlus = Columns+1;
var rowPlus = Rows+1;
var u;
var d;
var r;
var l;

for(i=0; i<=rowPlus; i++){
    
 GameField[i]=[];
 temp[i]=[];
    

    for(j=0; j<=colPlus; j++){

      GameField[i][j]=0;
      temp[i][j]=0;
    }
}

for(i=1; i<rowPlus; i++){

    for(j=1; j<colPlus; j++){
        
        main.innerHTML+="<button id="+i+"."+j+" class=cell onClick=toggleCell(this.id) style=background-color:#283639;></button>"
    
    }
}

function toggleCell(rowCol) {

    var pos = rowCol.split(".");
    
    if (GameField[pos[0]][pos[1]] == 0) {

        event.target.style["background-color"]="green";
        GameField[pos[0]][pos[1]]=1;
        temp[pos[0]][pos[1]]=1;
        
    } else {

        event.target.style["background-color"]="#283639";
        GameField[pos[0]][pos[1]]=0;
        temp[pos[0]][pos[1]]=0;
    }
}

function cleartable(){
    
    for(i=1; i<rowPlus; i++){

        for(j=1; j<colPlus; j++){

            GameField[i][j]=0;
            temp[i][j]=0;
            document.getElementById(i+"."+j).setAttribute("style", "background-color:#283639;");
        }
    }
    
}

function toggleRun(){
    
    if (run) {

        run = false;

    } else {

        run = true;

    }
}

function play(){
    
    if (run) {

        
        for (i = 1; i < rowPlus; i++){

            for(j=1; j<colPlus; j++){
                
                u=i+1;
                
                d=i-1;
                
                r=j+1;
                
                l=j-1;
                
                count=0;
                
                count=count+GameField[i][l];
                
                count=count+GameField[i][r];
                
                count=count+GameField[u][l];
                
                count=count+GameField[d][l];
                
                count=count+GameField[u][r];
               
                count=count+GameField[d][r];
             
                count=count+GameField[d][j];
      
                count=count+GameField[u][j];
          
                
                
                if (count < 2) {

                    temp[i][j]=0;
                }
                else if (count == 3) {

                    temp[i][j]=1;
                }
                else if (count > 3) {
                    
                    temp[i][j]=0;
                }
                else if (count == 2) {

                    temp[i][j]=GameField[i][j];
                }
            }
        }
        
        updateGrid();
    }
}

function updateGrid() {

    for(i=1; i<rowPlus; i++){
        
        for(j=1; j<colPlus; j++){
            
            GameField[i][j]=temp[i][j];
            
            if(GameField[i][j]==0){
                
                document.getElementById(i+"."+j).setAttribute("style", "background-color:#283639;");
            }
            else if(GameField[i][j]==1){
                
                document.getElementById(i+"."+j).setAttribute("style", "background-color:green;");
            }
        }
    }
}

setInterval(play,100);