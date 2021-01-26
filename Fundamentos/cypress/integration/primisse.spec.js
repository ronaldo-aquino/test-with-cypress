it("Resultado igual a 10", () => {});

const getSomething = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    }, 1000);
  });
};

const system = async () => {
  console.log("init");
  const promise = await getSomething();

  console.log(`Somethins is ${promise}`);
  console.log("end");
};

system();
