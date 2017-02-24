<h2>Family planning dashboard</h2>
<div class="popover">
  <a href="javascript:void('0');" class="btn pencil">Select Country</a>
  <div  class="thepopover" style="display: none;">
    <span class="pinguelo"></span>

    <span id="AreaClickId" class="parent  drp_txt">
      <span id="Arealist" class="simple" >
        <ul class="simple" >

          <?php
          global $base_url;
          global $base_path;
          //echo $selAreaPageURL;
          $arBrkCnt = ceil(count($areaList['areaIDNameArr']) / 4);
          if (!$arBrkCnt)
            $arBrkCnt = 6;

          $AreaCount = count($areaList['areaIDNameArr']);
          $arCnt = 0;
          $arCnt2 = 0; //$arBrkCnt = 6;//round($AreaCount/4);
          //echo "<pre>";
          //print_r($areaList['areaIDNameArr']);
          //echo "</pre>";
          ## start to check if area ID Name exists
          if (!empty($areaList['areaIDNameArr'])) {
            ## start loop through area ID array ##
            foreach ($areaList['areaIDNameArr'] as $areaID => $areaName) {
              $pageURL = $base_url . "/fp/" . $areaID;

              echo '<li class="area_li"><a href="' . $pageURL . '"  rel="' . $areaID . '" class="area_a"><span>' . $areaName . '</span></a></li>';

              $arCnt++;

              if ($arCnt == $arBrkCnt) {
                $arCnt = 0;
                echo '</ul><ul class="simple1">';
              }
            }
          }
          ## end of checking for area ID Name existence
          ?>
        </ul>

      </span>
    </span>
  </div>
</div>

</div>
<div id="ay-map">
  <div id="map"></div>
</div>


