
window.onload = function() {
  //write your code here
  document.querySelector('#excuse').innerHTML = excuseGenerate();
};
let excuseGenerate = () => {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let whopt = Math.floor(Math.random()* who.length);
  let actionpt = Math.floor(Math.random()* action.length);
  let whatpt = Math.floor(Math.random()* what.length);
  let whenpt = Math.floor(Math.random()* when.length);
  return who[whopt] + ' ' +action[actionpt] + ' ' +what[whatpt] + ' ' +when[whenpt];
};
