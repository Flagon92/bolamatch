import { Component, OnInit, HostBinding, HostListener, Input } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-popup-menu',
  standalone: true,
  imports: [],
  templateUrl: './popup-menu.component.html',
  styleUrl: './popup-menu.component.css'
})
export class PopupMenuComponent implements OnInit {

  constructor(public sharedService: SharedService) { }

  @HostBinding("style.top") y = "0px"
  @HostBinding("style.left") x = "0px"
  @HostBinding("style.visibility") visibility = "hidden"
  @Input() @HostBinding("style.width") width = "200px"
 
  ngOnInit() {
    this.sharedService.setMenu(this);
  }
 
  open(e:MouseEvent) {
    this.x = `${e.pageX}px`
    this.y = `${e.pageY}px`
 
    this.visibility = "visible"
 
    e.stopPropagation()
  }
 
  close() {
    this.visibility = "hidden"
  }
 
  @HostListener('document:click')
  public onDocumentClick() {
    if (this.visibility === "visible") {
      this.close()
    }
  }

}
