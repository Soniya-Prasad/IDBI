<?php
/**
 * @file
 * custom_slideshow.pages_default.inc
 */

/**
 * Implements hook_default_page_manager_handlers().
 */
function custom_slideshow_default_page_manager_handlers() {
  $export = array();

  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'node_view__panel_context_05b88585-fff8-4e1b-a587-175504c7e6cf';
  $handler->task = 'node_view';
  $handler->subtask = '';
  $handler->handler = 'panel_context';
  $handler->weight = -4;
  $handler->conf = array(
    'title' => 'Slideshow Detail Page',
    'no_blocks' => 1,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => 'inner-page',
    'css_id' => 'slideshow-detail-page',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'access' => array(
      'plugins' => array(
        4 => array(
          'name' => 'node_type',
          'settings' => array(
            'type' => array(
              'slideshow' => 'slideshow',
            ),
          ),
          'context' => 'argument_entity_id:node_1',
          'not' => FALSE,
        ),
      ),
      'logic' => 'or',
    ),
  );
  $display = new panels_display();
  $display->layout = 'onecol';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'middle' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = '1841474c-9827-4975-8a10-3623235df0c6';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-18aea4fa-826a-4378-8cc1-527a5cb0d897';
    $pane->panel = 'middle';
    $pane->type = 'views';
    $pane->subtype = 'slideshow';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_pager_settings' => 0,
      'use_pager' => 0,
      'nodes_per_page' => '5',
      'pager_id' => '0',
      'offset' => '0',
      'more_link' => 0,
      'feed_icons' => 0,
      'panel_args' => 1,
      'link_to_view' => 0,
      'args' => '',
      'url' => '',
      'display' => 'block',
      'context' => array(
        0 => '',
      ),
      'override_title' => 1,
      'override_title_text' => '<none>',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => 'slideshow-main',
      'css_class' => '',
    );
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '18aea4fa-826a-4378-8cc1-527a5cb0d897';
    $display->content['new-18aea4fa-826a-4378-8cc1-527a5cb0d897'] = $pane;
    $display->panels['middle'][0] = 'new-18aea4fa-826a-4378-8cc1-527a5cb0d897';
    $pane = new stdClass();
    $pane->pid = 'new-62aaa2d7-d4be-4697-8028-11f85a85e1fc';
    $pane->panel = 'middle';
    $pane->type = 'views';
    $pane->subtype = 'slideshow';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_pager_settings' => 0,
      'use_pager' => 0,
      'nodes_per_page' => '0',
      'pager_id' => '0',
      'offset' => '0',
      'more_link' => 0,
      'feed_icons' => 0,
      'panel_args' => 1,
      'link_to_view' => 0,
      'args' => '',
      'url' => '',
      'display' => 'block_1',
      'context' => array(
        0 => '',
      ),
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => 'related-slideshow-list',
      'css_class' => '',
    );
    $pane->extras = array();
    $pane->position = 1;
    $pane->locks = array();
    $pane->uuid = '62aaa2d7-d4be-4697-8028-11f85a85e1fc';
    $display->content['new-62aaa2d7-d4be-4697-8028-11f85a85e1fc'] = $pane;
    $display->panels['middle'][1] = 'new-62aaa2d7-d4be-4697-8028-11f85a85e1fc';
  $display->hide_title = PANELS_TITLE_NONE;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $export['node_view__panel_context_05b88585-fff8-4e1b-a587-175504c7e6cf'] = $handler;

  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'node_view__panel_context_4570f25a-0d79-45ac-a84e-d041724d1ef7';
  $handler->task = 'node_view';
  $handler->subtask = '';
  $handler->handler = 'panel_context';
  $handler->weight = -3;
  $handler->conf = array(
    'title' => 'Slideshow Listing Page',
    'no_blocks' => 1,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => 'inner-page',
    'css_id' => 'slideshow-detail-page',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'access' => array(
      'plugins' => array(
        0 => array(
          'name' => 'path_visibility',
          'settings' => array(
            'visibility_setting' => '1',
            'paths' => 'slideshows',
          ),
          'context' => 'empty',
          'not' => FALSE,
        ),
      ),
      'logic' => 'or',
    ),
  );
  $display = new panels_display();
  $display->layout = 'onecol';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'middle' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = '0daf013c-48ad-4945-aeb7-ae95a4add230';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-51a35583-b939-40b5-8a80-39f7659d6c4c';
    $pane->panel = 'middle';
    $pane->type = 'views';
    $pane->subtype = 'slideshow';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_pager_settings' => 0,
      'use_pager' => 0,
      'nodes_per_page' => '1',
      'pager_id' => '0',
      'offset' => '0',
      'more_link' => 0,
      'feed_icons' => 0,
      'panel_args' => 0,
      'link_to_view' => 0,
      'args' => '',
      'url' => '',
      'display' => 'block_2',
      'override_title' => 1,
      'override_title_text' => '<none>',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => 'slideshow-main',
      'css_class' => '',
    );
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '51a35583-b939-40b5-8a80-39f7659d6c4c';
    $display->content['new-51a35583-b939-40b5-8a80-39f7659d6c4c'] = $pane;
    $display->panels['middle'][0] = 'new-51a35583-b939-40b5-8a80-39f7659d6c4c';
    $pane = new stdClass();
    $pane->pid = 'new-cac2a00f-b05c-45bf-89be-efdcd4b7080c';
    $pane->panel = 'middle';
    $pane->type = 'views';
    $pane->subtype = 'slideshow';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_pager_settings' => 0,
      'use_pager' => 0,
      'nodes_per_page' => '0',
      'pager_id' => '0',
      'offset' => '1',
      'more_link' => 0,
      'feed_icons' => 0,
      'panel_args' => 0,
      'link_to_view' => 0,
      'args' => '',
      'url' => '',
      'display' => 'block_3',
      'override_title' => 0,
      'override_title_text' => '<none>',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => 'related-slideshow-list',
      'css_class' => '',
    );
    $pane->extras = array();
    $pane->position = 1;
    $pane->locks = array();
    $pane->uuid = 'cac2a00f-b05c-45bf-89be-efdcd4b7080c';
    $display->content['new-cac2a00f-b05c-45bf-89be-efdcd4b7080c'] = $pane;
    $display->panels['middle'][1] = 'new-cac2a00f-b05c-45bf-89be-efdcd4b7080c';
  $display->hide_title = PANELS_TITLE_NONE;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $export['node_view__panel_context_4570f25a-0d79-45ac-a84e-d041724d1ef7'] = $handler;

  return $export;
}
