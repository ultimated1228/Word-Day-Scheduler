
$(function () {

  function updateDay(){
    let currentDay = dayjs().format('dddd, MMMM D');
    $("#currentDay").text(currentDay);
}
updateDay();
setInterval(updateDay, 3600000);


  function updateTime(){
    let currentHour = dayjs().format('h:mm a');
    $("#currentHour").text("Current Time:  " + currentHour);
}
updateTime();
setInterval(updateTime, 10000);

  $('.saveBtn').on("click", function(){
    console.log($(this))
    console.log($(this).siblings(".description"))
    console.log($(this).siblings(".description").val())

    let timeBlock = $(this).parent().attr("id")
    let descText = $(this).siblings(".description").val()
    localStorage.setItem(timeBlock , descText)
  })

$(".description").each(function() {
  console.log($(this))

  let value = localStorage.getItem($(this).parent().attr("id"))
  $(this).val(value)
})

$(".time-block").each(function(){
  let timeBlock = $(this).attr("id").split("-")[1];
  let currentHour = dayjs().hour();
  
  console.log(currentHour)
  console.log(timeBlock)
  
  if (currentHour == timeBlock) { 
      $(this).addClass("present")
    }
  if (currentHour < timeBlock) {
      $(this).addClass("future")
    }
  if (currentHour > timeBlock) {
      $(this).addClass("past")
    }
})

});
