


    
    //this function is sliding the title
    function titleMarquee() {
        var titleText = document.title;
        titleText = titleText.substring(1, titleText.length) + titleText.substring(0, 1);
        document.title = titleText;
       setTimeout("titleMarquee()", 450);
       }
  
  
  
  
       let favouriteData = [
        {
            name: "Take No L's Skinny Jean - Vintage Blue Wash",
            color: "Color Vintage Blue Wash",
            price: "$27.99 USD",
            productlink:"#",
            img: "https://cdn.shopify.com/s/files/1/0293/9277/products/02-04-20_Content_JP_LB_10-32-50_Mens-360-Denim_2411_RG_LB_468x.jpg?v=1583351862",
            background_img:"#",
          },
          {
            name: "Rodrigo Sweater - Red/combo",
            color: "Color Red/combo",
            price: "$23.99 USD",
            productlink:"#",
            img: "https://cdn.shopify.com/s/files/1/0293/9277/products/RodrigoSweater-Redcombo_MER_468x.jpg?v=1609890710",
            background_img:"#",
          },
          {
            name: "I'm The GOAT Short Sleeve Tee",
            color: "Color White",
            price: " $22.99 USD ",
            productlink:"#",
            img: "https://cdn.shopify.com/s/files/1/0293/9277/products/08-24-21Mens_Denim_Pre_Fall_CE_08-45-21_Look11_6745_DC_DM_468x.jpg?v=1631301810",
            background_img:"#",
          },
          {
            name: "Keep It Simple V Neck Sweater",
            color: "Color Burgundy",
            price: "$16.99 USD",
            productlink:"#",
            img: "https://cdn.shopify.com/s/files/1/0293/9277/products/10-16-20Studio3_RT_DJ_10-36-22_57_1CACR1002S_Burgundy_0567_PLUS_NT_468x.jpg?v=1602893860",
            background_img:"#",
          },

  ]
       let trendinginData = [
        {
            name: "Jackson Plaid Overcoat ",
            color: "Color Tan/Multi",
            price: "$41.99 USD",
            productlink:"#",
            img: "https://cdn.shopify.com/s/files/1/0293/9277/products/JacksonPlaidOvercoat-TanMulti_MER_468x.jpg?v=1608671554",
            background_img:"#",
          },
          {
            name: "Keep It Simple V Neck Sweater",
            color: "Color Black",
            price: "$16.99 USD",
            productlink:"#",
            img: "https://cdn.shopify.com/s/files/1/0293/9277/products/08-12-21Studio3_SN_KG_09-52-34_34_1VACR1003S_Black_R_2478_PB_468x.jpg?v=1629231516",
            background_img:"#",
          },
          {
            name: "Keep It Simple V Neck Sweater",
            color: "Color Olive",
            price: "$16.99 USD",
            productlink:"#",
            img: "https://cdn.shopify.com/s/files/1/0293/9277/products/10-26-20Studio4_RT_DJ_15-02-55_46_1VACR1003S_Olive_53171_NT_468x.jpg?v=1603838954",
            background_img:"#",
          },
          {
            name: "Rodrigo Sweater - Red/combo",
            color: "Color Red/combo",
            price: "$23.99 USD",
            productlink:"#",
            img: "https://cdn.shopify.com/s/files/1/0293/9277/products/RodrigoSweater-Redcombo_MER_468x.jpg?v=1609890710",
            background_img:"#",
          }, 
  ]
  function  showFavouriteProducts(){
      favouriteData.forEach(function (el){
          let parent = document.getElementById("favoriteProducts")
           let div= document.createElement("div");
           let img= document.createElement("img");
           let product_price= document.createElement("p");
           let product_name= document.createElement("p");
           img.src = el.img;
           img.onclick= function(){
            window.location.href = el.productlink;
           }
        
           div.style.paddingBottom="18px";
          product_name.textContent= el.name;
           product_price.textContent= el.price;
           let add_button= document.createElement("button")
           let fav_button= document.createElement("button")
           fav_button.textContent=  "Favourites";
           add_button.style.height="50px"
            fav_button.style.border="3px solid black"
           fav_button.style.width="51%"
           fav_button.style.height="40px"
           fav_button.style.float="right" 
           fav_button.style.marginTop="-50px"
           fav_button.style.marginRight="20px"
            fav_button.style.backgroundColor="red"
           fav_button.style.color="white"
           fav_button.onclick = function(){
            
            addtofav(el);
          }
           
  
        
        
          
           add_button.innerText= "Add to cart";
           add_button.onclick = function(){
            
               addtoCart(el);
             }
            
           div.append(img, product_name, product_price, fav_button, add_button)
           parent.append(div);
          });
     }
  
  function showTrendProducts(){
      trendinginData.forEach(function (el){
            let parent = document.getElementById("trendingProducts")
            let x = document.getElementById("heart")
           let div= document.createElement("div");
           let img= document.createElement("img");
           let product_price= document.createElement("p");
           let product_name= document.createElement("p");
           img.src = el.img;
           // on clicking get the product description page
           img.onclick= function(){
            window.location.href = el.productlink;
           }
            div.style.paddingBottom="18px";
           product_name.textContent= el.name;
           product_price.textContent= el.price;
           let add_button= document.createElement("button")
           let fav_button= document.createElement("button")
           fav_button.textContent=  "Favourites";
           fav_button.style.border="3px solid black"
           fav_button.style.width="51%"
           fav_button.style.height="40px"
           fav_button.style.float="right" 
           fav_button.style.marginTop="-50px"
           fav_button.style.marginRight="20px"
           fav_button.style.backgroundColor="red"
           fav_button.style.color="white"
           add_button.style.height="50px"
           fav_button.onclick = function(){
            
            addtofav(el);
          }
  
           add_button.innerText= "Add to cart";
           add_button.onclick = function(){
            
               addtoCart(el);
             }
            
           div.append(img, product_name, product_price, fav_button, add_button)
           parent.append(div);
          });
     }
  
     showTrendProducts()
     showFavouriteProducts()
  
     
     //checking if we need to create the object in local storage from scratch or it already exist 
    
     if(localStorage.getItem("fashion_fav")===null){
       localStorage.setItem("fashion_fav", JSON.stringify([]));
     }
     if(localStorage.getItem("fashion_cart")===null){
      localStorage.setItem("fashion_cart", JSON.stringify([]));
    }
   // this function is pushing cart items to cart object
     function addtoCart(el){
       var bag= document.getElementById("shoppingbag")
        bag.style.color="white"
           let product_cart= JSON.parse(localStorage.getItem("fashion_cart"));
                product_cart.push(el);
        localStorage.setItem("fashion_cart", JSON.stringify(product_cart));
    }
    //this function is pushing fav to the fav object
    
     function addtofav(el){
     var heart= document.getElementById("heart");
       heart.style.color="red";
       let product_fav= JSON.parse(localStorage.getItem("fashion_fav"));
          product_fav.push(el);
      localStorage.setItem("fashion_fav", JSON.stringify(product_fav));
     }
  
     
  // This function is making the header fixed in the top for letting users to jump to any other page without scrolling all the way up
     window.onscroll = function() {myFunction()};
  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
  
  
  
  
  // This loop is finding the current page of the document and changing the background color to grey(refer to active class in css)
  for (var i = 0; i < document.links.length; i++) {
      if (document.links[i].href == document.URL) {
          document.links[i].className = 'active';
      }
  }
      
     