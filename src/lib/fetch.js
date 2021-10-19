export const fetchUrl = async (url, method) => {
  try {
    const resp = await fetch(url, {
      method: method,
    });
    if (resp.ok) {
      const data = await resp.json();
      console.log(data);
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

export default fetchUrl;
