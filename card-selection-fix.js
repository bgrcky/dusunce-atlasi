(function(){
  document.addEventListener('click',function(e){
    const node=e.target.closest('.node[data-eser]');
    if(!node)return;
    if(e.target.closest('a,button,input,textarea,select,label'))return;
    const title=node.querySelector('.t');
    if(!title||e.target===title||e.target.closest('.t'))return;
    title.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window}));
  },false);
})();
