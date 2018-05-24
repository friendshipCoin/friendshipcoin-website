<template>


  <!--  * About
          > About
          > Team
          > Press Kit
          > Blog
        * Wallets
        * Roadmap
        * Charity
        * Resources
          > FAQ
          > Community
          > Developers
    -->

  <!-- header area start -->
  <header id="header_fixed_height">
    <!-- header bottom area start -->
    <div class="hb-style-two">
      <div class="container">
        <div class="row align-items-lg-center">
          <div class="col-lg-3 col-sm-12">
            <div class="logo">
              <a href="index.html" title="Friendship Coin Theme">
                <img src="/static/img/icon/logo.png" alt="Friendship Coin">
              </a>
            </div>
          </div>
          <div class="col-9 d-none d-xl-block">
            <div class="main-menu">
              <nav id="nav_mobile_menu">
                <ul>
                  <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
                  <li class="has-submenu">
                    <a>About</a>
                    <ul class="submenu">
                      <router-link to="/about" tag="li" active-class="active"><a>About</a></router-link>
                      <router-link to="/team" tag="li" active-class="active"><a>Team</a></router-link>
                      <router-link to="/press-kit" tag="li" active-class="active"><a>Press Kit</a></router-link>
                      <router-link to="/blog" tag="li" active-class="active"><a>Blog</a></router-link>
                    </ul>
                  </li>
                  <router-link to="/wallets" tag="li" active-class="active"><a>Wallets</a></router-link>
                  <router-link to="/roadmap" tag="li" active-class="active"><a>Roadmap</a></router-link>
                  <router-link to="/charity" tag="li" active-class="active"><a>Charity</a></router-link>
                  <li class="has-submenu">
                    <a>Resources</a>
                    <ul class="submenu">
                      <router-link to="/faq" tag="li" active-class="active"><a>FAQ</a></router-link>
                      <router-link to="/community" tag="li" active-class="active"><a>Community</a></router-link>
                      <router-link to="/developers" tag="li" active-class="active"><a>Developers</a></router-link>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="col-12 d-block d-xl-none">
            <div class="mobile_menu"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- header bottom area end -->
  </header>
  <!-- header area end -->
</template>

<style>
  .main-menu {
    float: right;
  }
</style>
