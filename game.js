var count=0;
var arr = [];
var outCards = [];
var firstCard=0;
var secondCard = 0;
var outCardIndex = 0;
var counter = 100;
var inter;
var moves=0;
var buttonCount = 0;                 // to generate alternate numbers // even and odd numbers next to each others
var clickCounter = [];
var restartButton;
var str5="c";

var idArray = ["c1","c2","c3","c4","c5"];

function showCard(str3)
{
   
   var cardId = "c";
   for(j=1; j<=20; j++)
   {
      if(cardId+j == str3)
      {
         if(arr[j-1]==1)
         {
            document.getElementById(str3).src = "images/image1.png";
            count++;
         }

         if(arr[j-1]==2)
         {
            document.getElementById(str3).src = "images/image2.png";
            count++;
         }

         if(arr[j-1]==3)
         {
            document.getElementById(str3).src = "images/image3.png";
            count++;
         }

         if(arr[j-1]==4)
         {
            document.getElementById(str3).src = "images/image4.png";
            count++;
         }

         if(arr[j-1]==5)
         {
            document.getElementById(str3).src = "images/image5.png";
            count++;
         }

         if(arr[j-1]==6)
         {
            document.getElementById(str3).src = "images/image6.png";
            count++;
         }

         if(arr[j-1]==7)
         {
            document.getElementById(str3).src = "images/image7.png";
            count++;
         }

         if(arr[j-1]==8)
         {
            document.getElementById(str3).src = "images/image8.png";
            count++;
         }

         if(arr[j-1]==9)
         {
            document.getElementById(str3).src = "images/image9.png";
            count++;
         }

         if(arr[j-1]==10)
         {
            document.getElementById(str3).src = "images/image10.png";
            count++;
         }
         
         if(count == 1)
         {
            firstCard = j-1;
         }

         if(count == 2)
         {
            secondCard = j-1;
         }

      }
   } 

   if(count==2)
   {
      if(firstCard!=secondCard)
      {

          if(arr[firstCard] == arr[secondCard])
          {
             outCards[outCardIndex] = firstCard+1;
             outCardIndex++;
             outCards[outCardIndex] = secondCard+1;
             outCardIndex++;
          }

          setTimeout(cardBack,500);
          count=0;
          moves++;
          document.getElementById("moves").innerHTML = "Moves: "+ moves;
      }


      else if(firstCard == secondCard)
      {
         cardBack();
         count = 0;
      }

      else
      {
              setTimeout(cardBack,500);
              count=0;
              moves++;
              document.getElementById("moves").innerHTML = "Moves: " + moves;
      }
   }
}


function cardBack()
{
   str2 = "c";
   console.log("clicked");

      for(w=1; w<=20; w++)
      {
         document.getElementById(str2+w).src = "images/card.png";
      }

      for(k=0; k<outCards.length; k++)
      {
           for(r=1; r<=20; r++)
           {
              if(outCards[k] == r)
              {
                 if(arr[r-1]==1)
                 {
                   console.log(r);
                   document.getElementById(str2+outCards[k]).src = "images/image1.png";
                 }
   
                  if(arr[r-1]==2)
                  {
                     console.log(r);
                     document.getElementById(str2+outCards[k]).src = "images/image2.png";
                  }
   
                  if(arr[r-1]==3)
                  {
                     console.log(r);
                     document.getElementById(str2+outCards[k]).src = "images/image3.png";
                  }
   
                  if(arr[r-1]==4)
                  {
                     console.log(r);
                     document.getElementById(str2+outCards[k]).src = "images/image4.png";
                  }
   
                  if(arr[r-1]==5)
                  {
                     console.log(r);
                     document.getElementById(str2+outCards[k]).src = "images/image5.png";
                  }
   
                  if(arr[r-1]==6)
                  {
                     console.log(r);
                     document.getElementById(str2+outCards[k]).src = "images/image6.png";
                  }
   
                  if(arr[r-1]==7)
                  {
                     console.log(r);
                     document.getElementById(str2+outCards[k]).src = "images/image7.png";
                  }
   
                  if(arr[r-1]==8)
                  {
                     console.log(r);
                     document.getElementById(str2+outCards[k]).src = "images/image8.png";
                  }
   
                  if(arr[r-1]==9)
                  {
                     console.log(r);
                     document.getElementById(str2+outCards[k]).src = "images/image9.png";
                  }
   
                  if(arr[r-1]==10)
                  {
                     console.log(r);
                     document.getElementById(str2+outCards[k]).src = "images/image10.png";
                  }

              }
              

           }
              
      }
      if(outCardIndex==20)
      {
        alert("Congratulations! You Won the Game");
        restartGame();
      }



}

/*function showCard(str)
{
   var x = Math.floor((Math.random()*6)+1);

   if(count==2)
   {
      str = "c";
      for(i=1; i<=12; i++)
      {
         document.getElementById(str+i).src = "images/card.png";
      }
      count=0;
   }

   else
   {
       if (x==1)
       {
          document.getElementById(str).src = "images/tiger.png";
       }

       if(x==2)
       {
          document.getElementById(str).src = "images/deer.png";
       }

        if(x==3)
        {
           document.getElementById(str).src = "images/eagle.png";
        }

        if(x==4)
        {
          document.getElementById(str).src = "images/elephant.png";
        }

        if(x==5)
        {
          document.getElementById(str).src = "images/anaconda.png";
        }

        if(x==6)
        {
          document.getElementById(str).src = "images/rabbit.png";
        }

        count++;
   }
}*/

function stopInterval()
{
   clearInterval(inter);
}


function timeCount()
{
   counter--;
   if(counter==-1)
   {
      alert("You Lost, Try again!!");
      stopInterval();
      restartGame();
   }
   document.getElementById("counter").innerHTML = "Time: " + counter +"s";
}

function randomCards()
{

   var str = 'c';
   var z=1;
   
   var count1=0;
   var count2=0;
   var count3=0;
   var count4=0;
   var count5=0;
   var count6=0;
   var count7=0;
   var count8=0;
   var count9=0;
   var count10=0;


   while(count1<2 || count2<2 || count3<2 || count4<2 || count5<2 || count6<2 || count7<2 || count8<2 || count9<2 || count10<2)
   {
      var x = Math.floor((Math.random()*10)+1);

      if(x==1 && count1<2)
      {
         document.getElementById(str+z).src = "images/image1.png";
         arr[z-1] = x; 
         count1++;
         z++;
      }

      if(x==2 && count2<2)
      {
         document.getElementById(str+z).src = "images/image2.png";
         arr[z-1] = x;
         count2++;
         z++;
      }

      if(x==3 && count3<2)
      {
         document.getElementById(str+z).src = "images/image3.png";
         arr[z-1] = x;
         count3++;
         z++;
      }

      if(x==4 && count4<2)
      {
         document.getElementById(str+z).src = "images/image4.png";
         arr[z-1] = x;
         count4++;
         z++;
      }

      if(x==5 && count5<2)
      {
         document.getElementById(str+z).src = "images/image5.png";
         arr[z-1] = x;
         count5++;
         z++;
      }

      if(x==6 && count6<2)
      {
         document.getElementById(str+z).src = "images/image6.png";
         arr[z-1] = x;
         count6++;
         z++;
      }

      if(x==7 && count7<2)
      {
         document.getElementById(str+z).src = "images/image7.png";
         arr[z-1] = x;
         count7++;
         z++;
      }

      if(x==8 && count8<2)
      {
         document.getElementById(str+z).src = "images/image8.png";
         arr[z-1]=x;
         count8++;
         z++;
      }
      
      if(x==9 && count9<2)
      {
         document.getElementById(str+z).src = "images/image9.png";
         arr[z-1]=x;
         count9++;
         z++;
      }

      if(x==10 && count10<2)
      {
         document.getElementById(str+z).src = "images/image10.png";
         arr[z-1]=x;
         count10++;
         z++;
      }

   }
   cardBack();

}



function startGame()
{
   

   if(buttonCount==0)
   {
      enableCard();
      restartButton = document.createElement("input");
      restartButton.type = "image";
      restartButton.id = "restart";
      restartButton.src = "images/restart.png";
      restartButton.onclick = restartGame;
      document.getElementById("menu2").appendChild(restartButton);
      document.getElementById("allCards").style.marginTop = "1px";

      inter = setInterval(timeCount,1000);
   }

   if(buttonCount%2==0)
   {

      document.getElementById("startButton").src = "images/pause.png";
      if(buttonCount!=0)
      {
         for(t=1; t<=20; t++)
         {
            document.getElementById("c"+t).onclick = clickCounter[t-1];
         }
         inter = setInterval(timeCount,1000);
      }
      buttonCount++;

      console.log("even");
   
   }

   else if(buttonCount%2!=0)
   {
      
      for(y=1; y<=20; y++)
      {
         clickCounter[y-1] = document.getElementById("c"+y).onclick;
      }

      for(t=1; t<=20; t++)
      {
         document.getElementById("c"+t).onclick = null;
      }

      document.getElementById("startButton").src= "images/play.png";
      if(buttonCount!=0)
      {
        stopInterval();
      }
      buttonCount++;


      console.log("odd");

   }

}

randomCards();

function restartGame()
{
   outCardIndex = 0;
   outCards = [];
   clickCounter=[];
   arr=[];
   randomCards();
   document.getElementById("menu2").removeChild(restartButton);
   document.getElementById("startButton").src = "images/play.png";
   stopInterval();
   counter = 100;
   moves = 0;
   document.getElementById("counter").innerHTML = "Time: "+ counter + "s";
   document.getElementById("moves").innerHTML = "Moves: "+moves;
   document.getElementById("allCards").style.marginTop = "45px"; 
   buttonCount = 0;
   blockCard();

}

function enableCard()
{
   document.getElementById("c1").onclick = () => showCard("c1");
   document.getElementById("c2").onclick = () => showCard("c2");
   document.getElementById("c3").onclick = () => showCard("c3");
   document.getElementById("c4").onclick = () => showCard("c4");
   document.getElementById("c5").onclick = () => showCard("c5");
   document.getElementById("c6").onclick = () => showCard("c6");
   document.getElementById("c7").onclick = () => showCard("c7");
   document.getElementById("c8").onclick = () => showCard("c8");
   document.getElementById("c9").onclick = () => showCard("c9");
   document.getElementById("c10").onclick = () => showCard("c10");
   document.getElementById("c11").onclick = () => showCard("c11");
   document.getElementById("c12").onclick = () => showCard("c12");
   document.getElementById("c13").onclick = () => showCard("c13");
   document.getElementById("c14").onclick = () => showCard("c14");
   document.getElementById("c15").onclick = () => showCard("c15");
   document.getElementById("c16").onclick = () => showCard("c16");
   document.getElementById("c17").onclick = () => showCard("c17");
   document.getElementById("c18").onclick = () => showCard("c18");
   document.getElementById("c19").onclick = () => showCard("c19");
   document.getElementById("c20").onclick = () => showCard("c20");
}
function blockCard()
{
   document.getElementById("c1").onclick = "";
   document.getElementById("c2").onclick = "";
   document.getElementById("c3").onclick = "";
   document.getElementById("c4").onclick = "";
   document.getElementById("c5").onclick = "";
   document.getElementById("c6").onclick = "";
   document.getElementById("c7").onclick = "";
   document.getElementById("c8").onclick = "";
   document.getElementById("c9").onclick = "";
   document.getElementById("c10").onclick = "";
   document.getElementById("c11").onclick = "";
   document.getElementById("c12").onclick = "";
   document.getElementById("c13").onclick = "";
   document.getElementById("c14").onclick = "";
   document.getElementById("c15").onclick = "";
   document.getElementById("c16").onclick = "";
   document.getElementById("c17").onclick = "";
   document.getElementById("c18").onclick = "";
   document.getElementById("c19").onclick = "";
   document.getElementById("c20").onclick = "";

}