function person(firstName, age){
  let name = firstName;
  let realAge = age;
  
  function likes (game) {
   console.log(`${name} likes ${game}`); 
  }
  return likes;
}

const potato = person('potato', 24);
potato('COD');