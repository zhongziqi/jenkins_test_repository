
export default{
			GetQueryString:function(eNumber){
				   var after = window.location.hash.split("?")[1];
				    if(after)
				    {
				        var reg = new RegExp("(^|&)"+ eNumber +"=([^&]*)(&|$)");
				       
				        var r = after.match(reg);
				        if(r != null)
				        {
				            return  decodeURIComponent(r[2]);
				        }
				        else
				        {
				            return null;
				        }
				    }
			},

}