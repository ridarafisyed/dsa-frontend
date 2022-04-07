/** @format */

export const getPostDate = (data) => {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let date = new Date(data);
  let d = date.getDate();
  let m = months[date.getMonth()];
  let y = date.getFullYear();

  let readableDate = d + " " + m + " " + y;
  return readableDate;
};
export const dateFormater = (data) => {
  let month = data.getMonth() + 1;
  let monthFormate = month.toString().padStart(2, "0");
  let dateFormate = data.getDate().toString().padStart(2, "0");
  let date = data.getFullYear() + "-" + monthFormate + "-" + dateFormate;
  return date;
};
