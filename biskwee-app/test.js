var obj = "{:qty=>60, :unit_id=>1, :ingredient_id=>15}";

class ChainParse {
  constructor() {
    this.value = "";
  }

  get inputStr() {
    return this.value;
  }

  replaceColon(...args) {
    this.value = args.toString().replace(/:/g, "");
    console.log(this);
    return this;
  }

  replaceArrow(...args) {
    console.log(args);
    this.value = args.toString().replace(/=>/g, ":");
    console.log(this);
    return this;
  }

  jsObjectify(...args) {
    this.value = JSON.parse(args);
    console.log(this);

    return this;
  }

  log(...args) {
    this.value = console.log(args);
    return this;
  }
}

new ChainParse()
  .replaceColon(obj)
  .replaceArrow()
  .jsObjectify()
  .log();
