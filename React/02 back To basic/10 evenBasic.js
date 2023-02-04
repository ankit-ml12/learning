//if you set onclick function and want to call some defind functin

const ml = (e) => {
  console.log("hello ankit");
};

`<button onClick={ml}> click here</button>`;

// but let suppose if you want to pass some argument

//methode 1

const ml2 = (authore) => {
  console.log(authore);
};
`<button onClick={ml2(auth)}> click here</button>`//so to avoid click we use seccond methode //if you do like this then it envoke without click

//methode2
`<button onClick={()=>ml2(auth)}> click here</button>`;
