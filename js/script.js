// index 首頁 js
	$("#ppp").click(function(){
		alert("歡迎來到！ \n 前端網頁設計的世界。");
	});

	$( "p" ).click(function() {
		$( this ).toggleClass( "highlight" );
	});


	/*
	Following is a javascript template to show a question for user to answer.
	*/
	var questionController = new function(){
	  var thisObj, answersMapping = ['A', 'B', 'C', 'D', 'E'];
	  return thisObj = {
	    open: function(){
	      $('#question').show();
	      for(var i = 0; i < 5; ++i){
	        $('#question .btn').eq(i).click(function(){
	          $.post('submit_answer', {answer: answersMapping[i]}, function(){
	            thisObj.close();
	          });
	        })
	      }
	    },
	    close: function(){
	      $('#question').hide();
	    }
	  }
	}
	$(function(){
	  $('#open_question_btn').click(function(){
	    questionController.open();
	  });
	});