var singleton = function(){
  var obj = {}
  this.add = function(k,v){
    if(!obj[k]){
      obj[k] = v;
    }
  }
  this.display = function(){
    console.log(obj)
  }
  
}

singleton.instance = null;
singleton.getInstance = function(){
    if(this.instance === null){
      console.log("creating instance")
      this.instance = new singleton();
    }else{
      console.log("already instance created")
    }
    return this.instance;
}

module.exports = singleton.getInstance();
