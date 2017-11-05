"use strict"

// release 0(Mango tree aja),1(MangoTree,AppleTree,PearTree),2(FruitTree,Fruits)

class FruitTree {

  // Initialize a new MangoTree
  constructor(name,age,height,fruit,healthy) {
    this._name          = name
    this._age           = age
    this._height        = height
    this._fruitsBox     = []
    this._stopHeight    = null
    this._healthyStatus = healthy
    this._maxAge        = null
    this._harvested     = 0
    this._fruitType     = null
    this._qtyBefore     = fruit || 0
  }

  getAge() {
    return this._age
  }
  getHeight() {
    return this._height
  }
  getFruits() {
    return this.Fruits
  }
  getHealtyStatus() {
    return this._healthyStatus
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age += 1

    if(this._height <= this._stopHeight) { //TINGGI
      let added_height = Math.random() * (1 - 0)
      this._height += added_height
      // this._height += 1
    }

    if(this._age == this._maxAge) { //UMUR
      this._healthyStatus = false
    }
  }

  // Produce some mangoes
  produce() { //ga pake, langsung di handle sama harvest
    let qty = Math.floor(Math.random() * (10 - 1) + 1)
    // let arrProduce = [];
    //looping isi box fruits

    for (var i = 0; i < qty; i++) {
      if(this._name === 'MangoTree'){
        this._fruitType = new Mango()
      }
      else if(this._name === 'AppleTree'){
        this._fruitType = new Apple()
      }
      else if(this._name === 'PearTree'){
        this._fruitType = new Pear()
      }
      this._fruitsBox.push(this._fruitType)
    }
    // return arrProduce
  }

  // Get some fruits
  harvest() {
      // let statuses    = ['good', 'bad']
      let sumGood     = 0
      let sumBad      = 0
      let qty         = this._fruitsBox.length
      this._harvested = this._qtyBefore + qty


      for(let i=0; i<qty; i++) {
        //random status buah
        // let randomStatus = Math.round(Math.random())
        if(this._fruitsBox[i]._quality == 'good') {
          sumGood++
        } else {
          sumBad++
        }
        // this._fruits.push(new Mango(statuses[randomStatus]))
      }
      this._harvested += ` (${sumGood} good, ${sumBad} bad)`
    }
}

class Fruit {
  constructor(){
    this._quality = this.fruitQuality();
  }

  fruitQuality(){
    // let statuses     = ['good', 'bad'];
    let randomStatus = Math.floor(Math.random()* 2)
    if(randomStatus == 0){
      return 'good'
    }
    else if(randomStatus == 1){
      return 'bad'
    }
  }

  get name(){
    return this._name
  }
}

class MangoTree extends FruitTree {
  constructor(name,age,height,fruit,healthy) {
    super(name,age,height,fruit,healthy)
    this._stopHeight = 15
    this._maxAge = 20
    // this.status = status
  }
}


class AppleTree extends FruitTree{
  constructor(name,age,height,fruit,healthy){
    super(name,age,height,fruit,healthy)
    this._stopHeight = 8
    this._maxAge = 10
  }
}

class PearTree extends FruitTree{
  constructor(name,age,height,fruit,healthy){
    super(name,age,height,fruit,healthy)
    this._stopHeight = 9
    this._maxAge = 11
  }
}

class Mango extends Fruit{
  // Produce a mango
  constructor(){
    super()
    this._name = `Mango Fruit`
  }
}

class Apple extends Fruit{
  constructor(){
    super()
    this._name = `Apple Fruit`
  }
}

class Pear extends Fruit{
  constructor(){
    super()
    this._name = `Pear Fruit`
  }
}

//release 3
class TreeGroove{
  constructor(){
    this.arrTree =[]
  }
  // input tree : bikin if else, instanciate sesuai dgn pohon yg di panggil. push ke constructor groove.
  inputTree(name,age,height,fruit,healthy){
    if (name === 'MangoTree'){
      let tree = new MangoTree(name, age, height, fruit, healthy)
      this.arrTree.push(tree)
      // console.log(this.arrTree);
    }
    else if(name === 'AppleTree'){
      let tree = new AppleTree(name, age, height, fruit, healthy)
      this.arrTree.push(tree)
    }
    else if(name === 'PearTree'){
      let tree = new PearTree(name, age, height, fruit, healthy)
      this.arrTree.push(tree)
    }
    // console.log(this.arrTree);
  }

  show_ages(){
    for (var i = 0; i < this.arrTree.length; i++) {
      console.log(`\nthis ${this.arrTree[i]._name} age = ${this.arrTree[i]._age} year(s)`)
    }
  }
  show_trees(){
    for(var i = 0; i < this.arrTree.length; i++){
      console.log(`\nTree Name : ${this.arrTree[i]._name}`);
    }
  }
  // mature : cek semua array pohon(loop), kalo buahnya lebih dari 0 dan pohonnya belum mati (healthy), log tree name 'mature'
  mature_trees(){
    for (var i = 0; i < this.arrTree.length; i++) {
      // console.log(typeof Number(this.arrTree[i]._harvested[0]));
      if((this.arrTree[i]._healthyStatus != false) && (Number(this.arrTree[i]._harvested[0]) > 0)){
        console.log(`${this.arrTree[i]._name} has Fruit(s)`);
      }
      else{
        console.log(`${this.arrTree[i]._name} doesn't has Fruit(s)`)
      }
    }
  }
  dead_trees(){
    for (var i = 0; i < this.arrTree.length; i++) {
      if(this.arrTree[i]._healthyStatus == false){
        console.log(`${this.arrTree[i]._name} dead`);
      }
      else
      console.log(`${this.arrTree[i]._name} still alive`);
    }
  }

  nextYear(){
    for (var i = 0; i < this.arrTree.length; i++) {
      // console.log(this.arrTree);
      this.arrTree[i].grow()
      this.arrTree[i].produce()
      this.arrTree[i].harvest()
    }
  }
}

// let mango     = new Mango()
// let pear      = new Pear()
// let apple     = new Apple()
let groove    = new TreeGroove()
// /**
  // * driver code untuk release 0,1,2
  let treeMango = new MangoTree('MangoTree', 1, 2, 8, true)
  let treeApple = new AppleTree('AppleTree', 5, 1.5, 10, true)
  let treePear  = new PearTree('AppleTree', 3, 1.5, 10, true)
  // *
  console.log(`\n===================Data ${treeMango._name} tree:======================================\n`);
   do {
     treeMango.grow();
     treeMango.produce();
     treeMango.harvest();
     console.log(`[Year ${treeMango._age} Report] Height = ${treeMango._height} | Fruits harvested = ${treeMango._harvested}`)
   } while (treeMango._healthyStatus != false)

console.log(`\n===================Data ${treeApple._name} tree:======================================\n`);
   do {
     treeApple.grow();
     treeApple.produce();
     treeApple.harvest();
     console.log(`[Year ${treeApple._age} Report] Height = ${treeApple._height} | Fruits harvested = ${treeApple._harvested}`)
   } while (treeApple._healthyStatus != false)

console.log(`\n===================Data ${treePear._name} tree:======================================\n`);
   do {
     treePear.grow();
     treePear.produce();
     treePear.harvest();
     console.log(`[Year ${treePear._age} Report] Height = ${treePear._height} | Fruits harvested = ${treePear._harvested}`)
   } while (treePear._healthyStatus != false)


// Drive Code Release 3
groove.inputTree('MangoTree', 1, 2, 8, false);
groove.inputTree('AppleTree', 5, 1.5, 10, true);
groove.inputTree('PearTree', 7, 1.8, 12, true);
groove.nextYear();

// console.log(groove.arrTree[0]._fruitsBox);
groove.show_trees();
groove.show_ages();
groove.mature_trees();
groove.dead_trees();
