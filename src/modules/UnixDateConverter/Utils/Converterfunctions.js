// epoch time
export const getEpochTime = () => Math.floor(Date.now() / 1000);

// copy to clipboard
export const copyToClipboard = async (value) => {
  try {
    await navigator.clipboard.writeText(value);
  } catch (error) {
    console.log(error);
  }
};

// epoch to GMT
export const epochToGMT = (epoch) => {
  const date = new Date(epoch * 1000);
  const gmt = date.toGMTString();
  const loc = date.toLocaleString();
  return { gmt, loc };
};
