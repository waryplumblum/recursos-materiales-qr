import { Component } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  //VARIABLES DEL QR


  constructor(private barcodeScanner: BarcodeScanner) {}

  scanBarcode() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     // this.matchProduct(barcodeData.text);
     }).catch(err => {
         console.log('Error', err);
     });
  }

  /*checkManually() {
    this.matchProduct(this.prudctnumber);
  }*/

  /*matchProduct(productnumber: string) {
    this.sqlite.create({
      name: 'pricechecker.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM product WHERE plu = ? OR barcode = ?', [productnumber, productnumber])
      .then(res => {
        if (res.rows.length > 0) {
          console.log(res.rows.item);
          console.log(res.rows.item(0));
          this.plu = res.rows.item(0).plu;
          this.barcode = res.rows.item(0).barcode;
          this.name = res.rows.item(0).prodname;
          this.description = res.rows.item(0).proddesc;
          this.price = res.rows.item(0).price;
        } else {
          console.log('product not found!');
        }
      })
      .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }*/

  clearForm() {
    /*this.plu = '';
    this.barcode = '';
    this.name = '';
    this.description = '';
    this.price = null;
    this.productnumber = '';*/
  }

}
