<?php
$theme_path=drupal_get_path('theme', 'custom_theme');
  ?>
<div class="header">
  <img src="<?php echo $base_path;?>/<?php echo $theme_path?>/image/logo.png">
</div>
<div class="container-wrapper">
<!--<div class="sidebar-block">         
        <div><a href="#"><img src="////<?php echo $base_path;?>/<?php echo $theme_path?>/image/home.png"></a></div>
        <div><a href="#"><img src="////<?php echo $base_path;?>/<?php echo $theme_path?>/image/market.png"></a></div>
        <div><a href="#"><img src="////<?php echo $base_path;?>/<?php echo $theme_path?>/image/research.png"></a></div>
        <div><a href="#"><img src="////<?php echo $base_path;?>/<?php echo $theme_path?>/image/trade-now.png"></a></div>
        <div><a href="#"><img src="////<?php echo $base_path;?>/<?php echo $theme_path?>/image/open-account.png"></a></div>
        
</div>-->
<div class="main-block">
  <?php print render($page['content']);?>
</div>
</div>
