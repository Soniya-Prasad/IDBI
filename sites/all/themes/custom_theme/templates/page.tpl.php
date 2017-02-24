<?php
$theme_path=drupal_get_path('theme', 'custom_theme');
  ?>
<div class="header">
  <img src="<?php echo $base_path;?>/<?php echo $theme_path?>/image/logo.png">
</div>
<div class="container-wrapper">
<div class="sidebar-block">         
        <div><a href="#"><img src="<?php echo $base_path;?>/<?php echo $theme_path?>/image/home.png"></a><span>HOME</span></div>
        <div><a href="#"><img src="<?php echo $base_path;?>/<?php echo $theme_path?>/image/market.png"></a><span>MARKET</span></div>
        <div><a href="#"><img src="<?php echo $base_path;?>/<?php echo $theme_path?>/image/research.png"></a><span>RESEARCH</span></div>
        <div><a href="#"><img src="<?php echo $base_path;?>/<?php echo $theme_path?>/image/trade-now.png"></a><span>TRADE NOW</span></div>
        <div><a href="#"><img src="<?php echo $base_path;?>/<?php echo $theme_path?>/image/open-account.png"></a><span>OPEN AN ACCOUNT</span></div>
        
</div>
  <div class="error-msg">
    
    <?php 
      if(isset($messages)){
        print $messages;
      }
      ?>
  </div>
<div class="main-block">
  <div class="link-button">
    <div id="personal_details"><a href="#"><img src="<?php echo $base_path;?>/<?php echo $theme_path?>/image/tabs-icon.png"></a><span>Personal<br>Details</span></div>
    <div id="work_details"><a href="#"><img src="<?php echo $base_path;?>/<?php echo $theme_path?>/image/tabs-icon.png"></a><span>Work <br>Details</span></div>
    <div id="bank_details"><a href="#"><img src="<?php echo $base_path;?>/<?php echo $theme_path?>/image/tabs-icon.png"></a><span>Bank<br>Details</span></div>
    <div id="select_scheme"><a href="#"><img src="<?php echo $base_path;?>/<?php echo $theme_path?>/image/tabs-icon.png"></a><span>Select<br>Scheme</span></div>
    <div id="t_c"><a href="#"><img src="<?php echo $base_path;?>/<?php echo $theme_path?>/image/tabs-icon.png"></a><span><br>T&C<br></span></div>
    <div id="fund_transfer"><a href="#"><img src="<?php echo $base_path;?>/<?php echo $theme_path?>/image/tabs-icon.png"></a><span>Fund <br>Transfer</span></div>
    <div id="proof_upload"><a href="#"><img src="<?php echo $base_path;?>/<?php echo $theme_path?>/image/tabs-icon.png"></a><span>Proof<br>upload</span></div>  
  </div>
  <?php print render($page['content']);?>
</div>
</div>
