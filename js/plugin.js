// check Publish point
$(function (){
    $('#live').click(function (){

        $('#rtmp').attr('disabled',true);
        $('#rtsp').attr('disabled',true);
    });

    $('#live').click(function (){

        $('#rtmp').removeAttr('disabled');
        $('#rtsp').removeAttr('disabled');
    });

    $('#rtsp').click(function (){
        $('#rtsp-input').attr('disabled',true);
    });

    $('#rtsp').click(function (){
        $('#rtsp-input').removeAttr('disabled');
    });

    $('#vod').click(function (){
        $('#rtmp').attr('disabled',true);
        $('#rtsp').attr('disabled',true);
        $('#rtsp-input').attr('disabled',true);
    });

    $('#vod').click(function (){
        $('#rtmp').setAttribute('disabled');
        $('#rtsp').setAttribute('disabled');
        $('#rtsp-input').setAttribute('disabled');
    });

    $('#rtmp').click(function (){
        $('#rtsp-input').attr('disabled',true);
    });

    $('#rtmp').click(function (){

        $('#rtsp').setAttribute('disabled');
        $('#rtsp-input').setAttribute('disabled');
    });

    $('#live').click(function (){
        $('#rtsp-input').attr('disabled',true);
    });

    $('#rtmp').click(function (){
        $('#rtsp-input').setAttribute('disabled');
    });
});

