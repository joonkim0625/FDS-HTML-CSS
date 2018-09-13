// jQuery를 활용한 인터렉션 ...

var item = $('.menu-item');
var subItem = $('.sub-menu a');
item.attr('tabindex', 0);
subItem.attr('class', 'fas fa-angle-left');

// .on => 멀티 이벤트를 가능케 함
 item.on('mouseover focusin', function(){
   item.removeClass('menu-act');
   $(this).addClass('menu-act');
 }); 

 subItem.hover(function(){
   $(this).toggleClass('fa-angle-right');
 });
