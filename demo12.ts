function taggedObject<T, U extends string>(obj: T, tag: U) {
    return { ...obj, tag }; // T & { tag: U }
  }
  
  let x = taggedObject({ x: 10, y: 20 }, "point"); // { x: number, y: number } & { tag: "point" }
  