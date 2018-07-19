$(function() {
    $('.test').on('click', function() {
    	layer.open({
    content: '您确定要刷新一下本页面吗？'
    ,btn: ['刷新', '不要']
    ,yes: function(index){
      location.reload();
      layer.close(index);
    }
  });
    })
})