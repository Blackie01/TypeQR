import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  qrData: string = '';
  downloadUrl!: boolean;
  qrOutput: string = '';
  downloadButton: string = ''
  downloadLink!: string|undefined

  generateQRCode() {

    if (this.qrData) {
      this.qrOutput = this.qrData
      this.downloadUrl = true;
      // Convert the URL to a data URL (base64 encoded image)
      const qrDataURL = 'data:image/png;base64,' + this.getBase64Image(document.querySelector('qrcode canvas') as HTMLCanvasElement);
      // Create a temporary anchor element to initiate the download
      const tempLink = document.createElement('a');
      tempLink.href = qrDataURL;
      document.body.appendChild(tempLink);

      // Store the data URL to show the download link
      this.downloadLink = qrDataURL
    }
   
  }

  // Helper function to get the base64 encoded image from the canvas
  private getBase64Image(canvas: HTMLCanvasElement): string {
    const dataURL = canvas.toDataURL('image/png');
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
  }
}
