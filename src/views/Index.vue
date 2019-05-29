<template>
  <div class="home">
    <div class="frame">
      <svg class="logo" width="74" height="25" viewBox="0 0 74 25"><path d="M27.064 24.51l4.704-.019.283-1.502c2.89 3.132 9.496 2.098 11.797.039-1.267-1.303-1.805-2.849-2.01-4.506-1.637 2.142-4.849 2.402-6.505 1.122-1.555-1.11-1.959-3.317-1.554-5.232.366-1.728 1.498-3.259 3.152-3.924 1.958-.788 4.305-.284 5.457 1.247 1.94 3.163.38 5.794 1.737 8.626.807 1.686 2.4 3.118 4.094 3.85 2.039.88 4.53 1.05 6.835.378 2.708-.79 4.934-2.743 6.162-5.277 1.46-3.012 1.562-6.732.03-9.529-2.537-4.629-9.437-5.759-13.699-2.479 1.073 1.333 1.556 2.857 1.896 4.469 1.77-2.345 5.19-2.066 6.79-.647 1.372 1.211 1.755 4.044.725 6.273-.799 1.728-2.254 2.664-4.094 2.95-3.24.502-4.97-2.113-5.128-4.83-.036-2.715-.254-4.669-1.254-6.249-.687-1.086-1.799-2.076-2.937-2.662-2.466-1.27-5.932-1.363-8.325.126l1.27-6.54-4.722-.018-4.704 24.334zM12.616 5.914h5.006L15.707 15.8c-.379 2.092-.778 4.41 1.707 4.849.69.099 1.398 0 2.07-.315 2.022-.95 2.514-2.959 2.922-4.977l1.912-9.424 4.798-.019-3.68 18.537-4.4.057.19-.913c-2.926 1.934-6.485 1.675-8.608.27-2.063-1.457-2.532-4.01-2.016-7.242l2.014-10.709zM.114 10.515l.91-4.448 2.542.057c.771-4.842 3.97-6.699 9.425-5.97l-.834 4.43-2.049-.039c-1.014.04-1.556.595-1.707 1.58l2.656-.02-.834 4.391-2.712.039-2.75 14.031-4.76.018 2.711-14.088-2.598.02zM61.354 0l7.704.02.44 5.033L72.097.02H74L69.81 7.4l-1.611.019-.802-5.885-2.602.018-1.41 5.848-1.775.019 1.355-5.848-2.032.038.42-1.609z" fill="#FFFFFF" fill-rule="evenodd"></path></svg>

      <h1>Typographic Scale Test</h1>

      <div id="nav">
        <div class="option">
          <router-link class="button button--1" to="/web">Web</router-link>

          <ul class="quicklinks">
            <li class="section-title">Quick links</li>
            <li><router-link to="/web/">Homepage</router-link></li>
            <li><router-link to="/web/sports">Sports</router-link></li>
            <li><router-link to="/web/shows">Shows</router-link></li>
            <li><router-link to="/web/movies">Movies</router-link></li>
            <li><router-link to="/web/guide">Guide</router-link></li>
            <li><router-link to="/web/myvideos">My Videos</router-link></li>
          </ul>
        </div>

        <div class="option">
          <router-link class="button button--2" to="/mobile">Mobile</router-link>

          <ul class="quicklinks">
            <li class="section-title">Quick links</li>
            <li><router-link to="/web/">Homepage</router-link></li>
            <li><router-link to="/web/sports">Sports</router-link></li>
            <li><router-link to="/web/shows">Shows</router-link></li>
            <li><router-link to="/web/movies">Movies</router-link></li>
            <li><router-link to="/web/guide">Guide</router-link></li>
            <li><router-link to="/web/myvideos">My Videos</router-link></li>
          </ul>
        </div>

        <div class="option">
          <router-link class="button button--3" to="/tv">TV</router-link>

          <ul class="quicklinks">
            <li class="section-title">Quick links</li>
            <li><router-link to="/web/">Homepage</router-link></li>
            <li><router-link to="/web/sports">Sports</router-link></li>
            <li><router-link to="/web/shows">Shows</router-link></li>
            <li><router-link to="/web/movies">Movies</router-link></li>
            <li><router-link to="/web/guide">Guide</router-link></li>
            <li><router-link to="/web/myvideos">My Videos</router-link></li>
          </ul>
        </div>        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>
@import '../styles/app';

.home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#nav {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  font-weight: bold;

  .option {
    margin: 0 20px;
  }
  
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 200px;
    background: $grey-cool-40;
    text-decoration: none;
    color: white;
    text-align: center;
    text-transform: uppercase;
    border-radius: 6px;
    transition: all .15s ease-in-out;

    &.button--1 {
      background: #FA4616;
    }

    &.button--2 {
      background: #1C7AE4;
    }

    &.button--3 {
      background: #4428A7;
    }

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 20px 40px rgba(black, .8);
    }
  }
}

h1 {
  font-size: 38px;
  text-align: center;
  margin-bottom: 20px;
}

.quicklinks {
  a {
    display: block;
    padding: 10px 0;
    color: white;
    text-decoration: none;
    font-weight: 500;
    border-top: 1px solid rgba(white, .1);
    transition: all .15s ease-in-out;

    &:last-child {
      border-bottom: 1px solid rgba(white, .1);
    }

    &:hover {
      background-color: rgba(white, .15);
      padding-left: 10px;
    }
  }

  .section-title {
    text-transform: uppercase;
    margin: 20px 0 10px;
  }
}

.logo {
  width: 140px;
  height: 70px;
  display: block;
  margin: 0 auto;
}
</style>

