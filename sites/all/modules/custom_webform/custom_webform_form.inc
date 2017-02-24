<?php

function custom_webform_form($form, &$form_state) {

  // Display page 2 if $form_state['page_num'] == 2
  if (!empty($form_state['page_num']) && $form_state['page_num'] == 2) {
    return custom_webform_form_page_two($form, $form_state);
  }

  // Otherwise we build page 1.
  $form_state['page_num'] = 1;

  $form['description'] = array(
    '#type' => 'item',
    '#title' => t('PAN/Aadhaar Form'),
  );

  
  $form['full_name'] = array(
    '#type' => 'textfield',
    '#title' => 'FULL NAME',
     '#required' => TRUE,
    '#size' => 60,
    '#maxlength' => 60,
  
  );
 $form['e_mail'] = array(
    '#type' => 'textfield',
    '#title' => 'Email ID',
    '#size' => 60,
    '#maxlength' => 60,    
  );
 $form['contact'] = array(
    '#type' => 'textfield',
    '#title' => 'Contact NO',
    '#size' => 11,
    '#maxlength' => 11,    
  );
 $form['state'] = array(
    '#type' => 'select',
    '#title' => 'STATE',
     '#options' => array(
          0 => t('MAHARASTRA'),
          1 => t('GUJRAT'),
       ),   
  );
 $form['city'] = array(
    '#type' => 'select',
    '#title' => 'CITY',
     '#options' => array(
          0 => t('MUMBAI'),
          1 => t('GHANDINAGAR'),
       ),   
  );
 $form['interested'] = array(
    '#type' => 'select',
    '#title' => 'INTERESTED IN',
     '#options' => array(
          0 => t('ALL'),
          1 => t('NONE'),
       ),   
  );
 $form['accept'] = array(
    '#type' => 'checkboxes',
    '#required' => TRUE,
    '#options' => drupal_map_assoc(array('I accept the Term & Conditions')),
    '#title' => '',
  ); 
   $form['next'] = array(
    '#type' => 'submit',
    '#value' => 'Next',
    '#submit' => array('custom_webform_form_next_submit'),
//    '#validate' => array('custom_webform_form_next_validate'),
  );
  
  return $form;
}

/**
 * Returns the form for the second page of custom_webform_form().
 */
function custom_webform_form_page_two($form, &$form_state) {
  $form['description'] = array(
    '#type' => 'item',
    '#title' => t(''),
  );
  $form['pan'] = array(
    '#type' => 'textfield',
    '#title' => 'PERMANENT ACCOUNT NO.',
    '#size' => 10,
    '#maxlength' => 10,
    '#required' => TRUE,
  );  
  
  $form['aadhaar'] = array(
    '#type' => 'textfield',
    '#title' => 'AADHAAR',
    '#size' => 10,
    '#maxlength' => 10,
    '#required' => TRUE,
  );  
  $form['aggree_statement'] =array(
     '#type' => 'checkboxes',
    '#title' => '',
    '#options' => drupal_map_assoc(array('I herebt agree to authenticate myself using my Aadhaar number')),
    );
   
  $form['next'] = array(
    '#type' => 'submit',
    '#value' => t('Validate Aadhaar'),
     '#submit' => array('custom_webform_form_page_two_submit'),
  );

  $form['back'] = array(
    '#type' => 'submit',
    '#value' => t('Back'),
    '#submit' => array('custom_webform_form_page_two_back'),
    // We won't bother validating the required 'color' field, since they
    // have to come back to this page to submit anyway.
    '#limit_validation_errors' => array(),
  );
  return $form;
}


/**
 * Validate handler for the next button on first page.
 */
function custom_webform_form_next_validate($form, &$form_state) {
  $year_of_birth = $form_state['values']['year_of_birth'];
  if ($year_of_birth && ($year_of_birth < 1900 || $year_of_birth > 2000)) {
    form_set_error('year_of_birth', t('Enter a year between 1900 and 2000.'));
  }
}

/**
 * Submit handler for custom_webform_form() next button.
 *
 * Capture the values from page one and store them away so they can be used
 * at final submit time.
 */
function custom_webform_form_next_submit($form, &$form_state) {

  // Values are saved for each page.
  // to carry forward to subsequent pages in the form.
  // and we tell FAPI to rebuild the form.
  $form_state['page_values'][1] = $form_state['values'];

  if (!empty($form_state['page_values'][2])) {
    $form_state['values'] = $form_state['page_values'][2];
  }

  // When form rebuilds, it will look at this to figure which page to build.
  $form_state['page_num'] = 2;
  $form_state['rebuild'] = TRUE;
}

/**
 * Back button handler submit handler.
 *
 * Since #limit_validation_errors = array() is set, values from page 2
 * will be discarded. We load the page 1 values instead.
 */
function custom_webform_form_page_two_back($form, &$form_state) {
  $form_state['values'] = $form_state['page_values'][1];
  $form_state['page_num'] = 1;
  $form_state['rebuild'] = TRUE;
}

/**
 * The page 2 submit handler.
 *
 * This is the final submit handler. Gather all the data together and output
 * it in a drupal_set_message().
 */
function custom_webform_form_page_two_submit($form, &$form_state) {
  // Normally, some code would go here to alter the database with the data
  // collected from the form. Instead sets a message with drupal_set_message()
  // to validate that the code worked.
  $page_one_values = $form_state['page_values'][1];
  drupal_set_message(t('The form has been submitted'));

}
?>
