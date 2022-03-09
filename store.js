let testMessage = "Test Message!";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const tickerShow = async (message) => {
  await delay(1000);
  console.log(letter);
};

let letter;

for (let loop = 0; loop < testMessage.length; loop++) {
  console.log(loop);
  letter = testMessage.slice(loop, loop + 1);

  tickerShow(letter);
}