
(function($defaults){
				
				  var closeThisText =$defaults.closeThisText ||'关闭当前标签'
							,closeOtherText =$defaults.closeOtherText ||'关闭其他标签' 
							,closeLeftText =$defaults.closeLeftText ||'关闭左侧标签'
							,closeRightText =$defaults.closeRightText ||'关闭右侧标签'
							,closeAllText =$defaults.closeAllText ||'关闭全部标签'
							,closeAllText =$defaults.closeAllText ||'关闭全部标签'
							,closeQueryText=$defaults.closeQueryText||'关闭关键字标签'
							,closeQueryPromptMessage=$defaults.closeQueryPromptMessage||'"请输入关键字"'
							;
					
					
					
					
					
					
					$defaults.onContextMenu=function(e,title,index){
					    e.preventDefault();
					    var _self=$(this); 
					    var divMenu=$("<div></div>");
					    //divMenu.insertAfter(document.body);
					    var panels=_self.tabs("tabs");
					    var this_closable=_self.tabs("getTab",index).panel("options")["closable"];
					    divMenu.menu();
					  
						
						
						var itemCloseThis={text:closeThisText,iconCls:"icon-remove",handler:function(item){ 
					    	_self.tabs("close",index); 
					    }};
					
					var itemCloseOther={text:closeOtherText,iconCls:"icon-remove",handler:function(item){
					    	for(var i=panels.length-1;i>=0;i--){
					    		
					    		if(i==index){continue;} 
					    		var closable=_self.tabs("getTab",i).panel("options")["closable"];
					             if(!closable)continue;
					    		_self.tabs("close",i);   
					       };
					    }};
					
					    var itemCloseLeft={text:closeLeftText,iconCls:"icon-remove",handler:function(item){
					    	for(var i=index-1;i>=0;i--){
					    		
					    		if(i==index){break;} 
					    		var closable=_self.tabs("getTab",i).panel("options")["closable"];
					             if(!closable)continue;
					    		_self.tabs("close",i);   
					       };
					    }};
					    var itemCloseRight={text:closeRightText,iconCls:"icon-remove",handler:function(item){
					    	for(var i=panels.length-1;i>=0;i--){
					    		
					    		if(i==index){break;} 
					    		var closable=_self.tabs("getTab",i).panel("options")["closable"];
					             if(!closable)continue;
					    		_self.tabs("close",i);   
					       };
					    }};
					    
					    var itemCloseAll={text:closeAllText,iconCls:"icon-remove",handler:function(item){
					    	 
					    	for(var i=panels.length-1;i>=0;i--){ 
						             var closable=_self.tabs("getTab",i).panel("options")["closable"];
						             if(!closable)continue;
						    		_self.tabs("close",i);  
						       }; 
					    	
					    }};
					
					
					    var itemCloseQuery={text:closeQueryText,iconCls:"icon-search",handler:function(item){
					    	
					    	$.messager.prompt(closeQueryText,closeQueryPromptMessage,function(text){
					    		if(text=="")return;
					    		
					    		for(var i=panels.length-1;i>=0;i--){
						    		
						    		//if(i==index){break;}   
						    		var opts=_self.tabs("getTab",i).panel("options");
						    		var title=opts["title"];
						    		if(title.indexOf(text)<0)continue;
						    		var closable=opts["closable"];
						             if(!closable)continue;
						    		_self.tabs("close",i);    
						       };
					    		
					    	});
					    	
					    }};
						
						
						
					    if(this_closable){
					    	//divMenu.menu("appendItem",itemCloseThis);
					    }
						
						  
					    
					    divMenu.menu("appendItem",itemCloseOther)
					    .menu("appendItem",itemCloseLeft)
					    .menu("appendItem",itemCloseRight) 
					    .menu("appendItem",itemCloseAll)
					    .menu("appendItem",itemCloseQuery)
					    .menu("show",{left:e.pageX,top:e.pageY }) 
					    ;
				   };
					
					
					
					
				})($.fn.tabs.defaults);
