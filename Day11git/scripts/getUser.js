

async function getUser(user){

    try{
      let res = await fetch(`https://api.github.com/users/${user}`);
  
      let data = await res.json();
  
      return data;
    }
  
  catch(e){
      console.log("e:",e)
  }
  
  }


export default getUser