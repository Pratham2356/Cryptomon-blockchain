async function shouldThrow(promise) {
  try {
    await promise;
    assert(false, "The contract did not throw.");
  } catch (err) {
    assert(true);
    return;
  }
}
const advanceTime = (time) => {
  return new Promise((resolve, reject) => {
    web3.currentProvider.send(
      {
        jsonrpc: "2.0",
        method: "evm_increaseTime",
        params: [time],
        id: new Date().getTime(),
      },
      (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      }
    );
  });
};
module.exports = {
  shouldThrow,
  advanceTime,
};
