interface Dog {
    kind: "dog";
    dogProp: any;
  }
  interface Cat {
    kind: "cat";
    catProp: any;
  }
  
  const catOrDogArray: Dog[] | Cat[] = [];
  catOrDogArray.forEach((animal: Dog | Cat) => {
    if (animal.kind === "dog") {
      animal.dogProp;
      // ...
    } else if (animal.kind === "cat") {
      animal.catProp;
      // ...
    }
  });
  