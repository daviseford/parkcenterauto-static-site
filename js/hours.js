// Use this file to dynamically highlight a list of days/hours for PCA
$(document).ready(function () {
  const d = getESTDate(); // Date in EST time
  const day_num = d.getDay(); // 0 is Sunday
  const hr_num = d.getHours();
  const s = $('.opening-hours li').eq(day_num)

  s.addClass('active'); // Add active class to the day of the week in the list

  const day_check = day_num > 0 && day_num < 6  // not mon or sun
  const hr_check = hr_num > 8 && hr_num < 17  // 9 - 5
  if (day_check && hr_check) {  // Prepend the Open badge to the hour span
    s.children().before('<span class="ml-3 badge badge-success">Open</span>')
  }
});

function getESTDate() {
  const offset = -5.0 // EST
  const clientDate = new Date();
  const utc = clientDate.getTime() + (clientDate.getTimezoneOffset() * 60000);
  return new Date(utc + (3600000 * offset));
}
