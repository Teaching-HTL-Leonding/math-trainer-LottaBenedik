import { Component, OnInit } from '@angular/core';
import { LogicService } from '../logic.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  constructor(public settings:LogicService) { }

  public atLeastOneOperator():boolean{
    return this.settings.additionSelected || this.settings.substractionSelected || this.settings.multiplicationSelected || this.settings.divisionSelected;
  }

}
