import moment from "moment/moment";

// unix time
export const getUnixTime = () => Math.floor(Date.now() / 1000);

// copy to clipboard
export const copyToClipboard = async (value) => {
  try {
    await navigator.clipboard.writeText(value);
  } catch (error) {
    console.log(error);
  }
};

// unix to GMT
export const unixToDate = (epoch) => {
  const date = new Date(epoch * 1000);
  const gmt = date.toGMTString();
  const loc = date.toLocaleString();
  return { gmt, loc };
};

export const getCurrentDate = () => {
  const date = new Date();
  const gmt = date.toGMTString();
  const loc = date.toLocaleString();
  return { gmt, loc };
};

export const dateToUnixTimestamp = (dateString) => {
  const dateObj = new Date(dateString);
  const unixTimestamp = dateObj.getTime();
  const unixTimestampInSeconds = Math.floor(unixTimestamp / 1000);
  return unixTimestampInSeconds;
};

export const getRelativeTime = (date) => moment(date * 1000).fromNow();

export const formatDates = (date) => {
  const d = date * 1000;
  const data = {
    timeOnly: moment(d).format("LT"), // 6:20 PM
    timeWithMil: moment(d).format("LTS"), // 6:20:44 PM
    monthDayYearPretty: moment(d).format("L"), // 07/30/2023
    monthDayYear: moment(d).format("l"), // 7/30/2023
    dateFull: moment(d).format("LL"), // July 30, 2023
    date: moment(d).format("ll"),
    dateFullWithTime: moment(d).format("LLL"), // July 30, 2023 6:20 PM
    dateWithTime: moment(d).format("lll"), // Jul 30, 2023 6:20 PM
    datDateTimeFull: moment(d).format("LLLL"), // Sunday, July 30, 2023 6:20 PM
    dayDateTime: moment(d).format("llll"), // Sun, Jul 30, 2023 6:20 PM
  };
  return data;
};
