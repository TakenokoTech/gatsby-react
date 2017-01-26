<?php
function renderXML(){

  $dom = new DomDocument('1.0');  // DOMを作成
  $dom->encoding = "UTF-8"; // 文字コードをUTF-8に
  $dom->formatOutput = true; // 出力XMLを整形(改行,タブ)する

  $Article = $dom->appendChild($dom->createElement('Article'));
  $Title = $Article->appendChild($dom->createElement('Title'));
  $Title->appendChild($dom->createTextNode('タイトル'));

  $Date = $Article->appendChild($dom->createElement('Date'));
  $Date->appendChild($dom->createTextNode('じかん'));

  return $dom->saveXML();
}
