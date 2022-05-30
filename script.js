const date=new Date();

const clearCalender=()=>{
    const clearTodayClass=document.querySelector(".today");
    if(clearTodayClass!==null) clearTodayClass.remove();
    for(let i=1;i<=31;i++){
        const clearClass=document.querySelector(".days_class");
        if(clearClass!==null) clearClass.remove();
        else break;
    }

    while(true){
        const clearStart=document.querySelector(".days_start");
        if(clearStart!==null) clearStart.remove();
        else break;
    } 

}
const renderCalender=()=>{
    date.setDate(1);//set the day of month to 1st
    const displayMonthDay=document.querySelector(".days");

    //days of week
    const firstDayIndex=date.getDay();//0
    
   //last day of month

   const firstDateIndex= new Date(date.getFullYear(),date.getMonth()+1,1).getDate();
   const lastDateIndex= new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
    for(let x=0;x<firstDayIndex;x++){
        displayMonthDay.innerHTML+=`<div class="days_start"></div>`
    }

    //months of year 
    const months=["January","February","March","April","May","June",
              "July","August","September","October","November","December"];

    for(let x=1;x<=lastDateIndex;x++){
        if(x===new Date().getDate() && date.getMonth()===new Date().getMonth()){
            displayMonthDay.innerHTML+=`<div class="today">${x}</div>`
        }
        else{
            displayMonthDay.innerHTML+=`<div class="days_class">${x}</div>`

        }
    }

    document.querySelector(".month_class").innerHTML= months[date.getMonth()];          
    document.querySelector(".year_class").innerHTML= date.getFullYear();          
}
document.querySelector(".prev").addEventListener("click",()=>{
                                      date.setMonth(date.getMonth()-1);
                                      clearCalender();
                                      renderCalender();
    })
document.querySelector(".next").addEventListener("click",()=>{
                                      date.setMonth(date.getMonth()+1);
                                      clearCalender();
                                      renderCalender();
    })
    

renderCalender();
