
import { Component } from '@angular/core';
import { MIME_TYPE_MAP } from '../../models/mime-types';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  acceptedFileTypes: string;

  constructor() {
    this.acceptedFileTypes = Object.keys(MIME_TYPE_MAP).join(',');
  }

  onFileSelected(event: any): void {
    const files: FileList = event.target.files;
    if (files.length > 0) {
      this.selectedFile = files[0];

      const reader = new FileReader();
      reader.onload = (e:any) => {
        // Dosya içeriğine buradan e.target.result üzerinden erişebilirsiniz.
        // Örneğin, bir resim önizlemesi gösterebilir veya diğer işlemleri gerçekleştirebilirsiniz.
        console.log('Dosya içeriği:', e.target.result);
      };

      reader.readAsDataURL(this.selectedFile);
    }
  }

  onSubmit(): void {
    if (this.selectedFile) {
      const fileType = this.selectedFile.type;
      const fileExtension = MIME_TYPE_MAP[fileType];
      
      if (!fileExtension) {
        console.error('Desteklenmeyen dosya türü!');
        return;
      }

      const fileName = `dosya_${new Date().getTime()}.${fileExtension}`;
      const filePath = `/assets/${fileName}`;

      let formData=new FormData();
      formData.set("name",filePath);
      formData.append("file",this.selectedFile);
      console.log(this.selectedFile)
      


      console.log(`Dosya kaydedildi: ${filePath}`);
    } else {
      console.error('Dosya seçilmedi!');
    }
  }
}








  // selectedFile: File | null = null;
  // acceptedFileTypes: string;

  // constructor() {
  //   this.acceptedFileTypes = Object.keys(MIME_TYPE_MAP).join(',');
  // }

  // onFileSelected(event: any): void {
  //   const files: FileList = event.target.files;
  //   if (files.length > 0) {
  //     this.selectedFile = files[0];
  //   }
  // }

  // onSubmit(): void {
  //   if (this.selectedFile) {
  //     const fileType = this.selectedFile.type;
  //     const fileExtension = MIME_TYPE_MAP[fileType];
      
  //     if (!fileExtension) {
  //       console.error('Desteklenmeyen dosya türü!');
  //       return;
  //     }


  //     const fileName = `dosya_${new Date().getTime()}.${fileExtension}`;
  //     const filePath = `assets/${fileName}`;


    //  let formData=new FormData();
    //  formData.set("name",filePath);
    //  formData.append("file",this.selectedFile);
    //  console.log(this.selectedFile)
      

  //     console.log(`Dosya kaydedildi: ${filePath}`);
  //   } else {
  //     console.error('Dosya seçilmedi!');
  //   }
  // }




      // Bu noktada dosyayı kaydetmek için gerekli işlemleri gerçekleştirebilirsiniz.
      // Örneğin, dosyayı bir FormData nesnesine ekleyerek bir HTTP isteği gönderebilirsiniz.