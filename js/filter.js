;(function () {
    var $wrapper = $('.templet'),
        triangleUp = $wrapper.find('.triangle-up'),
        triangleDown = $wrapper.find('.triangle-down'),
        templetBlock = $wrapper.find('.templet-block'),
        selectBlock = $wrapper.find('.select-block');
    console.log(triangleUp, triangleDown, selectBlock, templetBlock);

    triangleUp.on('click', function () {
        alert('1');
    })
})(jQuery);
