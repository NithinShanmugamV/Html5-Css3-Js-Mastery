function partPromises(){
  const posts = [
    {title: "Post One", body: "This is post one"},
    {title: "Post Two", body: "This is post two"}
  ];
  var outputDiv = document.getElementById('output');
  function getPosts(){
    setTimeout(function(){
      let output = '';
      for(let i of posts){
        output += `<li>${i.title}</li>`;
      }
      outputDiv.innerHTML = output;
    },1000);
  }


  function createPosts(post) {
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        posts.push(post);

        //const err = true;
        const err = false;
        if(!err){
          resolve();
        }
        else {
          reject("Something went wrong");
        }
      },2000);
    });
  }
  /*
  function createPosts(post,callback){
    setTimeout(function(){
      posts.push(post);
      callback();
    },2000);
  }*/

  //getPosts();
  createPosts(
    {title: "Post Three", body: "This is post three"}
  )
  .then(getPosts)
  .catch(function(err){
    console.log(err);
  });
}

function partPromisesB(){
  const posts = [
    {title: "Post One", body: "This is post one"},
    {title: "Post Two", body: "This is post two"}
  ];
  var outputDiv = document.getElementById('output');
  function getPosts(){
    setTimeout(function(){
      let output = '';
      for(let i of posts){
        output += `<li>${i.title}</li>`;
      }
      outputDiv.innerHTML = output;
    },1000);
  }


  function createPosts(post) {
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        posts.push(post);

        //const err = true;
        const err = false;
        if(!err){
          resolve();
        }
        else {
          reject("Something went wrong");
        }
      },2000);
    });
  }

  //getPosts();
  async function init(){
    await createPosts({title: "Post Three", body: "This is post three"});
    getPosts();
  }
  init();
}

