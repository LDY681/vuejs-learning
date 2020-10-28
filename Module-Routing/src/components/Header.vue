<template>
   <ul class="nav nav-pills">
      <!-- we dont send a request to the server but simply loads the correct route locally-->
        <router-link to="/" tag='li' active-class="active" exact><a>Home</a></router-link>
        <router-link to="/user" tag='li' active-class="active"><a>User</a></router-link>
    
</ul>
</template>