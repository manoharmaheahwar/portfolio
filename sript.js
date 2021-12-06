let javaprogressBar=document.getElementById("circular-java-progress");

let javavalueContainer=document.getElementById("value-java-container");

let htmlprogressBar=document.getElementById("circular-html-progress");

let htmlvalueContainer=document.getElementById("value-html-container");

let cssprogressBar=document.getElementById("circular-css-progress");

let cssvalueContainer=document.getElementById("value-css-container");

let bootstraprogressBar=document.getElementById("circular-bootstrap-progress");

let bootstrapvalueContainer=document.getElementById("value-bootstrap-container");

let jsprogressBar=document.getElementById("circular-js-progress");

let jsvalueContainer=document.getElementById("value-js-container");

let djangoprogressBar=document.getElementById("circular-django-progress");

let djangovalueContainer=document.getElementById("value-Django-container");

let progressValue1=1,progressValue2=1,progressValue3=1,progressValue4=1,progressValue5=1,progressValue6=1;
 
let progressEndValue=80;

let speed=2;






let progress=setInterval(()=>{
    progressValue1++;
    javavalueContainer.textContent=`${progressValue1}%`;
    javaprogressBar.style.background=`conic-gradient(
        #ebd93f ${progressValue1 * 3.6}deg,
        #fff9bf ${progressValue1 * 3.6}deg
    )`;
    if(progressValue1===progressEndValue){
        clearInterval(progress);
    }
},speed);

let progressOfHtml=setInterval(()=>{
    progressValue2++;
    htmlvalueContainer.textContent=`${progressValue2}%`;
    htmlprogressBar.style.background=`conic-gradient(
        #37960e ${progressValue2 * 3.6}deg,
        #afff8c ${progressValue2 * 3.6}deg
    )`;
    if(progressValue2===90){
        clearInterval(progressOfHtml);
    }
},speed);

let progressOfCss=setInterval(()=>{
    progressValue3++;
    cssvalueContainer.textContent=`${progressValue3}%`;
    cssprogressBar.style.background=`conic-gradient(
        #db261d ${progressValue3 * 3.6}deg,
        #fc9a95 ${progressValue3 * 3.6}deg
    )`;
    if(progressValue3===80){
        clearInterval(progressOfCss);
    }
},speed);

let progressOfbootstrap=setInterval(()=>{
    progressValue4++;
    bootstrapvalueContainer.textContent=`${progressValue4}%`;
    bootstraprogressBar.style.background=`conic-gradient(
        #232aad ${progressValue4 * 3.6}deg,
        #cadcff ${progressValue4 * 3.6}deg
    )`;
    if(progressValue4===70){
        clearInterval(progressOfbootstrap);
    }
},speed);

let progressOfJs=setInterval(()=>{
    progressValue5++;
    jsvalueContainer.textContent=`${progressValue5}%`;
    jsprogressBar.style.background=`conic-gradient(
        #fcba1e ${progressValue5 * 3.6}deg,
        #ffe2a1 ${progressValue5 * 3.6}deg
    )`;
    if(progressValue5===70){
        clearInterval(progressOfJs);
    }
},speed);

let progressOfdjango=setInterval(()=>{
    progressValue6++;
    djangovalueContainer.textContent=`${progressValue6}%`;
    djangoprogressBar.style.background=`conic-gradient(
        #8da60a ${progressValue6 * 3.6}deg,
        #f0ffa1 ${progressValue6 * 3.6}deg
    )`;
    if(progressValue6===60){
        clearInterval(progressOfdjango);
    }
},speed);





