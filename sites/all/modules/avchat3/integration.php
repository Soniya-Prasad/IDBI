<?php
/**
 * Integration file for AVChat 3 with Drupal 7
 *
 * @category	Group Video Chat
 * @package		AVChat 3 Module for Drupal 7
 * @author		AVChat <contact@avchat.net>
 * @copyright	2015 AVChat.net
 * @license		This Drupal Module is distributed under the terms of the GNU General Public License V2.0.
 * 				you can redistribute it and/or modify it under the terms of the GNU General Public License V2.0 
 * 				as published by the Free Software Foundation, either version 3 of the License, or any later version.
 * @link		http://avchat.net/?utm_source=drupal-module&utm_medium=drupal&utm_content=drupal-backend&utm_campaign=avchat-drupal
 */

	define('DRUPAL_ROOT', dirname(dirname(dirname(dirname(dirname(__FILE__))))));
	require_once DRUPAL_ROOT . '/includes/bootstrap.inc';
	require_once DRUPAL_ROOT . '/includes/common.inc';
	drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);

	global $userRole;
	global $user;
	global $base_url;
	global $conf;
	global $base_root;

	$baseUrlArray = explode('//', $base_url);
	$baseUrlArray = explode('/', $baseUrlArray[1]);

	$rootURL = 'http:/';
	for ($i = 0; $i < sizeof($baseUrlArray) - 4; $i++) {
		$rootURL .= '/'.$baseUrlArray[$i];
	}
	$base_url = $rootURL;

	/**
	 * AVChat 3 General Settings
	 */

	$avconfig['usersListType'] = 'thumbnail';
	$avconfig['enableRegisterTab'] = 1;
	/**
	 * AVChat 3 Module Settings
	 */

//RTMP connetions string
	$avconfig['connectionstring'] = variable_get('avchat3_rtmp_connectionstring', 'rtmp://');

//chat is down for maintenance
	$avconfig['downForMaintenance'] = variable_get('avchat3_maintenance_mode', 0);

//disconect link
	$avconfig['disconnectButtonLink'] = variable_get('avchat3_disconnect_link', '/');

//login page URL
	$avconfig['loginPageURL'] = variable_get('avchat3_login_url', '/');

//register page URL
	$avconfig['registerPageURL'] = variable_get('avchat3_register_url', '/');

//ban page URL
	$avconfig['banURL'] = variable_get('avchat3_ban_page_url', '/');

//kick page URL
	$avconfig['kickURL'] = variable_get('avchat3_kick_page_url', '/');

//invite page URL
	$avconfig['inviteLink'] = variable_get('avchat3_invite_link', '');

//max file size for upload
	$avconfig['maxUploadFileSize'] = (int)variable_get('avchat3_max_upload', 512) * 1024;

//set background image
	$avconfig['backgroundImageUrl'] = variable_get('avchat3_background_image', 'pattern_061.gif');

//enable youtube and pictures preview in chat text area
	$avconfig['showYTVideosPreview'] = variable_get('avchat3_show_youtube_videos_preview', 1);

//show avatars in chat text area
	$avconfig['showAvatarsInTextChat'] = variable_get('avchat3_show_avatars_in_text_chat', 1);

//right to left
	$avconfig['rightToLeft'] = variable_get('avchat3_right_to_left', 0);

//image preview width and height
	$avconfig['imagePreviewAreaWidthAndHeight'] = variable_get('avchat3_img_preview_area_height_width', 120);

//facebook & twitter login
	$avconfig['enableOtherAccountOptions'] = variable_get('avchat3_facebook_twitter_connect', '0');

	/**
	 * AVChat 3 Module Permissions
	 */

//access to the chat
	$avconfig['showLoginError'] = 1;
	if (user_access("avchat3 - access user interface"))
	{
		$avconfig['showLoginError'] = 0;
	}

//allowing users to make video streaming
	$avconfig['allowVideoStreaming'] = 0;
	if (user_access("avchat3 - allow publish video"))
	{
		$avconfig['allowVideoStreaming'] = 1;
	}

//allowing users to make audio streaming
	$avconfig['allowAudioStreaming'] = 0;
	if (user_access("avchat3 - allow publish audio"))
	{
		$avconfig['allowAudioStreaming'] = 1;
	}

//allowing users to make private steams
	$avconfig['allowPrivateStreaming'] = 0;
	if (user_access("avchat3 - allow private streaming"))
	{
		$avconfig['allowPrivateStreaming'] = 1;
	}

//allowing users to change their gender
	$avconfig['changegender'] = 0;
	if (user_access("avchat3 - allow change gender"))
	{
		$avconfig['changegender'] = 1;
	}

//allowing user to change their username
	$avconfig['changeuser'] = 0;
	if (user_access("avchat3 - allow change username")) { $avconfig['changeuser'] = 1; }

//allowing users to create rooms
	$avconfig['createRoomsEnabled'] = 0;
	if (user_access("avchat3 - allow create rooms")) { $avconfig['createRoomsEnabled'] = 1; }

//allow e-mails in text chat
	$avconfig['allowEmails'] = 0;
	if (user_access("avchat3 - allow emails in text chat")) { $avconfig['allowEmails'] = 1; }

//allow url in text chat
	$avconfig['allowUrls'] = 0;
	if (user_access("avchat3 - allow urls in text chat")) { $avconfig['allowUrls'] = 0; }

//allowing users to send files to the rooms
	$avconfig['sendFileToRoomsEnabled'] = 0;
	if (user_access("avchat3 - allow send files to rooms")) { $avconfig['sendFileToRoomsEnabled'] = 1; }

//allowing users to send files to other users
	$avconfig['sendFileToUserEnabled'] = 0;
	if (user_access("avchat3 - allow send files to user")) { $avconfig['sendFileToUserEnabled'] = 0; }

//allow users to send private messages
	$avconfig['pmEnabled'] = 0;
	if (user_access("avchat3 - allow private messages")) { $avconfig['pmEnabled'] = 1; }

//allow users to invite other users to their rooms
	$avconfig['usersCanInviteToRoom'] = 0;
	if (user_access("avchat3 - users can invite to room")) { $avconfig['usersCanInviteToRoom'] = 1; }

//allow users to invite other users to view their stream
	$avconfig['usersCanInviteToViewCam'] = 0;
	if (user_access("avchat3 - user can invite to view stream")) { $avconfig['usersCanInviteToViewCam'] = 1; }

//only broadcasters can view other cams
	$avconfig['onlyBroadcastersCanViewOtherCams'] = 0;
	if (user_access("avchat3 - only broadcasters can view other cams")) { $avconfig['onlyBroadcastersCanViewOtherCams'] = 1; }

//users can moderate rooms that they created
	$avconfig['enableModeratorForRooms'] = 0;
	if (user_access("avchat3 - enable moderator for rooms")) { $avconfig['enableModeratorForRooms'] = 1; }

//AVChat 3 ONLY admin & moderators permissions
	if (user_access("avchat3 - access admin interface")) {

		$avconfig['gender'] = 'admin';

		//admins can delete rooms
		$avconfig['adminCanDeleteRooms'] = 2; //hidden
		if (user_access("avchat3 - admin/moderator can delete rooms")) { $avconfig['adminCanDeleteRooms'] = 1; }

		//admin can ban other users
		$avconfig['adminCanBan'] = 2; //hidden
		if (user_access("avchat3 - admin/moderator can ban")) { $avconfig['adminCanBan'] = 1; }

		//admin can remove ban
		$avconfig['adminCanRemoveBan'] = 2; //hidden
		if (user_access("avchat3 - admin/moderator can remove ban")) { $avconfig['adminCanRemoveBan'] = 1; }

		//admin can kick other users
		$avconfig['adminCanKick'] = 2; //hiddne
		if (user_access("avchat3 - admin/moderator can kick")) { $avconfig['adminCanKick'] = 1; }

		//admin can view private messages
		$avconfig['adminCanViewPrivateMessages'] = 0;
		if (user_access("avchat3 - admin/moderator can view private messages")) { $avconfig['adminCanViewPrivateMessages'] = 1; }

		//admin can view private streams without permissions
		$avconfig['adminCanViewPrivateStreamsWithoutPermission'] = 0;
		if (user_access("avchat3 - admin/moderator can view private streams without permission")) { $avconfig['adminCanViewPrivateStreamsWithoutPermission'] = 1; }

		//admin can access settings
		$avconfig['adminCanAccessSettings'] = 2; //hidden
		if (user_access("avchat3 - admin/moderator can access settings")) { $avconfig['adminCanAccessSettings'] = 1; }

		//admin can join private rooms without permission
		$avconfig['adminCanJoinPrivateRoomsWithoutPermission'] = 0;
		if (user_access("avchat3 - admin/moderator can join private rooms without permission")) { $avconfig['adminCanJoinPrivateRoomsWithoutPermission'] = 1; }

		//admin can view ips
		$avconfig['adminCanViewIps'] = 0;
		if (user_access("avchat3 - admin/moderator can view IPs")) { $avconfig['adminCanViewIps'] = 1; }
	}

	/**
	 * User roles settings
	 */
//get the biggest role
	$userRole = max(array_keys($user->roles));

//the maximum number of audio, video or audio + video streams a user can view at any given time
	$avconfig['maxStreams'] = (int)variable_get($userRole.'_avchat3_streams_limit',4);

//the maximum number of rooms one user can be in
	$avconfig["maxRoomsOneCanBeIn"] = (int)variable_get($userRole.'_avchat3_maxrooms_one_can_be_in', 4);

//a text message can not be longer than this value
	$avconfig['textChatCharLimit'] = (int)variable_get($userRole.'_avchat3_textlimit', 200);

//badge url
	$avconfig['profileCountryFlag'] = variable_get($userRole.'_avchat3_badge_url', '');

//users can view only these rooms
	$avconfig['showOnlyRooms'] = variable_get($userRole.'_avchat3_view_only_these_rooms', '');

//users can view only these rooms
	$avconfig['showOnlyRooms'] = variable_get($userRole.'_avchat3_view_only_these_rooms', '');

//drop in these rooms
	$avconfig['dropInRoom'] = variable_get($userRole.'_avchat3_drop_in_these_rooms', '');

//drop in these rooms
	$avconfig['joinRoomsEnabled'] = variable_get($userRole.'_avchat3_join_other_rooms', '1');

	if ($user->uid > 0) {
		$avconfig['enableOtherAccountOptions'] = 0;
		$avconfig['enableRegisterTab'] = 0;
		$avconfig['username'] = $user->name;

		//profile picture
		$avconfig['thumbnailUrl'] = 'none';
		if($user->picture != '' && $user->picture != '0'){
			$avconfig['thumbnailUrl'] = file_create_url(file_load($user->picture)->uri);
		}

		//profile URL
		$avconfig['profileKey'] = 'siteId';
		$avconfig['siteId'] = $user->uid;

		if ($conf['clean_url']) {
			$avconfig['profileUrl'] = $base_url.'/user/';
		} else {
			$avconfig['profileUrl'] = $base_url.'/?q=user/';
		}

	} else {
		$avconfig['username'] = 'Guest_'.rand(1,999);
		$avconfig['profileUrl'] = '';
		$avconfig['thumbnailUrl'] = '';
	}