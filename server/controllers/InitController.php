<?php

require_once("BaseController.php");

class InitController extends BaseController {

    public function index () {
        // =======================================================
        /*// echo '<?xml version="1.0" encoding="UTF-8"?>';
        // echo '<ExportData>';
        // echo('<table>');
        // foreach ($this->model->index() as $row) {
        //     echo("<tr>");
        //         echo("<td>".$row["date"]."</td>");
        //         echo("<td>".$row["title"]."</td>");
        //         echo("<td>".$row["category"]."</td>");
        //         echo("<td>".$row["description"]."</td>");
        //     echo("</tr>");
        // }
        // echo('</table>');
        // echo '</ExportData>';*/
        // =======================================================

        $json = array();
        foreach ($this->model->index() as $row) {
            $arr = array();
            array_push($arr, $row["date"]);
            array_push($arr, $row["title"]);
            array_push($arr, $row["category"]);
            array_push($arr, $row["description"]);
            array_push($json, $arr);
        }
        print_r( json_encode($json, JSON_PRETTY_PRINT) );
    }

}