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
