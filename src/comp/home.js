import React from 'react'

import Man from './man'
export const dat=[
  {id:0,pic:"https://i.picsum.photos/id/104/3840/2160.jpg?hmac=Rv0qxBiYb65Htow4mdeDlyT5kLM23Z2cDlN53YYldZU",name:"Fancy product",price:"$40.00-$80.00",option:"Add to cart"},
{id:1,pic:"https://i.picsum.photos/id/1047/3264/2448.jpg?hmac=ksy0K4uGgm79hAV7-KvsfHY2ZuPA0Oq1Kii9hqkOCfU",name:"Special item",price:"$40.00-$80.00",option:"Add to cart"},
{id:2,pic:"https://i.picsum.photos/id/1070/5472/3648.jpg?hmac=oFxAwLeGJmas45_yf5NdpeQzexAF-tMVL6q9JwvSuo0",name:"Sale item",price:"$40.00-$80.00",option:"Add to cart"},
{id:3,pic:"https://i.picsum.photos/id/1077/3000/1995.jpg?hmac=gx_KF_cdQtv7ilOSaN8YEsNKkhcwRQ507UB7qZ4RutI",name:"Popular item",price:"$40.00-$80.00",option:"Add to cart"},
{id:4,pic:"https://i.picsum.photos/id/104/3840/2160.jpg?hmac=Rv0qxBiYb65Htow4mdeDlyT5kLM23Z2cDlN53YYldZU",name:"Fancy product",price:"$40.00-$80.00",option:"Add to cart"},
{id:5,pic:"https://i.picsum.photos/id/1047/3264/2448.jpg?hmac=ksy0K4uGgm79hAV7-KvsfHY2ZuPA0Oq1Kii9hqkOCfU",name:"Special item",price:"$40.00-$80.00",option:"Add to cart"},
{id:6,pic:"https://i.picsum.photos/id/1070/5472/3648.jpg?hmac=oFxAwLeGJmas45_yf5NdpeQzexAF-tMVL6q9JwvSuo0",name:"Sale item",price:"$40.00-$80.00",option:"Add to cart"},
{id:7,pic:"https://i.picsum.photos/id/1077/3000/1995.jpg?hmac=gx_KF_cdQtv7ilOSaN8YEsNKkhcwRQ507UB7qZ4RutI",name:"Popular item",price:"$40.00-$80.00",option:"Add to cart"}]



function Home({history,location}) {

  const search=new URLSearchParams(location.search)
  const count = Number(search.get("count"));
  if(count && !isNaN(count)) dat.length=count;

  return (
    
    <> 
    
    <button onClick={()=>history.goBack()}>go back</button>

    <button onClick={()=>history.goForward()}>go forward</button>
    <button onClick={()=>history.push("/about")}>push</button>

    <button onClick={()=>history.replace("/about")}>re place</button>
    
    <div >use params to sort the content eg.(http://localhost:3000/home?count=1)</div>
     <div className="ma">{dat.map((x)=>( 
      <Man key={x.id} det={x}></Man>))}
      </div>
    
   </>

   
  )
}

export default Home