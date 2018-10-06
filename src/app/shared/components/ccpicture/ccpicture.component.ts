import { Component, Input, OnInit } from '@angular/core';
import { ICCPicture } from '../../models/CCPicture/ICCPicture';
import { ICCPictureConfig } from '../../models/CCPicture/ICCPictureConfig';

@Component({
  selector: 'app-ccpicture',
  templateUrl: './ccpicture.component.html',
  styleUrls: ['./ccpicture.component.scss'],
})
export class CCPictureComponent implements ICCPicture {
  @Input() elementConfig: ICCPictureConfig;
  @Input() style: string;
  isLoaded: boolean;

}
