<!DOCTYPE html>
<html>
<head>
<link rel="icon" href="{{asset('images/favicon.jpg')}}" type="image/jpg"/>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>

<div id="wrapper">
 
 <div class="col-md-12">
<div id="app">		
	<login></login>
</div>
</div>
</div>
<script>
   var laravel = @json(['baseURL' => url('/')])
</script>   
<script src="{{ url('js/app.js') }}"></script>

</body>
</html>