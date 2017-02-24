<?php

/**
 * @file
 * Include file for Custom SOWP portal
 */
drupal_get_path('module', 'unfpa_global_dashboard');

/**
 * Class CSP is used for custom SOWP Portal functionality
 */
class CSP {

  public function get_json_data() {

    $file_path = drupal_realpath('public://') . '/decomposition/files/graph_settings.json';
    //This function is used to read the json contents of a file.
    $graph_data = file_get_contents($file_path, true);
    $graph_data = str_replace("var mainObj =", "", $graph_data);
    $datajson = array();
    $datajson = json_decode($graph_data, true);
    return $datajson;
  }

  public function db_connect($indicator_id = array()) {

    // print_r($indicator_id);
    //$ind_name = $obj->db_connect($indicator_id);
    $indicator_names = array();
    $indicator_name_result = db_select('ut_indicator_en', 'ut', array('target' => 'import'))
      ->fields('ut')
      ->condition('Indicator_NId', $indicator_id, 'IN')
      ->execute();
    //print_r($indicator_name_result);
    while ($obj = $indicator_name_result->fetchObject()) {

      $indicator_names[] = $obj->Indicator_Name;
    }
    return $indicator_names;
  }

  public function GetFigureChart($area_id, $ind_ids, $sg_ids, $unit_id, $tp_id) {
    $obj = new CSP();
    //$this->unbindModel(array('belongsTo' => array('Ar', 'IC','SV')));
    $datajson = $obj->get_json_data();
    $indorderDetails = $datajson['datamodel_fig_chart']['ind_NID']; //1
    $indorderDetailsExp = explode(',', $indorderDetails);
    $indorder1 = $indorderDetailsExp[0]; //1
    $indorder2 = $indorderDetailsExp[1]; //17
//        $condition =  array("Data.Area_NId"=>$area_id, "Data.Indicator_NId"=>$ind_ids, "Data.Subgroup_Val_NId"=>$sg_ids, "Data.Unit_NId"=>$unit_id, "Data.TimePeriod_NId"=>$tp_id);
//
//		$data = $this->find('all', array('fields' => array('Data.Data_Value', 'Data.Indicator_NId', 'Data.Subgroup_Val_NId', 'Data.Unit_NId','Data.TimePeriod_NId','TmPeriod.TimePeriod','Ind.Indicator_Name','IF(Data.Indicator_NId='.$indorder1.',3,IF(Data.Indicator_NId='.$indorder2.',2,0)) as ordr'), 'conditions' =>$condition,'order'=>array('ordr'=>'desc', 'Data.Indicator_NId'=>'desc')));

    $query = db_select('ut_data', 'data', array('target' => 'import'));

    $query->join('ut_timeperiod', 'tmperiod', 'data.TimePeriod_NId = tmperiod.TimePeriod_NId');
    $query->join('ut_indicator_en', 'ind', 'data.Indicator_NId = ind.Indicator_NId');
    $query->fields('data', array('Data_Value', 'Indicator_NId', 'Subgroup_Val_NId', 'Unit_NId', 'TimePeriod_NId'))
      ->fields('tmperiod', array('TimePeriod'))
      ->fields('ind', array('Indicator_Name'))
      ->condition('data.Indicator_NId', $ind_ids, 'IN')
      ->condition('data.Area_NId', $area_id, '=')
      ->condition('data.Subgroup_Val_NId', $sg_ids, 'IN')
      ->condition('data.Unit_NId', $unit_id, 'IN')
      ->condition('data.TimePeriod_NId', $tp_id, 'IN')
      ->orderBy('data.Indicator_NId', 'DESC');
    $result = $query->execute();

    $values = array();
    $i = 0;
    foreach ($result as $obj_result) {

      $values[$i]['Data']['Data_Value'] = $obj_result->Data_Value;
      $values[$i]['Data']['Indicator_NId'] = $obj_result->Indicator_NId;
      $values[$i]['Data']['Subgroup_Val_NId'] = $obj_result->Subgroup_Val_NId;
      $values[$i]['Data']['TimePeriod_NId'] = $obj_result->TimePeriod_NId;
      $values[$i]['Data']['Unit_NId'] = $obj_result->Unit_NId;
      $values[$i]['Data']['Subgroup_Val_NId'] = $obj_result->Subgroup_Val_NId;
      $values[$i]['Ind']['Indicator_Name'] = $obj_result->Indicator_Name;
      $values[$i]['TmPeriod']['TimePeriod'] = $obj_result->TimePeriod;
      ++$i;
    }

    return $values;
  }

}
