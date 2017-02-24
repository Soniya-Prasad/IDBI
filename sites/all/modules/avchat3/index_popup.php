<?php


define('DRUPAL_ROOT', dirname(dirname(dirname(dirname(dirname(__FILE__))))));
require_once DRUPAL_ROOT . '/includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);

global $user;
global $base_url;
global $conf;
global $base_root;

// Check if AVChat has been uploaded
// Alternative to file_exists: file_prepare_directory
if ((drupal_get_path('module', 'avchat3') . '/audio_video_quality_profiles')) {

	$movie_param = "index.swf";
	if (user_access("avchat3 - access admin interface")) {
		$movie_param = "admin.swf";
	}

	$widthPopUP = variable_get('avchat3_popup_width', '960');
	$heightPopUP = variable_get('avchat3_popup_height', '700');

	if ($widthPopUP == '') {
		$widthPopUP = '960';
	}

	if ($heightPopUP == '') {
		$heightPopUP = '700';
	}


	?>
	<!DOCTYPE HTML>
	<html>
	<head>
		<title>Video Chat</title>
		<script src="./tinycon.min.js"></script>
		<script type="text/javascript" src="./facebook_integration.js"></script>
		<script type="text/javascript" src="./swfobject.js"></script>
		<script type="text/javascript">
			var chat_path = ".";
			var chatPathTwitter = "<?php echo $base_url?>";
			var twitterKey = "<?php echo variable_get('avchat3_twitter_consumer_key', '');?>";
			var twitterSecret = "<?php echo variable_get('avchat3_twitter_consumer_secret', '')?>";
			var embed = "popup";
		</script>
		<script type="text/javascript" src="new_message.js"></script>
		<script type="text/javascript" src="./flash_vars.js"></script>
		<script type="text/javascript" src="./codebird-js/sha1.js"></script>
		<script type="text/javascript" src="./codebird-js/codebird.js"></script>
		<script type="text/javascript" src="twitter_integration.js"></script>
		<style type="text/css">
			html {
				height: 100%;
				overflow: hidden;
			}

			body {
				padding: 0px;
				margin: 0px;
				width: 100%;
				height: 100%;
			}

			#wrapper {
				display: block;
				width: 100%;
				height: 100%;
			}

			#index_embed {
				height: 100%;
			}
		</style>
	</head>
	<body>
	<div id="wrapper">
		<input type="hidden" name="FB_appId" id="FB_appId"
			   value="<?php echo variable_get('avchat3_facebook_app_id', ''); ?>"/>
		<input type="hidden" name="AVChat_exists" id="AVChat_exists" value="true"/>
		<script type="text/javascript">
			swfobject.embedSWF("<?php echo $movie_param;?>", "myContent", "100%", "100%", "10.3.0", "", flashvars, params, attributes);
		</script>
		<div id="myContent">
			<div id="av_message" style="color:#ff0000"></div>
		</div>
		<div id="fb-root"></div>

		<script type="text/javascript" src="./find_player.js"></script>
	</div>
	</body>
	</html>

<?php
// End file checking
} else {
	echo "<div id='wrapper'>";
	echo "AVChat is missing. Please upload your files into your <strong>".drupal_get_path('module', 'avchat3')."</strong> folder. <a href='http://avchat.net/support/drupal?utm_source=drupal-module&utm_medium=drupal&utm_content=drupal-help-message&utm_campaign=drupal-module#122' target='_blank'>Installation instructions</a> | <a href='http://nusofthq.com/forum/index.php?/forum/3-avchat-3-httpavchatnet/&utm_source=drupal-module&utm_medium=drupal&utm_content=drupal-help-message&utm_campaign=drupal-module' target='_blank'>Forums</a>";
	echo '</div>';
}



