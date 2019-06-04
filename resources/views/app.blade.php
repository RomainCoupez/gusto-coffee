<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title')</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link href={{ asset("css/app.css") }} rel="stylesheet">
</head>
<body>

  <div id="app">
    <nav class="bg-dark">
      <router-link to="/">Home</router-link>
      <router-link to="about">About</router-link>
    </nav>
    <router-view></router-view>

  </div>
<p>Footer</p>
{{-- <script type="text/javascript" src="{{ asset('service-worker.js') }}"></script> --}}
<script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
</body>
</html>
