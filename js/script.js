// btn_bar toggle
$(()=> {
    $('[data-name="btn_bar"]').click(function(){
        
        if( $('[data-name="aside"]').hasClass('hide_aside')){
            $('[data-name="aside"]').removeClass('hide_aside').animate({left: '0px'})
        } else {
            $('[data-name="aside"]').animate({left: '-100%'}).addClass('hide_aside')
        }
    })
})