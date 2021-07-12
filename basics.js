var addItemId=0;
function addToCart(item){
    addItemId+=1
 var addSelsctedItem=document.createElement('div');

 selectedItem.classList.add('cartImg');
 
 selectedItem.setAttribute('id',addItemId);

 var img=document.createElement('img');
 img.setAttribute('src',item.children[0],currentSrc);
 var cartItem=document.getElementsById('title');
 selectedItem.append(img);
 cartItem.append(selectedItem)


}