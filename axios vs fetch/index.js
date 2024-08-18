const axios = require("axios");
const { METHODS } = require("http");

const url = "https://sum-server.100xdevs.com/todos";

const url1 = "https://dummyjson.com/posts";

function main() {
  fetch(url).then(async (res) => {
    const data = await res.json();
    console.log(data);
  });
}
// main();

// other Syntax

async function betterFetch() {
  const dataNotJson = await fetch(url);
  const data = await dataNotJson.json();
  console.log(data.todos.map((item) => "Oi BalChira " + item.description));
  console.log(data.todos);

  // data.todos
}
// betterFetch();

async function moreInFetch() {
  const dataNotJson = await fetch(url1,{method: "GET"})
  const data = await dataNotJson.json();
  console.log(data);
}
// moreInFetch();
//Its For Axios____________;

const useAxios = async () => {
  // const res = await axios.get(url);    //For Get Request..
  // const res = await axios.post(url);      //for Post Request..

  const res = await axios.post('https://dummy.restapiexample.com/api/v1/create',{ 
      name: "BokaChoda",
    salary: 1122000,
    age: 24
    },{
    headers:{
      Authorization: "Bearer 123"
    }
    })
  console.log(res);
};
// useAxios();



async function doThis(){
fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'I am in love with someone.',
    userId: 5,
    /* other post data */
  })
})
.then(res => res.json())
.then(console.log);
}

// doThis();


// 1.  Change Request METHODS,
// 2.  Send ReportBody,
// 3.  Send Headers


async function moreOnAxios(){
  const res = await axios({
    url: 'https://dummyjson.com/posts/add',
    method: "POST",
    headers:{
      'Content-Type': 'application/json'
    },
    data:JSON.stringify({
                         title: 'I am in love with someone.',
                         userId: 5,
                       })
  });

  console.log(res.data)
}

moreOnAxios()